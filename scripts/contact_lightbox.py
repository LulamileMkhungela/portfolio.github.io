"""The "Contact me" contact lightbox that every case study needs.

Every case-study header has a "Contact me" button:

    <a data-content="inline" data-modal-mode ... href="#contact-lightbox"
       class="lightbox-link contact-collaboration">

It opens the #contact-lightbox block below as an inline modal: on a standalone
page (and in the mobile iframe) timber.master.min.js does it, inside a desktop
window js/desktop.js does it. Without the block the button has nothing to
open. The standalone page shows a "Please Check: #contact-lightbox" error and
the desktop window used to frame the link, which loaded the portfolio home page
inside the modal.

scripts/build_case_studies.py, scripts/lock_case_studies.py and
scripts/rebuild_case_lock_shell.py regenerate everything between
<div class="content clearfix"> and the footer, so they emit the block
themselves with the helpers here. On a protected study it sits after the
encrypted payload, outside .pk-lock-shell: it is on the page both before and
after the study is unlocked, and it is never part of the ciphertext.
"""
import re

# Byte-for-byte the block on the hand-written case studies
# (portfolio/lula-gazette.html, nerdma-website.html, snb-website.html, ...).
CONTACT_LIGHTBOX = (
    "\t\t\t<!-- Contact Modal -->\n"
    '\t\t\t\t<div id="contact-lightbox" class="pt-70 pb-50 hide">\n'
    '\t\t\t\t\t<div class="row">\n'
    '\t\t\t\t\t\t<div class="column width-12 left">\n'
    '\t\t\t\t\t\t\t<h3 class="mb-50 weight-semi-bold font-alt-3">Contact me</h3>\n'
    '\t\t\t\t\t\t\t<div class="contact-form-container no-margin-bottom">\n'
    '\t\t\t\t\t\t\t\t<form class="contact-form" action="../php/send-email.php" method="post" novalidate>\n'
    '\t\t\t\t\t\t\t\t\t<div class="row">\n'
    '\t\t\t\t\t\t\t\t\t\t<div class="column width-12">\n'
    '\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="fname" class="form-fname form-element large" '
    'placeholder="First Name*" tabindex="1" required>\n'
    "\t\t\t\t\t\t\t\t\t\t</div>\n"
    '\t\t\t\t\t\t\t\t\t\t<div class="column width-12">\n'
    '\t\t\t\t\t\t\t\t\t\t\t<input type="email" name="email" class="form-email form-element large" '
    'placeholder="Email address*" tabindex="3" required>\n'
    "\t\t\t\t\t\t\t\t\t\t</div>\n"
    '\t\t\t\t\t\t\t\t\t\t<div class="column width-6">\n'
    '\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="honeypot" class="form-honeypot form-element large">\n'
    "\t\t\t\t\t\t\t\t\t\t</div>\n"
    "\t\t\t\t\t\t\t\t\t</div>\n"
    '\t\t\t\t\t\t\t\t\t<div class="row">\n'
    '\t\t\t\t\t\t\t\t\t\t<div class="column width-12">\n'
    '\t\t\t\t\t\t\t\t\t\t\t<textarea name="message" class="form-message form-element large" '
    'placeholder="Message*" tabindex="5" required></textarea>\n'
    '\t\t\t\t\t\t\t\t\t\t\t<input type="submit" value="Send Email" class="form-submit button medium '
    'text-uppercase bkg-grey bkg-hover-theme color-white color-hover-white">\n'
    "\t\t\t\t\t\t\t\t\t\t</div>\n"
    "\t\t\t\t\t\t\t\t\t</div>\n"
    "\t\t\t\t\t\t\t\t</form>\n"
    '\t\t\t\t\t\t\t\t<div class="form-response center"></div>\n'
    "\t\t\t\t\t\t\t</div>\n"
    "\t\t\t\t\t\t</div>\n"
    "\t\t\t\t\t</div>\n"
    "\t\t\t\t</div>\n"
    "\t\t\t\t<!-- Contact Modal End -->\n"
)

# How the block sits in a page: a blank line either side, as on the
# hand-written case studies.
CONTACT_SECTION = "\n" + CONTACT_LIGHTBOX + "\n"

# The line that closes <div class="content clearfix"> on a plaintext page.
CONTENT_CLOSE = "\t\t\t</div>\n"

_BLOCK = re.compile(r"\n?[ \t]*<!-- Contact Modal -->.*?<!-- Contact Modal End -->\n\n?", re.S)


def strip_contact_lightbox(body: str) -> str:
    """Remove the contact block (and its spacing) from a content body."""
    return _BLOCK.sub("", body)


def with_contact_lightbox(body: str) -> str:
    """Return a plaintext content body with exactly one contact block, placed
    just before the </div> that closes .content (where the hand-written case
    studies have it)."""
    body = strip_contact_lightbox(body)
    if body.endswith(CONTENT_CLOSE):
        return body[: -len(CONTENT_CLOSE)] + CONTACT_SECTION + CONTENT_CLOSE
    return body + CONTACT_SECTION
