#!/usr/bin/env python3
"""Rebuild the public case-study pages from one content source.

Each page keeps its own <head>, side navigation, header and footer (copied from
the existing file), and the body is regenerated in a single storytelling
structure: context, problem, role and boundaries, decisions, outcome and
evidence, what changed. Every claim below is taken from the page it replaces.
Outcomes without a published figure are stated as qualitative.

Run from the repository root:  python3 scripts/build_case_studies.py
"""
import html
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "portfolio"

ROLE = "Devsigner: full ownership of UX/UI design and frontend"
# Role titles as recorded in the CV (Lulamile_Mkhungela_2026.pdf). Use these, not ROLE, for employment work.
ROLE_VODACOM = "UI/UX Designer & Design System Lead, via iOCO"
ROLE_TOYOTA = "Senior UI/UX Designer & Ionic/Angular Developer, via iOCO"
ROLE_SNB = "UI/UX & Android Developer, Sesyme & SmartServe"


def e(text):
    return html.escape(text, quote=False)


CASES = [
    {
        "file": "employee-engagement-app-redesign.html",
        "title": "Vodacom Engage",
        "category": "Enterprise · Employee app",
        "tagline": ["From a wall of tiles ", "to a tool."],
        "meta": [
            ("Client", "Vodacom HRIT, Midrand · via iOCO"),
            ("Role", ROLE_VODACOM),
            ("Industry", "Telecommunications"),
            ("Year", "2021 — 2023"),
        ],
        "lead": (
            "Vodacom's employee app is the front door for communications, policies, wellness, "
            "campus services and rewards across the group. It opened on a flat wall of tiles with no "
            "search, so people gave up before they found what they came for. I redesigned navigation and "
            "information architecture, and tested the new flows with employees before release."
        ),
        "problems": [
            ("Key features were buried",
             "Critical tools sat several scrolls deep in an undifferentiated grid, so the same few tiles "
             "absorbed almost all engagement."),
            ("No way to search",
             "There was no search across features, articles or tools. Recall-based navigation fails fast in "
             "a large organisation, and routine questions became calls to HR and IT."),
            ("The banner competed with the work",
             "A scrolling communications banner pushed useful content below the fold and mixed announcements "
             "with navigation, so people could not tell action from news."),
            ("Nothing was personal",
             "A technician on a plant floor, a line manager and an HR administrator saw the same screen. "
             "There were no favourites or recents, so nothing gave people a reason to return."),
        ],
        "role": (
            "I owned UX/UI design and frontend for the redesign: user research, information architecture, "
            "wireframes, prototypes, usability testing and interface design. I worked with the development "
            "team through implementation and reviewed builds against the design before release. Stakeholder "
            "feedback shaped visual hierarchy and consistency."
        ),
        "decisions": [
            ("Group the tiles into six sections",
             "Safety, Health and Wellbeing; Policies and Information; Smart Buildings; Rewards and Benefits; "
             "Company Strategy; and Apps. Research showed people wanted fewer decisions, not more tiles."),
            ("Make search the primary entry point",
             "One search with filters reaches features, content and tools, so nobody has to remember where "
             "something lives."),
            ("Put a favourites row under the banner",
             "Favourites let people pin what they actually use. Testing checked that the concept was understood "
             "without an explanation."),
            ("Separate news from tools",
             "Announcements stopped pushing the useful part of the screen below the fold."),
        ],
        "outcomes": [
            ("About 60% better discoverability of key features",
             "Measured in post-launch task testing against the old home screen."),
            ("About a third faster on common journeys",
             "Time-to-task for the most common journeys, as reported after launch."),
            ("Fewer \"where do I find…\" requests",
             "Qualitative: support requests fell noticeably once search and the grouped sections shipped."),
            ("Favourites became the second most used element",
             "On the home screen, after search, as reported after launch."),
        ],
        "what_changed": "The app stopped behaving like a notice board and started behaving like a workspace.",
        "figures": [
            ("../images/work/engage-wireframe.webp", "Vodacom Engage — defining the problem",
             "Problem definition and the first information architecture."),
            ("../images/work/engage-screens.webp", "Vodacom Engage — high-fidelity design and user testing",
             "High-fidelity screens, tested with employees before release."),
        ],
    },
    {
        "file": "brand-strategy-programme.html",
        "title": "Toyota Brand Programme",
        "category": "Brand · Strategy · KINTO",
        "tagline": ["One brand system, ", "three mobility products."],
        "meta": [
            ("Client", "Toyota South Africa · via iOCO"),
            ("Role", ROLE_TOYOTA),
            ("Industry", "Automotive & mobility"),
            ("Year", "2023 — 2025"),
        ],
        "lead": (
            "Toyota South Africa was taking three mobility products to market at the same time: KINTO, the "
            "Toyota App and Toyota Remote. Each was drawing its own identity. I set the positioning, built the "
            "identity system and wrote the rules for using it, so the products could launch in one voice."
        ),
        "problems": [
            ("Every product spoke its own language",
             "Three customer-facing expressions of one business used different type, colour, tone and words "
             "for the same thing."),
            ("Positioning was a product list",
             "Each brand said what its service did, not who it was for or why it mattered against the "
             "alternatives."),
            ("Identity stopped at the login screen",
             "The brand lived in campaigns, while the app was designed separately, so nothing carried through."),
            ("Every launch started from zero",
             "Without a shared system, each new service repeated identity work, which made launches slower."),
        ],
        "role": (
            "I owned the brand programme's design side: positioning, the identity system, its application into "
            "product interfaces, and the guidelines and rollout. The work followed the brand process from "
            "strategy to rollout, with positioning agreed in writing before any visual work began."
        ),
        "decisions": [
            ("Agree positioning in writing before visual work",
             "Each service had a brand platform: who it is for, what it promises, what it is not, and the "
             "language that carries it."),
            ("Build the identity as a system, not a logo",
             "Wordmark and lockups, colour with defined roles, a type hierarchy, spacing and layout rules, "
             "iconography and motion, so different teams reach the same result."),
            ("Apply the system in the product first",
             "Applying it in the app is what stopped the brand disappearing after the login screen."),
            ("Hand over with guidelines and rollout sessions",
             "Marketing, product and retail could use the system without me in the room."),
        ],
        "outcomes": [
            ("Three products on one positioning framework and identity system",
             "Type, colour, spacing, tone and motion are shared across the app, campaign and retail."),
            ("New services launch as applications of the brand",
             "Qualitative: a new service no longer needs a new identity project."),
            ("Adoption tracked by auditing live assets",
             "Live assets were checked against the guidelines. No percentage is published."),
        ],
        "what_changed": "A new service becomes an application of the brand, not a new identity project.",
        "figures": [
            ("../images/work/toyota-remote-cover.webp", "Toyota Brand Programme — identity system",
             "The identity system applied to product."),
            ("../images/work/toyota-app-cover.webp", "Toyota Brand Programme — application",
             "The same tokens applied in the app."),
        ],
    },
    {
        "file": "toyota-connected-apps.html",
        "title": "Toyota Connected Apps",
        "category": "Brand · MyToyota · Remote · Lexus",
        "tagline": ["Ownership, ", "from call centres to your phone."],
        "meta": [
            ("Client", "Toyota South Africa · via iOCO"),
            ("Role", ROLE_TOYOTA),
            ("Industry", "Automotive"),
            ("Year", "2023 — 2025"),
        ],
        "lead": (
            "Toyota's ownership experience lived in call centres and dealer desks. Across two apps, the owner "
            "companion (today's MyToyota) and Toyota Remote, I designed the owner journeys in Figma and built "
            "them in Ionic and Angular, on the same design system as the rest of the Toyota programme."
        ),
        "problems": [
            ("Ownership admin was split across channels",
             "Servicing, bookings, finance and support each needed a different call or desk."),
            ("Remote commands did not say what happened",
             "A connected-car command has to read as done, pending or failed. Without that, people cannot trust it."),
            ("Booking needed a phone call",
             "Appointments depended on contacting a dealer rather than seeing real availability."),
        ],
        "role": (
            "I owned UX/UI design and frontend for both apps: the owner journeys, the connected-car states, "
            "the booking flow and the component layer. I designed in Figma and built in Ionic and Angular, so "
            "the design and the shipped build came from one person."
        ),
        "decisions": [
            ("One companion app for ownership admin",
             "Servicing, bookings, finance and support sit in the same app."),
            ("Design remote commands around state and feedback",
             "The journey shows what the car did, when, and what is still pending, so a lock command reads as "
             "done, pending or failed."),
            ("Book against real dealer availability",
             "Appointments are made without a phone call, using the dealer's actual slots."),
            ("Use one design system across the Toyota programme",
             "The same tokens as the brand programme and Lexus, so one identity runs across every surface."),
        ],
        "outcomes": [
            ("One place for ownership admin",
             "Qualitative: servicing, bookings, finance and support in one app."),
            ("Remote buttons with clear state",
             "Qualitative: lock, climate and status commands show done, pending or failed."),
            ("Service booking without a phone call",
             "Qualitative: appointments are made against real dealer availability."),
            ("Behavioural research across 10+ African markets",
             "Hotjar research turned into a prioritised design backlog tied to Toyota's KPIs. No metrics are published here."),
        ],
        "what_changed": "The owner companion carries the ownership journeys that used to live in a call centre.",
        "figures": [
            ("../images/work/toyota-app-cover.webp", "MyToyota Google Play listing with sample ownership screens",
             "The owner companion."),
            ("../images/work/toyota-remote-cover.webp", "Toyota Remote Google Play listing showing connected-car controls",
             "Connected-car controls."),
        ],
        "links": [
            ("MyToyota", "https://www.toyota.co.za/services/my-toyota-app"),
            ("Toyota Remote", "https://play.google.com/store/apps/details?id=za.co.toyota.toyotaremote&hl=en_ZA"),
            ("Lexus on Google Play", "https://play.google.com/store/apps/details?id=com.eliance.lexusmobile&hl=en_ZA&gl=US"),
            ("Lexus ownership page", "https://www.lexus.co.za/ownership/mylexus-app"),
        ],
    },
    {
        "file": "nerdma-website.html",
        "title": "Nerdma",
        "category": "Web · Product dashboards",
        "tagline": ["A site that explains an ecosystem, ", "instead of listing software."],
        "meta": [
            ("Client", "Nerdma Systems"),
            ("Role", "Devsigner, freelance (independent, after hours alongside iOCO)"),
            ("Industry", "Governance, risk and sustainability intelligence"),
            ("Year", "2023"),
        ],
        "lead": (
            "Nerdma Systems sells five products that only make sense together, and the old site listed them "
            "like software on a shelf. I redesigned the marketing site around the buyer's decision, and designed "
            "the product dashboards in parallel so the site never promised what the product could not show."
        ),
        "problems": [
            ("Technical buyers could not qualify the offer",
             "The stack and the relationship between the five products were buried in marketing prose."),
            ("Decision-makers could not see what they were buying",
             "Governance, risk and compliance outcomes were implied rather than stated, and a rollout was not described."),
            ("Credibility was invisible",
             "Certifications, partner accreditations and a client base from corporates to government were on the "
             "old site but hard to find."),
            ("Dashboards showed data, not decisions",
             "Scores, grids and growth indicators carried equal weight, so nothing stood out."),
        ],
        "role": (
            "As an independent freelance engagement, I owned the content audit, information architecture, web and "
            "dashboard design, the responsive build and analytics. The work moved from the buyer's decision, through "
            "product structure and interface design, into delivery and post-launch measurement."
        ),
        "decisions": [
            ("Lead with the buyer's decision: problem, product, proof",
             "The site leads with the positioning line the business already owns, then states the methodology plainly."),
            ("Give each product a stated role",
             "Five products, each with its own place in the ecosystem, instead of a feature list."),
            ("Treat credibility as content",
             "Certifications, partners and the client base sit near the top of the page."),
            ("One dashboard grammar across all three products",
             "One primary number per view, the trend behind it, then the contributing factors, with a consistent "
             "table and filter pattern."),
        ],
        "outcomes": [
            ("Five products, one explanation",
             "Qualitative: each product has a stated role, and the ecosystem can be read in one scroll."),
            ("Dashboards readable on screen",
             "Qualitative: data that used to be exported to a spreadsheet is now read on screen."),
        ],
        "what_changed": "The site explains the ecosystem in one scroll, and the dashboards show the position first.",
        "figures": [
            ("../images/work/live/nerdma-desktop.webp", "Nerdma Systems on desktop", "The redesigned site, live."),
            ("../images/work/live/nerdma-mobile.webp", "Nerdma Systems on a phone", "The phone view."),
        ],
    },
    {
        "file": "addmoredigital-website.html",
        "title": "AddmoreDigital",
        "category": "Web · SEO · CRM",
        "tagline": ["A site that presents the work, ", "ranks for it, and follows every enquiry up."],
        "meta": [
            ("Client", "AddmoreDigital"),
            ("Role", "UI/UX Designer, then Lead UI/UX Designer (after hours, alongside iOCO)"),
            ("Industry", "Digital agency"),
            ("Year", "2021"),
        ],
        "lead": (
            "In 2021 AddmoreDigital did good work but had no way to show it. The site was out of date, none of the "
            "service pages ranked, and enquiries sat in a shared inbox. I redesigned the site around the work and the "
            "offer, then built the CRM and proposal workflow behind it. The site and the pipeline were built as one system."
        ),
        "problems": [
            ("The portfolio was not doing the selling",
             "Work was spread across pages and formats, so visitors could not see the standard the agency works to."),
            ("Services read as a word list",
             "Web design, brand, CRM and retainers were named but not described in terms of scope or outcome."),
            ("Proposals were rebuilt from scratch",
             "Each proposal was assembled by hand, in a different shape, with inconsistent pricing."),
            ("No pipeline",
             "Enquiries lived in an inbox. Nobody could say how many were open, stalled or won."),
        ],
        "role": (
            "As a freelance engagement, I owned web design, on-page SEO, CRM design and setup, follow-up automation "
            "and analytics. The work moved from defining a qualified enquiry, through information structure and "
            "interface design, into end-to-end CRM workflow checks and launch."
        ),
        "decisions": [
            ("Lead with the work and state the services plainly",
             "Prospects arrive knowing what the agency does and roughly what a project involves."),
            ("Carry every enquiry through one pipeline",
             "New enquiry, Contacted, Proposal sent and Won, with an owner, a stage and a reminder on each record."),
            ("Standardise proposals into one repeatable structure",
             "The scoping language already existed, so the structure could be reused."),
            ("Build the site and the CRM as one system",
             "An agency that cannot show its work and cannot follow up competes on price alone."),
        ],
        "outcomes": [
            ("Enquiries are qualified",
             "Qualitative: enquiries dropped, and the ones arriving are better matched to the work."),
            ("Every enquiry has a record",
             "Each form submission creates a record with an owner, a stage and a reminder."),
            ("Shorter proposal turnaround",
             "Qualitative: proposals are assembled from the standard structure. No timing is published."),
        ],
        "what_changed": "Enquiries arrive with context, and every one has an owner and a next step.",
        "figures": [
            ("../images/work/crm-process.webp", "AddmoreDigital CRM and proposal workflow",
             "The enquiry pipeline from new enquiry to won or lost."),
            ("../images/work/live/addmoredigital-desktop.webp", "AddmoreDigital on desktop", "The site, live."),
            ("../images/work/live/addmoredigital-mobile.webp", "AddmoreDigital on a phone", "The phone view."),
        ],
    },
    {
        "file": "snb-website.html",
        "title": "SnB Chartered Accountants",
        "category": "Website · Professional services",
        "tagline": ["A site that answers what clients ask ", "before they call."],
        "meta": [
            ("Client", "SnB Chartered Accountants & Auditors"),
            ("Role", ROLE_SNB),
            ("Industry", "Professional services"),
            ("Year", "2019"),
        ],
        "lead": (
            "SnB's first client call was spent answering questions a website should answer. While at Sesyme in "
            "Mthatha, I took the work from the first meeting to launch: content audit, structure, design, build, "
            "and a site the firm could keep current itself."
        ),
        "problems": [
            ("The services were named, not explained",
             "Audit, accounting and taxation were headings. What was missing was who the work is for, what an "
             "engagement covers and how to start one."),
            ("Clients asked the same questions on every call",
             "Scope, credentials, offices and next steps were not on the site, so every enquiry began at the start."),
        ],
        "role": (
            "I owned the content structure, UX/UI design, the responsive build and the hand-coding, and handed over "
            "a content management system so the firm could maintain the site. Contact routing was checked before handover."
        ),
        "decisions": [
            ("Organise the site around the questions clients ask before appointing an auditor",
             "Scope, credentials, offices and what happens next."),
            ("Write service pages for the sub-services clients search for",
             "External audit, independent reviews and agreed-upon procedures; bookkeeping, management accounts and "
             "payroll; tax computation, returns and compliance."),
            ("Hand the firm a CMS it can maintain",
             "The site stays current through a busy audit season without a developer."),
        ],
        "outcomes": [
            ("Three offices presented as one practice",
             "Johannesburg, Mthatha and Pongola, with local reach."),
            ("Credibility near the top of the page",
             "Registrations, ownership and track record are stated where clients look for them."),
            ("Enquiries arrive scoped",
             "The form asks what the firm needs to quote."),
        ],
        "what_changed": "The site answers the questions that come before an appointment.",
        "figures": [
            ("../images/work/snb-cover.webp", "SnB Chartered Accountants website", "The redesigned site."),
        ],
    },
    {
        "file": "foodiezone-pwa.html",
        "title": "FoodieZone",
        "category": "Ordering PWA · Hospitality",
        "tagline": ["Customers order, repeat and track. ", "The kitchen runs the menu from a phone."],
        "meta": [
            ("Client", "FoodieZone, Pimville, Soweto"),
            ("Role", "Devsigner, freelance: full UX/UI and frontend"),
            ("Industry", "Hospitality"),
            ("Year", "2025"),
        ],
        "lead": (
            "FoodieZone is a burger and wings kitchen in Pimville. Every order arrived as a WhatsApp or Instagram "
            "message, which falls apart when two people message at once. I designed and built the ordering experience "
            "as an installable progressive web app: research, menu architecture, flows, interface, build and launch."
        ),
        "problems": [
            ("Orders arrived as unstructured messages",
             "Items were typed from memory, quantities were guessed and addresses were retyped."),
            ("Nothing was recorded once the food went out",
             "The kitchen had no reliable record of what was ordered or sold."),
            ("Menu changes meant new screenshots",
             "Prices and sold-out items had to be re-shot and resent instead of updated in seconds."),
        ],
        "role": (
            "I owned the research of the real order flow, the menu architecture, the mobile interface, and the "
            "frontend build and launch. I designed for one-thumb use on mobile data and built the app to be installable."
        ),
        "decisions": [
            ("Install from the browser, not a store",
             "Customers add the app to their home screen from the browser, with nothing to install from a store."),
            ("Cache the shell and the menu",
             "The menu still opens instantly on a weak connection."),
            ("Organise the menu the way the kitchen sells it",
             "Eight categories, and the Cheesey Smash Burger pinned as the bestseller, as the kitchen talks about it."),
            ("Make reordering one tap",
             "Order history turns a regular customer into a single tap instead of a retyped message."),
        ],
        "outcomes": [
            ("Orders moved into the app",
             "The existing customer base was migrated off direct messages."),
            ("Reorders became a meaningful share of weekly volume",
             "Qualitative: as reported after launch. No figure is published."),
            ("Menu updates take seconds",
             "The owner updates prices and marks items sold out from a phone."),
        ],
        "what_changed": "One queue replaced two inboxes, and the owner runs the menu from a phone.",
        "figures": [
            ("../images/work/foodiezone-flow.webp", "FoodieZone — defining the problem", "The order flow before and after."),
            ("../images/work/live/foodiezone-desktop.webp", "FoodieZone on desktop", "The live menu and cart."),
            ("../images/work/live/foodiezone-mobile.webp", "FoodieZone on a phone", "The phone view."),
        ],
    },
    {
        "file": "designops-design-system.html",
        "title": "DesignOps",
        "category": "Design system · Tooling",
        "tagline": ["One source of truth, ", "fourteen targets."],
        "meta": [
            ("Client", "Self-initiated"),
            ("Role", ROLE),
            ("Industry", "Design systems & developer tooling"),
            ("Year", "2026"),
        ],
        "lead": (
            "Design systems drift because the same token ends up in two places. DesignOps closes that gap: Figma "
            "variables are the input, a tokens file is the single source of truth, Style Dictionary builds the output, "
            "and a linter checks shipped code against the system."
        ),
        "problems": [
            ("Design and code drift apart at handoff",
             "A value changes in Figma and nobody updates the code, or the reverse."),
            ("Nobody can say what the current value is",
             "Engineers re-enter values by hand and guess which one is live."),
        ],
        "role": (
            "I designed the token model, wrote the pipeline, built the dashboard and documented the system. "
            "The work followed the design and front-end process end to end: discovery, token audit, build, and verification."
        ),
        "decisions": [
            ("Use one source of truth",
             "The tokens file records the decision and everything else is generated from it."),
            ("Generate every target from the same tokens",
             "Style Dictionary builds the output for each framework, so nothing is copied by hand."),
            ("Let the linter win",
             "When the advisory, the tokens and the code disagree, the linter's check decides."),
        ],
        "outcomes": [
            ("A design change is a commit",
             "Qualitative: a token change is made in one place and built everywhere."),
            ("A lint failure is caught before review",
             "Qualitative: a design mismatch shows up in the pipeline rather than in review."),
            ("The dashboard documents the system as built",
             "Ten views cover tokens, components, the advisory catalogue, the demo gallery, a lint playground and the request board."),
        ],
        "what_changed": "The design system is documented as it actually is, not as it was described in a presentation.",
        "figures": [
            ("../images/work/design-ops-flow.webp", "DesignOps — defining the problem", "The token pipeline."),
            ("../images/work/live/designops-desktop.webp", "DesignOps dashboard on desktop", "The overview."),
            ("../images/work/live/designops-search.webp", "Global search for a component", "Search across the system."),
        ],
    },
    {
        "file": "lula-gazette.html",
        "title": "LulaGazette",
        "category": "Legal intelligence · Civic technology",
        "tagline": ["A legal library anyone can search ", "before they sign up."],
        "meta": [
            ("Client", "Self-initiated personal project"),
            ("Role", ROLE),
            ("Industry", "Legal & civic technology"),
            ("Year", "2026"),
        ],
        "lead": (
            "African legal information is public in principle and hard to reach in practice. LulaGazette brings "
            "together gazettes, acts of parliament, apex-court judgments and court rules from 54 countries, searchable "
            "before anyone is asked to sign up. Research, design and build were mine."
        ),
        "problems": [
            ("Public legal information is hard to reach",
             "Gazettes, acts and judgments exist, but they are scattered and hard to search."),
            ("The audience is broad",
             "Citizens with a specific problem, lawyers preparing a matter, and students all need the same library."),
            ("Deep content must not feel like a database",
             "The interface has to carry citable content and still answer in the jurisdiction the user is in."),
        ],
        "role": (
            "I owned the research, the interface design and the frontend build. The library and harvesters are "
            "running as a live product."
        ),
        "decisions": [
            ("Give every country its own row on one board",
             "Pan-African coverage is the headline: each country has its gazette, apex court and court rules."),
            ("Make search work without an account",
             "Signing up saves your work; it is not the price of entry."),
            ("Show where each item came from and when it was fetched",
             "Sources are shown, not implied."),
            ("Keep the library current with harvesters",
             "The library is maintained against live sources rather than frozen at launch."),
        ],
        "outcomes": [
            ("54 jurisdictions on one board",
             "Each country with its gazette, apex court and court rules."),
            ("Sources shown on every item",
             "Each item states where it came from and when it was fetched."),
            ("Running against live sources",
             "The harvesters keep the library current. No usage figures are published."),
        ],
        "what_changed": "The library can be searched by anyone, and every result can be checked.",
        "figures": [
            ("../images/work/lulagazette/cover.webp", "LulaGazette — the 54-country legal library", "The country board."),
            ("../images/work/live/lula-gazette-desktop.webp", "LulaGazette on desktop", "Search and results."),
            ("../images/work/live/lula-gazette-mobile.webp", "LulaGazette on a phone", "The phone view."),
        ],
    },
]

from case_data_documents import NEW_CASES  # noqa: E402

CASES = CASES + NEW_CASES
ORDER = [c["file"] for c in CASES]


def meta_block(meta):
    items = "".join(
        f'<div class="pk-meta__item"><span class="pk-meta__label">{e(k)}</span>'
        f'<span class="pk-meta__value">{e(v)}</span></div>'
        for k, v in meta
    )
    return f'<div class="pk-meta" aria-label="Project details">{items}</div>'


def body_for(case, index):
    t1, t2 = case["tagline"]
    parts = []
    parts.append(
        '\t\t\t\t<section class="pk-hero" aria-labelledby="case-title">\n'
        '\t\t\t\t\t<div class="pk-shell">\n'
        f'\t\t\t\t\t\t<p class="pk-eyebrow">{e(case["category"])}</p>\n'
        f'\t\t\t\t\t\t<h1 id="case-title" class="pk-display pk-display--name">{e(case["title"])}</h1>\n'
        f'\t\t\t\t\t\t<p class="pk-hero__tagline">{e(t1)}<em class="pk-accent">{e(t2)}</em></p>\n'
        '\t\t\t\t\t</div>\n'
        f'\t\t\t\t\t<div class="pk-shell">{meta_block(case["meta"])}</div>\n'
        '\t\t\t\t</section>\n'
    )
    parts.append(
        '\t\t\t\t<section class="pk-section pk-section--tight pk-lead-section" id="context">\n'
        f'\t\t\t\t\t<div class="pk-shell"><p class="pk-lead">{e(case["lead"])}</p></div>\n'
        '\t\t\t\t</section>\n'
    )
    problems = "".join(
        f'<div class="pk-outcome"><span class="pk-outcome__num">{i:02d}</span>'
        f'<span class="pk-outcome__text">{e(t)}<small>{e(d)}</small></span></div>'
        for i, (t, d) in enumerate(case["problems"], 1)
    )
    parts.append(
        '\t\t\t\t<section class="pk-section pk-dark" id="problem">\n'
        '\t\t\t\t\t<div class="pk-shell"><div class="pk-problem-grid"><div>'
        '<p class="pk-eyebrow">The problem</p>'
        f'<h2 class="pk-h2">{e(case["problems"][0][0])}</h2>'
        f'</div><div><div class="pk-outcomes">{problems}</div></div></div></div>\n'
        '\t\t\t\t</section>\n'
    )
    parts.append(
        '\t\t\t\t<section class="pk-section" id="role">\n'
        '\t\t\t\t\t<div class="pk-shell"><div class="pk-overview"><div>'
        '<p class="pk-eyebrow">My role and boundaries</p></div>'
        f'<div><div class="pk-copy"><p>{e(case["role"])}</p></div></div></div></div>\n'
        '\t\t\t\t</section>\n'
    )
    decisions = "".join(
        f'<article class="pk-card"><span class="pk-card__index">{i:02d}</span>'
        f'<div><h3>{e(t)}</h3><p>{e(d)}</p></div></article>'
        for i, (t, d) in enumerate(case["decisions"], 1)
    )
    parts.append(
        '\t\t\t\t<section class="pk-section" id="decisions">\n'
        '\t\t\t\t\t<div class="pk-shell"><p class="pk-eyebrow">Key decisions</p>'
        f'<div class="pk-grid-3">{decisions}</div></div>\n'
        '\t\t\t\t</section>\n'
    )
    results = "".join(
        f'<div class="pk-outcome"><span class="pk-outcome__num">{i:02d}</span>'
        f'<span class="pk-outcome__text">{e(t)}<small>{e(d)}</small></span></div>'
        for i, (t, d) in enumerate(case["outcomes"], 1)
    )
    parts.append(
        '\t\t\t\t<section class="pk-section pk-results" id="outcomes" aria-labelledby="outcomes-title">\n'
        '\t\t\t\t\t<div class="pk-shell"><p class="pk-eyebrow" id="outcomes-title">Outcome and evidence</p>'
        '<p class="pk-disclaimer">Figures are shown only where they were published. Other results are described qualitatively.</p>'
        f'<div class="pk-outcomes">{results}</div></div>\n'
        '\t\t\t\t</section>\n'
    )
    media = "".join(
        f'<figure class="pk-media"><img src="{html.escape(src)}" alt="{html.escape(alt)}" loading="lazy" decoding="async">'
        f'<figcaption>{e(cap)}</figcaption></figure>'
        for src, alt, cap in case["figures"]
    )
    parts.append(
        '\t\t\t\t<section class="pk-section pk-media-section" id="work">\n'
        f'\t\t\t\t\t<div class="pk-shell"><div class="pk-media-stack">{media}</div></div>\n'
        '\t\t\t\t</section>\n'
    )
    links = ""
    if case.get("links"):
        links = '<div class="pk-actions">' + "".join(
            f'<a class="pk-button" href="{html.escape(u)}" target="_blank" rel="noopener noreferrer">{e(l)} ↗</a>'
            for l, u in case["links"]
        ) + "</div>"
    parts.append(
        '\t\t\t\t<section class="pk-section pk-conclusion" id="conclusion">\n'
        f'\t\t\t\t\t<div class="pk-shell"><p class="pk-lead">{e(case["what_changed"])}</p>{links}</div>\n'
        '\t\t\t\t</section>\n'
    )
    # previous / next pagination
    prev = CASES[(index - 1) % len(CASES)]
    nxt = CASES[(index + 1) % len(CASES)]

    def item(c, direction):
        return (
            f'<a class="tlc-project-pagination__item" href="{c["file"]}">'
            f'<span class="tlc-project-pagination__content">'
            f'<span class="tlc-project-pagination__direction">{direction}</span>'
            f'<strong>{e(c["title"])}</strong>'
            f'<span class="tlc-project-pagination__category">{e(c["category"])}</span></span></a>'
        )

    parts.append(
        '\t\t\t\t<nav class="tlc-project-pagination" aria-label="More projects">'
        + item(prev, "← Previous project")
        + item(nxt, "Next project →")
        + '</nav>\n'
    )
    return "".join(parts)


def rebuild(case, index):
    path = PAGES / case["file"]
    start_marker = '\t\t\t<div class="content clearfix">'
    footer_marker = '\t\t\t<!-- Footer -->'
    src = path.read_text(encoding="utf-8") if path.exists() else ""
    if start_marker not in src:
        # New page, or a redirect stub: use the SnB page's head, nav and footer as the shell.
        src = (PAGES / "snb-website.html").read_text(encoding="utf-8")
    i = src.index(start_marker)
    j = src.index(footer_marker)
    prefix = src[:i]
    suffix = src[j:]
    title = f'{case["title"]} — Lulamile Mkhungela'
    desc = f'{case["lead"]}'[:300]
    prefix = re.sub(r"<title>.*?</title>", f"<title>{html.escape(title, quote=False)}</title>", prefix, count=1)
    prefix = re.sub(r'<meta name="description" content="[^"]*"\s*/?>',
                    f'<meta name="description" content="{html.escape(desc)}">', prefix, count=1)
    prefix = re.sub(r'<meta property="og:title" content="[^"]*"\s*/?>',
                    f'<meta property="og:title" content="{html.escape(title)}">', prefix, count=1)
    prefix = re.sub(r'<meta property="og:description" content="[^"]*"\s*/?>',
                    f'<meta property="og:description" content="{html.escape(desc)}">', prefix, count=1)
    prefix = re.sub(r'<meta name="twitter:title" content="[^"]*"\s*/?>',
                    f'<meta name="twitter:title" content="{html.escape(title)}">', prefix, count=1)
    prefix = re.sub(r'<meta name="twitter:description" content="[^"]*"\s*/?>',
                    f'<meta name="twitter:description" content="{html.escape(desc)}">', prefix, count=1)
    body = (
        '\t\t\t<div class="content clearfix">\n\n'
        + body_for(case, index)
        + '\t\t\t</div>\n\t\t\t<!-- Content End -->\n\n'
    )
    path.write_text(prefix + body + suffix, encoding="utf-8")
    return path


if __name__ == "__main__":
    for idx, case in enumerate(CASES):
        out = rebuild(case, idx)
        print("rebuilt", out.relative_to(ROOT))
