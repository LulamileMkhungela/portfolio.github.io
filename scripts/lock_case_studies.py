#!/usr/bin/env python3
"""Password-protect selected case studies with real encryption.

GitHub Pages is a static host, so a JavaScript "password prompt" alone would
leave the full text readable in view-source. This script instead encrypts the
page body (everything inside <div class="content clearfix">) with AES-256-GCM.
The published HTML holds only a lock screen plus ciphertext; js/case-lock.js
derives the key in the browser (PBKDF2-SHA256, 310 000 rounds) and decrypts on
a correct passphrase.

Usage, from the repository root:

    CASE_STUDY_PASSWORD='your passphrase' python3 scripts/lock_case_studies.py
    CASE_STUDY_PASSWORD='...' python3 scripts/lock_case_studies.py --unlock   # restore plaintext

Re-running is safe: a page that is already locked is decrypted with the given
passphrase first, so you can rotate the passphrase by running --unlock with the
old one, then the default mode with the new one. Run this AFTER
scripts/build_case_studies.py, which regenerates the plaintext pages.

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

try:
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
except ImportError:  # pragma: no cover
    sys.exit("The 'cryptography' package is required:  pip install cryptography")

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "portfolio"
ITERATIONS = 310_000

# Pages that are only for people who have the passphrase.
LOCKED = {
    "doc-media-scanning-audit.html": "Media scanning for audit planning",
    "doc-safety-statistics-workbook.html": "Safety statistics reference",
    "doc-compliance-ai-platform.html": "Compliance AI assistant",
    "doc-coal-stockpile-forecasting.html": "Coal stockpile forecasting",
    "doc-chart-components.html": "Configurable chart components",
    "doc-timeline-view.html": "Configurable timeline view",
}

START = '\t\t\t<div class="content clearfix">'
END = '\t\t\t<!-- Content End -->'
PUBLIC_DESCRIPTION = (
    "A password-protected case study from a confidential client engagement. "
    "Ask Lulamile for access."
)
LOCK_SCRIPT = '\t<script src="../js/case-lock.js?v=1"></script>\n'


def derive_key(passphrase: str, salt: bytes) -> bytes:
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=ITERATIONS)
    return kdf.derive(passphrase.encode("utf-8"))


def encrypt(plaintext: str, passphrase: str) -> dict:
    salt = secrets.token_bytes(16)
    iv = secrets.token_bytes(12)
    key = derive_key(passphrase, salt)
    data = AESGCM(key).encrypt(iv, plaintext.encode("utf-8"), None)
    b64 = lambda b: base64.b64encode(b).decode("ascii")
    return {"salt": b64(salt), "iv": b64(iv), "iterations": ITERATIONS, "data": b64(data)}


def decrypt(meta: dict, data_b64: str, passphrase: str) -> str:
    key = derive_key(passphrase, base64.b64decode(meta["salt"]))
    data = base64.b64decode(re.sub(r"\s+", "", data_b64))
    return AESGCM(key).decrypt(base64.b64decode(meta["iv"]), data, None).decode("utf-8")


def lock_markup(title: str, payload: dict) -> str:
    wrapped = "\n".join(payload["data"][i:i + 120] for i in range(0, len(payload["data"]), 120))
    meta = html.escape(json.dumps({k: payload[k] for k in ("salt", "iv", "iterations")}), quote=True)
    return (
        '\t\t\t\t<section class="pk-lock" data-case-lock aria-labelledby="case-lock-title">\n'
        '\t\t\t\t\t<div class="pk-lock__card">\n'
        '\t\t\t\t\t\t<div class="pk-lock__icon" aria-hidden="true">'
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
        '<rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3" fill="currentColor" stroke="none"/></svg></div>\n'
        '\t\t\t\t\t\t<p class="pk-lock__eyebrow">Protected case study</p>\n'
        f'\t\t\t\t\t\t<h1 class="pk-lock__title" id="case-lock-title">{html.escape(title, quote=False)}</h1>\n'
        '\t\t\t\t\t\t<p class="pk-lock__copy">This work was done under a confidentiality agreement, so the full write-up is '
        'encrypted on this page and opens only with a password. If you have one, enter it below.</p>\n'
        '\t\t\t\t\t\t<form class="pk-lock__form" autocomplete="off" novalidate>\n'
        '\t\t\t\t\t\t\t<label class="sr-only" for="case-lock-password">Password</label>\n'
        '\t\t\t\t\t\t\t<div class="pk-lock__field"><input id="case-lock-password" type="password" name="password" '
        'placeholder="Password" autocapitalize="off" autocorrect="off" spellcheck="false" required></div>\n'
        '\t\t\t\t\t\t\t<button class="pk-lock__submit" type="submit">Unlock case study</button>\n'
        '\t\t\t\t\t\t\t<p class="pk-lock__message" data-lock-message aria-live="polite"></p>\n'
        '\t\t\t\t\t\t</form>\n'
        '\t\t\t\t\t\t<p class="pk-lock__foot">Don’t have a password? '
        '<a href="mailto:mkhungela.l@gmail.com?subject=Access%20to%20a%20protected%20case%20study">Email Lulamile</a> '
        'and say which study you would like to read.</p>\n'
        '\t\t\t\t\t</div>\n'
        '\t\t\t\t</section>\n'
        f'\t\t\t\t<script id="case-lock-payload" type="text/plain" data-meta="{meta}">\n{wrapped}\n\t\t\t\t</script>\n'
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

    for name, title in LOCKED.items():
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
            new_body = lock_markup(title, encrypt(plain, passphrase))
            prefix = set_meta(prefix, PUBLIC_DESCRIPTION)
            if LOCK_SCRIPT not in suffix:
                suffix = suffix.replace("</body>", LOCK_SCRIPT + "</body>", 1)

        path.write_text(prefix + new_body + suffix, encoding="utf-8")
        print(("unlocked " if args.unlock else "locked   ") + name)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
