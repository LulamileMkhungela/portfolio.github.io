import re
import os
import glob

COSMOS_NAV_CSS = """
<style id="lula-cosmos-nav">
/* === COSMOS TOP NAVIGATION === */
.navbar_component {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: 100% !important;
  gap: 16px !important;
}
.padding-global.is-tiny {
  padding-left: 28px !important;
  padding-right: 28px !important;
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.navbar_content {
  width: 100% !important;
  max-width: 100% !important;
}
.navbar {
  position: sticky !important;
  top: 0 !important;
  z-index: 999999 !important;
  background: rgba(15, 16, 17, 0.95) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}
.navbar-logo_wr {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  text-decoration: none !important;
  flex-shrink: 0 !important;
}
.lula-nav-left-group {
  display: flex !important;
  align-items: center !important;
  gap: 16px !important;
  flex-shrink: 0 !important;
}
.lula-persona-pill {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 6px 12px 6px 10px !important;
  border-radius: 999px !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  background: rgba(255, 255, 255, 0.07) !important;
  cursor: pointer !important;
  position: relative !important;
  user-select: none !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  color: #fff !important;
  white-space: nowrap !important;
  transition: all 0.2s ease !important;
}
.lula-persona-pill:hover {
  background: rgba(255, 255, 255, 0.13) !important;
  border-color: rgba(255, 255, 255, 0.28) !important;
}
.lula-persona-pill .pill-dot {
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background: #a78bfa !important;
  flex-shrink: 0 !important;
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.6) !important;
}
.lula-persona-pill .pill-chevron {
  width: 12px !important;
  height: 12px !important;
  opacity: 0.65 !important;
  transition: transform 0.2s ease !important;
}
.lula-persona-pill.open .pill-chevron {
  transform: rotate(180deg) !important;
}
.lula-persona-dropdown {
  position: absolute !important;
  top: calc(100% + 8px) !important;
  left: 0 !important;
  min-width: 190px !important;
  background: #18191c !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 14px !important;
  padding: 6px !important;
  z-index: 1000000 !important;
  display: none !important;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85) !important;
}
.lula-persona-dropdown.open {
  display: block !important;
}
.lula-persona-option {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding: 9px 12px !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #fff !important;
  transition: background 0.15s !important;
}
.lula-persona-option:hover {
  background: rgba(255, 255, 255, 0.08) !important;
}
.lula-persona-option.active {
  background: rgba(255, 255, 255, 0.06) !important;
  font-weight: 600 !important;
}
.lula-persona-option .opt-dot {
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  flex-shrink: 0 !important;
}
.lula-persona-option .opt-check {
  margin-left: auto !important;
  color: #a78bfa !important;
  font-size: 12px !important;
  font-weight: bold !important;
}
.lula-nav-links {
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  position: relative !important;
}
.lula-nav-link-item {
  position: relative !important;
}
.lula-nav-link {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  padding: 8px 14px !important;
  border-radius: 999px !important;
  font-size: 13.5px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.75) !important;
  text-decoration: none !important;
  cursor: pointer !important;
  white-space: nowrap !important;
  transition: color 0.2s, background 0.2s !important;
  background: transparent !important;
  border: none !important;
}
.lula-nav-link:hover, .lula-nav-link.open {
  color: #fff !important;
  background: rgba(255, 255, 255, 0.08) !important;
}
.lula-nav-link .ln-dot {
  width: 4px !important;
  height: 4px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.3) !important;
  flex-shrink: 0 !important;
}
.lula-nav-link .ln-chevron {
  width: 12px !important;
  height: 12px !important;
  opacity: 0.6 !important;
  transition: transform 0.2s ease !important;
}
.lula-nav-link.open .ln-chevron {
  transform: rotate(180deg) !important;
}
.lula-mega {
  position: absolute !important;
  top: calc(100% + 12px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  background: #161719 !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 18px !important;
  padding: 24px !important;
  z-index: 1000000 !important;
  display: none !important;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9) !important;
  min-width: 580px !important;
}
.lula-mega.open {
  display: block !important;
}
.lula-mega-label {
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  color: rgba(255, 255, 255, 0.4) !important;
  margin-bottom: 16px !important;
}
.lula-mega-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 6px 16px !important;
}
.lula-mega-item {
  display: flex !important;
  align-items: flex-start !important;
  gap: 12px !important;
  padding: 10px 12px !important;
  border-radius: 10px !important;
  text-decoration: none !important;
  transition: background 0.15s !important;
}
.lula-mega-item:hover {
  background: rgba(255, 255, 255, 0.07) !important;
}
.lula-mega-icon {
  font-size: 18px !important;
  line-height: 1 !important;
  margin-top: 2px !important;
  flex-shrink: 0 !important;
}
.lula-mega-item-title {
  font-size: 13.5px !important;
  font-weight: 600 !important;
  color: #fff !important;
  margin-bottom: 2px !important;
}
.lula-mega-item-desc {
  font-size: 12px !important;
  color: rgba(255, 255, 255, 0.45) !important;
  line-height: 1.35 !important;
}
.navbar_talk-to {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  text-decoration: none !important;
  cursor: pointer !important;
  flex-shrink: 0 !important;
}
@media (max-width: 1080px) {
  .lula-nav-links { display: none !important; }
}
</style>
"""

def get_cosmos_navbar_component(prefix=""):
    return f"""
          <div class="navbar_component">
            <div class="lula-nav-left-group">
              <a href="{prefix}index.html" class="navbar-logo_wr w-inline-block">
                <div class="menu_logo-wr"><img src="{prefix}assets/lulasync-logo.svg" loading="lazy" alt="logo" class="menu_logo"/></div>
                <div class="navbar_logo-wrap">
                  <div class="logo-text-flex">
                    <div class="navbar_logo-anim">
                      <div class="navbar_logo-anim_text">Product designer &amp; strategist</div>
                      <div class="navbar_logo-anim_text is-abs">UI/UX &amp; brand design</div>
                      <div class="navbar_logo-anim_text is-abs">SaaS, AI &amp; EdTech</div>
                      <div class="navbar_logo-anim_text is-abs">Johannesburg, South Africa</div>
                    </div>
                  </div>
                </div>
              </a>

              <div class="lula-persona-pill" id="lula-pill" onclick="lulaTogglePill()">
                <span class="pill-dot"></span>
                <span id="lula-pill-label">For You</span>
                <svg class="pill-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div class="lula-persona-dropdown" id="lula-persona-menu">
                  <div class="lula-persona-option active" onclick="lulaSetPersona('for-you',event)"><span class="opt-dot" style="background:#a78bfa;"></span>For You<span class="opt-check" id="lula-check-foryou">✓</span></div>
                  <div class="lula-persona-option" onclick="lulaSetPersona('others',event)"><span class="opt-dot" style="background:#38bdf8;"></span>Others<span class="opt-check" id="lula-check-others" style="display:none;">✓</span></div>
                </div>
              </div>
            </div>

            <nav class="lula-nav-links">
              <div class="lula-nav-link-item">
                <div class="lula-nav-link" onclick="lulaToggleMega('mega-whatwedo',this)">
                  <span id="lula-whatwedo-label">What I do</span><span class="ln-dot"></span>
                  <svg class="ln-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="lula-mega" id="mega-whatwedo" onclick="event.stopPropagation()">
                  <div class="lula-mega-label" id="lula-whatwedo-mega-label">What I do</div>
                  <div class="lula-mega-grid">
                    <a href="{prefix}services/product-uiux-design.html" class="lula-mega-item"><span class="lula-mega-icon">🎨</span><div><div class="lula-mega-item-title">Product UI/UX Design</div><div class="lula-mega-item-desc">UX architecture, interactive prototypes &amp; UI systems.</div></div></a>
                    <a href="{prefix}services/brand-design.html" class="lula-mega-item"><span class="lula-mega-icon">✦</span><div><div class="lula-mega-item-title">Brand Design</div><div class="lula-mega-item-desc">Visual identity, logos &amp; brand systems.</div></div></a>
                    <a href="{prefix}services/design-systems.html" class="lula-mega-item"><span class="lula-mega-icon">⚙️</span><div><div class="lula-mega-item-title">Design Systems</div><div class="lula-mega-item-desc">Component libraries, tokens &amp; scalable design infrastructure.</div></div></a>
                    <a href="{prefix}services/web-design.html" class="lula-mega-item"><span class="lula-mega-icon">🌐</span><div><div class="lula-mega-item-title">Web Design &amp; Dev</div><div class="lula-mega-item-desc">High-fidelity web builds, landing pages &amp; live apps.</div></div></a>
                    <a href="{prefix}services/strategy.html" class="lula-mega-item"><span class="lula-mega-icon">🧠</span><div><div class="lula-mega-item-title">Product Strategy</div><div class="lula-mega-item-desc">Discovery, roadmaps &amp; product thinking.</div></div></a>
                    <a href="{prefix}services/ui-engineering.html" class="lula-mega-item"><span class="lula-mega-icon">💻</span><div><div class="lula-mega-item-title">UI Engineering</div><div class="lula-mega-item-desc">Pixel-perfect UI builds in React, Angular or Webflow.</div></div></a>
                  </div>
                </div>
              </div>

              <div class="lula-nav-link-item">
                <div class="lula-nav-link" onclick="lulaToggleMega('mega-industries',this)">
                  <span>Industries</span><span class="ln-dot"></span>
                  <svg class="ln-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="lula-mega" id="mega-industries" onclick="event.stopPropagation()">
                  <div class="lula-mega-label">Industries &amp; Verticals</div>
                  <div class="lula-mega-grid">
                    <a href="{prefix}industries/fintech.html" class="lula-mega-item"><span class="lula-mega-icon">🏦</span><div><div class="lula-mega-item-title">Financial Services</div><div class="lula-mega-item-desc">Banking, payments, insurance &amp; investment platforms.</div></div></a>
                    <a href="{prefix}industries/healthtech.html" class="lula-mega-item"><span class="lula-mega-icon">🏥</span><div><div class="lula-mega-item-title">Healthtech</div><div class="lula-mega-item-desc">Patient records, hospital command &amp; clinical tools.</div></div></a>
                    <a href="{prefix}industries/edtech.html" class="lula-mega-item"><span class="lula-mega-icon">🎓</span><div><div class="lula-mega-item-title">EdTech</div><div class="lula-mega-item-desc">LMS platforms, study companions &amp; campus tools.</div></div></a>
                    <a href="{prefix}industries/automotive.html" class="lula-mega-item"><span class="lula-mega-icon">🚗</span><div><div class="lula-mega-item-title">Automotive</div><div class="lula-mega-item-desc">Fleet ops, connected vehicles &amp; driver companions.</div></div></a>
                    <a href="{prefix}industries/retail.html" class="lula-mega-item"><span class="lula-mega-icon">🛍️</span><div><div class="lula-mega-item-title">Retail &amp; Commerce</div><div class="lula-mega-item-desc">Marketplaces, fashion &amp; retail intelligence.</div></div></a>
                    <a href="{prefix}industries/enterprise.html" class="lula-mega-item"><span class="lula-mega-icon">🏢</span><div><div class="lula-mega-item-title">Enterprise &amp; SaaS</div><div class="lula-mega-item-desc">CRM, workforce, production &amp; project tools.</div></div></a>
                  </div>
                </div>
              </div>

              <a href="{prefix}projects.html" class="lula-nav-link">Work <span class="ln-dot"></span></a>
              <a href="{prefix}about.html" class="lula-nav-link" id="lula-about-link">About Me</a>
            </nav>

            <div data-wf--talk-to--variant="base">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="navbar_talk-to w-inline-block" title="Book a Call with Lulamile">
                <img loading="lazy" src="{prefix}assets/meew.jpeg" alt="Lulamile Mkhungela" class="navbar_contact-pic"/>
                <div class="navbar_contact-texts">
                  <div class="relative">
                    <div class="nav_contact-name">Lulamile</div>
                    <div class="online"></div>
                  </div>
                  <div class="home-header_position">Strategist</div>
                </div>
              </a>
            </div>
          </div>
"""

COSMOS_NAV_JS = """
<script id="lula-cosmos-nav-js">
(function(){
  var p = localStorage.getItem('lula-persona') || 'for-you';
  if (p === 'me') p = 'for-you';
  if (p === 'business') p = 'others';
  
  function apply(persona){
    p = persona;
    localStorage.setItem('lula-persona', persona);
    var isForYou = (persona === 'for-you');
    
    var pl = document.getElementById('lula-pill-label'),
        wl = document.getElementById('lula-whatwedo-label'),
        ml = document.getElementById('lula-whatwedo-mega-label'),
        al = document.getElementById('lula-about-link'),
        cm = document.getElementById('lula-check-foryou'),
        co = document.getElementById('lula-check-others'),
        pill = document.getElementById('lula-pill');
        
    var isSub = window.location.pathname.indexOf('/services/') !== -1 ||
                window.location.pathname.indexOf('/industries/') !== -1 ||
                window.location.pathname.indexOf('/projects/') !== -1;
    var prefix = isSub ? '../' : '';

    if (isForYou) {
      if(pl) pl.textContent = 'For You';
      if(wl) wl.textContent = 'What I do';
      if(ml) ml.textContent = 'What I do';
      if(al) {
        al.textContent = 'About Me';
        al.setAttribute('href', prefix + 'about.html');
      }
      if(cm) cm.style.display = 'inline';
      if(co) co.style.display = 'none';
      if(pill) {
        var dot = pill.querySelector('.pill-dot');
        if(dot) dot.style.background = '#a78bfa';
      }
      document.querySelectorAll('.lula-persona-option').forEach(function(o, i){
        o.classList.toggle('active', i === 0);
      });
    } else {
      if(pl) pl.textContent = 'Others';
      if(wl) wl.textContent = 'What we do';
      if(ml) ml.textContent = 'What we do';
      if(al) {
        al.textContent = 'About us';
        al.setAttribute('href', prefix + 'about-us.html');
      }
      if(cm) cm.style.display = 'none';
      if(co) co.style.display = 'inline';
      if(pill) {
        var dot = pill.querySelector('.pill-dot');
        if(dot) dot.style.background = '#38bdf8';
      }
      document.querySelectorAll('.lula-persona-option').forEach(function(o, i){
        o.classList.toggle('active', i === 1);
      });
    }
  }

  window.lulaTogglePill = function(){
    var pill = document.getElementById('lula-pill'), menu = document.getElementById('lula-persona-menu');
    if(pill) pill.classList.toggle('open');
    if(menu) menu.classList.toggle('open');
  };

  window.lulaSetPersona = function(persona, e){
    if(e) e.stopPropagation();
    apply(persona);
    var pill = document.getElementById('lula-pill'), menu = document.getElementById('lula-persona-menu');
    if(pill) pill.classList.remove('open');
    if(menu) menu.classList.remove('open');
  };

  window.lulaToggleMega = function(id, trigger){
    var mega = document.getElementById(id);
    if(!mega) return;
    var wasOpen = mega.classList.contains('open');
    document.querySelectorAll('.lula-mega').forEach(function(m){ m.classList.remove('open'); });
    document.querySelectorAll('.lula-nav-link').forEach(function(l){ l.classList.remove('open'); });
    if(!wasOpen){
      mega.classList.add('open');
      if(trigger) trigger.classList.add('open');
    }
  };

  document.addEventListener('click', function(e){
    if(!e.target.closest('.lula-persona-pill')){
      var pill = document.getElementById('lula-pill'), menu = document.getElementById('lula-persona-menu');
      if(pill) pill.classList.remove('open');
      if(menu) menu.classList.remove('open');
    }
    if(!e.target.closest('.lula-nav-link-item')){
      document.querySelectorAll('.lula-mega').forEach(function(m){ m.classList.remove('open'); });
      document.querySelectorAll('.lula-nav-link').forEach(function(l){ l.classList.remove('open'); });
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ apply(p); });
  } else {
    apply(p);
  }
})();
</script>
"""

def update_cosmos_page(filepath, prefix=""):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace CSS style tag
    if re.search(r"<style id=\"lula-navbar-v\d+\">.*?</style>", content, re.DOTALL):
        content = re.sub(r"<style id=\"lula-navbar-v\d+\">.*?</style>", COSMOS_NAV_CSS, content, flags=re.DOTALL)
    elif re.search(r"<style id=\"lula-cosmos-nav\">.*?</style>", content, re.DOTALL):
        content = re.sub(r"<style id=\"lula-cosmos-nav\">.*?</style>", COSMOS_NAV_CSS, content, flags=re.DOTALL)
    elif "</head>" in content:
        content = content.replace("</head>", f"{COSMOS_NAV_CSS}\n</head>")

    # Replace <div class="navbar_component">...</div>
    navbar_comp = get_cosmos_navbar_component(prefix=prefix)
    
    # Clean any malformed navbar_component
    pattern = r'<div class="navbar_component">.*?</div>\s*(?=<div class="menu"|</div>\s*</div>\s*</div>\s*<div class="menu")'
    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, navbar_comp.strip(), content, flags=re.DOTALL)
    else:
        # try matching up to <div class="menu">
        pattern2 = r'<div class="navbar_component">.*?</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*<div class="menu">'
        if re.search(pattern2, content, re.DOTALL):
            content = re.sub(pattern2, f'{navbar_comp.strip()}</div></div></div></div><div class="menu">', content, flags=re.DOTALL)

    # Replace JS
    if re.search(r"<script id=\"lula-cosmos-nav-js\">.*?</script>", content, re.DOTALL):
        content = re.sub(r"<script id=\"lula-cosmos-nav-js\">.*?</script>", COSMOS_NAV_JS, content, flags=re.DOTALL)
    elif re.search(r"<script id=\"lula-nav-js\">.*?</script>", content, re.DOTALL):
        content = re.sub(r"<script id=\"lula-nav-js\">.*?</script>", COSMOS_NAV_JS, content, flags=re.DOTALL)
    elif "</body>" in content:
        content = content.replace("</body>", f"{COSMOS_NAV_JS}\n</body>")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated Cosmos page: {filepath}")

# Update index.html and projects.html
update_cosmos_page("index.html", prefix="")
update_cosmos_page("projects.html", prefix="")

# Update about pages and project case studies
for p in ["about.html", "about-us.html", "projects/bantuzel.html", "projects/onlipay.html", "projects/ridemelo.html", "projects/academia.html"]:
    if os.path.exists(p):
        update_cosmos_page(p, prefix="" if not p.startswith("projects/") else "../")

for s in glob.glob("services/*.html"):
    update_cosmos_page(s, prefix="../")

for ind in glob.glob("industries/*.html"):
    update_cosmos_page(ind, prefix="../")

print("All Cosmos pages successfully updated with clean Cosmos navigation!")
