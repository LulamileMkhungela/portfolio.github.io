import os
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html
from tools.touch_common import TOUCH_COMMON_HEAD, TOUCH_STYLES, TOUCH_FOOTER, TOUCH_PAGE_SCRIPT

def generate_touch_about_us():
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {TOUCH_COMMON_HEAD}
  <title>About Us | LulaSync — Product Design &amp; Digital Solutions</title>
  <meta name="description" content="Johannesburg-based digital product studio. We build robust, revenue-driving products people actually love to use across 6 industries and 3 continents." />
  <link href="assets/lulasync-favicon.svg" rel="icon" type="image/svg+xml" />
  {COSMOS_NAV_CSS}
  {TOUCH_STYLES}
  <style>
    /* ABOUT US SPECIFIC STYLES */
    .tab-btn {{
      padding: 10px 24px;
      border-radius: var(--radius-full);
      background: var(--bg-surface-subtle);
      border: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }}
    .tab-btn.active {{
      background: #ffffff;
      color: #0f1011;
      border-color: #ffffff;
    }}
    .tab-pane {{
      display: none;
      animation: fadeIn 0.3s ease;
    }}
    .tab-pane.active {{
      display: block;
    }}
    @keyframes fadeIn {{
      from {{ opacity: 0; transform: translateY(6px); }}
      to {{ opacity: 1; transform: translateY(0); }}
    }}
    .tz-card {{
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 24px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}
    .tz-city {{
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }}
    .tz-time {{
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 700;
      color: var(--accent);
    }}
    .logo-badge-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      margin-top: 32px;
    }}
    .logo-badge {{
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 18px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: var(--font-heading);
      font-size: 13.5px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 0.04em;
    }}
  </style>
</head>
<body>
  <div class="page-wrapper">
    <nav data-wf--navbar--menu-state="menu-closed-default" class="navbar">
      <div class="navbar_content">
        <div animation="navbar-content" class="padding-global is-tiny">
          {get_navbar_component_html(prefix="")}
        </div>
      </div>
    </nav>
    
    <main>
      <!-- HERO -->
      <section class="page-section" style="padding-top:72px;">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>About LulaSync · Digital Product Studio</div>
          <div style="max-width:1040px;">
            <h1 class="section-heading-huge">How we build is just as important as what we build.</h1>
            <p class="section-sub">
              Johannesburg-based, global in reach. We build robust, revenue-driving digital products people actually love to use — eight years in, across six high-stakes industries and three continents.
            </p>
          </div>

          <div class="card-grid-3" style="margin-top:40px;">
            <div class="touch-card">
              <div class="stat-big" style="color:#fff;">+8</div>
              <div class="touch-card-title">Years of Depth</div>
              <p class="touch-card-desc">Partnering with founders, scaleups, and enterprise innovation teams to ship production software.</p>
            </div>
            <div class="touch-card">
              <div class="stat-big" style="color:var(--accent);">12+</div>
              <div class="touch-card-title">Shipped Products</div>
              <p class="touch-card-desc">Production web, mobile, and SaaS platforms actively carrying live transactions and user workflows.</p>
            </div>
            <div class="touch-card">
              <div class="stat-big" style="color:var(--accent-purple);">6</div>
              <div class="touch-card-title">Industry Verticals</div>
              <p class="touch-card-desc">Deep domain understanding across Fintech, Healthtech, Edtech, Automotive, Retail, and Enterprise.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ORIGIN -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Origin Story</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;">
            <div>
              <h2 class="section-heading">Built to fill a critical gap.</h2>
            </div>
            <div>
              <p style="font-size:17px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">
                The market typically hands tech companies two bad options: agencies that sell polished design presentations but can't engineer them, or enterprise IT teams with technical capacity moving far too slowly to ship before the market changes.
              </p>
              <p style="font-size:17px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">
                We built LulaSync as the third option: fast, engineering-led product design. Deep UX instinct, modular design systems, and frontend execution under one unified roof.
              </p>
              <div style="font-size:16px;font-weight:700;color:#fff;">
                That is the whole idea: digital assets that perform under real load, not just look good on a slide deck.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHO WE WORK WITH (3 TABS) -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Engagement Models</div>
          <h2 class="section-heading">Startups, scaleups, enterprise. Same standard, different gear.</h2>
          
          <div style="display:flex;gap:12px;margin:32px 0 36px;flex-wrap:wrap;">
            <button class="tab-btn active" onclick="switchTab(0, this)">Startups · 0 → 1</button>
            <button class="tab-btn" onclick="switchTab(1, this)">Scaleups · 1 → N</button>
            <button class="tab-btn" onclick="switchTab(2, this)">Enterprise · Transformation</button>
          </div>

          <div id="tab-pane-0" class="tab-pane active">
            <div class="touch-card" style="padding:48px;background:var(--bg-surface-elevated);">
              <div class="touch-card-num">01 / STAGE 0 → 1</div>
              <h3 style="font-size:26px;font-weight:700;color:#fff;margin-bottom:16px;">Find the signal, fast.</h3>
              <p style="font-size:16px;color:var(--text-muted);max-width:780px;line-height:1.65;margin-bottom:28px;">
                We build the first version that proves your market thesis — clickable prototypes, user-tested wireframes, and production MVPs in front of real users early. Momentum over endless polish; real evidence over internal opinions.
              </p>
              <div class="card-grid-3">
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Rapid MVP Delivery</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">From napkin concept to production-ready interface in weeks.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Investor &amp; Demo Prototypes</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">High-fidelity interactive flows that secure capital and early pilots.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Architecture Slices</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Lightweight, extensible component systems ready for dev handover.</div>
                </div>
              </div>
            </div>
          </div>

          <div id="tab-pane-1" class="tab-pane">
            <div class="touch-card" style="padding:48px;background:var(--bg-surface-elevated);">
              <div class="touch-card-num">02 / STAGE 1 → N</div>
              <h3 style="font-size:26px;font-weight:700;color:#fff;margin-bottom:16px;">Scale without breaking the core.</h3>
              <p style="font-size:16px;color:var(--text-muted);max-width:780px;line-height:1.65;margin-bottom:28px;">
                When products outgrow their initial architecture, friction multiplies. We refactor complex user flows, establish tokenized design systems, and build scalable frontends that reduce development sprint cycles.
              </p>
              <div class="card-grid-3">
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Design Systems at Scale</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Figma variables, tokens, and React/Storybook component libraries.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Conversion Optimization</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Data-driven funnel redesigns that eliminate drop-offs and friction.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Feature Expansion</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Layering new capabilities into live products without regression.</div>
                </div>
              </div>
            </div>
          </div>

          <div id="tab-pane-2" class="tab-pane">
            <div class="touch-card" style="padding:48px;background:var(--bg-surface-elevated);">
              <div class="touch-card-num">03 / STAGE ENTERPRISE</div>
              <h3 style="font-size:26px;font-weight:700;color:#fff;margin-bottom:16px;">Modernize legacy workflows into high-utility tools.</h3>
              <p style="font-size:16px;color:var(--text-muted);max-width:780px;line-height:1.65;margin-bottom:28px;">
                Enterprise software doesn't need to be clunky. We replace brittle spreadsheet operations and dated internal portals with fast, keyboard-friendly command centers, telemetry dashboards, and role-based workflows.
              </p>
              <div class="card-grid-3">
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Dense Data Ergonomics</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Virtualized data grids, contextual actions, and keyboard shortcuts.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Role-Based Permissions</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Dynamic views customized to operator clearance and daily focus.</div>
                </div>
                <div style="background:var(--bg-surface);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border);">
                  <div style="font-weight:700;color:#fff;margin-bottom:6px;">Zero-Downtime Migration</div>
                  <div style="font-size:13.5px;color:var(--text-muted);">Shipping slices alongside legacy backends to eliminate cutover risk.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- CLIENT BADGES -->
          <div style="margin-top:64px;">
            <div class="section-badge"><span class="badge-dot"></span>Brands &amp; Teams Partnered With</div>
            <div class="logo-badge-grid">
              <div class="logo-badge">Toyota</div>
              <div class="logo-badge">Vodacom</div>
              <div class="logo-badge">Sasol</div>
              <div class="logo-badge">IOCO Group</div>
              <div class="logo-badge">AddMore Digital</div>
              <div class="logo-badge">Novelmed</div>
              <div class="logo-badge">Intellehub</div>
              <div class="logo-badge">DPSA</div>
              <div class="logo-badge">Nerdma</div>
              <div class="logo-badge">Uluntu UX</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6 DOMAINS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Industry Depth</div>
          <h2 class="section-heading">Broad range. Deep in six.</h2>
          <p class="section-sub">We have shipped across many verticals, but these are the domains where we have built deep, compounding expertise.</p>
          
          <div class="card-grid-3">
            <a href="industries/fintech.html" class="touch-card">
              <div class="touch-card-num">01 / FINTECH</div>
              <h3 class="touch-card-title">Financial Services</h3>
              <p class="touch-card-desc">Banking, payments, automated claims &amp; investment platforms where compliance and zero-latency UX are critical.</p>
            </a>
            <a href="industries/healthtech.html" class="touch-card">
              <div class="touch-card-num">02 / HEALTHTECH</div>
              <h3 class="touch-card-title">Healthtech</h3>
              <p class="touch-card-desc">Clinical command centers, patient records &amp; triage portals where clarity and error-prevention save lives.</p>
            </a>
            <a href="industries/edtech.html" class="touch-card">
              <div class="touch-card-num">03 / EDTECH</div>
              <h3 class="touch-card-title">EdTech</h3>
              <p class="touch-card-desc">LMS platforms, study companions &amp; educator tools designed to maintain learner momentum and completion rates.</p>
            </a>
            <a href="industries/automotive.html" class="touch-card">
              <div class="touch-card-num">04 / AUTOMOTIVE</div>
              <h3 class="touch-card-title">Automotive &amp; Mobility</h3>
              <p class="touch-card-desc">Real-time fleet telemetry, connected in-cabin apps &amp; vehicle marketplace platforms engineered for motion.</p>
            </a>
            <a href="industries/retail.html" class="touch-card">
              <div class="touch-card-num">05 / RETAIL</div>
              <h3 class="touch-card-title">Retail &amp; Commerce</h3>
              <p class="touch-card-desc">Headless e-commerce storefronts, POS synchronization &amp; franchise ordering hubs optimized for cart conversion.</p>
            </a>
            <a href="industries/enterprise.html" class="touch-card">
              <div class="touch-card-num">06 / ENTERPRISE</div>
              <h3 class="touch-card-title">Enterprise &amp; SaaS</h3>
              <p class="touch-card-desc">Operational consoles, CRM pipelines &amp; project orchestration engines bringing consumer polish to enterprise data.</p>
            </a>
          </div>
        </div>
      </section>

      <!-- FRAMEWORKS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Proprietary Methodologies</div>
          <h2 class="section-heading">Frameworks we built, and run on.</h2>
          <p class="section-sub">Eight years of engagements distilled into three battle-tested frameworks to diagnose, architect, and deliver digital assets.</p>
          
          <div class="card-grid-3">
            <div class="touch-card">
              <div class="touch-card-num">FRAMEWORK 01</div>
              <h3 class="touch-card-title">Digital Asset Value Model</h3>
              <p class="touch-card-desc">
                Strategy, experience, technology, and data scored across ten critical intersections. Your weakest dimension sets the ceiling, making the next highest-ROI investment obvious.
              </p>
            </div>
            <div class="touch-card">
              <div class="touch-card-num">FRAMEWORK 02</div>
              <h3 class="touch-card-title">Product Success Blueprint</h3>
              <p class="touch-card-desc">
                Products only succeed where three interests meet: business growth, operator efficiency, and genuine end-user desire. We architect for the intersection, not just one slice.
              </p>
            </div>
            <div class="touch-card">
              <div class="touch-card-num">FRAMEWORK 03</div>
              <h3 class="touch-card-title">Maslow Growth Platform</h3>
              <p class="touch-card-desc">
                A tiered model for digital products — establishing rock-solid technical foundations, progressing to high-conversion UI, and reaching automated intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- TIMEZONES -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Global Presence</div>
          <h2 class="section-heading">One studio. Global business hours.</h2>
          <p class="section-sub">Based in Johannesburg, delivering seamlessly across international time zones from London mornings to New York afternoons.</p>
          
          <div class="card-grid-3" style="margin-top:36px;">
            <div class="tz-card">
              <div>
                <div class="tz-city">Johannesburg</div>
                <div style="font-size:12px;color:var(--text-muted);">Headquarters · SAST</div>
              </div>
              <div class="tz-time" id="time-jhb">--:--</div>
            </div>
            <div class="tz-card">
              <div>
                <div class="tz-city">London</div>
                <div style="font-size:12px;color:var(--text-muted);">United Kingdom · GMT/BST</div>
              </div>
              <div class="tz-time" id="time-lon">--:--</div>
            </div>
            <div class="tz-card">
              <div>
                <div class="tz-city">New York</div>
                <div style="font-size:12px;color:var(--text-muted);">United States · EST/EDT</div>
              </div>
              <div class="tz-time" id="time-nyc">--:--</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="cta-band">
            <h2>Ready to build something that lasts?</h2>
            <p>Let's map your product requirements and scope the thinnest slice that gets into production fast.</p>
            <div class="cta-btn-row">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book a Scoping Call</a>
              <a href="projects.html" class="btn-secondary">Explore Works</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    {TOUCH_FOOTER.replace("{prefix}", "")}
  </div>

  {COSMOS_NAV_JS}
  {TOUCH_PAGE_SCRIPT}
  
  <script>
    function switchTab(index, btn) {{
      document.querySelectorAll('.tab-btn').forEach(function(b){{ b.classList.remove('active'); }});
      btn.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(function(p, i){{
        p.classList.toggle('active', i === index);
      }});
    }}

    function updateClocks() {{
      var now = new Date();
      function fmt(tz) {{
        return new Intl.DateTimeFormat('en-GB', {{
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }}).format(now);
      }}
      var elJ = document.getElementById('time-jhb');
      var elL = document.getElementById('time-lon');
      var elN = document.getElementById('time-nyc');
      if (elJ) elJ.textContent = fmt('Africa/Johannesburg');
      if (elL) elL.textContent = fmt('Europe/London');
      if (elN) elN.textContent = fmt('America/New_York');
    }}
    updateClocks();
    setInterval(updateClocks, 1000);
  </script>
</body>
</html>
"""
    with open("about-us.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Generated authentic TouchFoundry about-us.html")

generate_touch_about_us()
