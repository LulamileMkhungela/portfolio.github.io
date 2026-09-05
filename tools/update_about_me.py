import os
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html
from tools.touch_common import TOUCH_COMMON_HEAD, TOUCH_STYLES, TOUCH_FOOTER, TOUCH_PAGE_SCRIPT

def generate_about_me():
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {TOUCH_COMMON_HEAD}
  <title>About Me | Lulamile Mkhungela — Product Designer &amp; Strategist</title>
  <meta name="description" content="Johannesburg-based digital product designer and strategist. 8+ years designing high-conversion digital assets across fintech, healthtech, and enterprise." />
  <link href="assets/lulasync-favicon.svg" rel="icon" type="image/svg+xml" />
  {COSMOS_NAV_CSS}
  {TOUCH_STYLES}
  <style>
    .bio-img {{
      width: 100%;
      max-width: 440px;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-strong);
      object-fit: cover;
      aspect-ratio: 4/5;
      display: block;
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
          <div class="section-badge"><span class="badge-dot"></span>About Me · Product Designer &amp; Strategist</div>
          <div style="display:grid;grid-template-columns:1.2fr 0.8fr;gap:48px;align-items:center;">
            <div>
              <h1 class="section-heading-huge">How I build is just as important as what I build.</h1>
              <p class="section-sub">
                Johannesburg-based, thinking globally. I design and architect digital products that are clear, intuitive, and built to drive commercial results across fintech, healthtech, edtech, and enterprise.
              </p>
              <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:32px;">
                <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book a Discovery Call</a>
                <a href="projects.html" class="btn-secondary">View Shipped Works</a>
              </div>
            </div>
            <div style="display:flex;justify-content:center;">
              <img src="assets/meew.jpeg" alt="Lulamile Mkhungela" class="bio-img" />
            </div>
          </div>

          <div class="card-grid-3" style="margin-top:64px;">
            <div class="touch-card">
              <div class="stat-big" style="color:#fff;">+8</div>
              <div class="touch-card-title">Years Designing</div>
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
          <div class="section-badge"><span class="badge-dot"></span>My Approach</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;">
            <div>
              <h2 class="section-heading">Built to bridge design and engineering.</h2>
            </div>
            <div>
              <p style="font-size:17px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">
                Most tech companies face a frustrating dilemma: design agencies that deliver flashy concept decks that collapse during engineering, or developers who build solid backends with clunky, frustrating interfaces.
              </p>
              <p style="font-size:17px;color:var(--text-muted);line-height:1.7;margin-bottom:20px;">
                I operate as the bridge between both worlds. High-fidelity UX instinct, tokenized design systems, and frontend engineering principles unified into one cohesive product discipline.
              </p>
              <div style="font-size:16px;font-weight:700;color:#fff;">
                I treat every product as if it has a real P&amp;L — optimizing for user retention, conversion velocity, and engineering efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW I THINK -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Design Philosophy</div>
          <h2 class="section-heading">I thrive in the spaces between.</h2>
          <p class="section-sub">Strategy, experience, and technology are usually divided between disconnected teams. I treat them as one unified craft.</p>
          
          <div class="card-grid-2">
            <div class="touch-card">
              <div class="touch-card-num">01 / STRATEGY</div>
              <h3 class="touch-card-title">What is worth building</h3>
              <p class="touch-card-desc">Validating commercial assumptions, user workflows, and feature prioritization before a single line of code is written.</p>
            </div>
            <div class="touch-card">
              <div class="touch-card-num">02 / EXPERIENCE</div>
              <h3 class="touch-card-title">Products people reach for</h3>
              <p class="touch-card-desc">Designing thumb-friendly, keyboard-accessible interfaces that eliminate cognitive friction and make complex tasks effortless.</p>
            </div>
            <div class="touch-card">
              <div class="touch-card-num">03 / CRAFT</div>
              <h3 class="touch-card-title">Systems that scale</h3>
              <p class="touch-card-desc">Building tokenized Figma variable libraries and Storybook components that maintain consistency across multiple product squads.</p>
            </div>
            <div class="touch-card">
              <div class="touch-card-num">04 / DELIVERY</div>
              <h3 class="touch-card-title">Code-ready handoffs</h3>
              <p class="touch-card-desc">Speaking Git, React component lifecycles, and API schemas — ensuring zero design degradation between Figma and production.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- INDUSTRIES -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Domain Experience</div>
          <h2 class="section-heading">Broad range. Deep in six.</h2>
          <p class="section-sub">I have designed and delivered software across diverse sectors, building deep domain knowledge in six key industries.</p>
          
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

      <!-- CTA -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="cta-band">
            <h2>Serious work, seriously enjoyable.</h2>
            <p>If you want a product designer who treats your roadmap like it has a real P&amp;L, let's talk.</p>
            <div class="cta-btn-row">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book a Call with Lulamile</a>
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
</body>
</html>
"""
    with open("about.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Generated about.html with unified Cosmos navbar and TouchFoundry aesthetic.")

generate_about_me()
