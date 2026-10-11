#!/usr/bin/env python3
"""Re-render the visible part of the locked case studies.

The six protected studies are already encrypted. This script never touches the
ciphertext: it keeps the existing
<script id="case-lock-payload"> element byte for byte and only rebuilds the
markup around it, so the locked page can be restyled without knowing the
passphrase (and without re-running lock_case_studies.py, which would rotate
the salt and the IV).

Use it after editing lock_shell() in lock_case_studies.py:

    python3 scripts/rebuild_case_lock_shell.py

Run scripts/lock_case_studies.py as usual when the plaintext changes or the
passphrase is rotated.
"""
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

from lock_case_studies import LOCKED, PAGES, START, END, lock_shell  # noqa: E402

PAYLOAD = re.compile(
    r'<script id="case-lock-payload" type="text/plain" data-meta="[^"]*">.*?</script>',
    re.S,
)


def main() -> int:
    for name, spec in LOCKED.items():
        path = PAGES / name
        src = path.read_text(encoding="utf-8")
        match = PAYLOAD.search(src)
        if not match:
            print(f"SKIP    {name} (no payload: run scripts/lock_case_studies.py first)")
            continue
        payload = match.group(0)

        i = src.index(START) + len(START) + 1  # keep the newline after the div
        j = src.index(END)
        shell = lock_shell(spec["title"], spec.get("neighbours"))
        body = f"{shell}{payload}\n\t\t\t\n"

        path.write_text(src[:i] + body + src[j:], encoding="utf-8")
        print(f"SHELL   {name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())