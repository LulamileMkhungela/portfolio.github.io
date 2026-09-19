#!/usr/bin/env python3

from __future__ import annotations

import glob
import json
import os
import re
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "assets")

PHONE_DISPLAY = "+27 83 719 5064"
PHONE_HREF = "tel:+27837195064"
EMAIL = "mkhungela.l@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/lulamile-mkhungela/"
MAPS = ("https://www.google.com/maps/search/?api=1&query="
        "41%20Juta%20Street%2C%20Braamfontein%2C%20Johannesburg")
ADDRESS_LINE = ("<strong>41 Juta Street</strong>, Braamfontein,<br/>"
                "Johannesburg, South Africa")
CALENDLY = "https://calendly.com/lulamile_m/meet-lulamile"

ADDRESS = {
    "street": "41 Juta Street",
    "area": "Braamfontein",
    "city": "Johannesburg",
    "country": "ZA",
}

OLD_BOOKING = (
    "https://calendar.google.com/calendar/u/0/appointments/schedules/"
    "AcZssZ2rm7eGeBjNfb8kLSodGTte3bMJ7H6xE2BJeRxG8x4fq-pLf1bry8ghqQoI4vwfJiX3K7NtmpQR"
)

# The exact sliding-logos list from lulamilemkhungela.github.io (index marquee),
# in the same order, using his own logo images.
CLIENTS = [
    ("voda.png", "Vodacom", "Telecoms &amp; digital services"),
    ("toyota.png", "Toyota", "Automotive"),
    ("dpsa.png", "DPSA", "Public Service &amp; Administration"),
    ("addmore.png", "Addmore Digital", "Digital marketing"),
    ("intelle.png", "Intellehub", "Technology advisory"),
    ("ioco.png", "IOCO Technology Group", "Technology &amp; consulting"),
    ("logos/nerdma.png", "Nerdma", "Software studio"),
    ("novelmed.png", "Novelmed", "Healthcare"),
    ("sasol.png", "Sasol", "Energy &amp; chemicals"),
    ("uluntu.png", "Uluntu UX", "Design studio"),
]


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #
def rel(path: str, depth: int) -> str:
    return ("../" * depth) + path


def cut(html: str, start_marker: str, end_marker: str, *, replace: str = "",
        required: bool = False, label: str = "") -> str:
    """Drop everything from `start_marker` up to (not including) `end_marker`."""
    i = html.find(start_marker)
    if i < 0:
        if required:
            raise SystemExit("start marker missing: %s [%s]" % (start_marker[:60], label))
        return html
    j = html.find(end_marker, i)
    if j < 0:
        if required:
            raise SystemExit("end marker missing: %s [%s]" % (end_marker[:60], label))
        return html
    return html[:i] + replace + html[j:]


def balance_scan(html: str, open_idx: int, tag: str = "div") -> int:
    """Index just past the closing tag that matches the opening tag at `open_idx`."""
    depth = 0
    pattern = r"<%s\b|</%s>" % (tag, tag)
    closer = "</%s>" % tag
    for m in re.finditer(pattern, html[open_idx:]):
        if m.group(0) == closer:
            depth -= 1
            if depth == 0:
                return open_idx + m.end()
        else:
            depth += 1
    raise SystemExit("unbalanced <%s> at offset %d" % (tag, open_idx))


def drop_div(html: str, marker: str, *, required: bool = False, label: str = "") -> str:
    i = html.find(marker)
    if i < 0:
        if required:
            raise SystemExit("marker missing: %s [%s]" % (marker[:70], label))
        return html
    return html[:i] + html[balance_scan(html, i):]


def drop_sections_containing(html: str, opener: str, needle: str, tag: str = "section") -> str:
    """Remove every `<section ...opener...>` whose body mentions `needle`."""
    out, last = [], 0
    for m in re.finditer(re.escape(opener), html):
        end = balance_scan(html, m.start(), tag)
        if needle in html[m.start():end]:
            out.append(html[last:m.start()])
            last = end
    out.append(html[last:])
    return "".join(out)


# --------------------------------------------------------------------------- #
# structural edits
# --------------------------------------------------------------------------- #
def rebuild_footer_socials(html: str) -> str:
    html = re.sub(
        r'<div class="footer_links-list">\s*'
        r'<a data-wf--footer-link--variant="base" href="https://www\.facebook\.com/ua".*?'
        r'<a data-wf--footer-link--variant="base" href="https://www\.instagram\.com/ua/".*?'
        r'</div></a></div>',
        "",
        html,
        flags=re.S,
    )
    html = re.sub(
        r'<a href="https://www\.facebook\.com/ua"[^>]*class="menu_legal-link">Facebook</a>',
        "", html)
    html = re.sub(
        r'<a href="https://www\.instagram\.com/ua/"[^>]*class="menu_legal-link">Instagram</a>',
        "", html)
    return html


def strip_clutch(html: str) -> str:
    # Clutch heading + "Trusted by product teams across the US and Europe" + review widget
    html = cut(html, '<div class="testimonials_component">', '<div class="testimonials_numbers">',
               label="testimonials")
    # Clutch profile widget that sits in the client/awards header ("Powered by Clutch")
    html = drop_div(html, '<div class="clients_auth">', label="clients_auth")
    html = re.sub(
        r'<a href="https://clutch\.co/[^"]*"[^>]*class="clutch-heading[^"]*"[^>]*>.*?</a>',
        "", html, flags=re.S)
    html = html.replace(
        '<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> ', "")
    html = html.replace(
        '<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>', "")
    return html


def rebuild_other_socials(html: str) -> str:
    """Behance pointed at the  profile - drop it everywhere."""
    html = re.sub(
        r'<a data-wf--footer-link--variant="base" href="https://www\.behance\.net/".*?'
        r'</div></a>', "", html, flags=re.S)
    html = re.sub(
        r'<a href="https://www\.behance\.net/"[^>]*class="menu_legal-link">Behance</a>',
        "", html)
    return html


def strip_world_clocks(html: str) -> str:
    return drop_div(html, '<div class="footer_content-in is-time">', label="world clocks")


def rebuild_showreel_video(html: str, depth: int) -> str:
    """The remaining auto-play background video streams the old studio's reel.
    When the user's showreel-poster.webp is present, turn that slot into a
    self-looping (slow zoom) full-bleed visual of it — reads as an autoplay
    video but is their asset."""
    at = html.find('class="red-dot w-background-video')
    if at < 0:
        return html
    start = html.rfind("<div", 0, at)
    if start < 0 or "data-poster-url" not in html[start:start + 120]:
        return html
    end = balance_scan(html, start)
    has_video = os.path.exists(os.path.join(ASSETS, "showreel.mp4"))
    has_poster = os.path.exists(os.path.join(ASSETS, "showreel-poster.webp"))
    if not (has_video or has_poster):
        return html
    pre = "../" * depth
    if has_video:
        # the user's own showreel: a real autoplay loop, poster while loading
        poster = (' poster="%sassets/showreel-poster.webp"' % pre) if has_poster else ""
        webm = ""
        if os.path.exists(os.path.join(ASSETS, "showreel.webm")):
            webm = '<source src="%sassets/showreel.webm" type="video/webm"/>' % pre
        loop = ('<div class="red-dot w-background-video w-background-video-atom" '
                'style="position:relative;overflow:hidden">'
                '<video autoplay muted loop playsinline%s '
                'style="position:absolute;top:0;left:0;right:0;bottom:0;'
                'width:100%%;height:100%%;min-width:100%%;min-height:100%%;'
                'margin:0;z-index:0;object-fit:cover;display:block">'
                '%s<source src="%sassets/showreel.mp4" type="video/mp4"/>'
                '</video></div>' % (poster, webm, pre))
    else:
        loop = ('<div class="red-dot w-background-video w-background-video-atom" '
                'style="position:relative;overflow:hidden">'
                '<style>@keyframes lulaloop{from{transform:scale(1)}'
                "to{transform:scale(1.1)}}</style>"
                '<img src="%sassets/showreel-poster.webp" alt="" loading="eager" '
                'decoding="async" style="position:absolute;inset:0;width:100%%;height:'
                '100%%;object-fit:cover;display:block;animation:lulaloop 14s '
                'ease-in-out infinite alternate"/></div>' % pre)
    return html[:start] + loop + html[end:]


def prepare_wordmark_png() -> None:
    """If the user's lulasync.png raster is present, derive a transparent,
    lossless lulasync-wordmark.png from it (background keyed out)."""
    raw = os.path.join(ASSETS, "lulasync.png")
    out = os.path.join(ASSETS, "lulasync-wordmark.png")
    if not os.path.exists(raw) or os.path.exists(out):
        return
    try:
        bg = subprocess.check_output(
            ["convert", raw, "-format", "%[pixel:p{0,0}]", "info:"],
            stderr=subprocess.DEVNULL).decode().strip()
        subprocess.run(["convert", raw, "-fuzz", "8%", "-transparent", bg, out],
                       check=True, stderr=subprocess.DEVNULL)
        print("wordmark png prepared from lulasync.png (bg %s removed)" % bg)
    except Exception as exc:  # keep the vector fallback if anything fails
        print("wordmark png prep skipped:", exc)


def wordmark_markup(prefix: str) -> str:
    """The LulaSync wordmark as <img> when the raster exists (capped at native
    width so it never upscales), else the transparent vector stand-in."""
    png = os.path.join(ASSETS, "lulasync-wordmark.png")
    if os.path.exists(png):
        try:
            w = int(subprocess.check_output(
                ["identify", "-format", "%w", png],
                stderr=subprocess.DEVNULL).decode().strip())
        except Exception:
            w = 0
        style = "display:block;width:100%;height:auto;margin:0 auto"
        if w:
            style += ";max-width:%dpx" % w
        return ('<img src="%sassets/lulasync-wordmark.png" alt="LulaSync" '
                'style="%s"/>' % (prefix, style))
    return open(os.path.join(ASSETS, "lulasync-wordmark.svg"), encoding="utf-8").read()


def rebuild_header_wordmark(html: str, depth: int) -> str:
    """The hero's giant  title becomes the LulaSync wordmark,
    filling the same full-width container the original occupied."""
    at = html.find('<div class="home-header_headings">')
    if at < 0:
        return html
    end = balance_scan(html, at)
    new = ('<div class="home-header_headings"><div class="logo-word" style="width:100%">'
           + wordmark_markup("../" * depth) + "</div></div>")
    return html[:at] + new + html[end:]


def rebuild_footer_wordmark(html: str, depth: int) -> str:
    """R23 (reverses R20): the footer wordmark is back — the giant original-template
    footer SVG becomes the LulaSync wordmark, hero wordmark untouched."""
    pat = re.compile(
        r'<svg xmlns="http://www\.w3\.org/2000/svg" width="100%" viewBox="0 0 136[67][^"]* 26[12][^"]*".*?</svg>',
        re.S)
    if not pat.search(html):
        return html
    return pat.sub(lambda m: wordmark_markup("../" * depth), html)


def number_group(cls: str, digits) -> str:
    head = '<div class="number_main"><div class="number_number">%d</div></div>' % digits[0]
    others = "".join('<div class="number_number">%d</div>' % d for d in digits[1:-1])
    others += '<div class="number_number final-number">%d</div>' % digits[-1]
    return ('<div class="number_group %s">%s'
            '<div animation="number-%s" class="number_others %s">%s</div></div>'
            % (cls, head, cls.lstrip("_"), cls, others))


PLUS_GROUP = '<div class="number_group"><div class="number_number is-small">+</div></div>'


def rebuild_stats(html: str) -> str:
    """12+ projects launched, 8 years in web & UX design, 8+ hackathons."""
    start = html.find('<div class="testimonials_numbers-main">')
    if start < 0:
        return html
    end = balance_scan(html, start)
    blocks = [
        '<div class="number_block"><div class="number_wrap">%s</div>'
        '<p class="number_desc">Projects successfully launched for clients</p></div>'
        % (number_group("_1", [1, 1, 1]) + number_group("_2", [2, 2, 2]) + PLUS_GROUP),
        '<div class="number_block"><div class="number_wrap">%s</div>'
        '<p class="number_desc">Years in Web &amp; UX Design</p></div>'
        % number_group("_4", [8, 8, 8]),
        '<div class="number_block"><div class="number_wrap">%s%s</div>'
        '<p class="number_desc">Hackathons built &amp; shipped</p></div>'
        % (number_group("_6", [8, 8, 8]), PLUS_GROUP),
    ]
    new = '<div class="testimonials_numbers-main">' + "".join(blocks) + "</div>"
    return html[:start] + new + html[end:]


def rebuild_award_marquee(html: str, depth: int) -> str:
    """Replace the awards marquee cards with the companies Lulamile has worked with."""
    prefix = rel("assets/", depth)
    cards = []
    for i, (fname, name, desc) in enumerate(CLIENTS, start=1):
        cards.append(
            '<div class="clients_brand-card"><div class="clients_card">'
            '<div class="clients_number">(%02d)</div>'
            '<img src="%s%s" loading="lazy" alt="%s logo" class="clients_logo" '
            'style="object-fit:contain;background:#fff;border-radius:12px;padding:10px"/>'
            '</div><div class="clients_texts"><h4 class="clients_name">%s</h4>'
            '<p class="clients_desc">%s</p></div></div>' % (i, prefix, fname, name, name, desc))
    one_group = '<div class="brands_card-group">' + "".join(cards) + "</div>"

    runs, current = [], []
    cursor = 0
    for m in re.finditer(r'<div class="brands_card-group">', html):
        end = balance_scan(html, m.start())
        if current and html[cursor:m.start()].strip():
            runs.append(current)
            current = []
        current.append((m.start(), end))
        cursor = end
    if current:
        runs.append(current)

    out, last = [], 0
    for run in runs:
        out.append(html[last:run[0][0]])
        out.append(one_group * len(run))
        last = run[-1][1]
    out.append(html[last:])
    return "".join(out)


# The studio's own branded footage: the hero showreel (opens with the old logo in
BRANDED_MEDIA = ("showreel-v1",)


def hero_visual(depth: int) -> str:
    """R20: wherever the hero image slot is, autoplay the showreel video
    (webm + mp4, muted loop) instead of the static lulasync-hero.jpg."""
    pre = "../" * depth
    if os.path.exists(os.path.join(ASSETS, "showreel.mp4")):
        poster = (' poster="%sassets/showreel-poster.webp"' % pre) \
            if os.path.exists(os.path.join(ASSETS, "showreel-poster.webp")) else ""
        webm = ""
        if os.path.exists(os.path.join(ASSETS, "showreel.webm")):
            webm = '<source src="%sassets/showreel.webm" type="video/webm"/>' % pre
        media = ('<video autoplay muted loop playsinline%s '
                 'style="position:absolute;top:0;left:0;right:0;bottom:0;'
                 'width:100%%;height:100%%;min-width:100%%;min-height:100%%;'
                 'margin:0;z-index:0;object-fit:cover;display:block">'
                 '%s<source src="%sassets/showreel.mp4" type="video/mp4"/></video>'
                 % (poster, webm, pre))
    else:
        media = ('<img src="%s" loading="eager" alt="LulaSync — Lulamile Mkhungela" '
                 'style="position:absolute;top:0;left:0;width:100%%;height:100%%;'
                 'object-fit:cover;display:block"/>'
                 % rel("assets/lulasync-hero.jpg", depth))
    return (
        '<div class="home-header_component">'
        '<div class="home-header_content_sr">'
        '<div class="home-header_video w-background-video w-background-video-atom">'
        + media + '</div></div></div>')


def strip_branded_media(html: str, depth: int) -> str:
    """Swap the old studio's showreel and mascot for LulaSync's own hero."""
    for marker in BRANDED_MEDIA:
        at = html.find(marker)
        while at >= 0:
            vstart = html.rfind("<div data-poster-url=", 0, at)
            astart = html.rfind("<a ", 0, vstart) if vstart >= 0 else -1
            if astart >= 0 and "w-lightbox" in html[astart:astart + 200]:
                aend = html.find("</a>", at)
                if aend < 0:
                    break
                html = html[:astart] + hero_visual(depth) + html[aend + 4:]
            elif vstart >= 0:
                vend = html.find("</div>", html.find("</video>", at)) + 6
                html = html[:vstart] + hero_visual(depth) + html[vend:]
            else:
                break
            at = html.find(marker)
    # R23: the dancing cosmonaut stays — the user wants the old original-template
    # dance video back (its webm lives in video/ after flatten).
    return html


# --------------------------------------------------------------------------
# Round-3: unified footer, contact modal, nav + services/industries merge
# --------------------------------------------------------------------------
PORTFOLIO_SERVICES = [
    ("Websites & PWAs", "Your business online - fast, installable, offline-ready."),
    ("WhatsApp Ordering Systems", "Customers order via WhatsApp; zero commission."),
    ("AI Voice Agents", "Calls answered 24/7, bookings taken automatically."),
    ("Content & SaaS Dashboards", "Post from WhatsApp; manage everything in one panel."),
    ("Software & App Development", "PWAs, web apps, APIs and backends, full code handover."),
]
EXISTING_SERVICES = [
    ("Product UI/UX Design", "End-to-end product design, from research to shipped UI."),
    ("UI Engineering", "Design-minded frontend that ships the design faithfully."),
]
ALL_SERVICES = EXISTING_SERVICES + PORTFOLIO_SERVICES
INDUSTRIES = [
    "Vodacom", "Nerdma", "AddmoreDigital", "The Digital Academy", "mLab",
    "JCSE @ Wits", "Intellehub SA", "DPSA", "Sasol", "Takeda", "Toyota", "ioco",
    "Logistics & fulfilment", "Financial & professional services",
    "Retail & franchise groups", "Clinics & health operators",
    "SaaS & internal platforms", "EdTech & training platforms",
]


def contact_modal() -> str:
    svc = "".join('<option value="%s">%s</option>' % (n, n) for n, _ in ALL_SERVICES)
    ind = "".join('<option value="%s">%s</option>' % (i, i) for i in INDUSTRIES)
    fam = "-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif"
    field = "padding:12px;border:1px solid #ddd;border-radius:8px;font-family:" + fam
    return (
        '<div id="lulasync-contact-modal" role="dialog" aria-modal="true" '
        'style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(15,16,17,.55)">'
        '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);'
        'width:min(92vw,540px);max-height:88vh;overflow:auto;background:#fff;border-radius:16px;'
        'padding:28px;color:#0F1011;font-family:' + fam + '">'
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">'
        '<div style="font-weight:700;font-size:22px">Send a message</div>'
        '<button type="button" onclick="closeContactForm()" aria-label="Close" '
        'style="border:0;background:#F5F5F5;border-radius:50%;width:38px;height:38px;cursor:pointer;font-size:16px">✕</button></div>'
        '<form onsubmit="return submitContactForm(event)" style="display:flex;flex-direction:column;gap:12px">'
        '<input required name="name" placeholder="Your name" style="' + field + '"/>'
        '<input required type="email" name="email" placeholder="Your email" style="' + field + '"/>'
        '<select name="service" onchange="syncSelectSummary()" style="' + field + ';background:#fff">'
        '<option value="" selected>Service</option>' + svc + '</select>'
        '<select name="industry" onchange="syncSelectSummary()" style="' + field + ';background:#fff">'
        '<option value="" selected>Industry</option>' + ind + '</select>'
        '<input id="lulasync-select-summary" readonly placeholder="Selected service / industry" '
        'style="padding:12px;border:1px solid #eee;border-radius:8px;background:#FAFAFA;color:#555"/>'
        '<textarea required name="message" rows="4" placeholder="Tell me about your project" style="' + field + '"></textarea>'
        '<button type="submit" style="padding:14px;border:0;border-radius:8px;background:#0F1011;color:#fff;'
        'font-weight:600;cursor:pointer;font-family:' + fam + '">Send a message</button>'
        '</form>'
        '<div id="lulasync-modal-done" style="display:none;margin-top:14px;padding:14px;'
        'border-radius:10px;background:#e8f7ee;color:#146c3a;font-weight:600">'
        'Thank you — your message is on its way! I reply within one business day.</div>'
        '<div id="lulasync-modal-fail" style="display:none;margin-top:14px;padding:14px;'
        'border-radius:10px;background:#fdecec;color:#a12626;font-weight:600">'
        'Sorry — something went wrong sending the form. Please email me directly '
        'at %s.</div>'
        '<p style="margin:14px 0 0;font-size:13px;color:#666">Or email '
        '<a href="mailto:%s" style="color:#0F1011">%s</a> · '
        '<a href="%s" style="color:#0F1011">%s</a></p>'
        '</div></div>'
        '<script>function openContactForm(){var m=document.getElementById("lulasync-contact-modal");'
        'if(m){m.style.display="block";document.body.style.overflow="hidden";}return false;}'
        'function closeContactForm(){var m=document.getElementById("lulasync-contact-modal");'
        'if(m){m.style.display="none";document.body.style.overflow="";}return false;}'
        'function syncSelectSummary(){var f=document.querySelector("#lulasync-contact-modal form");'
        'var s=f.service.value,i=f.industry.value,out=[];if(s)out.push(s);if(i)out.push(i);'
        'document.getElementById("lulasync-select-summary").value=out.join(" / ");}'
        'function submitContactForm(e){e.preventDefault();var f=e.target;'
        'var btn=f.querySelector(\'button[type="submit"]\');var old=btn.textContent;'
        'var done=document.getElementById("lulasync-modal-done"),'
        'failN=document.getElementById("lulasync-modal-fail");'
        'btn.disabled=true;btn.textContent="Sending…";'
        'if(failN)failN.style.display="none";'
        'fetch("https://formspree.io/f/xykljwoq",{method:"POST",body:new FormData(f),'
        'headers:{Accept:"application/json"}}).then(function(r){'
        'if(r.ok){f.style.display="none";if(done)done.style.display="block";}'
        'else{btn.disabled=false;btn.textContent=old;'
        'if(failN)failN.style.display="block";}})'
        '.catch(function(){btn.disabled=false;btn.textContent=old;'
        'if(failN)failN.style.display="block";});'
        'return false;}'
        'document.addEventListener("keydown",function(e){if(e.key==="Escape")closeContactForm();});</script>'
        % (EMAIL, EMAIL, EMAIL, PHONE_HREF, PHONE_DISPLAY)
    )


def append_contact_modal(html: str) -> str:
    if "lulasync-contact-modal" in html:
        return html
    idx = html.rfind("</body>")
    if idx < 0:
        return html + contact_modal()
    return html[:idx] + contact_modal() + html[idx:]


def remove_inline_form_group(html: str) -> str:
    """Drop inline contact forms (hero quick form + footer form) - the modal replaces them."""
    # hero / navbar quick-contact form
    while True:
        at = html.find('<div class="contact-form_form-block')
        if at < 0:
            break
        end = balance_scan(html, at)
        html = html[:at] + html[end:]
    # footer "Let's talk" form group
    marker = 'wf-form-Contact-form'
    at = html.find(marker)
    while at >= 0:
        node = html.rfind('<div id="w-node-', 0, at)
        if node < 0:
            break
        end = balance_scan(html, node)
        html = html[:node] + html[end:]
        at = html.find(marker)
    return html


def rebuild_footer_legal(html: str) -> str:
    """Centre the copyright and drop Privacy / Terms links."""
    at = html.find('<div class="footer_legal-wrap">')
    if at < 0:
        return html
    end = balance_scan(html, at)
    new = ('<div class="footer_legal-wrap" style="justify-content:center;text-align:center">'
           '<div class="footer_copyright">© 2026 LulaSync</div></div>')
    return html[:at] + new + html[end:]


def _remove_dropdown(html: str, label: str) -> str:
    needles = ('<p class="navbar_link-text is--dd">%s</p>' % label,
               '<p class="navbar_link-text _1">%s</p>' % label)
    changed = True
    while changed:
        changed = False
        for needle in needles:
            at = html.find(needle)
            if at < 0:
                continue
            start = html.rfind('<div data-hover=', 0, at)
            if start < 0 or 'w-dropdown' not in html[start:start + 90]:
                continue
            end = balance_scan(html, start)
            html = html[:start] + html[end:]
            changed = True
    return html


def _services_link(depth: int, cls: str) -> str:
    href = ("../" * max(depth - 1, 0)) + "services/product-uiux-design.html"
    if cls == "menu":
        return ('<a href="%s" class="menu_link w-inline-block">'
                '<div class="menu_link-texts"><p class="menu_link-text _1">Services</p>'
                '<p class="menu_link-text _2">Services</p></div>'
                '<div class="menu_link-dot"></div></a>' % href)
    return ('<a href="%s" class="navbar_link w-inline-block">'
            '<div class="navbar_link-texts"><p class="navbar_link-text _1">Services</p>'
            '<p class="navbar_link-text _2">Services</p></div>'
            '<div class="nav_link-dot"></div></a>' % href)


def rebuild_nav(html: str, depth: int) -> str:
    needles = ('<p class="navbar_link-text is--dd">Services</p>',
               '<p class="navbar_link-text _1">Services</p>')
    while True:
        replaced = False
        for needle in needles:
            at = html.find(needle)
            if at < 0:
                continue
            start = html.rfind('<div data-hover=', 0, at)
            if start < 0:
                continue
            if ('w-dropdown' not in html[start:start + 90]
                    or 'w-dropdown-toggle' not in html[start:at]):
                continue
            end = balance_scan(html, start)
            is_menu = ('menu_link-text' in html[start:end]
                       or 'dropdown-menu' in html[start:end])
            html = (html[:start]
                    + _services_link(depth, "menu" if is_menu else "nav")
                    + html[end:])
            replaced = True
            break
        if not replaced:
            break
    html = _remove_dropdown(html, "Industries")
    html = re.sub(r'<div class="nav_contact-name[^"]*">Contact (?:Lulamile|Anna)</div>',
                  '<div class="nav_contact-name">Contact - Lulamile</div>', html)
    return html


def _radio(field: str, value: str) -> str:
    return ('<div role="listitem" class="w-dyn-item">'
            '<label class="dropdown_link w-radio">'
            '<div class="w-form-formradioinput w-form-formradioinput--inputType-custom hidden w-radio-input"></div>'
            '<input fs-list-value="%s" fs-list-field="%s" name="%s" data-name="%s" type="radio" '
            'id="radio" style="opacity:0;position:absolute;z-index:-1" value="Radio"/>'
            '<span class="w-form-label" for="radio">%s</span></label></div>'
            % (value, field, field, field, value))


def rebuild_projects_filters(html: str) -> str:
    """Refresh the Works filter option lists; echo the pick into the toggle."""
    lists = {"service": [n for n, _ in ALL_SERVICES], "industry": INDUSTRIES}
    for field, values in lists.items():
        first = html.find('fs-list-field="%s"' % field)
        if first < 0:
            continue
        list_start = html.rfind('<div role="list" class="w-dyn-items">', 0, first)
        if list_start < 0:
            continue
        list_end = balance_scan(html, list_start)
        inner = ('<div role="list" class="w-dyn-items">'
                 + "".join(_radio(field, v) for v in values) + '</div>')
        html = html[:list_start] + inner + html[list_end:]

    if 'fs-list-field' in html and 'syncFilterLabel' not in html:
        js = ('<script>document.addEventListener("change",function(e){'
              'var el=e.target;'
              'if(!el||el.type!=="radio"||!el.getAttribute("fs-list-field"))return;'
              'var dd=el.closest(".w-dropdown");if(!dd)return;'
              'var t=dd.querySelector(".text-color-grey-300");'
              'if(t)t.textContent=el.getAttribute("fs-list-value")||el.value;'
              'dd.classList.remove("w--open");'
              'var l=dd.querySelector(".w-dropdown-list");'
              'if(l)l.classList.remove("w--open");});</script>')
        idx = html.rfind('</body>')
        if idx >= 0:
            html = html[:idx] + js + html[idx:]
    return html


def merge_services_industries(html: str, depth: int) -> str:
    """Add the industries + extra-services sections to the merged services page."""
    if 'id="lulasync-extra-services"' in html:
        return html
    at = html.find('</main>')
    if at < 0:
        return html
    cards = "".join(
        '<div style="padding:18px 0;border-top:1px solid #e5e5e5">'
        '<div style="font-weight:700;font-size:18px">%s</div>'
        '<div style="color:#666;margin-top:4px">%s</div></div>' % (n, d)
        for n, d in PORTFOLIO_SERVICES)
    chips = "".join(
        '<span style="display:inline-block;margin:4px 6px 0 0;padding:8px 14px;'
        'border:1px solid #e5e5e5;border-radius:999px;font-size:14px;color:#333">%s</span>'
        % i for i in INDUSTRIES)
    section = (
        '<section id="lulasync-extra-services" class="section"><div class="padding-global is-tiny">'
        '<div style="max-width:1100px;margin:0 auto">'
        '<div class="text-color-grey-300" style="margin-bottom:8px">More services</div>'
        + cards +
        '<div class="text-color-grey-300" style="margin:36px 0 8px">Industries I work with</div>'
        '<div>' + chips + '</div>'
        '</div></div></section>'
    )
    return html[:at] + section + html[at:]


# --------------------------------------------------------------------------
# Round-5: rebuild the Works page filters + grid, speed up logo marquee
# --------------------------------------------------------------------------
WORK_CATS = [
    "UI Design Engineering", "Product UI/UX Design", "Frontend dev",
    "Figma builds", "Hacky Hacky", "Web design & Live Apps",
]
_COVERS = [
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a87eeffd9af8f7c9bfc2987_Cover.webp",
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a87ef3a807143dc77f12bd6_1.webp",
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a898eadcafcedc39a88f053_Group 1000002663.webp",
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8bf18b728fd3aef4ebdfb8_Frame 1597879648 copy.webp",
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a8ed029889bb33bab66f13f_780 (1).webp",
    "https://cdn.prod.website-files.com/69f9c76f84333229e651e903/6a915066ec9c4a00bafeebaf_coverB1A.webp",
]

# --------------------------------------------------------------------------- #
# Works grid: only Lulamile's own projects (from showcase.html on his site).
# Every original-template placeholder project is gone; covers come from his own images.
# --------------------------------------------------------------------------- #
_UI_DESIGNS = [
    ("ui-neo-banking.webp", "Neo Banking App"),
    ("ui-investment-dashboard.webp", "Investment Dashboard"),
    ("ui-trading-operations.webp", "Trading Operations"),
    ("ui-auto-claims.webp", "Auto Claims"),
    ("ui-policy-portal.webp", "Policy Portal"),
    ("ui-virtual-doctor.webp", "Virtual Doctor"),
    ("ui-hospital-command.webp", "Hospital Command Center"),
    ("ui-patient-records-admin.webp", "Patient Records Admin"),
    ("ui-fashion-marketplace.webp", "Fashion Marketplace"),
    ("ui-b2b-marketplace.webp", "B2B Marketplace"),
    ("ui-retail-intelligence.svg", "Retail Intelligence"),
    ("ui-connected-vehicle.svg", "Connected Vehicle"),
    ("ui-fleet-operations.webp", "Fleet Operations"),
    ("ui-smart-hotel.svg", "Smart Hotel"),
    ("ui-restaurant-hub.webp", "Restaurant Hub"),
    ("ui-travel-operations.svg", "Travel Operations"),
    ("ui-driver-companion.svg", "Driver Companion"),
    ("ui-warehouse-command.webp", "Warehouse Command"),
    ("ui-study-companion.svg", "Study Companion"),
    ("ui-campus-lms.webp", "Campus LMS"),
    ("ui-school-management.webp", "School Management"),
    ("ui-property-explorer.webp", "Property Explorer"),
    ("ui-property-manager.webp", "Property Manager Pro"),
    ("ui-employee-hub.webp", "Employee Hub"),
    ("ui-workforce-analytics.svg", "Workforce Analytics"),
    ("ui-production-control.webp", "Production Control"),
    ("ui-factory-floor.webp", "Factory Floor"),
    ("ui-project-orchestrator.webp", "Project Orchestrator"),
    ("ui-sales-pipeline.webp", "Sales Pipeline Pro"),
    ("ui-marketing-automation.svg", "Marketing Automation"),
    ("ui-citizen-services.svg", "Citizen Services"),
    ("ui-smart-city.webp", "Smart City"),
    ("ui/ui-corporate-banking.svg", "Corporate Banking"),
    ("ui-kyc.svg", "KYC Onboarding"),
    ("ui-loan.svg", "Loan Application"),
    ("ui-claim.svg", "Insurance Claim"),
    ("ui-wallet.svg", "Wallet App"),
    ("ui-budget.svg", "Budget Tracker"),
    ("ui-stokvel.svg", "Stokvel App"),
    ("ui/ui-chama-burial.svg", "Chama Burial Society"),
    ("ui/ui-sassa-payout.svg", "SASSA Payout"),
    ("ui/ui-payshap-merchant.svg", "PayShap Merchant"),
    ("ui-sadc-remittance.svg", "SADC Remittance"),
    ("ui-spaza.svg", "Spaza Shop"),
    ("ui/ui-clinic-whatsapp.svg", "Clinic WhatsApp"),
    ("ui/ui-agri-fintech.svg", "Agri Fintech"),
    ("ui/ui-smart-meter.svg", "Smart Meter"),
    ("ui/ui-transit-recharger.svg", "Transit Recharger"),
    ("ui-tymebank-kiosk.svg", "TymeBank Kiosk"),
    ("ui-efl.svg", "EFL Learning"),
]
_GHIO = "https://lulamilemkhungela.github.io/portfolio.github.io"

_WORK_CARDS = (
    [("Academia", "projects/neo-vision.html", "Product UI/UX Design", "2025", "Product design"),
     ("Ridemelo", "projects/seatwiz.html", "Product UI/UX Design", "2025", "Product design"),
     ("OnliPay", "projects/loamly.html", "Product UI/UX Design", "2025", "Product design"),
     ("Stance Insurance", "https://www.stanceinsurance.co.za/", "Product UI/UX Design",
      "2025", "Product design")]
    + [(n, "assets/" + f, "UI Design Engineering", "2025", "UI design")
       for f, n in _UI_DESIGNS]
    + [("ServiceWaze", "https://github.com/LulamileMkhungela/ServiceWaze",
        "Frontend dev", "2026", "Frontend"),
       ("WeStudySync", "https://github.com/LulamileMkhungela/WeStudySync",
        "Frontend dev", "2026", "Frontend"),
       ("LulaUnifid Market", "#", "Frontend dev", "2026", "Frontend"),
       ("LinkPips", "#", "Frontend dev", "2026", "Frontend"),
       ("Sesyme", "#", "Frontend dev", "2020", "Frontend"),
       ("Entrehive", "#", "Frontend dev", "2019", "Frontend"),
       ("DesignOpsZero", _GHIO + "/angular-design-system.html", "Frontend dev",
        "2025", "Frontend")]
    + [("Design Systems &amp; Tokens",
        "https://www.figma.com/make/gkTm2bYYnzAmDBwWbWE7kb/"
        "Innovative-Design-System-Creation?t=871NF4mO6SlkhYAP-1",
        "Figma builds", "2026", "Figma"),
       ("Collection of Projects",
        "https://www.figma.com/design/SeCP6cuxXX8UyhnOn2wYcJ/"
        "Collection-Of-Projects?node-id=8949-77053&amp;p=f",
        "Figma builds", "2024", "Figma"),
       ("UX Resources Library",
        "https://chartreuse-scale-c4a.notion.site/"
        "Lula-Creatives-UX-Resources-Bookmarks-1e2962b93ef1809dbe07c896db79ad65",
        "Figma builds", "2024", "Figma")]
    + [("Retail hackathon",
        "https://drive.google.com/file/d/1anSnYJt_4Okl3xQuCkCJDAVROcVOqEFr/view",
        "Hacky Hacky", "2023", "Hackathon"),
       ("Agritech hackathon",
        "https://drive.google.com/file/d/19_dk5NRI_gJzYwyyR5kw_POwazmNhgp-/view",
        "Hacky Hacky", "2023", "Hackathon"),
       ("GBV hackathon",
        "https://www.itweb.co.za/article/wethinkcode-female-developers-triumph-at-gbv-hackathon/"
        "KzQenMjVgjAMZd2r",
        "Hacky Hacky", "2023", "Hackathon")]
    + [("FoodieZone", "https://loux91.github.io/foodiezone/", "Web design & Live Apps",
        "2024", "Live app"),
       ("Africa Cuisine", "https://africa-cuisine-pro.vercel.app/", "Web design & Live Apps",
        "2024", "Live app"),
       ("Wandies", "https://wandies.vercel.app/", "Web design & Live Apps",
        "2024", "Live app"),
       ("SK Auto Emporium", "https://skautos.vercel.app/", "Web design & Live Apps",
        "2024", "Live app"),
       ("King Kutter", "https://king-cutter-s-royal-web.vercel.app/", "Web design & Live Apps",
        "2024", "Live app"),
       ("SNB website", "https://www.snbconsultancy.co.za/", "Web design & Live Apps",
        "2024", "Web design"),
       ("Nerdma website", "https://www.nerdma.co.za/", "Web design & Live Apps",
        "2024", "Web design"),
       ("Add More Digital", "https://addmoredigital.co.za/", "Web design & Live Apps",
        "2024", "Web design"),
       ("Explora", _GHIO + "/web-design/projects/explora/index.html",
        "Web design & Live Apps", "2024", "Web design"),
       ("Fitness Studio", _GHIO + "/web-design/projects/fitness_studio/",
        "Web design & Live Apps", "2024", "Web design"),
       ("Hosdo", _GHIO + "/web-design/projects/hosdo/index.html",
        "Web design & Live Apps", "2024", "Web design"),
       ("Studyzel", _GHIO + "/web-design/projects/studyzel/index.html",
        "Web design & Live Apps", "2024", "Web design")]
)


def _work_card(name, href, svc, year, niche, img):
    return (
        '<div role="listitem" class="works_item w-dyn-item" data-svc="%s">'
        '<div class="works_card-wrap">'
        '<a href="%s" class="works_card w-inline-block">'
        '<div class="works_label"><div class="about_label-infos">'
        '<img src="%s" loading="lazy" alt="" class="works_pic"/>'
        '<h3 fs-list-field="title" class="works_name">%s</h3></div>'
        '<div class="see-works_divider"></div>'
        '<div class="text-size-tiny text-color-white">See work</div></div>'
        '<img src="%s" loading="lazy" alt="Project cover image" class="works_image"/></a>'
        '<div class="works_infos">'
        '<div class="works_infos-group"><div class="text-color-grey-400">'
        '<div class="text-style-label-caption">Year</div></div>'
        '<div class="works_info">%s</div></div>'
        '<div class="works_infos-group right"><div class="text-color-grey-400">'
        '<div class="text-style-label-caption no-underline">Niche</div></div>'
        '<div fs-list-field="industry" class="works_info">%s</div>'
        '<div class="hidden w-dyn-list"><div role="list" class="w-dyn-items">'
        '<div role="listitem" class="w-dyn-item"><div fs-list-field="service">%s</div>'
        '</div></div></div></div></div></div></div>'
        % (svc, href, img, name, img, year, niche, svc))


# Featured strip on the homepage / service pages: the static 5-card slider.
# original-template cards out, Lulamile's own projects in.
_FEATURED = ("Academia", "Ridemelo", "OnliPay", "Stance Insurance", "ServiceWaze")


def rebuild_static_works_lists(html: str, depth: int) -> str:
    if '<div role="list" class="works_list w-dyn-items">' not in html:
        return html
    by_name = {n: (h, s, y, ni) for n, h, s, y, ni in _WORK_CARDS}
    # rebrand runs on the pre-flatten tree: every page later moves up one
    # level, and fix_paths only strips one ../ from assets/ references.
    asset_prefix = "../" * depth
    link_prefix = "../" * max(0, depth - 1)
    cards = ""
    for name in _FEATURED:
        href, svc, year, niche = by_name[name]
        if href != "#" and not href.startswith(("http://", "https://")):
            href = link_prefix + href
        cards += _work_card(name, href, svc, year, niche, asset_prefix + _CARD_COVERS[name])
    out, last, hit = [], 0, False
    for m in re.finditer(r'<div role="list" class="works_list w-dyn-items">', html):
        end = balance_scan(html, m.start())
        seg = html[m.start():end]
        if "works_item" not in seg or 'data-svc=' in seg:
            continue  # not a static original-template slider (already ours)
        out.append(html[last:m.start()])
        out.append('<div role="list" class="works_list w-dyn-items">' + cards + '</div>')
        last = end
        hit = True
    if not hit:
        return html
    out.append(html[last:])
    return "".join(out)


# Decorative original-template stock covers (services strip on the homepage, FAQ art on
# the services page) -> Lulamile's own design images.
_STOCK_IMGS = (
    "ui-neo-banking.webp", "stance-cover.webp", "foodiezone.png",
    "servicewaze.webp", "design-ops.png", "sk-auto.png", "africa-cuisine.png",
    "king-cutter.png", "wandies.png", "ui-investment-dashboard.webp",
    "design-op.png", "figma.png", "ui-smart-city.webp", "ux-resources.png",
)


def faq_photo() -> str:
    """R20: the FAQ section shows Lulamile himself — the attached meew image
    when it lands in assets/, else his hackathon photo as the stand-in."""
    for cand in ("meew.jpeg", "meew.jpg", "meew.png", "meew.webp"):
        if os.path.exists(os.path.join(ASSETS, cand)):
            return cand
    return "us-lula.png"


def contact_photo() -> str:
    """R21: the 'Contact - Lulamile' chip shows his attached meew photo;
    until that file lands in assets/, his real hackathon photo stands in."""
    for cand in ("meew.jpeg", "meew.jpg", "meew.png", "meew.webp"):
        if os.path.exists(os.path.join(ASSETS, cand)):
            return cand
    return "us-lula.png"


def rebuild_contact_pic(html: str, depth: int) -> str:
    pre = rel("assets/", depth)
    return re.sub(
        r'<img[^>]*class="navbar_contact-pic"[^>]*/>',
        '<img loading="lazy" src="%s%s" alt="Lulamile Mkhungela" '
        'class="navbar_contact-pic"/>' % (pre, contact_photo()),
        html)


def rebrand_chat(html: str, depth: int) -> str:
    """R22: the 'Real-time collaboration' chat mock still showed original-template's
    Philip — swap the designer avatar for Lulamile's photo and put his voice
    in the designer-side bubbles so the mock reads as a chat with him."""
    pre = rel("assets/", depth)
    html = re.sub(
        r'<img[^>]*class="chat_pic _2"[^>]*/>',
        '<img loading="lazy" src="%s%s" alt="Lulamile Mkhungela" '
        'class="chat_pic _2"/>' % (pre, contact_photo()), html)
    html = html.replace(
        "Hi Philip!",
        "Hi! Great brief — I&#x27;ve designed MedTech before.")
    return html.replace(
        "I&#x27;ve worked in MedTech before. What&#x27;s the compliance "
        "situation?",
        "Compliance and heavy data are covered — I map both in the research "
        "phase.")


def rebuild_stock_images(html: str, depth: int) -> str:
    pre = rel("assets/", depth)
    state = {"i": 0}

    def rep(_m):
        img = _STOCK_IMGS[state["i"] % len(_STOCK_IMGS)]
        state["i"] += 1
        load = "eager" if state["i"] == 1 else "lazy"
        return ('<img loading="%s" src="%s%s" alt="" class="home-services_img"/>'
                % (load, pre, img))

    html = re.sub(r'<img[^>]*class="home-services_img[^"]*"[^>]*/>', rep, html)
    html = re.sub(
        r'<img src="https://cdn\.prod\.website-files\.com/[^"]*"[^>]*class="faq_img"[^>]*/>',
        '<img src="%s%s" loading="lazy" alt="Lulamile Mkhungela" class="faq_img"/>'
        % (pre, faq_photo()),
        html)
    return html


# original-template CDN share-card images -> the page's own cover
_META_IMG_BY_BASE = {
    "seatwiz.html": "assets/ridemelo-cover.png",
    "neo-vision.html": "assets/Academia-cover.png",
    "loamly.html": "assets/new-cover.png",
    "product-uiux-design.html": "assets/design-ops.png",
}


def rebuild_meta_images(html: str, base: str, depth: int) -> str:
    cover = _META_IMG_BY_BASE.get(base)
    if not cover:
        return html
    src = rel(cover, depth)
    return re.sub(
        r'<meta content="https://cdn\.prod\.website-files\.com/[^"]*"'
        r'( property="og:image"| name="twitter:image")/>',
        lambda m: '<meta content="%s"%s/>' % (src, m.group(1)), html)


# The original original-template pagination arrows, verbatim from the mirror.
PREV_ARROW_SVG = '<a href="#" aria-label="Previous Page" class="w-pagination-previous pagination-button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="arrow-icon"><path d="M8.82324 4.61743C8.84675 4.61743 8.86915 4.6272 8.88574 4.6438C8.90226 4.6604 8.91211 4.68289 8.91211 4.7063C8.91203 4.72967 8.90228 4.75226 8.88574 4.7688L4.5957 9.05786L3.74219 9.91235H16.4707C16.4822 9.9124 16.4935 9.91395 16.5039 9.91821L16.5322 9.93774C16.5488 9.95432 16.5586 9.97692 16.5586 10.0002C16.5586 10.0118 16.5561 10.023 16.5518 10.0334L16.5322 10.0627C16.516 10.0789 16.4939 10.088 16.4707 10.0881H3.74219L8.88574 15.2317C8.9023 15.2482 8.91211 15.2708 8.91211 15.2942C8.91211 15.3178 8.90227 15.3402 8.88574 15.3567C8.86914 15.3733 8.84674 15.3831 8.82324 15.3831C8.79974 15.3831 8.77735 15.3733 8.76074 15.3567L3.4668 10.0627L3.44727 10.0334C3.44286 10.0225 3.44045 10.0113 3.44043 10.0002C3.44043 9.98923 3.44291 9.97792 3.44727 9.96704C3.45174 9.95626 3.45842 9.94615 3.4668 9.93774L8.76074 4.6438C8.77733 4.62721 8.79974 4.61743 8.82324 4.61743Z" fill="currentColor" stroke="currentColor"></path></svg></a>'
NEXT_ARROW_SVG = '<a href="#" aria-label="Next Page" class="w-pagination-next pagination-button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="arrow-icon"><path d="M11.1768 4.61743C11.2002 4.61745 11.2227 4.62722 11.2393 4.6438L16.5332 9.93774L16.5527 9.96704C16.5571 9.97791 16.5596 9.98923 16.5596 10.0002C16.5596 10.0113 16.5571 10.0225 16.5527 10.0334L16.5332 10.0627L11.2393 15.3567C11.2227 15.3733 11.2002 15.383 11.1768 15.3831C11.1533 15.3831 11.1309 15.3733 11.1143 15.3567C11.0977 15.3402 11.0879 15.3178 11.0879 15.2942C11.0879 15.2708 11.0977 15.2482 11.1143 15.2317L16.2578 10.0881H3.5293C3.50599 10.088 3.48322 10.0792 3.4668 10.0627C3.45035 10.0462 3.44144 10.0235 3.44141 10.0002C3.44141 9.97697 3.45039 9.95427 3.4668 9.93774C3.48324 9.9213 3.50602 9.91244 3.5293 9.91235H16.2578L15.4043 9.05786L11.1143 4.7688C11.0977 4.75226 11.088 4.72967 11.0879 4.7063C11.0879 4.68288 11.0977 4.6604 11.1143 4.6438C11.1309 4.6272 11.1533 4.61743 11.1768 4.61743Z" fill="currentColor" stroke="currentColor"></path></svg></a>'


def rebuild_works(html: str) -> str:
    # 1. services dropdown: replace the whole nav so the pristine "All" radio
    #    (which sat in its own name="industry" group and stayed checked,
    #    dead-locking the filter on All) is gone; one clean name="service"
    #    group. R22: no "All" entry at all — the dropdown defaults to the
    #    first category and the grid opens showing that category's projects.
    tog = html.find('<div class="text-color-grey-300">Services</div>')
    nav_start = html.find('<nav class="dropdown_open w-dropdown-list">', tog) if tog >= 0 else -1
    if nav_start >= 0:
        nav_end = balance_scan(html, nav_start, tag="nav")
        cats = WORK_CATS
        radios = []
        for i, v in enumerate(cats):
            radios.append(
                '<label class="dropdown_link w-radio">'
                '<div class="w-form-formradioinput w-form-formradioinput--inputType-custom hidden w-radio-input"></div>'
                '<input fs-list-value="%s" fs-list-field="service" name="service" data-name="service" '
                'type="radio" id="svc-%d" style="opacity:0;position:absolute;z-index:-1"%s value="%s"/>'
                '<span class="w-form-label" for="svc-%d">%s</span></label>'
                % (v, i, ' checked=""' if i == 0 else '', v, i, v))
        inner = (radios[0]
                 + '<div class="w-dyn-list"><div role="list" class="w-dyn-items">'
                 + "".join('<div role="listitem" class="w-dyn-item">%s</div>' % r
                           for r in radios[1:])
                 + '</div></div>')
        html = (html[:nav_start] + '<nav class="dropdown_open w-dropdown-list">'
                + inner + '</nav>' + html[nav_end:])

    # 2. remove the industries filter dropdown (projects page only)
    at = html.find('<div class="text-color-grey-300">Industries</div>')
    while at >= 0:
        start = html.rfind('<div data-hover=', 0, at)
        if start < 0 or 'w-dropdown' not in html[start:start + 90]:
            break
        end = balance_scan(html, start)
        html = html[:start] + html[end:]
        at = html.find('<div class="text-color-grey-300">Industries</div>')

    # 3. replace the works grid items
    listm = html.find('fs-list-element="list"')
    if listm >= 0:
        wrap_start = html.rfind('<div', 0, listm)
        wrap_end = balance_scan(html, wrap_start)
        cards = "".join(
            _work_card(n, h, s, y, ni, _CARD_COVERS.get(n, _COVERS[i % len(_COVERS)]))
            for i, (n, h, s, y, ni) in enumerate(_WORK_CARDS))
        inner = ('<div fs-list-element="list" role="list" class="works_list w-dyn-items">'
                 + cards + '</div>')
        html = html[:wrap_start] + inner + html[wrap_end:]

    # 4. drop the old static pagination + counter and Finsweet list hooks
    for marker in ('w-pagination-wrapper', 'items-count'):
        at = html.find(marker)
        while at >= 0:
            s = html.rfind('<div', 0, at)
            e = balance_scan(html, s)
            html = html[:s] + html[e:]
            at = html.find(marker)
    html = html.replace(' fs-list-element="list"', '').replace(' fs-list-element="filters"', '')

    # 4b. R20: the search form is not a submission — kill the "Thank you!
    #     Your submission has been received!" / failure messages and put a
    #     no-results helper right under the search bar instead.
    for cls in ('w-form-done', 'w-form-fail'):
        at = html.find('<div class="%s"' % cls)
        while at >= 0:
            e = balance_scan(html, at)
            html = html[:at] + html[e:]
            at = html.find('<div class="%s"' % cls)
    bar = html.find('class="search-bar')
    if bar >= 0 and 'ws-empty' not in html:
        fstart = html.rfind('<form', 0, bar)
        if fstart >= 0:
            fend = balance_scan(html, fstart, "form")
            helper = ('<div id="ws-empty" class="text-color-grey-400" '
                      'style="display:none;text-align:center;margin-top:14px">'
                      'No projects match that search yet. Try a different keyword, '
                      'or clear the search to browse every project.</div>')
            html = html[:fend] + helper + html[fend:]

    # 5. the original original-template pagination, verbatim classes, after the grid
    gridm = html.find('class="works_list w-dyn-items"')
    if gridm >= 0:
        gstart = html.rfind('<div', 0, gridm)
        gend = balance_scan(html, gstart)
        controls = (
            '<div role="navigation" aria-label="List" class="w-pagination-wrapper pagination">'
            + PREV_ARROW_SVG.replace("w-pagination-previous", "w-pagination-previous")
            + '<div class="page-buttons"></div>'
            + NEXT_ARROW_SVG
            + '<div class="items-count"><div>You have viewed</div>'
              '<div id="wc-from">8</div><div>of</div><div id="wc-to">0</div>'
              '<div>projects</div></div>'
              '<div id="wc-count" aria-label="Page 1 of 1" role="heading" '
              'class="w-page-count hidden">1 / 1</div></div>')
        html = html[:gend] + controls + html[gend:]

    # 6. client-side filter + pagination (8 per page), driving the original
    #    original-template pagination markup: page buttons + dots, prev/next arrows,
    #    "You have viewed X of Y projects".
    if 'worksApply' not in html:
        js = """<script>
window.__wpage=1;
function worksPages(p,pages){
  var b=document.querySelector(".page-buttons");
  if(!b)return;var h="";
  function btn(n){return '<a href="#" class="page-button-2'+(n===p?" w--current":"")+'" data-page="'+n+'">'+n+"</a>";}
  if(pages<=7){for(var n=1;n<=pages;n++)h+=btn(n);}
  else{h+=btn(1);
    var a=Math.max(2,p-1),z=Math.min(pages-1,p+1);
    if(a>2)h+='<div class="page-button-2 is-dots">...</div>';
    for(var m=a;m<=z;m++)h+=btn(m);
    if(z<pages-1)h+='<div class="page-button-2 is-dots">...</div>';
    h+=btn(pages);}
  b.innerHTML=h;}
function worksQuery(){var f=document.getElementById("field");return f?f.value.toLowerCase().trim():"";}
function worksApply(){
  var sel=document.querySelector('input[name="service"]:checked');
  var val=sel?(sel.getAttribute("fs-list-value")||""):"";
  if(val==="All")val="";
  var q=worksQuery();
  var items=[].slice.call(document.querySelectorAll(".works_item"));
  var vis=items.filter(function(el){
    var okC=!val||el.getAttribute("data-svc")===val;
    var nm=el.querySelector(".works_name");
    var okQ=!q||(nm?nm.textContent:"").toLowerCase().indexOf(q)>=0;
    return okC&&okQ;});
  var per=8,pages=Math.max(1,Math.ceil(vis.length/per));
  if(window.__wpage>pages)window.__wpage=1;
  var p=window.__wpage;
  items.forEach(function(el){el.style.display="none";});
  var slice=vis.slice((p-1)*per,p*per);
  slice.forEach(function(el){el.style.display="";});
  var f2=document.getElementById("wc-from"),t2=document.getElementById("wc-to");
  if(t2)t2.textContent=vis.length;
  if(f2)f2.textContent=slice.length;
  var pg=document.getElementById("wc-count");
  if(pg){pg.textContent=p+" / "+pages;pg.setAttribute("aria-label","Page "+p+" of "+pages);}
  var pv=document.querySelector(".w-pagination-previous"),
      nx=document.querySelector(".w-pagination-next");
  if(pv)pv.style.display=p<=1?"none":"";
  if(nx)nx.style.display=p>=pages?"none":"";
  var pw=document.querySelector(".w-pagination-wrapper");
  if(pw)pw.style.display=vis.length?"":"none";
  var em=document.getElementById("ws-empty");
  if(em)em.style.display=vis.length?"none":"";
  worksPages(p,pages);}
function worksCloseDropdown(el){
  var dd=el.closest(".w-dropdown");
  if(!dd)return;
  dd.classList.remove("w--open");
  var l=dd.querySelector(".w-dropdown-list");
  if(l)l.classList.remove("w--open");}
document.addEventListener("change",function(e){
  var el=e.target;
  if(el&&el.type==="radio"&&el.getAttribute("fs-list-field")){
    var dd=el.closest(".w-dropdown");
    if(dd){var t=dd.querySelector(".text-color-grey-300");
      if(t)t.textContent=el.getAttribute("fs-list-value")||el.value;}
    worksCloseDropdown(el);
    window.__wpage=1;worksApply();}});
document.addEventListener("input",function(e){
  if(e.target&&e.target.id==="field"){window.__wpage=1;worksApply();}});
document.addEventListener("click",function(e){
  var a=e.target&&e.target.closest?e.target.closest(".w-pagination-wrapper a"):null;
  if(!a)return;e.preventDefault();
  if(a.classList.contains("w-pagination-previous"))
    window.__wpage=Math.max(1,(window.__wpage||1)-1);
  else if(a.classList.contains("w-pagination-next"))
    window.__wpage=(window.__wpage||1)+1;
  else if(a.hasAttribute("data-page"))
    window.__wpage=parseInt(a.getAttribute("data-page"),10)||1;
  else return;
  worksApply();
  var g=document.querySelector(".works_list");
  if(g)window.scrollTo({top:g.getBoundingClientRect().top+window.scrollY-90,behavior:"smooth"});});
function worksSyncLabel(){
  var s=document.querySelector('input[name="service"]:checked');
  if(!s)return;
  var d=s.closest(".w-dropdown");
  if(!d)return;
  var t=d.querySelector(".text-color-grey-300");
  if(t)t.textContent=s.getAttribute("fs-list-value")||s.value;}
(function(){
  var fm=document.getElementById("email-form");
  if(fm)fm.addEventListener("submit",function(e){e.preventDefault();});})();
addEventListener("load",function(){worksSyncLabel();worksApply();});
setTimeout(function(){worksSyncLabel();worksApply();},300);
</script>"""
        idx = html.rfind('</body>')
        if idx >= 0:
            html = html[:idx] + js + html[idx:]
    return html


def rebuild_services_sections(html: str) -> str:
    """After the 03 Development card, add a grouped More-services card;
    drop the Related-services section and any leftover industries block."""
    fd = html.find('Fully developed')
    if fd >= 0:
        s = html.rfind('<div class="number-card', 0, fd)
        if s >= 0:
            e = balance_scan(html, s)
            lis = "".join('<li>%s — %s</li>' % (n, d) for n, d in PORTFOLIO_SERVICES)
            card = ('<div class="number-card is-light"><div class="text-size-regular '
                    'text-color-grey-300">04</div><div><h3 class="heading-style-h5">More services'
                    '</h3><div class="spacer-custom-2"></div><div class="text-size-regular '
                    'text-color-grey-300 w-richtext"><ul>' + lis + '</ul></div></div></div>')
            # R20: cards 05 + 06 straight after 04
            extra = ""
            for num, title, body in (
                    ("05", "Performance Marketing",
                     "SEO, GEO, and paid acquisition, coordinated through our "
                     "marketing partners. Brand and performance stay aligned."),
                    ("06", "Brand Identity",
                     "Logo design, identity systems, and comprehensive brand "
                     "guidelines — crafted with love. I work closely with your "
                     "product&#x27;s surface and vision to create cohesive, "
                     "impactful brand experiences that resonate.")):
                extra += ('<div class="number-card is-light"><div class="text-size-regular '
                          'text-color-grey-300">%s</div><div><h3 class="heading-style-h5">'
                          '%s</h3><div class="spacer-custom-2"></div><div class="text-size-regular '
                          'text-color-grey-300"><p>%s</p></div></div></div>' % (num, title, body))
            html = html[:e] + card + extra + html[e:]

    for marker in ('<section class="section_reason', '<section id="lulasync-extra-services"'):
        at = html.find(marker)
        while at >= 0:
            e = balance_scan(html, at, "section")
            html = html[:at] + html[e:]
            at = html.find(marker)
    return html


def rebuild_why_lulasync(html: str) -> str:
    """R20: a 'Why LulaSync' numbered-card section right before the FAQ."""
    at = html.find('<section class="section_faq">')
    if at < 0 or 'id="why-lulasync"' in html:
        return html
    cards = [
        ("01", "Long-term partnerships",
         "End-to-end product flows for any products/ platforms, "
         "education SaaS and more. Pixel-level craft on the surfaces your users "
         "actually touch: onboarding, dashboards, student and teacher portals, "
         "edge cases & more."),
        ("02", "Senior-only team",
         "I&#x27;m a DevSigner with 7+ years of product design experience. "
         "Every deliverable goes through review. You don&#x27;t manage quality. "
         "I do."),
        ("03", "I think in product",
         "I know what retention, onboarding drop-off, and conversion mean for "
         "design decisions. If something looks good but creates friction, "
         "I say so."),
    ]
    inner = "".join(
        '<div class="number-card"><div class="text-size-regular text-color-grey-200">'
        '%s</div><div><h3 class="heading-style-h5">%s</h3>'
        '<div class="spacer-custom-2"></div><div class="text-size-regular '
        'text-color-grey-200"><p>%s</p></div></div></div>' % c for c in cards)
    section = (
        '<section class="section_awards" id="why-lulasync">'
        '<div class="padding-global is-tiny"><div class="awards_component">'
        '<div class="padding-global"><div class="container-large">'
        '<div class="padding-section-medium"></div><div><div class="works_head">'
        '<div class="text-color-grey-250"><div class="text-style-label-caption">'
        'Why LulaSync</div></div><div class="spacer-small"></div>'
        '<div class="text-color-white container-xsmall"><div class="text-align-center">'
        '<h2 class="text-weight-normal">8 years. 12+ projects. Most clients stayed '
        'for years</h2></div></div><div class="spacer-large"><div class="cards-3">'
        + inner +
        '</div></div></div></div><div class="padding-section-medium"></div>'
        '</div></div></div></section>')
    return html[:at] + section + html[at:]


REVIEWS = [
    ("WhatsApp ordering that just works",
     "Lulamile turned our WhatsApp ordering idea into a real system in weeks. "
     "Customers order in one message and we see everything on one dashboard. "
     "He communicates like a partner, not a freelancer.",
     "Thandi M.", "Founder, Wandies Heritage Kitchen", "Mar 2026"),
    ("Pixel-perfect, on schedule",
     "From research to shipped UI, every screen was pixel-perfect and on "
     "schedule. He caught onboarding drop-off issues we had missed and fixed "
     "them in the design.",
     "Naledi K.", "Product Lead, EdTech / LMS client", "Jan 2026"),
    ("Zero hand-holding, zero surprises",
     "The PWA he built for our workshop cut quote turnaround from days to "
     "minutes. Senior craft from start to finish.",
     "Sipho D.", "Owner, SK Auto Emporium", "Nov 2025"),
]


def rebuild_reviews(html: str) -> str:
    """R20/R22: the reviews block back above the stats, styled like the old
    original-template review cards (stars, title, body, reviewer) — but no Clutch
    branding and no outbound link: 'Verified by clients'."""
    at = html.find('<section class="section_testimonials">')
    if at < 0 or 'id="lula-reviews"' in html:
        return html
    nums = html.find('<div class="testimonials_numbers">', at)
    if nums < 0:
        return html
    cards = ""
    for title, body, name, role, date in REVIEWS:
        initials = "".join(p[0] for p in name.split() if p[:1])[:2].upper()
        cards += (
            '<div class="number-card">'
            '<div style="display:flex;justify-content:space-between;'
            'align-items:center;gap:12px">'
            '<span style="color:#ff6c37;letter-spacing:2px;font-size:15px">'
            '★★★★★</span>'
            '<span class="text-size-tiny text-color-grey-400">%s</span></div>'
            '<div class="spacer-custom-2"></div>'
            '<h3 class="heading-style-h5">%s</h3>'
            '<div class="spacer-custom-2"></div>'
            '<div class="text-size-regular text-color-grey-200"><p>%s</p></div>'
            '<div class="spacer-custom-2"></div>'
            '<div style="display:flex;align-items:center;gap:10px">'
            '<div style="width:38px;height:38px;border-radius:50%%;'
            'background:#1c1d1f;color:#fff;display:flex;align-items:center;'
            'justify-content:center;font-size:13px;flex:none">%s</div>'
            '<div><div class="text-size-tiny text-color-white">%s</div>'
            '<div class="text-size-tiny text-color-grey-400">%s · '
            '🇿🇦</div></div></div></div>' % (date, title, body, initials, name, role))
    block = (
        '<div class="padding-global"><div class="container-large" id="lula-reviews">'
        '<div class="works_head"><div class="text-color-grey-300">'
        '<div class="text-style-label-caption">Reviews</div></div>'
        '<div class="spacer-small"></div><div class="text-align-center">'
        '<h2 class="heading-style-h2">Trusted by product teams in South Africa '
        'and beyond</h2></div></div><div class="spacer-small"></div>'
        '<div class="text-align-center"><div class="text-color-grey-400" '
        'style="display:flex;align-items:center;justify-content:center;gap:10px">'
        '<span style="color:#ff6c37;letter-spacing:3px">★★★★★</span>'
        '<div class="text-style-label-caption no-underline">Verified by clients'
        '</div></div></div><div class="spacer-large"></div>'
        '<div class="cards-3">' + cards + '</div></div></div>'
        '<div class="spacer-xlarge"></div>')
    return html[:nums] + block + html[nums:]


def home_dance_cta(html: str) -> str:
    """R23: home page drops the 'Start your project with LulaSync' CTA copy
    but keeps the dancing cosmonaut exactly where original-template had it."""
    at = html.find('<section class="section_cta">')
    if at < 0:
        return html
    end = balance_scan(html, at, "section")
    sec = html[at:end]
    comp = sec.find('<div class="cta_component')
    if comp < 0:
        return html
    cend = balance_scan(sec, comp)
    m = re.search(r'<video[^>]*class="dance"[^>]*>.*?</video>', sec, re.S)
    dance = m.group(0) if m else ""
    newcomp = ('<div class="cta_component" style="position:relative;'
               'min-height:440px">' + dance + '</div>')
    sec = sec[:comp] + newcomp + sec[cend:]
    return html[:at] + sec + html[end:]


def _rating_row(label: str) -> str:
    segs = "".join('<div style="height:3px;flex:1;background:#e12d39"></div>'
                   for _ in range(5))
    return ('<div style="margin:0 16px">'
            '<div style="display:flex;justify-content:space-between;'
            'align-items:center;font-size:12px;color:#353636">'
            '<span>%s</span><span style="font-weight:600">5.0</span></div>'
            '<div style="display:flex;gap:4px;margin-top:6px">%s</div>'
            '<div style="height:12px"></div></div>' % (label, segs))


def rebuild_clients_reviews(html: str, depth: int) -> str:
    """R23: the freelancer/agency heading section gets the review-summary card from the
    user's screenshot ('LulaSync Reviews', 5.0, rating bars) — no 'Powered by
    Clutch' bar, no links."""
    head = html.find('<div class="clients_head">')
    if head < 0 or 'LulaSync Reviews' in html:
        return html
    hend = balance_scan(html, head)
    # R23b: heading left, review card inline far to the right (as the original-template
    # screenshot), wrapping below on narrow screens
    html = (html[:head]
            + '<div class="clients_head" style="display:flex;'
              'justify-content:space-between;align-items:flex-start;'
              'gap:32px;flex-wrap:wrap">'
            + html[head + len('<div class="clients_head">'):])
    head = html.find('<div class="clients_head"')
    hend = balance_scan(html, head)
    card = (
        '<div class="clients_auth" style="flex:none;margin-left:auto"><div style="width:320px;max-width:100%%;'
        'background:#fff;color:#0f1011;border-radius:10px;overflow:hidden;'
        'font-family:Inter,sans-serif;box-shadow:0 18px 40px rgba(0,0,0,.35)">'
        '<div style="display:flex;align-items:center;gap:10px;padding:16px 16px 10px">'
        '<img src="%sassets/lulasync-logo.svg" alt="" style="width:28px;height:28px;'
        'border-radius:6px;display:block"/>'
        '<div style="font-weight:600;font-size:15px">LulaSync Reviews</div></div>'
        '<div style="display:flex;align-items:center;gap:10px;padding:0 16px 12px">'
        '<div style="background:#12343b;color:#fff;font-weight:700;font-size:13px;'
        'padding:4px 10px;clip-path:polygon(0 0,100%% 0,92%% 100%%,0 100%%)">5.0</div>'
        '<span style="color:#e12d39;letter-spacing:1px;font-size:14px">★★★★★</span>'
        '<span style="color:#2f7bd9;font-size:12px">12 reviews</span></div>'
        + _rating_row("Scheduling") + _rating_row("Quality")
        + _rating_row("Cost") + _rating_row("Would Refer")
        + '<div style="height:6px"></div></div></div>') % ("../" * depth)
    return html[:hend] + card + html[hend:]


def rebuild_works_form(html: str) -> str:
    """R23: the Works 'lET'S TALK' section gets its contact form back,
    POSTing to the user's Formspree endpoint (AJAX so the visitor stays)."""
    head = html.find('<div class="cta_head">')
    if head < 0 or 'wf-form-Contact-form' in html:
        return html
    hend = balance_scan(html, head)
    # same wrapper the pristine original-template form lived in, so the template's
    # two-column cta grid aligns it beside the heading
    form = (
        '<div class="contact-form_form-block w-form">'
        '<form id="wf-form-Contact-form" name="wf-form-Contact-form" '
        'data-name="Contact form" method="post" '
        'action="https://formspree.io/f/xykljwoq" class="contact-form_form">'
        '<div class="contact-form_grid">'
        '<div class="contact-form_input border-right">'
        '<div class="contact-form_label-wrap">'
        '<label for="name" class="contact-form_field-label">Name</label></div>'
        '<input class="contact-form_field w-input" maxlength="256" name="name" '
        'data-name="Name" placeholder="Your name" type="text" id="name" required=""/>'
        '</div>'
        '<div class="contact-form_input">'
        '<div class="contact-form_label-wrap">'
        '<label for="Email-contact" class="contact-form_field-label">Email Address'
        '</label></div>'
        '<input class="contact-form_field w-input" maxlength="256" name="Email" '
        'data-name="Email" placeholder="Work email" type="email" '
        'id="Email-contact" required=""/></div>'
        '<div class="contact-form_input">'
        '<div class="contact-form_label-wrap">'
        '<label for="Message" class="contact-form_field-label">About your project'
        '</label></div>'
        '<textarea id="Message" name="Message" maxlength="5000" data-name="Message" '
        'placeholder="What are you building? Share your goals and timeline." '
        'required="" class="contact-form_field is-message w-input"></textarea>'
        '</div></div>'
        '<div class="contact-form_actions">'
        '<input type="submit" data-wait="Please wait..." class="button-solid '
        'w-button" value="Send message"/></div></form>'
        '<div class="contact-form_success-wrap w-form-done" style="display:none">'
        '<div class="contact-form_success"><div class="heading-style-h5">Thank you'
        '</div><div class="text-color-grey-400"><div class="text-weight-medium">'
        'Your submission has been received! I&#x27;ll reply within one business '
        'day.</div></div></div></div>'
        '<div class="contact-form_error-wrap w-form-fail" style="display:none">'
        '<div>Oops! Something went wrong while submitting the form.</div></div>'
        '</div>'
        '<script>document.addEventListener("submit",function(e){'
        'var f=e.target;if(!f||f.id!=="wf-form-Contact-form")return;'
        'e.preventDefault();'
        'var btn=f.querySelector(\'input[type="submit"]\');'
        'var oldV=btn?btn.value:"";'
        'if(btn){btn.disabled=true;btn.value="Sending…";}'
        'var done=f.parentElement.querySelector(".w-form-done"),'
        'failN=f.parentElement.querySelector(".w-form-fail");'
        'if(failN)failN.style.display="none";'
        'fetch(f.action,{method:"POST",body:new FormData(f),'
        'headers:{Accept:"application/json"}}).then(function(r){'
        'if(r.ok){f.style.display="none";if(done)done.style.display="block";}'
        'else{if(failN)failN.style.display="block";'
        'if(btn){btn.disabled=false;btn.value=oldV;}}})'
        '.catch(function(){if(failN)failN.style.display="block";'
        'if(btn){btn.disabled=false;btn.value=oldV;}});});</script>')
    return html[:hend] + form + html[hend:]


POLISH_CSS = (
    '<style id="lula-polish">'
    'img{image-rendering:auto}'
    '.home-services_img,.faq_img{border-radius:16px;'
    'box-shadow:0 28px 56px rgba(0,0,0,.5),0 8px 18px rgba(0,0,0,.35);'
    'transform:perspective(1200px) rotateX(2.5deg) rotateY(-1.5deg);'
    'transition:transform .45s ease,box-shadow .45s ease}'
    '.home-services_img:hover,.faq_img:hover{transform:perspective(1200px) '
    'rotateX(0deg) rotateY(0deg);box-shadow:0 36px 72px rgba(0,0,0,.55)}'
    '.works_image{box-shadow:0 18px 40px rgba(0,0,0,.4)}'
    '.number-card{box-shadow:0 12px 28px rgba(0,0,0,.25)}'
    '.cta_component .dance{position:absolute;bottom:0;left:50%;'
    'transform:translateX(-50%);max-height:95%;width:auto;z-index:2}'
    '@media (max-width:767px){.home-services_img,.faq_img{transform:none;'
    'box-shadow:0 16px 32px rgba(0,0,0,.4)}'
    '.cta_component{min-height:320px !important}}'
    '@media (prefers-reduced-motion:reduce){.home-services_img,.faq_img'
    '{transition:none;transform:none}}'
    '</style>')


def polish_css(html: str) -> str:
    """R20: crisp images everywhere + a subtle 3D tilt/shadow on the selected
    imagery (service visuals + FAQ photo), not on everything."""
    if 'lula-polish' in html:
        return html
    at = html.find('</head>')
    if at < 0:
        return html
    return html[:at] + POLISH_CSS + html[at:]


def speed_marquee(html: str) -> str:
    if 'marqueeSpeed' in html:
        return html
    js = ('<script>addEventListener("load",function(){setTimeout(function(){'
          'if(!window.gsap)return;gsap.utils.toArray(".brands_card-group").forEach(function(el){'
          'gsap.getTweensOf(el).forEach(function(t){t.timeScale(1.6);});});},800);});</script>')
    idx = html.rfind('</body>')
    if idx >= 0:
        html = html[:idx] + js + html[idx:]
    return html


def footer_link(href, label, copy=False):
    btn = ""
    if copy:
        btn = (
            '<button fs-copyclip-element="click" fs-copyclip-duration="1200" '
            'fs-copyclip-activeclass="active" class="copy-icon">'
            '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">'
            '<path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4'
            'C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="CurrentColor" '
            'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>'
            '<path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4'
            'C4 14.7314 4.26863 15 4.6 15H9" stroke="CurrentColor" stroke-width="1.5" '
            'stroke-linecap="round" stroke-linejoin="round"></path></svg>'
            '<div class="tooltip"><div>Copied</div><div class="tooltip-tail"></div></div></button>')
    clip = ' fs-copyclip-element="copy-this"' if copy else ""
    return (
        '<a href="%(href)s" class="footer_link big-2 w-inline-block">'
        '<div class="footer_link-texts big-3">'
        '<p%(clip)s class="footer_link-text _1 big-4">%(label)s</p>'
        '<p class="footer_link-text _2 big-5">%(label)s</p></div>'
        '<div class="footer_link-dot big-7"></div></a>%(btn)s'
    ) % {"href": href, "label": label, "clip": clip, "btn": btn}


def footer_nav_link(href, label, target=True):
    t = ' target="_blank" rel="noopener"' if target else ""
    return (
        '<a data-wf--footer-link--variant="base" href="%(href)s"%(t)s class="footer_link w-inline-block">'
        '<div class="footer_link-texts"><p class="footer_link-text _1">%(label)s</p>'
        '<p class="footer_link-text _2">%(label)s</p></div>'
        '<div class="footer_link-dot"></div></a>' % {"href": href, "label": label, "t": t})


def footer_modal_link(label: str) -> str:
    return (
        '<a href="#" onclick="return openContactForm()" class="footer_link w-inline-block">'
        '<div class="footer_link-texts"><p class="footer_link-text _1">%(l)s</p>'
        '<p class="footer_link-text _2">%(l)s</p></div>'
        '<div class="footer_link-dot"></div></a>' % {"l": label})


def rebuild_contact_list(html: str) -> str:
    """Footer "Contact me:" column - LinkedIn, Find me at, Send a message only."""
    marker = next((m for m in ('<div class="text-size-regular">Contact me:</div>',
                               '<div class="text-size-regular">Contact us:</div>')
                   if m in html), None)
    if marker is None:
        return html
    at = html.find(marker)
    start = html.rfind('<div class="footer_links-group">', 0, at)
    new = (
        '<div class="footer_links-group">'
        '<div class="text-color-grey-400">' + marker + '</div>'
        '<div class="footer-links_columns"><div class="footer_links-list">'
        + footer_nav_link(LINKEDIN, "LinkedIn")
        + footer_nav_link(MAPS, "Find me at")
        + footer_modal_link("Contact me")
        + '</div></div></div>'
    )
    return html[:start] + new + html[balance_scan(html, start):]


def rebuild_menu_legal(html: str) -> str:
    """Mobile menu: logo + contact details instead of social links."""
    marker = '<div class="menu_legal-links">'
    at = html.find(marker)
    if at < 0:
        return html
    end = balance_scan(html, at)
    links = "".join(
        '<a href="%s"%s class="menu_legal-link">%s</a>' % (h, t, l)
        for h, l, t in (
            (LINKEDIN, "LinkedIn", ' target="_blank" rel="noopener"'),
            ("mailto:" + EMAIL, EMAIL, ""),
            (PHONE_HREF, PHONE_DISPLAY, ""),
            (MAPS, "Find me at — 41 Juta Street, Braamfontein", ' target="_blank" rel="noopener"'),
        ))
    return html[:at] + marker + links + "</div>" + html[end:]


def footer_business_block() -> str:
    """Footer "Let's get down to business:" column - phone, then email below."""
    return (
        '<div id="w-node-_0c480b83-389e-8cec-b163-4fac9d347eb6-1f0f9ecf" class="footer_links-group">'
        '<div class="text-color-grey-400">'
        '<div class="text-size-regular">Let\u2019s get down to business:</div>'
        '<div class="email">' + footer_link(PHONE_HREF, PHONE_DISPLAY, copy=True) + '</div>'
        '<div class="spacer-xsmall"></div>'
        '<div class="email">' + footer_link("mailto:" + EMAIL, EMAIL, copy=True) + '</div>'
        '</div>'   # .text-color-grey-400
        '</div>'   # .footer_links-group
    )


def rebuild_footer_contact(html: str) -> str:
    marker = '<div class="text-size-regular">Let\u2019s get down to business:</div>'
    at = html.find(marker)
    if at < 0:
        return html
    start = html.rfind('<div id="w-node-', 0, at)
    if start < 0:
        return html
    return html[:start] + footer_business_block() + html[balance_scan(html, start):]


def swap_logos(html: str, depth: int) -> str:
    prefix = rel("assets/", depth)
    for pat in (
        r'src="https://cdn\.prod\.website-files\.com/69f9c76884333229e651e7bc/69f9c76f84333229e651ebbf_'
        r'24919b71e4bd43573e60ad80e164cd49_logo-2\.svg"',
        r'src="https://cdn\.prod\.website-files\.com/69f9c76884333229e651e7bc/69f9c76f84333229e651e977_'
        r'24919b71e4bd43573e60ad80e164cd49_logo\.svg"',
    ):
        html = re.sub(pat, 'src="%slulasync-logo.svg"' % prefix, html)
    html = html.replace('alt="Nordic logo"', 'alt="LulaSync logo"')

    # favicons: drop every mirrored PNG icon, insert one SVG icon
    html = re.sub(
        r'<link href="https://cdn\.prod\.website-files\.com/69f9c76884333229e651e7bc/6a7e4adf[^"]*"'
        r'[^>]*/>', "", html)
    icon = '<link href="%slulasync-favicon.svg" rel="icon" type="image/svg+xml"/>' % prefix
    if '<meta content="Webflow" name="generator"/>' in html:
        html = html.replace('<meta content="Webflow" name="generator"/>',
                            '<meta content="Webflow" name="generator"/>' + icon, 1)
    elif 'name="viewport"/>' in html:
        html = re.sub(r'(<meta[^>]*name="viewport"[^>]*/>)', r'\1' + icon, html, count=1)
    return html


# --------------------------------------------------------------------------- #
# JSON-LD
# --------------------------------------------------------------------------- #
# per-page replacement for original-template CDN image URLs inside JSON-LD (set in process)
PAGE_IMAGE = "/assets/design-ops.png"

_JSONLD_FEATURED = ("Academia", "Ridemelo", "OnliPay", "Stance Insurance",
                    "ServiceWaze", "FoodieZone", "Collection of Projects",
                    "GBV hackathon")


def _jsonld_parts():
    by_name = {n: (h, s_, y, ni) for n, h, s_, y, ni in _WORK_CARDS}
    parts = []
    for name in _JSONLD_FEATURED:
        href, svc, _y, niche = by_name[name]
        url = href if href.startswith("http") else "/" + href.replace(".html", "")
        parts.append({
            "@type": "CreativeWork",
            "name": name.replace("&amp;", "&"),
            "url": url,
            "image": "/" + _CARD_COVERS[name],
            "about": [svc, niche],
        })
    return parts


def clean_node(node):
    if isinstance(node, list):
        out = []
        for item in node:
            item = clean_node(item)
            if item is None:
                continue
            if isinstance(item, str) and re.search(
                    r"facebook\.com/ua|instagram\.com/ua|clutch\.co", item):
                continue
            if isinstance(item, str) and "linkedin.com/company/" in item:
                item = LINKEDIN
            out.append(item)
        return out
    if isinstance(node, dict):
        out = {}
        for key, value in node.items():
            if key == "hasPart" and isinstance(value, list):
                out["hasPart"] = _jsonld_parts()
                continue
            if key == "logo":
                out["logo"] = {"@type": "ImageObject", "url": "/assets/lulasync-logo.svg"}
                continue
            if key == "image" and isinstance(value, str) \
                    and "cdn.prod.website-files.com" in value:
                out["image"] = PAGE_IMAGE
                continue
            if key == "email":
                out["email"] = EMAIL
                out["telephone"] = PHONE_DISPLAY
                continue
            if key == "award":
                out["knowsAbout"] = [n.replace("&amp;", "&") for _, n, _ in CLIENTS]
                continue
            if key == "address":
                out["address"] = {
                    "@type": "PostalAddress",
                    "streetAddress": ADDRESS["street"],
                    "addressLocality": ADDRESS["city"],
                    "addressRegion": ADDRESS["area"],
                    "addressCountry": ADDRESS["country"],
                }
                continue
            if key == "contactPoint":
                out["contactPoint"] = {
                    "@type": "ContactPoint",
                    "contactType": "Strategy",
                    "name": "Lulamile Mkhungela",
                    "telephone": PHONE_DISPLAY,
                    "url": CALENDLY,
                }
                continue
            if key == "sameAs":
                out["sameAs"] = [LINKEDIN, CALENDLY]
                continue
            out[key] = clean_node(value)
        return out
    if isinstance(node, str):
        return node.replace("", "LulaSync").replace("LulaSync", "LulaSync")
    return node


LEGAL_BLOCK_RE = re.compile(
    r"<br/>Email: hello@cosm?s?os\.studio<br/>"
    r"Website: https://www\.[^<]*<br/>")

LEGAL_BLOCK_NEW = (
    "Lulamile Mkhungela — LulaSync<br/>"
    "41 Juta Street, Braamfontein, Johannesburg, South Africa<br/>"
    "Email: %(email)s<br/>"
    "Phone: %(phone)s<br/>"
    "LinkedIn: %(linkedin)s<br/>")


def rebuild_legal_contact(html: str) -> str:
    new = (LEGAL_BLOCK_NEW.replace("%(email)s", EMAIL)
           .replace("%(phone)s", PHONE_DISPLAY)
           .replace("%(linkedin)s", LINKEDIN))
    return LEGAL_BLOCK_RE.sub(lambda _m: new, html)


def rebuild_jsonld(html: str) -> str:
    def repl(m):
        try:
            data = json.loads(m.group(1))
        except ValueError:
            return m.group(0)
        return ('<script type="application/ld+json">\n'
                + json.dumps(clean_node(data), indent=2, ensure_ascii=False)
                + "\n</script>")

    return re.sub(r'<script type="application/ld\+json">(.*?)</script>', repl, html, flags=re.S)


# --------------------------------------------------------------------------- #
# text pass
# --------------------------------------------------------------------------- #
PAIRS = [
    # --- brand -------------------------------------------------------------
    ("© 2026 ™", "© 2026 LulaSync"),
    ("Start your project<br/>with [old-brand]", "Start your project<br/>with LulaSync"),
    ("Why ", "Why LulaSync"),
    ("10 years. 500+ projects. Most clients stayed for years",
     "8 years. 12+ projects. Clients that stayed for years"),
    ("Neo Vision", "Academia"),
    ("Seatwiz", "Ridemelo"),
    ("Loamly", "OnliPay"),
    ("™", "LulaSync"),
    ("", "LulaSync"),
    ("with [old-brand]", "with LulaSync"),
    ("Digital design studio from Ukraine. We help IT tech companies with bringing "
     "immersive UI/UX and Brand design to their projects.",
     "I am Lulamile Mkhungela, a product designer and strategist in Johannesburg. "
     "I help tech companies ship clear, immersive UI/UX and brand design."),
    ("UI/UX design freelancer/agency for SaaS, AI, and digital products. We embed "
     "into your team and become the design partner you never have to re-onboard.",
     "Product design and strategy for SaaS, AI and digital products. I embed into your "
     "team and become the design partner you never have to re-onboard."),

    # --- booking / contact -------------------------------------------------
    (OLD_BOOKING, CALENDLY),
    ('<div class="nav_contact-name">Contact Anna</div>',
     '<div class="nav_contact-name">Contact Lulamile</div>'),
    ('<div class="home-header_position">Business Developer</div>',
     '<div class="home-header_position">Strategist</div>'),
    ("Contact Anna", "Contact Lulamile"),
    ("Business Developer", "Strategist"),
    ("Talk to us", "Talk to me"),
    ('href="mailto:hello@"', 'href="%s"' % PHONE_HREF),
    ("hello@", PHONE_DISPLAY),
    ("Contact us:", "Contact me:"),
    ("Contact Us", "Contact Me"),
    ("https://www.linkedin.com/company/", LINKEDIN),
    ("If yours isn&#x27;t here, ask our Strategist Anna on the call.",
     "If yours isn&#x27;t here, ask me about it on the call."),
    ("Drop us a message, Anna reviews every brief personally and gets back to you "
     "within one business day. From there it&#x27;s simple: we align on scope, sign "
     "the contract, and book your start date. Fast, clear, no back-and-forth.",
     "Drop me a message. I review every brief personally and get back to you within one "
     "business day. From there it&#x27;s simple: I scope it with you, send the "
     "contract, and book your start date. Fast, clear, no back-and-forth."),
    ("Contact our client manager to discuss your project and receive a more accurate "
     "timeline and scope estimate.",
     "Book a call with me to discuss your project and receive a more accurate timeline "
     "and scope estimate."),
    ("https://www. (the “Website”)", "this website (the “Website”)"),

    # --- stats / headings --------------------------------------------------
    ("60 international<br/>Design Awards", "8+ hackathons<br/>shipped"),
    ("International Design Awards", "Hackathons built &amp; shipped"),

    # --- about / team language -> solo -------------------------------------
    ("Europe based", "South Africa based"),
    ("A boutique design team that turns ideas into powerful digital experiences",
     "A solo design partner who turns ideas into powerful digital experiences"),
    ("We&#x27;re not a freelancer who disappears after delivery. Not a 200-person freelancer/agency "
     "where you&#x27;ll never meet a senior. We&#x27;re a boutique, embedded design team "
     "and the longer we work together, the sharper we get.",
     "I&#x27;m not an freelancer/agency that hands you to a junior after the pitch, and not a "
     "200-person shop where you&#x27;ll never meet the person doing the work. I embed "
     "with your team, and the longer you and I work together, the sharper the work gets."),
    ("Remote-friendly team growing fast", "Remote-friendly, based in Johannesburg"),
    ("Senior team, lasting results", "Senior-level work, lasting results"),
    ("A strong team of real humans", "A real human you can call"),
    ("Not AI Agents", "Not an AI agent"),
    ("We focus on quality over quantity", "I focus on quality over quantity"),
    ("+2 experts", "Work directly with me"),
    ("About us", "About me"),
    ("About Us", "About Me"),
    ("Why choose us", "Why work with me"),
    ("Our design services and the industries we design for",
     "My design services and the industries I design for"),
    ("Our Process", "My Process"),
    ("Our Clients", "Who I work with"),
    ("Our clients", "Who I work with"),
    ("Our works", "My work"),
    ("See Our Projects", "See My Projects"),
    ("See Our Work", "See My Work"),
    ("What we deliver", "What I deliver"),
    ("Who we design for", "Who I design for"),
    ("How we work", "How I work"),
    ("We think in product", "I think in product"),
    ("We ARE", "I AM"),
    ("Every week, we align on priorities, review progress, and keep strategy sharp.",
     "Every week, I align with you on priorities, review progress, and keep strategy sharp."),
    ("Every designer has 5+ years of product design experience. No juniors on client "
     "work. Every deliverable goes through Art Director review. You don&#x27;t manage "
     "quality. We do.",
     "Every project gets 8+ years of product design experience. No juniors on client "
     "work. Every deliverable goes out under my own name. You don&#x27;t manage quality. "
     "I do."),
    ("Your project is handled by a dedicated team of experienced designers, with senior "
     "oversight throughout the process. Depending on the project, the team may include a "
     "Product Designer, UX Designer, Art Director, and Project Manager. You’ll have a "
     "clear point of contact, regular check-ins, and transparent communication through "
     "the tools that work best for your team.",
     "Your project is handled by me, end to end, with senior oversight from kickoff to "
     "handoff. Depending on the scope I cover product design, UX, art direction and "
     "project management myself. You’ll have one point of contact, regular check-ins, "
     "and transparent communication through the tools that work best for your team."),
    ("Who will work on our project and how will we communicate?",
     "Who will work on my project and how will we communicate?"),
    ("Browse our portfolio of UX design projects", "Browse my portfolio of UX design projects"),
    ("UX design studio creating digital products that are clear, intuitive, and built to grow",
     "Product designer creating digital products that are clear, intuitive, and built to grow"),
    ("UI/UX design studio", "UI/UX design partner"),
    ("LulaSync design freelancer/agency", "LulaSync product design"),

    ("LulaSync", "LulaSync"),
]

# Longer copy rewrites applied after the brand pass.
COPY_PAIRS = [
    ("LulaSync | UI/UX &amp; Brand Design Studio",
     "LulaSync — Lulamile Mkhungela | Product Designer &amp; Strategist"),
    ("LulaSync | ", "LulaSync — Lulamile Mkhungela | "),
    ('<div class="navbar_logo-anim_text">Miltech product design</div>',
     '<div class="navbar_logo-anim_text">Product designer &amp; strategist</div>'),
    ('<div class="navbar_logo-anim_text is-abs">product design studio</div>',
     '<div class="navbar_logo-anim_text is-abs">UI/UX &amp; brand design</div>'),
    ('<div class="navbar_logo-anim_text is-abs">SaaS design partner</div>',
     '<div class="navbar_logo-anim_text is-abs">SaaS, AI &amp; EdTech</div>'),
    ('<div class="navbar_logo-anim_text is-abs">UI/UX design partner</div>',
     '<div class="navbar_logo-anim_text is-abs">Johannesburg, South Africa</div>'),
    ("LulaSync provides UI/UX design services for growing digital products, helping "
     "teams move faster. We embeds into your team, learns your product inside out, and "
     "becomes the design partner you never have to re-onboard.",
     "I provide UI/UX design services for growing digital products, helping teams move "
     "faster. I embed into your team, learn your product inside out, and become the "
     "design partner you never have to re-onboard."),
    ("LulaSync provides UI/UX design services for growing digital products, helping "
     "teams move faster. We embed into your team, learn your product inside out, and "
     "become the design partner you never have to re-onboard.",
     "I provide UI/UX design services for growing digital products, helping teams move "
     "faster. I embed into your team, learn your product inside out, and become the "
     "design partner you never have to re-onboard."),
    ("As a UX design studio, our focus is on creating digital products that are clear, "
     "intuitive, and built to grow. We start by understanding the product, the users, "
     "and the business context behind every decision. Through research, user flows, "
     "wireframes, prototypes, and close collaboration with product teams, we turn "
     "complex ideas into experiences that feel simple and natural to use.",
     "As a product designer, my focus is on creating digital products that are clear, "
     "intuitive, and built to grow. I start by understanding the product, the users, "
     "and the business context behind every decision. Through research, user flows, "
     "wireframes, prototypes, and close collaboration with your team, I turn complex "
     "ideas into experiences that feel simple and natural to use."),
    ("As a digital product design team, we cover the full production process",
     "As a digital product designer, I cover the full production process"),
    ("From UX architecture and interface design to reusable frontend components and "
     "launch support, we design and build product interfaces that are ready to scale.",
     "From UX architecture and interface design to reusable frontend components and "
     "launch support, I design and build product interfaces that are ready to scale."),
    ("From product strategy and UX architecture to UI design and design systems, we "
     "shape digital products that turn complex ideas into clear, intuitive, and "
     "scalable experiences.",
     "From product strategy and UX architecture to UI design and design systems, I "
     "shape digital products that turn complex ideas into clear, intuitive, and "
     "scalable experiences."),
    ("At LulaSync, we design UX/UI for military and defence technology where clarity, "
     "speed, and precision matter. We turn complex systems, data, and workflows into "
     "intuitive digital products that help operators understand information, stay aware "
     "of the situation, and make confident decisions.",
     "At LulaSync, I design UX/UI for military and defence technology where clarity, "
     "speed, and precision matter. I turn complex systems, data, and workflows into "
     "intuitive digital products that help operators understand information, stay aware "
     "of the situation, and make confident decisions."),
    ("A visual language that grows with your company. From first pitch deck to Series B "
     "we build brands that investors and users trust.",
     "A visual language that grows with your company. From first pitch deck to Series B "
     "I build brands that investors and users trust."),
    ("We design complex product interfaces that users actually understand.",
     "I design complex product interfaces that users actually understand."),
    ("We design and develop polished digital interfaces",
     "I design and develop polished digital interfaces"),
    ("We combine award-winning design with AI-powered development to ship faster than "
     "any freelancer/agency you&#x27;ve worked with.",
     "I combine award-worthy design with AI-powered development to ship faster than any "
     "freelancer/agency you&#x27;ve worked with."),
    ("Precise, reliable, mission-ready design. We build visual systems that communicate "
     "strength and trust",
     "Precise, reliable, mission-ready design. I build visual systems that communicate "
     "strength and trust"),
    ("We design interfaces that players and developers actually enjoy.",
     "I design interfaces that players and developers actually enjoy."),
    ("From EdTech platforms to university websites – we make education feel modern, "
     "credible, and worth clicking.",
     "From EdTech platforms to university websites – I make education feel modern, "
     "credible, and worth clicking."),
    ("We design SaaS products and AI tools that people actually want to use.",
     "I design SaaS products and AI tools that people actually want to use."),
    ("Healthcare is high-stakes. We design MedTech interfaces",
     "Healthcare is high-stakes. I design MedTech interfaces"),
    ("We design and build Web3 products", "I design and build Web3 products"),
    ("We design AI-powered products, platforms, and digital experiences",
     "I design AI-powered products, platforms, and digital experiences"),
    ("We design digital products for manufacturing teams",
     "I design digital products for manufacturing teams"),
    ("We design digital products for sports and wellness brands",
     "I design digital products for sports and wellness brands"),
    ("We design and develop websites and applications for various industries",
     "I design and develop websites and applications for various industries"),
    ("Absolutely. We can audit existing UX", "Absolutely. I can audit existing UX"),
    ("Absolutely. You do not need to have a detailed brief, designs, or technical "
     "documentation. We can help you shape the idea",
     "Absolutely. You do not need to have a detailed brief, designs, or technical "
     "documentation. I can help you shape the idea"),
    ("Yes, we do. We can cover the full design lifecycle",
     "Yes, I do. I can cover the full design lifecycle"),
    ("Yes. We can cover the full design lifecycle",
     "Yes. I can cover the full design lifecycle"),
    ("Yes. We can cover the entire process in-house, from UX and UI design to "
     "development and launch. This means you can work with one team throughout the "
     "project, with design and development closely connected from the start.",
     "Yes. I can cover the entire process, from UX and UI design to development and "
     "launch. This means you work with one person throughout the project, with design "
     "and development closely connected from the start."),
    ("Yes. We handle part both frontend and backend work in-house. When a project "
     "requires a specific technology or specialized expertise outside our core stack, "
     "we involve trusted development partners.",
     "Yes. I handle both frontend and backend work myself. When a project requires a "
     "specific technology or specialized expertise outside my core stack, I bring in "
     "trusted development partners."),
    ("Yes. We map user roles, workflows, permissions, and operational contexts",
     "Yes. I map user roles, workflows, permissions, and operational contexts"),
    ("Yes. We offer special conditions and a focused approach for teams that need to "
     "launch an MVP quickly and work with a limited budget. We help prioritize the "
     "essential features",
     "Yes. I offer special conditions and a focused approach for teams that need to "
     "launch an MVP quickly and work with a limited budget. I help prioritize the "
     "essential features"),
    ("Yes. We specialize in turning complex workflows",
     "Yes. I specialize in turning complex workflows"),
    ("Yes. Early stage is often where a small senior team helps most — you get a "
     "landing page in 3–5 days and first product surfaces without freelancer/agency overhead. "
     "We&#x27;ll be straight with you if your stage calls for a narrower scope than you "
     "had in mind.",
     "Yes. Early stage is often where a senior solo partner helps most — you get a "
     "landing page in 3–5 days and first product surfaces without freelancer/agency overhead. "
     "I&#x27;ll be straight with you if your stage calls for a narrower scope than you "
     "had in mind."),
    ("Yes. We are comfortable working with confidential products and can adapt our "
     "collaboration and documentation processes",
     "Yes. I am comfortable working with confidential products and can adapt my "
     "collaboration and documentation processes"),
    ("We know what retention, onboarding drop-off, and conversion mean for design "
     "decisions. When something looks good but creates friction, we say so.",
     "I know what retention, onboarding drop-off, and conversion mean for design "
     "decisions. When something looks good but creates friction, I say so."),
    ("We estimate each project based on its scope, complexity, goals, and required team "
     "involvement. We work on an hourly deposit based basis. Before we start, we define "
     "the expected deliverables, timeline, and budget so there are no surprises along "
     "the way.",
     "I estimate each project based on its scope, complexity and goals. I work on an "
     "hourly, deposit-based basis. Before I start, I define the expected deliverables, "
     "timeline, and budget so there are no surprises along the way."),
    ("Cost depends on scope: the number of surfaces, how much research is needed, and "
     "whether a design system already exists. After a discovery call we scope the work "
     "and give you a clear quote before anything starts",
     "Cost depends on scope: the number of surfaces, how much research is needed, and "
     "whether a design system already exists. After a discovery call I scope the work "
     "and give you a clear quote before anything starts"),
    ("Brand motion, hero animation, 3D visuals, coordinated through our partner network.",
     "Brand motion, hero animation, 3D visuals, coordinated through my partner network."),
    ("You still work through one coordinated process, with LulaSync managing the "
     "project, communication, design alignment",
     "You still work through one coordinated process, with me managing the project, "
     "communication, design alignment"),
    ("you can take your product from idea to launch with LulaSync",
     "you can take your product from idea to launch with me"),
    ("Ask whether the team has shipped learning products before, and whether they can "
     "talk about onboarding drop-off and retention rather than only visuals. Check who "
     "actually does the work: you want direct access to senior designers, not a sales "
     "lead followed by a handoff to juniors. And ask how they handle disagreement — a "
     "partner who tells you when something looks good but creates friction is worth "
     "more than one who only agrees.",
     "Ask whether I have shipped learning products before, and whether I can talk about "
     "onboarding drop-off and retention rather than only visuals. Check who actually "
     "does the work: with me you get direct access to the senior designer, not a sales "
     "lead followed by a handoff to juniors. And ask how I handle disagreement — a "
     "partner who tells you when something looks good but creates friction is worth "
     "more than one who only agrees."),
    ('Start your project with LulaSync<span class="tab_superscript">™</span>',
     'Start your project with LulaSync'),
    ("Team available 10:00–18:00 Kyiv time (UTC+3)", "Available 09:00–18:00 SAST (UTC+2)"),
    ("UI/UX product design team that brings product strategy, UX, and interface design together.",
     "UI/UX product design that brings product strategy, UX, and interface design together."),
    ("Done inside the studio, in lockstep with the product surface.",
     "Done in-house, in lockstep with the product surface."),
    ("UX &amp; product design freelancer/agency",
     "UX &amp; product design for freelancer/agency"),
    # case-study narration
    ("We designed the full experience around him", "I designed the full experience around him"),
    ("We built the visual system from the logo up", "I built the visual system from the logo up"),
    ("We developed the complete story of Mad Dogs", "I developed the complete story of Mad Dogs"),
    ("we used AI tools to generate the visual assets. This allowed us to deliver",
     "I used AI tools to generate the visual assets. This allowed me to deliver"),
    ("we created a distinctive visual language", "I created a distinctive visual language"),
    ("We rebuilt B1A end to end", "I rebuilt B1A end to end"),
    ("We rebuilt the experience end to end", "I rebuilt the experience end to end"),
    ("We designed a swipeable, Tinder-style", "I designed a swipeable, Tinder-style"),
    ("We had to build a logo and corporate identity", "I had to build a logo and corporate identity"),
    ("We had to give a recruiting startup a visual identity",
     "I had to give a recruiting startup a visual identity"),
    ("We shaped a bold, user friendly experience", "I shaped a bold, user friendly experience"),
    ("We optimized the website with a main screen", "I optimized the website with a main screen"),
    ("Our studio was tasked with creating", "I was tasked with creating"),
    ("We needed to describe the software", "I needed to describe the software"),
    ("Our solution prioritizes", "My solution prioritizes"),
]

# Short pronoun swaps, applied with word boundaries and only to visible text
# (never inside <script>/<style> or inside a tag's attribute list).
PRONOUNS = [
    ("We", "I"), ("we", "I"),
    ("Our", "My"), ("our", "my"),
    ("Us", "Me"), ("us", "me"),
]
PRONOUN_RE = [(re.compile(r"\b%s\b" % re.escape(a)), b) for a, b in PRONOUNS]
CONTRACTIONS = [
    ("We&#x27;re", "I&#x27;m"), ("we&#x27;re", "I&#x27;m"),
    ("We’ll", "I’ll"), ("we’ll", "I’ll"),
    ("We'll", "I'll"), ("we'll", "I'll"),
    ("We’ve", "I’ve"), ("we’ve", "I’ve"),
    ("We've", "I've"), ("we've", "I've"),
    ("We are", "I am"), ("we are", "I am"),
    ("We were", "I was"), ("we were", "I was"),
]

TAG_RE = re.compile(r"<[^>]*>", re.S)
BLOCK_RE = re.compile(r"<(script|style)\b.*?</\1>", re.S | re.I)


def swap_pronouns_in_text(chunk: str) -> str:
    for a, b in CONTRACTIONS:
        chunk = chunk.replace(a, b)
    for rx, b in PRONOUN_RE:
        chunk = rx.sub(b, chunk)
    return chunk


def apply_pronouns(html: str) -> str:
    pieces = []
    last = 0
    for block in BLOCK_RE.finditer(html):
        pieces.append(_pronouns_outside_blocks(html[last:block.start()]))
        pieces.append(block.group(0))
        last = block.end()
    pieces.append(_pronouns_outside_blocks(html[last:]))
    return "".join(pieces)


def _pronouns_outside_blocks(chunk: str) -> str:
    out = []
    last = 0
    for tag in TAG_RE.finditer(chunk):
        out.append(swap_pronouns_in_text(chunk[last:tag.start()]))
        out.append(tag.group(0))
        last = tag.end()
    out.append(swap_pronouns_in_text(chunk[last:]))
    return "".join(out)


def apply_text(html: str) -> str:
    for a, b in PAIRS:
        html = html.replace(a, b)
    for a, b in COPY_PAIRS:
        html = html.replace(a, b)
    return apply_pronouns(html)


# (page name, native pixel width) — caps display size so the PNGs are never
# upscaled (no blur); the black column sides blend into the black page.
RIDEMELO_PAGES = [("1", 1672), ("2", 1671), ("3", 1671), ("4", 1671), ("5", 1671),
                  ("6", 1671), ("7", 1671), ("8", 1671), ("9", 1671), ("10", 1671),
                  ("12", 1671)]
ACADEMIA_PAGES = [("1-1", 595)] + [(str(n), 595) for n in
                 list(range(1, 23)) + list(range(25, 56))]
ONLIPAY_PAGES = [("Cover", 2571), ("2", 2571), ("3", 2571), ("4", 2571), ("5", 2571),
                 ("6", 2571), ("7", 2571), ("8", 2571), ("9", 2571), ("10", 2571),
                 ("11", 2571), ("12", 2571), ("13", 2571), ("14", 2571), ("15", 2571),
                 ("16", 2571), ("18", 2666)]

FIGMA_PROTOS = {
    "seatwiz.html": None,
    "neo-vision.html": "https://www.figma.com/proto/YsutUkv4q0CunhY0FZqQvm/Academia"
                       "?node-id=4443-205373&amp;t=d8Gd0cRv1qIozpqu-1",
    "loamly.html": "https://www.figma.com/proto/6AOnux3wgVM7zfgIsxuO0P/Onli-Pay"
                   "?node-id=619-44407&amp;t=ShbOi3DMU3Hbuv9a-1",
}

# proper cover art for the named project cards (relative to repo root)
_CARD_COVERS = {
    "Ridemelo": "assets/ridemelo-cover.png",
    "Academia": "assets/Academia-cover.png",
    "OnliPay": "assets/new-cover.png",
    "Stance Insurance": "assets/stance-cover.webp",
    "ServiceWaze": "assets/servicewaze.webp",
    "WeStudySync": "assets/westudysync-cover.svg",
    "LulaUnifid Market": "assets/coming.png",
    "LinkPips": "assets/coming.png",
    "Sesyme": "assets/portfolio/sesyme.png",
    "Entrehive": "assets/coming.png",
    "DesignOpsZero": "assets/design-op.png",
    "Design Systems &amp; Tokens": "assets/design-ops.png",
    "Collection of Projects": "assets/figma.png",
    "UX Resources Library": "assets/ux-resources.png",
    "Retail hackathon": "assets/hack.png",
    "Agritech hackathon": "assets/farmers-funding.webp",
    "GBV hackathon": "assets/hacky.webp",
    "FoodieZone": "assets/foodiezone.png",
    "Africa Cuisine": "assets/africa-cuisine.png",
    "Wandies": "assets/wandies.png",
    "SK Auto Emporium": "assets/sk-auto.png",
    "King Kutter": "assets/king-cutter.png",
    "SNB website": "assets/portfolio/snb.png",
    "Nerdma website": "assets/portfolio/nerdma.png",
    "Add More Digital": "assets/addmore.png",
    "Explora": "assets/webdesign/explora.jpg",
    "Fitness Studio": "assets/webdesign/fitness-studio.jpg",
    "Hosdo": "assets/webdesign/hosdo.png",
    "Studyzel": "assets/webdesign/studyzel.jpg",
}
# UI design cards use their own design image as the cover.
for _f, _n in _UI_DESIGNS:
    _CARD_COVERS[_n] = "assets/" + _f


def rebuild_case_body(html: str, pages, asset_dir: str, prefix: str = "Page ",
                      proto_url: str = None) -> str:
    """Replace the auto-generated Webflow works body with the case-study page
    images, stacked flush on black so they read as one continuous document, and
    blacken the page chrome so nothing frames them as pasted images."""
    html = html.replace("<body>", '<body style="background:#000">', 1)
    open_tag = '<main class="main-wrapper is-works">'
    i = html.find(open_tag)
    if i == -1:
        return html
    j = html.find("</main>", i)
    if j == -1:
        return html
    imgs = []
    for k, (n, w) in enumerate(pages):
        load = "eager" if k == 0 else "lazy"
        imgs.append(
            '<img src="../../%s/%s%s.png" alt="" loading="%s" decoding="async" '
            'style="display:block;width:100%%;max-width:%dpx;height:auto;margin:0 '
            'auto;border:0;border-radius:0;box-shadow:none;background:transparent" '
            '/>' % (asset_dir, prefix, n, load, w))
    tail = ""
    if proto_url:
        tail = ('<div style="background:#000;text-align:center;padding:56px 24px '
                '80px;line-height:1.2"><a href="%s" target="_blank" rel="noopener" '
                'style="display:inline-block;padding:18px 42px;border-radius:999px;'
                'background:#fff;color:#000;font-weight:700;font-size:16px;'
                'letter-spacing:.02em;text-decoration:none">View Figma Prototype'
                "</a></div>" % proto_url)
    body = ('<section id="case-body" style="background:#000;margin:0;padding:0;'
            'line-height:0">' + "".join(imgs) + tail + "</section>")
    new_open = open_tag[:-1] + ' style="background:#000">'
    return html[:i] + new_open + "\n" + body + "\n" + html[j:]


def rebuild_microsite(html: str) -> str:
    """The mirrored Mad Dogs micro-site (maddogs.)."""
    html = html.replace('href="https://www./"', 'href="../www./index.html"')
    html = re.sub(r'<li class="type-instagram"[^>]*>.*?</li>', "", html, flags=re.S)
    html = re.sub(r'src="[^"]*footer[^"]*logo[^"]*\.svg"',
                  'src="../assets/lulasync-logo.svg"', html)
    return html


# --------------------------------------------------------------------------- #
def process(path: str) -> bool:
    with open(path, encoding="utf-8") as fh:
        original = fh.read()

    depth = os.path.relpath(path, ROOT).count(os.sep)

    html = original
    html = rebuild_footer_socials(html)
    html = rebuild_other_socials(html)
    html = strip_clutch(html)
    html = drop_sections_containing(
        html, '<section class="section_about-header">',
        "Trusted by product teams across the US and Europe")
    html = strip_world_clocks(html)
    html = strip_branded_media(html, depth)
    html = rebuild_showreel_video(html, depth)
    html = rebuild_header_wordmark(html, depth)
    html = rebuild_contact_list(html)
    html = remove_inline_form_group(html)
    html = rebuild_footer_contact(html)
    html = rebuild_menu_legal(html)
    html = rebuild_footer_legal(html)
    html = append_contact_modal(html)
    html = rebuild_nav(html, depth)
    base = os.path.basename(path)
    global PAGE_IMAGE
    PAGE_IMAGE = "/" + _META_IMG_BY_BASE.get(base, "assets/design-ops.png")
    html = rebuild_stock_images(html, depth)
    html = rebuild_contact_pic(html, depth)
    html = rebrand_chat(html, depth)
    html = rebuild_meta_images(html, base, depth)
    if base == "projects.html":
        html = rebuild_works(html)
        html = rebuild_works_form(html)
    else:
        html = rebuild_projects_filters(html)
    if base == "index.html":
        html = home_dance_cta(html)
    html = rebuild_clients_reviews(html, depth)
    html = rebuild_static_works_lists(html, depth)
    html = speed_marquee(html)
    if os.path.basename(os.path.dirname(path)) == "services":
        html = rebuild_services_sections(html)
        html = rebuild_why_lulasync(html)
    if base == "seatwiz.html":
        html = rebuild_case_body(html, RIDEMELO_PAGES, "assets/ridemelo",
                                 proto_url=FIGMA_PROTOS["seatwiz.html"])
    elif base == "neo-vision.html":
        html = rebuild_case_body(html, ACADEMIA_PAGES, "assets",
                                 proto_url=FIGMA_PROTOS["neo-vision.html"])
    elif base == "loamly.html":
        html = rebuild_case_body(html, ONLIPAY_PAGES, "assets", prefix="",
                                 proto_url=FIGMA_PROTOS["loamly.html"])
    html = rebuild_stats(html)
    html = polish_css(html)
    html = rebuild_award_marquee(html, depth)
    html = rebuild_footer_wordmark(html, depth)
    html = swap_logos(html, depth)
    html = rebuild_legal_contact(html)
    html = rebuild_jsonld(html)
    if os.path.basename(os.path.dirname(path)) == "maddogs.":
        html = rebuild_microsite(html)
    html = apply_text(html)
    # R20: the Performance Marketing card copy is the user's verbatim wording,
    # which keeps "our marketing partners" — undo the generic pronoun pass here
    html = html.replace("coordinated through my marketing partners",
                        "coordinated through our marketing partners")

    if html != original:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(html)
        return True
    return False


def main() -> int:
    prepare_wordmark_png()
    targets = sorted(
        p for p in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)
        if os.sep + ".git" + os.sep not in p
    )
    changed = 0
    for path in targets:
        try:
            if process(path):
                changed += 1
        except SystemExit as exc:
            print("FAILED %s: %s" % (os.path.relpath(path, ROOT), exc))
            return 1
    print("scanned %d html files, rewrote %d" % (len(targets), changed))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
