/*
 * Vision Bin — two short shelves, kept deliberately small.
 *
 *   Vision Board  →  LIBRARY_DATA     projects, press and pictures
 *   Toolkit       →  LIBRARY_RESOURCES  inspiration, reading, frameworks,
 *                                       handover, and tools by lifecycle stage
 *
 * Add an entry by giving it a unique id, a name, a URL and a category id.
 * Cards use images/library/<id>.webp when that file exists; set noPreview:
 * true to use the lettered colour tile instead. Project cards set `image`
 * directly so each one shows its own cover. `locked: true` draws a padlock
 * badge: those studies are encrypted and open with a password
 * (scripts/lock_case_studies.py).
 *
 * This stays a plain script so the library works when index.html is opened
 * directly from disk as well as when it is hosted.
 */
window.LIBRARY_DATA = {
  categories: [
    { id: "projects", label: "Projects" },
    { id: "press", label: "Press & hackathons" },
    { id: "pictures", label: "Pictures" }
  ],
  items: [
    /* ── Case studies and live products ─────────────────────────────── */
    {
      id: "project-media-scanning",
      name: "Media scanning for audit planning",
      url: "./portfolio/doc-media-scanning-audit.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/media-scanning-cover.webp",
      description: "Public sector · media intelligence that feeds audit planning."
    },
    {
      id: "project-safety-statistics",
      name: "Safety statistics reference",
      url: "./portfolio/doc-safety-statistics-workbook.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/safety-statistics-cover.webp",
      description: "Energy and chemicals · one shared source for safety scoring rules."
    },
    {
      id: "project-compliance-ai",
      name: "Compliance AI assistant",
      url: "./portfolio/doc-compliance-ai-platform.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/compliance-ai-cover.webp",
      description: "Financial services · AI answers you can check against their source."
    },
    {
      id: "project-coal-stockpile",
      name: "Coal stockpile forecasting",
      url: "./portfolio/doc-coal-stockpile-forecasting.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/coal-stockpile-cover.webp",
      description: "Energy · per-station forecasts instead of one static formula."
    },
    {
      id: "project-chart-components",
      name: "Configurable chart components",
      url: "./portfolio/doc-chart-components.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/chart-components-cover.webp",
      description: "Pharmaceutical · dashboard charts business users set up themselves."
    },
    {
      id: "project-timeline-view",
      name: "Configurable timeline view",
      url: "./portfolio/doc-timeline-view.html",
      category: "projects",
      locked: true,
      image: "./images/work/covers/timeline-view-cover.webp",
      description: "Enterprise · a product-operations timeline with configurable columns."
    },
    {
      id: "project-entrehive",
      name: "EntreHive",
      url: "./portfolio/doc-entrehive.html",
      category: "projects",
      image: "./images/work/covers/entrehive-cover.webp",
      description: "Mobile · points-based Android app for entrepreneurs, a Digital Academy team project."
    },
    {
      id: "project-addmoredigital",
      name: "AddmoreDigital",
      url: "./portfolio/addmoredigital-website.html",
      category: "projects",
      image: "./images/work/addmoredigital-cover.webp",
      description: "Agency website with SEO and CRM wired in."
    },
    {
      id: "project-africa-cuisine",
      name: "Africa Cuisine",
      url: "https://africa-cuisine-pro.vercel.app",
      category: "projects",
      image: "./images/work/africa-cuisine-cover.webp",
      description: "Live restaurant website and PWA, Braamfontein."
    },
    {
      id: "project-servicewaze",
      name: "ServiceWaze",
      url: "https://lulamilemkhungela.github.io/ServiceWaze/",
      category: "projects",
      image: "./images/work/servicewaze/cover.webp",
      description: "Live civic-tech PWA for service alerts and reports."
    },
    {
      id: "project-wandisplace",
      name: "WandisPlace",
      url: "https://wandies.vercel.app/",
      category: "projects",
      image: "./images/work/wandisplace-cover.webp",
      description: "Live booking PWA."
    },
    {
      id: "project-sk-finds",
      name: "SK Finds",
      url: "https://skautos.vercel.app/",
      category: "projects",
      image: "./images/work/skfinds-cover.webp",
      description: "Live WhatsApp storefront PWA."
    },

    /* ── Press and hackathons ───────────────────────────────────────── */
    {
      id: "press-wethinkcode-gbv",
      name: "WeThinkCode developers triumph at GBV hackathon",
      url: "https://www.itweb.co.za/article/wethinkcode-female-developers-triumph-at-gbv-hackathon/KzQenMjVgjAMZd2r",
      category: "press",
      noPreview: true,
      description: "ITWeb coverage of the winning GBV hackathon team."
    },
    {
      id: "press-smartseve",
      name: "Invest in the future, invest in 4IR, invest in SmartSeve",
      url: "https://medium.com/@sngwane6.13/invest-in-future-invest-in-4ir-invest-in-smartseve-babe3fa849fb",
      category: "press",
      noPreview: true,
      description: "Medium article on SmartSeve and the fourth industrial revolution."
    },
    {
      id: "press-financial-inclusion",
      name: "Financial inclusion for small businesses",
      url: "https://drive.google.com/file/d/1anSnYJt_4Okl3xQuKkCJDAVROcVOqEFr/view?usp=sharing",
      category: "press",
      noPreview: true,
      description: "Hackathon solution deck."
    },
    {
      id: "press-community-hubs",
      name: "Community-based financial hubs",
      url: "https://drive.google.com/file/d/19_dk5NRI_gJzYwyyR5kw_POwazmNhgp-/view?usp=sharing",
      category: "press",
      noPreview: true,
      description: "Hackathon solution deck."
    },

    /* ── Pictures (ux process.jpg is reserved for case studies) ─────── */
    { id: "vision-da-team", type: "image", category: "pictures", name: "Digital Academy team", image: "./vision/DA.jpg" },
    { id: "vision-absa-hackathon", type: "image", category: "pictures", name: "ABSA hackathon event", image: "./vision/absa-hac.jpg" },
    { id: "vision-co-w-app", type: "image", category: "pictures", name: "Co-W mobile experience", image: "./vision/co-w.png" },
    { id: "vision-childrens-home", type: "image", category: "pictures", name: "Johannesburg Children's Home outreach", image: "./vision/don.jpg" },
    { id: "vision-sesyme-session", type: "image", category: "pictures", name: "Sesyme working session", image: "./vision/dsesy.jpg" },
    { id: "vision-engineering-design", type: "image", category: "pictures", name: "Design and engineering workspace", image: "./vision/eng-des.jpg" },
    { id: "vision-hush-design", type: "image", category: "pictures", name: "Hush interface design", image: "./vision/hush.jpg" },
    { id: "vision-gbv-campaign", type: "image", category: "pictures", name: "Gender-based violence campaign", image: "./vision/hushy.jpg" },
    { id: "vision-lunia-listing", type: "image", category: "pictures", name: "Lunia — app I developed in 2023 (Google Play listing)", image: "./vision/lun.jpg" },
    { id: "vision-lunia-mobile", type: "image", category: "pictures", name: "Lunia — app I developed in 2023 (mobile screen)", image: "./vision/lunia.jpg" },
    { id: "vision-mpilo-feature", type: "image", category: "pictures", name: "Mpilo community feature", image: "./vision/mpilo.jpg" },
    { id: "vision-technology-feature", type: "image", category: "pictures", name: "Technology taken to the next level", image: "./vision/news.jpg" },
    { id: "vision-sesyme-platform", type: "image", category: "pictures", name: "Sesyme co-learning platform", image: "./vision/ses.jpg" },
    { id: "vision-sesyme-mockups", type: "image", category: "pictures", name: "Sesyme product mockups", image: "./vision/sesyme.jpeg" },
    { id: "vision-takeda-design", type: "image", category: "pictures", name: "Pharmaceutical client design workspace (anonymised)", image: "./vision/takeda.jpg" },
    { id: "vision-team-workshop", type: "image", category: "pictures", name: "Team workshop", image: "./vision/vd.jpg" }
  ]
};

/*
 * Toolkit — what I actually reach for, grouped the way a project runs.
 * Short on purpose: a handful per shelf, no news or job boards.
 */
window.LIBRARY_RESOURCES = {
  categories: [
    { id: "inspiration", label: "Inspiration" },
    { id: "reading", label: "Magazines & articles" },
    { id: "frameworks", label: "Frameworks I align to" },
    { id: "handover", label: "Design handover" },
    { id: "discover", label: "Discover & define" },
    { id: "design", label: "Design" },
    { id: "build", label: "Build" },
    { id: "test", label: "Test & ship" }
  ],
  items: [
    /* ── Inspiration: where I look before I open Figma or VS Code ──── */
    { id: "mobbin", name: "Mobbin", url: "https://mobbin.com", category: "inspiration",
      description: "Real product screens and flows, searchable by pattern. Where I check how others solved the same screen." },
    { id: "refero", name: "Refero", url: "https://refero.design", category: "inspiration", noPreview: true,
      description: "Web and iOS references by component, flow and page type." },
    { id: "awwwards", name: "Awwwards", url: "https://www.awwwards.com", category: "inspiration", noPreview: true,
      description: "Where web craft is pushed furthest: motion, layout and typography worth studying." },
    { id: "godly", name: "Godly", url: "https://godly.website", category: "inspiration", noPreview: true,
      description: "A tight, curated feed of well-built landing pages." },
    { id: "codrops", name: "Codrops", url: "https://tympanus.net/codrops/", category: "inspiration", noPreview: true,
      description: "Front-end demos and tutorials for interaction and motion ideas I can actually build." },
    { id: "dribbble", name: "Dribbble", url: "https://dribbble.com", category: "inspiration", noPreview: true,
      description: "Visual direction and colour, taken with a pinch of salt because nothing here has shipped." },

    /* ── Magazines and articles I keep coming back to ───────────────── */
    { id: "smashing-magazine", name: "Smashing Magazine", url: "https://www.smashingmagazine.com", category: "reading",
      description: "Long-form, practical pieces on front-end, accessibility and design systems." },
    { id: "nngroup", name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", category: "reading",
      description: "Research-backed UX guidance. The reference I cite when a decision needs evidence." },
    { id: "a-list-apart", name: "A List Apart", url: "https://alistapart.com", category: "reading", noPreview: true,
      description: "Thinking about how the web is made, from standards to content strategy." },
    { id: "css-tricks", name: "CSS-Tricks", url: "https://css-tricks.com", category: "reading", noPreview: true,
      description: "Clear CSS and front-end explainers; the almanac is still the fastest lookup." },
    { id: "ux-collective", name: "UX Collective", url: "https://uxdesign.cc", category: "reading", noPreview: true,
      description: "Designer essays on craft, process and the realities of product work." },
    { id: "web-dev", name: "web.dev", url: "https://web.dev/blog", category: "reading",
      description: "Google's writing on performance, Core Web Vitals and modern browser features." },

    /* ── Frameworks I align my design and front-end to ──────────────── */
    { id: "double-diamond", name: "Double Diamond", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/", category: "frameworks", noPreview: true,
      description: "Discover, define, develop, deliver. The shape of every engagement I run, from brief to release." },
    { id: "design-thinking", name: "Design Thinking (IDEO)", url: "https://designthinking.ideo.com", category: "frameworks", noPreview: true,
      description: "Empathise, define, ideate, prototype, test. How I keep discovery honest." },
    { id: "jobs-to-be-done", name: "Jobs to be Done", url: "https://jtbd.info", category: "frameworks", noPreview: true,
      description: "Frame features around the progress a user is trying to make, not the feature list." },
    { id: "lean-ux", name: "Lean UX", url: "https://www.oreilly.com/library/view/lean-ux-3rd/9781098116293/", category: "frameworks", noPreview: true,
      description: "Hypotheses, outcomes over output, and shipping to learn. Fits agile delivery teams." },
    { id: "atomic-design", name: "Atomic Design", url: "https://atomicdesign.bradfrost.com", category: "frameworks", noPreview: true,
      description: "Atoms, molecules, organisms, templates, pages. How I structure design systems and component libraries." },
    { id: "scrum-guide", name: "Scrum Guide", url: "https://scrumguides.org", category: "frameworks", noPreview: true,
      description: "The delivery rhythm I design inside: sprints, backlog, review and retro." },
    { id: "wcag", name: "WCAG 2.2", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", category: "frameworks", noPreview: true,
      description: "The accessibility bar every screen is checked against before it ships." },
    { id: "material-design", name: "Material Design 3", url: "https://m3.material.io", category: "frameworks",
      description: "The platform baseline for Android and Ionic work: components, tokens and motion." },
    { id: "apple-hig", name: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/", category: "frameworks",
      description: "The platform baseline for iOS: navigation, controls and layout conventions." },

    /* ── Design handover: from Figma to code without drift ──────────── */
    { id: "figma-dev-mode", name: "Figma Dev Mode", url: "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode", category: "handover", noPreview: true,
      description: "Inspect, measure and copy tokens straight from the file. Marks what is ready for dev." },
    { id: "storybook", name: "Storybook", url: "https://storybook.js.org", category: "handover", noPreview: true,
      description: "Every component rendered in isolation, in every state. The shared truth between design and code." },
    { id: "design-tokens", name: "Design Tokens (W3C)", url: "https://www.designtokens.org", category: "handover", noPreview: true,
      description: "One token format for colour, type and spacing so Figma variables and CSS stay in step." },
    { id: "zeroheight", name: "zeroheight", url: "https://zeroheight.com", category: "handover", noPreview: true,
      description: "Design-system documentation that sits next to the Figma library and the code." },
    { id: "chromatic", name: "Chromatic", url: "https://www.chromatic.com", category: "handover", noPreview: true,
      description: "Visual review and regression on Storybook builds, so UI changes are approved on screen." },

    /* ── Discover and define ────────────────────────────────────────── */
    { id: "miro", name: "Miro", url: "https://miro.com", category: "discover",
      description: "Workshops, journey maps and affinity sorting with the client in the room or remote." },
    { id: "hotjar", name: "Hotjar", url: "https://www.hotjar.com", category: "discover", noPreview: true,
      description: "Heatmaps, recordings and short surveys to see where people struggle on the live product." },
    { id: "maze", name: "Maze", url: "https://maze.co", category: "discover", noPreview: true,
      description: "Unmoderated usability tests on prototypes, with task success and time on task." },
    { id: "notion", name: "Notion", url: "https://www.notion.so", category: "discover",
      description: "Briefs, research notes, decision logs and the single page a project is run from." },
    { id: "azure-devops", name: "Azure DevOps", url: "https://azure.microsoft.com/products/devops", category: "discover", noPreview: true,
      description: "Backlog, sprints and boards on enterprise engagements; where stories and acceptance criteria live." },

    /* ── Design ─────────────────────────────────────────────────────── */
    { id: "figma", name: "Figma", url: "https://www.figma.com", category: "design",
      description: "Wireframes, UI, prototypes, variables and the component library, all in one file set." },
    { id: "excalidraw", name: "Excalidraw", url: "https://excalidraw.com", category: "design",
      description: "Fast, rough diagrams and flows when the idea matters more than the polish." },
    { id: "lucide", name: "Lucide Icons", url: "https://lucide.dev", category: "design",
      description: "A consistent open-source icon set that works in Figma and as React or SVG in code." },
    { id: "fontshare", name: "Fontshare", url: "https://www.fontshare.com", category: "design",
      description: "Quality free type, including the Satoshi family this site uses." },
    { id: "coolors", name: "Coolors", url: "https://coolors.co", category: "design",
      description: "Palette exploration, then contrast-checked before it becomes a token." },
    { id: "contrast-checker", name: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", category: "design",
      description: "The quick pass on every text and background pair." },

    /* ── Build ──────────────────────────────────────────────────────── */
    { id: "vscode", name: "VS Code", url: "https://code.visualstudio.com", category: "build", noPreview: true,
      description: "The editor, with ESLint, Prettier and the Angular or React tooling for the project." },
    { id: "github", name: "GitHub", url: "https://github.com", category: "build",
      description: "Repos, pull requests, reviews and Actions. This site deploys from here." },
    { id: "mdn", name: "MDN Web Docs", url: "https://developer.mozilla.org", category: "build",
      description: "The reference for HTML, CSS and browser APIs." },
    { id: "angular", name: "Angular + Ionic", url: "https://ionicframework.com/docs/angular/overview", category: "build", noPreview: true,
      description: "My stack for cross-platform mobile apps on enterprise work." },
    { id: "react", name: "React", url: "https://react.dev", category: "build", noPreview: true,
      description: "My stack for web products and PWAs." },
    { id: "postman", name: "Postman", url: "https://www.postman.com", category: "build",
      description: "Inspect and test the APIs a screen depends on before the screen is built." },
    { id: "supabase", name: "Supabase", url: "https://supabase.com", category: "build",
      description: "Hosted Postgres, auth and storage for small products that need a backend quickly." },

    /* ── Test and ship ──────────────────────────────────────────────── */
    { id: "lighthouse", name: "Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview", category: "test", noPreview: true,
      description: "Performance, accessibility and best-practice scores on every release candidate." },
    { id: "wave", name: "WAVE", url: "https://wave.webaim.org", category: "test",
      description: "Accessibility evaluation in the browser, page by page." },
    { id: "browserstack", name: "BrowserStack", url: "https://www.browserstack.com", category: "test", noPreview: true,
      description: "Real devices and browsers for the final cross-platform pass." },
    { id: "squoosh", name: "Squoosh", url: "https://squoosh.app", category: "test",
      description: "Compress and convert images before they ship." },
    { id: "vercel", name: "Vercel", url: "https://vercel.com", category: "test",
      description: "Preview deployments on every pull request, then production." },
    { id: "netlify", name: "Netlify", url: "https://www.netlify.com", category: "test",
      description: "Static hosting and forms for client sites." }
  ]
};
