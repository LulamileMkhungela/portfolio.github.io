# Research: case-study structure for UX, UI and frontend hiring

Purpose: the basis for the case-study pages. Each source below was read (search snippets or the full page) and the points that were applied are listed.

## Sources read

1. **Superhive, "UX Design portfolio: Projects, structure, and what recruiters want to see"**
   https://www.superhive.co/ux-design-portfolio-projects-structure-recruiters-want
   - Three review layers: scan, credibility, interview. Credibility needs ownership, decision quality and trade-offs.
   - Show 3 to 5 projects; the homepage shows 2 to 4 of them.
   - Case study order: context and stakes; role and boundaries; 3 to 5 decisions with trade-offs; outcome and evidence.
   - "No fake numbers." If there are no clean metrics, say what could be measured and what signals were seen.
   - Rebuild order: homepage, case study, outcome proof, interview transfer, reviewer friction.

2. **UX Planet, "UX Portfolio Case Study template (plus examples from successful hires)"**
   https://uxplanet.org/ux-portfolio-case-study-template-plus-examples-from-successful-hires-86d5b0faa2d6
   - Template fields: title and subtitle; client or company and project type; project date; your role; summary (goal and results).
   - Applied: the meta block already holds client, role, industry and year. The year field is kept.

3. **UX Pilot, "12 Best Product Design Portfolios Analyzed for UX"**
   https://uxpilot.ai/blogs/product-design-portfolio-case-studies
   - Strong case studies frame the problem, your role and what changed. Outcomes need not be perfect metrics, but they must show direction, learning or real impact.
   - Applied: the outcome section says "Not yet evidenced" where there is no source, and shows direction where there is.

4. **GreatFrontend, "Frontend Developer Portfolio: What to Build and How to Stand Out in 2026"**
   https://www.greatfrontend.com/blog/frontend-developer-portfolio
   - Frontend case study sequence: problem; context; my role; frontend decisions (state, data, components, routing, accessibility, performance, testing); trade-offs ("what I chose not to do"); quality ("how I checked the work"); result; next ("what I would improve with more time").
   - Applied: every case study gets a "How I checked the work" section and a "What I would do next" line. Where a source does not show the check or next step, the page says so.

5. **Foliox, "Frontend Developer Portfolio Examples" (2026)**
   https://foliox.me/portfolio-for/frontend-developers
   - Hiring managers want proof of shipping, links to live work and tagged stacks. A portfolio should be fast and accessible.
   - Applied: the Africa Cuisine case links to the live site. The stack is shown where it is known.

6. **Magic Self, "Frontend Developer Portfolio Website" (2026)**
   https://www.magic-self.dev/examples/frontend-developer
   - Recruiters scan the skills section first, and performance or accessibility work separates candidates.
   - Applied: the skills and stack are on the CV. Performance numbers are not claimed, because no measurement is on record.

7. **Hakia, "Developer Portfolio Guide 2026"** and **TieTalent, "How to Build a Tech Portfolio That Gets You Hired in 2025"**
   - Explain decisions, not just stack choices; keep READMEs and demos working; check mobile and accessibility.
   - Applied: decisions name the alternative and the trade-off. The Africa Cuisine case links to the live site, which works on mobile.
   - Not applied: the claims in Hakia (e.g. "84% of employers") and "40% more callbacks" are unsourced, so they are not used.

## Applied to the six NDA studies (locked pages)

The six password-protected studies previously showed only the *names* of their
parts with no content under them, so they failed the Superhive "credibility"
layer completely. They now carry the four-part structure in full:

| Superhive part | On the locked page |
| --- | --- |
| 1. Context and stakes | "Context and stakes" |
| 2. Role and boundaries | "Role and boundaries" - what he did, what other teams did, seniority, team setup and timeline |
| 3. Key decisions and trade-offs | "Key decisions and trade-offs" - trade-off shown only where one is on record |
| 4. Outcome and evidence | "Outcome and evidence" - no figures claimed; states what *would* settle it, per the article's rule for missing metrics |

A fifth block, "How I got there", carries the delivery process at the owner's
request. Its depth scales with seniority at the time: four stages for Sasol in
2023, five for Takeda in 2025-26, six for the current 2026 engagements.

**No case study states a number of years of experience.** The owner's
instruction is that the scaling shows in the depth of the process, never in a
line of copy. Timeline lines carry dates and team setup only. The article's
"seniority" cue in part 2 is met by the dates, the scope of ownership and the
"Team and scope" boundary line.

The article's NDA guidance is what makes this publishable: include the
project, sanitise the sensitive detail, keep the focus on process, decisions
and constraints. The detailed write-up stays encrypted.

## Sourcing rule

Every statement in a case study has to trace to the owner's CV
(`docs/cv/`) or to the source documents behind
`scripts/case_data_documents.py`. Nothing is inferred to fill a gap - not a
team's composition, not a metric, not a date.

Where "show the team" and "stay sourced" pulled against each other, sourced
wins: the boundary is drawn with the "Team and scope" line, which is taken from
the source documents, rather than by inventing colleagues. Attribution is never
diluted either - if the CV says he architected something, the case study says
so, and the boundary line states what belonged to others.

## Still to do

Nothing outstanding on structure. `nerdma-website`, `snb-website` and
`lula-gazette` were brought onto the full section set
(`role` and `decisions` added after `problem`). The other public studies
(`forma-design-system`, `toyota-connected-apps`, `africa-cuisine-pwa`) already
carried `context / problem / role / decisions / tradeoffs / outcomes`.

The 11 remaining public pages still on `portfolio-case-shared.css?v=42` have
not been audited against this framework.

## What this changes on the site

- Each case study keeps: context, role and boundaries, decisions with trade-offs, outcome and evidence, and what changed.
- Added: "How I checked the work" (quality) and "What I would do next" (reflection). Written only from sourced facts or marked "to confirm".
- Homepage: the chosen featured set is Vodacom Engage, Toyota Connected Apps, DesignOps and Africa Cuisine. The other projects remain reachable.
- Metrics: nothing is added without a source. Frontend performance claims (Lighthouse, Core Web Vitals) are not made, because none are on record.
