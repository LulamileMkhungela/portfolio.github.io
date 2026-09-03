#!/usr/bin/env python3

from __future__ import annotations

import glob
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LINKEDIN = "https://www.linkedin.com/in/lulamile-mkhungela/"

_ROOT_JUNK = ["hts-cache", "backblue.gif", "fade.gif", "cookies.txt"]

# Stub pages  captured for Webflow/GTM endpoints that returned an error
# page. None of them are linked from the site.
MIRROR_STUBS = [
    "+.html", "+", "Edg.html", "Edg", "EdgA.html", "EdgA", "EdgiOS.html", "EdgiOS",
    "Oc.html", "a.html", "analytics.html", "b.blockedURI.html", "c.html",
    "e.path,w.location.origin.html", "embed.html", "embed", "gtm.html",
    "sw_iframe.html",
]

# any banner/header comment added by the mirror tool
# "Added by "
_RE = re.compile(r"\n?<!--[^>]*?[^>]*?-->\n?", re.S)


def remove(path: str) -> None:
    full = os.path.join(ROOT, path)
    if os.path.isdir(full):
        shutil.rmtree(full)
    elif os.path.exists(full):
        os.remove(full)


def move(src: str, dst: str) -> None:
    s, d = os.path.join(ROOT, src), os.path.join(ROOT, dst)
    if not os.path.exists(s):
        return
    os.makedirs(os.path.dirname(d) or ROOT, exist_ok=True)
    shutil.move(s, d)


def fix_paths(html: str) -> str:
    """Rewrite references for the new layout (order matters)."""
    # the micro-site's own absolute asset/link URLs come first
    html = html.replace('href="https://maddogs./"', 'href="./"')
    html = html.replace("https://maddogs./", "")
    html = html.replace('href="../www./index.html"', 'href="../index.html"')
    # relative folder references
    for old, new in (
        ("../../maddogs./", "../maddogs/"),
        ("../maddogs./", "maddogs/"),
        ("maddogs./", "maddogs/"),
        ("../../video./", "../video/"),
        ("../video./", "video/"),
        ("video./", "video/"),
    ):
        html = html.replace(old, new)
    # deleted pages: repoint any leftover references to the merged services page
    for old, new in (
        ("industries/military-tech.html", "services/product-uiux-design.html"),
        ("industries/education-edtech.html", "services/product-uiux-design.html"),
        ("services/ui-engineering.html", "services/product-uiux-design.html"),
        ("ui-engineering.html", "product-uiux-design.html"),
    ):
        html = html.replace(old, new)
    # every page moved up exactly one directory level
    return re.sub(r"\.\./((?:\.\./)*)assets/", r"\1assets/", html)


def purge_old_branding(html: str) -> str:
    html = _RE.sub("\n", html)
    html = html.replace('data-wf-domain="lulasync"', 'data-wf-domain="lulasync"')
    # JSON-LD / structured data URLs -> root-relative (no domain exists yet)
    html = html.replace("https://www.", "")
    html = html.replace('"url": ""', '"url": "%s"' % LINKEDIN)
    # the social share card still pointed at the old studio's OG image
    html = re.sub(r'<meta content="[^"]*lulasync-opengraph[^"]*" property="og:image"/>', "", html)
    return html


CASE_DEFAULT_COVER = ("https://cdn.prod.website-files.com/69f9c76f84333229e651e903/"
                      "6a87eeffd9af8f7c9bfc2987_Cover.webp")

# correct cover art for case pages (relative to the projects/ directory)
CASE_COVERS = {
    "seatwiz.html": "../assets/ridemelo-cover.png",
    "neo-vision.html": "../assets/Academia-cover.png",
    "loamly.html": "../assets/new-cover.png",
}


def _case_meta(path: str):
    with open(path, encoding="utf-8", errors="replace") as fh:
        h = fh.read()
    ti = re.search(r"<title>([^<]*)</title>", h)
    og = (re.search(r'property="og:image"[^>]*content="([^"]+)"', h)
          or re.search(r'content="([^"]+)"[^>]*property="og:image"', h))
    img = og.group(1) if og else ""
    if not img:
        for m in re.finditer(r'<img[^>]*src="(https://cdn[^"]+)"', h):
            u = m.group(1)
            if "Profile Picture" not in u and "logo" not in u.lower():
                img = u
                break
    if not img:
        img = CASE_DEFAULT_COVER
    base = os.path.basename(path)
    if base in CASE_COVERS:
        img = CASE_COVERS[base]
    name = ti.group(1).split("|")[0].strip() if ti else base
    return name or base, img


def _case_link(href: str, label: str, name: str, img: str) -> str:
    return (
        '<a href="%s" style="flex:1 1 260px;text-decoration:none;color:inherit">'
        '<div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#888">%s</div>'
        '<div style="margin-top:10px;border-radius:14px;overflow:hidden">'
        '<img src="%s" alt="%s" style="width:100%%;height:180px;object-fit:cover;display:block"/></div>'
        '<div style="margin-top:10px;font-weight:700;font-size:18px">%s</div></a>'
        % (href, label, img, name, name))


def add_case_nav(html: str, path: str) -> str:
    d = os.path.dirname(path)
    if os.path.basename(d) != "projects" or os.path.basename(path) == "maddogs.html":
        return html
    if 'id="case-prev-next"' in html:
        return html
    # cycle only Lulamile's own case studies, in works-grid order
    files = [x for x in ("neo-vision.html", "seatwiz.html", "loamly.html")
             if os.path.exists(os.path.join(d, x))]
    me = os.path.basename(path)
    if me not in files or len(files) < 2:
        return html
    i = files.index(me)
    prevf, nextf = files[i - 1], files[(i + 1) % len(files)]
    pn, pi = _case_meta(os.path.join(d, prevf))
    nn, ni = _case_meta(os.path.join(d, nextf))
    at = html.find("<footer")
    if at < 0:
        return html
    section = (
        '<section id="case-prev-next" class="section"><div class="padding-global is-tiny">'
        '<div class="container-large"><div style="display:flex;gap:24px;justify-content:'
        'space-between;flex-wrap:wrap">'
        + _case_link(prevf, "Previous", pn, pi)
        + _case_link(nextf, "Next", nn, ni)
        + '</div></div></div></section>')
    return html[:at] + section + html[at:]


def main() -> int:
    for junk in _ROOT_JUNK:
        remove(junk)

    site = os.path.join(ROOT, "www.")
    for stub in MIRROR_STUBS:
        remove(os.path.join("www.", stub))

    # the redirect placeholder at the repo root makes way for the real homepage
    remove("index.html")
    # industries merged into services; drop the standalone pages
    remove(os.path.join("www.", "industries"))
    remove(os.path.join("www.", "services", "ui-engineering.html"))

    move("video.", "video")
    # keep renamed case-study video files in sync with the new project names
    vdir = os.path.join(ROOT, "video")
    if os.path.isdir(vdir):
        for name in sorted(os.listdir(vdir)):
            new = name.replace("Seatwiz", "Ridemelo").replace("Loamly", "OnliPay")
            if new != name:
                os.rename(os.path.join(vdir, name), os.path.join(vdir, new))
    move("maddogs.", "maddogs")
    if os.path.isdir(site):
        for name in sorted(os.listdir(site)):
            move(os.path.join("www.", name), name)
        os.rmdir(site)

    for variant in ("projects1e61.html", "projects201a.html",
                    "projects36cc.html", "projectsc4c4.html"):
        remove(variant)

    # the works grid now carries only Lulamile's own projects; drop the
    keep_cases = {"neo-vision.html", "seatwiz.html", "loamly.html"}
    remove("maddogs")
    pdir = os.path.join(ROOT, "projects")
    if os.path.isdir(pdir):
        for name in os.listdir(pdir):
            if name.endswith(".html") and name not in keep_cases:
                remove(os.path.join("projects", name))

    changed = 0
    for path in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True):
        if os.sep + ".git" + os.sep in path:
            continue
        with open(path, encoding="utf-8", errors="replace") as fh:
            original = fh.read()
        html = add_case_nav(purge_old_branding(fix_paths(original)), path)
        if html != original:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(html)
            changed += 1

    leftover = []
    for path in glob.glob(os.path.join(ROOT, "**", "*"), recursive=True):
        if os.sep + ".git" + os.sep in path or not os.path.isfile(path):
            continue
        if "lulasync" in path.lower():
            leftover.append("path: " + os.path.relpath(path, ROOT))
            continue
        if path.endswith((".html", ".svg", ".js", ".css", ".json")):
            try:
                with open(path, encoding="utf-8", errors="replace") as fh:
                    body = fh.read()
            except OSError:
                continue
            hits = len(re.findall(r"lulasync", body, re.I))
            if hits:
                leftover.append("%s (%d)" % (os.path.relpath(path, ROOT), hits))

    print("rewrote %d html files" % changed)
    print("remaining 'lulasync' references: %d" % len(leftover))
    for item in leftover[:40]:
        print("  ", item)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
