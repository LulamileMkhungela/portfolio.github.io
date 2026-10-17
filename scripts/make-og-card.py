#!/usr/bin/env python3
"""Regenerate images/social/lm-og.jpg — the link-preview card.

Keeps the existing portrait photo (right side) untouched and repaints the left
panel with the full desktop wordmark: L M: HalfMan-HalfMachine.

Headline uses the same Satoshi Black the site loads; "HalfMachine" carries the
blue gradient of the desktop wallpaper wordmark (#5ac8fa -> #0a84ff, brightened
for the dark panel).

Usage:  python3 scripts/make-og-card.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
SPLIT_X = 680  # photo starts here in the current card; kept as-is
SRC = "images/social/lm-og.jpg"
DST = "images/social/lm-og.jpg"

LEFT_MARGIN = 64
RIGHT_GAP = 36  # breathing room before the photo
MAX_TEXT_W = SPLIT_X - LEFT_MARGIN - RIGHT_GAP

BLACK = "fonts/Satoshi/fonts/Satoshi-Black.ttf"
REGULAR = "fonts/Satoshi/fonts/Satoshi-Regular.ttf"
MEDIUM = "fonts/Satoshi/fonts/Satoshi-Medium.ttf"

WHITE = (255, 255, 255)
ROLE_GREY = (217, 217, 222)
NAME_GREY = (155, 155, 162)
GRAD_LEFT = (90, 200, 250)   # #5ac8fa
GRAD_RIGHT = (10, 132, 255)  # #0a84ff


def text_w(draw, text, font, tracking=0):
    w = draw.textlength(text, font=font)
    if tracking and len(text) > 1:
        w += tracking * (len(text) - 1)
    return w


def draw_tracked(draw, xy, text, font, fill, tracking=0):
    """Draw text with manual letter-spacing (PIL has no tracking option)."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


def draw_gradient_line(base, xy, text, font, tracking=0):
    """Draw one line with a horizontal gradient fill; returns end x."""
    x, y = xy
    tmp = Image.new("L", (MAX_TEXT_W + 40, 220), 0)
    d = ImageDraw.Draw(tmp)
    end = draw_tracked(d, (20, 20), text, font, 255, tracking)
    ink = tmp.getbbox()
    crop = tmp.crop(ink)
    gw, gh = crop.size
    grad = Image.new("RGB", (gw, gh))
    gp = grad.load()
    for gx in range(gw):
        t = gx / max(1, gw - 1)
        gp_gx = tuple(
            round(GRAD_LEFT[c] + (GRAD_RIGHT[c] - GRAD_LEFT[c]) * t) for c in range(3)
        )
        for gy in range(gh):
            gp[gx, gy] = gp_gx
    base.paste(grad, (round(x + ink[0] - 20), round(y + ink[1] - 20)), crop)
    return x + (end - 20)


def main():
    photo_src = Image.open(SRC).convert("RGB")
    bg = photo_src.getpixel((10, 10))  # exact panel colour of the current card
    photo = photo_src.crop((SPLIT_X, 0, W, H))

    card = Image.new("RGB", (W, H), bg)
    card.paste(photo, (SPLIT_X, 0))
    draw = ImageDraw.Draw(card)

    # Auto-fit the three headline lines into the panel.
    sizes = {"lm": 104, "half": 92, "machine": 92}
    while True:
        f_lm = ImageFont.truetype(BLACK, sizes["lm"])
        f_half = ImageFont.truetype(BLACK, sizes["half"])
        f_mac = ImageFont.truetype(BLACK, sizes["machine"])
        t_lm = round(sizes["lm"] * -0.015)
        t_half = round(sizes["half"] * -0.015)
        t_mac = round(sizes["machine"] * -0.015)
        widths = [
            text_w(draw, "L M:", f_lm, t_lm),
            text_w(draw, "HalfMan", f_half, t_half),
            text_w(draw, "HalfMachine", f_mac, t_mac),
        ]
        if max(widths) <= MAX_TEXT_W:
            break
        sizes = {k: v - 2 for k, v in sizes.items()}
    print("headline sizes:", sizes, "widths:", [round(v) for v in widths])

    f_role = ImageFont.truetype(REGULAR, 27)
    f_name = ImageFont.truetype(MEDIUM, 23)

    x = LEFT_MARGIN
    y = 66
    y += 0
    draw_tracked(draw, (x, y), "L M:", f_lm, WHITE, t_lm)
    y += round(sizes["lm"] * 1.02)
    draw_tracked(draw, (x, y), "HalfMan", f_half, WHITE, t_half)
    y += round(sizes["half"] * 1.02)
    draw_gradient_line(card, (x, y), "HalfMachine", f_mac, t_mac)
    y += round(sizes["machine"] * 1.02) + 30

    draw.text((x, y), "Devsigner \u00b7 UX/UI, Product Design", font=f_role, fill=ROLE_GREY)
    y += 38
    draw.text((x, y), "and Front-End Development", font=f_role, fill=ROLE_GREY)
    y += 38 + 26
    draw.text((x, y), "Lulamile Mkhungela \u00b7 Johannesburg", font=f_name, fill=NAME_GREY)

    card.save(DST, "JPEG", quality=92, optimize=True, progressive=True)
    print("wrote", DST)


if __name__ == "__main__":
    main()
