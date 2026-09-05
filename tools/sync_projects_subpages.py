import glob
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html
import re

for proj_path in glob.glob("projects/*.html"):
    with open(proj_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if it has the Cosmos navbar
    if "navbar_component" in content:
        # Replace the inner navbar_component with get_navbar_component_html(prefix="../")
        # Ensure COSMOS_NAV_CSS and COSMOS_NAV_JS are present
        if '<style id="lula-nav-core">' not in content:
            content = content.replace("</head>", f"{COSMOS_NAV_CSS}\n</head>")
        
        # Replace navbar component
        content = re.sub(
            r'<div class="navbar_component">.*?</div>\s*</div>\s*</div>',
            get_navbar_component_html(prefix="../") + "\n</div></div>",
            content,
            flags=re.DOTALL
        )
        
        if '<script id="lula-nav-core-js">' not in content:
            content = content.replace("</body>", f"{COSMOS_NAV_JS}\n</body>")
            
        with open(proj_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {proj_path} with Cosmos nav.")

print("Verified and updated projects subpages.")
