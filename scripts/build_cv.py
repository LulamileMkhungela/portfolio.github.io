#!/usr/bin/env python3
"""Build the printable CV (PDF and DOCX) from the facts shown in the site's CV window.

Run from the repository root:
    python3 scripts/build_cv.py

Outputs:
    docs/cv/Lulamile-Mkhungela-CV.pdf
    docs/cv/Lulamile-Mkhungela-CV.docx

Facts must match the "My CV" window in js/desktop.js. If you change one, change the other.
Requires: reportlab, python-docx.
"""
from pathlib import Path

from docx import Document
from docx.shared import Pt
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

OUT = Path(__file__).resolve().parent.parent / "docs" / "cv"

NAME = "Lulamile Mkhungela"
TITLE = "Senior Product Designer and Front-End Developer"
CONTACT = "Johannesburg, Gauteng · mkhungela.l@gmail.com · linkedin.com/in/lulamile-mkhungela"

PROFILE = [
    "Over the past 8+ years I have designed and built digital products across enterprise software, "
    "telecoms, automotive, public sector, fintech and small business, from user research and Figma design "
    "systems through to production React and Angular code, WCAG 2.2 AA compliance and UAT.",
    "I enjoy turning complicated workflows into interfaces that feel obvious, and then writing the front end "
    "so nothing gets lost between the file and the screen.",
]

CURRENTLY = (
    "Embedded design and front-end authority at iOCO, plus select product, web and brand work directly "
    "with founders and teams."
)

HIGHLIGHTS = [
    "92% UAT acceptance on the Vodacom Engage employee app, the highest score in that digital portfolio at the time.",
    "Cut UI inconsistencies by 65% with a new design system and Design Authority governance at Vodacom.",
    "Lifted sprint velocity 35% with a shared component library across two products, delivered freelance for AddmoreDigital.",
    "Increased checkout completion 32% and average order value 18% by taking a 7-step flow down to 3.",
    "Shipped a 6-micro-frontend architecture and a 13-endpoint notifications system for a national audit platform.",
]

EXPERIENCE = [
    (
        "iOCO",
        "Embedded design and development authority for Eskom, a national audit institution, a financial services "
        "group, a global pharmaceutical company, Toyota South Africa, a listed energy group and Vodacom.",
        "2021 – present",
    ),
    ("UluntuXd", "Freelance UX Facilitator and Coach, after hours alongside iOCO", "2025 – 2026"),
    ("IntellehubSA", "Freelance UI/UX Designer, after hours alongside iOCO", "2025 – 2026"),
    ("AddmoreDigital", "Freelance UI/UX Designer, after hours alongside iOCO", "2021 – 2022"),
    ("Nerdma", "Freelance UI/UX Designer, after hours alongside iOCO", "2023"),
    ("FoodieZone", "Freelance Lead Product Designer & Front-End Developer", "2025"),
    ("Hypothetical Objective Systems", "Freelance Senior UI/UX Designer and Developer Coach", "2020 – 2021"),
    ("Sesyme and SmartServe", "UI/UX and Android Developer", "2019 – 2020"),
    ("The Digital Academy", "UI/UX and Android development intern", "1 Aug 2018 – 31 Jan 2019"),
    ("mLab", "UI/UX and Android Developer", "2017 – 2018"),
]

TOOLS = (
    "Figma for design, systems and prototypes. VS Code for the build: React, Angular, Ionic, TypeScript. "
    "GitHub for everything else."
)

EDUCATION = [
    "Full-Stack Development, FNB App of the Year Academy, 2025 (Distinction, 92.7%)",
    "NQF Level 5 Mobile and Web Development, MTN Business App Academy, 2021",
    "UX/UI Design, Wits JCSE, 2017",
    "Google UX Design Professional Certificate",
]


def build_pdf(path: Path) -> None:
    base = ParagraphStyle("base", fontName="Helvetica", fontSize=9.5, leading=13)
    h1 = ParagraphStyle("h1", parent=base, fontName="Helvetica-Bold", fontSize=18, leading=22)
    h2 = ParagraphStyle("h2", parent=base, fontName="Helvetica-Bold", fontSize=11, leading=15, spaceBefore=8)
    muted = ParagraphStyle("muted", parent=base, textColor="#555555")
    story = [
        Paragraph(NAME, h1),
        Paragraph(TITLE, base),
        Paragraph(CONTACT, muted),
        Paragraph("Profile", h2),
        *[Paragraph(p, base) for p in PROFILE],
        Paragraph("Currently", h2),
        Paragraph(CURRENTLY, base),
        Paragraph("Selected highlights", h2),
        *[Paragraph("• " + h, base) for h in HIGHLIGHTS],
        Paragraph("Experience", h2),
    ]
    for org, role, dates in EXPERIENCE:
        story.append(Paragraph(f"<b>{org}</b> · {dates}<br/>{role}", base))
        story.append(Spacer(1, 3))
    story += [
        Paragraph("Tools", h2),
        Paragraph(TOOLS, base),
        Paragraph("Education and certificates", h2),
        *[Paragraph("• " + e, base) for e in EDUCATION],
    ]
    doc = SimpleDocTemplate(
        str(path), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=16 * mm, bottomMargin=16 * mm, title=f"{NAME} CV", author=NAME,
    )
    doc.build(story)


def build_docx(path: Path) -> None:
    d = Document()
    style = d.styles["Normal"]
    style.font.name = "Calibri"
    style.font.size = Pt(10)
    d.add_heading(NAME, level=1)
    d.add_paragraph(TITLE)
    d.add_paragraph(CONTACT)
    d.add_heading("Profile", level=2)
    for p in PROFILE:
        d.add_paragraph(p)
    d.add_heading("Currently", level=2)
    d.add_paragraph(CURRENTLY)
    d.add_heading("Selected highlights", level=2)
    for h in HIGHLIGHTS:
        d.add_paragraph(h, style="List Bullet")
    d.add_heading("Experience", level=2)
    for org, role, dates in EXPERIENCE:
        p = d.add_paragraph()
        p.add_run(f"{org} · {dates}").bold = True
        d.add_paragraph(role)
    d.add_heading("Tools", level=2)
    d.add_paragraph(TOOLS)
    d.add_heading("Education and certificates", level=2)
    for e in EDUCATION:
        d.add_paragraph(e, style="List Bullet")
    d.core_properties.author = NAME
    d.core_properties.title = f"{NAME} CV"
    d.save(str(path))


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    build_pdf(OUT / "Lulamile-Mkhungela-CV.pdf")
    build_docx(OUT / "Lulamile-Mkhungela-CV.docx")
    print("wrote", OUT / "Lulamile-Mkhungela-CV.pdf", "and", OUT / "Lulamile-Mkhungela-CV.docx")
