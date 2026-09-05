import os
from tools.rebuild_core_cosmos import COSMOS_NAV_CSS, COSMOS_NAV_JS, get_navbar_component_html
from tools.touch_common import TOUCH_COMMON_HEAD, TOUCH_STYLES, TOUCH_FOOTER, TOUCH_PAGE_SCRIPT

INDUSTRIES_CONFIG = [
    {
        "filename": "fintech.html",
        "title": "FinTech & Financial Services | LulaSync — Digital Product Studio",
        "badge": "Financial Services · Banking, InsurTech & Payments",
        "h1": "Zero-friction transactions. Total compliance.",
        "claim": "Sub-second payments, automated claims & KYC onboarding.",
        "sub": "Modern financial products must bridge complex regulatory compliance with delightful, zero-friction user experiences. We design and build banking portals, instant payment gateways, automated insurance claim engines, and investment dashboards that convert.",
        "what_title": "Fintech engineered for trust and speed.",
        "what_desc": "Trust in fintech is won or lost in seconds. We craft high-clarity interfaces with transparent fee breakdowns, biometric verification, instant bank settlement rails, and automated compliance flows.",
        "pillars": [
            ("Instant PayShap & Card Rails", "Frictionless checkout interfaces with sub-second settlement confirmation."),
            ("Biometric & Smart KYC Verification", "Streamlined document capture and face match verification with 90%+ pass rates."),
            ("Real-Time Telemetry & Ledgers", "Clear visual transaction breakdowns, money pots, and automated export tools.")
        ],
        "triggers_title": "When fintech interfaces lose customer trust.",
        "triggers_desc": "High drop-off rates during account opening or confusing transaction states directly destroy fintech customer acquisition economics.",
        "triggers": [
            "Users drop out during multi-step FICA/KYC identity verification.",
            "Payment flows lack instant confirmation feedback, leading to duplicate customer charges.",
            "Complex investment or insurance policy terms confuse customers and stall sales conversion.",
            "Legacy core banking interfaces are too slow for modern smartphone users."
        ],
        "approach_title": "Architecting resilient financial products.",
        "steps": [
            ("Audit", "Friction & compliance mapping", "Analyzing KYC drop-offs, payment rail latency, and regulatory requirements."),
            ("Prototype", "Micro-interaction testing", "Simulating biometric authorizations, card management, and money transfers."),
            ("Engineer", "Secure frontend integration", "Connecting tokenized PCI-DSS payment gateways and banking APIs."),
            ("Audit", "Security & penetration audit", "Auditing session management, data encryption, and responsive accessibility.")
        ],
        "deliverables_title": "Fintech product deliverables.",
        "deliverables": [
            ("High-Converting KYC Funnel", "Frictionless camera onboarding with automatic document crop and validation."),
            ("Card & Money Management Portal", "Virtual card issuance, spending limits, and real-time transaction feeds."),
            ("Automated Claims Dispatch", "Policyholder self-service claims capture with instant fraud telemetry."),
            ("Design Token Kit for FinTech", "Accessible WCAG AAA color systems and high-density financial data tables.")
        ],
        "stat_title": "Fintech conversion impact.",
        "stat_num": "+74%",
        "stat_label": "increase in completed KYC registrations achieved by redesigning mobile onboarding with automated camera edge detection",
        "stat_source": "Fintech UX & Compliance Report",
        "projects": [
            ("Tyme Bank Redesign", "assets/ui-neo-banking.webp", "../assets/ui-neo-banking.webp", "FinTech · Core Banking", "Reimagined digital banking app with real-time money pots, virtual cards, and budgeting."),
            ("Auto Claims", "assets/ui-auto-claims.webp", "../assets/ui-auto-claims.webp", "InsurTech · Core Platform", "End-to-end motor claim submission with instant roadside dispatch and telemetry."),
            ("OnliPay Checkout", "assets/new-cover.png", "../projects/onlipay.html", "FinTech · Payments", "Sub-second React payment checkout with real-time field validation and PayShap support."),
            ("SecureLife (Stance Insurance)", "assets/stance-cover.webp", "https://www.stanceinsurance.co.za/", "InsurTech · Portal", "Policyholder self-service portal, life insurance quote calculators, and automated underwriting.")
        ],
        "quote": "LulaSync redesigned our customer onboarding flow, and our drop-off rate dropped from 42% down to 11% in the first sprint.",
        "quote_author": "Chief Product Officer",
        "quote_company": "Pan-African FinTech Scaleup",
        "faqs": [
            ("How do you ensure PCI-DSS and banking security compliance?", "We design and engineer client-side architectures that never touch sensitive plaintext PAN data, leveraging tokenized iframes and encrypted API payloads."),
            ("Can you integrate with PayShap and local African payment gateways?", "Yes. We have built integrations with PayFast, Peach Payments, Ozow, Stitch, and direct PayShap rails.")
        ]
    },
    {
        "filename": "healthtech.html",
        "title": "Healthtech & Clinical Systems | LulaSync — Digital Product Studio",
        "badge": "Healthtech · Clinical Systems & Telehealth",
        "h1": "Clarity where human lives are on the line.",
        "claim": "Zero-error triage, real-time ICU beds & patient portals.",
        "sub": "Clinical software demands a completely different design standard. In emergency rooms, ICU wards, and telemedicine consultations, confusing UI causes medical errors and operator burnout. We build high-clarity clinical command centers, electronic health records, and patient companion apps.",
        "what_title": "Clinical interfaces built for extreme focus.",
        "what_desc": "We design high-contrast, keyboard-navigable healthcare software that minimizes cognitive fatigue during 12-hour nursing and doctor shifts, while keeping patient health records strictly confidential.",
        "pillars": [
            ("High-Contrast Triage Ergonomics", "Instant vital sign status indicators with color-coded severity alarms."),
            ("POPIA & HIPAA Data Governance", "Role-based access control, masked patient records, and audit logging."),
            ("Zero-Latency Offline Sync", "Clinician note recording that never loses data during hospital Wi-Fi dropouts.")
        ],
        "triggers_title": "When clinical software causes operational friction.",
        "triggers_desc": "If doctors and nurses spend more time fighting legacy software than treating patients, a modern clinical UI is critical.",
        "triggers": [
            "Doctors spend 2+ hours per shift manually transcribing notes into clunky legacy portals.",
            "Emergency triage queues lack real-time bed availability indicators across hospital wards.",
            "Patients miss follow-up consultations because booking and telemedicine tools are difficult to use.",
            "Clinical dashboards are cluttered with 50+ unranked metrics, causing alarm fatigue."
        ],
        "approach_title": "Designing for clinical high-stakes environments.",
        "steps": [
            ("Shadow", "Ward & clinical workflow shadowing", "Observing triage nurses, doctors, and hospital administrators in live environments."),
            ("Hierarchy", "Critical data prioritization", "Organizing vital signs, allergies, and medication history into high-visibility HUDs."),
            ("Prototype", "Stress & error testing", "Validating UI under simulated emergency conditions with timed user trials."),
            ("Deploy", "Secure EHR integration", "Connecting to FHIR/HL7 hospital information backends with real-time WebSockets.")
        ],
        "deliverables_title": "Healthcare product deliverables.",
        "deliverables": [
            ("Clinical Command Center HUD", "Real-time hospital ward overview with bed occupancy, triage scores, and nurse alerts."),
            ("Telemedicine Patient Portal", "Frictionless video consultation room with integrated prescription fulfillment."),
            ("Offline EHR Mobile App", "Tablet app for bedside charting with automatic background synchronization."),
            ("Clinical Iconography & UI Kit", "Accessible, high-contrast healthcare design components and telemetry widgets.")
        ],
        "stat_title": "Clinical speed & safety metric.",
        "stat_num": "4.1x",
        "stat_label": "faster emergency triage intake recorded after deploying simplified clinical command center interfaces",
        "stat_source": "Hospital Operations & Digital Health Study",
        "projects": [
            ("Hospital Command", "assets/ui-hospital-command.webp", "../assets/ui-hospital-command.webp", "Healthtech · Command Center", "Real-time clinical ward orchestration, emergency triage queue and ICU bed management."),
            ("Clinic WhatsApp Automation", "assets/ui/ui-clinic-whatsapp.svg", "../assets/ui/ui-clinic-whatsapp.svg", "Healthtech · Telehealth", "Automated patient appointment booking and triage chat workflow over WhatsApp."),
            ("MedVitals Companion", "assets/ui/ui-medvitals.svg", "../assets/ui/ui-medvitals.svg", "Healthtech · Patient App", "Daily chronic medication tracker with Bluetooth glucose and blood pressure sync."),
            ("CareCoord Telemedicine", "assets/ui/ui-carecoord.svg", "../assets/ui/ui-carecoord.svg", "Healthtech · Clinical Workflow", "Multi-disciplinary team patient handover board and digital prescription portal.")
        ],
        "quote": "The command center interface LulaSync designed gave our ER staff instant visibility across ICU beds and drastically reduced triage wait times.",
        "quote_author": "Clinical Operations Director",
        "quote_company": "Regional Hospital Network",
        "faqs": [
            ("Is the software compliant with healthcare privacy laws?", "Yes. All interfaces and data architectures are designed to comply strictly with POPIA and HIPAA patient data privacy standards."),
            ("Can the interface run on hospital tablets and touchscreens?", "Yes. We design touch-optimized responsive interfaces with 48px+ touch targets for rapid bedside charting.")
        ]
    },
    {
        "filename": "edtech.html",
        "title": "EdTech & Learning Platforms | LulaSync — Digital Product Studio",
        "badge": "EdTech · LMS, Study Apps & Virtual Classrooms",
        "h1": "Keep learners engaged. Drive completion.",
        "claim": "Adaptive learning paths, offline sync & educator consoles.",
        "sub": "Online education struggles with low completion rates and learner disengagement. We design and build modern learning management systems, study companion apps, and interactive educator consoles that make education addictive, accessible, and measurable.",
        "what_title": "Learning platforms built for active retention.",
        "what_desc": "We replace passive video dumps with interactive bite-sized learning loops, spaced repetition flashcards, live lecture Q&A, and real-time student mastery dashboards.",
        "pillars": [
            ("Micro-Learning & Spaced Repetition", "Bite-sized modules and smart review streaks that boost long-term memory retention."),
            ("Low-Bandwidth Video Delivery", "Adaptive streaming and offline lesson downloads for students with limited mobile data."),
            ("Educator Mastery Telemetry", "Real-time cohort progress trackers and automated assignment grading queues.")
        ],
        "triggers_title": "When learning platforms suffer high dropout rates.",
        "triggers_desc": "If students abandon courses after lesson three or instructors struggle with clunky LMS grading tools, an EdTech redesign is needed.",
        "triggers": [
            "Course completion rates are under 15% because students lose motivation.",
            "Students in low-connectivity areas cannot access heavy video lessons.",
            "Educators spend hours wrestling with dated LMS grading and attendance portals.",
            "Your learning app lacks interactive gamification, progress streaks, and social accountability."
        ],
        "approach_title": "Engineering addictive learning journeys.",
        "steps": [
            ("Pedagogy", "Curriculum structure mapping", "Breaking complex syllabi into digestible modular learning units and checkpoints."),
            ("Gamify", "Streak & reward mechanics", "Designing dopamine-positive progress meters, achievement badges, and review loops."),
            ("Build", "Responsive LMS frontend", "Engineering fast Next.js learning portals with video players, quizzes, and code runners."),
            ("Optimize", "Bandwidth & offline mode", "Implementing smart asset compression and Service Worker offline storage.")
        ],
        "deliverables_title": "EdTech product deliverables.",
        "deliverables": [
            ("Interactive Student LMS", "Responsive web portal with video lessons, rich markdown notes, and instant quizzes."),
            ("Mobile Study Companion App", "Native/hybrid mobile app with offline downloads, flashcards, and push notifications."),
            ("Educator Grading Console", "Fast batch-grading interface with rubric scoring, audio feedback, and student analytics."),
            ("Gamification Asset Library", "Custom badge illustrations, progress animations, and level-up micro-interactions.")
        ],
        "stat_title": "Learner engagement benchmark.",
        "stat_num": "3.6x",
        "stat_label": "higher course completion rate achieved by introducing bite-sized micro-lessons and daily retention streaks",
        "stat_source": "Global EdTech Engagement & Retention Study",
        "projects": [
            ("Academia", "assets/Academia-cover.png", "../projects/academia.html", "EdTech · LMS Platform", "Responsive education portal with lecture streaming, assignment submission, and grading."),
            ("Study Companion", "assets/ui-study-companion.svg", "../assets/ui-study-companion.svg", "EdTech · Mobile App", "Adaptive flashcards, offline video playback, and push-notified revision streaks."),
            ("EduTrack Console", "assets/ui/ui-edutrack.svg", "../assets/ui/ui-edutrack.svg", "EdTech · Educator Tool", "Cohort velocity analytics, automated quiz scoring, and student risk-of-drop alerts."),
            ("CodeMentor Interactive", "assets/ui/ui-codementor.svg", "../assets/ui/ui-codementor.svg", "EdTech · Coding Academy", "Browser-based interactive coding sandbox with automated test case validation.")
        ],
        "quote": "Academia transformed our remote diploma program. Student course completion increased by 65% in the first semester.",
        "quote_author": "Dean of Digital Learning",
        "quote_company": "Higher Education Institute",
        "faqs": [
            ("Can students use the platform on low-end mobile phones?", "Yes. We optimize every bundle to load instantly on 3G connections and low-memory Android smartphones."),
            ("Does the platform integrate with SCORM and LTI standards?", "Yes. We build LMS frontends that easily connect with Canvas, Moodle, and standard LTI providers.")
        ]
    },
    {
        "filename": "automotive.html",
        "title": "Automotive & Mobility | LulaSync — Digital Product Studio",
        "badge": "Automotive & Mobility · Fleet, Telematics & Marketplaces",
        "h1": "Software engineered for the road.",
        "claim": "Real-time vehicle GPS, fleet dispatch & auto marketplaces.",
        "sub": "Connected vehicles, ride-hailing networks, and automotive marketplaces require lightning-fast geospatial processing, intuitive in-cabin interfaces, and dependable offline vehicle telemetry. We design and build high-performance mobility applications.",
        "what_title": "Mobility software built for motion.",
        "what_desc": "We design high-legibility interfaces with large touch targets, real-time map clustering, turn-by-turn routing, and instant driver dispatch algorithms.",
        "pillars": [
            ("Sub-Second Vehicle Telemetry", "Real-time GPS tracking, speed telemetry, and geofence boundary alerts."),
            ("Glanceable In-Cabin Ergonomics", "High-contrast nighttime modes and oversized touch zones for driving safety."),
            ("Automated Fleet Logistics", "Intelligent driver route optimization and fuel efficiency analytics.")
        ],
        "triggers_title": "When mobility applications lag behind real-time reality.",
        "triggers_desc": "If driver GPS locations jump around the screen or vehicle marketplace buyers bounce, mobility engineering is required.",
        "triggers": [
            "Driver GPS tracking has 10+ second lag, causing missed pickups and customer confusion.",
            "Vehicle listing platforms load slowly on mobile, frustrating car buyers and sellers.",
            "Fleet operators lack real-time visibility into vehicle maintenance and driver safety scores.",
            "Accident claim reporting requires manual paperwork instead of instant mobile roadside capture."
        ],
        "approach_title": "Building high-performance mobility platforms.",
        "steps": [
            ("Map", "Geospatial telemetry setup", "Configuring Mapbox/Google Maps clusters, WebSocket telemetry feeds, and routing engines."),
            ("Ergonomics", "In-vehicle UI testing", "Designing high-contrast daylight and dark mode interfaces with glanceable data."),
            ("Build", "Driver & fleet applications", "Building responsive dispatch hubs, driver companion apps, and customer trackers."),
            ("Harden", "Offline network resilience", "Implementing location queue buffering for when vehicles enter cellular dead zones.")
        ],
        "deliverables_title": "Automotive product deliverables.",
        "deliverables": [
            ("Real-Time Fleet Dispatch Console", "Interactive map hub monitoring vehicle locations, job status, and driver schedules."),
            ("Driver Mobile Companion App", "Native app with turn-by-turn routing, earnings tracker, and emergency dispatch."),
            ("Automotive Marketplace Portal", "Vehicle search with high-res 360 photo viewer, spec comparisons, and finance calculator."),
            ("Automated Claims Dispatch Hub", "Instant roadside tow truck dispatch connected to mobile incident reports.")
        ],
        "stat_title": "Mobility efficiency metric.",
        "stat_num": "28%",
        "stat_label": "reduction in fleet dispatch idle time achieved through real-time geospatial driver clustering and routing",
        "stat_source": "Urban Mobility & Logistics Benchmark",
        "projects": [
            ("Ridemelo", "assets/ridemelo-cover.png", "../projects/ridemelo.html", "Mobility · Ride-Hailing", "Urban mobility companion app with real-time driver GPS tracking, in-app payments, and route dispatch."),
            ("Auto Claims", "assets/ui-auto-claims.webp", "../assets/ui-auto-claims.webp", "Automotive · InsurTech", "End-to-end motor claim submission with instant roadside dispatch and telemetry."),
            ("SK Finds Automotive", "assets/sk-finds-cover.svg", "https://skautos.vercel.app/", "Automotive · Marketplace", "Verified pre-owned vehicle marketplace with instant financing pre-qualification."),
            ("FleetPulse Telemetry", "assets/ui/ui-fleetpulse.svg", "../assets/ui/ui-fleetpulse.svg", "Automotive · Fleet IoT", "Heavy commercial vehicle tracking, fuel consumption analytics, and maintenance scheduling.")
        ],
        "quote": "LulaSync's real-time mapping engine eliminated our driver dispatch delays completely. Customer satisfaction ratings jumped to 4.8 stars.",
        "quote_author": "Operations Director",
        "quote_company": "National Fleet & Logistics Network",
        "faqs": [
            ("How do you handle GPS tracking in poor cellular reception areas?", "Our mobile apps queue location telemetry locally in SQLite and automatically batch-upload to the cloud the instant a signal is restored.")
        ]
    },
    {
        "filename": "retail.html",
        "title": "Retail & Commerce | LulaSync — Digital Product Studio",
        "badge": "Retail & E-Commerce · Storefronts, POS & Logistics",
        "h1": "Storefronts engineered to convert.",
        "claim": "Sub-second page loads, headless checkout & POS sync.",
        "sub": "In modern e-commerce, every 100ms of latency costs revenue. We design and build lightning-fast headless e-commerce storefronts, omnichannel point-of-sale systems, and franchise inventory hubs that maximize average order value and checkout conversion.",
        "what_title": "Commerce experiences that eliminate friction.",
        "what_desc": "We combine editorial brand storytelling with rapid headless checkout flows, smart product recommendations, one-click Apple Pay/Google Pay checkout, and real-time inventory synchronization.",
        "pillars": [
            ("Sub-Second Headless Storefronts", "Next.js static site generation for instantaneous page loads and flawless SEO."),
            ("Frictionless One-Click Checkout", "Optimized cart funnels supporting Apple Pay, Google Pay, PayFast, and Buy-Now-Pay-Later."),
            ("Omnichannel POS & Inventory Sync", "Real-time stock level synchronization between physical retail stores and digital storefronts.")
        ],
        "triggers_title": "When slow storefronts leak revenue.",
        "triggers_desc": "If your e-commerce cart abandonment rate exceeds 70% or mobile pages take 3+ seconds to load, an e-commerce overhaul is vital.",
        "triggers": [
            "Mobile product pages take 4+ seconds to load on mobile connections, driving bounce rates above 60%.",
            "Customers abandon multi-step checkout forms because payment methods are clumsy.",
            "Physical store inventory doesn't sync with the online store, causing stockouts and cancelled orders.",
            "Your marketing team is restricted by rigid Shopify/WooCommerce theme templates."
        ],
        "approach_title": "Maximizing commerce conversion velocity.",
        "steps": [
            ("Audit", "Funnel & drop-off audit", "Analyzing cart abandonment, mobile speed bottlenecks, and payment drop-offs."),
            ("Design", "High-conversion UX", "Designing bespoke product detail pages, sticky mobile add-to-cart bars, and clean search filters."),
            ("Engineer", "Headless commerce build", "Building Next.js frontend connected to Shopify Plus, Medusa, or custom backends."),
            ("Optimize", "Speed & A/B testing", "Optimizing image CDN delivery, Core Web Vitals, and checkout upsell modules.")
        ],
        "deliverables_title": "E-Commerce product deliverables.",
        "deliverables": [
            ("Headless Next.js Storefront", "Blazing-fast e-commerce website with sub-second page transitions."),
            ("Mobile One-Click Checkout", "Streamlined checkout supporting instant card, EFT, and installment options."),
            ("Franchise Order Management Hub", "B2B ordering portal for franchise store managers with custom price tiers."),
            ("Product Filtering & Search Engine", "Instant client-side facet filtering handling thousands of SKUs without page reloads.")
        ],
        "stat_title": "E-Commerce conversion standard.",
        "stat_num": "+38%",
        "stat_label": "increase in mobile e-commerce checkout completion rate achieved by transitioning to a headless Next.js storefront",
        "stat_source": "Headless Commerce Conversion Audit",
        "projects": [
            ("FoodieZone", "assets/foodiezone-cover.svg", "https://loux91.github.io/foodiezone/", "Retail · Quick Commerce", "Hyper-local food ordering web app with live kitchen tracking and address geolocation."),
            ("King Kutter", "assets/king-cutter-cover.svg", "https://king-cutter-s-royal-web.vercel.app/", "Retail · Franchise Portal", "Premium grooming franchise digital storefront, service bookings, and product ordering."),
            ("Wandies Place", "assets/wandies-cover.svg", "https://wandies.vercel.app/", "Retail · Hospitality", "Historic Soweto culinary landmark website with merchandise and booking engine."),
            ("SK Finds Automotive", "assets/sk-finds-cover.svg", "https://skautos.vercel.app/", "Retail · Marketplace", "Verified automotive inventory catalog with instant finance calculators.")
        ],
        "quote": "Switching to LulaSync's headless e-commerce build cut our page load times from 4.2 seconds down to 0.7 seconds. Our sales grew 45% in Q1.",
        "quote_author": "Head of E-Commerce",
        "quote_company": "Omnichannel Retail Brand",
        "faqs": [
            ("Can we still use our existing Shopify backend?", "Yes. We connect a custom, ultra-fast Next.js frontend to your existing Shopify or WooCommerce backend via GraphQL APIs.")
        ]
    },
    {
        "filename": "enterprise.html",
        "title": "Enterprise & SaaS | LulaSync — Digital Product Studio",
        "badge": "Enterprise & SaaS · Workflows & Internal Tools",
        "h1": "Consumer polish for enterprise data.",
        "claim": "Dense data tables, role-based workflows & zero lag.",
        "sub": "Enterprise software has a reputation for being clunky, slow, and frustrating to use. We prove that dense operational tools can be lightning-fast, keyboard-accessible, and aesthetically stunning — saving enterprise teams thousands of hours every year.",
        "what_title": "Enterprise software people actually love using.",
        "what_desc": "We replace fragile spreadsheets and 15-year-old internal portals with modern web applications featuring virtualized data grids, batch actions, instant global search, and fine-grained permissions.",
        "pillars": [
            ("Virtualized High-Density Data Grids", "Render 50,000+ data rows with 60fps smooth scrolling, inline editing, and column reordering."),
            ("Keyboard-First Ergonomics", "Command menus (Cmd+K), keyboard shortcuts, and quick navigation for power operators."),
            ("Role-Based Access Control (RBAC)", "Dynamic permission matrices governing views, approvals, and data exports.")
        ],
        "triggers_title": "When internal tools drain employee productivity.",
        "triggers_desc": "If your team spends hours wrestling with slow internal portals or key workflows live in brittle Excel files, an enterprise rebuild is needed.",
        "triggers": [
            "Internal staff wastes hours copying data between four different legacy database portals.",
            "Enterprise software takes 10+ seconds to generate a standard operational report.",
            "Managers struggle to enforce compliance approval workflows across distributed teams.",
            "Legacy software crashes when loading large datasets during month-end closes."
        ],
        "approach_title": "Modernizing legacy enterprise systems.",
        "steps": [
            ("Map", "Operational workflow audit", "Mapping daily task flows of operators, team leads, and executive auditors."),
            ("Architect", "High-density UI systems", "Designing modular tables, side panels, contextual action drawers, and modal wizards."),
            ("Engineer", "React & TypeScript build", "Building resilient frontends with client-side caching, virtualized lists, and WebSockets."),
            ("Integrate", "SSO & Enterprise security", "Connecting SAML/OAuth Single Sign-On, audit log tracking, and encrypted API layers.")
        ],
        "deliverables_title": "Enterprise product deliverables.",
        "deliverables": [
            ("Enterprise SaaS Console", "Full-featured web application with dark/light themes and customizable dashboards."),
            ("Command Menu & Search Suite", "Global Cmd+K spotlight search indexing records, actions, and settings instantly."),
            ("Role & Permission Management UI", "Granular access control editor for administrators, managers, and operators."),
            ("Export & Reporting Engine", "Instant PDF/CSV export generation and scheduled email telemetry reports.")
        ],
        "stat_title": "Enterprise operational efficiency.",
        "stat_num": "62%",
        "stat_label": "reduction in operator task completion time achieved by replacing legacy portal tabs with keyboard-driven command centers",
        "stat_source": "Enterprise Workflow Productivity Study",
        "projects": [
            ("Project Orchestrator", "assets/ui-project-orchestrator.webp", "../assets/ui-project-orchestrator.webp", "Enterprise · SaaS", "Multi-team project timeline, sprint velocity tracker, and resource allocation console."),
            ("Hospital Command", "assets/ui-hospital-command.webp", "../assets/ui-hospital-command.webp", "Enterprise · Healthtech", "Real-time clinical ward orchestration, emergency triage queue and ICU bed management."),
            ("Auto Claims Core", "assets/ui-auto-claims.webp", "../assets/ui-auto-claims.webp", "Enterprise · InsurTech", "High-volume claims triage console for insurance adjusters and roadside fleet dispatchers."),
            ("Sales Pipeline Pro", "assets/ui-sales-pipeline.webp", "../assets/ui-sales-pipeline.webp", "Enterprise · CRM", "Deal velocity tracking, win probability scoring, and sales representative quota analytics.")
        ],
        "quote": "The command center LulaSync built replaced three legacy tools and saved our operations team over 20 hours every week. The speed difference is unbelievable.",
        "quote_author": "VP of Operations",
        "quote_company": "Enterprise Logistics & Fleet Group",
        "faqs": [
            ("Can you connect to our proprietary on-premise databases?", "Yes. We engineer secure API integration layers and GraphQL middleware that communicate safely with on-premise or cloud databases."),
            ("Does the application support SSO and SAML authentication?", "Yes. We support Okta, Microsoft Azure AD, Google Workspace, and standard SAML 2.0 Single Sign-On.")
        ]
    }
]

def render_industry_page(ind):
    pillars_html = ""
    for i, (title, desc) in enumerate(ind["pillars"], 1):
        pillars_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">0{i} / DOMAIN CAPABILITY</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    triggers_html = ""
    for trig in ind["triggers"]:
        triggers_html += f"""
        <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-md);padding:24px 28px;display:flex;align-items:flex-start;gap:16px;">
          <span style="color:#ef4444;font-weight:bold;font-size:18px;line-height:1;margin-top:2px;">✕</span>
          <span style="font-size:15px;color:var(--text-muted);line-height:1.55;">{trig}</span>
        </div>
        """

    steps_html = ""
    for step_num, title, desc in ind["steps"]:
        steps_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">{step_num.upper()}</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    deliverables_html = ""
    for i, (title, desc) in enumerate(ind["deliverables"], 1):
        deliverables_html += f"""
        <div class="touch-card">
          <div class="touch-card-num">0{i} / ASSET</div>
          <h3 class="touch-card-title">{title}</h3>
          <p class="touch-card-desc">{desc}</p>
        </div>
        """

    projects_html = ""
    for title, img_src, link_href, tag, desc in ind["projects"]:
        img_prefix = "../" if not img_src.startswith("http") else ""
        link_prefix = ""
        target_attr = ' target="_blank" rel="noopener"' if link_href.startswith("http") else ''
        projects_html += f"""
        <a href="{link_href}" class="project-card"{target_attr}>
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
    for q, a in ind["faqs"]:
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
  <title>{ind["title"]}</title>
  <meta name="description" content="{ind["sub"][:155]}" />
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
          <div class="section-badge"><span class="badge-dot"></span>{ind["badge"]}</div>
          <div style="max-width:1040px;">
            <h1 class="section-heading-huge">{ind["h1"]}</h1>
            <div style="display:inline-block;padding:4px 14px;border-radius:var(--radius-full);background:rgba(255,255,255,0.06);font-size:13px;font-weight:600;color:#c4b5fd;margin-bottom:20px;">
              {ind["claim"]}
            </div>
            <p class="section-sub">{ind["sub"]}</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:32px;">
              <a href="https://calendly.com/lulamile_m/meet-lulamile" target="_blank" class="btn-primary">Book an Industry Discovery Call</a>
              <a href="../projects.html" class="btn-secondary">View Works</a>
            </div>
          </div>
        </div>
      </section>

      <!-- OVERVIEW -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Industry Focus</div>
          <h2 class="section-heading">{ind["what_title"]}</h2>
          <p class="section-sub">{ind["what_desc"]}</p>
          <div class="card-grid-3">
            {pillars_html}
          </div>
        </div>
      </section>

      <!-- PAIN POINTS -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Industry Challenges</div>
          <h2 class="section-heading">{ind["triggers_title"]}</h2>
          <p class="section-sub">{ind["triggers_desc"]}</p>
          <div class="card-grid-2">
            {triggers_html}
          </div>
        </div>
      </section>

      <!-- METHODOLOGY -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Domain Process</div>
          <h2 class="section-heading">{ind["approach_title"]}</h2>
          <div class="card-grid-2">
            {steps_html}
          </div>
        </div>
      </section>

      <!-- DELIVERABLES -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Shippable Solutions</div>
          <h2 class="section-heading">{ind["deliverables_title"]}</h2>
          <div class="card-grid-2">
            {deliverables_html}
          </div>
        </div>
      </section>

      <!-- BENCHMARK STAT -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="touch-card" style="padding:48px;background:linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(21,22,24,1) 100%);border:1px solid rgba(255,255,255,0.1);">
            <div class="section-badge" style="margin-bottom:16px;"><span class="badge-dot"></span>Industry Benchmark</div>
            <h3 style="font-size:24px;font-weight:700;color:#fff;margin-bottom:24px;">{ind["stat_title"]}</h3>
            <div class="stat-big" style="color:#fff;">{ind["stat_num"]}</div>
            <p style="font-size:18px;color:var(--text-muted);max-width:760px;line-height:1.6;margin:0 0 18px;">{ind["stat_label"]}</p>
            <div style="font-size:12px;font-weight:700;color:var(--accent);letter-spacing:0.08em;text-transform:uppercase;">Source: {ind["stat_source"]}</div>
          </div>
        </div>
      </section>

      <!-- RELEVANT WORK -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Domain Portfolio</div>
          <h2 class="section-heading">Shipped projects in this vertical.</h2>
          <p class="section-sub">Production systems and digital assets engineered by LulaSync.</p>
          <div class="card-grid-2">
            {projects_html}
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="quote-band">
            <div class="section-badge" style="margin-bottom:20px;"><span class="badge-dot"></span>Client Endorsement</div>
            <div class="quote-text">“{ind["quote"]}”</div>
            <div class="quote-author">
              <div>
                <div class="quote-author-name">{ind["quote_author"]}</div>
                <div class="quote-author-title">{ind["quote_company"]}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ ACCORDION -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="section-badge"><span class="badge-dot"></span>Domain Questions</div>
          <h2 class="section-heading">Frequently asked questions in this industry.</h2>
          <div class="faq-accordion">
            {faqs_html}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="page-section border-top">
        <div class="container-xl">
          <div class="cta-band">
            <h2>Ready to build for this industry?</h2>
            <p>Let's discuss your product goals, compliance needs, and engineering timeline.</p>
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

for ind in INDUSTRIES_CONFIG:
    path = os.path.join("industries", ind["filename"])
    content = render_industry_page(ind)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {path}")

print("All industry pages generated successfully with TouchFoundry fidelity.")
