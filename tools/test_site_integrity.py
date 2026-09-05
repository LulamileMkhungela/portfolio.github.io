import http.server
import socketserver
import threading
import urllib.request
import re

PORT = 8999
Handler = http.server.SimpleHTTPRequestHandler

class QuietServer(socketserver.TCPServer):
    allow_reuse_address = True

httpd = QuietServer(("", PORT), Handler)
server_thread = threading.Thread(target=httpd.serve_forever)
server_thread.daemon = True
server_thread.start()

routes = [
    "/index.html",
    "/projects.html",
    "/about.html",
    "/about-us.html",
    "/services/product-uiux-design.html",
    "/services/platforms-and-systems.html",
    "/services/native-applications.html",
    "/services/hybrid-web-applications.html",
    "/services/brand-design.html",
    "/services/design-systems.html",
    "/services/strategy.html",
    "/services/ui-engineering.html",
    "/services/web-design.html",
    "/services/support-and-maintenance.html",
    "/services/business-automation.html",
    "/industries/fintech.html",
    "/industries/healthtech.html",
    "/industries/edtech.html",
    "/industries/automotive.html",
    "/industries/retail.html",
    "/industries/enterprise.html",
    "/projects/bantuzel.html",
    "/projects/academia.html",
    "/projects/onlipay.html",
    "/projects/ridemelo.html"
]

print("=== RUNNING FULL ROUTE & CONTENT INTEGRITY TEST ===")
all_passed = True
for r in routes:
    url = f"http://localhost:{PORT}{r}"
    try:
        req = urllib.request.urlopen(url)
        status = req.status
        content = req.read().decode('utf-8')
        
        # Check title
        m_title = re.search(r"<title>(.*?)</title>", content)
        title_str = m_title.group(1) if m_title else "NO TITLE"
        
        # Check if contains persona switch script
        has_nav = 'lula-nav-core-js' in content
        
        # Check for forbidden keywords
        has_repersonalize = 're-personalize' in content.lower() or 'repersonalize' in content.lower()
        has_culture_nav = 'class="footer-link">culture<' in content.lower() or 'class="lula-nav-link">culture<' in content.lower()
        
        if status == 200 and has_nav and not has_repersonalize and not has_culture_nav:
            print(f"✓ [200 OK] {r} — {title_str[:40]}")
        else:
            print(f"✗ [FAIL] {r} — status: {status}, nav: {has_nav}, repersonalize: {has_repersonalize}, culture: {has_culture_nav}")
            all_passed = False
    except Exception as e:
        print(f"✗ [EXCEPTION] {r} — {e}")
        all_passed = False

# Validate projects.html top 8 sequence
print("\n=== VALIDATING PROJECTS.HTML TOP 8 SEQUENCE ===")
with open("projects.html", "r", encoding="utf-8") as f:
    p_content = f.read()

# Find card headings in sequence
headings = re.findall(r'<h3 fs-list-field="title" class="works_name">(.*?)</h3>', p_content)
print(f"Total projects found: {len(headings)}")
print("Top 10 sequence:")
for i, h in enumerate(headings[:10], 1):
    print(f" {i}. {h}")

expected_top_8 = [
    "BantuZel",
    "Academia",
    "Auto Claims",
    "SecureLife (Stance Insurance)",
    "Academia",
    "Hospital Command",
    "Tyme Bank Redesign",
    "Design Tokens"
]

seq_ok = True
for i, exp in enumerate(expected_top_8):
    if headings[i] != exp:
        print(f"Mismatch at index {i+1}: expected '{exp}', got '{headings[i]}'")
        seq_ok = False

if seq_ok:
    print("✓ Top 8 sequence strictly matches all criteria!")

# Check design tokens asset
has_token_asset = 'assets/design-token.png' in p_content
print(f"Design tokens uses assets/design-token.png: {'✓ YES' if has_token_asset else '✗ NO'}")

# Check default all active
listitems = re.findall(r'<div role="listitem"', p_content)
has_listitems = len(listitems) > 80
print(f"All 81 projects rendered in DOM by default: {'✓ YES (' + str(len(listitems)) + ' found)' if has_listitems else '✗ NO'}")

httpd.shutdown()
print("\nIntegrity tests completed. Overall success:", all_passed and seq_ok and has_token_asset and has_listitems)
