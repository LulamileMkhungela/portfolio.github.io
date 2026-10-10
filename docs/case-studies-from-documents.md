# Case studies from project documents

Devsigner case studies (full ownership of UX/UI design and frontend) for the seven projects that have source documents. Client names are anonymised by sector. Each case study uses only what its source documents state. Outcomes are marked **Not yet evidenced** where the documents do not show them; add them only with a source.

**Not for publication until:** (1) the source documents are removed from public `main`, and (2) each case study is checked against the relevant NDA.

---

## 1. Coal stockpile forecasting for a national power utility

**Client:** national power utility · **Type:** machine-learning decision support · **Role:** Devsigner, full ownership of UX/UI design and frontend *(UI scope to confirm: the source documents are specifications with no UI deliverable)*

**Context and stakes.** The utility runs several power stations and must keep coal stock at optimal levels. Its current model is a static formula: closing stock = opening stock + supply − burn. That formula ignores weather, inter-station dynamics and coal-price movements. Planners either order too little and face stockouts, or order too much and carry excess inventory or trigger urgent procurement.

**My role and boundaries.** I owned the UX/UI design and frontend for the planning tool. The machine-learning model and data pipeline sit outside my scope.

**Key decisions (as recorded in the requirements).**
- **Replace a single formula with per-station forecasts that account for inter-station dependency.** Alternative: keep the static formula and adjust it manually. Trade-off accepted: a model that needs maintained data and retraining.
- **Filter every view by time, data source and power station.** The requirements call for these filters so planners can compare stations without rebuilding views.
- **Surface early-warning indicators, not just forecasts.** The documents aim at identifying supply-chain disruptions early, which shapes what the interface must highlight.
- **Restrict data access by role.** Access is limited to authorised personnel based on their responsibilities.

**Outcome.** *Not yet evidenced in the source documents.* Add the forecast accuracy measure, planner adoption and any reduction in stockouts or urgent-procurement events only with a source.

---

## 2. Multi-agent compliance AI platform for a financial services group

**Client:** financial services group · **Type:** enterprise AI assistant with cited answers · **Role:** Devsigner, full ownership of UX/UI design and frontend

**Context and stakes.** Phase 1 extends an existing compliance agent into a multi-agent system for the client's compliance function. Analysts, risk managers and auditors need answers they can check against sources, inside the client's security and governance requirements.

**My role and boundaries.** I owned the chat interface and the frontend that presents agent answers. The agent orchestration, retrieval and verification services belong to the platform team.

**Key decisions (as recorded in the specification and frontend guide).**
- **Show citations with every answer.** Analysts can verify a response rather than trust it.
- **Keep a verification step before any answer is shown.** The frontend therefore has to handle a loading state while checks run, not display an unverified draft.
- **Make the user's role change what the chatbot can see.** Role decides which knowledge base is queried and which documents can be uploaded, so the interface must make the active role visible.
- **Adapt an established multi-agent framework to the client's environment** rather than build a new one. Trade-off accepted: the client's security and integration constraints shape the design.

**Delivery gate.** Production-grade authentication is a release condition. Remaining implementation tasks are tracked in the frontend guide.

**Outcome.** *Not yet evidenced in the source documents.* Add rollout status, user adoption and any measured answer quality only with a source.

---

## 3. Automated media scanning for audit planning

**Client:** national audit institution · **Type:** media intelligence and alerts for auditors · **Role:** Devsigner, full ownership of UX/UI design and frontend

**Context and stakes.** At the start of each audit planning cycle, auditors need environmental, reputational and fraud-risk intelligence without searching the media by hand. The tool scans for keywords the institution defines, compiles a media register for each auditee, and alerts the people linked to that auditee.

**My role and boundaries.** I owned the interface across the register, alerts and dashboards, and the frontend build. The test workbook is the institution's acceptance record, so the scope it covers is the scope I was accountable for in testing.

**Scope the test workbook covers (11 business scenarios).** Automated scanning for audit planning; a centralised media register; fraud and corruption allegation detection; relationship mapping; real-time alerts; fraud-risk reporting and red-flag identification; geographic risk heat-maps; stakeholder dashboards; governance and approval of outputs; secure, institution-only control of the solution; and compliance with ICT and legal constraints.

**Key decisions (as recorded in the test workbook).**
- **Limit alerts to users linked to the affected auditee.** Information reaches only the people who need it, which is a design and a security choice.
- **Trace every scenario to a business requirement and an MVP flag.** Each test shows expected result, actual result, pass or fail, and comments, so a failure stays visible until resolved.
- **Make the register the single place where newly captured articles are reviewed.** Authorised users act on articles there rather than in separate tools.

**Outcome.** *Not yet evidenced in the source documents.* The workbook records test cases and expected results, not final pass rates. Add the pass rate, defects closed and sign-off status only with a source.

---

## 4. Industrial safety statistics workbook for an energy and chemicals group

**Client:** listed energy and chemicals group · **Type:** safety-reporting reference · **Role:** Devsigner, full ownership of UX/UI design and frontend *(UI scope to confirm: the source document is a workbook with no UI deliverable)*

**Context and stakes.** Safety performance is reported as rates. Those rates depend on injury-severity scores, which had been built into formulas on a spreadsheet, with the rules only partly documented. Analysts across regions needed one shared reference.

**My role and boundaries.** I owned the presentation of the scoring rules, roles and regional structure, and any frontend that reads from them. The underlying reporting formulas belong to the reporting team.

**Key decisions (as recorded in the workbook).**
- **Keep the scoring rules explicit.** Fatal, lost-day, restricted-work, medical-treatment and first-aid cases each carry a stated score. A separate severity scheme applies only to hospitalised lost-day cases. Each score is a fixed value, not a range, so analysts can check formula output against the table.
- **Document roles and responsibilities alongside the numbers.** Analysts can see who owns each step.

**Outcome.** *Not yet evidenced in the source documents.* Do not publish safety figures from the workbook.

---

## 5. Configurable chart components for a global pharmaceutical company

**Client:** global pharmaceutical company · **Type:** dashboard visualisation components · **Role:** Devsigner, full ownership of UX/UI design and frontend

**Context and stakes.** The client's design system already had a basic bar and column component, but it could not be configured through the interface. Business users who build dashboards had to ask developers for each change.

**My role and boundaries.** I owned the component design, its configuration screen and the frontend implementation. Approval for the reuse decision came from a named reviewer in the specification.

**Key decisions (as recorded in the specifications).**
- **Reuse and complete the existing component instead of building a new one.** The specification records that the reuse was approved. Trade-off accepted: the existing component's gaps must be closed before it is usable.
- **Make configuration the default path.** Business users add a bar or column chart from a simplified configuration screen. Required settings include tile name, tile size, and the x-axis and y-axis data fields.
- **Consolidate the old and new versions behind one toggle.** The old component stays only until the new one is assessed.
- **Add a Pareto combo chart** that pairs a bar series with a line on one graphic, as a second component in the same family.

**Outcome.** *Not yet evidenced in the source documents.* Add which components shipped and whether business users adopted the configuration screen only with a source.

---

## 6. Configurable timeline view for product operations

**Client:** not stated in the source document · **Type:** product operations timeline · **Role:** Devsigner, full ownership of UX/UI design and frontend

**Context and stakes.** Users need to see many entities across time in one view, and to configure which entities, flows and filters appear.

**My role and boundaries.** I owned the interaction design and frontend for the timeline, from the configuration controls through to the scrolling view.

**Key decisions (as recorded in the 31-requirement specification).**
- **Make every view configurable.** Users set the product, the tabs and their names, the number of entities per page, and the number of flows per entity.
- **Use quick filters and a shared filter component.** Filters are built once and reused, rather than rebuilt per view.
- **Document a layout limit openly.** The specification states that the number of entities per page cannot exceed three, because column sizing is not dynamic. The ideal is five to ten. Stating the constraint in the requirements, rather than hiding it, keeps the trade-off visible to the team.
- **Make data freshness visible.** Users can see when the data was last refreshed, and the legend can be collapsed or opened.

**Outcome.** *Not yet evidenced in the source documents.* Record whether the three-entity limit was later removed, and add any usage result only with a source.

---

## 7. EntreHive: a points-based app for entrepreneurs

**Client:** none; team project for a competition · **Type:** Android app concept · **Role:** Devsigner, full ownership of UX/UI design and frontend *(team and event to confirm)*

**Context and stakes.** Entrepreneurs need reasons to attend skills and knowledge events. EntreHive makes points the currency: they are earned only by attending events where skills are gained, and spent on goods and services.

**My role and boundaries.** I owned the user interface and its frontend. The rest of the team owned the points rules and business model (to confirm).

**Key decisions (as stated in the pitch).**
- **Earn points only through learning events.** Trade-off accepted: spending is limited to what people can buy with points, which makes the app a closed loop.
- **Process every transaction with a QR code.** Scanning keeps transactions quick and avoids manual entry.

**Outcome.** *Not yet evidenced.* Add the competition result only if the event and result are confirmed (the honours section on the site mentions a hackathon win; check that it is this project).

---

## Before publishing

- [ ] Remove the source documents from public `main`, and from git history if the NDAs require it.
- [ ] Check each case study against its client's NDA.
- [ ] Confirm the UI scope for the Eskom and Sasol case studies.
- [ ] Add outcomes only where a source exists; otherwise delete the outcome line.
- [ ] Confirm the EntreHive team, event and outcome.
- [ ] Confirm the Timeline View client (or keep it unnamed).
