# Site audit and content decisions

Scope: `index.html`, the desktop/Messages/Services/CV data in `js/`, and the 13 pages in `portfolio/`.
Sources used: the repository itself (CV content in `js/desktop.js`, testimonials, case-study pages),
the live Pages index, and Superhive's UX portfolio structure guidance
(https://www.superhive.co/ux-design-portfolio-projects-structure-recruiters-want).

## 1. Is the site ready for UI, frontend and UX recruiters?

**Strong:** a clear devsigner positioning in the About and Services text; real shipped products
(Vodacom Engage, Toyota apps, FoodieZone, LulaGazette, DesignOps); a real CV and certificate trail;
the case studies share a consistent section order (problem, goals, personas, process, impact, outcomes).

**Weak for a time-pressed recruiter (Superhive "scan" layer):**
- The homepage has no role-fit headline. A recruiter sees a desktop of folders before they learn the target role.
- The desktop metaphor needs an interaction to reach content. Recruiters will not explore it, so the case studies need to be reachable from a plain, linear entry point.
- Case-study narratives list problems and outcomes but seldom show *decisions with trade-offs* or *ownership boundaries* (the "credibility" layer).
- Several outcome numbers appear without a stated measurement method, and some CV figures have no matching case study (see section 4).

**Technical:** `js/desktop.js` is about 317 KB and loads jQuery plus about 256 KB of Timber. Lighthouse/RUM has not been run here, so treat load cost as unmeasured. The filter label duplication was fixed previously (`index.html`, `css/desktop.css` v=79).

## 2. Privacy fix (done)
`_poe_out/report.json` (tracked) contained the candidate's ID number in plain text, copied from the PDF text layer. The ID is now replaced with `[REDACTED]`. The PDF text layer and page images were checked: the ID is redacted there (page 2 image shows a black box).

## 3. Timeline decisions (taken from the CV in `js/desktop.js`)
| Item | Decision |
|---|---|
| iOCO | Employment, 2021 to present. Vodacom Engage (2024) and Toyota (2022 to 2024) were delivered through iOCO. Toyota Brand Programme and Vodacom Engage now say "via iOCO", matching the connected-apps page. |
| AddmoreDigital (2021 to 2022) | Freelance, after hours alongside iOCO. Role changed from "Lead UI/UX Designer" to "Freelance UI/UX Designer". |
| Nerdma (2023) | Freelance, after hours alongside iOCO. No longer described as work "at AddMoreDigital". CV line added. |
| Digital Academy (2018 to 2019) | Intern, not Lead. Now "UI/UX and Android development intern, 1 Aug 2018 to 31 Jan 2019", matching the Portfolio of Evidence (`_poe_out`) and the reference in `testimonials-data.js`. |
| IntellehubSA and UluntuXd (2025 to 2026) | Freelance, after hours alongside iOCO, as you confirmed. Titles are "Freelance UI/UX Designer" and "Freelance UX Facilitator and Coach". |
| FoodieZone (2025) | Freelance. Role "Freelance Lead Product Designer & Front-End Developer" on the case study and CV. |
| Hypothetical Objective Systems (2020 to 2021) | Freelance, as you confirmed. Title is now "Freelance Senior UI/UX Designer and Developer Coach". Dates kept as in the CV. |

## 4. Missing clients (presented anonymised)
- Takeda, Sasol, AGSA and Old Mutual are now named by sector in the CV line and About text: "a global pharmaceutical company", "a listed energy group", "a national audit institution", "a financial services group".
- The library label "Takeda design workspace" is now "Pharmaceutical client design workspace (anonymised)". The image file name still contains "takeda"; rename it if you want it fully anonymous.
- The CV highlight "6-micro-frontend architecture and 13-endpoint notifications system for a national audit platform" is kept as written. I have not stated which client it belongs to.
- **Not done, needs facts:** per-client case studies for these four. I do not have their problems, roles, or outcomes in the repository, and I will not invent them.

## 5. Testimonials (kept, anonymised)
The three client testimonials (Vodacom, AddmoreDigital, Nerdma) now show role and sector only:
- "Telecommunications group" (was "Vodacom")
- "Digital agency / Client (anonymised)" (was "AddmoreDigital")
- "Technology services / Client (anonymised)" (was "Nerdma")

The services quote attribution was changed the same way.
**Not changed:** the three Digital Academy references, which name people (for example Gary Bannatyne). They are not client testimonials, so I left them, but tell me if they should be anonymised too.

## 6. Wording fixes made
- DesignOps: "zero design drift" is an overclaim for a linter. Now "a linter that checks shipped code".
- Toyota Connected Apps: the Lexus cover was labelled "illustrative" on a public page. Label removed.

## 7. Still open (case-study rewrite)
The nine full case studies still use their original long-form copy. The storytelling rewrite (context, role and boundaries, 3 to 5 decisions with trade-offs, outcome and evidence, one-line "what changed") needs two things first:
1. Facts for Takeda, Sasol, AGSA and Old Mutual (problem, your role, decisions, measured outcome, or agreement to keep them as sector-only entries).
Metrics in the CV and case studies (92% UAT, 65%, 35%, 32% checkout, 60% discoverability, and others) are kept as written. Each needs a source before it goes in a rewritten case study.

## 8. Claims checked against the repo
- Checkout completion +32%, order value +18%, 7-step flow to 3: appears only in the CV text (`js/desktop.js`). No case study supports it, so it stays CV-only until a source is given.
- Digital Academy references naming people: unchanged, awaiting your decision.

## 9. Latest decisions
- **Checkout +32%, order value +18%, 7-step flow to 3:** the git history (6 commits) and the initial site contain no case study for this, and no deleted case-study files. It remains a CV highlight, which is the only public place it appears. Give me the project name to write a case study for it.
- **Digital Academy references:** shown with names, as you asked. They appear in the Messages app.
- **Four missing clients:** added as one anonymised page, `portfolio/enterprise-engagements-anonymised.html`, built only from CV facts (sector, iOCO 2021 to present, and the audit-platform highlight). It is linked from the CV window. No client names appear anywhere on the page. Full case studies need your project facts.
