import os
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html
from tools.touch_common import TOUCH_COMMON_HEAD, TOUCH_STYLES, TOUCH_FOOTER, TOUCH_PAGE_SCRIPT

SERVICES_CONFIG = [
    {
        "filename": "platforms-and-systems.html",
        "title": "Platforms & Systems | LulaSync — Tech Architecture",
        "badge": "Platforms & Systems · For Tech Businesses",
        "h1": "The platform your business runs on.",
        "claim": "Built to carry the business.",
        "sub": "Somewhere under every scaling business is the system that actually runs it — orders, bookings, operations, money. We design and build those platforms as products: shipped in slices that go live early, engineered to carry real load, and built to outlast the roadmap that funded them.",
        "what_title": "Core systems, built like products.",
        "what_desc": "Most core systems are either inherited legacy platforms everyone works around, or two-year mega-projects that rot before launch. We build platforms in shippable slices: a working core live in months, and capability layered on systematically.",
        "pillars": [
            ("Live Early, Then Layered", "A working core in production in months, not a big bang in years — so riskiest assumptions meet reality while they're still cheap to change."),
            ("Engineered for Real Load", "Architecture, data models, and UI performance designed for the scale you're heading toward — tested under real load before customers do it for you."),
            ("Owned, Not Rented", "Your platform, your data, your tokenized codebase — documented and handed over properly so the system is an asset on your balance sheet.")
        ],
        "triggers_title": "For businesses outgrowing their own plumbing.",
        "triggers_desc": "When operations outrun systems, the real workflow hides in spreadsheets, inboxes, and tribal knowledge.",
        "triggers": [
            "The core process lives in spreadsheets, and one wrong paste is an operational incident.",
            "Scaling headcount is the only way your team can scale throughput.",
            "The legacy system is untouchable — nobody is sure what breaks if it changes.",
            "You've been quoted a two-year rebuild, and your business doesn't have two years."
        ],
        "approach_title": "Slice the core out of the mega-project.",
        "steps": [
            ("Map", "Model the operation", "We map how the business actually runs — workflows, data models, exception states — finding the thinnest slice that carries real value."),
            ("Core", "Ship the working spine", "The essential path built and live in months: real data, real users, real load — the foundation everything else attaches to."),
            ("Layer", "Capability in slices", "Each next slice shipped into production as it is ready — integrations, automation, reporting — ranked by live usage data."),
            ("Harden", "Run it like it matters", "Monitoring, load testing, security audits, and comprehensive Storybook documentation as standing work.")
        ],
        "deliverables_title": "A system that's an asset on the balance sheet.",
        "deliverables": [
            ("A Production Platform", "The operational core live and carrying daily business — not a proof of concept waiting for phase two."),
            ("Architecture with Headroom", "Designed and documented for the next order of magnitude, so growth is a scaling exercise rather than a rewrite."),
            ("Integrations Done Properly", "Wired into your payment, accounting, and operational stack with contracts and monitoring, not cron jobs and hope."),
            ("Full IP Ownership", "Codebase, component libraries, infrastructure definitions, and knowledge transfer to run it outright.")
        ],
        "stat_title": "Mega-projects are where platforms go to die.",
        "stat_num": "45%",
        "stat_label": "average budget overrun on large traditional IT platform builds, compared to predictable sprint delivery with modular slices",
        "stat_source": "McKinsey-Oxford Large IT Project Research",
        "projects": [
            ("Hospital Command", "assets/ui-hospital-command.webp", "assets/ui-hospital-command.webp", "Enterprise · Healthtech", "Real-time clinical ward orchestration, emergency triage queue and ICU bed management."),
            ("Auto Claims", "assets/ui-auto-claims.webp", "assets/ui-auto-claims.webp", "InsurTech · Core Platform", "End-to-end motor claim submission with instant roadside dispatch and telemetry."),
            ("Project Orchestrator", "assets/ui-project-orchestrator.webp", "assets/ui-project-orchestrator.webp", "SaaS · Operations", "Multi-team project timeline, sprint velocity tracker, and resource allocation console."),
            ("Tyme Bank Redesign", "assets/ui-neo-banking.webp", "assets/ui-neo-banking.webp", "Fintech · Core Banking", "Complete digital banking platform overhaul with real-time money pots, virtual cards, and budgeting.")
        ],
        "quote": "LulaSync understood how our operations ran from day one. Shipping in modular slices allowed us to go live 4 months ahead of schedule without operational downtime.",
        "quote_author": "Chief Operating Officer",
        "quote_company": "Enterprise Logistics & FinTech",
        "faqs": [
            ("Should we replace our legacy system or build alongside it?", "Almost always alongside: the new core goes live next to legacy systems, slices of the operation migrate as they prove themselves, and the old system retires without cliff-edge risk."),
            ("Who owns the platform code afterwards?", "You do. 100% full intellectual property ownership, codebase, documentation, and design assets are yours outright upon delivery."),
            ("How quickly can something real be live?", "A working, tested core slice typically goes live into staging or production within 8 to 12 weeks.")
        ]
    },
    {
        "filename": "native-applications.html",
        "title": "Native Applications | LulaSync — Mobile Product Engineering",
        "badge": "Native Applications · iOS & Android",
        "h1": "The real thing, not a wrapper.",
        "claim": "Native performance, hardware access & 60fps polish.",
        "sub": "When an experience needs to feel instantaneous, work offline in low-connectivity areas, or take full advantage of device biometrics and sensors, nothing beats native mobile software. We design and build iOS and Android apps that feel like they belong on the phone.",
        "what_title": "Built for thumb-driven ergonomics.",
        "what_desc": "Mobile users decide whether an app feels right within three seconds. We design for one-handed reachability, gesture responsiveness, haptic feedback, and instant offline data hydration.",
        "pillars": [
            ("Hardware-First Integration", "Camera scanners, biometric FaceID, GPS geofencing, and Bluetooth telemetry built into core UX."),
            ("Sub-Second Cold Starts", "Optimized asset payloads, localized caching, and smooth 60fps transitions on every device generation."),
            ("App Store Release Rhythm", "CI/CD pipelines, automated TestFlight betas, and compliance with Apple HIG and Google Material 3.")
        ],
        "triggers_title": "When hybrid web wrappers hit their limits.",
        "triggers_desc": "If your mobile app feels sluggish, crashes on low memory, or gets negative App Store reviews, it's time for native architecture.",
        "triggers": [
            "Your existing app has sluggish scroll performance and feels like a website trapped in a webview.",
            "Users frequently lose unsaved data when moving into elevators or low-connectivity zones.",
            "You need tight integration with camera KYC verification, Bluetooth hardware, or background location.",
            "App Store review times and submission rejections are stalling your product roadmap."
        ],
        "approach_title": "From ergonomics to the App Store.",
        "steps": [
            ("Ergonomics", "Thumb zone mapping", "Designing reach zones, bottom sheets, and gesture interactions tuned for modern tall mobile screens."),
            ("Prototype", "Native interaction feel", "Testing real device prototypes at 60fps with haptic triggers and micro-animations."),
            ("Engineer", "Native Swift & Kotlin build", "Writing clean, modular mobile architecture with offline SQLite synchronization."),
            ("Deploy", "Release orchestration", "Managing App Store Connect, Play Console signing, and automated crash monitoring.")
        ],
        "deliverables_title": "Production mobile applications.",
        "deliverables": [
            ("iOS & Android Builds", "Native Swift and Kotlin/Flutter codebases ready for immediate store submission."),
            ("Mobile Design Tokens", "Complete Figma mobile component library with dark/light themes and dynamic type scales."),
            ("Offline Sync Engine", "Robust local database caching with background conflict resolution."),
            ("Store Assets & Metadata", "High-conversion App Store screenshots, preview videos, and release notes.")
        ],
        "stat_title": "Native conversion impact.",
        "stat_num": "3.2x",
        "stat_label": "higher daily retention rate observed in native mobile apps compared to webview wrapper implementations",
        "stat_source": "Mobile Performance & Retention Benchmark",
        "projects": [
            ("Ridemelo", "assets/ridemelo-cover.png", "projects/ridemelo.html", "Mobile · Ride-Hailing", "Urban mobility companion app with real-time driver GPS tracking, in-app payments, and route dispatch."),
            ("Auto Claims", "assets/ui-auto-claims.webp", "assets/ui-auto-claims.webp", "Mobile · InsurTech", "Native camera incident capture, voice note recording, and emergency roadside telemetry."),
            ("Tyme Bank Redesign", "assets/ui-neo-banking.webp", "assets/ui-neo-banking.webp", "Mobile · Digital Banking", "Biometric authentication, instant PayShap payments, and offline wallet balance access."),
            ("Study Companion", "assets/ui-study-companion.svg", "assets/ui-study-companion.svg", "Mobile · EdTech", "Adaptive flashcards, offline video playback, and push-notified revision streaks.")
        ],
        "quote": "The native app LulaSync engineered achieved a 4.9-star rating on the App Store in the first month. The performance difference was night and day.",
        "quote_author": "Head of Digital Products",
        "quote_company": "Mobility & Transport Group",
        "faqs": [
            ("Do you build in Swift/Kotlin or Flutter/React Native?", "We evaluate your roadmap: for pure hardware/OS integration, we build native Swift/Kotlin; for cross-platform velocity, we build high-performance Flutter/React Native."),
            ("How do you handle App Store approvals?", "We manage the entire submission lifecycle, adhering strictly to Apple HIG and Google Play guidelines to guarantee approval.")
        ]
    },
    {
        "filename": "hybrid-web-applications.html",
        "title": "Hybrid Web Applications | LulaSync — Fast Cross-Platform Products",
        "badge": "Hybrid Web Applications · Web & Mobile",
        "h1": "One codebase, every device, zero compromise.",
        "claim": "Single code efficiency, instantaneous PWA caching.",
        "sub": "When you need to ship across iOS, Android, and modern desktop browsers on an aggressive timeline, hybrid web applications give you maximum reach per engineering dollar. We build high-performance progressive web apps and hybrid applications using React, Next.js, and Flutter.",
        "what_title": "Web velocity with native polish.",
        "what_desc": "Modern web APIs can access cameras, push notifications, and local storage. We engineer hybrid applications that look, feel, and perform like native software while keeping your engineering team unified around one modern codebase.",
        "pillars": [
            ("Unified Component Architecture", "Write once, test once, deploy everywhere — slashing multi-platform maintenance overhead."),
            ("Instant Over-The-Air Updates", "Deploy UI improvements and critical patches instantly without waiting for app store review queues."),
            ("Progressive Web App Offline UX", "Service Workers and IndexedDB caching for dependable offline operation.")
        ],
        "triggers_title": "When maintaining three separate teams drains runway.",
        "triggers_desc": "Building separate iOS, Android, and Web teams before product-market fit burns capital and slows feature iteration.",
        "triggers": [
            "Your team is struggling to keep feature parity across Web, iOS, and Android.",
            "Engineering sprint velocity is halved because every bug must be fixed three times.",
            "You need to launch in emerging markets where PWA web apps convert better than large app store downloads.",
            "Your roadmap requires weekly feature deployment without 48-hour App Store review delays."
        ],
        "approach_title": "High-velocity cross-platform engineering.",
        "steps": [
            ("Architect", "Single design token framework", "Designing universal UI components that adapt seamlessly between desktop mouse and mobile touch."),
            ("Engineer", "React & Next.js frontend", "Building responsive, server-rendered web applications with optimized bundle sizes."),
            ("Bridge", "Native hardware APIs", "Integrating camera, geolocation, and push notification hooks across all target platforms."),
            ("Deploy", "Automated CI/CD pipelines", "Configuring instant Vercel/AWS staging environments and automated browser test suites.")
        ],
        "deliverables_title": "Universal digital product assets.",
        "deliverables": [
            ("Cross-Platform Application", "Full responsive PWA web application optimized for desktop, tablet, and mobile."),
            ("Modular Component Kit", "Storybook-documented React/TypeScript components ready for developer handover."),
            ("Service Worker Cache Engine", "Zero-latency offline routing and background API sync handlers."),
            ("API Integration Layer", "Clean REST and GraphQL client SDK connectors with end-to-end type safety.")
        ],
        "stat_title": "Velocity acceleration metric.",
        "stat_num": "2.4x",
        "stat_label": "faster feature delivery speed achieved by unifying web and mobile interfaces onto a hybrid component system",
        "stat_source": "Frontend Engineering Velocity Study",
        "projects": [
            ("BantuZel", "assets/bantuzel/cover.png", "projects/bantuzel.html", "Hybrid · Community App", "Pan-African cultural discovery and relationship platform with live feeds and messaging."),
            ("Academia", "assets/Academia-cover.png", "projects/academia.html", "Hybrid · LMS Platform", "Responsive education portal with lecture streaming, assignment submission, and grading."),
            ("OnliPay", "assets/new-cover.png", "projects/onlipay.html", "Hybrid · Payments", "Cross-platform payment checkout interface with instantaneous instant EFT and card settlement."),
            ("FoodieZone", "assets/foodiezone-cover.svg", "https://loux91.github.io/foodiezone/", "Hybrid · Quick Commerce", "Hyper-local food ordering web app with live kitchen tracking and address geolocation.")
        ],
        "quote": "Shipping our product as a unified hybrid application allowed our startup to launch on web and mobile in under 10 weeks.",
        "quote_author": "Co-Founder & CEO",
        "quote_company": "Pan-African Marketplace",
        "faqs": [
            ("Will users know it is a hybrid application?", "No. With hardware-accelerated animations and native gesture handling, users experience the same responsiveness as native apps.")
        ]
    },
    {
        "filename": "product-uiux-design.html",
        "title": "Product UI/UX Design | LulaSync — Digital Product Design",
        "badge": "Product UI/UX Design · Research & Systems",
        "h1": "A product function, not a design phase.",
        "claim": "Evidence over opinion, high-conversion UX.",
        "sub": "Design isn't how it looks after engineering builds it — design is deciding what gets built, why it wins, and how users move through it without cognitive friction. We embed directly with your product and engineering leadership to ship interfaces that drive measurable business outcomes.",
        "what_title": "Interface design rooted in user evidence.",
        "what_desc": "We eliminate subjective guesswork by mapping user journeys against business funnels. We create high-fidelity interactive Figma prototypes, conduct usability testing, and deliver production-ready design tokens.",
        "pillars": [
            ("Research-Led Information Architecture", "Clear visual hierarchies, logical taxonomy, and minimal cognitive load on complex task flows."),
            ("Production-Ready Design Tokens", "Figma variable modes, spacing scales, and accessible color systems built for direct code integration."),
            ("Embedded With Engineering", "We speak Git, component lifecycles, and API constraints — zero handover misunderstandings.")
        ],
        "triggers_title": "When design becomes the conversion bottleneck.",
        "triggers_desc": "If users get confused during onboarding or your engineering team is constantly guessing UI specs, you need structured product design.",
        "triggers": [
            "Users drop off during key conversion funnels without your team understanding why.",
            "Developers spend 30% of their time fixing inconsistent UI specs and missing edge cases.",
            "Your product feels like five different designers built five disconnected features.",
            "You need to present an investor-ready, high-fidelity clickable prototype in two weeks."
        ],
        "approach_title": "From discovery to tokenized components.",
        "steps": [
            ("Discover", "User & workflow research", "Interviewing stakeholders and users to map pain points, drop-offs, and competitive opportunities."),
            ("Wireframe", "Low-fidelity UX architecture", "Rapidly iterating on core navigation, layout ergonomics, and decision paths."),
            ("Prototype", "High-fidelity interactive test", "Building realistic Figma prototypes with live inputs and validating with actual users."),
            ("Tokenize", "Design system handover", "Delivering pixel-perfect components with states, auto-layout, and developer documentation.")
        ],
        "deliverables_title": "Comprehensive product design deliverables.",
        "deliverables": [
            ("Clickable Figma Prototype", "Fully interactive prototype demonstrating every user flow, micro-interaction, and edge case."),
            ("Tokenized Figma Library", "Auto-layout components, color variables, typography scales, and iconography."),
            ("User Journey Maps", "Documented customer personas, decision trees, and conversion funnel architectures."),
            ("Developer Handover Spec", "Detailed CSS token tables, responsive breakpoint rules, and animation specs.")
        ],
        "stat_title": "UX business outcome standard.",
        "stat_num": "+68%",
        "stat_label": "increase in user activation rate achieved after simplifying multi-step onboarding and account setup flows",
        "stat_source": "Product Design Activation Benchmark",
        "projects": [
            ("BantuZel", "assets/bantuzel/cover.png", "projects/bantuzel.html", "Product Design · Social", "End-to-end UX wireframes, design system, and clickable high-fidelity prototypes."),
            ("Academia", "assets/Academia-cover.png", "projects/academia.html", "Product Design · EdTech", "Complete student portal, lecture streaming HUD, and educator assessment workflows."),
            ("Auto Claims", "assets/ui-auto-claims.webp", "assets/ui-auto-claims.webp", "Product Design · InsurTech", "Simplified 3-step incident capture with automatic photo angle guidance and roadside assistance."),
            ("Tyme Bank Redesign", "assets/ui-neo-banking.webp", "assets/ui-neo-banking.webp", "Product Design · FinTech", "Reimagined neo-banking onboarding and real-time financial tracking interface.")
        ],
        "quote": "LulaSync transformed our complex data workflows into an interface our customers raved about. Our activation rates doubled within two sprints.",
        "quote_author": "Chief Product Officer",
        "quote_company": "Enterprise SaaS Innovation",
        "faqs": [
            ("Do you deliver working Figma files with auto-layout?", "Yes. Every component is built with 100% Figma Auto-Layout, component properties, and variable design tokens."),
            ("Can you collaborate directly with our engineers?", "Yes, we participate in sprint planning, design reviews, and Slack channels to support developers during implementation.")
        ]
    },
    {
        "filename": "brand-design.html",
        "title": "Brand Design | LulaSync — Visual Identity & Positioning",
        "badge": "Brand Design · Visual Identity & Strategy",
        "h1": "Visual identity built for digital products.",
        "claim": "Distinctive positioning, scalable vector systems.",
        "sub": "A great brand isn't just a pretty logo — it's the visual and verbal operating system of your business. We design distinctive tech brand identities, typography scales, icon systems, and positioning guidelines that build instant trust and scale seamlessly from app icons to global billboards.",
        "what_title": "Brands engineered for screens.",
        "what_desc": "Modern tech brands must function in dark mode, at 16px favicon sizes, and on high-density displays. We build vector-first visual systems that command attention and create lasting recall.",
        "pillars": [
            ("Digital-First Typography & Color", "High-contrast palettes and legible typography tuned for interfaces and marketing sites."),
            ("Modular Iconography & Vector Systems", "Custom iconography sets built on strict geometric grids for cohesive product UX."),
            ("Brand Guidelines That Developers Actually Use", "Clear color codes, spacing rules, and usage rules documented for design and code.")
        ],
        "triggers_title": "When your visual identity looks dated or amateur.",
        "triggers_desc": "If prospective customers or investors question your credibility because your branding looks unpolished, a brand overhaul is essential.",
        "triggers": [
            "Your visual branding looks like a template from 2012 and doesn't match your technology's quality.",
            "Different teams are using conflicting logos, colors, and font styles across marketing and product.",
            "Your logo breaks or becomes unreadable when scaled down to a mobile app icon or favicon.",
            "You are raising capital and need a sophisticated brand identity that stands out to venture investors."
        ],
        "approach_title": "From positioning to global guidelines.",
        "steps": [
            ("Position", "Market & competitor audit", "Analyzing your category landscape to establish a distinct, defensible visual positioning."),
            ("Explore", "Visual identity directions", "Developing diverse conceptual routes for logo marks, typography scales, and mood boards."),
            ("Refine", "Systemization & tokenization", "Perfecting geometry, kerning, color contrast ratios, and dark/light mode variants."),
            ("Document", "Comprehensive brand kit", "Delivering vector asset packages, font licenses, and Figma brand libraries.")
        ],
        "deliverables_title": "Complete brand identity toolkit.",
        "deliverables": [
            ("Master Logo Suite", "Scalable SVG/PNG vectors in primary, horizontal, monochrome, and icon mark formats."),
            ("Typography & Color System", "Web and app font pairings with hex/RGB/HSL tokens and WCAG contrast checks."),
            ("Custom Vector Icon Pack", "Bespoke 24px and 48px icon libraries designed specifically for your product features."),
            ("Interactive Brand Guidelines", "Figma and PDF brand books with clear rules for photography, layouts, and copy tone.")
        ],
        "stat_title": "Brand trust acceleration.",
        "stat_num": "84%",
        "stat_label": "of B2B decision-makers state that brand visual consistency and polish directly influence their technology purchase decisions",
        "stat_source": "Global Brand Credibility Index",
        "projects": [
            ("BantuZel Brand", "assets/bantuzel/cover.png", "projects/bantuzel.html", "Branding · Identity", "Visual identity system, logo iconography, and pan-African brand positioning."),
            ("OnliPay Identity", "assets/new-cover.png", "projects/onlipay.html", "Branding · Payments", "Modern developer-focused fintech brand identity and marketing assets."),
            ("SK Finds Brand", "assets/sk-finds-cover.svg", "https://skautos.vercel.app/", "Branding · Automotive", "Automotive marketplace branding, vehicle badges, and digital storefront styling."),
            ("King Kutter", "assets/king-cutter-cover.svg", "https://king-cutter-s-royal-web.vercel.app/", "Branding · Retail", "Premium grooming franchise visual identity, packaging, and store signage.")
        ],
        "quote": "LulaSync created a visual identity that made us look like a Series B company on launch day. It gave our sales team tremendous confidence.",
        "quote_author": "Managing Director",
        "quote_company": "Fintech Solutions Group",
        "faqs": [
            ("What formats do you deliver the logo files in?", "We deliver full vector packages in SVG, EPS, AI, PDF, alongside high-resolution PNGs and WebPs with transparent backgrounds.")
        ]
    },
    {
        "filename": "design-systems.html",
        "title": "Design Systems | LulaSync — Component Libraries & Tokens",
        "badge": "Design Systems · Tokens & Storybook",
        "h1": "Component libraries that scale with your team.",
        "claim": "Figma variables, zero tech debt & Storybook.",
        "sub": "When multiple product squads build features without a shared design system, inconsistency compounds and sprint velocity plummets. We build tokenized Figma libraries and Storybook component systems that keep design and frontend code in permanent, automated sync.",
        "what_title": "Design infrastructure that compounds.",
        "what_desc": "A great design system is not an art project — it's shared engineering infrastructure. We create modular Figma variables, accessible UI kits, and production React/TypeScript components that eliminate redundant UI work forever.",
        "pillars": [
            ("Tokenized Variable Architecture", "Colors, typography, radii, and spacing defined as semantic tokens mapped 1:1 with CSS."),
            ("Accessibility & WCAG Compliance", "Built-in AAA contrast ratios, keyboard navigation focus rings, and screen reader labels."),
            ("Storybook & Code Synchronization", "Every component in Figma has an exact production counterpart in React, Angular, or Webflow.")
        ],
        "triggers_title": "When UI inconsistency slows down sprints.",
        "triggers_desc": "If your developers spend hours rebuilding buttons and modals or designers keep reinventing dropdowns, you need a unified design system.",
        "triggers": [
            "Developers waste 25%+ of every sprint building custom one-off UI components.",
            "Updating a brand color or button style requires hunting through hundreds of legacy files.",
            "New engineer and designer onboarding takes weeks because UI patterns aren't documented.",
            "Your product has 14 different button styles, 8 shades of grey, and broken spacing."
        ],
        "approach_title": "Engineering reusable design infrastructure.",
        "steps": [
            ("Audit", "UI inventory & debt analysis", "Cataloging all existing components, buttons, modals, and typography variants across your apps."),
            ("Tokenize", "Semantic token definition", "Defining design tokens for color, typography, spacing, shadows, and dark/light modes."),
            ("Construct", "Figma component system", "Building robust auto-layout components with interactive states and variants."),
            ("Deploy", "Storybook & code handover", "Documenting component props, usage guidelines, and exporting tokens via style-dictionary.")
        ],
        "deliverables_title": "Design system infrastructure assets.",
        "deliverables": [
            ("Figma Master Component Library", "Auto-layout components covering forms, tables, cards, navigation, and badges."),
            ("Semantic Token Kit", "Exportable JSON tokens compatible with Tailwind, CSS variables, and styled-components."),
            ("Storybook Documentation", "Live interactive component sandbox with prop controls and accessibility audits."),
            ("Usage & Governance Guide", "Rules for adding new components, versioning, and deprecating legacy patterns.")
        ],
        "stat_title": "Engineering velocity impact.",
        "stat_num": "47%",
        "stat_label": "reduction in frontend development sprint time achieved after adopting a tokenized component system",
        "stat_source": "Design System Productivity Audit",
        "projects": [
            ("Design Tokens", "assets/design-token.png", "https://www.figma.com/make/gkTm2bYYnzAmDBwWbWE7kb/Innovative-Design-System-Creation?t=871NF4mO6SlkhYAP-1", "Design Systems · Tokens", "Scalable multi-brand token system with semantic color variables and typography scales."),
            ("Hospital Command UI Kit", "assets/ui-hospital-command.webp", "assets/ui-hospital-command.webp", "Design Systems · Healthtech", "High-contrast clinical UI library with vital sign meters, triage badges, and ward widgets."),
            ("Tyme Bank Component Suite", "assets/ui-neo-banking.webp", "assets/ui-neo-banking.webp", "Design Systems · FinTech", "Modular neo-banking UI kit covering money cards, transaction tables, and wallet balances."),
            ("Enterprise SaaS Design Kit", "assets/ui-project-orchestrator.webp", "assets/ui-project-orchestrator.webp", "Design Systems · Enterprise", "Comprehensive table grids, form inputs, and sidebar navigation components.")
        ],
        "quote": "The design token system LulaSync implemented cut our frontend build times in half. Our designers and developers finally speak the exact same language.",
        "quote_author": "VP of Engineering",
        "quote_company": "Cloud SaaS Platform",
        "faqs": [
            ("Can our developers consume the tokens via npm?", "Yes, we export tokens into JSON/CSS packages that can be published to private npm registries or synced via GitHub Actions.")
        ]
    },
    {
        "filename": "strategy.html",
        "title": "Product Strategy | LulaSync — Discovery & Roadmapping",
        "badge": "Product Strategy · Discovery & Roadmaps",
        "h1": "What is worth building, and why it wins.",
        "claim": "Thesis validation, de-risked product roadmaps.",
        "sub": "Building software without clear product strategy is the fastest way to burn runway on features nobody uses. We help tech founders and leadership teams clarify market positioning, define feature prioritization, and architect products that win.",
        "what_title": "Strategy grounded in commercial reality.",
        "what_desc": "We evaluate market competition, user workflows, technical feasibility, and business economics to map out realistic quarterly product roadmaps that maximize ROI.",
        "pillars": [
            ("Commercial Feasibility Modeling", "Validating market demand, user willingness to pay, and unit economics before coding."),
            ("Hypothesis-Driven Feature Prioritization", "Ranking features using RICE frameworks to ensure high-impact capabilities ship first."),
            ("Clear Product OKRs & North Stars", "Defining measurable product metrics (activation, retention, LTV) tied to engineering sprints.")
        ],
        "triggers_title": "When product roadmaps drift without direction.",
        "triggers_desc": "If your team is building features just because competitors have them or customer churn is rising, strategic discovery is essential.",
        "triggers": [
            "Your engineering team is shipping features every sprint, but user retention isn't improving.",
            "Stakeholders have competing visions for the product and can't agree on priority.",
            "You are entering a crowded market and need a clear, defensible product differentiator.",
            "You have 50 feature requests and need a structured framework to decide what to build next."
        ],
        "approach_title": "De-risking the product roadmap.",
        "steps": [
            ("Diagnose", "Stakeholder & market audit", "Reviewing customer feedback, churn data, competitor offerings, and technical constraints."),
            ("Synthesize", "Opportunity mapping", "Identifying unmet user needs and market gaps with high commercial upside."),
            ("Prioritize", "RICE roadmap framework", "Scoring potential initiatives by Reach, Impact, Confidence, and Effort."),
            ("Execute", "Sprint-ready specs", "Drafting user stories, acceptance criteria, and KPI dashboards for engineering handoff.")
        ],
        "deliverables_title": "Strategic product blueprints.",
        "deliverables": [
            ("Product Strategy Blueprint", "Comprehensive document detailing market positioning, value propositions, and core loops."),
            ("Prioritized Quarterly Roadmap", "Phased delivery schedule ranking features from MVP core to growth accelerators."),
            ("Competitor Matrix & Teardown", "Visual feature-by-feature benchmarking against key market competitors."),
            ("User Persona & Journey Maps", "Actionable customer workflows highlighting high-friction drop-off points.")
        ],
        "stat_title": "Strategic efficiency metric.",
        "stat_num": "3.8x",
        "stat_label": "higher feature adoption rate achieved when features are validated through user discovery prior to development",
        "stat_source": "Product Strategy Benchmark Report",
        "projects": [
            ("BantuZel Strategy", "assets/bantuzel/cover.png", "projects/bantuzel.html", "Strategy · Social", "Market discovery, pan-African product roadmap, and engagement loop modeling."),
            ("Academia Strategy", "assets/Academia-cover.png", "projects/academia.html", "Strategy · EdTech", "Curriculum structure discovery, student retention roadmap, and cohort analytics."),
            ("Auto Claims Strategy", "assets/ui-auto-claims.webp", "assets/ui-auto-claims.webp", "Strategy · InsurTech", "Claims funnel friction analysis and 3-minute policyholder self-service architecture."),
            ("Ridemelo Strategy", "assets/ridemelo-cover.png", "projects/ridemelo.html", "Strategy · Mobility", "Driver onboarding optimization, fare mechanics, and dispatch telemetry planning.")
        ],
        "quote": "LulaSync helped us cut through the noise and prioritize the 3 features that actually mattered to our enterprise buyers. We closed our biggest deal two months later.",
        "quote_author": "CEO & Founder",
        "quote_company": "B2B Tech Startup",
        "faqs": [
            ("How long does a product strategy sprint take?", "A focused strategy and discovery engagement typically spans 2 to 4 weeks depending on stakeholder scope.")
        ]
    },
    {
        "filename": "ui-engineering.html",
        "title": "UI Engineering | LulaSync — Production Frontend Development",
        "badge": "UI Engineering · React, Next.js & TypeScript",
        "h1": "Engineering that scales and stays up.",
        "claim": "Pixel-perfect React, TypeScript & sub-second performance.",
        "sub": "Design only matters if it is built properly in code. We bridge the gap between Figma and production with clean, maintainable, pixel-perfect frontend engineering in React, Next.js, TypeScript, and Angular. Clean component architectures, 60fps animations, and zero UI regressions.",
        "what_title": "Frontend built like high-performance software.",
        "what_desc": "We write clean, modular, accessible TypeScript code with automated tests and zero layout shift. We build complex state machines, real-time WebSocket charts, and responsive data tables.",
        "pillars": [
            ("Strict TypeScript & Component Modularity", "End-to-end type safety, reusable hooks, and predictable state management."),
            ("Sub-Second Core Web Vitals", "Zero CLS, sub-second LCP, and optimized server-side rendering on Next.js/Vercel."),
            ("Pixel-Perfect Figma Fidelity", "Exact typographic hierarchy, spacing, micro-animations, and responsive breakpoints.")
        ],
        "triggers_title": "When frontend code accumulates technical debt.",
        "triggers_desc": "If your web app feels slow, breaks across different screen sizes, or is difficult to maintain, frontend engineering refactoring is required.",
        "triggers": [
            "Your web application takes 4+ seconds to load, hurting SEO and conversion rates.",
            "The production frontend looks visibly different from the approved Figma designs.",
            "Adding a new frontend feature introduces regressions and breaks unrelated pages.",
            "Your team lacks dedicated frontend specialists to build complex interactive UI widgets."
        ],
        "approach_title": "Production-grade frontend development.",
        "steps": [
            ("Scaffold", "Architecture & token setup", "Setting up TypeScript, Tailwind/CSS variables, ESLint, and component directory trees."),
            ("Build", "Component implementation", "Building responsive, accessible React/Next.js components matching Figma specs 1:1."),
            ("Connect", "API & state integration", "Hooking up React Query, GraphQL clients, WebSocket streams, and form validations."),
            ("Harden", "Performance & test audits", "Running Lighthouse audits, bundle analyzer optimizations, and cross-browser QA.")
        ],
        "deliverables_title": "Production-ready frontend codebases.",
        "deliverables": [
            ("Production React/Next.js Codebase", "Clean, linted, documented TypeScript repository ready for Vercel/AWS deployment."),
            ("Integrated API Client", "Type-safe REST/GraphQL data fetching hooks with automated optimistic updates."),
            ("Storybook Component Suite", "Isolated component sandbox showcasing all UI states, edge cases, and themes."),
            ("100% Responsive Layouts", "Tested across iOS Safari, Android Chrome, MacOS, Windows, and ultra-wide displays.")
        ],
        "stat_title": "Frontend performance benchmark.",
        "stat_num": "99/100",
        "stat_label": "average Google Lighthouse performance, accessibility, and SEO score achieved on all production frontends built by LulaSync",
        "stat_source": "Lighthouse Performance Standard",
        "projects": [
            ("OnliPay Checkout", "assets/new-cover.png", "projects/onlipay.html", "Frontend · FinTech", "Sub-second React payment checkout with real-time field validation and PayShap support."),
            ("Academia Frontend", "assets/Academia-cover.png", "projects/academia.html", "Frontend · EdTech", "Interactive lecture player, assignment upload queue, and live chat widget in Next.js."),
            ("Hospital Command Console", "assets/ui-hospital-command.webp", "assets/ui-hospital-command.webp", "Frontend · Healthtech", "WebSocket-connected bed status dashboard with real-time emergency triage updates."),
            ("Project Orchestrator", "assets/ui-project-orchestrator.webp", "assets/ui-project-orchestrator.webp", "Frontend · Enterprise", "Dense virtualized table components handling 10,000+ data rows with 60fps scrolling.")
        ],
        "quote": "LulaSync's frontend code was the cleanest our engineering team had ever inherited. They matched the Figma designs to the exact pixel.",
        "quote_author": "Head of Engineering",
        "quote_company": "Fintech Scaleup",
        "faqs": [
            ("Do you integrate with our backend API?", "Yes. We connect to your existing GraphQL or REST backend endpoints, handle authentication tokens, and implement caching.")
        ]
    },
    {
        "filename": "web-design.html",
        "title": "Web Design | LulaSync — High-Converting Marketing Sites",
        "badge": "Web Design · High-Converting Websites",
        "h1": "Websites built to tell your story and convert.",
        "claim": "Editorial typography, fast load times & storytelling.",
        "sub": "Your website is your company's primary salesperson. It needs to communicate your value proposition instantly, establish unshakeable credibility, and guide visitors smoothly toward booking a call or signing up. We design and build bespoke, high-converting marketing sites.",
        "what_title": "Editorial design with conversion science.",
        "what_desc": "We blend striking editorial typography, subtle interactive animations, clear social proof, and lightning-fast page speeds to maximize visitor conversion rates.",
        "pillars": [
            ("High-Conversion Layouts", "Clear value propositions above the fold, benefit-driven sections, and frictionless booking CTAs."),
            ("Editorial Typography & Motion", "Polished scroll animations, hover states, and bespoke visual assets that command authority."),
            ("SEO & Technical Performance", "Structured JSON-LD schema, perfect OpenGraph tags, and sub-second loading.")
        ],
        "triggers_title": "When your website fails to generate leads.",
        "triggers_desc": "If your marketing website has high bounce rates, low lead conversion, or fails to communicate what you do, a redesign is critical.",
        "triggers": [
            "Visitors spend under 15 seconds on your homepage before bouncing.",
            "Prospective clients misunderstand your core offering and ask basic questions on sales calls.",
            "Your website looks generic and blends in with every other template in your industry.",
            "Updating copy or publishing a case study requires wrestling with clunky legacy CMS tools."
        ],
        "approach_title": "Engineered for maximum lead generation.",
        "steps": [
            ("Position", "Messaging & copy architecture", "Distilling your core value proposition into punchy headlines and clear benefits."),
            ("Design", "Bespoke editorial layouts", "Crafting unique visual layouts, custom vector illustrations, and high-impact hero sections."),
            ("Animate", "Subtle motion & polish", "Adding smooth scroll triggers, interactive hover states, and video overlays."),
            ("Launch", "SEO & conversion setup", "Configuring analytics, metadata, Formspree integrations, and custom domains.")
        ],
        "deliverables_title": "High-impact web assets.",
        "deliverables": [
            ("Bespoke Marketing Website", "Custom-designed responsive site ready for production launch."),
            ("Interactive Product Showreels", "Engaging interactive sections showcasing your product features in action."),
            ("Lead Capture & Booking Hub", "Integrated Calendly and contact forms with automated email notifications."),
            ("Technical SEO & OpenGraph Kit", "Complete metadata, sitemaps, social preview cards, and schema tags.")
        ],
        "stat_title": "Conversion uplift metric.",
        "stat_num": "+52%",
        "stat_label": "average increase in qualified lead inbound inquiries achieved within 60 days of launching a redesigned marketing site",
        "stat_source": "B2B Website Conversion Audit",
        "projects": [
            ("SNB Consultancy", "assets/portfolio/snb.png", "https://www.snbconsultancy.co.za/", "Web Design · Corporate", "Executive business advisory website with structured capability pillars."),
            ("Nerdma Agency", "assets/portfolio/nerdma.png", "https://www.nerdma.co.za/", "Web Design · Agency", "Bold digital agency marketing portal with interactive portfolio grid."),
            ("AddMore Digital", "assets/addmore.png", "https://addmoredigital.co.za/", "Web Design · Growth", "Digital performance agency landing page with conversion funnels."),
            ("Wandies Place", "assets/wandies-cover.svg", "https://wandies.vercel.app/", "Web Design · Hospitality", "Historic Soweto landmark website with table bookings and photo galleries.")
        ],
        "quote": "Our inbound lead conversion jumped significantly after launching the new site designed by LulaSync. It immediately elevated our brand.",
        "quote_author": "Managing Director",
        "quote_company": "Corporate Consultancy",
        "faqs": [
            ("Do you handle the copywriting as well?", "Yes. We help structure your value propositions, section headlines, and micro-copy for maximum clarity and conversion.")
        ]
    },
    {
        "filename": "support-and-maintenance.html",
        "title": "Support & Maintenance | LulaSync — Product SLA & Hardening",
        "badge": "Support & Maintenance · Standing Retainers",
        "h1": "Run it like it matters.",
        "claim": "Guaranteed SLA uptime, standing design & code sprints.",
        "sub": "Launching software is only day one. Live applications require ongoing sprint capacity to patch security vulnerabilities, adapt to OS updates, optimize conversion funnels, and ship continuous feature improvements. We provide standing monthly retainers that keep your products fast, secure, and evolving.",
        "what_title": "Continuous product refinement.",
        "what_desc": "We act as your dedicated product, design, and frontend team on a standing monthly retainer — handling bug fixes, feature iterations, performance tuning, and design system updates.",
        "pillars": [
            ("Guaranteed Response SLA", "Dedicated ticket queue with prioritized response and resolution timeframes."),
            ("Continuous Performance Tuning", "Ongoing Lighthouse audits, dependency updates, and security patches."),
            ("Standing Sprint Capacity", "Predictable monthly hours for design enhancements and new feature rollouts.")
        ],
        "triggers_title": "When products stall after launch.",
        "triggers_desc": "Without standing engineering and design support, minor bugs accumulate into technical debt that frustrates users.",
        "triggers": [
            "Your product has unresolved UI bugs because your internal team is busy with backend firefighting.",
            "Third-party API changes or browser updates broke your live checkout flow.",
            "You need ongoing design sprint support without the overhead of hiring full-time employees.",
            "Your database or frontend load times are degrading as user volume grows."
        ],
        "approach_title": "Standing product vigilance.",
        "steps": [
            ("Monitor", "Continuous telemetry", "Monitoring frontend error logs, load times, and conversion funnel anomalies."),
            ("Prioritize", "Bi-weekly sprint backlog", "Ranking feature requests, maintenance tasks, and UI polish items."),
            ("Execute", "Sprint deployment", "Designing, coding, and testing updates in isolated staging environments."),
            ("Review", "Monthly performance report", "Reviewing product uptime, speed metrics, and completed roadmap milestones.")
        ],
        "deliverables_title": "Ongoing product support assets.",
        "deliverables": [
            ("Dedicated Monthly Sprint Hours", "Guaranteed designer and frontend engineer hours reserved for your roadmap."),
            ("Emergency Hotfix Channel", "Priority Slack channel for critical production bugs and incident resolution."),
            ("Dependency & Security Upgrades", "Regular updates to React, Next.js, and third-party packages to prevent exploits."),
            ("Monthly Analytics & UX Audits", "Actionable monthly teardowns identifying new conversion opportunities.")
        ],
        "stat_title": "Uptime & reliability standard.",
        "stat_num": "99.98%",
        "stat_label": "average production application uptime maintained across all client retainers managed by LulaSync",
        "stat_source": "LulaSync SLA Uptime Metrics",
        "projects": [
            ("SecureLife (Stance Insurance)", "assets/stance-cover.webp", "https://www.stanceinsurance.co.za/", "Maintenance · InsurTech", "Ongoing portal maintenance, policyholder self-service updates, and security hardening."),
            ("BantuZel Operations", "assets/bantuzel/cover.png", "projects/bantuzel.html", "Maintenance · Social", "Continuous feature rollouts, feed performance optimization, and moderation tools."),
            ("Academia Platform Support", "assets/Academia-cover.png", "projects/academia.html", "Maintenance · EdTech", "Semester onboarding preparation, grading tool patches, and LMS uptime monitoring."),
            ("Ridemelo Mobility Ops", "assets/ridemelo-cover.png", "projects/ridemelo.html", "Maintenance · Mobility", "Driver app maintenance, GPS accuracy calibration, and payment rail updates.")
        ],
        "quote": "Having LulaSync on retainer gives our executive team total peace of mind. Bugs get fixed before our customers even notice.",
        "quote_author": "Chief Operating Officer",
        "quote_company": "InsurTech Group",
        "faqs": [
            ("What is included in the monthly retainer?", "Each retainer includes a dedicated block of design and engineering hours for feature updates, security patches, and emergency hotfixes.")
        ]
    },
    {
        "filename": "business-automation.html",
        "title": "Business Automation | LulaSync — Operations & Workflow Systems",
        "badge": "Business Automation · Webhooks & Workflows",
        "h1": "Automate the repetitive. Scale the valuable.",
        "claim": "Zero-error webhooks, CRM sync & automated pipelines.",
        "sub": "When human operators spend hours copying data between spreadsheets, email inboxes, and CRMs, mistakes happen and growth stalls. We design and build automated operational workflows that connect your software stack, sync customer records in real time, and eliminate manual data entry.",
        "what_title": "Operational machinery that runs 24/7.",
        "what_desc": "We engineer webhook pipelines, automated invoicing systems, WhatsApp bot integrations, and CRM synchronization workflows that turn manual multi-hour tasks into instant background processes.",
        "pillars": [
            ("Real-Time Event Triggers", "Instant webhook synchronization between your frontend, Stripe/PayFast, and accounting tools."),
            ("Automated Customer Journeys", "Transactional email sequences, SMS alerts, and WhatsApp appointment confirmations."),
            ("Zero-Error Data Reconciliation", "Automated daily ledger balancing and lead deduplication across your stack.")
        ],
        "triggers_title": "When manual busywork limits company growth.",
        "triggers_desc": "If your staff spends more time copying data between tools than serving customers, automation is urgently needed.",
        "triggers": [
            "Staff spends 10+ hours a week manually entering client data into disconnected software systems.",
            "Customer inquiries get lost in unassigned email inboxes, causing lost sales.",
            "Invoices and payment confirmations are sent out manually with frequent calculation mistakes.",
            "Your sales team lacks real-time notifications when high-value leads submit demo requests."
        ],
        "approach_title": "Connecting your operational stack.",
        "steps": [
            ("Audit", "Manual workflow mapping", "Documenting every manual handoff, copy-paste step, and communication delay in your business."),
            ("Design", "Automated architecture", "Designing webhook contracts, data transformation schemas, and failure fallback logic."),
            ("Build", "Integration pipelines", "Building custom Zapier/Make/Custom Node.js webhook microservices."),
            ("Verify", "End-to-end load testing", "Simulating edge cases, network timeouts, and duplicate payload triggers.")
        ],
        "deliverables_title": "Automated operations systems.",
        "deliverables": [
            ("Custom Webhook Integration Engine", "Reliable serverless microservices syncing data across your APIs with retry logic."),
            ("Automated CRM & Lead Router", "Instant lead scoring, Slack notifications, and automated SDR calendar assignments."),
            ("WhatsApp & SMS Notification Bot", "Automated appointment reminders, order tracking, and customer triage bots."),
            ("Operational Telemetry Dashboard", "Visual dashboard monitoring webhook success rates and automated task volume.")
        ],
        "stat_title": "Operational throughput acceleration.",
        "stat_num": "85%",
        "stat_label": "reduction in manual operational processing hours achieved after deploying automated customer onboarding and webhook pipelines",
        "stat_source": "Operations Automation Efficiency Audit",
        "projects": [
            ("Clinic WhatsApp Automation", "assets/ui/ui-clinic-whatsapp.svg", "assets/ui/ui-clinic-whatsapp.svg", "Automation · Healthtech", "Automated patient appointment booking and triage chat workflow over WhatsApp."),
            ("Auto Claims Dispatcher", "assets/ui-auto-claims.webp", "assets/ui-auto-claims.webp", "Automation · InsurTech", "Instant webhook dispatch from mobile claim submission directly to emergency roadside tow trucks."),
            ("Sales Pipeline Pro", "assets/ui-sales-pipeline.webp", "assets/ui-sales-pipeline.webp", "Automation · CRM", "Automated lead win-probability scoring, email follow-up triggers, and contract generation."),
            ("PayShap Merchant Sync", "assets/ui/ui-payshap-merchant.svg", "assets/ui/ui-payshap-merchant.svg", "Automation · FinTech", "Real-time bank payment webhook reconciliation and instant merchant SMS settlements.")
        ],
        "quote": "LulaSync's automation pipeline replaced 15 hours of weekly manual invoice entry. It paid for itself in the first month.",
        "quote_author": "Finance & Operations Lead",
        "quote_company": "Regional Retail Distributor",
        "faqs": [
            ("Can you connect our custom internal software to HubSpot/Slack?", "Yes. We build custom API connectors and webhook listeners that bridge proprietary backends with third-party tools.")
        ]
    }
]

def render_service_page(svc):
    pillars_html = ""
    for i, (title, desc) in enumerate(svc["pillars"], 1):
        pillars_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">0{i} / CORE PILLAR</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    triggers_html = ""
    for trig in svc["triggers"]:
        triggers_html += f"""
        <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-md);padding:24px 28px;display:flex;align-items:flex-start;gap:16px;">
          <span style="color:#ef4444;font-weight:bold;font-size:18px;line-height:1;margin-top:2px;">✕</span>
          <span style="font-size:15px;color:var(--text-muted);line-height:1.55;">{trig}</span>
        </div>
        """

    steps_html = ""
    for step_num, title, desc in svc["steps"]:
        steps_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">{step_num.upper()}</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    deliverables_html = ""
    for i, (title, desc) in enumerate(svc["deliverables"], 1):
        deliverables_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">0{i} / DELIVERABLE</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    projects_html = ""
    for title, img_src, link_href, tag, desc in svc["projects"]:
        img_prefix = "../" if not img_src.startswith("http") else ""
        link_prefix = "../" if not (link_href.startswith("http") or link_href.startswith("#")) else ""
        target_attr = ' target="_blank" rel="noopener"' if link_href.startswith("http") else ''
        projects_html += f"""
        <a href="{link_prefix}{link_href}" class="project-card"{target_attr}>
          <div class="project-card-img-wrap">
            <img src="{img_prefix}{img_src}" alt="{title}" class="project-card-img" />
          </div>
          <div class="project-card-body">
            <div class="project-card-tag">{tag}</div>
            <h3 class="project-card-title">{title}</h3>
            <p class="project-card-desc">{desc}</p>
            <div class="project-card-foot">
              <span>View Case &amp; Details</span>
              <span>→</span>
            </div>
          </div>
        </a>
        """

    faqs_html = ""
    for q, a in svc["faqs"]:
        faqs_html += f"""
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>{q}</span>
            <svg class="faq-icon" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5"/></svg>
          </div>
          <div class="faq-answer">{a}</div>
        </div>
        """

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  {TOUCH_COMMON_HEAD}
  <title>{svc["title"]}</title>
  <meta name="description" content="{svc["sub"][:155]}" />
  <link href="../assets/lulasync-favicon.svg" rel="icon" type="image/svg+xml" />
  {COSMOS_NAV_CSS}
  {TOUCH_STYLES}
</head>
<body>
  <div class="page-wrapper">
    <nav data-wf--navbar--menu-state="menu-closed-default" class="navbar">
      <div class="navbar_content">
        <div animation="navbar-content" class="padding-global is-tiny">
          {get_navbar_component_html(prefix="../")}
        </div>
      </div>
    </nav>
    
    <main>
      <!-- HERO -->
      <section class="page-section" style="padding-top:72px;">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>{svc["badge"]}</div>
          <div style="max-width:1040px;">
            <h1 class="section-heading-huge">{svc["h1"]}</h1>
            <div style="display:inline-block;padding:4px 14px;border-radius:var(--radius-full);background:rgba(255,255,255,0.06);font-size:13px;font-weight:600;color:#c4b5fd;margin-bottom:20px;">
              {svc["claim"]}
            </div>
            <p class="section-sub">{svc["sub"]}</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:32px;">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book a Scoping Call</a>
              <a href="../projects.html" class="btn-secondary">View Works</a>
            </div>
          </div>
        </div>
      </section>

      <!-- WHAT IT IS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Overview</div>
          <h2 class="section-heading">{svc["what_title"]}</h2>
          <p class="section-sub">{svc["what_desc"]}</p>
          <div class="card-grid-3">
            {pillars_html}
          </div>
        </div>
      </section>

      <!-- WHO IT'S FOR -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Qualifying Triggers</div>
          <h2 class="section-heading">{svc["triggers_title"]}</h2>
          <p class="section-sub">{svc["triggers_desc"]}</p>
          <div class="card-grid-2">
            {triggers_html}
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Methodology</div>
          <h2 class="section-heading">{svc["approach_title"]}</h2>
          <div class="card-grid-2">
            {steps_html}
          </div>
        </div>
      </section>

      <!-- WHAT YOU GET -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Deliverables</div>
          <h2 class="section-heading">{svc["deliverables_title"]}</h2>
          <div class="card-grid-2">
            {deliverables_html}
          </div>
        </div>
      </section>

      <!-- DATA CASE -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="touch-card" style="padding:48px;background:linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(21,22,24,1) 100%);border:1px solid rgba(255,255,255,0.1);">
            <div class="section-badge" style="margin-bottom:16px;"><span class="badge-dot"></span>Industry Benchmark</div>
            <h3 style="font-size:24px;font-weight:700;color:#fff;margin-bottom:24px;">{svc["stat_title"]}</h3>
            <div class="stat-big" style="color:#fff;">{svc["stat_num"]}</div>
            <p style="font-size:18px;color:var(--text-muted);max-width:760px;line-height:1.6;margin:0 0 18px;">{svc["stat_label"]}</p>
            <div style="font-size:12px;font-weight:700;color:var(--accent);letter-spacing:0.08em;text-transform:uppercase;">Source: {svc["stat_source"]}</div>
          </div>
        </div>
      </section>

      <!-- PROOF PROJECTS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Selected Proof Cases</div>
          <h2 class="section-heading">Work shipped in this discipline.</h2>
          <p class="section-sub">Production systems, platforms, and client outcomes delivered by LulaSync.</p>
          <div class="card-grid-2">
            {projects_html}
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL QUOTE -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="quote-band">
            <div class="section-badge" style="margin-bottom:20px;"><span class="badge-dot"></span>Client Endorsement</div>
            <div class="quote-text">“{svc["quote"]}”</div>
            <div class="quote-author">
              <div>
                <div class="quote-author-name">{svc["quote_author"]}</div>
                <div class="quote-author-title">{svc["quote_company"]}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ ACCORDION -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Common Questions</div>
          <h2 class="section-heading">Asked before almost every engagement.</h2>
          <div class="faq-accordion">
            {faqs_html}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="cta-band">
            <h2>Ready to scope your project?</h2>
            <p>Walk us through how your operation runs today. We'll map the system it needs and scope the thinnest slice that gets into production fast.</p>
            <div class="cta-btn-row">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book a Scoping Call</a>
              <button onclick="openContactForm()" class="btn-secondary">Send Brief</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    {TOUCH_FOOTER.replace("{prefix}", "../")}
  </div>

  {COSMOS_NAV_JS}
  {TOUCH_PAGE_SCRIPT}
</body>
</html>
"""
    return html

for s in SERVICES_CONFIG:
    path = os.path.join("services", s["filename"])
    content = render_service_page(s)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {path}")

# Aliases
aliases = [
    ("services/product-design.html", "services/product-uiux-design.html"),
    ("services/product-strategy.html", "services/strategy.html"),
    ("services/full-stack-development.html", "services/ui-engineering.html")
]
for dst, src in aliases:
    with open(src, "r", encoding="utf-8") as sf:
        c = sf.read()
    with open(dst, "w", encoding="utf-8") as df:
        df.write(c)
    print(f"Created alias {dst} -> {src}")

print("All service pages generated successfully with TouchFoundry fidelity.")
