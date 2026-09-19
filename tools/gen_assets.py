import os

OUT = "/home/user/new-porty/assets"
os.makedirs(OUT + "/logos", exist_ok=True)

H = 261.314
STEM = 36.0
BAR = 30.0

def f(x):
    return ("%g" % round(float(x), 3))

def rect(x, y, w, h):
    return "M%s %sH%sV%sH%sZ" % (f(x), f(y), f(x + w), f(y + h), f(x))

def gL(x, w):
    return "M%s 0H%sV%sH%sV%sH%sZ" % (f(x), f(x+STEM), f(H-BAR), f(x+w), f(H), f(x))

def gU(x, w):
    return "M%s 0H%sV%sH%sV0H%sV%sH%sZ" % (f(x), f(x+STEM), f(H-BAR), f(x+w-STEM), f(x+w), f(H), f(x))

def gA(x, w):
    crossTop, crossBot = 150.0, 150.0 + BAR
    outer = "M%s 0H%sV%sH%sV%sH%sV%sH%sZ" % (
        f(x), f(x+w), f(H), f(x+w-STEM), f(crossBot), f(x+STEM), f(H), f(x))
    hole = "M%s %sH%sV%sH%sZ" % (f(x+STEM), f(BAR), f(x+w-STEM), f(crossTop), f(x+STEM))
    return outer + hole

def gS(x, w):
    midT, midB = 116.0, 116.0 + BAR
    return ("M%s 0H%sV%sH%sV%sH%sV%sH%sV%sH%sV%sH%sZ" % (
        f(x), f(x+w), f(BAR), f(x+STEM), f(midT), f(x+w), f(H),
        f(x), f(H-BAR), f(x+w-STEM), f(midB), f(x)))

def gY(x, w):
    mid = x + w / 2.0
    j = 150.0
    left = "M%s 0H%sL%s %sH%sZ" % (f(x), f(x+STEM), f(mid+STEM/2), f(j), f(mid-STEM/2))
    right = "M%s 0H%sL%s %sH%sZ" % (f(x+w-STEM), f(x+w), f(mid+STEM/2), f(j), f(mid-STEM/2))
    stem = rect(mid - STEM/2, j, STEM, H - j)
    return left + right + stem

def gN(x, w):
    left = rect(x, 0, STEM, H)
    right = rect(x + w - STEM, 0, STEM, H)
    diag = "M%s 0H%sL%s %sH%sZ" % (f(x), f(x+STEM), f(x+w), f(H), f(x+w-STEM))
    return left + right + diag

def gC(x, w):
    return "M%s 0H%sV%sH%sV%sH%sV%sH%sZ" % (
        f(x+w), f(x), f(H), f(x+w), f(H-BAR), f(x+STEM), f(BAR), f(x+w))

GLYPHS = {"L": gL, "U": gU, "A": gA, "S": gS, "Y": gY, "N": gN, "C": gC}
EVENODD = {"A"}

def wordmark_svg(word, total_w=1366.87, height=H, letter_w=115.0):
    n = len(word)
    gap = (total_w - n * letter_w) / (n - 1)
    parts = []
    for i, ch in enumerate(word):
        x = i * (letter_w + gap)
        rule = ' fill-rule="evenodd"' if ch in EVENODD else ""
        parts.append('<path d="%s"%s fill="currentColor"></path>' % (GLYPHS[ch](x, letter_w), rule))
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%%" viewBox="0 0 %s %s" fill="none" '
        'preserveAspectRatio="xMidYMid meet" role="img" aria-label="LulaSync">'
        '<title>LulaSync</title>%s</svg>'
    ) % (f(total_w), f(height), "".join(parts))

open(OUT + "/lulasync-wordmark.svg", "w").write(wordmark_svg("LULASYNC"))

# ---------------------------------------------------------------- navbar logo
def navbar_logo():
    mark = (
        '<rect x="1" y="1" width="34" height="34" rx="10" fill="none" stroke="currentColor" stroke-width="2.4"/>'
        '<path d="M12 9v13.5h9.5" fill="none" stroke="currentColor" stroke-width="3.2" '
        'stroke-linecap="square"/>'
        '<path d="M26.5 12.5a8.6 8.6 0 0 1-2.6 12.9" fill="none" stroke="currentColor" '
        'stroke-width="2.4" stroke-linecap="round"/>'
        '<path d="M24.2 12.2h3.4v3.4" fill="none" stroke="currentColor" stroke-width="2.4" '
        'stroke-linecap="round" stroke-linejoin="round"/>'
    )
    text = (
        '<text x="44" y="26.5" fill="currentColor" font-family="-apple-system,BlinkMacSystemFont,'
        '\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,sans-serif" font-size="22" font-weight="700" '
        'letter-spacing="-0.4">Lula<tspan font-weight="400">Sync</tspan></text>'
    )
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="36" viewBox="0 0 150 36" '
            'fill="none" role="img" aria-label="LulaSync"><title>LulaSync</title>' + mark + text + '</svg>')

open(OUT + "/lulasync-logo.svg", "w").write(navbar_logo())

def favicon():
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">'
            '<rect width="64" height="64" rx="16" fill="#0F1011"/>'
            '<path d="M20 14v25h17" fill="none" stroke="#F5F5F5" stroke-width="6" stroke-linecap="square"/>'
            '<path d="M48 22a16 16 0 0 1-5 24" fill="none" stroke="#F5F5F5" stroke-width="4.5" '
            'stroke-linecap="round"/>'
            '<path d="M44.5 21.5h6v6" fill="none" stroke="#F5F5F5" stroke-width="4.5" '
            'stroke-linecap="round" stroke-linejoin="round"/></svg>')

open(OUT + "/lulasync-favicon.svg", "w").write(favicon())

# ------------------------------------------------------------- client logos
FONT = ("-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif")

def logo(fname, mark, name, sub=None, width=210):
    sub_el = ""
    name_size = 19
    name_y = 27
    if sub:
        name_y = 21
        sub_el = ('<text x="52" y="36" fill="currentColor" opacity="0.62" font-family="%s" '
                 'font-size="11.5" font-weight="600" letter-spacing="1.2">%s</text>' % (FONT, sub))
    return ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="48" viewBox="0 0 %d 48" '
            'fill="none" role="img" aria-label="%s"><title>%s</title>'
            '<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" '
            'stroke-linejoin="round">%s</g>'
            '<text x="52" y="%d" fill="currentColor" font-family="%s" font-size="%d" '
            'font-weight="700" letter-spacing="-0.2">%s</text>%s</svg>'
            % (width, width, name, name, mark, name_y, FONT, name_size, name, sub_el))

MARKS = {
    # Vodacom - speech mark
    "vodacom": ('<path d="M6 10h24a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H18l-9 7v-7H6a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" '
                'fill="currentColor" stroke="none" opacity="0.9"/>'
                '<circle cx="12" cy="20" r="2" fill="#0F1011" stroke="none"/>'
                '<circle cx="18" cy="20" r="2" fill="#0F1011" stroke="none"/>'
                '<circle cx="24" cy="20" r="2" fill="#0F1011" stroke="none"/>'),
    # Nerdma - hex node
    "nerdma": ('<path d="M18 4 31 11.5v15L18 34 5 26.5v-15Z" fill="currentColor" stroke="none" opacity="0.9"/>'
               '<path d="M12 24l4.5 4.5L25 15" stroke="#0F1011" stroke-width="3"/>'),
    # Addmore Digital - plus tile
    "addmore-digital": ('<rect x="4" y="6" width="28" height="28" rx="7" fill="currentColor" stroke="none" opacity="0.9"/>'
                        '<path d="M18 13v14M11 20h14" stroke="#0F1011" stroke-width="3.4"/>'),
    # The Digital Academy - open book / cap
    "the-digital-academy": ('<path d="M18 6 33 13 18 20 3 13Z" fill="currentColor" stroke="none" opacity="0.9"/>'
                            '<path d="M8 16v8c0 2.6 4.5 4.8 10 4.8s10-2.2 10-4.8v-8" stroke="currentColor"/>'
                            '<path d="M30 15v10" stroke="currentColor"/>'),
    # mLab - flask
    "mlab": ('<path d="M14 5h8v9l8 15a4 4 0 0 1-3.5 6h-17A4 4 0 0 1 6 29l8-15Z" fill="currentColor" stroke="none" opacity="0.9"/>'
             '<path d="M11 26h14" stroke="#0F1011" stroke-width="2.6"/>'
             '<circle cx="16" cy="31" r="2" fill="#0F1011" stroke="none"/>'
             '<circle cx="22" cy="33" r="1.4" fill="#0F1011" stroke="none"/>'),
    # JCSE @ Wits - shield
    "jcse-wits": ('<path d="M18 4l13 4v11c0 8-5.5 13.4-13 16C10.5 32.4 5 27 5 19V8Z" fill="currentColor" stroke="none" opacity="0.9"/>'
                  '<path d="M12 18h12M18 12v12" stroke="#0F1011" stroke-width="2.8"/>'),
    # Intellehub SA - connected nodes
    "intellehub": ('<circle cx="18" cy="19" r="4.6" fill="currentColor" stroke="none"/>'
                   '<circle cx="6" cy="8" r="3.2" fill="currentColor" stroke="none"/>'
                   '<circle cx="30" cy="8" r="3.2" fill="currentColor" stroke="none"/>'
                   '<circle cx="6" cy="30" r="3.2" fill="currentColor" stroke="none"/>'
                   '<circle cx="30" cy="30" r="3.2" fill="currentColor" stroke="none"/>'
                   '<path d="M9 10.5 14.5 16M27 10.5 21.5 16M9 27.5 14.5 22M27 27.5 21.5 22" stroke="currentColor"/>'),
    # DPSA - cog
    "dpsa": ('<circle cx="18" cy="19" r="13" fill="currentColor" stroke="none" opacity="0.9"/>'
             '<circle cx="18" cy="19" r="4.6" fill="#0F1011" stroke="none"/>'
             '<path d="M18 3v4M18 31v4M2 19h4M30 19h4M6.7 7.7l2.8 2.8M26.5 27.5l2.8 2.8M29.3 7.7l-2.8 2.8M9.5 27.5l-2.8 2.8" '
             'stroke="currentColor"/>'),
    # Sasol - petal / sun burst
    "sasol": ('<circle cx="18" cy="19" r="5" fill="currentColor" stroke="none"/>'
              '<g fill="currentColor" stroke="none" opacity="0.85">'
              '<ellipse cx="18" cy="7" rx="3.1" ry="5.2"/>'
              '<ellipse cx="18" cy="31" rx="3.1" ry="5.2"/>'
              '<ellipse cx="6" cy="19" rx="5.2" ry="3.1"/>'
              '<ellipse cx="30" cy="19" rx="5.2" ry="3.1"/>'
              '<ellipse cx="9.5" cy="10.5" rx="3.1" ry="5.2" transform="rotate(45 9.5 10.5)"/>'
              '<ellipse cx="26.5" cy="27.5" rx="3.1" ry="5.2" transform="rotate(45 26.5 27.5)"/>'
              '<ellipse cx="26.5" cy="10.5" rx="3.1" ry="5.2" transform="rotate(-45 26.5 10.5)"/>'
              '<ellipse cx="9.5" cy="27.5" rx="3.1" ry="5.2" transform="rotate(-45 9.5 27.5)"/></g>'),
    # ioco - circle cut by a stem (lowercase i)
    "ioco": ('<circle cx="18" cy="20" r="12.5" stroke="currentColor" stroke-width="2.6"/>'
             '<path d="M18 7.5v25" stroke="currentColor" stroke-width="2.6"/>'),
    # Toyota - three overlapping ellipses
    "toyota": ('<ellipse cx="18" cy="19" rx="15" ry="11" stroke="currentColor" stroke-width="2.6"/>'
               '<ellipse cx="18" cy="15.5" rx="5.4" ry="7.6" stroke="currentColor" stroke-width="2.4"/>'
               '<ellipse cx="18" cy="22.5" rx="10.5" ry="4.2" stroke="currentColor" stroke-width="2.4"/>'),
    # Takeda - rising arrow / T
    "takeda": ('<path d="M4 30 18 8l14 22" fill="none" stroke="currentColor" stroke-width="3.4"/>'
               '<path d="M11 30 18 19l7 11" fill="currentColor" stroke="none" opacity="0.9"/>'),
}

CLIENTS = [
    ("vodacom", "Vodacom", "Vodacom", None, 200),
    ("nerdma", "Nerdma", "Nerdma", None, 190),
    ("addmore-digital", "AddmoreDigital", "Addmore", "DIGITAL", 215),
    ("the-digital-academy", "The Digital Academy", "The Digital", "ACADEMY", 230),
    ("mlab", "mLab", "mLab", None, 165),
    ("jcse-wits", "JCSE @ Wits", "JCSE", "@ WITS", 195),
    ("intellehub", "Intellehub SA", "Intellehub", "SOUTH AFRICA", 250),
    ("dpsa", "DPSA", "DPSA", None, 165),
    ("sasol", "Sasol", "Sasol", None, 165),
    ("takeda", "Takeda", "Takeda", None, 185),
    ("toyota", "Toyota", "Toyota", None, 185),
    ("ioco", "ioco", "ioco", None, 165),
]

for slug, label, name, sub, w in CLIENTS:
    open("%s/logos/%s.svg" % (OUT, slug), "w").write(logo(slug, MARKS[slug], name, sub, w))

print("assets written:", sorted(os.listdir(OUT)), sorted(os.listdir(OUT + "/logos")))
