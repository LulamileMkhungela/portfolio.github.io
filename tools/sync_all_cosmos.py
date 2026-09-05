import re
import os
import glob
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html

def update_page_cosmos_nav(filepath, prefix=""):
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # Style
    html = re.sub(r'<style id="lula-navbar-v\d+">.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style id="lula-cosmos-nav">.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style id="lula-nav-core">.*?</style>', '', html, flags=re.DOTALL)
    html = html.replace('</head>', f'{COSMOS_NAV_CSS}\n</head>')

    # Nav Component
    comp_start = html.find('<div class="navbar_component">')
    menu_start = html.find('<div class="menu">')
    if comp_start != -1 and menu_start != -1:
        html = html[:comp_start] + get_navbar_component_html(prefix=prefix) + '\n</div></div></div>\n      ' + html[menu_start:]
    elif comp_start != -1:
        # if no menu, replace navbar_component up to its closing tag
        end_comp = html.find('</div>\n        </div>\n      </div>', comp_start)
        if end_comp != -1:
            html = html[:comp_start] + get_navbar_component_html(prefix=prefix) + html[end_comp:]

    # JS
    html = re.sub(r'<script id="lula-nav-js">.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script id="lula-cosmos-nav-js">.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script id="lula-nav-core-js">.*?</script>', '', html, flags=re.DOTALL)
    html = html.replace('</body>', f'{COSMOS_NAV_JS}\n</body>')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Updated {filepath}")

# Update all pages
for p in ["about.html", "about-us.html", "projects/bantuzel.html", "projects/onlipay.html", "projects/ridemelo.html", "projects/academia.html"]:
    if os.path.exists(p):
        update_page_cosmos_nav(p, prefix="" if not p.startswith("projects/") else "../")

for s in glob.glob("services/*.html"):
    update_page_cosmos_nav(s, prefix="../")

for ind in glob.glob("industries/*.html"):
    update_page_cosmos_nav(ind, prefix="../")

print("All Cosmos pages navigation synchronized!")
