"""Case-study content for the seven document-based drafts and the Africa Cuisine frontend case.

Source for the seven drafts: docs/case-studies-from-documents.md (outcomes marked "not yet evidenced").
Source for Africa Cuisine: the live site (https://africa-cuisine-pro.vercel.app) plus the project brief
given by the owner. Items marked "to confirm" must be checked before the owner relies on them.

Used by scripts/build_case_studies.py. Do not import this on its own.
"""

DOC_ROLE = "Devsigner: full ownership of UX/UI design and frontend"
TO_CONFIRM = "To confirm"

NEW_CASES = [
    {
        "file": "doc-coal-stockpile-forecasting.html",
        "title": "Coal stockpile forecasting",
        "category": "Energy · Machine-learning decision support",
        "tagline": ["Planning coal stock", " with forecasts, not formulas."],
        "meta": [
            ("Client", "National power utility"),
            ("Role", DOC_ROLE),
            ("Industry", "Energy"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "A national power utility runs several power stations and must keep coal stock at optimal levels. "
            "Its planning model was a static formula, closing stock = opening stock + supply − burn, which ignores "
            "weather, inter-station dynamics and coal-price movements."
        ),
        "problems": [
            ("A static formula",
             "Closing stock was calculated as opening stock plus supply minus burn. It ignored weather, "
             "inter-station dynamics and coal-price movements."),
            ("Planners had no safe middle",
             "Planners either ordered too little and faced stockouts, or ordered too much and carried excess "
             "inventory or triggered urgent procurement."),
            ("Stations were planned in isolation",
             "The forecast did not account for how one power station's stock depends on the others."),
        ],
        "role": (
            "I owned the UX/UI design and frontend for the planning tool. The machine-learning model and data "
            "pipeline sit outside my scope. UI scope to confirm: the source documents are specifications with no "
            "UI deliverable."
        ),
        "decisions": [
            ("Replace one formula with per-station forecasts",
             "The forecasts account for inter-station dependency. Alternative: keep the static formula and adjust "
             "it by hand. Trade-off accepted: a model that needs maintained data and retraining."),
            ("Filter every view by time, data source and station",
             "Planners compare stations without rebuilding views. The requirements call for these filters."),
            ("Surface early-warning indicators, not just forecasts",
             "The documents aim at identifying supply-chain disruptions early, so the interface highlights risk."),
            ("Restrict data access by role",
             "Access is limited to authorised personnel based on their responsibilities."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "Forecast accuracy, planner adoption and any reduction in stockouts or urgent-procurement events are "
             "not in the source documents. Add them only with a source."),
        ],
        "what_changed": (
            "The planning tool moves from a single static formula to per-station forecasts, with filters and "
            "early-warning indicators designed into the interface. The documents specify this; results are not yet "
            "evidenced."
        ),
        "figures": [],
    },
    {
        "file": "doc-compliance-ai-platform.html",
        "title": "Compliance AI assistant",
        "category": "Financial services · AI assistant with cited answers",
        "tagline": ["An AI answer you can", " check against its source."],
        "meta": [
            ("Client", "Financial services group"),
            ("Role", DOC_ROLE),
            ("Industry", "Financial services"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Phase 1 extends an existing compliance agent into a multi-agent system for the client's compliance "
            "function. Analysts, risk managers and auditors need answers they can check against sources, inside the "
            "client's security and governance requirements."
        ),
        "problems": [
            ("Answers that cannot be checked",
             "Analysts, risk managers and auditors need to verify an answer against its source before relying on it."),
            ("Security and governance limits",
             "The system must work inside the client's security and governance requirements."),
            ("Who can see what",
             "The knowledge base queried and the documents a user can upload depend on their role."),
        ],
        "role": (
            "I owned the chat interface and the frontend that presents agent answers. Agent orchestration, retrieval "
            "and verification services belong to the platform team."
        ),
        "decisions": [
            ("Show citations with every answer",
             "Analysts can verify a response rather than trust it."),
            ("Verify before showing",
             "The interface shows a loading state while checks run, never an unverified draft. Trade-off accepted: "
             "answers take longer to appear."),
            ("Make the active role visible",
             "Role decides which knowledge base is queried and which documents can be uploaded, so the interface "
             "shows the active role at all times."),
            ("Adapt an established multi-agent framework",
             "The framework is adapted to the client's environment rather than built from scratch. Trade-off "
             "accepted: the client's security and integration constraints shape the design."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "Rollout status, user adoption and any measured answer quality are not in the source documents. "
             "Production-grade authentication is a release condition in the documents."),
        ],
        "what_changed": (
            "The assistant presents cited, verified answers and shows the active role. The documents specify this; "
            "delivery status is not yet evidenced."
        ),
        "figures": [],
    },
    {
        "file": "doc-media-scanning-audit.html",
        "title": "Media scanning for audit planning",
        "category": "Public sector · Media intelligence for audit",
        "tagline": ["Media risk signals, ready", " before planning starts."],
        "meta": [
            ("Client", "National audit institution"),
            ("Role", DOC_ROLE),
            ("Industry", "Public sector"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "At the start of each audit planning cycle, auditors need environmental, reputational and fraud-risk "
            "intelligence without searching the media by hand. The tool scans for keywords the institution defines, "
            "compiles a media register for each auditee, and alerts the people linked to that auditee."
        ),
        "problems": [
            ("Manual media searching",
             "Auditors had to search the media by hand at the start of each planning cycle."),
            ("Risk signals scattered",
             "Environmental, reputational and fraud-risk intelligence was hard to collect and compare per auditee."),
            ("Alerts must reach the right people only",
             "Information about an auditee has to reach only the people linked to that auditee."),
        ],
        "role": (
            "I owned the interface across the register, alerts and dashboards, and the frontend build. The test "
            "workbook is the institution's acceptance record, so its 11 business scenarios define what I was "
            "accountable for in testing."
        ),
        "decisions": [
            ("Limit alerts to users linked to the affected auditee",
             "Information reaches only the people who need it. This is both a design and a security choice."),
            ("Trace every scenario to a requirement and an MVP flag",
             "Each test shows the expected result, the actual result, pass or fail, and comments, so a failure stays "
             "visible until resolved."),
            ("Make the register the single review point",
             "Newly captured articles are reviewed in one place rather than in separate tools."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "The workbook records test cases and expected results, not final pass rates. Pass rate, defects closed "
             "and sign-off status are not in the source documents."),
        ],
        "what_changed": (
            "Auditors review newly captured articles in one register, and alerts reach only the people linked to each "
            "auditee. Results are not yet evidenced."
        ),
        "figures": [],
    },
    {
        "file": "doc-safety-statistics-workbook.html",
        "title": "Safety statistics reference",
        "category": "Energy and chemicals · Safety-reporting reference",
        "tagline": ["One set of rules for", " every region's numbers."],
        "meta": [
            ("Client", "Listed energy and chemicals group"),
            ("Role", DOC_ROLE),
            ("Industry", "Energy and chemicals"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Safety performance is reported as rates. Those rates depend on injury-severity scores, which had been built "
            "into spreadsheet formulas, with the rules only partly documented. Analysts across regions needed one "
            "shared reference."
        ),
        "problems": [
            ("Rules locked in formulas",
             "The severity scores lived in spreadsheet formulas, and the rules were only partly documented."),
            ("Analysts needed one reference",
             "Analysts across regions needed one shared source for the scoring rules."),
            ("Ownership unclear",
             "The roles and responsibilities for each step were not visible alongside the numbers."),
        ],
        "role": (
            "I owned the presentation of the scoring rules, roles and regional structure, and any frontend that reads "
            "from them. The reporting formulas belong to the reporting team. UI scope to confirm: the source is a "
            "workbook with no UI deliverable."
        ),
        "decisions": [
            ("Keep the scoring rules explicit",
             "Fatal, lost-day, restricted-work, medical-treatment and first-aid cases each carry a stated score. A "
             "separate severity scheme applies only to hospitalised lost-day cases. Each score is a fixed value, so "
             "analysts can check formula output against the table."),
            ("Document roles alongside the numbers",
             "Analysts can see who owns each step."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "This page shows no safety figures. Do not publish figures from the workbook."),
        ],
        "what_changed": (
            "The scoring rules are written out as fixed values, with roles beside them. The source contains no results, "
            "so none are shown."
        ),
        "figures": [],
    },
    {
        "file": "doc-chart-components.html",
        "title": "Configurable chart components",
        "category": "Pharmaceutical · Dashboard visualisation components",
        "tagline": ["Charts business users can", " set up themselves."],
        "meta": [
            ("Client", "Global pharmaceutical company"),
            ("Role", DOC_ROLE),
            ("Industry", "Pharmaceutical"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "The client's design system had a basic bar and column component, but it could not be configured through "
            "the interface. Business users who build dashboards had to ask developers for each change."
        ),
        "problems": [
            ("Every chart change needed a developer",
             "Business users who build dashboards had to ask developers for each change."),
            ("The existing component was not configurable",
             "The design system's bar and column component could not be configured through the interface."),
            ("Two versions to manage",
             "The old and new components needed a controlled transition."),
        ],
        "role": (
            "I owned the component design, its configuration screen and the frontend implementation. Approval for the "
            "reuse decision came from a named reviewer in the specification."
        ),
        "decisions": [
            ("Reuse and complete the existing component",
             "The specification records that the reuse was approved. Trade-off accepted: the existing component's gaps "
             "must be closed before it is usable."),
            ("Make configuration the default path",
             "Business users add a bar or column chart from a simplified screen. Required settings include tile name, "
             "tile size, and the x-axis and y-axis data fields."),
            ("Consolidate old and new behind one toggle",
             "The old component stays only until the new one is assessed."),
            ("Add a Pareto combo chart",
             "A bar series and a line share one graphic, as a second component in the same family."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "Which components shipped and whether business users adopted the configuration screen are not in the "
             "source documents."),
        ],
        "what_changed": (
            "Business users can add a bar or column chart from a simplified configuration screen, and a Pareto combo "
            "chart joins the same family. Shipping and adoption are not yet evidenced."
        ),
        "figures": [],
    },
    {
        "file": "doc-timeline-view.html",
        "title": "Configurable timeline view",
        "category": "Enterprise · Product operations timeline",
        "tagline": ["Many entities across time,", " in one configurable view."],
        "meta": [
            ("Client", "To confirm (not stated in the source document)"),
            ("Role", DOC_ROLE),
            ("Industry", "Product operations"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Users need to see many entities across time in one view, and to configure which entities, flows and "
            "filters appear."
        ),
        "problems": [
            ("Many entities, one view",
             "Users need to see many entities across time in one view."),
            ("One fixed view does not fit every task",
             "Users need to configure which entities, flows and filters appear."),
            ("Data freshness unclear",
             "Users need to know when the data was last refreshed."),
        ],
        "role": (
            "I owned the interaction design and frontend for the timeline, from the configuration controls through to "
            "the scrolling view."
        ),
        "decisions": [
            ("Make every view configurable",
             "Users set the product, the tabs and their names, the number of entities per page, and the number of flows "
             "per entity."),
            ("Use quick filters and one shared filter component",
             "Filters are built once and reused, rather than rebuilt per view."),
            ("State a layout limit openly",
             "The specification states that entities per page cannot exceed three, because column sizing is not "
             "dynamic. The ideal is five to ten. Stating the constraint keeps the trade-off visible to the team."),
            ("Make data freshness visible",
             "Users see when the data was last refreshed, and the legend can be collapsed or opened."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "Whether the three-entity limit was later removed, and any usage result, are not in the source documents."),
        ],
        "what_changed": (
            "Every view is configurable, with shared filters and visible data freshness. The three-entity layout limit "
            "is stated openly in the specification."
        ),
        "figures": [],
    },
    {
        "file": "doc-entrehive.html",
        "title": "EntreHive",
        "category": "Mobile · Points-based app for entrepreneurs",
        "tagline": ["Points earned by learning,", " spent on real goods."],
        "meta": [
            ("Client", "Team project for a competition (to confirm)"),
            ("Role", DOC_ROLE),
            ("Industry", "Entrepreneurship and skills"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Entrepreneurs need reasons to attend skills and knowledge events. EntreHive makes points the currency: they "
            "are earned only by attending events where skills are gained, and spent on goods and services."
        ),
        "problems": [
            ("No reason to attend learning events",
             "Entrepreneurs need a reason to attend skills and knowledge events."),
            ("Rewards must mean something",
             "Points should be earned only from learning, and spent only on goods and services."),
        ],
        "role": (
            "I owned the user interface and its frontend. The rest of the team owned the points rules and business model "
            "(to confirm)."
        ),
        "decisions": [
            ("Earn points only through learning events",
             "Trade-off accepted: spending is limited to what people can buy with points, which makes the app a closed loop."),
            ("Process every transaction with a QR code",
             "Scanning keeps transactions quick and avoids manual entry."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "The competition result is not confirmed in the source document."),
        ],
        "what_changed": (
            "A points-based app design that rewards learning, with QR-code transactions. Not yet evidenced beyond the pitch."
        ),
        "figures": [],
    },
    {
        "file": "africa-cuisine-pwa.html",
        "title": "Africa Cuisine",
        "category": "Small business · Restaurant website and PWA",
        "tagline": ["A restaurant menu that", " takes the order."],
        "meta": [
            ("Client", "Africa Cuisine & Restaurant, Braamfontein"),
            ("Role", "Devsigner, freelance: UX/UI and frontend (to confirm)"),
            ("Industry", "Food and hospitality"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "A Johannesburg restaurant needed a website and a progressive web app (PWA) that show its menu, take online "
            "orders, and tell customers where it is and when it is open. The live site does all three in one place."
        ),
        "problems": [
            ("Customers need the menu fast",
             "Customers want the menu, prices and bestsellers without searching."),
            ("Ordering should start from the menu",
             "Online ordering should be one step away from browsing, not a phone call."),
            ("Practical details must be easy to find",
             "Opening hours, the address and the daily special change, and customers need them on the first screen."),
        ],
        "role": (
            "I designed and built the website and PWA (scope to confirm). Confirm the client brief, dates and the "
            "process below before this page is published."
        ),
        "decisions": [
            ("Lead with the menu",
             "The home page opens on the flame-grilled menu, a daily special and bestsellers, so the first screen answers "
             "what to order."),
            ("Keep ordering one tap from the menu",
             "Each item has an Add action in the menu and in the bestseller cards, so a customer can order without "
             "leaving the browsing path."),
            ("Show hours and location on the home page",
             "Opening hours for all seven days and the Braamfontein address sit on the home page, where a visitor "
             "deciding whether to come looks first."),
            ("Give the daily special its own card",
             "The breakfast special has a dedicated card with its time window, so a time-limited offer is not lost in "
             "the menu."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "No visit, order or revenue figures are shown. Add them only with a source from the business."),
        ],
        "links": [("View the live site", "https://africa-cuisine-pro.vercel.app")],
        "what_changed": (
            "One restaurant website and PWA with the menu, daily special, hours and online ordering together. Results "
            "are not yet evidenced."
        ),
        "figures": [],
    },
]
