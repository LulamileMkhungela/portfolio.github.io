import os
import re
import subprocess
import glob

# ==========================================
# 1. CORE CSS AND COMMON ASSETS
# ==========================================

TOUCH_COMMON_HEAD = """
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
"""

TOUCH_STYLES = """
<style id="lula-touch-styles">
:root {
  --bg-main: #0f1011;
  --bg-surface: #151618;
  --bg-surface-elevated: #1c1d20;
  --bg-surface-subtle: rgba(255, 255, 255, 0.03);
  --border: rgba(255, 255, 255, 0.09);
  --border-strong: rgba(255, 255, 255, 0.16);
  --text-main: #ffffff;
  --text-muted: #8e8f96;
  --text-faint: #5a5b62;
  --accent: #22c55e;
  --accent-purple: #a78bfa;
  --accent-blue: #38bdf8;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --font-heading: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
  font-family: var(--font-body) !important;
  line-height: 1.6;
  overflow-x: hidden;
  font-size: 15px;
}

a {
  color: inherit;
  text-decoration: none;
}

.container-xl {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 28px;
}

.page-section {
  padding: 96px 0;
  position: relative;
}

.page-section.border-top {
  border-top: 1px solid var(--border);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
}

.section-heading {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4.2vw, 56px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 24px;
}

.section-heading-huge {
  font-family: var(--font-heading);
  font-size: clamp(38px, 5.8vw, 76px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: var(--text-main);
  margin-bottom: 24px;
}

.section-sub {
  font-size: 18px;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 800px;
  margin-bottom: 36px;
  font-weight: 400;
}

.card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.touch-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  transition: all 0.25s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.touch-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  background: var(--bg-surface-elevated);
}

.touch-card-num {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.touch-card-title {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-main);
  margin-bottom: 12px;
}

.touch-card-desc {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
}

.stat-big {
  font-family: var(--font-heading);
  font-size: clamp(48px, 6vw, 84px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--text-main);
  margin-bottom: 12px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  background: #ffffff;
  color: #0f1011;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary:hover {
  background: #e2e2e2;
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-strong);
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-1px);
}

/* PROJECT SHOWCASE CARD */
.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.project-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-3px);
  background: var(--bg-surface-elevated);
}

.project-card-img-wrap {
  position: relative;
  width: 100%;
  padding-top: 58%;
  overflow: hidden;
  background: #0a0b0c;
}

.project-card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-card-img {
  transform: scale(1.03);
}

.project-card-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-card-tag {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.project-card-title {
  font-family: var(--font-heading);
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.project-card-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 18px;
}

.project-card-foot {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

/* QUOTE BAND */
.quote-band {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 56px 48px;
  position: relative;
}

.quote-text {
  font-family: var(--font-heading);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 500;
  line-height: 1.35;
  color: #fff;
  margin-bottom: 32px;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.quote-author-name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

.quote-author-title {
  font-size: 13px;
  color: var(--text-muted);
}

/* FAQ ACCORDION */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.active {
  border-color: var(--border-strong);
}

.faq-question {
  padding: 24px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.faq-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
  color: var(--text-muted);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: #fff;
}

.faq-answer {
  padding: 0 28px 24px;
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.65;
  display: none;
}

.faq-item.active .faq-answer {
  display: block;
}

/* CTA BAND */
.cta-band {
  background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(15,16,17,0.95) 100%);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 72px 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-band h2 {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4.5vw, 54px);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.cta-band p {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 32px;
}

.cta-btn-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* FOOTER */
.touch-footer {
  border-top: 1px solid var(--border);
  padding: 72px 0 40px;
  background: #0b0c0d;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 64px;
}

.footer-col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: 14px;
  color: var(--text-muted);
  transition: color 0.15s;
}

.footer-link:hover {
  color: #fff;
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--text-faint);
}

@media (max-width: 960px) {
  .card-grid-3 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .card-grid-3, .card-grid-2 { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .quote-band, .cta-band { padding: 40px 24px; }
}
</style>
"""

TOUCH_FOOTER = """
    <footer class="touch-footer">
      <div class="container-xl">
        <div class="footer-grid">
          <div>
            <img src="{prefix}assets/lulasync-logo.svg" alt="LulaSync" style="height:28px;margin-bottom:16px;display:block;" />
            <p style="font-size:14px;color:var(--text-muted);max-width:320px;line-height:1.6;">
              LulaSync is a digital product design and UI engineering studio in Johannesburg, building high-utility digital assets across fintech, healthtech, and enterprise.
            </p>
          </div>
          <div>
            <div class="footer-col-title">Navigation</div>
            <div class="footer-links">
              <a href="{prefix}index.html" class="footer-link">Home</a>
              <a href="{prefix}projects.html" class="footer-link">Works</a>
              <a href="{prefix}about.html" class="footer-link">About Me</a>
              <a href="{prefix}about-us.html" class="footer-link">About Us</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Industries</div>
            <div class="footer-links">
              <a href="{prefix}industries/fintech.html" class="footer-link">Financial Services</a>
              <a href="{prefix}industries/healthtech.html" class="footer-link">Healthtech</a>
              <a href="{prefix}industries/edtech.html" class="footer-link">EdTech</a>
              <a href="{prefix}industries/automotive.html" class="footer-link">Automotive</a>
              <a href="{prefix}industries/retail.html" class="footer-link">Retail &amp; Commerce</a>
              <a href="{prefix}industries/enterprise.html" class="footer-link">Enterprise &amp; SaaS</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Direct Contact</div>
            <div class="footer-links">
              <a href="mailto:mkhungela.l@gmail.com" class="footer-link">mkhungela.l@gmail.com</a>
              <a href="tel:+27837195064" class="footer-link">+27 83 719 5064</a>
              <a href="https://www.linkedin.com/in/lulamile-mkhungela/" target="_blank" rel="noopener" class="footer-link">LinkedIn Profile</a>
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="footer-link" style="color:var(--accent);font-weight:600;">Book a Discovery Call →</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 LulaSync. All rights reserved.</div>
          <div>Johannesburg, South Africa</div>
        </div>
      </div>
    </footer>
"""

TOUCH_PAGE_SCRIPT = """
<script>
function toggleFaq(el) {
  var item = el.closest('.faq-item');
  var wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(function(i){ i.classList.remove('active'); });
  if (!wasActive) {
    item.classList.add('active');
  }
}
function openContactForm() {
  window.open('https://calendly.com/lulamile_m/meet-lulamile', '_blank');
}
</script>
"""

print("Defined common TouchFoundry styles and footer.")
