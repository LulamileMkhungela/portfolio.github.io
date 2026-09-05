import re

def reorder_projects():
    with open("projects.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Extract all works_item cards
    # Pattern to match each <div role="listitem" class="works_item w-dyn-item" ...>...</div>
    items = re.findall(r"(<div role=\"listitem\" class=\"works_item w-dyn-item\"[^>]*>.*?</div>\s*</div>\s*</div>\s*</div>)", html, re.DOTALL)
    print(f"Found {len(items)} items in projects.html")

    cards_by_name = {}
    for it in items:
        tm = re.search(r"<h3[^>]*class=\"works_name\"[^>]*>([^<]+)</h3>", it)
        if tm:
            name = tm.group(1).strip()
            cards_by_name[name] = it

    # Adjust individual card details where necessary:
    # 1. BantuZel
    bantuzel_card = cards_by_name.get("BantuZel", "")
    
    # 2. Academia (1st)
    academia_card1 = cards_by_name.get("Academia", "")
    
    # 3. Auto Claims
    autoclaims_card = cards_by_name.get("Auto Claims", "")
    
    # 4. SecureLife (Stance Insurance) - rename from Stance Insurance if needed
    stance_card = cards_by_name.get("Stance Insurance", "")
    if stance_card:
        stance_card = stance_card.replace("Stance Insurance", "SecureLife (Stance Insurance)")
    elif "SecureLife (Stance Insurance)" in cards_by_name:
        stance_card = cards_by_name["SecureLife (Stance Insurance)"]

    # 5. Academia (2nd) - second link / occurrence
    academia_card2 = academia_card1.replace('href="projects/academia.html"', 'href="https://www.figma.com/proto/5Uj3750r2F7d1000K2K5Jd/Academia-LMS?page-id=0%3A1&node-id=1-2&viewport=241%2C48%2C0.1&scaling=scale-down"')

    # 6. Hospital Command - rename from Hospital Command Center if needed
    hosp_card = cards_by_name.get("Hospital Command Center", "") or cards_by_name.get("Hospital Command", "")
    if hosp_card:
        hosp_card = hosp_card.replace("Hospital Command Center", "Hospital Command")

    # 7. Tyme Bank Redesign - rename from TymeBank Redesign or Neo Banking
    tyme_card = cards_by_name.get("TymeBank Redesign", "") or cards_by_name.get("Neo Banking", "") or cards_by_name.get("Tyme Bank Redesign", "")
    if tyme_card:
        tyme_card = tyme_card.replace("TymeBank Redesign", "Tyme Bank Redesign").replace("Neo Banking", "Tyme Bank Redesign")

    # 8. Design Tokens - use assets/design-token.png and rename
    dt_card = cards_by_name.get("Design Systems &amp; Tokens", "") or cards_by_name.get("Design Tokens", "")
    if dt_card:
        dt_card = re.sub(r'assets/design-op\.png', 'assets/design-token.png', dt_card)
        dt_card = dt_card.replace("Design Systems &amp; Tokens", "Design Tokens")
    else:
        # Create standard card
        dt_card = """<div role="listitem" class="works_item w-dyn-item" data-svc="Design Systems"><div class="works_card-wrap"><a href="https://www.figma.com/make/gkTm2bYYnzAmDBwWbWE7kb/Innovative-Design-System-Creation?t=871NF4mO6SlkhYAP-1" target="_blank" rel="noopener" class="works_card w-inline-block"><div class="works_label"><div class="about_label-infos"><img src="assets/design-token.png" loading="lazy" alt="" class="works_pic"/><h3 fs-list-field="title" class="works_name">Design Tokens</h3></div><div class="see-works_divider"></div><div class="text-size-tiny text-color-white">See work</div></div><img src="assets/design-token.png" loading="lazy" alt="Project cover image" class="works_image"/></a><div class="works_infos"><div class="works_infos-group"><div class="text-color-grey-400"><div class="text-style-label-caption">Year</div></div><div class="works_info">2026</div></div><div class="works_infos-group right"><div class="text-color-grey-400"><div class="text-style-label-caption no-underline">Niche</div></div><div fs-list-field="industry" class="works_info">Design Systems</div><div class="hidden w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div fs-list-field="service">Design Systems</div></div></div></div></div></div></div></div>"""

    top_8_cards = [
        bantuzel_card,
        academia_card1,
        autoclaims_card,
        stance_card,
        academia_card2,
        hosp_card,
        tyme_card,
        dt_card
    ]

    used_original_names = {
        "BantuZel", "Academia", "Auto Claims", "Stance Insurance", "SecureLife (Stance Insurance)",
        "Hospital Command Center", "Hospital Command", "TymeBank Redesign", "Neo Banking", "Tyme Bank Redesign",
        "Design Systems &amp; Tokens", "Design Tokens"
    }

    remaining_cards = []
    for it in items:
        tm = re.search(r"<h3[^>]*class=\"works_name\"[^>]*>([^<]+)</h3>", it)
        if tm:
            name = tm.group(1).strip()
            if name not in used_original_names:
                remaining_cards.append(it)

    all_ordered_cards = top_8_cards + remaining_cards
    print(f"Total ordered cards: {len(all_ordered_cards)}")

    new_list_inner = "\n".join(all_ordered_cards)

    # Replace the works_list container contents in projects.html
    # Find start and end of <div role="list" class="works_list w-dyn-items"> ... </div>
    pattern = r'(<div role="list" class="works_list w-dyn-items">)(.*?)(</div>\s*<div role="navigation" aria-label="List" class="w-pagination-wrapper)'
    
    if re.search(pattern, html, re.DOTALL):
        html = re.sub(pattern, rf'\1\n{new_list_inner}\n\3', html, flags=re.DOTALL)
        print("Replaced works_list in projects.html")
    else:
        print("Could not find pattern for works_list in projects.html")

    with open("projects.html", "w", encoding="utf-8") as f:
        f.write(html)

reorder_projects()
