#!/usr/bin/env python3
"""Password-protect selected case studies with real encryption.

GitHub Pages is a static host, so a JavaScript "password prompt" alone would
leave the full text readable in view-source. This script instead encrypts the
case-study body with AES-256-GCM. The published HTML holds a deliberately
shell around the lock gate plus the ciphertext: the hero and meta strip
(client, role, industry and year are facts the owner already states publicly), one line saying the work is internal and not shown
publicly due to an NDA, a summary of the study's four parts — the problem,
what Lulamile did, the solution and the process — written only from facts the
owner already states publicly (see scripts/case_lock_content.py), the password
gate at the bottom of the page, and the previous/next
pager.
js/case-lock.js derives the key in the browser (PBKDF2-SHA256, 310 000
rounds) and swaps the whole shell for the decrypted body on a correct
passphrase. Nothing confidential is outside the ciphertext: only the
summary and already-public facts are public.

Usage, from the repository root:

    CASE_STUDY_PASSWORD='your passphrase' python3 scripts/lock_case_studies.py
    CASE_STUDY_PASSWORD='...' python3 scripts/lock_case_studies.py --unlock   # restore plaintext

Re-running is safe: a page that is already locked is decrypted with the given
passphrase first, so you can rotate the passphrase by running --unlock with the
old one, then the default mode with the new one. Run this AFTER
scripts/build_case_studies.py, which regenerates the plaintext pages.

To restyle the visible lock without touching the ciphertext (no passphrase
needed, and the salt and IV are left alone), run:

    python3 scripts/rebuild_case_lock_shell.py

Requires: pip install cryptography
"""
import argparse
import base64
import html
import json
import os
import pathlib
import re
import secrets
import sys

from case_lock_content import LOCK_CONTENT, PROCESS_STEPS, TRADEOFFS
from contact_lightbox import CONTACT_SECTION, strip_contact_lightbox, with_contact_lightbox

# Imported lazily: the markup helpers below (used by
# scripts/rebuild_case_lock_shell.py) work without the package installed.
def _aes():
    try:
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
    except ImportError:  # pragma: no cover
        sys.exit("The 'cryptography' package is required:  pip install cryptography")
    return hashes, AESGCM, PBKDF2HMAC

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "portfolio"
ITERATIONS = 310_000

# Pages that are only for people who have the passphrase.
#
# `client`, `industry` and `year` are facts the owner already states publicly;
# the write-ups themselves stay sealed under NDA. `neighbours` are the previous / next projects shown in the pager. They
# are public (they are plain case studies), so the locked pages keep the same
# previous / next footer as every other case study while the body is sealed.
LOCKED = {
    "doc-coal-stockpile-forecasting.html": {
        "title": "Coal stockpile forecasting",
        "client": "Eskom, via iOCO",
        "industry": "Energy",
        "year": "2026 \u2014 present",
        "neighbours": ("lula-gazette.html", "LulaGazette", "Legal intelligence · Civic technology",
                       "doc-compliance-ai-platform.html", "Compliance AI assistant",
                       "Old Mutual · AI assistant with cited answers"),
    },
    "doc-compliance-ai-platform.html": {
        "title": "Compliance AI assistant",
        "client": "Old Mutual, via iOCO",
        "industry": "Financial services",
        "year": "2026",
        "neighbours": ("doc-coal-stockpile-forecasting.html", "Coal stockpile forecasting",
                       "Eskom · Machine-learning decision support",
                       "doc-media-scanning-audit.html", "Media scanning for audit planning",
                       "AGSA · Media intelligence for audit planning"),
    },
    "doc-media-scanning-audit.html": {
        "title": "Media scanning for audit planning",
        "client": "Auditor-General South Africa (AGSA), via iOCO",
        "industry": "Public sector",
        "year": "2026 \u2014 present",
        "neighbours": ("doc-compliance-ai-platform.html", "Compliance AI assistant",
                       "Old Mutual · AI assistant with cited answers",
                       "doc-safety-statistics-workbook.html", "Safety statistics reference",
                       "Sasol · Safety-reporting reference"),
    },
    "doc-safety-statistics-workbook.html": {
        "title": "Safety statistics reference",
        "client": "Sasol, via iOCO",
        "industry": "Energy and chemicals",
        "year": "2023",
        "neighbours": ("doc-media-scanning-audit.html", "Media scanning for audit planning",
                       "AGSA · Media intelligence for audit planning",
                       "doc-chart-components.html", "Configurable chart components",
                       "Takeda · Dashboard visualisation components"),
    },
    "doc-chart-components.html": {
        "title": "Configurable chart components",
        "client": "Takeda Pharmaceuticals, via iOCO",
        "industry": "Pharmaceutical",
        "year": "2025 — 2026",
        "neighbours": ("doc-safety-statistics-workbook.html", "Safety statistics reference",
                       "Sasol · Safety-reporting reference",
                       "doc-timeline-view.html", "Configurable timeline view",
                       "Takeda · Product operations timeline"),
    },
    "doc-timeline-view.html": {
        "title": "Configurable timeline view",
        "client": "Takeda Pharmaceuticals, via iOCO",
        "industry": "Pharmaceutical",
        "year": "2025 — 2026",
        "neighbours": ("doc-chart-components.html", "Configurable chart components",
                       "Takeda · Dashboard visualisation components",
                       "doc-entrehive.html", "EntreHive",
                       "Mobile · Points-based app for entrepreneurs"),
    },
}

# Merge in the public summary for each sealed study (problem, what I did,
# solution, process) and the role title for each account. Keeping that content
# in scripts/case_lock_content.py documents where every line comes from;
# nothing below is written freehand.
for _name, _spec in LOCKED.items():
    _spec.update(LOCK_CONTENT.get(_name, {}))

START = '\t\t\t<div class="content clearfix">'
END = '\t\t\t<!-- Content End -->'
PUBLIC_DESCRIPTION = (
    "An internal project case study, not shown publicly due to an NDA. "
    "Ask Lulamile for access."
)
LOCK_SCRIPT = '\t<script src="../js/case-lock.js?v=2"></script>\n'


def derive_key(passphrase: str, salt: bytes) -> bytes:
    hashes, _, PBKDF2HMAC = _aes()
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=ITERATIONS)
    return kdf.derive(passphrase.encode("utf-8"))


def encrypt(plaintext: str, passphrase: str) -> dict:
    _, AESGCM, _ = _aes()
    salt = secrets.token_bytes(16)
    iv = secrets.token_bytes(12)
    key = derive_key(passphrase, salt)
    data = AESGCM(key).encrypt(iv, plaintext.encode("utf-8"), None)
    b64 = lambda b: base64.b64encode(b).decode("ascii")
    return {"salt": b64(salt), "iv": b64(iv), "iterations": ITERATIONS, "data": b64(data)}


def decrypt(meta: dict, data_b64: str, passphrase: str) -> str:
    _, AESGCM, _ = _aes()
    key = derive_key(passphrase, base64.b64decode(meta["salt"]))
    data = base64.b64decode(re.sub(r"\s+", "", data_b64))
    return AESGCM(key).decrypt(base64.b64decode(meta["iv"]), data, None).decode("utf-8")


LOCK_ICON = (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
    'stroke-linecap="round" stroke-linejoin="round">'
    '<rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'
    '<circle cx="12" cy="15.5" r="1.3" fill="currentColor" stroke="none"/></svg>'
)

def lock_meta_block(client, role, industry, year) -> str:
    """The meta strip. `role` is the engagement title for this account, so the
    page states what Lulamile actually did there rather than repeating one
    generic line across all six studies."""
    meta = (
        ("Client", client),
        ("Role", role),
        ("Industry", industry),
        ("Year", year),
    )
    items = "".join(
        f'<div class="pk-meta__item"><span class="pk-meta__label">{html.escape(k)}</span>'
        f'<span class="pk-meta__value">{html.escape(v)}</span></div>'
        for k, v in meta
    )
    return f'<div class="pk-meta" aria-label="Project details">{items}</div>'


def _esc(text: str) -> str:
    return html.escape(text, quote=False)


def _part(index: int, title: str, inner: str) -> str:
    return (
        '<article class="pk-lock-part">'
        f'<span class="pk-lock-part__num" aria-hidden="true">{index:02d}</span>'
        '<div class="pk-lock-part__body">'
        f'<h2 class="pk-lock-part__title">{_esc(title)}</h2>'
        f'{inner}</div></article>'
    )


def lock_summary(spec, name="") -> str:
    """The sealed study, in the four-part structure recruiters are told to look
    for (Superhive, "UX Design portfolio: Projects, structure, and what
    recruiters want to see" - see docs/research-case-study-structure.md):

        1. Context and stakes
        2. Role and boundaries   (what I did, what others did, seniority, timeline)
        3. Key decisions and trade-offs
        4. Outcome and evidence

    The delivery process sits between 3 and 4 at the owner's request, with its
    depth scaled to experience at the time.

    The same article covers NDA work directly: include the project, sanitise
    the sensitive detail, keep the focus on process, decisions and
    constraints. The detailed write-up stays inside the ciphertext.
    """
    parts, n = [], 0

    def add(title, inner):
        nonlocal n
        n += 1
        parts.append(_part(n, title, inner))

    if spec.get("problem"):
        add("Context and stakes", f'<p class="pk-lock-part__copy">{_esc(spec["problem"])}</p>')

    did, scope, timeline = spec.get("did") or [], spec.get("scope"), spec.get("timeline")
    if did:
        inner = f'<p class="pk-lock-part__timeline">{_esc(timeline)}</p>' if timeline else ""
        bullets = "".join(f"<li>{_esc(line)}</li>" for line in did)
        inner += f'<ul class="pk-lock-part__list">{bullets}</ul>'
        if scope:
            # Names the other teams and marks the edge of the owner's
            # responsibility, so the page never reads as one person alone.
            inner += f'<p class="pk-lock-part__scope"><strong>Team and scope:</strong> {_esc(scope)}</p>'
        add("Role and boundaries", inner)

    if spec.get("solution"):
        rows = ""
        for head, detail in spec["solution"]:
            tradeoff = TRADEOFFS.get((name, head))
            rows += f'<li><strong>{_esc(head)}</strong><span>{_esc(detail)}</span>'
            if tradeoff:
                rows += f'<span class="pk-lock-part__tradeoff">Trade-off: {_esc(tradeoff)}</span>'
            rows += "</li>"
        add("Key decisions and trade-offs", f'<ul class="pk-lock-part__decisions">{rows}</ul>')

    process = spec.get("process") or {}
    if process:
        steps = "".join(
            f'<li><strong>{_esc(step)}</strong>'
            + (f"<span>{_esc(process[step])}</span>" if process.get(step) else "")
            + "</li>"
            for step in PROCESS_STEPS if step in process
        )
        add("How I got there", f'<ol class="pk-lock-part__process">{steps}</ol>')

    if spec.get("outcome"):
        add("Outcome and evidence", f'<p class="pk-lock-part__copy">{_esc(spec["outcome"])}</p>')

    return f'<div class="pk-lock-summary">{"".join(parts)}</div>'


def lock_pagination(neighbours) -> str:
    if not neighbours:
        return ""
    prev_file, prev_title, prev_cat, next_file, next_title, next_cat = neighbours

    def item(href, title, category, direction):
        return (
            f'<a class="tlc-project-pagination__item" href="{href}">'
            '<span class="tlc-project-pagination__content">'
            f'<span class="tlc-project-pagination__direction">{direction}</span>'
            f'<strong>{html.escape(title, quote=False)}</strong>'
            f'<span class="tlc-project-pagination__category">{html.escape(category, quote=False)}</span>'
            '</span></a>'
        )

    return (
        '<nav class="tlc-project-pagination tlc-project-pagination--sealed" aria-label="More projects">'
        + item(prev_file, prev_title, prev_cat, "\u2190 Previous project")
        + item(next_file, next_title, next_cat, "Next project \u2192")
        + "</nav>\n"
    )


def lock_shell(title: str, neighbours, client=None, industry=None, year=None, spec=None, name="") -> str:
    """The visible page while a study is locked — deliberately short.

    Structure: the standard hero and meta strip (the client, the role title
    for that account, industry and year — all already stated publicly by the
    owner), one line saying the work is internal and not shown
    publicly due to an NDA, a summary of the four parts of the study (the
    problem, what was done, the solution and the process), and the password
    gate at the bottom of the page. js/case-lock.js replaces the whole
    .pk-lock-shell with the decrypted body once the passphrase is accepted.

    The summary stays at a non-confidential level: no client screens, data or
    figures, and no outcome claims. The detail stays in the ciphertext.
    """
    spec = spec or {}
    client = client or "Confidential client engagement"
    industry = industry or "Anonymised \u2014 ask me"
    year = year or "\u2014"
    role = spec.get("role") or "Product design and UI development, via iOCO"
    return (
        '\t\t\t<div class="pk-lock-shell" data-case-lock>\n'
        '\t\t\t\t<section class="pk-hero" aria-labelledby="case-lock-title">\n'
        '\t\t\t\t\t<div class="pk-shell pk-hero__grid">\n'
        '\t\t\t\t\t\t<div>\n'
        '\t\t\t\t\t\t\t<p class="pk-eyebrow">Internal project</p>\n'
        f'\t\t\t\t\t\t\t<h1 id="case-lock-title" class="pk-display pk-display--name">{html.escape(title, quote=False)}</h1>\n'
        '\t\t\t\t\t\t\t<p class="pk-hero__tagline">Not shown publicly due to an NDA.'
        '<em class="pk-accent"> Opens with a password.</em></p>\n'
        '\t\t\t\t\t\t\t<a class="pk-scrollcue" href="#protected"><span>Unlock below</span>'
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg></a>\n'
        '\t\t\t\t\t\t</div>\n'
        '\t\t\t\t\t\t<div class="pk-hero__visual pk-lock-visual" aria-hidden="true">\n'
        f'\t\t\t\t\t\t\t<div class="pk-lock-visual__card">{LOCK_ICON}'
        '<span>Internal · NDA</span></div>\n'
        '\t\t\t\t\t\t</div>\n'
        '\t\t\t\t\t</div>\n'
        f'\t\t\t\t\t<div class="pk-shell">{lock_meta_block(client, role, industry, year)}</div>\n'
        '\t\t\t\t</section>\n'
        '\t\t\t\t<section class="pk-section pk-section--tight pk-lead-section" id="lead">\n'
        '\t\t\t\t\t<div class="pk-shell"><p class="pk-lead">This is internal project work, delivered '
        'under a confidentiality agreement, so the full write-up is not shown publicly. '
        'What follows is the summary I can share \u2014 the problem, what I was responsible for, the '
        'solution and how I got there. The detailed write-up, the screens and the figures open with '
        'the password at the bottom of this page.</p></div>\n'
        '\t\t\t\t</section>\n'
        '\t\t\t\t<section class="pk-section" id="outline">\n'
        '\t\t\t\t\t<div class="pk-shell">\n'
        '\t\t\t\t\t\t<p class="pk-eyebrow">What the study covers</p>\n'
        f'\t\t\t\t\t\t{lock_summary(spec, name)}\n'
        '\t\t\t\t\t\t<p class="pk-disclaimer">Client screens, source documents and project data stay in the encrypted write-up. '
        'This public summary does not report measured outcomes.</p>\n'
        '\t\t\t\t\t</div>\n'
        '\t\t\t\t</section>\n'
        '\t\t\t\t<section class="pk-section pk-strategy" id="protected">\n'
        '\t\t\t\t\t<div class="pk-shell">\n'
        '\t\t\t\t\t\t<div class="pk-lock pk-lock--solo">\n'
        f'\t\t\t\t\t\t\t<div class="pk-lock__icon" aria-hidden="true">{LOCK_ICON}</div>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__eyebrow">Password required</p>\n'
        f'\t\t\t\t\t\t\t<h2 class="pk-lock__title">{html.escape(title, quote=False)}</h2>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__copy">The write-up is encrypted in this page. Enter the '
        'password and the full case study opens right here.</p>\n'
        '\t\t\t\t\t\t\t<form class="pk-lock__form" autocomplete="off" novalidate>\n'
        '\t\t\t\t\t\t\t\t<label class="sr-only" for="case-lock-password">Password</label>\n'
        '\t\t\t\t\t\t\t\t<div class="pk-lock__field"><input id="case-lock-password" type="password" '
        'name="password" placeholder="Password" autocapitalize="off" autocorrect="off" spellcheck="false" required></div>\n'
        '\t\t\t\t\t\t\t\t<button class="pk-lock__submit" type="submit">Unlock case study</button>\n'
        '\t\t\t\t\t\t\t\t<p class="pk-lock__message" data-lock-message aria-live="polite"></p>\n'
        '\t\t\t\t\t\t\t</form>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__foot">Don\u2019t have a password? '
        '<a href="mailto:mkhungela.l@gmail.com?subject=Access%20to%20a%20protected%20case%20study">Email Lulamile</a> '
        'and say which study you would like to read.</p>\n'
        '\t\t\t\t\t\t</div>\n'
        '\t\t\t\t\t</div>\n'
        '\t\t\t\t</section>\n'
        + lock_pagination(neighbours) +
        '\t\t\t</div>\n'
    )


def lock_body(title: str, payload_script: str, neighbours=None, spec=None, name="") -> str:
    """Everything between <div class="content clearfix"> and <!-- Content End -->
    on a locked page: the visible shell, the ciphertext, then the contact modal.

    The modal opened by the header's "Contact me" button sits outside
    .pk-lock-shell, which js/case-lock.js swaps for the decrypted body, so the
    button works before and after the study is unlocked.
    """
    spec = spec or {}
    shell = lock_shell(title, neighbours, spec.get("client"), spec.get("industry"),
                       spec.get("year"), spec, name)
    return shell + "\t\t\t\t" + payload_script + "\n" + CONTACT_SECTION


def lock_markup(title: str, payload: dict, neighbours=None, spec=None, name="") -> str:
    wrapped = "\n".join(payload["data"][i:i + 120] for i in range(0, len(payload["data"]), 120))
    meta = html.escape(json.dumps({k: payload[k] for k in ("salt", "iv", "iterations")}), quote=True)
    script = f'<script id="case-lock-payload" type="text/plain" data-meta="{meta}">\n{wrapped}\n\t\t\t\t</script>'
    return lock_body(title, script, neighbours, spec, name)


def split(src: str):
    i = src.index(START) + len(START) + 1  # keep the newline after the opening div
    j = src.index(END)
    return src[:i], src[i:j], src[j:]


def current_plaintext(body: str, passphrase: str) -> str:
    """Return the plaintext body, decrypting if the page is already locked."""
    m = re.search(r'<script id="case-lock-payload" type="text/plain" data-meta="([^"]*)">(.*?)</script>', body, re.S)
    if not m:
        return body
    meta = json.loads(html.unescape(m.group(1)))
    try:
        return decrypt(meta, m.group(2), passphrase)
    except Exception:
        sys.exit("Could not decrypt an already-locked page with that passphrase. "
                 "Run scripts/build_case_studies.py to regenerate it, or use the previous passphrase.")


def set_meta(prefix: str, description: str) -> str:
    desc = html.escape(description, quote=True)
    prefix = re.sub(r'(<meta name="description" content=")[^"]*(")', rf'\g<1>{desc}\2', prefix, count=1)
    prefix = re.sub(r'(<meta property="og:description" content=")[^"]*(")', rf'\g<1>{desc}\2', prefix, count=1)
    prefix = re.sub(r'(<meta name="twitter:description" content=")[^"]*(")', rf'\g<1>{desc}\2', prefix, count=1)
    if 'name="robots"' not in prefix and description == PUBLIC_DESCRIPTION:
        prefix = prefix.replace('<meta name="theme-color"', '<meta name="robots" content="noindex, nofollow">\n\t<meta name="theme-color"', 1)
    if description == PUBLIC_DESCRIPTION:
        prefix = prefix.replace('<html lang="en">', '<html lang="en" class="is-case-locked">', 1)
    else:
        prefix = prefix.replace('<meta name="robots" content="noindex, nofollow">\n\t', '', 1)
        prefix = prefix.replace('<html lang="en" class="is-case-locked">', '<html lang="en">', 1)
    return prefix


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--unlock", action="store_true", help="restore the plaintext body instead of encrypting")
    args = ap.parse_args()

    passphrase = os.environ.get("CASE_STUDY_PASSWORD", "")
    if not passphrase:
        sys.exit("Set CASE_STUDY_PASSWORD in the environment first.")

    for name, spec in LOCKED.items():
        title, neighbours = spec["title"], spec.get("neighbours")
        path = PAGES / name
        src = path.read_text(encoding="utf-8")
        prefix, body, suffix = split(src)
        # The contact modal stays outside the ciphertext (see lock_body), so it
        # is never encrypted with the study and never ends up on the page twice.
        plain = strip_contact_lightbox(current_plaintext(body, passphrase))
        lead = re.search(r'<p class="pk-lead">(.*?)</p>', plain, re.S)
        original_desc = html.unescape(re.sub(r"<[^>]+>", "", lead.group(1))).strip()[:300] if lead else ""

        if args.unlock:
            new_body = with_contact_lightbox(plain)
            prefix = set_meta(prefix, original_desc or PUBLIC_DESCRIPTION)
            suffix = suffix.replace(LOCK_SCRIPT, "")
        else:
            new_body = lock_markup(title, encrypt(plain, passphrase), neighbours, spec, name)
            prefix = set_meta(prefix, PUBLIC_DESCRIPTION)
            if LOCK_SCRIPT not in suffix:
                suffix = suffix.replace("</body>", LOCK_SCRIPT + "</body>", 1)

        path.write_text(prefix + new_body + suffix, encoding="utf-8")
        print(("unlocked " if args.unlock else "locked   ") + name)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
