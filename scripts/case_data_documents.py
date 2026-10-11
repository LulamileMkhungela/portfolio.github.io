"""Case-study content for the seven document-based drafts and the Africa Cuisine frontend case.

Source for the seven drafts: the owner's source documents, which are not kept in the repository (outcomes marked "not yet evidenced").
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
        "tradeoffs": [
            ("Limit alerts to users linked to the affected auditee", "Fewer people receive each alert, so a reviewer outside the link may miss one. (Stated on the page: a design and a security choice.)"),
            ("Trace every scenario to a requirement and an MVP flag", "Eleven scenarios with expected and actual results take time to keep current. To confirm: who maintains the workbook."),
            ("Make the register the single review point", "One review point means the register is the bottleneck for every article. To confirm: how review load is shared."),
        ],
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
        "tradeoffs": [
            ("Keep the scoring rules explicit", "Fixed scores are easy to audit but do not adjust to context. (Stated in the checks: a fixed score table.)"),
            ("Document roles alongside the numbers", "Every figure needs its owner recorded, so the workbook takes more upkeep. To confirm: who keeps the owners current."),
        ],
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
            ("Client", "The Digital Academy · Android development team project"),
            ("Role", "Lead UI/UX Designer, Android development team"),
            ("Industry", "Entrepreneurship and skills"),
            ("Year", "2018 — 2019"),
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
            "I was the Lead UI/UX Designer on the Android development team and owned the user interface and its frontend. "
            "The team pitch (OURAGAN TEAM) sets out the points model and the QR-code transactions."
        ),
        "decisions": [
            ("Earn points only through learning events",
             "Trade-off accepted: spending is limited to what people can buy with points, which makes the app a closed loop."),
            ("Process every transaction with a QR code",
             "Scanning keeps transactions quick and avoids manual entry."),
        ],
        "outcomes": [
            ("Not yet evidenced",
             "The team pitch does not record an outcome. Add a result only with a source."),
        ],
        "what_changed": (
            "A points-based app design that rewards learning, with QR-code transactions. Not yet evidenced beyond the pitch."
        ),
        "links": [("Code repository", "https://github.com/LulamileMkhungela/EntreHiveApp")],
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
        "tradeoffs": [
            ("Lead with the menu", "Menu-first pushes the location and the story lower on the page. To confirm: how visitors found the address."),
            ("Keep ordering one tap from the menu", "The Add action appears in two places, so the same action is repeated. To confirm: whether the repetition caused confusion."),
            ("Show hours and location on the home page", "More information on the home page makes the first screen longer. To confirm: how the home page reads on a phone."),
            ("Give the daily special its own card", "A dedicated card adds a block to the home page, and the special has a time window. To confirm: how the card is updated."),
        ],
        "figures": [],
    },
    {
        "file": "toyota-mobility-brand.html",
        "title": "Toyota Mobility Brand",
        "category": "Brand · Design system · Connected apps",
        "tagline": ["One brand system,", " three mobility products."],
        "meta": [
            ("Client", "Toyota South Africa · via iOCO"),
            ("Role", "Senior UI/UX Designer on the brand programme, via iOCO"),
            ("Industry", "Automotive and mobility"),
            ("Year", "2023 — 2025"),
        ],
        "lead": (
            "Toyota South Africa was taking KINTO, the Toyota App and Toyota Remote to market at the same time, and each was "
            "drawing its own identity. I set the positioning, built the identity system and wrote the rules for using it, so the "
            "products could launch in the same voice. The Lexus app sits in the same connected-apps work."
        ),
        "problems": [
            ("Every product spoke its own language",
             "Three customer-facing expressions of one business, with different type, colour, tone and words for the same thing."),
            ("Positioning was a product list",
             "Each brand explained what the service did, not who it was for or why it mattered against the alternatives."),
        ],
        "role": (
            "I was the senior designer on the brand programme and I developed the frontend. I led the brand identity revamp, "
            "built the design system, and applied the changes across the designs and the frontend monorepos (Ionic/Angular)."
        ),
        "decisions": [
            ("1. Brand identity revamp",
             "Reviewed the identity across KINTO, the Toyota App and Toyota Remote, set the positioning, and rebuilt the identity system: logo lock-ups, colour, type and motion rules."),
            ("2. Align with the Toyota global brand team",
             "Aligned the identity and its rules with the Toyota global brand team and the design teams before they were used for launches."),
            ("3. Design system",
             "Built the design system from the identity: tokens for colour, type and spacing, and the components the products use. Documented how each component is used."),
            ("4. Adding missing components",
             "Compared the product screens with the system to find components that were missing, designed each one, reviewed it with the design teams, then added it with usage notes. The list of components added is to confirm."),
            ("5. Apply across designs and monorepos",
             "Updated the Figma designs and the frontend monorepos so the products use the same components and tokens. I developed the frontend, so the changes were made in code as well as in design."),
            ("6. Guidelines and rollout",
             "Agreed usage rules with marketing, product and retail, then enforced them by audit."),
            ("7. Universal brand and design system",
             "Built as one brand and one design system that KINTO, the Toyota App, Toyota Remote and AutoMark share, so other projects and teams can use the same universal brand. Adoption by each team is to confirm."),
        ],
        "checks": [
            "Each new component was reviewed with the design teams before it was added to the system, as the process above sets out.",
            "To confirm: the list of missing components added, the number of monorepos updated, which teams have adopted the system, and how the brand guide was updated after each launch.",
        ],
        "outcomes": [
            ("Published on Google Play",
             "The MyToyota listing shows 500K+ downloads and the Toyota Remote (Africa) listing shows 1K+ downloads, as displayed on the listings. These are published product figures, not a measured result of this work."),
            ("Launches stopped rebuilding identity",
             "A qualitative outcome stated on the brand programme page. It is not measured."),
        ],
        "what_changed": (
            "Three mobility products now share one identity system and one set of usage rules, applied across product, campaign and retail."
        ),
        "next": (
            "Confirm the missing components added, the brand guide update process, and add the KINTO landing page screenshots to this case study."
        ),
        "links": [
            ("MyToyota on Google Play", "https://play.google.com/store/apps/details?id=com.eliance.toyotamobile&hl=en_ZA"),
            ("Toyota Remote on Google Play", "https://play.google.com/store/apps/details?id=za.co.toyota.toyotaremote&hl=en_ZA"),
            ("Lexus app on Google Play", "https://play.google.com/store/apps/details?id=com.eliance.lexusmobile&hl=en_ZA&gl=US"),
            ("KINTO One page", "https://www.toyota.co.za/kinto-personal"),
        ],
        "tradeoffs": [
            ("Align with the Toyota global brand team", "Global review adds approval time before each launch. To confirm: how long the review took."),
            ("Adding missing components", "Each new component needs design-team review, which slows the system's growth. (Stated in the checks: each component was reviewed with the design teams.)"),
            ("Universal brand and design system", "One shared system gives local teams less room to vary the brand. To confirm: how much local variation was allowed."),
        ],
        "figures": [
            ("../images/work/brand-strategy-cover.webp", "Toyota mobility brands programme overview",
             "Brand programme overview: KINTO, Toyota Remote, AutoMark and Toyota App."),
            ("../images/work/toyota-app-cover.webp", "MyToyota listing on Google Play",
             "MyToyota on Google Play, the Toyota App's published listing."),
            ("../images/work/toyota-remote-cover.webp", "Toyota Remote listing on Google Play",
             "Toyota Remote (Africa) on Google Play, the connected-car app."),
        ],
    },
    {
        # Was a bare page that redirected to the GitHub Pages URL. The repository
        # publishes no site (GitHub Pages is off for it), so this is now the
        # real case study and the app is reached from the repository.
        "file": "service-waze.html",
        "title": "ServiceWaze",
        "category": "Impact · Civic-tech service alerts PWA",
        "tagline": ["Two hours before the taps run dry,", " the app already knows."],
        "accent": "#0369a1",
        "meta": [
            ("Client", "Self-initiated · open source"),
            ("Role", "Devsigner: product, UX/UI, frontend and backend"),
            ("Industry", "Civic technology and public services"),
            ("Year", "2026"),
        ],
        "lead": (
            "Load-shedding ended and the service crisis did not: it moved into water, roads, transport and "
            "tariffs, and the information that would have helped arrived after the outage, in English, inside "
            "an app that eats data. ServiceWaze is built for the window before an interruption, and the "
            "whole thing — product, interface, service and tests — is open source."
        ),
        "problems": [
            ("Status apps report the damage, not the warning",
             "Most apps tell a household that the water is off. The useful moment is the two hours before, "
             "when there is still time to store what you need and charge what you can."),
            ("The official channels are pull-only",
             "A resident has to already know a WhatsApp line or municipal page exists, message it and read "
             "the reply. Planned maintenance and recovery times rarely reach people proactively."),
            ("The households most harmed are the least reached",
             "Official channels are app-first, English-first and data-hungry. Households with no tank, no "
             "borehole and no spare data are the ones with the most to lose."),
            ("Reports disappear into a black hole",
             "Nobody gets a receipt saying a report was logged, who owns it and by when it will be fixed, so "
             "trust in municipal response stays where it is."),
        ],
        "role": (
            "I designed and built the product end to end: the competitive analysis and concept note, the "
            "information architecture and interface, the FastAPI service, the PWA front end, the upstream "
            "data connectors, the automated tests and the documentation. There was no client and no design "
            "team, and I wrote the entry pack for the FNB App of the Year."
        ),
        "decisions": [
            ("Count down to the disruption instead of alerting on it",
             "The product is built around a Prepare Window: how long until impact, and what must be done in "
             "the time available. Trade-off accepted: a forecast that is wrong reads as a broken promise, so "
             "every threat carries its confidence and the evidence behind it."),
            ("Show the data tier on every value",
             "Live data is wrapped in a provenance envelope. When an upstream fails the app serves the last "
             "good cache, and failing that a deterministic demo badged DEMO in the interface. Trade-off "
             "accepted: a visible DEMO badge is less confident-looking than a clean answer, but the app never "
             "presents simulated data as real."),
            ("Design for the phone people actually own",
             "Offline first, data-saver mode, read-aloud, five shipped languages, no login and no tracking. "
             "Trade-off accepted: no account means no history across devices and a weaker reason to come back."),
            ("Turn every report into a timed receipt",
             "A report gets an id, a responsible entity and an SLA clock, and a ward scorecard shows whether "
             "the promise was kept. Trade-off accepted: the accountability surface is only as strong as what "
             "the utilities publish."),
            ("Do not fight EskomSePush on app territory",
             "The concept note argues the defensible ground is distribution the incumbent does not have: "
             "WhatsApp and USSD, low-data, multilingual, and the accountability loop."),
        ],
        "checks": [
            "54 automated tests run from the repository with no network access, plus a headless browser "
            "smoke test over the front end.",
            "Every upstream connector reports its own status, latency and last successful fetch in a sources "
            "console, so a broken integration is visible instead of silent.",
        ],
        "outcomes": [
            ("Open source, application and service",
             "The interface, the FastAPI service, the tests, the architecture note and the pitch are public "
             "in one repository."),
            ("Entered in the FNB App of the Year",
             "Across Best Consumer Solution, Most Innovative Solution, Best South African Solution, Best "
             "Financial Solution and Best Agricultural Solution."),
            ("Not yet evidenced",
             "No user, adoption or outcome figures are published. Add them only with a source."),
        ],
        "what_changed": (
            "A service-disruption product built for the hours before impact, published as open source and "
            "honest about every byte it shows."
        ),
        "links": [("Code repository", "https://github.com/LulamileMkhungela/ServiceWaze")],
        "figures": [
            ("../images/work/servicewaze/cover.webp", "ServiceWaze — the household resilience network",
             "The product cover."),
            ("../images/work/servicewaze/01-home.webp", "ServiceWaze home screen",
             "Area chips, active alerts, the service tiles and the tab bar."),
            ("../images/work/servicewaze/06-report.webp", "ServiceWaze news and report flow",
             "The merged feed, its filters, and the confirmation after a report is sent."),
            ("../images/work/servicewaze/02-transport.webp", "ServiceWaze transport view",
             "Route and strike status for the areas you follow."),
            ("../images/work/servicewaze/05-areas.webp", "ServiceWaze area view",
             "Reports and receipts for an area."),
            ("../images/work/live/servicewaze-mobile.webp", "ServiceWaze on a phone",
             "The phone view."),
        ],
    },
    {
        # Was a bare page that redirected to wandies.vercel.app. The case study
        # is built from that live site; the site itself stays the destination.
        "file": "wandisplace-pwa.html",
        "title": "Wandies Place",
        "category": "Small business · Restaurant website and PWA",
        "tagline": ["A township buffet", " with a wall of a hundred thousand notes."],
        "accent": "#b45309",
        "meta": [
            ("Client", "Wandies Place, Dube, Soweto"),
            ("Role", "Devsigner, freelance: UX/UI and frontend (to confirm)"),
            ("Industry", "Food and hospitality"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Wandies Place has run an all-you-can-eat buffet in Dube for more than thirty years, and its "
            "walls are covered in notes left by guests from six continents. The site has to do two jobs at "
            "once: convince a first-time visitor it is worth the drive, and get a regular ordering without "
            "phoning the restaurant."
        ),
        "problems": [
            ("A landmark nobody can find online",
             "For a restaurant whose whole draw is reputation and word of mouth, the site was the only place "
             "a visitor checks before making the drive from Johannesburg."),
            ("The wall is the asset, and it was invisible",
             "A hundred thousand notes and signatures are the most distinctive thing in the building, and "
             "none of it could be seen before arriving."),
            ("Ordering meant a phone call",
             "Delivery runs through Uber Eats and Mr D Food, but a guest who wanted to know about a table or "
             "a special had no route to an answer."),
            ("Hours and the way in get buried",
             "Opening hours, the Dube address and the booking route change, and they are what a visitor "
             "decides on."),
        ],
        "role": (
            "I designed and built the website and PWA: the visual direction, the page structure, the menu "
            "and gallery templates, and the front end (scope to confirm). The reasoning below is my "
            "reconstruction from the live site — confirm the brief and dates before this page is quoted."
        ),
        "decisions": [
            ("Lead with the room, not the menu",
             "The home page opens on the restaurant exterior with the promise in type over it, so the first "
             "thing a visitor sees is the place itself."),
            ("Give the wall of notes its own section",
             "The notes are treated as content with their own heading and figures — 30+ years, 100k+ notes, "
             "six continents — rather than as decoration behind a hero."),
            ("Put hours, location and delivery on the first screen",
             "The information bar under the hero carries the buffet, happy hour, 9am to 10pm and Dube, with "
             "Reserve table and Order Online held at the top."),
            ("Hand ordering to the platforms guests already use",
             "Delivery links go to Uber Eats and Mr D Food rather than a bespoke cart, which keeps the "
             "restaurant on the rails it already runs."),
            ("Give the story a page of its own",
             "The history of Makhalemele Street and the guests who passed through is separated from the "
             "visit flow, so a first-time visitor is not made to read it to find the menu."),
        ],
        "checks": [
            "The live site was reviewed for the menu, signature dishes, delivery and booking routes, opening "
            "hours, address and the tradition section. Mobile testing and performance checks are to confirm.",
        ],
        "outcomes": [
            ("The restaurant's own published figures",
             "30+ years of stories, 100k+ notes and signatures and six continents represented are the "
             "restaurant's claims, shown on its own site."),
            ("Not yet evidenced",
             "No visit, order or revenue figures are shown. Add them only with a source from the business."),
        ],
        "what_changed": (
            "One site that tells a first-time visitor where to go and lets a regular order, without the "
            "story getting in the way."
        ),
        "links": [
            ("Visit the live site", "https://wandies.vercel.app/"),
            ("Order on Uber Eats", "https://www.ubereats.com/za/store/wandies-place-dube/90PRvw56SwyGKNaz4_MRwQ"),
            ("Order on Mr D Food", "https://www.mrd.com/delivery/restaurant/wandies-place-soweto/11975"),
        ],
        "tradeoffs": [
            ("Lead with the room, not the menu",
             "A photographic hero pushes the menu further down. To confirm: how many visitors use the menu link from the first screen."),
            ("Give the wall of notes its own section",
             "The tradition section adds length to the page for guests who came to eat. To confirm: whether it is read or skipped."),
            ("Put hours, location and delivery on the first screen",
             "A permanent information bar eats vertical space on a phone. To confirm: how the page reads on a small screen."),
            ("Hand ordering to the platforms guests already use",
             "The restaurant loses the customer relationship to the delivery platform. Trade-off accepted: the alternative is a cart nobody maintains."),
        ],
        "figures": [
            ("../images/work/wandisplace-cover.webp", "Wandies Place — Dube, Soweto",
             "The restaurant cover."),
            ("../images/work/live/wandisplace-desktop.webp", "Wandies Place on desktop",
             "The home page: hero, navigation, and the hours, location and ordering bar."),
            ("../images/work/live/wandisplace-mobile.webp", "Wandies Place on a phone",
             "The phone view."),
        ],
    },
    {
        # Was a bare page that redirected to skautos.vercel.app. The case study
        # is built from that live site; the site itself stays the destination.
        "file": "sk-finds-pwa.html",
        "title": "SK Finds",
        "category": "Small business · WhatsApp storefront PWA",
        "tagline": ["Car-culture finds", " ordered from the dash."],
        "accent": "#65a30d",
        "meta": [
            ("Client", "SK Finds, Thembisa"),
            ("Role", "Devsigner, freelance: UX/UI and frontend (to confirm)"),
            ("Industry", "Small-business retail"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "SK Finds sells mudflaps, valve caps, mats, wheel covers and plush toys in Esangweni, Thembisa, "
            "and trades until two in the morning. The storefront had to work on the phone the customer is "
            "already holding, show prices in rand without a cart to build, and end in a WhatsApp message "
            "rather than a checkout nobody wants to finish."
        ),
        "problems": [
            ("Stock is chosen in person, not online",
             "Car-culture finds are a trust purchase: the customer wants to see the price and know it is in "
             "stock before they ask, and most of them are deciding at night."),
            ("No cart is the shortest path to a sale",
             "Most orders are a handful of items collected at the shop or delivered locally, so a full "
             "checkout flow is more friction than it is worth."),
            ("A request that is not on the shelf still has to work",
             "Customers ask for specific accessories and plush toys that SK does not stock, and that request "
             "is part of how the business runs."),
            ("Open 24 hours has to look open",
             "The trading hours are the product. A visitor arriving at 11pm should not have to guess whether "
             "anyone is there."),
        ],
        "role": (
            "I designed and built the storefront: the visual direction, the product and category templates, "
            "the WhatsApp ordering path, and the front end as a PWA (scope to confirm). The reasoning below "
            "is my reconstruction from the live site — confirm the brief and dates before this page is quoted."
        ),
        "decisions": [
            ("Put the price on the tile, not behind a click",
             "Every featured product shows its price in rand on the card, because the customer is comparing, "
             "not browsing."),
            ("Make WhatsApp the checkout",
             "The primary action on a product and on the home page opens a pre-filled chat, so an order is a "
             "conversation rather than a form."),
            ("Group the stock the way it is bought",
             "Exterior, Interior and Plushies match how a customer thinks about an upgrade, and each has its "
             "own shelf on the shop page."),
            ("State the hours and the meeting point as content",
             "Thembisa · open 24 hours runs at the top of the page, with Esangweni collection or delivery "
             "spelled out where the customer decides."),
            ("Keep a request route for what is not stocked",
             "The contact prompt asks for the item to be sourced, which turns the shop's supply chain into a "
             "visible part of the storefront."),
        ],
        "checks": [
            "The live site was reviewed for the product list and prices, the category shelves, the WhatsApp "
            "ordering path, trading hours and the collection point. Mobile testing and performance checks are "
            "to confirm.",
        ],
        "outcomes": [
            ("Not yet evidenced",
             "No sales, order volume or revenue figures are shown. Add them only with a source from the "
             "business."),
        ],
        "what_changed": (
            "A storefront that shows the price, takes the order in the chat the customer already uses, and "
            "is legible at midnight."
        ),
        "links": [("Visit the live store", "https://skautos.vercel.app/")],
        "tradeoffs": [
            ("Put the price on the tile, not behind a click",
             "Stock that moves fast can show a stale price until it is edited. Trade-off accepted: a visible wrong price is cheaper to fix than an abandoned enquiry."),
            ("Make WhatsApp the checkout",
             "Orders are not captured in a system the shop can report on. Trade-off accepted: the alternative is a checkout that loses the sale."),
            ("Group the stock the way it is bought",
             "The categories assume a car-culture customer and fit less well for gift-only buying. To confirm: how gift orders arrive."),
            ("State the hours and the meeting point as content",
             "Copy has to be edited whenever the hours or meeting point change. To confirm: how often the shop edits it."),
        ],
        "figures": [
            ("../images/work/skfinds-cover.webp", "SK Finds — Thembisa",
             "The storefront cover."),
            ("../images/work/live/sk-finds-desktop.webp", "SK Finds on desktop",
             "The home page: the promise, the two actions and the featured drops."),
            ("../images/work/live/sk-finds-mobile.webp", "SK Finds on a phone",
             "The phone view, with the shop and WhatsApp actions in the header."),
        ],
    },
]


# Quality and reflection, added per the research note (docs/research-case-study-structure.md).
# Each entry uses only what the sources state. "To confirm" marks anything the owner must check.
EXTRA = {
    "employee-engagement-app-redesign.html": {
        "checks": [
            "Usability testing with employees before release, covering how fast someone could find a known feature, "
            "whether search results matched expectations, and whether the favourites concept was understood without explanation.",
            "Post-launch task testing against the old home screen, and time-to-task on the most common journeys.",
            "User acceptance testing (UAT) reached 92%.",
        ],
        "next": "Keep tracking support requests on the \"where do I find\" pattern after each release. Confirm what is measured today before publishing.",
    },
    "doc-coal-stockpile-forecasting.html": {
        "checks": [
            "Requirements define the planning filters (time, data source, station) and the role-based access rules. "
            "No UI test results are in the source documents.",
        ],
        "next": "Record forecast accuracy and stockout events once the model is in use. These are not yet in the documents.",
    },
    "doc-compliance-ai-platform.html": {
        "checks": [
            "Every answer passes a verification step before it is shown, and the frontend handles the loading state while checks run.",
            "Production-grade authentication is a release condition in the documents.",
        ],
        "next": "Record answer quality and adoption after rollout. These are not yet in the documents.",
    },
    "doc-media-scanning-audit.html": {
        "checks": [
            "An 11-scenario acceptance workbook. Each scenario has an expected result, an actual result, pass or fail, and comments.",
            "Each scenario is traced to a business requirement and an MVP flag.",
        ],
        "next": "Add the final pass rate, defects closed and sign-off status when they are confirmed.",
    },
    "doc-safety-statistics-workbook.html": {
        "checks": [
            "Each score is a fixed value in the table, so analysts can check formula output against it.",
        ],
        "next": "Confirm whether the scoring table has been used in reporting. No safety figures are shown here.",
    },
    "doc-chart-components.html": {
        "checks": [
            "The reuse decision was approved by a named reviewer, recorded in the specification.",
        ],
        "next": "Record which components shipped and whether business users adopted the configuration screen.",
    },
    "doc-timeline-view.html": {
        "checks": [
            "A 31-requirement specification. The three-entity-per-page limit is stated openly, because column sizing is not dynamic.",
        ],
        "next": "Record whether the three-entity limit was removed, and the ideal of five to ten entities per page.",
    },
    "doc-entrehive.html": {
        "checks": [
            "The team pitch sets out the points model and the QR-code transaction flow. No user testing is recorded in the pitch.",
        ],
        "next": "Add any user testing from the team, with a source.",
    },
    "africa-cuisine-pwa.html": {
        "checks": [
            "The live site was reviewed for the menu, prices, ordering path, daily special, opening hours and location. "
            "Mobile testing and performance checks are to confirm.",
        ],
        "next": "To confirm: any measurement since launch, such as orders or visits. None is shown here.",
    },
}
