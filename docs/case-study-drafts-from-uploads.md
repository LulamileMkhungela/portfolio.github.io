# Case-study drafts from uploaded project documents

**Status: DRAFTS, not published.** Nothing here is linked from the live site.

## Read this first

1. **Confidentiality.** These drafts are anonymised as you asked (client names replaced by sector). They still avoid client-specific figures, architecture, screen detail and internal names. Anonymised work can still be identifiable by sector, so check each draft against your NDAs before it goes public.
2. **The source files are on public `main`.** The four upload commits on `main` (`04ffc2b`, `679bddb`, `cdf1995`, `f2129c9`) add client-confidential specifications, requirement documents, workbooks and a frontend guide to a **public** repository. Recommended: remove them from `main` (and from git history, if the client agreements require it) before any case study goes live. I cannot push to `main` from this session.
3. **Your role comes from you, not the documents.** None of the files name you. The role line in each draft (Devsigner, full UX/UI and frontend ownership) is applied as you instructed. Decisions and outcomes are still marked **[CONFIRM]**; I have not invented them.

---

## 1. National power utility: coal stockpile forecasting (machine learning)

- **Anonymised client:** national power utility (CV currently names Eskom; see note in the audit log).
- **Source:** Business Requirements Specification (BRS) Revision 1, Functional Requirements Specification (FRS) Version 4.
- **Project in one line:** a machine-learning decision-support tool to forecast optimal coal stock levels for each power station.

**Context and stakes.** The utility runs several power stations and aims to keep coal stock at optimal levels. The existing model is simplified and does not account for supply-chain factors, station-specific characteristics or the dynamics between stations (BRS §1.4.1 to 1.4.2).

**The problem.** A forecast that ignores interdependence between stations gives planners the wrong stock targets. The product must produce actionable forecasts per station.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project. [CONFIRM SCOPE: the source document is a specification or workbook with no UI deliverable. Confirm the UX/UI and frontend work you owned here.]

**Requirements the documents set (the design constraints):**
- Forecast stock levels per power station, accounting for supply chain, external factors and inter-station relationships.
- Access control: data restricted to authorised personnel by role (BRS and FRS, access-control requirement).
- Integration needs and data requirements are specified in the FRS.

**Key decisions recorded in the specification.** Replace the simplified model with a per-station ML forecast; restrict access by role. [CONFIRM: which of these were your decisions and what alternatives were considered.]

**Outcome.** [CONFIRM OUTCOME: whether the model went live, measured accuracy, planner adoption. Do not publish a result you cannot evidence.]

---

## 2. Multi-agent compliance AI platform (financial services group)

- **Anonymised client:** financial services group (CV currently names Old Mutual in the About text; the CV line has been anonymised).
- **Source:** Technical Specification Ver 2.0 (26 pages); frontend development guide (16 April 2026).
- **Project in one line:** an AI platform in which specialist agents answer compliance, risk and audit questions, with cited responses, for internal analysts and auditors.

**Context and stakes.** Phase 1 extends an existing compliance agent into a multi-agent system. It must work inside the client's security, governance and integration requirements (Tech Spec, executive summary).

**The problem.** Analysts need answers they can check. The frontend must show citations, handle loading states and keep the session, because a verification step runs before each response.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project.

**Frontend requirements the guide sets:**
- Chat interface that returns answers with citations.
- Loading states and session handling.
- Role-based behaviour: user role affects which knowledge base is queried and which documents can be uploaded.
- Stack: React, TypeScript, Tailwind CSS and shadcn/ui components, with Recharts charts.
- Authentication moves from interim tokens to enterprise single sign-on.

**Delivery gate.** Production authentication is a release gate for this platform. Do not describe internal review findings publicly.

**Key decisions recorded.** Adapt an existing multi-agent framework to the client environment rather than build from scratch; keep the verification step before any response is shown. [CONFIRM which decisions were yours.]

**Outcome.** [CONFIRM OUTCOME: rollout status and any measured results.]

---

## 3. Automated media scanning for audit planning (national audit institution)

- **Anonymised client:** national audit institution.
- **Source:** UAT Test Scenarios and test cases workbook (9 sheets, 11 business scenarios).
- **Project in one line:** a tool that scans media for audit-relevant risk (fraud, corruption, reputational risk), builds a centralised media register and sends alerts to authorised users.

**Context and stakes.** At the start of each audit planning cycle, the audit team needs environmental and fraud-risk intelligence without manually searching media (BS001).

**The problem.** Manual media monitoring is slow, inconsistent and hard to hand over. Results must reach only authorised users connected to the affected entity.

**Scope the test workbook shows (11 business scenarios):**
- Automated scanning and audit-planning intelligence.
- Centralised media register management.
- Fraud and corruption allegation detection; relationship mapping and link analysis.
- Real-time alerts and early warnings.
- Fraud risk reporting and red-flag identification.
- Geographic risk heat-mapping; dashboards for stakeholders.
- Governance and approval of outputs; AGSA-only control of the solution.
- Compliance with ICT and legal constraints.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project.

**Design and quality decisions visible in the workbook.** Each scenario is traced to a business requirement and an MVP flag, with expected and actual results, pass/fail and comments. Alerts are restricted to users linked to the affected entity. [CONFIRM which decisions and test choices were yours.]

**Outcome.** [CONFIRM OUTCOME: pass rate, defects resolved, sign-off. The workbook records test cases; it does not show the final result.]

---

## 4. Industrial safety statistics workbook (listed energy and chemicals group)

- **Anonymised client:** listed energy and chemicals group.
- **Source:** statistics workbook with injury-score, role, organisation and regional sheets.
- **Project in one line:** the scoring and reporting rules behind a safety-statistics spreadsheet, with defined roles for each reporting level.

**Context and stakes.** Safety performance is reported as rates. Those rates depend on injury-severity scores, which must be applied consistently across regions.

**The problem.** Severity scores were built into formulas on a spreadsheet, and the rules were only partly documented. Analysts needed one reference for scores, roles and regional breakdowns.

**What the workbook contains:**
- Severity scores by injury type (fatal, lost-day, restricted-work, medical-treatment, first-aid), with a separate severity-index scheme for hospitalised lost-day cases.
- User roles and responsibilities; organisational structure; regional breakdown.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project. [CONFIRM SCOPE: the source document is a specification or workbook with no UI deliverable. Confirm the UX/UI and frontend work you owned here.]

**Decisions.** Keep the scoring rules explicit so they can be checked against the formulas. [CONFIRM.]

**Outcome.** [CONFIRM OUTCOME. Do not publish safety figures from the workbook.]

---

## 5. Column, bar, Pareto and heat-map chart components (global pharmaceutical company)

- **Anonymised client:** global pharmaceutical company (the CV says "Takeda" in the library label; the label has been anonymised, but the file name `takeda.jpg` still shows it).
- **Source:** Column/Bar chart specification (DAD-1346), Pareto/combo specification (DAD-1345), Highcharts data glossaries (column/bar, pareto, pie, mind map, network graph), heat-map use case.
- **Project in one line:** a set of configurable chart components built on the Highcharts library for a dashboarding framework, usable by business users without code.

**Context and stakes.** The client's design system already contained a basic bar/column component, but it could not be configured in the UI. Business users needed to build dashboards themselves.

**The problem.** A component that is not configurable through the interface forces every chart to go through a developer.

**Requirements the specification sets:**
- Add a "Bar/Column Chart" to the dashboarding framework as a configurable visual.
- Configuration screen: tile name, tile size, x-axis and y-axis data fields, and more.
- Reuse and complete the existing component rather than build a new one (the specification records that the reuse was approved).
- Consolidate the old and new versions into one component with a toggle between them.
- Pareto/combo chart: combine a bar and a line on one graphic.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project.

**Key decisions recorded.** Reuse the existing component; make configuration the default path; keep the old version only until the new one is assessed. [CONFIRM.]

**Outcome.** [CONFIRM OUTCOME: which components shipped, adoption by business users.]

---

## 6. Timeline view for product operations (client not stated)

- **Client:** [CONFIRM: not stated in the document]
- **Source:** Timeline View requirements (31 numbered requirements, 16 October).
- **Project in one line:** a configurable, scrollable timeline view that shows entities and their flows across time, with quick filters, search, sorting and a legend.

**Context and stakes.** Users need to see many entities across time in one place, and configure what they see.

**The problem.** The requirements record a hard constraint: the number of entities per page cannot exceed three, because the column sizing is not dynamic. The ideal is five to ten (REQ #4 and limitation #1).

**Requirements (examples from the spec):**
- Configure the view by product name; configure tabs and their names.
- Scroll up/down through entities; scroll left to right with time on the x-axis.
- Configure the number of entities per page and the number of flows per entity.
- Quick filters, a shared filter component, wild-card entity search, configurable sorting.
- Show when the data was last refreshed; collapse and open the legend.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project.

**Decision the document makes visible.** Document the layout limit openly rather than hide it. [CONFIRM whether the limit has since been fixed.]

**Outcome.** [CONFIRM OUTCOME.]

---

## 7. EntreHive: points-based entrepreneur app (team pitch)

- **Client:** none. Team project for a competition. [CONFIRM the event name and date.]
- **Source:** OURAGAN team pitch document (4 pages).
- **Project in one line:** an Android app for entrepreneurs in which they earn points by attending skills events and spend points on goods and services, with QR-code transactions.

**Context and stakes.** The app aims to reward skills development by treating points as currency: they can only be earned by attending events where knowledge or skills are gained.

**The problem.** Entrepreneurs need a reason to attend learning events, and the points system has to be simple to use.

**Design choices stated in the pitch.** Points are the only currency; earning is tied to attendance; QR codes process every transaction.

**Role and boundaries.** Devsigner: full ownership of UX/UI design and frontend development for this project.

**Outcome.** [CONFIRM OUTCOME: competition result, if applicable. The honours entry on the site mentions a hackathon win; check that the event matches.]

---

## Before any draft goes live

- [x] Role applied to all projects: Devsigner, full ownership of UX/UI design and frontend.
- [ ] Confirm the UI scope for the Eskom and Sasol projects (no UI in the source documents).
- [ ] Confirm decisions for each project.
- [ ] Confirm outcomes, or remove the outcome section.
- [ ] Check each anonymised draft against the NDA for that client.
- [ ] Remove the source documents from public `main`.
- [ ] Decide the Eskom and Old Mutual naming: the CV and About text still name Eskom, and the CV line for Old Mutual was anonymised earlier.
