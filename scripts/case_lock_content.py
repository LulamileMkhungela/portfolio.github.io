"""Summary content shown on the locked (NDA) case studies.

Structure
---------
Follows the four-part case-study structure in Superhive's "UX Design
portfolio: Projects, structure, and what recruiters want to see"
(https://www.superhive.co/ux-design-portfolio-projects-structure-recruiters-want),
already recorded in docs/research-case-study-structure.md:

  1. Context and stakes      - the product, the users, why it mattered, and
                               what happened if nothing changed.
  2. Role and boundaries     - what the owner was in charge of, what others
                               did, seniority and team setup, timeline.
  3. Key decisions and
     trade-offs              - the call, why that path, and the trade-off
                               accepted. Only trade-offs actually on record
                               are shown; none are invented.
  4. Outcome and evidence    - the article's rule for missing metrics applies
                               here: "say what you could measure and what
                               directional signals you observed". No figure is
                               claimed for any of these six.

A fifth block, the delivery process, sits between 3 and 4 at the owner's
request, with its depth scaled to experience at the time.

The article also answers the NDA question directly: include the project, but
sanitise the sensitive detail and keep the focus on process, decisions and
constraints. That is what these pages do - the full write-up stays encrypted.

Why this file exists
--------------------
A sealed study used to show only the *names* of its four parts ("Problem
statement", "What I did", "Solution", "Process") with nothing under them, so a
visitor who could not unlock the page learned nothing about the work. This
module supplies a real, readable summary for each part while the full write-up
stays encrypted in the page.

Grounding rules — nothing here is invented
------------------------------------------
Every line below is traceable to something already in this repository:

* ``role``            — the engagement title recorded for that account, so
                        every surface on the site states the same role.
* ``problem``         — the ``lead`` and ``problems`` entries for the same page
                        in ``scripts/case_data_documents.py``.
* ``did``             — the recorded responsibilities for that engagement,
                        plus the per-page ``role`` note in
                        ``scripts/case_data_documents.py``. Written in the
                        first person and in the tense that matches whether the
                        engagement is still running, and phrased so the team
                        around the work stays visible.
* ``scope``           — who else was involved and where the owner's
                        responsibility ended, from the page's ``role`` entry in
                        ``case_data_documents.py``. Shown so the page never
                        reads as one person having done all of it alone.
* ``solution``        — the ``decisions`` entries for that page in
                        ``case_data_documents.py``.
* ``process``         — the delivery steps, each annotated only with an
                        artefact that is actually recorded for that engagement
                        (an acceptance workbook, Storybook registration,
                        stakeholder workshops, and so on).

Outcomes are deliberately absent: ``case_data_documents.py`` marks every one of
these six as "not yet evidenced", so no result is claimed on a public page.

Used by ``scripts/lock_case_studies.py``, which merges this into ``LOCKED``.
Do not import it on its own.
"""

# Ordered master list of delivery stages. A study renders only the stages it
# defines, which is how process DEPTH scales with seniority at the time: the
# earliest engagement here (2023) runs a lean four-stage process, the 2025-26
# work adds a definition stage, and the current 2026 engagements carry a
# sixth, governance stage.
#
# The scaling is expressed through the depth of the process only. Never state
# a number of years of experience in rendered copy: the owner's instruction is
# that no case study mentions it. Timelines carry dates and team setup only.
PROCESS_STEPS = ("Discovery", "Definition", "Design", "Build", "Implementation", "Governance")

LOCK_CONTENT = {
    # ------------------------------------------------------------------ Eskom
    "doc-coal-stockpile-forecasting.html": {
        "timeline": "Aug 2026 \u2014 present \u00b7 design and UI development inside a team with data engineering and data science",
        "role": "UI Developer & UX/UI Designer (React, data visualisation)",
        "problem": (
            "Coal stock across several power stations was planned with one static formula \u2014 closing "
            "stock equals opening stock plus supply minus burn. It ignored weather, inter-station "
            "dynamics and coal-price movements, and it treated every station as if it stood alone. That "
            "left planners with no safe middle: order too little and a station runs down its stockpile, "
            "order too much and the utility carries excess inventory or pays for urgent procurement."
        ),
        "did": [
            "I design the UX/UI and build the React UI for the planning tool, working in a team "
            "alongside data engineering and data science. The dashboard and data-visualisation layer "
            "turns multi-source model output (coal supply, burn, quality, weather and plant telemetry "
            "across several stations) into interactive charts and drill-down reports a non-technical "
            "decision-maker can read.",
            "I design and build the interactive scenario-planning (\u201cwhat-if\u201d) tool, so managers can "
            "vary input assumptions and see the forecast stock impact. It runs against prediction and "
            "risk-assessment endpoints the data science team provides.",
            "I work with data engineering and data science to turn role-based access, customisable "
            "stock-level widgets and audit-ready reporting into an interface non-specialists can use.",
        ],
        "scope": (
            "The machine-learning model and the data pipeline belong to the data science and data "
            "engineering teams, not to me."
        ),
        "solution": [
            ("Per-station forecasts replace the single formula",
             "The forecast accounts for how one station's stock depends on the others."),
            ("Every view filters by time, data source and station",
             "Planners compare stations without rebuilding a view."),
            ("Early-warning indicators, not just forecast numbers",
             "The interface surfaces supply-chain risk early instead of reporting it late."),
            ("Data access restricted by role",
             "People see the data their responsibilities cover."),
        ],
        "process": {
            "Discovery": "Reading the existing planning model with data engineering and data science.",
            "Definition": "Turning role-based access, stock-level widgets and audit-ready reporting into requirements.",
            "Design": "Dashboard, drill-down reports and the what-if scenario tool.",
            "Build": "React UI against the team's prediction and risk-assessment endpoints.",
            "Implementation": "In active delivery \u2014 this engagement is ongoing.",
            "Governance": "Keeping the interface usable for non-specialists as the model's outputs "
                          "change, and the access rules matched to each role.",
        },
        "outcome": "No result is claimed: the engagement is still running and nothing is measured yet. What would settle it: forecast accuracy against actual closing stock per station, the count of stockouts and urgent-procurement events before and after, and how often planners open the what-if tool before placing an order.",
    },
    # ------------------------------------------------------------------- AGSA
    "doc-media-scanning-audit.html": {
        "timeline": "May 2026 \u2014 present \u00b7 design and UI development on an internal platform that also publishes to a public surface, inside a module-federation shell of six independently deployed micro-frontends",
        "role": "UI Developer & UX/UI Designer (React, AWS)",
        "problem": (
            "At the start of every audit planning cycle, auditors had to search the media by hand. "
            "Environmental, reputational and fraud-risk intelligence sat scattered across sources, which "
            "made it hard to collect and compare per auditee \u2014 and anything found about an auditee has "
            "to reach only the people linked to that auditee, never a broader list. The platform runs inside the institution; one of its surfaces publishes to the public."
        ),
        "did": [
            "I lead the design and UI development for the Media Risk Register that the audit teams work in \u2014 "
            "the register, the alerts and the dashboards \u2014 and the notifications rebuild across 13 REST "
            "endpoints and a tabbed alert centre.",
            "I build the platform's public-facing surface, which brings together news, corruption data, audit "
            "findings and statistical reporting, including a Leaflet choropleth province risk heatmap, "
            "on React 19. It sits in a module-federation shell of six independently deployed "
            "micro-frontends that I shipped into production.",
            "I design the interactive data visualisations \u2014 trend graphs, statistical charts and "
            "comparative dashboards \u2014 through Figma prototyping and stakeholder review, and hold "
            "WCAG 2.2 AA across the public-facing surfaces.",
            "I traced and fixed a data-integrity bug where optimistic approve/reject updates were "
            "silently overwritten by auto-refresh cycles, which restored reliable audit-trail ordering "
            "for the audit teams.",
        ],
        "scope": (
            "Testing is measured against the institution's own acceptance workbook and its 11 business "
            "scenarios. The client owns that workbook; I work to it."
        ),
        "solution": [
            ("Alerts limited to users linked to the affected auditee",
             "Information reaches only the people who need it \u2014 a design choice and a security choice."),
            ("The register is the single review point",
             "Newly captured articles are reviewed in one place instead of across separate tools."),
            ("Every scenario traced to a requirement and an MVP flag",
             "Each test records expected result, actual result, pass or fail and comments, so a failure "
             "stays visible until it is resolved."),
        ],
        "process": {
            "Discovery": "Mapping how auditors gathered media risk before the tool existed.",
            "Definition": "Keyword rules the institution sets, and who may receive each alert.",
            "Design": "Register, alert centre and dashboards prototyped in Figma for stakeholder review.",
            "Build": "React 19 micro-frontend, 13 notification endpoints, province risk heatmap.",
            "Implementation": "Testing against the 11 business scenarios in the client's acceptance "
                              "workbook \u2014 this engagement is ongoing.",
            "Governance": "Holding WCAG 2.2 AA on each public-facing surface as it goes to production, "
                          "and keeping the audit trail ordering reliable for the teams that depend on it.",
        },
        "outcome": "No result is claimed. The acceptance workbook records test cases and expected results, not final pass rates. What would settle it: the pass rate across the 11 scenarios, defects closed before sign-off, the time auditors spend assembling media risk per planning cycle, and confirmation that alerts reached only linked users.",
    },
    # ------------------------------------------------------------- Old Mutual
    "doc-compliance-ai-platform.html": {
        "timeline": "May 2026 \u2014 Jun 2026 \u00b7 design and UI development, alongside the platform team that owns agent orchestration, retrieval and verification",
        "role": "UI Developer & Product Designer (React, AWS)",
        "problem": (
            "Compliance work meant manual search across thousands of governance documents. Analysts, "
            "risk managers and auditors cannot act on an AI answer they are unable to check against its "
            "source, and anything built had to sit inside the group's security and governance "
            "requirements \u2014 including which knowledge base a given person may query and which documents "
            "they may upload."
        ),
        "did": [
            "I designed and built the UI for an enterprise retrieval-augmented platform that ingests and "
            "analyses governance documents in PDF, image and video form \u2014 the document upload and "
            "dashboard interfaces, from Figma information architecture through to production React and "
            "TypeScript.",
            "I designed six regulatory compliance dashboards, wireframed and validated in Figma against "
            "review by the compliance stakeholders, mapped to FSCA/FAIS, SARB, FICA, POPIA and "
            "Insurance Act requirements.",
            "I architected the AI findings pipeline, so structured findings "
            "persist to a database and surface dynamically at query time, and integrated the React "
            "UI across AWS S3, API Gateway, Step Functions and a Neo4j graph layer.",
            "I took the build through integration and QA testing with the QA team, inside a regulated "
            "compliance environment.",
        ],
        "scope": (
            "Agent orchestration, retrieval and the verification services themselves belong to the "
            "platform team."
        ),
        "solution": [
            ("Every answer carries its citations",
             "An analyst verifies the response against its source instead of trusting it."),
            ("Verify before showing, never an unverified draft",
             "The interface holds a loading state while checks run."),
            ("The active role is visible at all times",
             "Role decides which knowledge base is queried and which documents can be uploaded, so the "
             "interface never leaves it ambiguous."),
            ("Adapt an established multi-agent framework",
             "Adapted to the client's environment rather than built from scratch."),
        ],
        "process": {
            "Discovery": "Framed what analysts, risk managers and auditors must be able to verify.",
            "Definition": "Role-based access rules and the regulatory scope of each dashboard, set "
                          "with the compliance stakeholders.",
            "Design": "Figma information architecture and six dashboards validated with compliance stakeholders.",
            "Build": "React and TypeScript with the platform engineers, over S3, API Gateway, Step "
                     "Functions and Neo4j.",
            "Implementation": "Integration and QA testing with the QA team, inside a regulated "
                              "environment.",
        },
        "outcome": "No result is claimed: rollout status and answer quality are not on record, and production-grade authentication was still a release condition. What would settle it: how often analysts open a citation before acting, time to find a governing clause against manual search, and the share of answers that pass verification first time.",
    },
    # ------------------------------------------------------------------ Sasol
    "doc-safety-statistics-workbook.html": {
        "timeline": "Mar 2023 \u2014 Aug 2023 \u00b7 with stakeholders from five-plus departments",
        "role": "UI/UX Designer & Angular Developer",
        "problem": (
            "Safety performance is reported as rates, and those rates depend on injury-severity scores "
            "that had been buried inside spreadsheet formulas with the rules only partly written down. "
            "Analysts across regions had no single shared reference, and the ownership of each step in "
            "the process was not visible next to the numbers it produced."
        ),
        "did": [
            "I designed the replacement for a fragmented, Excel-based safety process \u2014 a live Angular "
            "platform adopted across five-plus departments. The three-tier reporting hierarchy and the "
            "NISS severity logic came out of workshops I ran with stakeholders from those departments.",
            "I delivered the design process, the design system and the design itself, plus the Angular "
            "UI with RxJS and RESTful API integration \u2014 removing the manual consolidation "
            "step and giving leadership real-time visibility.",
            "I was responsible for how the scoring rules, the roles and the regional structure are "
            "presented, and for the UI that reads from them.",
            "I tested each release against NISS severity edge cases before rollout, and set UX governance "
            "standards the team carried into later Sasol digital safety tools.",
        ],
        "scope": "The reporting formulas themselves belong to the reporting team.",
        "solution": [
            ("The scoring rules are stated explicitly",
             "Fatal, lost-day, restricted-work, medical-treatment and first-aid cases each carry a "
             "stated score, with a separate severity scheme for hospitalised lost-day cases. Each score "
             "is a fixed value, so an analyst can check formula output against the table."),
            ("Roles are documented alongside the numbers",
             "Analysts can see who owns each step without leaving the reference."),
        ],
        # 2023, roughly six years in: a lean four-stage process, run hands-on.
        "process": {
            "Discovery": "Workshops with stakeholders across the departments, to surface rules that "
                         "existed only inside spreadsheet formulas.",
            "Design": "The scoring reference, the three-tier hierarchy and the design system behind them.",
            "Build": "Angular UI with RxJS and RESTful API integration.",
            "Implementation": "Each release tested against NISS severity edge cases before rollout.",
        },
        "outcome": "No safety figures are shown on this page, by choice. What would settle it: how many regions compute severity from the shared reference instead of their own spreadsheet, and the number of scoring disputes raised per reporting cycle.",
    },
    # ----------------------------------------------------- Takeda (charts)
    "doc-chart-components.html": {
        "timeline": "Apr 2025 \u2014 Apr 2026 \u00b7 design and UI delivery, reviewed by stakeholders in the US, India and EMEA",
        "role": "UX/UI Design Specialist & UI Developer (Angular, data visualisation)",
        "problem": (
            "The client's design system shipped a basic bar and column component, but it could not be "
            "configured through the interface. Business users who build dashboards had to raise a "
            "request with developers for every change \u2014 and once a replacement existed, the old and new "
            "components both had to be managed through a controlled transition."
        ),
        "did": [
            "I was responsible for the component design, its configuration screen and the UI "
            "implementation, on a global pharmaceutical SaaS product reviewed by stakeholders across "
            "the US, India and EMEA \u2014 designing and building it myself rather than handing a spec to "
            "another developer.",
            "I shipped a Highcharts visualisation suite \u2014 heatmap, world map, timeline, Pareto and mind "
            "map \u2014 entirely settings-driven, and registered the components in Storybook so the wider "
            "engineering group could reuse them from Takeda's shared Common Component Library.",
            "I held WCAG 2.2 AA across the product surface I was responsible for.",
            "I ran UAT and defect triage directly with stakeholders across three time zones, closing the "
            "loop between design and QA.",
        ],
        "scope": (
            "The decision to reuse the existing component was approved by a named reviewer in the "
            "specification, not taken by me alone."
        ),
        "solution": [
            ("Reuse and complete the existing component",
             "The specification records that the reuse was approved."),
            ("Configuration becomes the default path",
             "A business user adds a bar or column chart from a simplified screen \u2014 tile name, tile "
             "size, and the x-axis and y-axis data fields."),
            ("Old and new consolidated behind one toggle",
             "The old component stays only until the new one has been assessed."),
            ("A Pareto combo chart joins the family",
             "A bar series and a line share one graphic, as a second component in the same family."),
        ],
        "process": {
            "Discovery": "Audited what the design system's existing bar and column component could not do.",
            "Definition": "Required settings agreed with the reviewer named in the specification: "
                          "tile name, tile size, x-axis and y-axis fields.",
            "Design": "Component and configuration screen designed for a non-developer.",
            "Build": "Angular and Highcharts, every component registered in Storybook.",
            "Implementation": "UAT and defect triage with stakeholders across three time zones.",
        },
        "outcome": "No result is claimed: which components shipped, and whether business users adopted the configuration screen, are not on record. What would settle it: dashboard charts configured without raising a developer ticket, and developer hours returned per sprint.",
    },
    # --------------------------------------------------- Takeda (timeline)
    "doc-timeline-view.html": {
        "timeline": "Apr 2025 \u2014 Apr 2026 \u00b7 design and UI delivery, reviewed by stakeholders in the US, India and EMEA",
        "role": "UX/UI Design Specialist & UI Developer (Angular, data visualisation)",
        "problem": (
            "Users need to see many entities across time in a single view, and one fixed layout does not "
            "fit every task \u2014 which entities, flows and filters appear has to be configurable. They also "
            "need to know how current the data is before they act on what the timeline shows."
        ),
        "did": [
            "I was responsible for the interaction design and the UI for the timeline, from the "
            "configuration controls through to the scrolling view itself.",
            "I built the timeline as one component in the settings-driven Highcharts suite, registered in "
            "Storybook alongside the rest of the team's work in the shared Common Component Library.",
            "I held WCAG 2.2 AA on a product reviewed by stakeholders across the US, India and EMEA.",
            "I ran UAT and defect triage directly with stakeholders across three time zones.",
        ],
        "scope": "",
        "solution": [
            ("Every view is configurable",
             "Users set the product, the tabs and their names, the number of entities per page and the "
             "number of flows per entity."),
            ("Quick filters built on one shared component",
             "Filters are built once and reused rather than rebuilt for each view."),
            ("A layout limit stated openly",
             "The specification states the limit rather than hiding it."),
            ("Data freshness made visible",
             "Users see when the data was last refreshed, and the legend collapses or opens."),
        ],
        "process": {
            "Discovery": "Established what users needed to compare across time in one view.",
            "Definition": "Configurable entities, flows, tabs and filters specified.",
            "Design": "Configuration controls and the scrolling timeline view.",
            "Build": "Angular and Highcharts, registered in Storybook.",
            "Implementation": "UAT and defect triage with stakeholders across three time zones.",
        },
        "outcome": "No result is claimed. What would settle it: whether the three-entity limit was lifted once column sizing became dynamic, how many views teams configure for themselves, and whether the freshness indicator reduced questions about stale data.",
    },
}


# Trade-off accepted for a given decision, keyed by (page, decision heading).
#
# Superhive's part 3 asks for the decision, the options considered and the
# trade-off accepted. Only trade-offs actually recorded in
# scripts/case_data_documents.py appear here - either in its `tradeoffs` list
# or in the "Alternative: ... Trade-off accepted: ..." text on the decision
# itself. Decisions with no recorded trade-off are rendered without one rather
# than given an invented downside.
TRADEOFFS = {
    ("doc-coal-stockpile-forecasting.html", "Per-station forecasts replace the single formula"):
        "The alternative was to keep the static formula and adjust it by hand. Accepted instead: a "
        "model that needs its data maintained and periodic retraining.",
    ("doc-media-scanning-audit.html", "Alerts limited to users linked to the affected auditee"):
        "Fewer people receive each alert, so a reviewer outside the link may miss one.",
    ("doc-media-scanning-audit.html", "The register is the single review point"):
        "One review point makes the register the bottleneck for every article.",
    ("doc-media-scanning-audit.html", "Every scenario traced to a requirement and an MVP flag"):
        "Eleven scenarios with expected and actual results take time to keep current.",
    ("doc-compliance-ai-platform.html", "Verify before showing, never an unverified draft"):
        "Answers take longer to appear.",
    ("doc-compliance-ai-platform.html", "Adapt an established multi-agent framework"):
        "The alternative was building from scratch. Accepted instead: the client's security and "
        "integration constraints shape the design.",
    ("doc-safety-statistics-workbook.html", "The scoring rules are stated explicitly"):
        "Fixed scores are easy to audit but do not adjust to context.",
    ("doc-safety-statistics-workbook.html", "Roles are documented alongside the numbers"):
        "Every figure needs its owner recorded, so the reference takes more upkeep.",
    ("doc-chart-components.html", "Reuse and complete the existing component"):
        "The alternative was a new component. Accepted instead: the existing one's gaps had to be "
        "closed before it was usable.",
    ("doc-timeline-view.html", "A layout limit stated openly"):
        "Three entities per page against an ideal of five to ten, because column sizing is not "
        "dynamic. Stating it keeps the trade-off visible to the team.",
}
