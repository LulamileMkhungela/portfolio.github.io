#!/usr/bin/env python3
"""Password-protect selected case studies with real encryption.

GitHub Pages is a static host, so a JavaScript "password prompt" alone would
leave the full text readable in view-source. This script instead encrypts the
case-study body with AES-256-GCM. The published HTML holds the normal case-study
template — hero, meta strip, sections, previous/next pager — around the lock
gate, plus the ciphertext; js/case-lock.js derives the key in the browser
(PBKDF2-SHA256, 310 000 rounds) and swaps the whole shell for the decrypted
body on a correct passphrase. Nothing confidential is outside the ciphertext:
the meta strip shown while locked deliberately says "Confidential client
engagement" rather than naming the client.

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
# `neighbours` are the previous / next projects shown in the pager. They are
# public (they are plain case studies), so the locked pages keep the same
# previous / next footer as every other case study while the body is sealed.
LOCKED = {
    "doc-coal-stockpile-forecasting.html": {
        "title": "Coal stockpile forecasting",
        "neighbours": ("lula-gazette.html", "LulaGazette", "Legal intelligence · Civic technology",
                       "doc-compliance-ai-platform.html", "Compliance AI assistant",
                       "Financial services · AI assistant with cited answers"),
    },
    "doc-compliance-ai-platform.html": {
        "title": "Compliance AI assistant",
        "neighbours": ("doc-coal-stockpile-forecasting.html", "Coal stockpile forecasting",
                       "Energy · Machine-learning decision support",
                       "doc-media-scanning-audit.html", "Media scanning for audit planning",
                       "Public sector · Media intelligence for audit"),
    },
    "doc-media-scanning-audit.html": {
        "title": "Media scanning for audit planning",
        "neighbours": ("doc-compliance-ai-platform.html", "Compliance AI assistant",
                       "Financial services · AI assistant with cited answers",
                       "doc-safety-statistics-workbook.html", "Safety statistics reference",
                       "Energy and chemicals · Safety-reporting reference"),
    },
    "doc-safety-statistics-workbook.html": {
        "title": "Safety statistics reference",
        "neighbours": ("doc-media-scanning-audit.html", "Media scanning for audit planning",
                       "Public sector · Media intelligence for audit",
                       "doc-chart-components.html", "Configurable chart components",
                       "Pharmaceutical · Dashboard visualisation components"),
    },
    "doc-chart-components.html": {
        "title": "Configurable chart components",
        "neighbours": ("doc-safety-statistics-workbook.html", "Safety statistics reference",
                       "Energy and chemicals · Safety-reporting reference",
                       "doc-timeline-view.html", "Configurable timeline view",
                       "Enterprise · Product operations timeline"),
    },
    "doc-timeline-view.html": {
        "title": "Configurable timeline view",
        "neighbours": ("doc-chart-components.html", "Configurable chart components",
                       "Pharmaceutical · Dashboard visualisation components",
                       "doc-entrehive.html", "EntreHive",
                       "Mobile · Points-based app for entrepreneurs"),
    },
}

START = '\t\t\t<div class="content clearfix">'
END = '\t\t\t<!-- Content End -->'
PUBLIC_DESCRIPTION = (
    "A password-protected case study from a confidential client engagement. "
    "Ask Lulamile for access."
)
LOCK_SCRIPT = '\t<script src="../js/case-lock.js?v=1"></script>\n'


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

# The meta strip shown while the study is sealed. Everything here is
# deliberately non-confidential: the client, the dates and the figures stay
# in the ciphertext.
LOCK_META = (
    ("Client", "Confidential client engagement"),
    ("Role", "Product design and front-end, via iOCO"),
    ("Industry", "Anonymised \u2014 ask me"),
    ("Access", "Password protected"),
)

LOCK_POINTS = (
    ("01", "This is the same case-study template as every other project on the site. Only the "
           "write-up is withheld, not the page."),
    ("02", "The text is encrypted in this file, so it is not readable in view-source, in a cache "
           "or from the repository hosting it."),
    ("03", "The key is derived in your browser and the page is never sent anywhere to be read."),
)


def lock_meta_block() -> str:
    items = "".join(
        f'<div class="pk-meta__item"><span class="pk-meta__label">{html.escape(k)}</span>'
        f'<span class="pk-meta__value">{html.escape(v)}</span></div>'
        for k, v in LOCK_META
    )
    return f'<div class="pk-meta" aria-label="Project details">{items}</div>'


def lock_points() -> str:
    return "".join(
        f'<li><b>{n}</b><span>{body}</span></li>' for n, body in LOCK_POINTS
    )


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
        '<nav class="tlc-project-pagination" aria-label="More projects">'
        + item(prev_file, prev_title, prev_cat, "\u2190 Previous project")
        + item(next_file, next_title, next_cat, "Next project \u2192")
        + "</nav>\n"
    )


def lock_shell(title: str, neighbours) -> str:
    """The visible page while a study is locked.

    It is built from the case-study template (hero, meta strip, sections and
    the previous / next pager) so a locked study looks like every other page
    on the site. js/case-lock.js replaces the whole .pk-lock-shell with the
    decrypted body once the passphrase is accepted.
    """
    return (
        '\t\t\t<div class="pk-lock-shell" data-case-lock>\n'
        '\t\t\t\t<section class="pk-hero" aria-labelledby="case-lock-title">\n'
        '\t\t\t\t\t<div class="pk-shell">\n'
        '\t\t\t\t\t\t<p class="pk-eyebrow">Protected case study</p>\n'
        f'\t\t\t\t\t\t<h1 id="case-lock-title" class="pk-display pk-display--name">{html.escape(title, quote=False)}</h1>\n'
        '\t\t\t\t\t\t<p class="pk-hero__tagline">Written under a confidentiality agreement.'
        '<em class="pk-accent"> Opens with a password.</em></p>\n'
        f'\t\t\t\t\t\t<span class="pk-lock-hero__cue">{LOCK_ICON}Encrypted on this page</span>\n'
        '\t\t\t\t\t</div>\n'
        f'\t\t\t\t\t<div class="pk-shell">{lock_meta_block()}</div>\n'
        '\t\t\t\t</section>\n'
        '\t\t\t\t<section class="pk-section" id="protected">\n'
        '\t\t\t\t\t<div class="pk-shell"><div class="pk-lock-grid">\n'
        '\t\t\t\t\t\t<div>\n'
        '\t\t\t\t\t\t\t<p class="pk-eyebrow">How to open it</p>\n'
        '\t\t\t\t\t\t\t<h2 class="pk-h2">The write-up is encrypted inside this page</h2>\n'
        '\t\t\t\t\t\t\t<div class="pk-copy pk-lock-copy"><p>This work was done under a confidentiality '
        'agreement, so the client, the decisions and the results are held as ciphertext in this file and are '
        'only rendered after the right password is entered. Nothing is fetched from another site.</p></div>\n'
        f'\t\t\t\t\t\t\t<ul class="pk-lock-points">{lock_points()}</ul>\n'
        '\t\t\t\t\t\t</div>\n'
        '\t\t\t\t\t\t<div class="pk-lock">\n'
        f'\t\t\t\t\t\t\t<div class="pk-lock__icon" aria-hidden="true">{LOCK_ICON}</div>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__eyebrow">Password required</p>\n'
        f'\t\t\t\t\t\t\t<h2 class="pk-lock__title">{html.escape(title, quote=False)}</h2>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__copy">If you have the password for this study, enter it below '
        'and the full case study opens here, in the page you are already reading.</p>\n'
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
        '\t\t\t\t\t</div></div>\n'
        '\t\t\t\t</section>\n'
        '\t\t\t\t<section class="pk-section pk-conclusion" id="protected-note">\n'
        '\t\t\t\t\t<div class="pk-shell"><p class="pk-lead">Happy to walk you through any of this in person, '
        'with the client anonymised.</p><p class="pk-copy">These studies come from enterprise engagements '
        'delivered through iOCO. The write-ups are sealed here so the clients\u2019 material stays off the '
        'open web; the design decisions behind them are not a secret.</p>'
        '<div class="pk-actions"><a class="pk-button" '
        'href="mailto:mkhungela.l@gmail.com?subject=Access%20to%20a%20protected%20case%20study">Ask for access '
        '\u2192</a></div></div>\n'
        '\t\t\t\t</section>\n'
        + lock_pagination(neighbours) +
        '\t\t\t</div>\n'
    )


def lock_markup(title: str, payload: dict, neighbours=None) -> str:
    wrapped = "\n".join(payload["data"][i:i + 120] for i in range(0, len(payload["data"]), 120))
    meta = html.escape(json.dumps({k: payload[k] for k in ("salt", "iv", "iterations")}), quote=True)
    return (
        lock_shell(title, neighbours)
        + f'\t\t\t\t<script id="case-lock-payload" type="text/plain" data-meta="{meta}">\n{wrapped}\n\t\t\t\t</script>\n'
        + '\t\t\t\n'
    )


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
        plain = current_plaintext(body, passphrase)
        lead = re.search(r'<p class="pk-lead">(.*?)</p>', plain, re.S)
        original_desc = html.unescape(re.sub(r"<[^>]+>", "", lead.group(1))).strip()[:300] if lead else ""

        if args.unlock:
            new_body = plain
            prefix = set_meta(prefix, original_desc or PUBLIC_DESCRIPTION)
            suffix = suffix.replace(LOCK_SCRIPT, "")
        else:
            new_body = lock_markup(title, encrypt(plain, passphrase), neighbours)
            prefix = set_meta(prefix, PUBLIC_DESCRIPTION)
            if LOCK_SCRIPT not in suffix:
                suffix = suffix.replace("</body>", LOCK_SCRIPT + "</body>", 1)

        path.write_text(prefix + new_body + suffix, encoding="utf-8")
        print(("unlocked " if args.unlock else "locked   ") + name)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
