"""Case-study content for the additional pages built by build_case_studies.py.

Document-based drafts use the owner's source documents, which are not kept in the repository; they do not claim results absent from those records.
Africa Cuisine, Wandies Place and SK Finds are described from their live sites because the original project records are incomplete. Forma is a work in progress, documented from the owner's supplied screenshots and facts; no adoption outcomes are claimed.
Metadata marked "to confirm" is omitted from generated pages.

Used by scripts/build_case_studies.py. Do not import this on its own.
"""

TO_CONFIRM = "To confirm"

NEW_CASES = [
    {
        "file": "doc-coal-stockpile-forecasting.html",
        "title": "Coal stockpile forecasting",
        "problem_title": "A fixed calculation missed how stations affect each other.",
        "category": "Energy · Machine-learning decision support",
        "tagline": ["Planning coal stock", " with forecasts, not formulas."],
        "meta": [
            ("Client", "National power utility"),
            ("Role", "UI Developer & UX/UI Designer (React, data visualisation)"),
            ("Industry", "Energy"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "At a national power utility, planners estimate coal stock with a fixed calculation: opening stock plus "
            "supply minus burn. It does not account for weather, movement between stations or changes in coal prices. "
            "I am working on a planning interface alongside the data science and data engineering teams."
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
            "I work on the UX/UI and React interface for the planning tool alongside the data science and data "
            "engineering teams. They own the forecasting model and data pipeline. The available specifications "
            "describe the requirements; they do not include UI test results or a measured outcome."
        ),
        "decisions": [
            ("Replace one formula with per-station forecasts",
             "The requirements call for forecasts that account for dependencies between stations. The data science team owns the model and its maintenance."),
            ("Filter every view by time, data source and station",
             "Planners compare stations without rebuilding views. The requirements call for these filters."),
            ("Surface early-warning indicators, not just forecasts",
             "The documents aim at identifying supply-chain disruptions early, so the interface highlights risk."),
            ("Restrict data access by role",
             "Access is limited to authorised personnel based on their responsibilities."),
        ],
        "outcomes": [
            ("Results are not available yet",
             "The project is ongoing. The records I have do not include forecast accuracy, planner use, stockouts or urgent-procurement figures."),
        ],
        "what_changed": (
            "The planned interface compares per-station forecasts and adds filters and early-warning indicators. "
            "The work is still in progress, so I cannot report its effect yet."
        ),
        "figures": [],
    },
    {
        "file": "doc-compliance-ai-platform.html",
        "title": "Compliance AI assistant",
        "problem_title": "Analysts need to check each AI answer against its source.",
        "category": "Financial services · AI assistant with cited answers",
        "tagline": ["An AI answer you can", " check against its source."],
        "meta": [
            ("Client", "Financial services group"),
            ("Role", "UI Developer & Product Designer (React, AWS)"),
            ("Industry", "Financial services"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Compliance teams search through large sets of governance documents to answer policy questions. This "
            "project extends an existing assistant so analysts can check each answer against its source, within the "
            "client's security and role-based access rules."
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
            "I designed the chat interface and how it presents answers and citations. The platform team owns agent "
            "orchestration, document retrieval and verification services."
        ),
        "decisions": [
            ("Show citations with every answer",
             "Analysts can verify a response rather than trust it."),
            ("Verify before showing",
             "The interface shows a loading state while verification runs and does not display an unverified draft."),
            ("Make the active role visible",
             "Role decides which knowledge base is queried and which documents can be uploaded, so the interface "
             "shows the active role at all times."),
            ("Adapt an established multi-agent framework",
             "The project adapts an existing framework to the client's security and integration requirements."),
        ],
        "outcomes": [
            ("No rollout results to report",
             "The available documents do not include adoption or answer-quality results. Production-grade authentication is still listed as a release condition."),
        ],
        "what_changed": (
            "The specified interface shows citations and the active user role before an answer is used. "
            "I do not have rollout results to report."
        ),
        "figures": [],
    },
    {
        "file": "doc-media-scanning-audit.html",
        "title": "Media scanning for audit planning",
        "problem_title": "Auditors were searching for risk signals by hand.",
        "category": "Public sector · Media intelligence for audit",
        "tagline": ["Media risk signals, ready", " before planning starts."],
        "meta": [
            ("Client", "National audit institution"),
            ("Role", "UX/UI Designer & UI Developer (React, AWS)"),
            ("Industry", "Public sector"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "At the start of an audit planning cycle, auditors search the media for environmental, reputational and "
            "fraud risks linked to each auditee. The project brings those results into a register and sends alerts "
            "only to people linked to the auditee."
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
            "I design and build the register, alert centre and dashboards. The institution's 11-scenario acceptance "
            "workbook defines the tests; it records expected and actual results and the pass/fail status."
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
            ("Final results are not in the workbook",
             "The acceptance record lists scenarios and expected results, but not the final pass rate, resolved defects or sign-off status."),
        ],
        "what_changed": (
            "The design brings captured articles into one register and limits alerts to people linked to each auditee. "
            "The available workbook does not show final test results."
        ),
        "figures": [],
    },
    {
        "file": "doc-safety-statistics-workbook.html",
        "title": "Safety statistics reference",
        "problem_title": "Injury-severity rules were buried in formulas.",
        "category": "Energy and chemicals · Safety-reporting reference",
        "tagline": ["One set of rules for", " every region's numbers."],
        "meta": [
            ("Client", "Listed energy and chemicals group"),
            ("Role", "UX/UI Designer & Angular Developer"),
            ("Industry", "Energy and chemicals"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Safety rates depend on injury-severity scores. Those scores were buried in spreadsheet formulas, and the "
            "rules were only partly documented. Analysts across regions needed one reference they could check."
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
            "I designed and built the Angular interface and presented the scoring rules, roles and regional structure. "
            "The reporting formulas remained with the reporting team."
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
            ("No safety results to report",
             "The records used for this case study describe the scoring reference, not a change in safety performance."),
        ],
        "what_changed": (
            "The interface puts the fixed scoring rules beside the roles and regional structure. The source records "
            "do not include a change in safety results."
        ),
        "figures": [],
    },
    {
        "file": "doc-chart-components.html",
        "title": "Configurable chart components",
        "problem_title": "Every dashboard chart change needed a developer.",
        "category": "Pharmaceutical · Dashboard visualisation components",
        "tagline": ["Charts business users can", " set up themselves."],
        "meta": [
            ("Client", "Global pharmaceutical company"),
            ("Role", "UX/UI Design Specialist & Angular UI Developer"),
            ("Industry", "Pharmaceutical"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "The design system's bar and column charts could not be configured in the interface. Each change to a "
            "dashboard chart had to go through a developer."
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
            "I designed the chart component and its configuration screen, then implemented the UI. The specification "
            "records that a named reviewer approved reusing the existing component."
        ),
        "decisions": [
            ("Reuse and complete the existing component",
             "A named reviewer approved reuse. The configuration flow also needs the existing component's gaps to be closed."),
            ("Make configuration the default path",
             "Business users add a bar or column chart from a simplified screen. Required settings include tile name, "
             "tile size, and the x-axis and y-axis data fields."),
            ("Consolidate old and new behind one toggle",
             "The old component stays only until the new one is assessed."),
            ("Add a Pareto combo chart",
             "A bar series and a line share one graphic, as a second component in the same family."),
        ],
        "outcomes": [
            ("Shipping and adoption are not documented",
             "The source records the design and approval, but not which components shipped or whether business users adopted the configuration screen."),
        ],
        "what_changed": (
            "The specification describes a configuration screen for bar and column charts and a Pareto chart in the "
            "same component family. I do not have shipping or adoption results to report."
        ),
        "figures": [],
    },
    {
        "file": "doc-timeline-view.html",
        "title": "Configurable timeline view",
        "problem_title": "One fixed timeline could not fit every comparison.",
        "category": "Enterprise · Product operations timeline",
        "tagline": ["Many entities across time,", " in one configurable view."],
        "meta": [
            ("Client", "To confirm (not stated in the source document)"),
            ("Role", "UX/UI Design Specialist & Angular UI Developer"),
            ("Industry", "Product operations"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Users needed to compare several entities over time and choose which flows and filters appeared. The "
            "timeline also needed to show when its data was last refreshed."
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
            "I owned the interaction design and the UI for the timeline, from the configuration controls through to "
            "the scrolling view."
        ),
        "decisions": [
            ("Make every view configurable",
             "Users set the product, the tabs and their names, the number of entities per page, and the number of flows "
             "per entity."),
            ("Use quick filters and one shared filter component",
             "Filters are built once and reused, rather than rebuilt per view."),
            ("Set a limit while columns are fixed-width",
             "The specification caps each page at three entities because the columns do not resize dynamically. It lists five to ten as the preferred range once the layout can support it."),
            ("Make data freshness visible",
             "Users see when the data was last refreshed, and the legend can be collapsed or opened."),
        ],
        "outcomes": [
            ("No later release results available",
             "The documents do not say whether the three-entity limit changed or how teams used the timeline."),
        ],
        "what_changed": (
            "The specification covers configurable views, shared filters and visible data freshness, with a three-entity limit for the fixed-width layout. I do not have later release results."
        ),
        "figures": [],
    },
    {
        "file": "doc-entrehive.html",
        "title": "EntreHive",
        "problem_title": "Learning needed a reward people could use.",
        "category": "Mobile · Points-based app for entrepreneurs",
        "tagline": ["Points earned by learning,", " spent on real goods."],
        "meta": [
            ("Client", "The Digital Academy · Android development team project"),
            ("Role", "Lead UI/UX Designer, Android development team"),
            ("Industry", "Entrepreneurship and skills"),
            ("Year", "2018 — 2019"),
        ],
        "lead": (
            "EntreHive was a team project for entrepreneurs: attend a learning event, earn points and spend them on "
            "goods or services. I was the lead UI/UX designer on the Android team."
        ),
        "problems": [
            ("No reason to attend learning events",
             "Entrepreneurs need a reason to attend skills and knowledge events."),
            ("Rewards must mean something",
             "Points should be earned only from learning, and spent only on goods and services."),
        ],
        "role": (
            "I led UI/UX design on the Android team and was responsible for the interface and its implementation. "
            "The team pitch documents the points model and QR-code transaction flow."
        ),
        "decisions": [
            ("Award points for learning events",
             "The pitch ties earning points to attendance at skills and knowledge events."),
            ("Use QR codes for transactions",
             "The pitch specifies a QR-code transaction flow. I do not have user-test evidence that it was faster than manual entry."),
        ],
        "outcomes": [
            ("No outcome is recorded in the pitch",
             "The team document describes the concept and transaction flow, but does not report user testing or results."),
        ],
        "what_changed": (
            "The team designed a points-based Android app concept with QR-code transactions. I do not have evidence of user testing or a launch result."
        ),
        "links": [
            ("Code repository", "https://github.com/LulamileMkhungela/EntreHiveApp"),
            ("OURAGAN TEAM pitch PDF", "https://drive.google.com/file/d/19wodFzUU9Xrjzw9XqnM5ZpMOWvsVEoTf/view?usp=sharing"),
        ],
        "figures": [],
    },
    {
        "file": "africa-cuisine-pwa.html",
        "title": "Africa Cuisine",
        "problem_eyebrow": "What the live site shows",
        "problem_title": "Menu, hours and ordering in one place.",
        "role_title": "What I can verify",
        "decisions_title": "What the live site shows",
        "category": "Small business · Restaurant website and PWA",
        "tagline": ["A restaurant menu that", " takes the order."],
        "meta": [
            ("Client", "Africa Cuisine & Restaurant, Braamfontein"),
            ("Role", "Freelance product design and UI development (scope to confirm)"),
            ("Industry", "Food and hospitality"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Africa Cuisine is a restaurant in Braamfontein. Its current site shows the menu, daily special, opening "
            "hours, location and an online ordering path."
        ),
        "problems": [
            ("Menu and prices appear together",
             "The live site lists dishes and prices, with the daily special and bestsellers on the home page."),
            ("Orders start from the menu",
             "The site places an Add action with menu items and bestseller cards."),
            ("Hours and location are on the home page",
             "The site lists all seven days of opening hours and the Braamfontein address."),
        ],
        "role": (
            "The live site is the evidence I can verify. I have not confirmed the original brief, exact delivery scope "
            "or project dates, so this page describes what is visible and does not claim a measured business result."
        ),
        "decisions": [
            ("The home page opens with the menu",
             "The flame-grilled menu appears with the daily special and bestsellers."),
            ("Add actions sit beside the food",
             "Customers can start an order from a menu item or a bestseller card."),
            ("Hours and address appear on the home page",
             "The site lists all seven days of opening hours and the Braamfontein address."),
            ("The breakfast special has a time window",
             "A dedicated card shows when the offer is available."),
        ],
        "outcomes": [
            ("No business results to report",
             "I do not have verified figures for visits, orders or revenue from the business."),
        ],
        "links": [("View the live site", "https://africa-cuisine-pro.vercel.app")],
        "what_changed": (
            "The live site puts the menu, daily special, hours, location and online ordering together. I do not have "
            "verified figures for what changed after launch."
        ),
        "figures": [],
    },
    {
        "file": "toyota-mobility-brand.html",
        "title": "Toyota Mobility Brand",
        "problem_title": "Three mobility products needed one identity system.",
        "category": "Brand · Design system · Connected apps",
        "tagline": ["One brand system,", " three mobility products."],
        "meta": [
            ("Client", "Toyota South Africa · via iOCO"),
            ("Role", "Senior UI/UX Designer on the brand programme, via iOCO"),
            ("Industry", "Automotive and mobility"),
            ("Year", "2023 — 2025"),
        ],
        "lead": (
            "Toyota South Africa was preparing KINTO, the Toyota App and Toyota Remote for market, but each had its own "
            "identity. I worked on the positioning and a shared identity system, then applied it across the product UI. "
            "The Lexus app was part of the wider connected-apps work."
        ),
        "problems": [
            ("Every product spoke its own language",
             "Three customer-facing expressions of one business, with different type, colour, tone and words for the same thing."),
            ("Positioning was a product list",
             "Each brand explained what the service did, not who it was for or why it mattered against the alternatives."),
        ],
        "role": (
            "I was the senior designer on the programme. I led the identity update, built the design system and "
            "implemented the UI changes in the Figma files and Ionic/Angular monorepos. The available records do not "
            "name every component or confirm which teams later adopted the system."
        ),
        "decisions": [
            ("Rebuild the identity around a shared position",
             "I reviewed KINTO, the Toyota App and Toyota Remote, then set the positioning and updated the logo lock-ups, colours, typography and motion rules."),
            ("Align the rules before launch",
             "I worked through the identity rules with Toyota's global brand team and the product design teams before launch."),
            ("Turn the identity into a working design system",
             "I built colour, type and spacing tokens, product components and guidance for using them."),
            ("Fill gaps in the existing component set",
             "I compared product screens with the system, designed missing components, reviewed them with the design teams and added usage notes."),
            ("Apply the system in design and code",
             "I updated Figma and the Ionic/Angular UI monorepos so the product screens and implementation used the same tokens and components."),
            ("Write rules for teams beyond product design",
             "I agreed usage guidance with marketing, product and retail, then checked the work against those rules."),
            ("Design for reuse across Toyota mobility work",
             "The system was designed to support KINTO, the Toyota App, Toyota Remote and AutoMark. The records I have do not confirm adoption by each team."),
        ],
        "checks": [
            "Project notes say the design teams reviewed new components before they were added. They do not list the components, identify each updated monorepo or confirm adoption by individual teams.",
        ],
        "outcomes": [
            ("The apps are publicly listed",
             "The Play Store listings show 500K+ downloads for MyToyota and 1K+ for Toyota Remote (Africa). Those are product-level counts, not evidence that this work caused adoption."),
            ("The programme page reports a shared identity",
             "It says launches no longer had to rebuild the identity. I do not have a measured time-saved figure."),
        ],
        "what_changed": (
            "The programme produced shared identity rules and a design system for Toyota's mobility work. I have "
            "not confirmed adoption by every team or measured launch-time savings."
        ),
        "next": (
            "I still need to add the component list, document how the brand guide is maintained and include the KINTO "
            "landing-page screens."
        ),
        "links": [
            ("MyToyota on Google Play", "https://play.google.com/store/apps/details?id=com.eliance.toyotamobile&hl=en_ZA"),
            ("Toyota Remote on Google Play", "https://play.google.com/store/apps/details?id=za.co.toyota.toyotaremote&hl=en_ZA"),
            ("Lexus app on Google Play", "https://play.google.com/store/apps/details?id=com.eliance.lexusmobile&hl=en_ZA&gl=US"),
            ("KINTO One page", "https://www.toyota.co.za/kinto-personal"),
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
        "problem_title": "People need time to prepare before services are disrupted.",
        "category": "Impact · Civic-tech service alerts PWA",
        "tagline": ["Service alerts that help", " people prepare ahead."],
        "accent": "#0369a1",
        "meta": [
            ("Client", "Self-initiated · open source"),
            ("Role", "Product designer and developer · PWA, API and data connectors"),
            ("Industry", "Civic technology and public services"),
            ("Year", "2026"),
        ],
        "lead": (
            "Service updates for water, roads and transport are spread across utility and municipal channels. "
            "ServiceWaze is my open-source PWA for bringing alerts, preparation steps and report follow-up into "
            "one place, with low-data and multilingual use in mind."
        ),
        "problems": [
            ("A status update can arrive too late",
             "The concept is built around giving households time to prepare before a service disruption, rather than only reporting it after impact."),
            ("Updates are spread across channels",
             "Residents have to know which utility or municipal channel to check for maintenance and recovery information."),
            ("Data and language can limit access",
             "The product requirements call for low-data use and five languages, addressing barriers in app-first, English-first services."),
            ("Reports need a follow-up trail",
             "The proposed report flow gives each report an identifier, a responsible entity and an SLA clock, so a resident can see what happens next."),
        ],
        "role": (
            "This is a self-initiated project, so I handled the product concept, UX/UI, PWA, FastAPI service, data "
            "connectors, automated tests and documentation. I also prepared an entry pack for the FNB App of the Year."
        ),
        "decisions": [
            ("Make preparation time the main alert",
             "The Prepare Window shows how long remains before impact and what someone can do in that time. Each warning includes its confidence and supporting evidence because a wrong forecast could damage trust."),
            ("Label where the data came from",
             "The app keeps the last good cache when a source fails. If there is no cached update, it shows deterministic demo data with a DEMO label instead of presenting it as live."),
            ("Keep the core experience light and accessible",
             "The PWA supports offline use, data-saver mode, read-aloud and five languages, with no login or tracking. Without an account, a user does not get history across devices."),
            ("Give reports a receipt and an owner",
             "Each report gets an ID, a responsible entity and an SLA clock. A ward scorecard can show whether the service commitment was met; that view depends on utilities publishing updates."),
            ("Reach people beyond another standalone app",
             "The concept proposes WhatsApp and USSD distribution alongside the PWA, with low-data access, multiple languages and a public accountability loop."),
        ],
        "checks": [
            "54 automated tests run from the repository with no network access, plus a headless browser "
            "smoke test over the UI.",
            "Every upstream connector reports its own status, latency and last successful fetch in a sources "
            "console, so a broken integration is visible instead of silent.",
        ],
        "outcomes": [
            ("The project is public on GitHub",
             "The repository includes the PWA, FastAPI service, tests, architecture note and pitch."),
            ("I prepared an award entry",
             "The entry pack covers Best Consumer Solution, Most Innovative Solution, Best South African Solution, Best Financial Solution and Best Agricultural Solution. I have not claimed a nomination or award."),
            ("No adoption results to report",
             "I do not have published user, adoption or service-outcome figures."),
        ],
        "what_changed": (
            "ServiceWaze brings service alerts and preparation steps into one open-source PWA, labels cached and "
            "demo data clearly, and gives reports a visible follow-up path. I do not yet have user or service-outcome results."
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
        "problem_eyebrow": "What visitors need to know",
        "problem_title": "Plan the visit before travelling to Dube.",
        "role_title": "Scope and sources",
        "decisions_title": "What the live site shows",
        "category": "Small business · Restaurant website and PWA",
        "tagline": ["A township buffet", " with a wall of a hundred thousand notes."],
        "accent": "#b45309",
        "meta": [
            ("Client", "Wandies Place, Dube, Soweto"),
            ("Role", "Freelance product design and UI development (scope to confirm)"),
            ("Industry", "Food and hospitality"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "Wandies Place is a buffet restaurant in Dube, Soweto, known for the guest notes covering its walls. "
            "The live site brings that story together with the practical details for a visit or delivery."
        ),
        "problems": [
            ("Visitors need to see what the place is like",
             "The home page opens on the restaurant exterior and its buffet offer."),
            ("The guest-note wall is part of the story",
             "The site gives the notes, their history and the restaurant's own figures a dedicated section."),
            ("Practical visit details belong together",
             "Opening hours, the Dube address and the booking route are visible on the site."),
            ("Delivery uses familiar services",
             "The live site links to Uber Eats and Mr D Food."),
        ],
        "role": (
            "I do not have the original brief or delivery notes to verify my exact scope, project dates, research or "
            "testing. This page describes the current site and the restaurant's own published figures; it does not "
            "claim a business result."
        ),
        "decisions": [
            ("The home page opens on the restaurant",
             "The hero shows the exterior, with the buffet offer over the image."),
            ("The guest-note wall has its own section",
             "The site presents the notes, their history and the restaurant's own figures as part of the story."),
            ("Hours, location and visit actions are easy to find",
             "The home page lists the buffet, happy hour, opening hours and Dube address, with booking and ordering actions."),
            ("Delivery links go to Uber Eats and Mr D Food",
             "The current site sends delivery orders to those services rather than to a custom cart."),
            ("The restaurant history has a separate page",
             "Visitors can read the Makhalemele Street story without going through it to find the menu."),
        ],
        "checks": [
            "I checked the live site for its menu, signature dishes, delivery and booking links, opening hours, address and history section. I do not have mobile-test or performance results to report.",
        ],
        "outcomes": [
            ("The restaurant's own published figures",
             "Its site says it has more than 30 years of stories, over 100,000 notes and signatures, and guests from six continents."),
            ("No business results to report",
             "I do not have verified figures for visits, orders or revenue."),
        ],
        "what_changed": (
            "The live site puts the restaurant's story, opening hours, location, booking and delivery links in one place. "
            "I do not have traffic or order figures to show its effect."
        ),
        "links": [
            ("Visit the live site", "https://wandies.vercel.app/"),
            ("Order on Uber Eats", "https://www.ubereats.com/za/store/wandies-place-dube/90PRvw56SwyGKNaz4_MRwQ"),
            ("Order on Mr D Food", "https://www.mrd.com/delivery/restaurant/wandies-place-soweto/11975"),
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
        "problem_eyebrow": "What shoppers need",
        "problem_title": "See the price, then ask or order directly.",
        "role_title": "Scope and sources",
        "decisions_title": "What the live site shows",
        "category": "Small business · WhatsApp storefront PWA",
        "tagline": ["Car accessories and plush toys,", " ordered through WhatsApp."],
        "accent": "#65a30d",
        "meta": [
            ("Client", "SK Finds, Thembisa"),
            ("Role", "Freelance product design and UI development (scope to confirm)"),
            ("Industry", "Small-business retail"),
            ("Year", TO_CONFIRM),
        ],
        "lead": (
            "SK Finds sells car accessories and plush toys from Esangweni, Thembisa. Its live store shows prices "
            "in rand, groups products by category and sends orders through WhatsApp. It also lists the shop's "
            "hours, collection point and delivery option."
        ),
        "problems": [
            ("Shoppers can compare prices before asking",
             "The product cards show prices in rand beside the item."),
            ("The order path uses WhatsApp",
             "The product and home-page actions open a pre-filled chat rather than a cart."),
            ("Unlisted items still have a route",
             "The site invites customers to ask about an item the shop does not currently stock."),
            ("Hours and collection details are visible",
             "The home page lists the Thembisa location, 24-hour trading claim, Esangweni collection and delivery."),
        ],
        "role": (
            "I do not have the original brief or delivery notes to verify my exact scope, project dates, research or "
            "testing. This page describes the live storefront and does not claim sales or adoption results."
        ),
        "decisions": [
            ("Prices appear on product cards",
             "Featured products show their price in rand without an extra click."),
            ("WhatsApp is the order route",
             "The product and home-page actions open a pre-filled chat."),
            ("Products are grouped by category",
             "The shop page separates Exterior, Interior and Plushies."),
            ("Hours and collection details sit near the top",
             "The home page lists Thembisa, the 24-hour trading claim, Esangweni collection and delivery."),
            ("Customers can ask for items not in stock",
             "The contact prompt includes a route to request a product the shop does not carry."),
        ],
        "checks": [
            "I checked the live site for its product list and prices, category pages, WhatsApp ordering link, trading hours and collection point. I do not have mobile-test or performance results to report.",
        ],
        "outcomes": [
            ("No sales results to report",
             "I do not have verified sales, order-volume or revenue figures from the business."),
        ],
        "what_changed": (
            "The live storefront shows prices, product categories, shop hours and collection details, with a WhatsApp "
            "order path. I do not have sales figures to show its effect."
        ),
        "links": [("Visit the live store", "https://skautos.vercel.app/")],
        "figures": [
            ("../images/work/skfinds-cover.webp", "SK Finds — Thembisa",
             "The storefront cover."),
            ("../images/work/live/sk-finds-desktop.webp", "SK Finds on desktop",
             "The home page: the promise, the two actions and the featured drops."),
            ("../images/work/live/sk-finds-mobile.webp", "SK Finds on a phone",
             "The phone view, with the shop and WhatsApp actions in the header."),
        ],
    },
    {
        "file": "forma-design-system.html",
        "title": "Forma Design System",
        "problem_title": "Design decisions need to survive the move from Figma to code.",
        "category": "Product · Design systems · Work in progress",
        "tagline": ["One source, ", "a shared language."],
        "accent": "#27563d",
        "meta": [
            ("Client", "Self-initiated · Forma"),
            ("Role", "Product designer and developer"),
            ("Industry", "Design systems and developer tooling"),
            ("Status", "Work in progress · awaiting Figma review"),
        ],
        "description": (
            "Forma is a work-in-progress design system that connects Figma variables and typed tokens to React and "
            "Angular components, with local-first review and Storybook verification."
        ),
        "lead": (
            "Forma is my work-in-progress design system. Its 170 typed tokens connect Figma variables to React and "
            "Angular components, with a local plugin workflow and Storybook checks. This case study describes the "
            "current build, not a finished release."
        ),
        "problems": [
            ("Design intent can fall between tools",
             "A named decision in Figma needs to survive token generation, framework code and component documentation. "
             "Forma makes that path explicit rather than treating the handoff as the end of the work."),
            ("One system has two framework paths",
             "React and Angular need to use the same design decisions. Forma builds both from the shared token source."),
            ("Token changes need a review trail",
             "A primitive can affect aliases, themes and contrast. The Review Lab is designed to trace those effects "
             "before a change is accepted."),
        ],
        "role": (
            "I designed and built Forma as a personal product: the system's foundations, token workflow, Figma plugin, "
            "React and Angular libraries, documentation experience and local review concept. The work is ongoing. "
            "The supplied screens show implementation and product direction; they do not establish user adoption or "
            "business impact."
        ),
        "decisions": [
            ("Keep one typed token source",
             "The current overview lists 170 tokens. The token package can build CSS, Tokens Studio JSON and a "
             "distributable package, keeping downstream outputs tied to the same decisions."),
            ("Build native Figma artifacts from the tokens",
             "The plugin creates variables, Light and Dark semantic modes, text styles and component sets, instead "
             "of asking a designer to recreate each value by hand."),
            ("Treat React and Angular as peer outputs",
             "Both libraries use the same tokens and design decisions, so framework choice does not create a second "
             "visual system."),
            ("Keep the plugin local-first",
             "The design file stays on the designer's machine; the plugin does not send it to a service. This keeps "
             "the workflow usable offline and avoids account sync."),
            ("Make verification part of the handoff",
             "Storybook exposes variants, interactions and accessibility checks for the real framework components, "
             "while Review Lab traces token aliases and contrast."),
        ],
        "checks": [
            "The supplied Review Lab screen shows 32 of 32 selected contrast pairs passing in both Light and Dark "
            "themes. This is an implementation check for the selected pairs, not a full accessibility audit or user test.",
            "The documented workflow builds token outputs, runs the React workspace and opens separate Storybooks "
            "for the framework libraries. Broader coverage and release readiness remain in progress.",
        ],
        "outcomes": [
            ("170 typed tokens",
             "The current overview screen lists the shared token set."),
            ("16 core components",
             "The current overview screen lists 16 components."),
            ("Two framework paths",
             "React and Angular libraries share the token source."),
            ("32/32 selected contrast pairs pass",
             "The supplied Review Lab screen shows the selected pairs passing in both themes. No user or adoption "
             "figures have been supplied."),
            ("Submitted, awaiting Figma review",
             "The plugin has been submitted to the Figma Community and is waiting on Figma's approval, so there is "
             "no public listing yet. The generated native design-library file still needs its own reviewed share "
             "link."),
        ],
        "what_changed": (
            "Forma connects Figma, typed tokens, React and Angular components, and Storybook in one design-to-code "
            "workflow. It is an active work in progress, not a finished or adoption-validated product."
        ),
        "next": (
            "Review and share the native Figma design-library file, expand component and interaction coverage, and "
            "validate the React and Angular outputs with more consuming examples before calling the system complete."
        ),
        # The Community listing is still in review, so the URL can return a
        # Figma 404 until it is approved. The label says so; drop "(in review)"
        # from it the day Figma approves the plugin.
        "links": [
            ("Forma source repository", "https://github.com/LulamileMkhungela/create"),
            ("Forma Figma Community plugin (in review)",
             "https://www.figma.com/community/plugin/1690885096816846170"),
        ],
        "tradeoffs_title": "Current limitations",
        "tradeoffs": [
            ("Review stays local", "Review Lab snapshots stay in the browser; they are not shared team history."),
            ("The plugin is still in review", "The Figma Community listing is awaiting approval, and the native design-library file still needs a reviewed share link."),
            ("Keep both framework libraries aligned", "React and Angular use the same token source, but both component libraries need to stay in sync as they change."),
        ],
        "figures": [
            ("../images/work/forma-cover.svg", "Forma design system and Figma plugin overview",
             "An editorial illustration of Forma's current identity and local plugin workflow; not a captured product screen."),
            ("../images/work/forma-workflow.svg", "Forma design-to-code workflow",
             "The four-step path from Figma decisions through token generation and framework code to Storybook verification."),
            ("../images/work/forma-review.svg", "Forma Review Lab contrast checks",
             "The supplied Review Lab screen reports 32 of 32 selected contrast pairs passing in both themes; the graphic is a diagram, not a product capture."),
        ],
    },
]


# Quality and reflection, added per the research note (docs/research-case-study-structure.md).
# Each entry uses only what the sources state. "To confirm" marks anything the owner must check.
EXTRA = {
    "employee-engagement-app-redesign.html": {
        "checks_title": "How I checked the work",
        "checks": [
            "Before release, employees tried to find known features, check search results and use favourites without an explanation.",
            "After launch, task testing compared the new home screen with the old one and tracked time on common journeys.",
            "User acceptance testing reached 92%.",
        ],
        "next": "I would keep tracking the support questions about finding features and compare them with the post-launch baseline.",
    },
    "doc-coal-stockpile-forecasting.html": {
        "checks_title": "What the documents confirm",
        "checks": [
            "The available requirements list the planning filters — time, data source and station — and the role-based access rules. They do not include UI test results.",
        ],
        "next": "Once planners use the forecasts, the useful checks will be forecast accuracy against actual stock, plus stockouts and urgent orders per station.",
    },
    "doc-compliance-ai-platform.html": {
        "checks_title": "What the documents confirm",
        "checks": [
            "The specification requires answers to pass verification before they appear, with a loading state while that check runs.",
            "Production-grade authentication is listed as a release condition. The documents I can share do not include rollout or answer-quality results.",
        ],
        "next": "After rollout, measure answer quality against its cited sources and whether analysts return to the assistant. I do not have those results yet.",
    },
    "doc-media-scanning-audit.html": {
        "checks_title": "Acceptance testing",
        "checks": [
            "The workbook covers 11 business scenarios. For each one, it records the expected and actual result, pass or fail, comments, the linked requirement and the MVP flag.",
            "The workbook does not include a final pass rate or sign-off result.",
        ],
        "next": "When the cycle closes, add the scenario pass rate, defects resolved and sign-off status.",
    },
    "doc-safety-statistics-workbook.html": {
        "checks_title": "Checking the scoring reference",
        "checks": [
            "Each severity score is a fixed value in the table, so analysts can compare a formula result with the documented rule. This page does not include safety performance figures.",
        ],
        "next": "Next, I would check whether teams used the shared table in reporting and record a source for any change in their work.",
    },
    "doc-chart-components.html": {
        "checks_title": "What is documented",
        "checks": [
            "The specification records approval from a named reviewer to reuse the existing chart component. It does not record which components later shipped or how often business users configured them.",
        ],
        "next": "The next useful evidence would be which components shipped and whether business users could set up charts without raising a developer request.",
    },
    "doc-timeline-view.html": {
        "checks_title": "What the specification says",
        "checks": [
            "The 31-requirement specification sets a limit of three entities per page because column widths are not dynamic. It also records five to ten as the preferred range; I do not have a later update showing whether the limit changed.",
        ],
        "next": "I would check whether the layout limit changed and how many teams configure their own timeline views.",
    },
    "doc-entrehive.html": {
        "checks_title": "What the source shows",
        "checks": [
            "The team pitch describes the points model and QR-code transaction flow. It does not include user-test results, so I have not claimed usability outcomes.",
        ],
        "next": "If the team has user-test notes, those would let me show how people understood the points and QR flows.",
    },
    "africa-cuisine-pwa.html": {
        "checks_title": "What I could verify",
        "checks": [
            "I checked the live site for the menu, prices, ordering path, daily special, opening hours and location. I do not have mobile-test or performance results to report.",
        ],
        "next": "I would ask the business for verified order or visit figures before making a claim about sales or traffic."
    },
    "toyota-mobility-brand.html": {
        "checks_title": "What is documented",
        "checks": [
            "Project notes say the design teams reviewed new components before they were added. The records do not list the components, identify each updated monorepo or confirm adoption by individual teams.",
        ],
        "next": "I would add the component inventory, the list of updated monorepos and a note on how the brand guide is maintained.",
    },
    "service-waze.html": {
        "checks_title": "Tests I ran",
    },
    "wandisplace-pwa.html": {
        "checks_title": "What I could verify on the live site",
        "checks": [
            "I checked the menu, signature dishes, delivery and booking links, opening hours, address and the history section. I do not have mobile-test or performance results to report.",
        ],
    },
    "sk-finds-pwa.html": {
        "checks_title": "What I could verify on the live site",
        "checks": [
            "I checked the product list and prices, category pages, WhatsApp ordering link, trading hours and collection point. I do not have mobile-test or performance results to report.",
        ],
    },
    "forma-design-system.html": {
        "checks_title": "Checks on the current build",
    },
}
