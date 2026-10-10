/*
 * Vision Bin — a focused workbench for tools, references and selected
 * project imagery across product design, development and everyday delivery.
 *
 * Add a resource by giving it a unique id, a name, a URL and a category id
 * below. Cards use images/library/<id>.webp by default; set noPreview: true
 * to prefer the generated letter tile when an external link has no thumbnail.
 * For supplied local photos, use type: "image", category: "pictures" and an
 * image path. The UX process reference is intentionally not a Vision Bin card.
 *
 * This stays a plain script so the library works when index.html is opened
 * directly from disk as well as when it is hosted.
 */
window.LIBRARY_DATA = {
  categories: [
    { id: "featured", label: "Featured" },
    { id: "hackathons", label: "Hackathons" },
    { id: "pictures", label: "Pictures" },
    { id: "productivity", label: "Productivity" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "integration", label: "Integration" },
    { id: "archive", label: "Archive Projects" }
  ],
  items: [
    /* ── Featured stories ─────────────────────────────────────────────── */
    {
      id: "invest-in-4ir-smartseve",
      name: "Invest in future, invest in 4IR, invest in SmartSeve",
      url: "https://medium.com/@sngwane6.13/invest-in-future-invest-in-4ir-invest-in-smartseve-babe3fa849fb",
      category: "featured",
      noPreview: true,
      description: "Medium article on the future, 4IR and SmartSeve."
    },
    {
      id: "wethinkcode-gbv-hackathon",
      name: "WeThinkCode female developers triumph at GBV hackathon",
      url: "https://www.itweb.co.za/article/wethinkcode-female-developers-triumph-at-gbv-hackathon/KzQenMjVgjAMZd2r",
      category: "featured",
      noPreview: true,
      description: "ITWeb coverage of WeThinkCode female developers' win at a GBV hackathon."
    },

    /* ── Hackathon solutions ──────────────────────────────────────────── */
    {
      id: "financial-inclusion-small-businesses",
      name: "Enhancing financial inclusion for small businesses solution",
      url: "https://drive.google.com/file/d/1anSnYJt_4Okl3xQuKkCJDAVROcVOqEFr/view?usp=sharing",
      category: "hackathons",
      noPreview: true,
      description: "Hackathon solution focused on enhancing financial inclusion for small businesses."
    },
    {
      id: "community-based-financial-hubs",
      name: "Community-Based Financial Hubs Solution",
      url: "https://drive.google.com/file/d/19_dk5NRI_gJzYwyyR5kw_POwazmNhgp-/view?usp=sharing",
      category: "hackathons",
      noPreview: true,
      description: "Hackathon solution for community-based financial hubs."
    },

    /* ── Supplied pictures (ux process.jpg is reserved for case studies) ─ */
    { id: "vision-da-team", type: "image", category: "pictures", name: "Digital Academy team", image: "./vision/DA.jpg" },
    { id: "vision-sesyme-portrait", type: "image", category: "pictures", name: "Sesyme portrait", image: "./vision/_DSC0421.JPG" },
    { id: "vision-absa-hackathon", type: "image", category: "pictures", name: "ABSA hackathon event", image: "./vision/absa-hac.jpg" },
    { id: "vision-bursary-interface", type: "image", category: "pictures", name: "Bursary interface", image: "./vision/bursary.jpg" },
    { id: "vision-co-w-app", type: "image", category: "pictures", name: "Co-W mobile experience", image: "./vision/co-w.png" },
    { id: "vision-da-profile", type: "image", category: "pictures", name: "Digital Academy profile", image: "./vision/da-2.jpg" },
    { id: "vision-childrens-home", type: "image", category: "pictures", name: "Johannesburg Children's Home outreach", image: "./vision/don.jpg" },
    { id: "vision-sesyme-session", type: "image", category: "pictures", name: "Sesyme working session", image: "./vision/dsesy.jpg" },
    { id: "vision-fieldwork", type: "image", category: "pictures", name: "Outdoor fieldwork", image: "./vision/ei.jpg" },
    { id: "vision-engineering-design", type: "image", category: "pictures", name: "Design and engineering workspace", image: "./vision/eng-des.jpg" },
    { id: "vision-gk-post", type: "image", category: "pictures", name: "GK community post", image: "./vision/gk.jpg" },
    { id: "vision-hush-community", type: "image", category: "pictures", name: "Hush community update", image: "./vision/hush-2.jpg" },
    { id: "vision-hush-design", type: "image", category: "pictures", name: "Hush interface design", image: "./vision/hush.jpg" },
    { id: "vision-hushscape", type: "image", category: "pictures", name: "Hushscape identity", image: "./vision/hushscape.jpg" },
    { id: "vision-gbv-campaign", type: "image", category: "pictures", name: "Gender-based violence campaign", image: "./vision/hushy.jpg" },
    { id: "vision-lunia-listing", type: "image", category: "pictures", name: "Lunia — app I developed in 2023 (Google Play listing)", image: "./vision/lun.jpg" },
    { id: "vision-lunia-mobile", type: "image", category: "pictures", name: "Lunia — app I developed in 2023 (mobile screen)", image: "./vision/lunia.jpg" },
    { id: "vision-sesyme-at-work", type: "image", category: "pictures", name: "Sesyme at work", image: "./vision/mee.jpg" },
    { id: "vision-mpilo-feature", type: "image", category: "pictures", name: "Mpilo community feature", image: "./vision/mpilo.jpg" },
    { id: "vision-technology-feature", type: "image", category: "pictures", name: "Technology taken to the next level", image: "./vision/news.jpg" },
    { id: "vision-ply-project", type: "image", category: "pictures", name: "Ply project display", image: "./vision/ply.jpg" },
    { id: "vision-sesyme-platform", type: "image", category: "pictures", name: "Sesyme co-learning platform", image: "./vision/ses.jpg" },
    { id: "vision-sesyme-mockups", type: "image", category: "pictures", name: "Sesyme product mockups", image: "./vision/sesyme.jpeg" },
    { id: "vision-community-sport", type: "image", category: "pictures", name: "Community sports activity", image: "./vision/soc.jpg" },
    { id: "vision-star-card", type: "image", category: "pictures", name: "Recognition card", image: "./vision/star.jpg" },
    { id: "vision-takeda-design", type: "image", category: "pictures", name: "Pharmaceutical client design workspace (anonymised)", image: "./vision/takeda.jpg" },
    { id: "vision-team-workshop", type: "image", category: "pictures", name: "Team workshop", image: "./vision/vd.jpg" },
    { id: "vision-video-call", type: "image", category: "pictures", name: "Virtual project meeting", image: "./vision/vv.jpg" },

    /* ── Productivity & delivery ──────────────────────────────────────── */
    {
      id: "chatgpt",
      name: "ChatGPT",
      url: "https://chatgpt.com",
      category: "productivity",
      description: "A flexible assistant for outlining a brief, synthesising notes, drafting copy and getting unstuck."
    },
    {
      id: "claude",
      name: "Claude",
      url: "https://claude.ai",
      category: "productivity",
      description: "Useful for working through long specs, comparing options and reviewing a complicated document."
    },
    {
      id: "notebooklm",
      name: "NotebookLM",
      url: "https://notebooklm.google.com",
      category: "productivity",
      description: "Ask questions across a set of source documents while keeping answers grounded in those sources."
    },
    {
      id: "notion",
      name: "Notion",
      url: "https://www.notion.so",
      category: "productivity",
      description: "Keep project notes, briefs, decisions and lightweight documentation together."
    },
    {
      id: "google-docs",
      name: "Google Docs",
      url: "https://docs.google.com",
      category: "productivity",
      description: "Draft and review briefs, proposals and handover notes with collaborators."
    },
    {
      id: "todoist",
      name: "Todoist",
      url: "https://www.todoist.com",
      category: "productivity",
      description: "Capture next actions and keep day-to-day delivery work visible across devices."
    },
    {
      id: "airtable",
      name: "Airtable",
      url: "https://www.airtable.com",
      category: "productivity",
      description: "Track structured project, content or client information without losing the ease of a spreadsheet."
    },
    {
      id: "trello",
      name: "Trello",
      url: "https://trello.com",
      category: "productivity",
      description: "A simple visual board for moving tasks from a backlog through delivery."
    },
    {
      id: "calendly",
      name: "Calendly",
      url: "https://calendly.com",
      category: "productivity",
      description: "Share availability once and avoid the back-and-forth of arranging a client session."
    },
    {
      id: "loom",
      name: "Loom",
      url: "https://www.loom.com",
      category: "productivity",
      description: "Record a short screen walkthrough for design reviews, hand-offs and async updates."
    },

    /* ── Product & interface design ───────────────────────────────────── */
    {
      id: "figma",
      name: "Figma",
      url: "https://www.figma.com",
      category: "design",
      description: "Design interfaces, maintain shared components and turn flows into testable prototypes."
    },
    {
      id: "mobbin",
      name: "Mobbin",
      url: "https://mobbin.com",
      category: "design",
      description: "Study real product screens and end-to-end flows before deciding how a pattern should work."
    },
    {
      id: "miro",
      name: "Miro",
      url: "https://miro.com",
      category: "design",
      description: "Map workshops, journeys, service blueprints and early ideas with a team."
    },
    {
      id: "excalidraw",
      name: "Excalidraw",
      url: "https://excalidraw.com",
      category: "design",
      description: "Sketch a flow or explain a system quickly before polishing it in a design file."
    },
    {
      id: "material-design",
      name: "Material Design 3",
      url: "https://m3.material.io",
      category: "design",
      description: "A practical reference for accessible components, interaction states, colour and motion."
    },
    {
      id: "apple-hig",
      name: "Apple Human Interface Guidelines",
      url: "https://developer.apple.com/design/human-interface-guidelines",
      category: "design",
      description: "Check platform conventions when shaping mobile navigation, controls and feedback."
    },
    {
      id: "nngroup",
      name: "Nielsen Norman Group",
      url: "https://www.nngroup.com/articles/",
      category: "design",
      description: "Evidence-based UX guidance for research, usability, information architecture and interaction design."
    },
    {
      id: "contrast-checker",
      name: "WebAIM Contrast Checker",
      url: "https://webaim.org/resources/contrastchecker/",
      category: "design",
      description: "Check foreground and background contrast before a colour choice reaches production."
    },
    {
      id: "coolors",
      name: "Coolors",
      url: "https://coolors.co",
      category: "design",
      description: "Explore and save colour palettes while building a visual direction."
    },
    {
      id: "realtime-colors",
      name: "Realtime Colors",
      url: "https://www.realtimecolors.com",
      category: "design",
      description: "Preview a palette and type pairing on interface components, not just colour swatches."
    },
    {
      id: "google-fonts",
      name: "Google Fonts",
      url: "https://fonts.google.com",
      category: "design",
      description: "Browse and test typefaces for readable, production-ready interfaces."
    },
    {
      id: "fontshare",
      name: "Fontshare",
      url: "https://www.fontshare.com",
      category: "design",
      description: "Explore a focused collection of typefaces for a more distinctive product or brand system."
    },
    {
      id: "lucide",
      name: "Lucide",
      url: "https://lucide.dev/icons",
      category: "design",
      description: "A consistent open-source icon set with SVGs and packages for interface projects."
    },
    {
      id: "phosphor-icons",
      name: "Phosphor Icons",
      url: "https://phosphoricons.com",
      category: "design",
      description: "A flexible icon family with multiple weights for matching an interface's visual tone."
    },

    /* ── Development & quality ────────────────────────────────────────── */
    {
      id: "vscode",
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com",
      category: "development",
      image: "./public/icons/dock/vscode.svg",
      description: "The editor for building, debugging and reviewing front-end work."
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com",
      category: "development",
      description: "Version control, pull requests, issue tracking and releases for shipped work."
    },
    {
      id: "mdn",
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org",
      category: "development",
      description: "The day-to-day reference for HTML, CSS, JavaScript and browser APIs."
    },
    {
      id: "devdocs",
      name: "DevDocs",
      url: "https://devdocs.io",
      category: "development",
      description: "Search documentation for multiple languages and frameworks from one fast interface."
    },
    {
      id: "codepen",
      name: "CodePen",
      url: "https://codepen.io",
      category: "development",
      description: "Prototype a small interaction or reproduce a layout issue in an isolated sandbox."
    },
    {
      id: "caniuse",
      name: "Can I Use",
      url: "https://caniuse.com",
      category: "development",
      description: "Check browser support before using a CSS feature or web platform API."
    },
    {
      id: "web-dev",
      name: "web.dev",
      url: "https://web.dev",
      category: "development",
      description: "Guidance and tools for web performance, accessibility, security and progressive web apps."
    },
    {
      id: "stack-overflow",
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      category: "development",
      description: "Search practical answers to implementation questions and compare edge cases."
    },
    {
      id: "json-crack",
      name: "JSON Crack",
      url: "https://jsoncrack.com/editor",
      category: "development",
      description: "Turn a large JSON payload into a navigable diagram while inspecting APIs and data."
    },
    {
      id: "regex101",
      name: "regex101",
      url: "https://regex101.com",
      category: "development",
      description: "Build and test a regular expression against real examples with an explanation of each match."
    },
    {
      id: "squoosh",
      name: "Squoosh",
      url: "https://squoosh.app",
      category: "development",
      description: "Compare image formats and compression settings before shipping assets to the web."
    },
    {
      id: "netlify",
      name: "Netlify",
      url: "https://www.netlify.com",
      category: "development",
      description: "Deploy front-end projects and manage previews, builds and hosting integrations."
    },
    {
      id: "vercel",
      name: "Vercel",
      url: "https://vercel.com",
      category: "development",
      description: "Ship web projects with preview deployments and a connected build pipeline."
    },

    /* ── APIs, automation and service integrations ────────────────────── */
    {
      id: "postman",
      name: "Postman",
      url: "https://www.postman.com",
      category: "integration",
      description: "Inspect API requests, test responses and keep useful request collections together."
    },
    {
      id: "supabase",
      name: "Supabase",
      url: "https://supabase.com",
      category: "integration",
      description: "Connect an application to hosted data, authentication, storage and APIs."
    },
    {
      id: "zapier",
      name: "Zapier",
      url: "https://zapier.com",
      category: "integration",
      description: "Automate hand-offs between common work tools without building every connector from scratch."
    },
    {
      id: "hubspot",
      name: "HubSpot CRM",
      url: "https://www.hubspot.com/products/crm",
      category: "integration",
      description: "Connect a website enquiry flow to contact records, pipeline stages and follow-up."
    },
    {
      id: "pipedrive",
      name: "Pipedrive",
      url: "https://www.pipedrive.com",
      category: "integration",
      description: "Map leads through a sales pipeline and make the next owner action visible."
    },
    {
      id: "tally",
      name: "Tally",
      url: "https://tally.so",
      category: "integration",
      description: "Build a focused intake form or survey and pass responses into a working process."
    },
    {
      id: "stripe",
      name: "Stripe",
      url: "https://stripe.com",
      category: "integration",
      description: "Add online payments and connect checkout events to a product or service workflow."
    },
    {
      id: "payfast",
      name: "PayFast",
      url: "https://payfast.io",
      category: "integration",
      description: "A South African payment gateway to consider when a local site needs online checkout."
    },
    {
      id: "yoco",
      name: "Yoco",
      url: "https://www.yoco.com/za/",
      category: "integration",
      description: "South African card-payment tools and payment links for small business workflows."
    },
    {
      id: "archive-coal-stockpile",
      name: "Coal stockpile forecasting",
      url: "./portfolio/doc-coal-stockpile-forecasting.html",
      category: "archive",
      noPreview: true,
      description: "Case study: energy and machine-learning forecasting."
    },
    {
      id: "archive-compliance-ai",
      name: "Compliance AI assistant",
      url: "./portfolio/doc-compliance-ai-platform.html",
      category: "archive",
      noPreview: true,
      description: "Case study: AI assistant with cited answers for financial services."
    },
    {
      id: "archive-safety-statistics",
      name: "Safety statistics reference",
      url: "./portfolio/doc-safety-statistics-workbook.html",
      category: "archive",
      noPreview: true,
      description: "Case study: safety-reporting reference for energy and chemicals."
    },
    {
      id: "archive-chart-components",
      name: "Configurable chart components",
      url: "./portfolio/doc-chart-components.html",
      category: "archive",
      noPreview: true,
      description: "Case study: dashboard chart components for a pharmaceutical client."
    },
    {
      id: "archive-timeline-view",
      name: "Configurable timeline view",
      url: "./portfolio/doc-timeline-view.html",
      category: "archive",
      noPreview: true,
      description: "Case study: enterprise product-operations timeline."
    },
    {
      id: "archive-entrehive",
      name: "EntreHive",
      url: "./portfolio/doc-entrehive.html",
      category: "archive",
      noPreview: true,
      description: "Case study: Android points app, Digital Academy team project."
    },
    {
      id: "archive-addmoredigital",
      name: "AddmoreDigital",
      url: "./portfolio/addmoredigital-website.html",
      category: "archive",
      noPreview: true,
      description: "Case study: agency website, SEO and CRM."
    },
    {
      id: "archive-africa-cuisine",
      name: "Africa Cuisine",
      url: "https://africa-cuisine-pro.vercel.app",
      category: "archive",
      noPreview: true,
      description: "Live restaurant PWA, Braamfontein."
    },
    {
      id: "archive-sk-finds",
      name: "SK Finds",
      url: "https://skautos.vercel.app/",
      category: "archive",
      noPreview: true,
      description: "Live WhatsApp storefront PWA."
    }
  ]
};

/*
 * A compact reference shelf for the same four areas. The list is deliberately
 * practical: official documentation, tested standards and tools used during
 * real design, development and integration work. No news, jobs or general
 * entertainment links.
 */
window.LIBRARY_RESOURCES = {
  categories: [
    { id: "productivity", label: "Productivity" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "integration", label: "Integration" }
  ],
  items: [
    { id: "res-notion", name: "Notion Help Centre", url: "https://www.notion.so/help", category: "productivity",
      description: "Guides for keeping project notes, lightweight documentation and team workspaces structured." },
    { id: "res-airtable", name: "Airtable Support", url: "https://support.airtable.com/", category: "productivity",
      description: "Reference for building practical bases, views and automations around structured project data." },
    { id: "res-figma", name: "Figma Help Centre", url: "https://help.figma.com/", category: "design",
      description: "Official guidance for components, variables, prototyping, collaboration and design handoff." },
    { id: "res-material", name: "Material Design 3", url: "https://m3.material.io/", category: "design",
      description: "Component, accessibility and interaction guidance for building a coherent interface system." },
    { id: "res-apple-hig", name: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/", category: "design",
      description: "Platform guidance for native-feeling Apple experiences and their interaction patterns." },
    { id: "res-nngroup", name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", category: "design",
      description: "Research-backed articles for usability, navigation, UX research and service design decisions." },
    { id: "res-webaim", name: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", category: "design",
      description: "A quick contrast check for readable text and accessible interface colour combinations." },
    { id: "res-wcag", name: "W3C Accessibility Standards", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", category: "design",
      description: "The primary reference for accessibility requirements and WCAG guidance." },
    { id: "res-mdn", name: "MDN Web Docs", url: "https://developer.mozilla.org/", category: "development",
      description: "Reliable reference for browser APIs, HTML, CSS and JavaScript." },
    { id: "res-webdev", name: "web.dev Learn", url: "https://web.dev/learn/", category: "development",
      description: "Practical learning paths for performance, CSS, accessibility, forms and responsive web." },
    { id: "res-caniuse", name: "Can I Use", url: "https://caniuse.com/", category: "development",
      description: "Browser support data for web features and APIs." },
    { id: "res-github", name: "GitHub Docs", url: "https://docs.github.com/", category: "development",
      description: "Official documentation for repositories, pull requests, actions and project workflows." },
    { id: "res-react", name: "React Documentation", url: "https://react.dev/learn", category: "development",
      description: "The official learning path and reference for building React user interfaces." },
    { id: "res-angular", name: "Angular Documentation", url: "https://angular.dev/overview", category: "development",
      description: "Official guides for Angular application structure, components and services." },
    { id: "res-ionic", name: "Ionic Framework Docs", url: "https://ionicframework.com/docs", category: "development",
      description: "Reference for Ionic UI components and building cross-platform mobile experiences." },
    { id: "res-typescript", name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html", category: "development",
      description: "Core concepts and language reference for safer JavaScript applications." },
    { id: "res-postman", name: "Postman Learning Center", url: "https://learning.postman.com/", category: "integration",
      description: "Guides for API requests, collections, environments and automated checks." },
    { id: "res-supabase", name: "Supabase Documentation", url: "https://supabase.com/docs", category: "integration",
      description: "Reference for connecting applications to database, authentication, storage and edge functions." },
    { id: "res-zapier", name: "Zapier Help Center", url: "https://help.zapier.com/", category: "integration",
      description: "Guides for connecting services and maintaining no-code automations." },
    { id: "res-hubspot", name: "HubSpot Developer Docs", url: "https://developers.hubspot.com/docs", category: "integration",
      description: "API and integration references for CRM records, forms and workflow connections." },
    { id: "res-stripe", name: "Stripe Documentation", url: "https://docs.stripe.com/", category: "integration",
      description: "Official reference for checkout, payments, webhooks and payment APIs." },
    { id: "res-payfast", name: "PayFast Developer Centre", url: "https://developers.payfast.co.za/", category: "integration",
      description: "Integration guides for connecting South African online payments to a website." },
    { id: "res-yoco", name: "Yoco Developer Docs", url: "https://developer.yoco.com/", category: "integration",
      description: "Developer reference for Yoco payment integrations and checkout flows." }
  ]
};
