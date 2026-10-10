const WINDOW_SPAWN_POINTS = [
  { centerY:51.75, left:31.0833 },
  { centerY:45.75, left:51.0833 },
  { centerY:40.75, left:21 },
  { centerY:37.625, left:11.75 },
  { centerY:32.875, left:46.5833 },
  { centerY:50, left:11.0833 },
  { centerY:35.75, left:24.9167 },
  { centerY:36, left:39.8333 },
  { centerY:40.25, left:42.8333 },
  { centerY:43, left:41.8333 },
  { centerY:37.375, left:47 },
  { centerY:45.5, left:50.9167 },
  { centerY:47.5, left:14.25 },
  { centerY:34.875, left:7.9167 },
  { centerY:40.875, left:50 },
  { centerY:45.75, left:24.9167 },
  { centerY:32.25, left:47 },
  { centerY:35.25, left:9 },
  { centerY:39.625, left:45.0833 },
  { centerY:31.75, left:12.0833 },
  { centerY:53.375, left:11.0833 },
  { centerY:52.125, left:13.4167 }
];
const WINDOW_PLACEMENT = {
  "employee-engagement-app-redesign": 1,
  "service-waze": 2,
  "brand-strategy-programme": 3,
  "foodiezone-pwa": 4,
  "designops-design-system": 5,
  "lula-gazette": 8,
  "addmoredigital-website": 11,
  "africa-cuisine-pwa": 0,
  "toyota-connected-apps": 14,
  "nerdma-website": 16,
  "snb-website": 17,
  "wandisplace-pwa": 18,
  "sk-finds-pwa": 19,
  "notes-about": 20,
  messages: 21,
  instagram: 6
};
const NOTES_APP = {
  id: "notes-about",
  number: "N",
  title: "My CV",
  colors: ["#f3c944", "#fff1a8"]
};
const NOTES_DATA = {
  about: {
    title: "About Lulamile",
    preview: "Devsigner — UX/UI and product design on one side, front-end on the other…",
    content: `
      <div class="notes-editor-body">
        <h1 class="notes-editor-title">About Lulamile</h1>
        <p>Hi, I'm Lulamile Mkhungela — LulaMile-HalfMachine. I'm a <strong>devsigner</strong>: UX/UI and product design on one side, front-end development on the other. I design digital products, brands and websites — then build them, and stay in the room until they actually work.</p>
        <p>Most product designers hand off to developers. I hand off to QA, because the front end is already built. Figma is where the thinking becomes an interface; VS Code is where it becomes a product. Eight years of doing both halves means fewer meetings about what is "technically possible" and more shipping.</p>
        <p>My work sits where design meets delivery: research and information architecture, interface design and design systems, then the build itself — websites, progressive web apps, React and Angular front ends, and the CRM systems behind them. I've worked with organisations like Vodacom, DPSA, Toyota, Nerdma and AddmoreDigital, through iOCO's enterprise clients in pharma, energy, financial services and public audit (anonymised), and with small businesses who needed the same quality of thinking at a smaller scale.</p>
        <p>I've been the designer in the room — and the founder at the table. The domain shifts. The approach doesn't: clear thinking before any pixel or component gets made.</p>
        <p>Outside client work you'll find me in a side project, mentoring upcoming designers and front-end developers, or pushing AI further into the design-to-code workflow. Rooted in Johannesburg. Working anywhere.</p>
        <p>And this portfolio is the receipt: every window, animation and line of code on this desktop was designed and hand-written by me — LulaMile. No template, no page builder.</p>
        <p class="notes-editor-aside">Services, certificates and testimonials all live on the Dock — Services for what I do, Certificates for the paperwork, Messages for what people said.</p>
      </div>`
  },
  cv: {
    title: "CV",
    preview: "Senior Product Designer and Front-End Developer — 8+ years, design through production…",
    content: `
      <div class="notes-editor-body">
        <h1 class="notes-editor-title">CV</h1>
        <p class="notes-cv-contact">Lulamile Mkhungela · Johannesburg, Gauteng · <a href="mailto:mkhungela.l@gmail.com">mkhungela.l@gmail.com</a> · <a href="https://www.linkedin.com/in/lulamile-mkhungela/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>Over the past 8+ years I've designed and built digital products across enterprise software, telecoms, automotive, public sector, fintech and small business — from user research and Figma design systems through to production React and Angular code, WCAG 2.2 AA compliance and UAT.</p>
        <p>I enjoy turning complicated workflows into interfaces that feel obvious, and then writing the front end so nothing gets lost between the file and the screen.</p>
        <h2>Currently</h2><p>Embedded design and front-end authority at iOCO, plus select product, web and brand work directly with founders and teams.</p>
        <h2>Selected highlights</h2><ul><li>92% UAT acceptance on the Vodacom Engage employee app — the highest score in that digital portfolio at the time.</li><li>Cut UI inconsistencies by 65% with a new design system and Design Authority governance at Vodacom.</li><li>Lifted sprint velocity 35% with a shared component library across two products, delivered freelance for AddmoreDigital.</li><li>Increased checkout completion 32% and average order value 18% by taking a 7-step flow down to 3.</li><li>Shipped a 6-micro-frontend architecture and a 13-endpoint notifications system for a national audit platform.</li></ul>
        <h2>Experience</h2><ul><li>iOCO — embedded design and development authority for Eskom, a national audit institution, a financial services group, a global pharmaceutical company, Toyota South Africa, a listed energy group and Vodacom (2021–present). <a class="notes-cv-link" href="portfolio/enterprise-engagements-anonymised.html?embedded=1" target="_blank" rel="noopener noreferrer">Enterprise engagements, anonymised →</a></li><li>UluntuXd — Freelance UX Facilitator and Coach, after hours alongside iOCO (2025–2026)</li><li>IntellehubSA — Freelance UI/UX Designer, after hours alongside iOCO (2025–2026)</li><li>FoodieZone — Freelance Lead Product Designer &amp; Front-End Developer (2025)</li><li>Nerdma — Freelance UI/UX Designer, after hours alongside iOCO (2023)</li><li>AddmoreDigital — UI/UX Designer, then Lead UI/UX Designer, after hours alongside iOCO (2021–2022)</li><li>Hypothetical Objective Systems — Freelance Senior UI/UX Designer and Developer Coach (2020–2022)</li><li>Sesyme and SmartServe — UI/UX and Android Developer (2019–2020)</li><li>The Digital Academy — Lead UI/UX Designer, 1 Aug 2018 to 31 Jan 2019</li><li>mLab — UI/UX and Android Developer (2017–2018)</li></ul>
        <h2>Tools</h2><p>Figma for design, systems and prototypes. VS Code for the build — React, Angular, Ionic, TypeScript. GitHub for everything else. Short list on purpose.</p>
        <h2>Education</h2><p>Full-Stack Development — FNB App of the Year Academy, 2025 (Distinction, 92.7%) · NQF Level 5 Mobile and Web Development — MTN Business App Academy, 2021 · UX/UI Design — Wits JCSE, 2017 · Google UX Design Professional Certificate. Certificates are listed in the Certificates app.</p>
        <p>For a printable version, download the CV as a PDF.</p>
        <a class="notes-cv-link" href="docs/cv/Lulamile-Mkhungela-CV.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF) →</a>
      </div>`
  },
  interests: {
    title: "Interests",
    preview: "Design systems, front-end craft, AI in the workflow, community and music…",
    content: `
      <div class="notes-editor-body">
        <h1 class="notes-editor-title">Interests</h1>
        <h2>Design</h2><ul><li>Product strategy</li><li>Design systems and tokens</li><li>Information architecture</li><li>Typography and interface detail</li><li>Accessibility</li></ul>
        <h2>Building</h2><ul><li>Progressive web apps</li><li>React and Angular front ends</li><li>Micro-frontends</li><li>Design-to-code workflows</li><li>Data visualisation</li></ul>
      <h2>AI and emerging tech</h2><ul><li>Generative AI and RAG</li><li>Claude Code and Cursor</li><li>MCP agents</li><li>Vibe coding — prompting with intent, reviewing like an engineer</li><li>Decision-support tools</li></ul>
      <h2>Community and impact</h2><ul><li>Civic tech for South Africa</li><li>Mentoring upcoming designers &amp; front-end developers</li><li>Entrepreneurship</li><li>Hackathons</li></ul>
      <h2>Beyond the screen</h2><ul><li>Sunday league football — PepeCafe FC, JHB Metro league</li><li>Ambient and sentimental jazz</li><li>Lo-fi and peaceful piano</li><li>Modern classical</li><li>Mid-century furniture and industrial design</li></ul>
      </div>`
  }
};
const NOTES_PANE_WIDTHS = { folders: 180, list: 235 };
const sfIcon = (name, className = "") =>
  `<span class="sf-icon${className ? ` ${className}` : ""}" style="--sf-icon:url(assets/icons/sf/${name}.svg)" aria-hidden="true"></span>`;
// macOS-style alias arrow shown on folders that open a live site instead of
// a case study, so a redirect reads as a shortcut before you click it.
const SHORTCUT_BADGE = `<span class="shortcut-badge" aria-hidden="true"><svg viewBox="0 0 12 12" focusable="false"><path d="M4 8 8 4M5 4h3v3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>`;
const createTrafficControls = title => `
  <div class="traffic" aria-label="Window controls">
    <button type="button" class="traffic-control traffic-close" data-action="close" aria-label="Close ${escape(title)}">
      <img class="traffic-symbol" src="./assets/icons/window/2-close-2-hover.svg?v=2" alt="" aria-hidden="true">
    </button>
    <button type="button" class="traffic-control traffic-minimize" data-action="minimize" aria-label="Minimize ${escape(title)}">
      <img class="traffic-symbol" src="./assets/icons/window/2-minimize-2-hover.svg?v=2" alt="" aria-hidden="true">
    </button>
    <button type="button" class="traffic-control traffic-expand" data-action="maximize" aria-label="Expand ${escape(title)}">
      <img class="traffic-symbol" src="./assets/icons/window/3-maximize-2-hover.svg?v=2" alt="" aria-hidden="true">
    </button>
  </div>`;
const INSTAGRAM_APP = {
  id: "instagram",
  number: "IG",
  title: "Instagram",
  colors: ["#d62976", "#feda75"]
};
// Unused: the dock shows GitHub instead of Instagram. To bring the Instagram window back,
// add a dock slot with id "instagram" in index.html and put your profile URL here.
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/";
const ADOBE_APPS = {
  figma: {
    title: "Figma",
    icon: "./public/icons/dock/figma.svg",
    wideArtboard: true,
    paragraphs: [
      "My digital workshop.",
      "Every product, design system and prototype in this portfolio started here \u2014 then went straight into code."
    ],
    button: "Naturally.",
    link: {
      label: "View product designs \u2197",
      href: "https://www.figma.com/design/z28iI0zJV1u1cL1wQ4HMrx/Lula-Fig-Studio?node-id=0-1&t=oqJux37ElDvne9xu-1"
    },
    left: 56,
    top: 38
  },
  vscode: {
    title: "Visual Studio Code",
    icon: "./public/icons/dock/vscode.svg",
    wideArtboard: true,
    paragraphs: [
      "My front-end bestie.",
      "This is the other half of devsigner: the Figma file becomes React, Angular and Ionic right here \u2014 components, states, accessibility and all."
    ],
    button: "Ship it.",
    left: 46,
    top: 44
  },
  claude: {
    title: "Claude",
    icon: "./public/icons/dock/claude.svg",
    paragraphs: [
      "My AI thought partner.",
      "From research synthesis to Claude Code in the build. Great ideas rarely happen alone."
    ],
    button: "Couldn't agree more.",
    left: 60,
    top: 50
  },
  photoshop: {
    title: "Adobe Photoshop",
    icon: "./public/icons/dock/photoshop.svg",
    wideArtboard: true,
    paragraphs: [
      "The messy half of design.",
      "Retouching, product shots, textures, the cleanup no vector tool can do. It has been on my dock since before Figma existed and it still earns the slot."
    ],
    button: "Old faithful.",
    left: 50,
    top: 34
  },
  storybook: {
    title: "Storybook",
    icon: "./public/icons/dock/storybook.svg",
    paragraphs: [
      "The design system, running.",
      "Every component in every state, documented and testable. My DesignOps pipeline generates it straight from the tokens, so the documentation cannot drift away from the code."
    ],
    button: "Tidy.",
    left: 42,
    top: 56
  },
  postman: {
    title: "Postman",
    icon: "./public/icons/dock/postman.svg",
    paragraphs: [
      "Where the interface meets the API.",
      "I design against real responses instead of placeholder text. Saved requests for the states a UI has to survive: empty, slow, paginated, and the one that returns an error at the worst moment."
    ],
    button: "Send.",
    left: 64,
    top: 42
  },
  hotjar: {
    title: "Hotjar",
    icon: "./public/icons/dock/hotjar.svg",
    paragraphs: [
      "Evidence instead of opinions.",
      "Heatmaps, session recordings and on-page surveys on the live product. It shows where people actually hesitate, rage-click or give up, which is how a redesign stops being a matter of taste."
    ],
    button: "Show me the recording.",
    left: 58,
    top: 60
  },
  azuredevops: {
    title: "Azure DevOps",
    icon: "./public/icons/dock/azuredevops.svg?v=2",
    paragraphs: [
      "Where enterprise work actually lives.",
      "Boards, repos, pull requests, pipelines and UAT sign-off. On Vodacom and Toyota delivery this is the difference between a design that was approved and a design that shipped."
    ],
    button: "Move it to done.",
    left: 68,
    top: 52
  },
  github: {
    title: "GitHub",
    icon: "./public/icons/dock/github.svg",
    wideArtboard: true,
    paragraphs: [
      "Where the code proves the design.",
      "Every project on this desktop lives in a repository — branches, pull requests, reviews and the occasional 2am revert. A design decision is only real once it is merged.",
      "git status: portfolio clean. git log: eight years of shipping."
    ],
    button: "git push origin main.",
    left: 44,
    top: 48
  }
};
const RIGHT_CLICK_ALERT_ID = "right-click-alert";
const RIGHT_CLICK_ALERT = Object.freeze({
  title: "Nice try.",
  headline: "Caught you snooping. 👀",
  icon: "./assets/icons/system/alert-stop.png",
  paragraphs: ["Right-click is disabled. Enjoy the design like a normal person. 😂"],
  button: "Fine. 🙄",
  className: "right-click-alert",
  centerInWorkspace: true
});
const DOCK_APPS = [
  { id: "figma", label: "Figma", ariaLabel: "Open Figma", icon: "./public/icons/dock/figma.svg", group: "primary" },
  { id: "vscode", label: "VS Code", ariaLabel: "Open Visual Studio Code", icon: "./public/icons/dock/vscode.svg", group: "primary" },
  { id: "claude", label: "Claude", ariaLabel: "Open Claude", icon: "./public/icons/dock/claude.svg", group: "primary" },
  { id: "photoshop", label: "Photoshop", ariaLabel: "Open Adobe Photoshop", icon: "./public/icons/dock/photoshop.svg", group: "primary" },
  { id: "storybook", label: "Storybook", ariaLabel: "Open Storybook", icon: "./public/icons/dock/storybook.svg", group: "primary" },
  { id: "postman", label: "Postman", ariaLabel: "Open Postman", icon: "./public/icons/dock/postman.svg", group: "primary" },
  { id: "hotjar", label: "Hotjar", ariaLabel: "Open Hotjar", icon: "./public/icons/dock/hotjar.svg", group: "primary" },
  { id: "azuredevops", label: "Azure DevOps", ariaLabel: "Open Azure DevOps", icon: "./public/icons/dock/azuredevops.svg?v=2", group: "primary" },
  { id: "notes", label: "My CV", ariaLabel: "Open My CV in Notes", icon: "./public/icons/dock/notes.svg", group: "secondary", opticalScale: 1.01 },
  { id: "services", label: "Services", ariaLabel: "Open Services", icon: "./public/icons/dock/services.svg", group: "secondary", opticalScale: 1.02 },
  { id: "certificates", label: "Certificates", ariaLabel: "Open Certificates", icon: "./public/icons/dock/certificates.svg", group: "secondary", opticalScale: 1.02 },
  { id: "mail", label: "Mail", ariaLabel: "Send Lulamile Mkhungela an email", icon: "./public/icons/dock/mail.svg", group: "secondary", href: "mailto:mkhungela.l@gmail.com" },
  { id: "messages", label: "Testimonials", windowTitle: "Messages", ariaLabel: "Open Messages testimonials", icon: "./public/icons/dock/imessage.svg", group: "secondary", action: "openMessages" },
  { id: "linkedin", label: "LinkedIn", ariaLabel: "Open Lulamile Mkhungela on LinkedIn", icon: "./public/icons/dock/linkedin.svg", group: "secondary", href: "https://www.linkedin.com/in/lulamile-mkhungela/", external: true },
  { id: "github", label: "GitHub", ariaLabel: "Open GitHub", icon: "./public/icons/dock/github.svg", group: "secondary" },
  { id: "settings", label: "Settings", ariaLabel: "Open Settings", icon: "./public/icons/dock/settings.svg", group: "system", opticalScale: 1.02, mobile: false },
  { id: "vision-bin", label: "Vision Bin", ariaLabel: "Open Vision Bin", icon: "./public/icons/dock/vision-bin.png", group: "system", opticalScale: 1.14, desktopOpticalScale: 1.14 }
];

function renderMobileDockFromSharedApps() {
  const mobileDockElement = document.querySelector("#mobile-dock");
  const mobileDockList = mobileDockElement.querySelector("#mobile-dock-list");
  let previousGroup = null;
  mobileDockList.replaceChildren();
  DOCK_APPS.filter(app => app.mobile !== false).forEach(app => {
    if (previousGroup && app.group !== previousGroup) {
      const divider = document.createElement("span");
      divider.className = "mobile-dock-divider";
      divider.setAttribute("aria-hidden", "true");
      mobileDockList.append(divider);
    }
    const item = document.createElement(app.href ? "a" : "button");
    item.className = "mobile-dock-item";
    item.dataset.app = app.id;
    item.setAttribute("aria-label", app.ariaLabel);
    if (ADOBE_APPS[app.id]) {
      item.setAttribute("aria-haspopup", "dialog");
      item.setAttribute("aria-expanded", "false");
    }
    if (app.opticalScale) item.style.setProperty("--icon-optical-scale", String(app.opticalScale));
    if (app.href) {
      item.href = app.href;
      if (app.external) {
        item.target = "_blank";
        item.rel = "noopener noreferrer";
      }
    } else {
      item.type = "button";
      item.dataset.mobileApp = app.id;
    }
    const image = document.createElement("img");
    image.className = "mobile-dock-icon";
    image.src = app.icon;
    image.alt = "";
    image.draggable = false;
    if (app.id === "vision-bin") image.style.transformOrigin = "center bottom";
    item.append(image);
    mobileDockList.append(item);
    previousGroup = app.group;
  });
}
renderMobileDockFromSharedApps();
const WINDOW_SESSION_POSITIONS = new Map();
const DESKTOP_FILE_POSITION_KEY = "lm-portfolio-desktop-file-positions-v1";
function readDesktopFilePositions() {
  try {
    const saved = JSON.parse(localStorage.getItem(DESKTOP_FILE_POSITION_KEY) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}
const desktopFilePositions = readDesktopFilePositions();
const canonicalDesktopPositions = new Map(
  projects.map(project => [project.id, { ...project.position }])
);
const CURATED_POSITION_DOMAIN = {
  left: 8,
  right: 88,
  top: 10,
  bottom: 81
};
let desktopLayoutFrame = 0;
let desktopDockLayoutAdjustedThisSession = false;
// Single source of truth for the collection filter labels. Used by the generated
// menu items, the trigger label and the filter logic. Change them here only.
const ALL_WORK_FILTER = "All Work";
const CLEAR_FILTER_LABEL = "Clear Filter";
let activeCollectionFilter = ALL_WORK_FILTER;
let collectionFilterRun = 0;
const PRIMARY_COLLECTION_FILTERS = new Set(["Product", "Brand", "Impact", "Web"]);

function getDesktopFileSafeBounds({ respectDock = desktopDockLayoutAdjustedThisSession } = {}) {
  const layerRect = projectLayer.getBoundingClientRect();
  const dockRect = dock?.getBoundingClientRect();
  const horizontalInset = Math.max(80, layerRect.width * .08);
  let left = Math.max(50, horizontalInset + 50);
  let right = Math.max(left, Math.min(layerRect.width - 80, layerRect.width * .88));
  const top = Math.max(65, layerRect.height * .10);
  let bottom = layerRect.height - 150;

  if (respectDock && dockRect) {
    const dockPosition = dock?.dataset.position || document.body.dataset.dockPosition || "bottom";
    if (dockPosition === "bottom") {
      const dockTop = dockRect.top - layerRect.top;
      bottom = Math.min(bottom, dockTop - 120);
    } else if (dockPosition === "left") {
      left = Math.max(left, dockRect.right - layerRect.left + 70);
    } else if (dockPosition === "right") {
      right = Math.min(right, dockRect.left - layerRect.left - 70);
    }
  }

  right = Math.max(left, right);
  bottom = Math.max(top, bottom);

  return { left, right, top, bottom };
}

function applyCuratedDesktopPosition(button, project, options = {}) {
  const bounds = getDesktopFileSafeBounds(options);
  const canonicalPosition = canonicalDesktopPositions.get(project.id) || project.position;
  const authoredLeft = Number.parseFloat(canonicalPosition.left);
  const authoredTop = Number.parseFloat(canonicalPosition.top);
  const xProgress = Math.max(0, Math.min(1,
    (authoredLeft - CURATED_POSITION_DOMAIN.left) /
    (CURATED_POSITION_DOMAIN.right - CURATED_POSITION_DOMAIN.left)
  ));
  const yProgress = Math.max(0, Math.min(1,
    (authoredTop - CURATED_POSITION_DOMAIN.top) /
    (CURATED_POSITION_DOMAIN.bottom - CURATED_POSITION_DOMAIN.top)
  ));

  button.style.left = `${bounds.left + (bounds.right - bounds.left) * xProgress}px`;
  button.style.top = `${bounds.top + (bounds.bottom - bounds.top) * yProgress}px`;
}

function updateCuratedDesktopPositions(options = {}) {
  if (activeCollectionFilter !== ALL_WORK_FILTER) return;
  cancelAnimationFrame(desktopLayoutFrame);
  desktopLayoutFrame = requestAnimationFrame(() => {
    projects.forEach(project => {
      const button = projectLayer.querySelector(`[data-project-id="${project.id}"][data-curated-position="true"]`);
      if (button) applyCuratedDesktopPosition(button, project, options);
    });
  });
}

function saveDesktopFilePosition(projectId, button) {
  if (activeCollectionFilter !== ALL_WORK_FILTER) return;
  const layerWidth = projectLayer.clientWidth || 1;
  const layerHeight = projectLayer.clientHeight || 1;
  button.dataset.curatedPosition = "false";
  desktopFilePositions[projectId] = {
    left: Number((button.offsetLeft / layerWidth * 100).toFixed(4)),
    top: Number((button.offsetTop / layerHeight * 100).toFixed(4))
  };
  try {
    localStorage.setItem(DESKTOP_FILE_POSITION_KEY, JSON.stringify(desktopFilePositions));
  } catch {}
}
const projectLayer = document.querySelector("#project-layer");
const mobileList = document.querySelector("#mobile-list");
const windowsRoot = document.querySelector("#windows");
const systemBar = document.querySelector(".system-bar");
const dock = document.querySelector("#dock");
const dockTrack = document.querySelector("#dock-track");
const dockResizeHandles = [...document.querySelectorAll(".dock-resize-handle")];
const dockMinimizedDivider = document.querySelector("#dock-minimized-divider");
const dockMinimizedWindows = document.querySelector("#dock-minimized-windows");
const collectionsControl = document.querySelector(".collections-control");
const collectionsHelperTrigger = document.querySelector("#collections-helper-trigger");
const collectionsTrigger = document.querySelector("#collections-trigger");
const collectionsTriggerLabel = document.querySelector("#collections-trigger-label");
const collectionsMenu = document.querySelector("#collections-menu");
const collectionsFilterStatus = document.querySelector("#collections-filter-status");
const collectionsSheet = document.querySelector("#collections-sheet");
const collectionsSheetBackdrop = document.querySelector("#collections-sheet-backdrop");
const collectionsSheetDone = document.querySelector("#collections-sheet-done");
const collectionsSheetHandle = collectionsSheet.querySelector(".collections-sheet-handle");
const collectionsSheetHeader = collectionsSheet.querySelector(".collections-sheet-header");
const collectionsSheetOptions = collectionsSheet.querySelector(".collections-sheet-options");
const mobileDesktop = document.querySelector("#mobile-desktop");
const mobileDock = document.querySelector("#mobile-dock");
const mobileAppWindow = document.querySelector("#mobile-app-window");
const mobileAppContent = document.querySelector("#mobile-app-content");
const mobileWindowTitle = document.querySelector("#mobile-window-title");
const mobileWindowBack = document.querySelector("#mobile-window-back");
const mobileViewport = window.matchMedia("(max-width: 767px)");
const mobileAppAlertBackdrop = document.querySelector("[data-mobile-alert-backdrop]");
const mobileAppAlert = document.querySelector("[data-mobile-alert]");
const mobileAppAlertIcon = document.querySelector("[data-mobile-alert-icon]");
const mobileAppAlertTitle = document.querySelector("[data-mobile-alert-title]");
const mobileAppAlertMessage = document.querySelector("[data-mobile-alert-message]");
const mobileAppAlertDismiss = document.querySelector("[data-mobile-alert-dismiss]");
let activeMobileAppAlert = null;
let mobileAppAlertTrigger = null;
let mobileAlertScrollTop = 0;
let mobileAlertCloseTimer = 0;
function applySharedDockConfigurationToDesktop() {
  const groups = new Map([...dockTrack.querySelectorAll(":scope > .dock-group")].map(group => [group.dataset.group, group]));
  DOCK_APPS.forEach(app => {
    const slot = dockTrack.querySelector(`.dock-slot[data-dock-id="${app.id}"]`);
    const group = groups.get(app.group);
    if (!slot || !group) return;
    const item = slot.querySelector(":scope > .dock-item");
    const image = item?.querySelector("img");
    const iconScale = item?.querySelector(":scope > .dock-icon-scale");
    if (item) {
      item.dataset.label = app.label;
      item.setAttribute("aria-label", app.ariaLabel);
    }
    if (image) image.src = app.icon;
    if (iconScale && app.desktopOpticalScale) {
      iconScale.style.setProperty("--dock-art-scale", String(app.desktopOpticalScale));
    }
    group.append(slot);
  });
}
applySharedDockConfigurationToDesktop();
function syncCollectionsTriggerMode() {
  const controls = mobileViewport.matches ? "collections-sheet" : "collections-menu";
  collectionsTrigger.setAttribute("aria-haspopup", "menu");
  collectionsTrigger.setAttribute("aria-controls", controls);
  collectionsHelperTrigger?.setAttribute("aria-controls", controls);
}
syncCollectionsTriggerMode();
function installDockLabels(root = dock) {
  root.querySelectorAll(".dock-item[data-label]").forEach(item => {
    if (item.querySelector(":scope > .dock-label")) return;
    const label = document.createElement("span");
    label.className = "dock-label";
    label.setAttribute("aria-hidden", "true");
    label.textContent = item.dataset.label;
    item.append(label);
  });
}
installDockLabels();
let windowCount = 0;
let spawnSequence = 0;
let embeddedProjectCascadeSequence = 0;
const EMBEDDED_PROJECT_CASCADE_OFFSETS = [
  { x: 0, y: 0 },
  { x: 28, y: 22 },
  { x: 62, y: 49 },
  { x: 88, y: 68 },
  { x: 119, y: 93 }
];
let layer = 20;
let iconDrag = null;
let selectedDesktopFolder = null;
let windowDrag = null;
let windowResizeState = null;
let windowResizeFrame = 0;
let instagramWindow = null;
const openProjectWindows = new Map();
const openAppWindows = new Map();
const windowStates = new Map();
const windowDefaultStates = new Map();
let adobeAlertDrag = null;
const adobeAlerts = new Map();
const escape = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));

const DESKTOP_INTERACTION = Object.freeze({
  tooltipDelay: 300,
  refocusDuration: 180,
  windowCloseDuration: 190
});

function scheduleUtilityWindowDrag(element, left, top) {
  const drag = windowDrag;
  if (!drag || drag.element !== element) return;
  drag.pendingLeft = left;
  drag.pendingTop = top;
  if (drag.frame) return;
  drag.frame = requestAnimationFrame(() => {
    drag.frame = 0;
    if (windowDrag !== drag || !drag.element?.isConnected) return;
    drag.element.style.left = `${drag.pendingLeft}px`;
    drag.element.style.top = `${drag.pendingTop}px`;
  });
}

function flushUtilityWindowDrag(drag) {
  if (!drag) return;
  if (drag.frame) cancelAnimationFrame(drag.frame);
  drag.frame = 0;
  if (!Number.isFinite(drag.pendingLeft) || !Number.isFinite(drag.pendingTop)) return;
  drag.element.style.left = `${drag.pendingLeft}px`;
  drag.element.style.top = `${drag.pendingTop}px`;
}

const WINDOW_STATUS = Object.freeze({
  NORMAL: "normal",
  MINIMIZING: "minimizing",
  MINIMIZED: "minimized",
  RESTORING: "restoring",
  CLOSED: "closed"
});
const MINIMIZED_DOCK_STATUSES = new Set([
  WINDOW_STATUS.MINIMIZING,
  WINDOW_STATUS.MINIMIZED,
  WINDOW_STATUS.RESTORING
]);

function registerOpenWindow(id, element, project) {
  const previous = windowStates.get(id);
  windowStates.set(id, {
    ...(previous || {}),
    id,
    element,
    project,
    status: WINDOW_STATUS.NORMAL,
    preview: null,
    slot: null,
    transitionAnimation: null,
    transitionShell: null,
    transitionSurface: previous?.transitionSurface || null,
    snapshotRevision: previous?.snapshotRevision || 0
  });
}

function isWindowMinimized(id) {
  const status = windowStates.get(id)?.status;
  return status === WINDOW_STATUS.MINIMIZING ||
    status === WINDOW_STATUS.MINIMIZED ||
    status === WINDOW_STATUS.RESTORING;
}

function forgetWindowState(id) {
  const state = windowStates.get(id);
  if (!state) return;
  state.status = WINDOW_STATUS.CLOSED;
  state.snapshotRevision = (state.snapshotRevision || 0) + 1;
  if (state.snapshotTimer) window.clearTimeout(state.snapshotTimer);
  state.transitionAnimation?.cancel?.();
  removeEmptyWindowTransitionLayer(state.transitionShell);
  state.slot?.remove();
  state.cachedTransitionSnapshot = null;
  state.cachedPreviewSnapshot = null;
  state.transitionSurface = null;
  windowStates.delete(id);
  windowDefaultStates.delete(id);
  syncMinimizedDockVisibility();
  scheduleDockFitUpdate();
}

function updateClock() {
  document.querySelector("#clock").textContent = new Intl.DateTimeFormat("en", { hour:"numeric", minute:"2-digit" }).format(new Date());
}
updateClock();
setInterval(updateClock, 30000);

function selectDesktopFolder(folder) {
  if (selectedDesktopFolder && selectedDesktopFolder !== folder) {
    selectedDesktopFolder.classList.remove("is-selected");
  }
  folder.classList.add("is-selected");
  selectedDesktopFolder = folder;
}

function clearDesktopFolderSelection() {
  selectedDesktopFolder?.classList.remove("is-selected");
  selectedDesktopFolder = null;
}

projects.forEach(project => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-icon desktop-folder";
  const savedPosition = desktopFilePositions[project.id];
  const hasSavedPosition = Number.isFinite(savedPosition?.left) && Number.isFinite(savedPosition?.top);
  button.dataset.curatedPosition = hasSavedPosition ? "false" : "true";
  button.style.left = hasSavedPosition ? `${savedPosition.left}%` : project.position.left;
  button.style.top = hasSavedPosition ? `${savedPosition.top}%` : project.position.top;
  button.dataset.projectId = project.id;
  button.dataset.category = project.category;
  button.dataset.tags = project.tags.join(",");
  button.dataset.modal = project.modal;
  button.dataset.url = project.url;
  if (project.external) button.dataset.external = "true";
  button.hidden = !projectMatchesCollection(project, activeCollectionFilter);
  button.setAttribute("aria-label", project.ariaLabel || `Open ${project.title}`);
  button.innerHTML = `<img class="project-folder desktop-folder-icon" src="${escape(project.icon)}" alt="" aria-hidden="true">${project.external ? SHORTCUT_BADGE : ""}<span class="project-label desktop-folder-label"><span class="desktop-folder-title">${escape(project.folderTitle || project.title)}</span><span class="desktop-folder-subtitle">${escape(project.subtitle)}</span></span>`;
  button.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    selectDesktopFolder(button);
    iconDrag = { button, x:event.clientX, y:event.clientY, left:button.offsetLeft, top:button.offsetTop, moved:false };
    button.setPointerCapture(event.pointerId);
  });
  button.addEventListener("pointermove", event => {
    if (!iconDrag || iconDrag.button !== button) return;
    const dx = event.clientX - iconDrag.x;
    const dy = event.clientY - iconDrag.y;
    if (Math.hypot(dx, dy) > 5) iconDrag.moved = true;
    button.style.left = `${iconDrag.left + dx}px`;
    button.style.top = `${iconDrag.top + dy}px`;
  });
  button.addEventListener("pointerup", () => {
    if (iconDrag?.button !== button) return;
    if (iconDrag.moved) {
      saveDesktopFilePosition(project.id, button);
      button.dataset.wasDragged = "true";
      setTimeout(() => {
        if (button.dataset.wasDragged === "true") button.dataset.wasDragged = "false";
      }, 0);
    }
    iconDrag = null;
  });
  button.addEventListener("pointercancel", () => {
    if (iconDrag?.button !== button) return;
    if (iconDrag.moved) {
      saveDesktopFilePosition(project.id, button);
      button.dataset.wasDragged = "false";
    }
    iconDrag = null;
  });
  button.addEventListener("click", event => {
    if (button.dataset.wasDragged === "true") {
      button.dataset.wasDragged = "false";
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    selectDesktopFolder(button);
    if (project.external) {
      window.open(project.url, "_blank", "noopener");
      return;
    }
    openProject(project);
  });
  projectLayer.append(button);

  const mobileFolder = document.createElement("button");
  mobileFolder.type = "button";
  mobileFolder.className = "mobile-project-folder";
  mobileFolder.dataset.projectId = project.id;
  mobileFolder.dataset.category = project.category;
  mobileFolder.dataset.tags = project.tags.join(",");
  mobileFolder.hidden = !projectMatchesCollection(project, activeCollectionFilter);
  mobileFolder.setAttribute("aria-label", project.ariaLabel || `Open ${project.title}`);
  mobileFolder.innerHTML = `<span class="mobile-folder-icon-wrap"><img class="mobile-project-folder-icon" src="${escape(project.icon)}" alt="" aria-hidden="true" draggable="false">${project.external ? SHORTCUT_BADGE : ""}</span><span class="mobile-folder-label"><b class="mobile-folder-title">${escape(project.folderTitle || project.title)}</b><small class="mobile-folder-subtitle">${escape(project.subtitle)}</small></span>`;
  mobileFolder.addEventListener("click", () => {
    if (project.external) {
      window.open(project.url, "_blank", "noopener");
      return;
    }
    openMobileProject(project);
  });
  mobileList.append(mobileFolder);
});
projectLayer.addEventListener("click", event => {
  if (event.target !== projectLayer) return;
  clearDesktopFolderSelection();
  closeTopProjectWindow();
});

// Clicking away from an open project window closes it, the way a card or
// popover dismisses on macOS. Only the topmost window closes per click.
function closeTopProjectWindow() {
  const openWindows = [...document.querySelectorAll(".project-window:not(.is-closing)")]
    .sort((a, b) => Number(a.style.zIndex || 0) - Number(b.style.zIndex || 0));
  const top = openWindows.at(-1);
  top?.querySelector('[data-action="close"]')?.click();
}
updateCuratedDesktopPositions();

let mobileDesktopScrollPosition = 0;
let mobileBackAction = null;

function setMobileWindowBack(action, label = "Close window") {
  mobileBackAction = action;
  mobileWindowBack.setAttribute("aria-label", label);
}

function openMobileShell(title) {
  if (!mobileViewport.matches) return false;
  mobileAppWindow._cancelGalleryLoading?.();
  mobileAppWindow._cancelGalleryLoading = null;
  mobileAppWindow._galleryRequestToken = null;
  mobileDesktopScrollPosition = mobileDesktop.scrollTop;
  closeCollectionsMenu();
  mobileWindowTitle.textContent = title;
  mobileAppWindow.setAttribute("aria-label", title);
  mobileAppWindow.hidden = false;
  document.body.classList.add("has-mobile-app-open");
  syncVisionBinProjectFilterLock();
  mobileAppContent.replaceChildren();
  mobileAppContent.classList.remove("is-notes-list");
  setMobileWindowBack(closeMobileApp);
  requestAnimationFrame(() => mobileWindowBack.focus({ preventScroll: true }));
  return true;
}

function closeMobileApp() {
  if (mobileAppWindow.hidden) return;
  mobileAppWindow._cancelGalleryLoading?.();
  mobileAppWindow._cancelGalleryLoading = null;
  mobileAppWindow._galleryRequestToken = null;
  mobileAppWindow.hidden = true;
  mobileAppContent.replaceChildren();
  mobileAppContent.classList.remove("is-notes-list");
  document.body.classList.remove("has-mobile-app-open");
  mobileWindowTitle.textContent = "";
  mobileBackAction = null;
  syncVisionBinProjectFilterLock();
  requestAnimationFrame(() => {
    mobileDesktop.scrollTop = mobileDesktopScrollPosition;
  });
}

let projectLoaderSequence = 0;
const PROJECT_LOADER_DELAY = 400;
const PROJECT_LOADER_MINIMUM_VISIBLE = 250;
const PROJECT_LOAD_TIMEOUT = 12000;

function createProjectLoadingState(project, loadingLabel = "Opening project") {
  const loading = document.createElement("div");
  const filterId = `project-gooey-${++projectLoaderSequence}`;
  loading.className = "project-loading-state";
  loading.dataset.projectLoading = "";
  loading.hidden = true;
  loading.innerHTML = `
    <div class="loader-gooey-blobs" role="status" aria-label="Opening ${escape(project.title)}">
      <svg class="loader-gooey-filter" width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="${filterId}">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="gooey"></feBlend>
          </filter>
        </defs>
      </svg>
      <span class="loader-gooey-track" style="filter:url(#${filterId})" aria-hidden="true">
        <span class="loader-gooey-blob"></span>
        <span class="loader-gooey-blob"></span>
        <span class="loader-gooey-blob"></span>
      </span>
    </div>
    <p class="project-loading-title">${escape(project.title)}</p>
    <p class="project-loading-label">${escape(loadingLabel)}</p>
    <button class="project-loading-retry" type="button" hidden>Retry</button>`;
  return loading;
}

function runWithProjectLoadingState(container, subject, task, loadingLabel = "Opening project") {
  const loading = createProjectLoadingState(subject, loadingLabel);
  let loaderTimer = 0;
  let hideTimer = 0;
  let loaderShown = false;
  let loaderVisibleAt = 0;
  let cancelled = false;

  const wait = duration => new Promise(resolve => {
    hideTimer = window.setTimeout(resolve, duration);
  });
  const cancel = () => {
    cancelled = true;
    window.clearTimeout(loaderTimer);
    window.clearTimeout(hideTimer);
    loading.remove();
  };
  const showLoader = () => {
    if (cancelled || !loading.isConnected) return;
    loaderShown = true;
    loaderVisibleAt = performance.now();
    loading.hidden = false;
    requestAnimationFrame(() => {
      if (!cancelled && loading.isConnected) loading.classList.add("is-visible");
    });
  };
  const finishLoader = async () => {
    window.clearTimeout(loaderTimer);
    if (cancelled) return;
    if (!loaderShown) {
      loading.remove();
      return;
    }

    const elapsed = performance.now() - loaderVisibleAt;
    const remaining = Math.max(0, PROJECT_LOADER_MINIMUM_VISIBLE - elapsed);
    if (remaining) await wait(remaining);
    if (cancelled || !loading.isConnected) return;
    loading.classList.remove("is-visible");
    loading.classList.add("is-hidden");
    loading.setAttribute("aria-hidden", "true");
    await wait(220);
    if (!cancelled) loading.remove();
  };

  container.append(loading);
  loaderTimer = window.setTimeout(showLoader, PROJECT_LOADER_DELAY);
  const promise = Promise.resolve()
    .then(task)
    .then(async result => {
      await finishLoader();
      return result;
    }, async error => {
      await finishLoader();
      throw error;
    });

  return { promise, cancel };
}

function wireProjectLoading(frame, loading, source, onReady) {
  const loadingTitle = loading.querySelector(".project-loading-title");
  const loadingLabel = loading.querySelector(".project-loading-label");
  const retry = loading.querySelector(".project-loading-retry");
  let attempt = 0;
  let loaderTimer = 0;
  let timeoutTimer = 0;
  let hideTimer = 0;
  let loadHandler = null;

  const clearAttemptTimers = () => {
    window.clearTimeout(loaderTimer);
    window.clearTimeout(timeoutTimer);
    window.clearTimeout(hideTimer);
  };

  const startAttempt = (isRetry = false) => {
    attempt += 1;
    const currentAttempt = attempt;
    let isLoaded = false;
    let loaderShown = false;
    let loaderVisibleAt = 0;

    clearAttemptTimers();
    if (loadHandler) frame.removeEventListener("load", loadHandler);
    frame.classList.remove("is-loaded");
    frame.setAttribute("aria-busy", "true");
    loading.hidden = true;
    loading.classList.remove("is-visible", "is-hidden", "is-error");
    loading.removeAttribute("aria-hidden");
    loadingTitle.textContent = frame.title.replace(/ case study$/i, "");
    loadingLabel.textContent = "Opening project";
    retry.hidden = true;

    const showLoader = () => {
      if (isLoaded || currentAttempt !== attempt) return;
      loaderShown = true;
      loaderVisibleAt = performance.now();
      loading.hidden = false;
      requestAnimationFrame(() => {
        if (!isLoaded && currentAttempt === attempt) loading.classList.add("is-visible");
      });
    };

    const finishLoadingState = () => {
      loading.classList.remove("is-visible");
      loading.classList.add("is-hidden");
      loading.setAttribute("aria-hidden", "true");
      hideTimer = window.setTimeout(() => {
        if (currentAttempt !== attempt) return;
        loading.hidden = true;
        loading.remove();
      }, 220);
    };

    loadHandler = () => {
      if (isLoaded || currentAttempt !== attempt) return;
      isLoaded = true;
      window.clearTimeout(loaderTimer);
      window.clearTimeout(timeoutTimer);
      frame.classList.add("is-loaded");
      frame.setAttribute("aria-busy", "false");
      onReady?.();

      if (!loaderShown) {
        loading.hidden = true;
        loading.remove();
        return;
      }

      const elapsed = performance.now() - loaderVisibleAt;
      const remaining = Math.max(0, PROJECT_LOADER_MINIMUM_VISIBLE - elapsed);
      hideTimer = window.setTimeout(finishLoadingState, remaining);
    };
    frame.addEventListener("load", loadHandler, { once: true });

    loaderTimer = window.setTimeout(showLoader, PROJECT_LOADER_DELAY);
    timeoutTimer = window.setTimeout(() => {
      if (isLoaded || currentAttempt !== attempt) return;
      showLoader();
      loading.hidden = false;
      loading.classList.add("is-visible", "is-error");
      loadingTitle.textContent = "Unable to open project";
      loadingLabel.textContent = "Check your connection and try again.";
      frame.setAttribute("aria-busy", "false");
      retry.hidden = false;
      retry.focus({ preventScroll: true });
    }, PROJECT_LOAD_TIMEOUT);

    const retrySource = isRetry
      ? `${source}${source.includes("?") ? "&" : "?"}_retry=${Date.now()}`
      : source;
    frame.src = retrySource ? withAppearance(retrySource) : "about:blank";
  };

  retry.addEventListener("click", () => startAttempt(true));
  startAttempt();
  return () => {
    attempt += 1;
    clearAttemptTimers();
    if (loadHandler) frame.removeEventListener("load", loadHandler);
  };
}

function openMobileProject(project) {
  if (project.external) {
    window.open(project.url, "_blank", "noopener");
    return;
  }
  if (!mobileViewport.matches) {
    openProject(project);
    return;
  }
  if (!openMobileShell(project.title)) return;
  const frame = document.createElement("iframe");
  const loading = createProjectLoadingState(project);
  frame.className = "embedded-project-frame mobile-project-frame";
  frame.title = `${project.title} case study`;
  frame.loading = "eager";
  mobileAppContent.append(loading, frame);
  wireProjectLoading(frame, loading, project.url || "about:blank");
}

function openMobileNotes() {
  if (!openMobileShell("Notes")) return;
  const mobileNotePreviews = {
    about: NOTES_DATA.about.preview,
    cv: NOTES_DATA.cv.preview,
    interests: NOTES_DATA.interests.preview
  };
  const showList = () => {
    mobileWindowTitle.textContent = "Notes";
    setMobileWindowBack(closeMobileApp, "Close Notes");
    mobileAppContent.classList.add("is-notes-list");
    mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-note-list mobile-list-screen">
      <section class="mobile-notes-section">
        <button class="mobile-notes-section-header" type="button" aria-expanded="true" aria-controls="mobile-pinned-notes">
          <span>Pinned</span>
          <img src="./assets/icons/sf/chevron.down.svg" alt="" aria-hidden="true">
        </button>
        <div class="mobile-notes-group" id="mobile-pinned-notes">
          ${Object.entries(NOTES_DATA).map(([id, note]) => `
            <button class="mobile-note-row" type="button" data-mobile-note="${escape(id)}">
              <span class="mobile-note-title">${escape(note.title)}</span>
              <span class="mobile-note-preview">${escape(mobileNotePreviews[id] || note.preview)}</span>
            </button>`).join("")}
        </div>
      </section>
    </div>`;
    const section = mobileAppContent.querySelector(".mobile-notes-section");
    const sectionHeader = mobileAppContent.querySelector(".mobile-notes-section-header");
    sectionHeader.addEventListener("click", () => {
      const expanded = sectionHeader.getAttribute("aria-expanded") === "true";
      sectionHeader.setAttribute("aria-expanded", String(!expanded));
      section.classList.toggle("is-collapsed", expanded);
    });
    mobileAppContent.querySelectorAll("[data-mobile-note]").forEach(button => {
      button.addEventListener("click", () => showNote(button.dataset.mobileNote));
    });
  };
  const showNote = noteId => {
    const note = NOTES_DATA[noteId] || NOTES_DATA.about;
    mobileAppContent.classList.remove("is-notes-list");
    mobileWindowTitle.textContent = note.title;
    setMobileWindowBack(showList, "Back to Notes");
    mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-detail">${note.content}</div>`;
  };
  showList();
}

const nativeIncomingTailElements = new Set();
function updateNativeIncomingTail(element) {
  const { width, height } = element.getBoundingClientRect();
  if (width < 24 || height < 24) return;
  const right = width.toFixed(2);
  const bottom = height.toFixed(2);
  const radius = Math.min(18, height / 2).toFixed(2);
  const rightCurve = (width - Math.min(18, width / 2)).toFixed(2);
  const path = [
    `M22 0H${rightCurve}`,
    `Q${right} 0 ${right} ${radius}`,
    `V${(height - Math.min(18, height / 2)).toFixed(2)}`,
    `Q${right} ${bottom} ${rightCurve} ${bottom}`,
    `H18C14 ${bottom} 12 ${(height - 2).toFixed(2)} 12 ${(height - 5).toFixed(2)}`,
    `C9 ${(height - 3).toFixed(2)} 5 ${(height - 1).toFixed(2)} 0 ${bottom}`,
    `C4 ${(height - 5).toFixed(2)} 6 ${(height - 8).toFixed(2)} 4 ${(height - 12).toFixed(2)}`,
    `V${radius}Q4 0 22 0Z`
  ].join("");
  const clip = `path("${path}")`;
  element.style.clipPath = clip;
  element.style.webkitClipPath = clip;
}
const nativeIncomingTailObserver = new ResizeObserver(entries => {
  entries.forEach(entry => updateNativeIncomingTail(entry.target));
});
function installNativeIncomingTails(root) {
  nativeIncomingTailElements.forEach(element => {
    if (element.isConnected) return;
    nativeIncomingTailObserver.unobserve(element);
    nativeIncomingTailElements.delete(element);
  });
  root.querySelectorAll(".has-native-tail").forEach(element => {
    updateNativeIncomingTail(element);
    if (nativeIncomingTailElements.has(element)) return;
    nativeIncomingTailElements.add(element);
    nativeIncomingTailObserver.observe(element);
  });
}

function openMobileMessages() {
  if (!openMobileShell("Messages")) return;
  let searchQuery = "";
  const showList = () => {
    mobileWindowTitle.textContent = "Messages";
    setMobileWindowBack(closeMobileApp, "Close Messages");
    mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-messages-screen">
      <div class="mobile-messages-search-wrap">
        <label class="mobile-messages-search">
          <img src="./assets/icons/sf/magnifyingglass.svg" alt="" aria-hidden="true">
          <input type="search" placeholder="Search" aria-label="Search testimonials" autocomplete="off">
        </label>
      </div>
      <div class="mobile-messages-list"></div>
    </div>`;
    const searchInput = mobileAppContent.querySelector(".mobile-messages-search input");
    const list = mobileAppContent.querySelector(".mobile-messages-list");
    const renderRows = () => {
      const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
      const matches = TESTIMONIALS
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => !normalizedQuery || [
          item.name,
          item.role,
          item.company,
          item.preview,
          item.testimonial
        ].some(value => String(value || "").toLocaleLowerCase().includes(normalizedQuery)));
      list.innerHTML = matches.length ? matches.map(({ item, index }) => `
        <button class="mobile-message-row" type="button" data-mobile-message="${index}" aria-label="Open testimonial from ${escape(item.name)}">
          <img class="mobile-message-avatar" src="${escape(item.avatar)}" alt="" loading="lazy" decoding="async">
          <span class="mobile-message-row-content">
            <strong class="mobile-message-name">${escape(item.name)}</strong>
            <span class="mobile-message-role">${escape(item.role)} · ${escape(item.company)}</span>
            <span class="mobile-message-preview">${escape(item.preview)}</span>
          </span>
        </button>`).join("") : `<p class="mobile-messages-empty" role="status">No conversations found</p>`;
      list.querySelectorAll("[data-mobile-message]").forEach(button => {
        button.addEventListener("click", () => showMessage(Number(button.dataset.mobileMessage)));
      });
    };
    searchInput.value = searchQuery;
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value;
      renderRows();
    });
    renderRows();
  };
  const showMessage = index => {
    const item = TESTIMONIALS[index];
    mobileWindowTitle.textContent = item.name;
    setMobileWindowBack(showList, "Back to Messages");
    const messages = item.messages || item.testimonial
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map(text => ({ type: "text", direction: "incoming", text }));
    mobileAppContent.innerHTML = `<article class="mobile-app-scroll mobile-messages-conversation" data-testimonial-id="${escape(item.id)}">
      <header class="mobile-message-contact">
        <img src="${escape(item.avatar)}" alt="Portrait of ${escape(item.name)}" decoding="async">
        <span><strong>${escape(item.name)}</strong><small>${escape(item.role)} · ${escape(item.company)}</small></span>
      </header>
      <div class="mobile-message-history">
        ${messages.map((message, messageIndex) => message.type === "document" ? `
          <div class="message-row is-incoming">
            <a class="message-document-attachment${item.id === "scott-summers" || messageIndex === messages.length - 1 ? " has-native-tail" : ""}" href="${escape(message.file)}" target="_blank" rel="noopener" data-document-id="${escape(message.documentId || "")}" aria-label="Open ${escape(message.title)}">
              <span class="message-document-header">
                <span class="message-document-icon" aria-hidden="true">PDF</span>
                <span><strong>${escape(message.title)}</strong><small>${escape(message.fileType)}</small></span>
              </span>
              <img class="message-document-preview" src="${escape(message.preview)}" alt="Preview of the recommendation letter">
            </a>
          </div>` : `
          <div class="message-row is-incoming"><div class="message-bubble is-incoming${item.id === "scott-summers" || messageIndex === messages.length - 1 ? " has-native-tail" : ""}">${escape(message.text)}</div></div>`).join("")}
      </div>
    </article>`;
    installNativeIncomingTails(mobileAppContent);
    installMessageDocumentViewers(mobileAppContent);
  };
  showList();
}

function openMobileVisionBin() {
  if (!openMobileShell(LIBRARY_APP.title)) return;
  mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-library">${buildLibraryMarkup(LIBRARY_APP)}</div>`;
  wireLibrary(mobileAppContent);
}

function closeMobileAppAlert({ immediate = false } = {}) {
  if (!activeMobileAppAlert) return;
  window.clearTimeout(mobileAlertCloseTimer);
  document.body.classList.remove("has-mobile-app-alert");
  mobileAppAlertTrigger?.setAttribute("aria-expanded", "false");
  const triggerToRestore = mobileAppAlertTrigger;
  const finish = () => {
    mobileAppAlert.hidden = true;
    mobileAppAlertBackdrop.hidden = true;
    activeMobileAppAlert = null;
    mobileAppAlertTrigger = null;
    mobileDesktop.scrollTop = mobileAlertScrollTop;
    triggerToRestore?.focus({ preventScroll: true });
  };
  if (immediate) {
    finish();
    return;
  }
  mobileAlertCloseTimer = window.setTimeout(finish, 220);
}

function openMobileAppAlert(appId) {
  if (!mobileViewport.matches) return false;
  const config = ADOBE_APPS[appId];
  if (!config) return false;
  closeMobileAppAlert({ immediate: true });

  activeMobileAppAlert = appId;
  mobileAppAlertTrigger = mobileDock.querySelector(`[data-app="${appId}"]`);
  mobileAlertScrollTop = mobileDesktop.scrollTop;
  mobileAppAlertIcon.src = config.icon;
  mobileAppAlertTitle.textContent = config.title;
  mobileAppAlertMessage.innerHTML = [
    ...config.paragraphs.map(paragraph => `<p>${escape(paragraph)}</p>`),
    config.link
      ? `<p class="mobile-app-alert-link-row"><a class="mobile-app-alert-link" href="${escape(config.link.href)}" target="_blank" rel="noopener noreferrer">${escape(config.link.label)}</a></p>`
      : ""
  ].join("");
  mobileAppAlertDismiss.textContent = config.button;
  mobileAppAlert.hidden = false;
  mobileAppAlertBackdrop.hidden = false;
  mobileAppAlertTrigger?.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    document.body.classList.add("has-mobile-app-alert");
    mobileAppAlertDismiss.focus({ preventScroll: true });
  });
  return true;
}

function openMobileDockUtility(appId) {
  if (appId === "notes") return openMobileNotes();
  if (appId === "services") return openMobileServices();
  if (appId === "certificates") return openMobileCertificates();
  if (appId === "vision-bin") return openMobileVisionBin();
  if (appId === "messages") return openMobileMessages();
  if (ADOBE_APPS[appId]) {
    openMobileAppAlert(appId);
    return;
  }
  if (appId === "settings") {
    if (!openMobileShell("Settings")) return;
    mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-detail"><h1>Desktop &amp; Dock</h1><p>The mobile Dock uses the same app order, artwork, and glass material as the desktop Dock. Magnification and resizing remain disabled on touch screens.</p></div>`;
  }
}

mobileWindowBack.addEventListener("click", () => mobileBackAction?.());
mobileAppAlertDismiss.addEventListener("click", () => closeMobileAppAlert());
mobileAppAlertBackdrop.addEventListener("click", () => closeMobileAppAlert());
mobileAppAlert.addEventListener("keydown", event => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  mobileAppAlertDismiss.focus({ preventScroll: true });
});
mobileDock.addEventListener("click", event => {
  const item = event.target.closest("button[data-mobile-app]");
  if (item) openMobileDockUtility(item.dataset.mobileApp);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeMobileAppAlert) {
    event.preventDefault();
    closeMobileAppAlert();
    return;
  }
  if (event.key !== "Escape" || mobileAppWindow.hidden || !collectionsSheet.hidden) return;
  event.preventDefault();
  mobileBackAction?.();
});
mobileViewport.addEventListener("change", event => {
  closeCollectionsMenu({ immediate: !event.matches });
  syncCollectionsTriggerMode();
  if (!event.matches) {
    closeMobileAppAlert({ immediate: true });
    closeMobileApp();
  }
});

// The filter lists are generated from the projects themselves, so a filter
// only ever appears once and only if at least one project actually carries
// it. Order: All Work, Recent, categories, then tags, then Clear Filter.
(function buildCollectionFilters() {
  const seen = new Set([ALL_WORK_FILTER, CLEAR_FILTER_LABEL]);
  const categories = [];
  const tags = [];
  projects.forEach(project => {
    if (!seen.has(project.category)) { seen.add(project.category); categories.push(project.category); }
    project.tags.forEach(tag => {
      if (!seen.has(tag) && !PRIMARY_COLLECTION_FILTERS.has(tag)) { seen.add(tag); tags.push(tag); }
    });
  });
  const tagOrder = ["Recent", "Enterprise", "Small Business", "Mobile App", "PWA", "Design Systems", "SEO & CRM", "Civic Tech", "Open Source"];
  tags.sort((a, b) => {
    const ia = tagOrder.indexOf(a); const ib = tagOrder.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
  });
  const checkSvg = `<svg viewBox="0 0 16 16" focusable="false"><path d="m2.5 8.25 3.4 3.4 7.6-7.6"></path></svg>`;
  const menuItem = (filter, extraClass = "") =>
    `<button class="collections-menu-item${extraClass}" type="button" role="menuitemradio" aria-checked="false" data-filter="${filter}"><span class="collections-check" aria-hidden="true">${checkSvg}</span><span>${escape(filter)}</span></button>`;
  const sheetItem = (filter, extraClass = "") =>
    `<button class="collections-sheet-option${extraClass}" type="button" role="menuitemradio" data-filter="${filter}" aria-checked="false"><span aria-hidden="true">${checkSvg}</span><span>${escape(filter)}</span></button>`;
  const menuBlocks = [
    menuItem(ALL_WORK_FILTER, " is-active"),
    menuItem("Recent"),
    `<div class="collections-separator" role="separator"></div>`,
    ...categories.map(filter => menuItem(filter)),
    `<div class="collections-separator" role="separator"></div>`,
    ...tags.filter(tag => tag !== "Recent").map(filter => menuItem(filter)),
    `<div class="collections-separator" role="separator"></div>`,
    menuItem(CLEAR_FILTER_LABEL, " collections-menu-clear")
  ];
  const sheetBlocks = [
    sheetItem(ALL_WORK_FILTER, " is-active"),
    sheetItem("Recent"),
    `<div class="collections-sheet-separator" aria-hidden="true"></div>`,
    ...categories.map(filter => sheetItem(filter)),
    `<div class="collections-sheet-separator" aria-hidden="true"></div>`,
    ...tags.filter(tag => tag !== "Recent").map(filter => sheetItem(filter)),
    `<div class="collections-sheet-separator" aria-hidden="true"></div>`,
    sheetItem(CLEAR_FILTER_LABEL, " collections-sheet-clear")
  ];
  collectionsMenu.innerHTML = menuBlocks.join("");
  const sheetOptions = collectionsSheet.querySelector(".collections-sheet-options");
  if (sheetOptions) sheetOptions.innerHTML = sheetBlocks.join("");
  collectionsFilterStatus.textContent = `Showing all ${projects.length} projects.`;
})();

const collectionMenuItems = [...collectionsMenu.querySelectorAll(".collections-menu-item[data-filter]")];
const collectionSheetItems = [...collectionsSheet.querySelectorAll(".collections-sheet-option[data-filter]")];
let collectionMenuCloseTimer = 0;
let collectionSheetCloseTimer = 0;
let collectionSheetTransitionCleanup = null;
let collectionSheetDragState = null;
let collectionsSheetInertElements = [];

function setCollectionsSheetBackgroundInert(inert) {
  if (inert) {
    collectionsSheetInertElements = [...document.body.children].filter(element => (
      element !== collectionsSheet &&
      element !== collectionsSheetBackdrop &&
      element.tagName !== "SCRIPT" &&
      !element.hasAttribute("inert")
    ));
    collectionsSheetInertElements.forEach(element => { element.setAttribute("inert", ""); });
    return;
  }
  collectionsSheetInertElements.forEach(element => { element.removeAttribute("inert"); });
  collectionsSheetInertElements = [];
}

function resetCollectionsSheetDragStyles() {
  collectionsSheet.classList.remove("is-dragging");
  collectionsSheet.style.transform = "";
  collectionsSheetBackdrop.style.opacity = "";
  document.body.classList.remove("is-dragging-collections-sheet");
  collectionSheetDragState = null;
}

function finishCollectionsSheetClose({ returnFocus = true } = {}) {
  collectionsSheet.hidden = true;
  collectionsSheetBackdrop.hidden = true;
  collectionsSheet.classList.remove("is-open", "is-dragging");
  collectionsSheetBackdrop.classList.remove("is-visible");
  document.body.classList.remove("is-collections-open", "is-dragging-collections-sheet");
  collectionsSheet.style.transform = "";
  collectionsSheetBackdrop.style.opacity = "";
  collectionsTrigger.setAttribute("aria-expanded", "false");
  collectionsHelperTrigger?.setAttribute("aria-expanded", "false");
  setCollectionsSheetBackgroundInert(false);
  collectionSheetDragState = null;
  if (returnFocus) collectionsTrigger.focus({ preventScroll: true });
}

function closeCollectionsSheet({ returnFocus = true, immediate = false } = {}) {
  if (collectionsSheet.hidden) return;
  if (collectionSheetTransitionCleanup) {
    collectionsSheet.removeEventListener("transitionend", collectionSheetTransitionCleanup);
    collectionSheetTransitionCleanup = null;
  }
  clearTimeout(collectionSheetCloseTimer);
  collectionsTrigger.setAttribute("aria-expanded", "false");
  collectionsHelperTrigger?.setAttribute("aria-expanded", "false");
  collectionsSheet.classList.remove("is-open", "is-dragging");
  collectionsSheetBackdrop.classList.remove("is-visible");
  document.body.classList.remove("is-collections-open", "is-dragging-collections-sheet");

  if (immediate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishCollectionsSheetClose({ returnFocus });
    return;
  }

  collectionsSheet.style.transform = "translateY(calc(100% + 20px))";
  collectionsSheetBackdrop.style.opacity = "0";
  const cleanup = event => {
    if (event?.target && event.target !== collectionsSheet) return;
    if (event?.propertyName && event.propertyName !== "transform") return;
    collectionsSheet.removeEventListener("transitionend", cleanup);
    collectionSheetTransitionCleanup = null;
    clearTimeout(collectionSheetCloseTimer);
    finishCollectionsSheetClose({ returnFocus });
  };
  collectionSheetTransitionCleanup = cleanup;
  collectionsSheet.addEventListener("transitionend", cleanup);
  collectionSheetCloseTimer = setTimeout(() => cleanup(), 380);
}

function canStartCollectionsSheetDrag(event) {
  if (!mobileViewport.matches || collectionsSheet.hidden || event.button > 0) return false;
  if (collectionsSheetHandle.contains(event.target) || collectionsSheetHeader.contains(event.target)) return true;
  return collectionsSheetOptions.scrollTop <= 0;
}

function activateCollectionsSheetDrag(event) {
  if (!collectionSheetDragState || collectionSheetDragState.active) return;
  collectionSheetDragState.active = true;
  collectionsSheet.classList.add("is-dragging");
  document.body.classList.add("is-dragging-collections-sheet");
  try { collectionsSheet.setPointerCapture(event.pointerId); } catch {}
}

function onCollectionsSheetPointerDown(event) {
  if (!canStartCollectionsSheetDrag(event)) return;
  const immediateDrag = collectionsSheetHandle.contains(event.target) || collectionsSheetHeader.contains(event.target);
  collectionSheetDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    currentY: event.clientY,
    startTime: performance.now(),
    active: false
  };
  if (immediateDrag) {
    event.preventDefault();
    activateCollectionsSheetDrag(event);
  }
}

function onCollectionsSheetPointerMove(event) {
  const state = collectionSheetDragState;
  if (!state || state.pointerId !== event.pointerId) return;
  const rawDeltaY = event.clientY - state.startY;
  const deltaX = Math.abs(event.clientX - state.startX);

  if (!state.active) {
    if (Math.abs(rawDeltaY) < 5 && deltaX < 5) return;
    if (rawDeltaY <= 0 || deltaX > rawDeltaY) {
      collectionSheetDragState = null;
      return;
    }
    if (collectionsSheetOptions.scrollTop > 0) {
      collectionSheetDragState = null;
      return;
    }
    activateCollectionsSheetDrag(event);
  }

  event.preventDefault();
  const deltaY = Math.max(0, rawDeltaY);
  state.currentY = event.clientY;
  collectionsSheet.style.transform = `translateY(${deltaY}px)`;
  collectionsSheetBackdrop.style.opacity = String(Math.max(0, 1 - deltaY / 420));
}

function finishCollectionsSheetPointer(event) {
  const state = collectionSheetDragState;
  if (!state || state.pointerId !== event.pointerId) return;
  if (!state.active) {
    collectionSheetDragState = null;
    return;
  }

  const deltaY = Math.max(0, state.currentY - state.startY);
  const elapsed = Math.max(1, performance.now() - state.startTime);
  const velocity = deltaY / elapsed;
  const sheetHeight = collectionsSheet.getBoundingClientRect().height;
  try { collectionsSheet.releasePointerCapture(state.pointerId); } catch {}

  if (deltaY > sheetHeight * .22 || (deltaY > 16 && velocity > .75)) {
    collectionSheetDragState = null;
    closeCollectionsSheet({ returnFocus: true });
    return;
  }

  collectionsSheet.classList.remove("is-dragging");
  document.body.classList.remove("is-dragging-collections-sheet");
  collectionSheetDragState = null;
  requestAnimationFrame(() => {
    collectionsSheet.style.transform = "";
    collectionsSheetBackdrop.style.opacity = "";
  });
}

function openCollectionsMenu() {
  if (projectFiltersLockedForVision) return;
  if (mobileViewport.matches) {
    if (collectionSheetTransitionCleanup) {
      collectionsSheet.removeEventListener("transitionend", collectionSheetTransitionCleanup);
      collectionSheetTransitionCleanup = null;
    }
    clearTimeout(collectionSheetCloseTimer);
    resetCollectionsSheetDragStyles();
    collectionsSheet.hidden = false;
    collectionsSheetBackdrop.hidden = false;
    setCollectionsSheetBackgroundInert(true);
    collectionsTrigger.setAttribute("aria-controls", "collections-sheet");
    collectionsTrigger.setAttribute("aria-expanded", "true");
    collectionsHelperTrigger?.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => {
      document.body.classList.add("is-collections-open");
      collectionsSheet.classList.add("is-open");
      collectionsSheetBackdrop.classList.add("is-visible");
      const activeItem = collectionsSheet.querySelector(".collections-sheet-option.is-active");
      activeItem?.focus({ preventScroll: true });
    });
    return;
  }
  clearTimeout(collectionMenuCloseTimer);
  collectionsTrigger.setAttribute("aria-controls", "collections-menu");
  collectionsMenu.hidden = false;
  collectionsMenu.classList.remove("is-closing");
  collectionsTrigger.setAttribute("aria-expanded", "true");
  collectionsHelperTrigger?.setAttribute("aria-expanded", "true");
  const activeItem = collectionsMenu.querySelector(".collections-menu-item.is-active");
  requestAnimationFrame(() => activeItem?.focus({ preventScroll: true }));
}

function closeCollectionsMenu({ returnFocus = false, immediate = false } = {}) {
  if (!collectionsSheet.hidden) {
    closeCollectionsSheet({ returnFocus, immediate });
    return;
  }
  if (collectionsMenu.hidden) return;
  clearTimeout(collectionMenuCloseTimer);
  collectionsTrigger.setAttribute("aria-expanded", "false");
  collectionsHelperTrigger?.setAttribute("aria-expanded", "false");
  if (immediate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    collectionsMenu.hidden = true;
    collectionsMenu.classList.remove("is-closing");
    if (returnFocus && !projectFiltersLockedForVision) collectionsTrigger.focus({ preventScroll: true });
    return;
  }
  collectionsMenu.classList.add("is-closing");
  collectionMenuCloseTimer = setTimeout(() => {
    collectionsMenu.hidden = true;
    collectionsMenu.classList.remove("is-closing");
    if (returnFocus && !projectFiltersLockedForVision) collectionsTrigger.focus({ preventScroll: true });
  }, 115);
}

let projectFiltersLockedForVision = false;

function setProjectFiltersLockedForVision(locked) {
  projectFiltersLockedForVision = Boolean(locked);
  const reason = locked ? "Close Vision Bin to use project filters" : "";
  [collectionsHelperTrigger, collectionsTrigger].forEach(control => {
    if (!control) return;
    control.disabled = projectFiltersLockedForVision;
    control.setAttribute("aria-disabled", String(projectFiltersLockedForVision));
    control.title = reason;
  });
  [...collectionMenuItems, ...collectionSheetItems].forEach(item => {
    item.disabled = projectFiltersLockedForVision;
    item.setAttribute("aria-disabled", String(projectFiltersLockedForVision));
  });
  collectionsControl?.classList.toggle("is-vision-bin-open", projectFiltersLockedForVision);
  collectionsMenu.classList.toggle("is-vision-bin-open", projectFiltersLockedForVision);
  collectionsSheet.classList.toggle("is-vision-bin-open", projectFiltersLockedForVision);
  if (projectFiltersLockedForVision) closeCollectionsMenu({ returnFocus: false, immediate: true });
}

function syncVisionBinProjectFilterLock() {
  const desktopVisionBinOpen = Boolean(document.querySelector('.vision-bin-window[data-app-id="vision-bin"]'));
  const mobileVisionBinOpen = !mobileAppWindow.hidden && mobileWindowTitle.textContent === "Vision Bin";
  setProjectFiltersLockedForVision(desktopVisionBinOpen || mobileVisionBinOpen);
}

function projectMatchesCollection(project, filter) {
  if (filter === ALL_WORK_FILTER) return true;
  if (PRIMARY_COLLECTION_FILTERS.has(filter)) return project.category === filter;
  return project.tags.includes(filter);
}

function rememberUnfilteredPositions() {
  projects.forEach(project => {
    const button = projectLayer.querySelector(`[data-project-id="${project.id}"]`);
    if (!button) return;
    button.dataset.unfilteredLeft = String(button.offsetLeft);
    button.dataset.unfilteredTop = String(button.offsetTop);
  });
}

function setFilteredGridPositions(filteredProjects) {
  if (!filteredProjects.length) return;
  const bounds = getDesktopFileSafeBounds();
  const availableWidth = Math.max(1, bounds.right - bounds.left);
  const availableHeight = Math.max(1, bounds.bottom - bounds.top);
  const columnStep = 150;
  const rowStep = 128;
  const maximumColumns = Math.max(1, Math.floor(availableWidth / columnStep) + 1);
  const columns = Math.min(filteredProjects.length, maximumColumns);
  const rows = Math.ceil(filteredProjects.length / columns);
  const usedWidth = (columns - 1) * Math.min(columnStep, columns > 1 ? availableWidth / (columns - 1) : 0);
  const usedHeight = (rows - 1) * Math.min(rowStep, rows > 1 ? availableHeight / (rows - 1) : 0);
  const startX = bounds.left + Math.max(0, (availableWidth - usedWidth) / 2);
  const startY = bounds.top + Math.max(0, (availableHeight - usedHeight) / 2);
  const xStep = columns > 1 ? usedWidth / (columns - 1) : 0;
  const yStep = rows > 1 ? usedHeight / (rows - 1) : 0;

  filteredProjects.forEach((project, index) => {
    const button = projectLayer.querySelector(`[data-project-id="${project.id}"]`);
    if (!button) return;
    button.style.left = `${startX + (index % columns) * xStep}px`;
    button.style.top = `${startY + Math.floor(index / columns) * yStep}px`;
  });
}

function restoreUnfilteredPositions() {
  projects.forEach(project => {
    const button = projectLayer.querySelector(`[data-project-id="${project.id}"]`);
    if (!button) return;
    const left = Number(button.dataset.unfilteredLeft);
    const top = Number(button.dataset.unfilteredTop);
    if (Number.isFinite(left) && Number.isFinite(top)) {
      button.style.left = `${left}px`;
      button.style.top = `${top}px`;
    } else if (button.dataset.curatedPosition === "true") {
      applyCuratedDesktopPosition(button, project);
    }
  });
}

function animateCollectionLayout(filteredProjects, beforeRects) {
  filteredProjects.forEach(project => {
    const button = projectLayer.querySelector(`[data-project-id="${project.id}"]`);
    if (!button) return;
    const after = button.getBoundingClientRect();
    const before = beforeRects.get(project.id);
    const deltaX = before ? before.left - after.left : 0;
    const deltaY = before ? before.top - after.top : 0;
    const startTransform = before
      ? `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`
      : "translate(-50%, -50%) scale(.96)";
    button.animate([
      { opacity: before ? 1 : 0, transform: startTransform },
      { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
    ], {
      duration: 320,
      easing: "cubic-bezier(.22,1,.36,1)",
      fill: "none"
    });
    button.style.opacity = "1";
  });
}

async function applyCollectionFilter(requestedFilter) {
  if (projectFiltersLockedForVision) return;
  const isClearAction = requestedFilter === CLEAR_FILTER_LABEL;
  const filter = isClearAction ? ALL_WORK_FILTER : requestedFilter;
  collectionsTriggerLabel.textContent = filter === ALL_WORK_FILTER ? "All Collections" : filter;
  const filterLabel = filter === ALL_WORK_FILTER
    ? "Filter projects, showing all work"
    : `Filter projects, current selection ${filter}`;
  collectionsTrigger.setAttribute("aria-label", filterLabel);
  collectionsHelperTrigger?.setAttribute("aria-label", filter === ALL_WORK_FILTER
    ? "Open project filters, showing all work"
    : `Open project filters, current selection ${filter}`);
  collectionMenuItems.forEach(item => {
    const active = item.dataset.filter === filter && item.dataset.filter !== CLEAR_FILTER_LABEL;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-checked", String(active));
  });
  collectionSheetItems.forEach(item => {
    const active = item.dataset.filter === filter && item.dataset.filter !== CLEAR_FILTER_LABEL;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-checked", String(active));
  });
  const matchingProjectCount = filter === ALL_WORK_FILTER
    ? projects.length
    : projects.filter(project => projectMatchesCollection(project, filter)).length;
  collectionsFilterStatus.textContent = filter === ALL_WORK_FILTER
    ? `Showing all ${matchingProjectCount} projects.`
    : `Showing ${matchingProjectCount} ${filter} project${matchingProjectCount === 1 ? "" : "s"}.`;
  if (filter === activeCollectionFilter) return;
  const run = ++collectionFilterRun;
  if (activeCollectionFilter === ALL_WORK_FILTER && filter !== ALL_WORK_FILTER) rememberUnfilteredPositions();

  const filteredProjects = projects.filter(project => projectMatchesCollection(project, filter));
  const filteredIds = new Set(filteredProjects.map(project => project.id));
  if (selectedDesktopFolder && !filteredIds.has(selectedDesktopFolder.dataset.projectId)) {
    clearDesktopFolderSelection();
  }
  const beforeRects = new Map();
  projectLayer.querySelectorAll(".project-icon:not([hidden])").forEach(button => {
    beforeRects.set(button.dataset.projectId, button.getBoundingClientRect());
    if (!filteredIds.has(button.dataset.projectId)) button.classList.add("is-filtering-out");
  });
  mobileList.querySelectorAll(".mobile-project-folder:not([hidden])").forEach(button => {
    if (!filteredIds.has(button.dataset.projectId)) button.classList.add("is-filtering-out");
  });

  activeCollectionFilter = filter;
  await new Promise(resolve => setTimeout(resolve, 280));
  if (run !== collectionFilterRun) return;

  projects.forEach(project => {
    const button = projectLayer.querySelector(`[data-project-id="${project.id}"]`);
    const matches = filteredIds.has(project.id);
    button.classList.remove("is-filtering-out");
    button.hidden = !matches;
    if (matches && !beforeRects.has(project.id)) button.style.opacity = "0";
    const mobileFolder = mobileList.querySelector(`[data-project-id="${project.id}"]`);
    mobileFolder.classList.remove("is-filtering-out");
    mobileFolder.hidden = !matches;
  });

  if (filter === ALL_WORK_FILTER) restoreUnfilteredPositions();
  else setFilteredGridPositions(filteredProjects);

  requestAnimationFrame(() => animateCollectionLayout(filteredProjects, beforeRects));
  if (filter === ALL_WORK_FILTER) {
    setTimeout(() => {
      if (activeCollectionFilter !== ALL_WORK_FILTER) return;
      projectLayer.querySelectorAll(".project-icon").forEach(button => {
        delete button.dataset.unfilteredLeft;
        delete button.dataset.unfilteredTop;
      });
    }, 340);
  }
}

collectionsTrigger.addEventListener("click", () => {
  const isOpen = mobileViewport.matches ? !collectionsSheet.hidden : !collectionsMenu.hidden;
  if (isOpen) closeCollectionsMenu();
  else openCollectionsMenu();
});
collectionsHelperTrigger?.addEventListener("click", () => {
  collectionsTrigger.focus({ preventScroll: true });
  collectionsTrigger.click();
});
collectionsTrigger.addEventListener("keydown", event => {
  if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  const isOpen = mobileViewport.matches ? !collectionsSheet.hidden : !collectionsMenu.hidden;
  if (!isOpen) openCollectionsMenu();
});
collectionMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    applyCollectionFilter(item.dataset.filter);
    closeCollectionsMenu({ returnFocus: true });
  });
});
collectionSheetItems.forEach(item => {
  item.addEventListener("click", () => {
    applyCollectionFilter(item.dataset.filter);
    closeCollectionsMenu({ returnFocus: true });
  });
});
collectionsSheetBackdrop.addEventListener("click", () => closeCollectionsMenu({ returnFocus: true }));
collectionsSheetDone.addEventListener("click", () => closeCollectionsMenu({ returnFocus: true }));
collectionsSheet.addEventListener("click", event => event.stopPropagation());
collectionsSheet.addEventListener("pointerdown", onCollectionsSheetPointerDown);
collectionsSheet.addEventListener("pointermove", onCollectionsSheetPointerMove);
collectionsSheet.addEventListener("pointerup", finishCollectionsSheetPointer);
collectionsSheet.addEventListener("pointercancel", finishCollectionsSheetPointer);
collectionsMenu.addEventListener("keydown", event => {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const currentIndex = collectionMenuItems.indexOf(document.activeElement);
  let nextIndex = currentIndex;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = collectionMenuItems.length - 1;
  if (event.key === "ArrowDown") nextIndex = (currentIndex + 1 + collectionMenuItems.length) % collectionMenuItems.length;
  if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + collectionMenuItems.length) % collectionMenuItems.length;
  collectionMenuItems[nextIndex].focus({ preventScroll: true });
});
collectionsSheet.addEventListener("keydown", event => {
  if (event.key === "Tab") {
    const focusable = [...collectionsSheet.querySelectorAll("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])")];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
    return;
  }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const currentIndex = collectionSheetItems.indexOf(document.activeElement);
  let nextIndex = currentIndex;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = collectionSheetItems.length - 1;
  if (event.key === "ArrowDown") nextIndex = (currentIndex + 1 + collectionSheetItems.length) % collectionSheetItems.length;
  if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + collectionSheetItems.length) % collectionSheetItems.length;
  collectionSheetItems[nextIndex].focus({ preventScroll: true });
});
document.addEventListener("pointerdown", event => {
  if (!collectionsMenu.hidden && !collectionsControl.contains(event.target)) closeCollectionsMenu();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape" || (collectionsMenu.hidden && collectionsSheet.hidden)) return;
  event.preventDefault();
  closeCollectionsMenu({ returnFocus: true });
});
function bringForward(element) {
  document.querySelectorAll(".project-window.is-active, .adobe-alert.is-active").forEach(windowElement => {
    if (windowElement !== element) windowElement.classList.remove("is-active");
  });
  element.classList.add("is-active");
  element.style.zIndex = String(++layer);
}

function animateEmbeddedWindowForward(element) {
  if (prefersReducedMotion.matches || !element?.classList.contains("project-window--embedded")) return;
  cancelAnimationFrame(element._embeddedRefocusFrame || 0);
  clearTimeout(element._embeddedRefocusTimer || 0);
  element.classList.remove("is-refocusing");
  element._embeddedRefocusFrame = requestAnimationFrame(() => {
    element.classList.add("is-refocusing");
    element._embeddedRefocusTimer = window.setTimeout(() => {
      element.classList.remove("is-refocusing");
    }, DESKTOP_INTERACTION.refocusDuration);
  });
}

function wireTrafficControls(element) {
  element.querySelectorAll(".traffic-control").forEach(control => {
    control.addEventListener("pointerdown", event => {
      event.stopPropagation();
      bringForward(element);
    });
    control.addEventListener("click", event => event.stopPropagation());
  });
}

function getUsableDesktopBounds() {
  const systemBar = document.querySelector(".system-bar")?.getBoundingClientRect();
  const dockRect = dock?.getBoundingClientRect();
  const edge = 16;
  const dockGap = 18;
  const dockPosition = dock?.dataset.position || document.body.dataset.dockPosition || "bottom";
  const bounds = {
    left: edge,
    right: innerWidth - edge,
    top: (systemBar?.bottom || 39) + 12,
    bottom: innerHeight - edge
  };

  if (!dockRect) return bounds;
  if (dockPosition === "left") {
    bounds.left = Math.max(bounds.left, dockRect.right + dockGap);
  } else if (dockPosition === "right") {
    bounds.right = Math.min(bounds.right, dockRect.left - dockGap);
  } else {
    bounds.bottom = Math.min(bounds.bottom, dockRect.top - dockGap);
  }
  return bounds;
}

function getDesktopBounds() {
  return getUsableDesktopBounds();
}

const PROJECT_WINDOW_CLOSE_DURATION = 180;

function getEmbeddedProjectBounds() {
  return getUsableDesktopBounds();
}

function setEmbeddedWindowMotionOrigin(element, projectId) {
  const source = projectLayer.querySelector(`[data-project-id="${CSS.escape(projectId)}"]`);
  if (!source) return;
  const sourceRect = source.getBoundingClientRect();
  const windowRect = element.getBoundingClientRect();
  if (!windowRect.width || !windowRect.height) return;
  const originX = Math.max(0, Math.min(windowRect.width, sourceRect.left + sourceRect.width / 2 - windowRect.left));
  const originY = Math.max(0, Math.min(windowRect.height, sourceRect.top + sourceRect.height / 2 - windowRect.top));
  element.style.setProperty("--window-origin-x", `${originX.toFixed(2)}px`);
  element.style.setProperty("--window-origin-y", `${originY.toFixed(2)}px`);
}

function applyMaximizedWindowBounds(element) {
  if (!element?.classList.contains("project-window")) return;
  const bounds = getUsableDesktopBounds();
  element.style.setProperty("--window-max-left", `${bounds.left}px`);
  element.style.setProperty("--window-max-top", `${bounds.top}px`);
  element.style.setProperty("--window-max-width", `${Math.max(1, bounds.right - bounds.left)}px`);
  element.style.setProperty("--window-max-height", `${Math.max(1, bounds.bottom - bounds.top)}px`);
}

function syncMaximizedWindows() {
  document.querySelectorAll(".project-window.maximized").forEach(element => {
    applyMaximizedWindowBounds(element);
  });
}

function activateTopVisibleWindow() {
  const candidates = [...document.querySelectorAll(
    ".project-window:not([hidden]):not(.is-closing), .adobe-alert:not([hidden]):not(.is-closing)"
  )];
  const topWindow = candidates.reduce((top, element) => {
    if (!top) return element;
    return Number(element.style.zIndex || 0) > Number(top.style.zIndex || 0) ? element : top;
  }, null);
  topWindow?.classList.add("is-active");
  return topWindow;
}

function closeEmbeddedProjectWindow(element, project, id) {
  if (!element?.isConnected || element.classList.contains("is-closing")) return;
  element._cancelProjectLoading?.();
  element._disposeParentProjectScroll?.();
  element._syncHostedProjectViewport = null;
  element.classList.add("is-closing");
  element.classList.remove("is-active");
  const finish = () => {
    if (!element.isConnected) return;
    forgetWindowState(id);
    element.remove();
    openProjectWindows.delete(id);
    resetDock();
    updateRunningState();
    activateTopVisibleWindow();
    projectLayer.querySelector(`[data-project-id="${CSS.escape(project.id)}"]`)?.focus({ preventScroll: true });
  };
  if (prefersReducedMotion.matches) finish();
  else window.setTimeout(finish, PROJECT_WINDOW_CLOSE_DURATION);
}

window.addEventListener("resize", syncMaximizedWindows, { passive: true });
new MutationObserver(syncMaximizedWindows).observe(dock, {
  attributes: true,
  attributeFilter: ["data-position"]
});
if (typeof ResizeObserver === "function") {
  new ResizeObserver(syncMaximizedWindows).observe(dock);
}
document.addEventListener("pointerup", event => {
  if (!event.target.closest?.(".dock-resize-handle")) return;
  requestAnimationFrame(syncMaximizedWindows);
});

function applyActiveWindowResize() {
  windowResizeFrame = 0;
  const state = windowResizeState;
  if (!state || !state.windowElement.isConnected) return;

  const {
    windowElement,
    direction,
    startX,
    startY,
    startLeft,
    startTop,
    startWidth,
    startHeight,
    pointerX,
    pointerY
  } = state;
  const bounds = state.getBounds();
  const availableWidth = Math.max(1, bounds.right - bounds.left);
  const availableHeight = Math.max(1, bounds.bottom - bounds.top);
  const minWidth = Math.min(state.minWidth, availableWidth);
  const minHeight = Math.min(state.minHeight, availableHeight);
  const startRight = startLeft + startWidth;
  const startBottom = startTop + startHeight;
  const deltaX = pointerX - startX;
  const deltaY = pointerY - startY;
  let left = startLeft;
  let top = startTop;
  let right = startRight;
  let bottom = startBottom;

  if (direction.includes("right")) {
    right = Math.min(bounds.right, Math.max(left + minWidth, startRight + deltaX));
  }
  if (direction.includes("left")) {
    left = Math.max(bounds.left, Math.min(startRight - minWidth, startLeft + deltaX));
    right = startRight;
  }
  if (direction.includes("bottom")) {
    bottom = Math.min(bounds.bottom, Math.max(top + minHeight, startBottom + deltaY));
  }
  if (direction.includes("top")) {
    top = Math.max(bounds.top, Math.min(startBottom - minHeight, startTop + deltaY));
    bottom = startBottom;
  }

  Object.assign(windowElement.style, {
    left: `${left}px`,
    top: `${top}px`,
    width: `${right - left}px`,
    height: `${bottom - top}px`,
    transform: "none"
  });
  windowElement._syncHostedProjectViewport?.();
}

function scheduleWindowResize(pointerX, pointerY) {
  if (!windowResizeState) return;
  windowResizeState.pointerX = pointerX;
  windowResizeState.pointerY = pointerY;
  if (windowResizeFrame) return;
  windowResizeFrame = requestAnimationFrame(applyActiveWindowResize);
}

function restoreWindowResizeInteraction(windowElement) {
  if (!windowElement) return;
  windowElement.classList.remove("is-resizing");
  windowElement.style.removeProperty("cursor");
  windowElement.style.removeProperty("user-select");
  windowElement.querySelector(".embedded-project")?.style.removeProperty("pointer-events");
  windowElement.querySelector(".embedded-project-frame")?.style.removeProperty("pointer-events");
}

const windowResizeTransitionFrames = new WeakMap();

function cancelWindowResizeTransitionRestore(windowElement) {
  const frames = windowResizeTransitionFrames.get(windowElement);
  if (frames?.first) cancelAnimationFrame(frames.first);
  if (frames?.second) cancelAnimationFrame(frames.second);
  windowResizeTransitionFrames.delete(windowElement);
  windowElement?.classList.remove("is-resize-committing");
}

function scheduleWindowResizeTransitionRestore(windowElement) {
  if (!windowElement) return;
  cancelWindowResizeTransitionRestore(windowElement);
  windowElement.classList.add("is-resize-committing");

  const frames = { first: 0, second: 0 };
  frames.first = requestAnimationFrame(() => {
    frames.first = 0;
    frames.second = requestAnimationFrame(() => {
      frames.second = 0;
      windowResizeTransitionFrames.delete(windowElement);
      windowElement.classList.remove("is-resize-committing");
    });
  });
  windowResizeTransitionFrames.set(windowElement, frames);
}

function finishWindowResize(event = {}) {
  const state = windowResizeState;
  if (!state) return;
  if (Number.isFinite(event.pointerId) && event.pointerId !== state.pointerId) return;

  if (windowResizeFrame) {
    cancelAnimationFrame(windowResizeFrame);
    windowResizeFrame = 0;
    applyActiveWindowResize();
  }

  const { windowElement, handle, positionKey, pointerId } = state;

  // Clear the shared state before releasing capture. Chromium can dispatch
  // lostpointercapture synchronously from releasePointerCapture(); leaving the
  // old state live during that callback made resize cleanup re-enter and could
  // strand the iframe with pointer events disabled.
  windowResizeState = null;
  scheduleWindowResizeTransitionRestore(windowElement);
  restoreWindowResizeInteraction(windowElement);
  if (handle.hasPointerCapture?.(state.pointerId)) {
    try {
      handle.releasePointerCapture(pointerId);
    } catch {
      // Capture may already have been released by browser chrome or alt-tab.
    }
  }
  if (!windowElement.isConnected) return;
  const rect = windowElement.getBoundingClientRect();
  windowElement._syncHostedProjectViewport?.();
  windowElement._restoreRect = {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };
  if (positionKey) {
    WINDOW_SESSION_POSITIONS.set(positionKey, {
      left: rect.left,
      top: rect.top
    });
  }
  if (windowElement.classList.contains("project-window--embedded")) {
    scheduleWindowTransitionSnapshot(windowElement, windowElement.dataset.windowId);
  }
}

function enableWindowResizing(windowElement, options = {}) {
  if (windowElement.dataset.windowResizeEnabled === "true") return;
  windowElement.dataset.windowResizeEnabled = "true";

  const directions = [
    "top",
    "right",
    "bottom",
    "left",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
  ];
  const getBounds = options.getBounds || getDesktopBounds;
  const minWidth = options.minWidth || 360;
  const minHeight = options.minHeight || 320;
  const positionKey = options.positionKey
    || windowElement.dataset.windowId
    || windowElement.dataset.projectId;
  const initialBounds = getBounds();
  windowElement.style.minWidth = `${Math.max(1, Math.min(minWidth, initialBounds.right - initialBounds.left))}px`;
  windowElement.style.minHeight = `${Math.max(1, Math.min(minHeight, initialBounds.bottom - initialBounds.top))}px`;

  directions.forEach(direction => {
    const handle = document.createElement("div");
    handle.className = `resize-handle resize-handle--${direction}`;
    handle.dataset.resizeDirection = direction;
    handle.setAttribute("aria-hidden", "true");

    handle.addEventListener("pointerdown", event => {
      if (windowElement.classList.contains("maximized")) return;
      if (windowResizeState) finishWindowResize();
      event.preventDefault();
      event.stopPropagation();

      bringForward(windowElement);
      clampWindowToDesktop(windowElement, getBounds);

      const bounds = getBounds();
      const rect = windowElement.getBoundingClientRect();
      const effectiveMinWidth = Math.min(minWidth, bounds.right - bounds.left);
      const effectiveMinHeight = Math.min(minHeight, bounds.bottom - bounds.top);
      Object.assign(windowElement.style, {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        minWidth: `${Math.max(1, effectiveMinWidth)}px`,
        minHeight: `${Math.max(1, effectiveMinHeight)}px`,
        maxWidth: "none",
        maxHeight: "none",
        transform: "none"
      });

      windowResizeState = {
        windowElement,
        handle,
        direction,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        pointerX: event.clientX,
        pointerY: event.clientY,
        startLeft: rect.left,
        startTop: rect.top,
        startWidth: rect.width,
        startHeight: rect.height,
        minWidth,
        minHeight,
        getBounds,
        positionKey
      };
      cancelWindowResizeTransitionRestore(windowElement);
      windowElement.classList.add("is-resizing");
      try {
        handle.setPointerCapture(event.pointerId);
      } catch {
        // Window-level listeners still own the gesture if Chromium declines
        // capture while crossing into or out of an embedded document.
      }
    });
    handle.addEventListener("pointermove", event => {
      if (windowResizeState?.handle !== handle) return;
      scheduleWindowResize(event.clientX, event.clientY);
    });
    handle.addEventListener("pointerup", finishWindowResize);
    handle.addEventListener("pointercancel", finishWindowResize);
    handle.addEventListener("lostpointercapture", event => {
      if (windowResizeState?.handle === handle) finishWindowResize(event);
    });
    windowElement.append(handle);
  });
}

window.addEventListener("pointermove", event => {
  if (!windowResizeState) return;
  if ((event.pointerType === "mouse" || event.pointerType === "pen") && event.buttons === 0) {
    finishWindowResize(event);
    return;
  }
  scheduleWindowResize(event.clientX, event.clientY);
}, true);
window.addEventListener("pointerup", finishWindowResize, true);
window.addEventListener("pointercancel", finishWindowResize, true);
window.addEventListener("mousemove", event => {
  if (!windowResizeState) return;
  if (event.buttons === 0) {
    finishWindowResize(event);
    return;
  }
  scheduleWindowResize(event.clientX, event.clientY);
}, true);
window.addEventListener("mouseup", finishWindowResize, true);
window.addEventListener("blur", event => {
  if (windowResizeState) finishWindowResize(event);
});
window.addEventListener("pagehide", finishWindowResize);
document.addEventListener("visibilitychange", () => {
  if (document.hidden && windowResizeState) finishWindowResize();
});

function applyDefaultProjectWindowSize(element) {
  element.classList.remove("maximized");
  element.style.width = "";
  element.style.height = "";
  element.style.maxWidth = "";
  element.style.maxHeight = "";

  const bounds = getDesktopBounds();
  const rect = element.getBoundingClientRect();
  element.style.width = `${Math.min(rect.width, bounds.right - bounds.left)}px`;
  element.style.height = `${Math.min(rect.height, bounds.bottom - bounds.top)}px`;
}

function clampWindowToDesktop(element, getBounds = getDesktopBounds) {
  if (element.classList.contains("maximized")) return;
  const bounds = getBounds();
  const rect = element.getBoundingClientRect();
  const availableWidth = Math.max(1, bounds.right - bounds.left);
  const availableHeight = Math.max(1, bounds.bottom - bounds.top);
  const width = Math.min(rect.width, availableWidth);
  const height = Math.min(rect.height, availableHeight);
  const left = Math.min(Math.max(rect.left, bounds.left), bounds.right - width);
  const top = Math.min(Math.max(rect.top, bounds.top), bounds.bottom - height);

  Object.assign(element.style, {
    width: `${width}px`,
    height: `${height}px`,
    left: `${left}px`,
    top: `${top}px`,
    transform: "none"
  });
}

function storeEmbeddedProjectRestoredBounds(element, rect) {
  const restoredBounds = {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };
  element._restoreRect = restoredBounds;

  const state = windowStates.get(element.dataset.windowId);
  if (state) {
    state.restoredBounds = restoredBounds;
    state.isMaximized = false;
  }
}

function restoreEmbeddedProjectWindow(element) {
  const state = windowStates.get(element.dataset.windowId);
  const restore = state?.restoredBounds || element._restoreRect;
  element.classList.remove("maximized");

  [
    "inset",
    "right",
    "bottom",
    "max-width",
    "max-height",
    "--window-max-left",
    "--window-max-top",
    "--window-max-width",
    "--window-max-height"
  ].forEach(property => element.style.removeProperty(property));

  if (restore) {
    const bounds = getUsableDesktopBounds();
    const availableWidth = Math.max(1, bounds.right - bounds.left);
    const availableHeight = Math.max(1, bounds.bottom - bounds.top);
    const width = Math.min(restore.width, availableWidth);
    const height = Math.min(restore.height, availableHeight);
    Object.assign(element.style, {
      left: `${Math.min(Math.max(restore.left, bounds.left), bounds.right - width)}px`,
      top: `${Math.min(Math.max(restore.top, bounds.top), bounds.bottom - height)}px`,
      width: `${width}px`,
      height: `${height}px`,
      transform: "none"
    });
  }

  if (state) state.isMaximized = false;
}

function toggleProjectMaximize(element) {
  const isEmbeddedProject = element.classList.contains("project-window--embedded");
  if (element.classList.contains("maximized")) {
    if (isEmbeddedProject) {
      restoreEmbeddedProjectWindow(element);
    } else {
      element.classList.remove("maximized");
      const restore = element._restoreRect;
      if (restore) {
        const bounds = getUsableDesktopBounds();
        const availableWidth = Math.max(1, bounds.right - bounds.left);
        const availableHeight = Math.max(1, bounds.bottom - bounds.top);
        const width = Math.min(restore.width, availableWidth);
        const height = Math.min(restore.height, availableHeight);
        Object.assign(element.style, {
          left: `${Math.min(Math.max(restore.left, bounds.left), bounds.right - width)}px`,
          top: `${Math.min(Math.max(restore.top, bounds.top), bounds.bottom - height)}px`,
          width: `${width}px`,
          height: `${height}px`,
          transform: "none"
        });
      }
      clampWindowToDesktop(element, getUsableDesktopBounds);
    }
  } else {
    const rect = element.getBoundingClientRect();
    if (isEmbeddedProject) {
      storeEmbeddedProjectRestoredBounds(element, rect);
    } else {
      element._restoreRect = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      };
    }
    document.querySelectorAll(".project-window.maximized").forEach(item => {
      if (item !== element) item.classList.remove("maximized");
    });
    applyMaximizedWindowBounds(element);
    element.classList.add("maximized");
    if (isEmbeddedProject) {
      const state = windowStates.get(element.dataset.windowId);
      if (state) state.isMaximized = true;
    }
  }
  bringForward(element);
  requestAnimationFrame(() => element._syncHostedProjectViewport?.());
}

function placeWindowAtSpawn(element, project) {
  const headerBottom = document.querySelector(".system-bar")?.getBoundingClientRect().bottom || 39;
  const minimumTop = headerBottom + 12;
  const preservedPosition = WINDOW_SESSION_POSITIONS.get(project.id);
  if (preservedPosition) {
    element.style.left = `${preservedPosition.left}px`;
    element.style.top = `${Math.max(minimumTop, preservedPosition.top)}px`;
    element.style.transform = "none";
    clampWindowToDesktop(element);
    return;
  }
  const authoredIndex = WINDOW_PLACEMENT[project.id];
  const spawnIndex = Number.isInteger(authoredIndex) ? authoredIndex : spawnSequence++;
  const spawn = WINDOW_SPAWN_POINTS[spawnIndex % WINDOW_SPAWN_POINTS.length];
  element.dataset.spawnIndex = String(spawnIndex);
  element.style.left = `${spawn.left}%`;
  element.style.top = `calc(${spawn.centerY}% - 30vh)`;
  element.style.transform = "none";
  clampWindowToDesktop(element);
}

const UTILITY_APP_CASCADE_OFFSETS = [
  { x: 0, y: 0 },
  { x: 28, y: 22 },
  { x: 62, y: 49 },
  { x: 88, y: 68 },
  { x: 119, y: 93 }
];
const UTILITY_WINDOW_CLOSE_DURATION = DESKTOP_INTERACTION.windowCloseDuration;
let utilityAppCascadeSequence = 0;

function setUtilityWindowMotionOrigin(element, source) {
  if (!source) return;
  const sourceRect = source.getBoundingClientRect();
  const windowRect = element.getBoundingClientRect();
  if (!windowRect.width || !windowRect.height) return;
  const originX = Math.max(0, Math.min(windowRect.width, sourceRect.left + sourceRect.width / 2 - windowRect.left));
  const originY = Math.max(0, Math.min(windowRect.height, sourceRect.top + sourceRect.height / 2 - windowRect.top));
  element.style.setProperty("--app-window-origin-x", `${originX.toFixed(2)}px`);
  element.style.setProperty("--app-window-origin-y", `${originY.toFixed(2)}px`);
}

function placeUtilityAppAtCascade(element, app) {
  const preservedPosition = WINDOW_SESSION_POSITIONS.get(app.id);
  if (preservedPosition) {
    element.style.left = `${preservedPosition.left}px`;
    element.style.top = `${preservedPosition.top}px`;
    element.style.transform = "none";
    clampWindowToDesktop(element, getEmbeddedProjectBounds);
    return;
  }

  const bounds = getEmbeddedProjectBounds();
  const rect = element.getBoundingClientRect();
  const availableWidth = Math.max(1, bounds.right - bounds.left);
  const availableHeight = Math.max(1, bounds.bottom - bounds.top);
  const width = Math.min(rect.width, availableWidth);
  const height = Math.min(rect.height, availableHeight);
  const verticalSlack = Math.max(0, availableHeight - height);
  const baseLeft = bounds.left + Math.max(0, (availableWidth - width) / 2);
  const baseTop = bounds.top + verticalSlack / 2 - Math.min(34, verticalSlack * .18);
  const availableOffsets = UTILITY_APP_CASCADE_OFFSETS.filter(offset => (
    baseLeft + width + offset.x <= bounds.right &&
    baseTop + height + offset.y <= bounds.bottom
  ));
  const offsets = availableOffsets.length ? availableOffsets : UTILITY_APP_CASCADE_OFFSETS.slice(0, 1);
  const cascadeIndex = utilityAppCascadeSequence % offsets.length;
  const offset = offsets[cascadeIndex];
  utilityAppCascadeSequence = (cascadeIndex + 1) % offsets.length;

  Object.assign(element.style, {
    left: `${baseLeft + offset.x}px`,
    top: `${baseTop + offset.y}px`,
    transform: "none"
  });
  element.dataset.utilityCascadeIndex = String(cascadeIndex);
}

function revealUtilityWindow(element, source) {
  setUtilityWindowMotionOrigin(element, source);
  requestAnimationFrame(() => {
    element.style.visibility = "visible";
    element.classList.remove("is-positioning");
    requestAnimationFrame(() => {
      element.classList.add("is-open");
      element.focus({ preventScroll: true });
    });
  });
}

function animateUtilityWindowForward(element) {
  if (prefersReducedMotion.matches || !element?.classList.contains("native-app-window")) return;
  cancelAnimationFrame(element._utilityRefocusFrame || 0);
  clearTimeout(element._utilityRefocusTimer || 0);
  element.classList.remove("is-refocusing");
  element._utilityRefocusFrame = requestAnimationFrame(() => {
    element._utilityRefocusFrame = 0;
    if (!element.isConnected) return;
    element.classList.add("is-refocusing");
    element._utilityRefocusTimer = window.setTimeout(() => {
      element._utilityRefocusTimer = 0;
      element.classList.remove("is-refocusing");
    }, DESKTOP_INTERACTION.refocusDuration);
  });
}

function closeUtilityWindow(element, finalize) {
  if (!element?.isConnected || element.dataset.utilityClosing === "true") return;
  element.dataset.utilityClosing = "true";
  const finish = () => {
    finalize();
    const nextWindow = activateTopVisibleWindow();
    nextWindow?.focus({ preventScroll: true });
  };
  if (prefersReducedMotion.matches) {
    finish();
    return;
  }
  element.classList.add("is-closing");
  window.setTimeout(finish, UTILITY_WINDOW_CLOSE_DURATION);
}

function placeEmbeddedProjectAtCascade(element, project) {
  const preservedPosition = WINDOW_SESSION_POSITIONS.get(project.id);
  if (preservedPosition) {
    element.style.left = `${preservedPosition.left}px`;
    element.style.top = `${preservedPosition.top}px`;
    element.style.transform = "none";
    clampWindowToDesktop(element, getEmbeddedProjectBounds);
    return;
  }

  const bounds = getEmbeddedProjectBounds();
  const rect = element.getBoundingClientRect();
  const availableWidth = Math.max(1, bounds.right - bounds.left);
  const availableHeight = Math.max(1, bounds.bottom - bounds.top);
  const width = Math.min(rect.width, availableWidth);
  const height = Math.min(rect.height, availableHeight);
  const verticalSlack = Math.max(0, availableHeight - height);
  const verticalLift = Math.min(32, verticalSlack / 4);
  const safeLeft = bounds.left + Math.max(0, (availableWidth - width) / 2);
  const safeTop = bounds.top + verticalSlack / 2 - verticalLift;
  const usableOffsets = EMBEDDED_PROJECT_CASCADE_OFFSETS.filter(offset => (
    safeLeft + width + offset.x <= bounds.right &&
    safeTop + height + offset.y <= bounds.bottom
  ));
  const cascadeOffsets = usableOffsets.length ? usableOffsets : EMBEDDED_PROJECT_CASCADE_OFFSETS.slice(0, 1);
  const cascadeIndex = embeddedProjectCascadeSequence % cascadeOffsets.length;
  const cascadeOffset = cascadeOffsets[cascadeIndex];
  embeddedProjectCascadeSequence = (cascadeIndex + 1) % cascadeOffsets.length;

  Object.assign(element.style, {
    left: `${safeLeft + cascadeOffset.x}px`,
    top: `${safeTop + cascadeOffset.y}px`,
    transform: "none"
  });
  element.dataset.cascadeIndex = String(cascadeIndex);
}

function placeAdobeAlert(element, appId, config) {
  if (config.centerInWorkspace) {
    const bounds = getUsableDesktopBounds();
    const rect = element.getBoundingClientRect();
    const availableWidth = Math.max(1, bounds.right - bounds.left);
    const availableHeight = Math.max(1, bounds.bottom - bounds.top);
    const left = bounds.left + Math.max(0, (availableWidth - rect.width) / 2);
    const top = bounds.top + Math.max(0, (availableHeight - rect.height) / 2);
    element.style.left = `${Math.min(left, bounds.right - rect.width)}px`;
    element.style.top = `${Math.min(top, bounds.bottom - rect.height)}px`;
    element.style.transform = "none";
    return;
  }

  const headerBottom = document.querySelector(".system-bar")?.getBoundingClientRect().bottom || 39;
  const minimumTop = headerBottom + 12;
  const positionKey = `adobe-${appId}`;
  const preservedPosition = WINDOW_SESSION_POSITIONS.get(positionKey);
  if (preservedPosition) {
    element.style.left = `${preservedPosition.left}px`;
    element.style.top = `${Math.max(minimumTop, preservedPosition.top)}px`;
    element.style.transform = "none";
    return;
  }

  element.style.left = `${config.left}%`;
  element.style.top = `${config.top}%`;
  element.style.transform = "translate(-50%, -50%)";
  const rect = element.getBoundingClientRect();
  const clampedLeft = Math.max(12, Math.min(rect.left, innerWidth - rect.width - 12));
  const clampedTop = Math.max(minimumTop, Math.min(rect.top, innerHeight - rect.height - 12));
  element.style.left = `${clampedLeft}px`;
  element.style.top = `${clampedTop}px`;
  element.style.transform = "none";
}

function openAdobeAlert(appId, alertConfig = null) {
  const config = alertConfig || ADOBE_APPS[appId];
  if (!config) return;
  const dockButton = document.querySelector(`#dock-${appId}`);
  const previousFocus = document.activeElement;
  const existing = adobeAlerts.get(appId);
  if (existing?.isConnected) {
    bringForward(existing);
    existing.focus({ preventScroll: true });
    return;
  }

  const element = document.createElement("section");
  element.className = `adobe-alert framer-SRMyU framer-1ap537e${config.className ? ` ${config.className}` : ""}`;
  element.dataset.adobeAlert = appId;
  element.dataset.framerName = config.title;
  element.draggable = false;
  element.tabIndex = 0;
  element.setAttribute("role", "alertdialog");
  element.setAttribute("aria-label", `${config.title} message`);
  const messageMarkup = config.headline
    ? `<div class="adobe-alert-copy">
        <h2 class="adobe-alert-headline">${escape(config.headline)}</h2>
        <p class="adobe-alert-message">${escape(config.paragraphs.join("\n\n"))}</p>
      </div>`
    : `<p class="adobe-alert-message">${escape(config.paragraphs.join("\n\n"))}</p>`;
  element.innerHTML = `
    <div class="adobe-alert-titlebar framer-1j0yfkg" data-framer-name="${escape(config.title)}">
      <p>${escape(config.title)}</p>
    </div>
    <div class="adobe-alert-body framer-1jlih9p" data-framer-name="Error">
      <img class="adobe-alert-icon${config.wideArtboard ? " is-wide-artboard" : ""}" src="${config.icon}" alt="">
      ${messageMarkup}
      <div class="adobe-alert-actions">
        ${config.link ? `<a class="adobe-alert-link" href="${escape(config.link.href)}" target="_blank" rel="noopener noreferrer">${escape(config.link.label)}</a>` : ""}
        <button class="adobe-alert-dismiss framer-lef4a5 mac-button mac-button--prominent" type="button">${escape(config.button)}</button>
      </div>
    </div>`;

  let isClosing = false;
  const closeAlert = () => {
    if (isClosing) return;
    isClosing = true;
    if (adobeAlertDrag?.element === element) adobeAlertDrag = null;
    const finishClose = () => {
      if (!element.isConnected) return;
      element.remove();
      adobeAlerts.delete(appId);
      updateRunningState();
      const nextWindow = activateTopVisibleWindow();
      if (nextWindow) nextWindow.focus({ preventScroll: true });
      else (dockButton || previousFocus)?.focus?.({ preventScroll: true });
    };
    element.classList.add("is-closing");
    element.addEventListener("animationend", finishClose, { once: true });
    window.setTimeout(finishClose, 180);
  };
  element.addEventListener("pointerdown", event => {
    if (event.button !== 0 || event.target.closest(".adobe-alert-dismiss")) {
      bringForward(element);
      return;
    }
    event.preventDefault();
    const rect = element.getBoundingClientRect();
    bringForward(element);
    element.focus({ preventScroll: true });
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    adobeAlertDrag = {
      element,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top
    };
    element.classList.add("dragging");
    element.setPointerCapture(event.pointerId);
  });
  element.addEventListener("pointermove", event => {
    if (!adobeAlertDrag || adobeAlertDrag.element !== element || adobeAlertDrag.pointerId !== event.pointerId) return;
    const nextLeft = adobeAlertDrag.left + event.clientX - adobeAlertDrag.startX;
    const nextTop = adobeAlertDrag.top + event.clientY - adobeAlertDrag.startY;
    const headerBottom = document.querySelector(".system-bar")?.getBoundingClientRect().bottom || 39;
    element.style.left = `${Math.max(-element.offsetWidth + 56, Math.min(nextLeft, innerWidth - 56))}px`;
    element.style.top = `${Math.max(headerBottom + 12, Math.min(nextTop, innerHeight - 34))}px`;
  });
  const endAlertDrag = event => {
    if (!adobeAlertDrag || adobeAlertDrag.element !== element) return;
    if (event.pointerId !== undefined && adobeAlertDrag.pointerId !== event.pointerId) return;
    const rect = element.getBoundingClientRect();
    WINDOW_SESSION_POSITIONS.set(`adobe-${appId}`, { left: rect.left, top: rect.top });
    adobeAlertDrag = null;
    element.classList.remove("dragging");
  };
  element.addEventListener("pointerup", endAlertDrag);
  element.addEventListener("pointercancel", endAlertDrag);
  element.addEventListener("lostpointercapture", endAlertDrag);
  element.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closeAlert();
  });
  element.querySelector(".adobe-alert-dismiss").addEventListener("click", closeAlert);

  adobeAlerts.set(appId, element);
  bringForward(element);
  windowsRoot.append(element);
  placeAdobeAlert(element, appId, config);
  updateRunningState();
  requestAnimationFrame(() => element.focus({ preventScroll: true }));
}

const desktopContextMenuMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
const contextMenuDocuments = new WeakSet();

function desktopContextMenuOverrideIsActive() {
  return desktopContextMenuMedia.matches && !mobileViewport.matches;
}

function openRightClickAlert() {
  openAdobeAlert(RIGHT_CLICK_ALERT_ID, RIGHT_CLICK_ALERT);
}

function handleDesktopContextMenu(event) {
  if (!desktopContextMenuOverrideIsActive()) return;
  event.preventDefault();
  openRightClickAlert();
}

function installDesktopContextMenuOverride(targetDocument = document) {
  if (!targetDocument || contextMenuDocuments.has(targetDocument)) return;
  targetDocument.addEventListener("contextmenu", handleDesktopContextMenu, true);
  contextMenuDocuments.add(targetDocument);
}

installDesktopContextMenuOverride();
document.addEventListener("load", event => {
  const frame = event.target;
  if (!(frame instanceof HTMLIFrameElement)) return;
  try {
    installDesktopContextMenuOverride(frame.contentDocument);
  } catch {
    // Cross-origin frames keep their own browser-controlled context menu.
  }
}, true);

function renderAboutNote(element, noteId, resetScroll = true) {
  const note = NOTES_DATA[noteId] || NOTES_DATA.about;
  const documentPane = element.querySelector(".notes-editor-pane");
  element.dataset.activeNote = noteId;
  element.querySelector(".notes-editor-content").innerHTML = note.content;
  element.querySelector(".notes-window-title").textContent = note.title;
  element.querySelectorAll(".notes-preview-row").forEach(item => {
    const active = item.dataset.noteId === noteId;
    item.classList.toggle("is-selected", active);
    item.setAttribute("aria-selected", String(active));
  });
  element.querySelectorAll(".notes-document-row[data-note-id]").forEach(item => {
    const active = item.dataset.noteId === noteId;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-current", active ? "page" : "false");
  });
  element.classList.add("notes-editor-active");
  if (resetScroll) documentPane.scrollTop = 0;
}

function openAboutNotes() {
  const id = NOTES_APP.id;
  const dockNotes = document.querySelector("#dock-notes");
  const existing = openAppWindows.get(id);
  if (existing?.isConnected) {
    if (isWindowMinimized(id)) {
      restoreMinimizedWindow(id);
      return;
    }
    bringForward(existing);
    animateUtilityWindowForward(existing);
    existing.focus({ preventScroll: true });
    updateRunningState();
    return;
  }

  const element = document.createElement("article");
  element.className = "project-window mac-window native-app-window notes-window is-sidebar-collapsed is-positioning";
  element.dataset.appId = id;
  element.dataset.windowId = id;
  element.dataset.activeNote = "about";
  element.tabIndex = -1;
  element.style.visibility = "hidden";
  element.style.setProperty("--notes-folders-width", `${NOTES_PANE_WIDTHS.folders}px`);
  element.style.setProperty("--notes-list-width", `${NOTES_PANE_WIDTHS.list}px`);
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", "About Lulamile Mkhungela in Notes");
  element.innerHTML = `
    <header class="window-bar notes-titlebar">
      <div class="window-bar-main">
        ${createTrafficControls("My CV")}
        <button
          type="button"
          class="notes-toolbar-button notes-sidebar-toggle"
          aria-label="Show Sidebar"
          aria-expanded="false"
          data-tooltip="Show Sidebar"
        >
          <img
            src="./assets/icons/sf/sidebar.left.svg"
            alt=""
            aria-hidden="true"
            class="notes-toolbar-icon"
          >
        </button>
        <p class="notes-window-title">Notes</p>
      </div>
    </header>
    <div class="notes-split-view">
      <aside class="notes-folders-pane" aria-label="Notes folders">
        <div class="notes-folder-tree">
          <button class="notes-folder-row is-selected" type="button" data-folder="portfolio" data-folder-id="portfolio">
            <img src="./assets/icons/sf/folder.svg" class="notes-sidebar-icon" alt="" aria-hidden="true">
            <span class="notes-folder-label">Portfolio</span>
            <span class="notes-folder-count">3</span>
          </button>
          <div class="notes-folder-children">
            <button class="notes-document-row is-active" type="button" data-note-id="about" aria-current="page">
              <img src="./assets/icons/sf/document.svg" class="notes-sidebar-icon" alt="" aria-hidden="true">
              <span>About</span>
            </button>
            <button class="notes-document-row" type="button" data-note-id="cv" aria-current="false">
              <img src="./assets/icons/sf/document.svg" class="notes-sidebar-icon" alt="" aria-hidden="true">
              <span>CV</span>
            </button>
            <button class="notes-document-row" type="button" data-note-id="interests" aria-current="false">
              <img src="./assets/icons/sf/document.svg" class="notes-sidebar-icon" alt="" aria-hidden="true">
              <span>Interests</span>
            </button>
          </div>
        </div>
      </aside>
      <div class="notes-splitter" data-splitter="folders" role="separator" aria-label="Resize folders pane" aria-orientation="vertical"></div>
      <section class="notes-list-pane" aria-label="Portfolio notes">
        <div class="notes-list-header"><strong>Portfolio</strong><span>3 Notes</span></div>
        <div class="notes-preview-list" role="tablist" aria-label="Notes">
          <button class="notes-preview-row is-selected" type="button" data-note-id="about" role="tab" aria-selected="true"><strong>${escape(NOTES_DATA.about.title)}</strong><p>${escape(NOTES_DATA.about.preview)}</p></button>
          <button class="notes-preview-row" type="button" data-note-id="cv" role="tab" aria-selected="false"><strong>${escape(NOTES_DATA.cv.title)}</strong><p>${escape(NOTES_DATA.cv.preview)}</p></button>
          <button class="notes-preview-row" type="button" data-note-id="interests" role="tab" aria-selected="false"><strong>${escape(NOTES_DATA.interests.title)}</strong><p>${escape(NOTES_DATA.interests.preview)}</p></button>
        </div>
      </section>
      <div class="notes-splitter" data-splitter="list" role="separator" aria-label="Resize notes list" aria-orientation="vertical"></div>
      <main class="notes-editor-pane" role="tabpanel" tabindex="0">
        <button class="notes-editor-back" type="button" aria-label="Back to notes">${sfIcon("chevron.left", "is-navigation")}<span>Notes</span></button>
        <div class="notes-editor-content"></div>
      </main>
    </div>`;

  wireTrafficControls(element);
  openAppWindows.set(id, element);
  registerOpenWindow(id, element, NOTES_APP);
  bringForward(element);
  windowsRoot.append(element);
  enableWindowResizing(element, {
    minWidth: 600,
    minHeight: 400,
    positionKey: id
  });
  renderAboutNote(element, "about", false);
  applyDefaultProjectWindowSize(element);
  placeUtilityAppAtCascade(element, NOTES_APP);
  captureDefaultWindowState(element, id);
  updateRunningState();

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  const sidebarToggle = element.querySelector(".notes-sidebar-toggle");
  const foldersPane = element.querySelector(".notes-folders-pane");
  let isNotesSidebarOpen = false;
  let lastNotesSidebarWidth = NOTES_PANE_WIDTHS.folders;
  let notesTooltipTimer = 0;
  let notesToolbarTooltip = document.querySelector(".notes-toolbar-tooltip");
  if (!notesToolbarTooltip) {
    notesToolbarTooltip = document.createElement("div");
    notesToolbarTooltip.className = "notes-toolbar-tooltip";
    notesToolbarTooltip.id = "notes-toolbar-tooltip";
    notesToolbarTooltip.setAttribute("role", "tooltip");
    document.body.append(notesToolbarTooltip);
  }
  sidebarToggle.setAttribute("aria-describedby", notesToolbarTooltip.id);
  const hideNotesToolbarTooltip = () => {
    clearTimeout(notesTooltipTimer);
    notesTooltipTimer = 0;
    notesToolbarTooltip.classList.remove("visible");
  };
  const showNotesToolbarTooltip = () => {
    clearTimeout(notesTooltipTimer);
    notesTooltipTimer = setTimeout(() => {
      if (!sidebarToggle.matches(":hover, :focus-visible") || element.hidden) return;
      const rect = sidebarToggle.getBoundingClientRect();
      notesToolbarTooltip.textContent = sidebarToggle.dataset.tooltip;
      notesToolbarTooltip.style.left = `${rect.left + rect.width / 2}px`;
      notesToolbarTooltip.style.top = `${rect.bottom + 8}px`;
      notesToolbarTooltip.classList.add("visible");
    }, DESKTOP_INTERACTION.tooltipDelay);
  };
  const setNotesSidebarOpen = open => {
    if (!open && isNotesSidebarOpen) {
      const measuredWidth = foldersPane.getBoundingClientRect().width;
      if (measuredWidth > 0) {
        lastNotesSidebarWidth = measuredWidth;
        NOTES_PANE_WIDTHS.folders = measuredWidth;
      }
    }
    isNotesSidebarOpen = open;
    element.classList.toggle("is-sidebar-collapsed", !open);
    if (open) {
      NOTES_PANE_WIDTHS.folders = lastNotesSidebarWidth;
      element.style.setProperty("--notes-folders-width", `${lastNotesSidebarWidth}px`);
    }
    const action = open ? "Hide Sidebar" : "Show Sidebar";
    sidebarToggle.setAttribute("aria-expanded", String(open));
    sidebarToggle.setAttribute("aria-label", action);
    sidebarToggle.dataset.tooltip = action;
    if (notesToolbarTooltip.classList.contains("visible")) {
      notesToolbarTooltip.textContent = action;
    }
  };
  sidebarToggle.addEventListener("pointerdown", event => {
    event.stopPropagation();
  });
  sidebarToggle.addEventListener("click", event => {
    event.stopPropagation();
    setNotesSidebarOpen(!isNotesSidebarOpen);
  });
  sidebarToggle.addEventListener("pointerenter", showNotesToolbarTooltip);
  sidebarToggle.addEventListener("pointerleave", hideNotesToolbarTooltip);
  sidebarToggle.addEventListener("focus", showNotesToolbarTooltip);
  sidebarToggle.addEventListener("blur", hideNotesToolbarTooltip);
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest("button") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    bringForward(element);
    windowDrag = {
      element,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      minimumTop: (document.querySelector(".system-bar")?.getBoundingClientRect().bottom || 39) + 8
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    const nextLeft = windowDrag.left + event.clientX - windowDrag.startX;
    const nextTop = windowDrag.top + event.clientY - windowDrag.startY;
    scheduleUtilityWindowDrag(
      element,
      Math.max(-windowDrag.width + 56, Math.min(nextLeft, innerWidth - 56)),
      Math.max(windowDrag.minimumTop, Math.min(nextTop, innerHeight - 34))
    );
  });
  const endNotesDrag = () => {
    if (windowDrag?.element === element) {
      flushUtilityWindowDrag(windowDrag);
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endNotesDrag);
  bar.addEventListener("pointercancel", endNotesDrag);
  bar.addEventListener("lostpointercapture", endNotesDrag);

  element.querySelectorAll(".notes-preview-row, .notes-document-row[data-note-id]").forEach(item => {
    item.addEventListener("click", () => renderAboutNote(element, item.dataset.noteId));
  });
  const showNotes = folderName => {
    element.querySelectorAll(".notes-folder-row[data-folder]").forEach(row => {
      row.classList.toggle("is-selected", row.dataset.folder === folderName);
    });
    const header = element.querySelector(".notes-list-header");
    const previewList = element.querySelector(".notes-preview-list");
    header.innerHTML = "<strong>Portfolio</strong><span>3 Notes</span>";
    previewList.innerHTML = Object.entries(NOTES_DATA).map(([noteId, note]) => `
      <button class="notes-preview-row${element.dataset.activeNote === noteId ? " is-selected" : ""}" type="button" data-note-id="${noteId}" role="tab" aria-selected="${element.dataset.activeNote === noteId}">
        <strong>${note.title}</strong><p>${note.preview}</p>
      </button>`).join("");
    previewList.querySelectorAll(".notes-preview-row").forEach(item => {
      item.addEventListener("click", () => renderAboutNote(element, item.dataset.noteId));
    });
    renderAboutNote(element, element.dataset.activeNote || "about", false);
  };
  element.querySelectorAll(".notes-folder-row[data-folder]").forEach(row => {
    row.addEventListener("click", () => showNotes(row.dataset.folder));
  });
  element.querySelector(".notes-editor-back").addEventListener("click", () => {
    element.classList.remove("notes-editor-active");
    element.querySelector(".notes-list-pane").focus?.({ preventScroll: true });
  });

  element.querySelectorAll(".notes-splitter").forEach(splitter => {
    splitter.addEventListener("pointerdown", event => {
      if (splitter.offsetParent === null) return;
      event.preventDefault();
      const pane = splitter.dataset.splitter;
      const startWidth = pane === "folders" ? NOTES_PANE_WIDTHS.folders : NOTES_PANE_WIDTHS.list;
      const startX = event.clientX;
      splitter.setPointerCapture(event.pointerId);
      splitter.dataset.dragging = "true";
      const move = moveEvent => {
        const minimum = pane === "folders" ? 145 : 190;
        const maximum = pane === "folders" ? 250 : 340;
        const next = Math.max(minimum, Math.min(maximum, startWidth + moveEvent.clientX - startX));
        NOTES_PANE_WIDTHS[pane] = next;
        element.style.setProperty(pane === "folders" ? "--notes-folders-width" : "--notes-list-width", `${next}px`);
      };
      const end = () => {
        splitter.dataset.dragging = "false";
        splitter.removeEventListener("pointermove", move);
        splitter.removeEventListener("pointerup", end);
        splitter.removeEventListener("pointercancel", end);
      };
      splitter.addEventListener("pointermove", move);
      splitter.addEventListener("pointerup", end);
      splitter.addEventListener("pointercancel", end);
    });
  });

  const closeAboutNotes = () => {
    closeUtilityWindow(element, () => {
      hideNotesToolbarTooltip();
      forgetWindowState(id);
      element.remove();
      openAppWindows.delete(id);
      resetDock();
      updateRunningState();
      dockNotes.focus({ preventScroll: true });
    });
  };
  element.querySelector('[data-action="close"]').addEventListener("click", closeAboutNotes);
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, NOTES_APP, id);
    dockNotes.focus({ preventScroll: true });
    updateRunningState();
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
  });
  element.addEventListener("pointerup", event => {
    if (event.target.closest(".window-bar") || event.target.closest(".notes-splitter")) return;
    clampWindowToDesktop(element);
  });
  element.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closeAboutNotes();
  });

  revealUtilityWindow(element, dockNotes);
}

function resolveHostedProjectUrl(value, baseUrl) {
  if (!value || value.startsWith("#") || /^(?:data:|blob:|mailto:|tel:|javascript:)/i.test(value)) return value;
  try {
    return new URL(value, baseUrl).href;
  } catch {
    return value;
  }
}

function rewriteHostedProjectCss(cssText, stylesheetUrl) {
  const absoluteUrls = cssText.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi, (match, quote, value) => {
    const resolved = resolveHostedProjectUrl(value.trim(), stylesheetUrl);
    return `url("${resolved}")`;
  });

  // The legacy case-study framework sets the document root to 62.5%, so its
  // rem values were authored against a 10px root. A rem inside Shadow DOM is
  // still resolved against the outer portfolio document (16px), not against
  // the hosted <html> element. Resolve those legacy units at the stylesheet
  // boundary so the original type, grid, spacing, and component proportions
  // remain unchanged without scaling the rendered document.
  const legacyRootRelativeUnits = absoluteUrls.replace(
    /(-?(?:\d+\.?\d*|\.\d+))rem\b/gi,
    (match, value) => `${Number.parseFloat(value) * 10}px`
  );

  // A hosted case study is responsive to its Safari-style window, not to the
  // outer browser. Container viewport units preserve the intent of legacy
  // full-bleed rules such as 100vw without leaking past the project window.
  const containerRelativeWidths = legacyRootRelativeUnits.replace(
    /(-?(?:\d+\.?\d*|\.\d+))(?:d|s|l)?vw\b/gi,
    "$1cqi"
  );

  // Vertical viewport units originally resolved against the iframe viewport.
  // The zero-iframe host exposes that same stable content height as a custom
  // property, keeping full-height sections and vertical rhythm faithful while
  // the parent remains the only scroll owner.
  const projectViewportUnits = containerRelativeWidths.replace(
    /(-?(?:\d+\.?\d*|\.\d+))(?:d|s|l)?vh\b/gi,
    (match, value) => {
      const factor = Number.parseFloat(value) / 100;
      if (factor === 1) return "var(--project-host-viewport-height, 640px)";
      return `calc(var(--project-host-viewport-height, 640px) * ${factor})`;
    }
  );

  return projectViewportUnits
    .replace(/:root\b/g, ":host")
    // Source pages mix expanded `@media (...)` syntax with minified
    // `@media(...)` syntax. Both forms must key off the project host width;
    // requiring a literal space here left compact rules tied to the outer
    // browser viewport and squeezed desktop grids into narrow project windows.
    .replace(/@media\s*(?:only\s+)?screen\s+and\s+([^\{]*(?:\bwidth\b|max-width|min-width)[^\{]*)\{/gi, "@container project $1{")
    .replace(/@media\s*(\((?:max-width|min-width|width)[^\{]*\)(?:\s+and\s+\([^\{]*\))*)\s*\{/gi, "@container project $1{");
}

function resolveHostedProjectMarkup(root, baseUrl) {
  const singleUrlAttributes = ["src", "href", "poster", "action", "data-src"];
  root.querySelectorAll("*").forEach(node => {
    singleUrlAttributes.forEach(attribute => {
      if (!node.hasAttribute(attribute)) return;
      node.setAttribute(attribute, resolveHostedProjectUrl(node.getAttribute(attribute), baseUrl));
    });
    if (node.hasAttribute("srcset")) {
      const resolved = node.getAttribute("srcset").split(",").map(candidate => {
        const [url, descriptor = ""] = candidate.trim().split(/\s+/, 2);
        return `${resolveHostedProjectUrl(url, baseUrl)}${descriptor ? ` ${descriptor}` : ""}`;
      }).join(", ");
      node.setAttribute("srcset", resolved);
    }
    if (node.hasAttribute("style")) {
      node.setAttribute("style", rewriteHostedProjectCss(node.getAttribute("style"), baseUrl));
    }
  });

  // Project footers previously depended on an icon font, which can render as
  // an empty square inside the isolated project host. Mount the actual vector
  // mark so every case study has the same reliable, accessible footer action.
  root.querySelectorAll('.footer.tlc-footer a[href*="linkedin.com"]').forEach(link => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "LinkedIn");
    link.innerHTML = `
      <svg class="project-linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.33 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V8.99h3.56v11.46Z"/>
      </svg>`;
  });
}

function initializeHostedProjectSliders(root) {
  root.querySelectorAll(".tm-slider-container").forEach(slider => {
    const slides = [...slider.querySelectorAll(":scope > .tms-slides > .tms-slide")];
    if (!slides.length) return;
    let activeIndex = Math.max(0, slides.findIndex(slide => slide.classList.contains("active")));
    const showSlide = index => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === activeIndex;
        slide.classList.toggle("active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      slider.querySelectorAll(".project-host-slider-dot").forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
        dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
      });
    };

    const width = Number(slider.dataset.width);
    const height = Number(slider.dataset.height);
    if (slider.classList.contains("content-slider") && width > 0 && height > 0) {
      slider.classList.add("project-host-slider");
      slider.style.setProperty("--project-slider-ratio", String(width / height));
    }

    if (slides.length > 1) {
      const controls = document.createElement("div");
      controls.className = "project-host-slider-controls";
      controls.innerHTML = `
        <button type="button" class="project-host-slider-arrow is-previous" aria-label="Previous image">‹</button>
        <span class="project-host-slider-dots">
          ${slides.map((_, index) => `<button type="button" class="project-host-slider-dot" aria-label="Show image ${index + 1}"></button>`).join("")}
        </span>
        <button type="button" class="project-host-slider-arrow is-next" aria-label="Next image">›</button>`;
      controls.querySelector(".is-previous").addEventListener("click", () => showSlide(activeIndex - 1));
      controls.querySelector(".is-next").addEventListener("click", () => showSlide(activeIndex + 1));
      controls.querySelectorAll(".project-host-slider-dot").forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
      });
      slider.append(controls);
    }
    showSlide(activeIndex);
  });
}

function initializeHostedProjectMedia(root) {
  root.querySelectorAll("video").forEach(video => {
    video.load();
    if (video.autoplay) video.play().catch(() => {});
  });
}

function initializeHostedEditorialGallery(root) {
  const lightbox = root.querySelector("[data-editorial-lightbox]");
  if (!lightbox) return () => {};

  const image = lightbox.querySelector("[data-editorial-lightbox-image]");
  const caption = lightbox.querySelector("[data-editorial-lightbox-caption]");
  const closeButton = lightbox.querySelector("[data-editorial-lightbox-close]");
  let lastTrigger = null;
  const close = () => {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    root.classList.remove("editorial-lightbox-open");
    lastTrigger?.focus({ preventScroll: true });
  };
  const handleClick = event => {
    const trigger = event.target.closest?.("[data-editorial-image]");
    if (trigger) {
      lastTrigger = trigger;
      image.src = trigger.dataset.editorialImage || "";
      image.alt = trigger.dataset.editorialAlt || "";
      caption.textContent = trigger.dataset.editorialCaption || "";
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      root.classList.add("editorial-lightbox-open");
      closeButton?.focus({ preventScroll: true });
      return;
    }
    if (event.target === lightbox || event.target.closest?.("[data-editorial-lightbox-close]")) close();
  };
  const handleKeydown = event => {
    if (!lightbox.hidden && event.key === "Escape") close();
  };
  root.addEventListener("click", handleClick);
  root.addEventListener("keydown", handleKeydown);
  return () => {
    root.removeEventListener("click", handleClick);
    root.removeEventListener("keydown", handleKeydown);
  };
}

function initializeHostedAttExperience(root) {
  const disposers = [];
  root.querySelectorAll("[data-att-carousel]").forEach(carousel => {
    const track = carousel.querySelector(".att-carousel__track");
    const slides = [...carousel.querySelectorAll(".att-carousel__slide")];
    const current = carousel.querySelector("[data-carousel-current]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if (!track || !slides.length || !previous || !next) return;
    let index = 0;
    const show = nextIndex => {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translate3d(-${index * 100}%,0,0)`;
      if (current) current.textContent = String(index + 1);
    };
    const showPrevious = () => show(index - 1);
    const showNext = () => show(index + 1);
    previous.addEventListener("click", showPrevious);
    next.addEventListener("click", showNext);
    disposers.push(() => {
      previous.removeEventListener("click", showPrevious);
      next.removeEventListener("click", showNext);
    });
    show(0);
  });

  const gallery = root.querySelector("[data-att-gallery]");
  const modal = root.querySelector("[data-att-gallery-modal]");
  if (gallery && modal) {
    const buttons = [...gallery.querySelectorAll("[data-att-gallery-item]")];
    const modalImage = modal.querySelector("[data-att-gallery-modal-image]");
    const modalTitle = modal.querySelector("[data-att-gallery-modal-title]");
    const modalDescription = modal.querySelector("[data-att-gallery-modal-description]");
    const modalCount = modal.querySelector("[data-att-gallery-count]");
    const modalScroll = modal.querySelector("[data-att-gallery-modal-scroll]");
    const closeButtons = [...modal.querySelectorAll("[data-att-gallery-close]")];
    const pageWrapper = root.querySelector(".wrapper");
    let index = 0;
    let lastFocused = null;
    let closeTimer = null;
    const update = nextIndex => {
      index = (nextIndex + buttons.length) % buttons.length;
      const button = buttons[index];
      const sourceImage = button?.querySelector("img");
      if (!sourceImage || !modalImage) return;
      modalImage.src = sourceImage.currentSrc || sourceImage.src;
      modalImage.alt = sourceImage.alt;
      if (modalTitle) modalTitle.textContent = button.dataset.title || sourceImage.alt;
      if (modalDescription) modalDescription.textContent = button.dataset.description || "";
      if (modalCount) modalCount.textContent = `${index + 1} / ${buttons.length}`;
      modalScroll?.scrollTo(0, 0);
    };
    const open = nextIndex => {
      if (closeTimer) window.clearTimeout(closeTimer);
      lastFocused = root.getRootNode().activeElement;
      update(nextIndex);
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      root.classList.add("att-gallery-modal-open");
      pageWrapper?.setAttribute("inert", "");
      requestAnimationFrame(() => {
        modal.classList.add("is-open");
        closeButtons.at(-1)?.focus({ preventScroll: true });
      });
    };
    const close = () => {
      if (modal.hidden) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      closeTimer = window.setTimeout(() => {
        modal.hidden = true;
        modalImage?.removeAttribute("src");
        root.classList.remove("att-gallery-modal-open");
        pageWrapper?.removeAttribute("inert");
        lastFocused?.focus?.({ preventScroll: true });
        closeTimer = null;
      }, reducedMotion ? 0 : 320);
    };
    const handleClick = event => {
      const item = event.target.closest?.("[data-att-gallery-item]");
      if (item && gallery.contains(item)) return open(buttons.indexOf(item));
      if (event.target.closest?.("[data-att-gallery-close]")) return close();
      if (event.target.closest?.("[data-att-gallery-previous]")) return update(index - 1);
      if (event.target.closest?.("[data-att-gallery-next]")) return update(index + 1);
    };
    const handleKeydown = event => {
      if (modal.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") update(index - 1);
      if (event.key === "ArrowRight") update(index + 1);
    };
    root.addEventListener("click", handleClick);
    root.addEventListener("keydown", handleKeydown);
    disposers.push(() => {
      if (closeTimer) window.clearTimeout(closeTimer);
      root.removeEventListener("click", handleClick);
      root.removeEventListener("keydown", handleKeydown);
    });
  }
  return () => disposers.forEach(dispose => dispose());
}

function ensureHostedProjectFontStylesheet(url) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url, window.location.href);
  } catch {
    return Promise.resolve();
  }
  if (parsedUrl.hostname !== "fonts.googleapis.com") return Promise.resolve();

  const existing = [...document.head.querySelectorAll('link[data-hosted-project-font]')]
    .find(link => link.href === parsedUrl.href);
  if (existing?.sheet) return Promise.resolve();

  const link = existing || document.createElement("link");
  if (!existing) {
    link.rel = "stylesheet";
    link.href = parsedUrl.href;
    link.dataset.hostedProjectFont = "true";
  }

  return new Promise(resolve => {
    link.addEventListener("load", resolve, { once: true });
    link.addEventListener("error", resolve, { once: true });
    if (!existing) document.head.append(link);
  });
}

async function mountHostedProjectDocument(host, source, scrollContainer) {
  const canonicalSourceUrl = new URL(source, window.location.href).href;
  const response = await fetch(canonicalSourceUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load project (${response.status}) from ${canonicalSourceUrl}`);
  }
  const sourceUrl = new URL(response.url || source, window.location.href);
  const sourceText = await response.text();
  const parsed = new DOMParser().parseFromString(sourceText, "text/html");
  if (!parsed.documentElement || parsed.querySelector("parsererror")) {
    throw new Error(`Unable to parse project document from ${sourceUrl.href}`);
  }
  const shadow = host.shadowRoot || host.attachShadow({ mode: "open" });
  shadow.replaceChildren();

  const sourceStyleNodes = [...parsed.head.querySelectorAll('link[rel="stylesheet"], style')];
  const preparedStyles = await Promise.all(sourceStyleNodes.map(async sourceNode => {
    if (sourceNode.tagName === "STYLE") {
      return { type: "style", css: sourceNode.textContent, url: sourceUrl };
    }
    const url = new URL(sourceNode.getAttribute("href"), sourceUrl).href;
    if (new URL(url).origin !== window.location.origin) {
      return { type: "link", url };
    }
    const stylesheetResponse = await fetch(url);
    if (!stylesheetResponse.ok) {
      throw new Error(`Unable to load project stylesheet (${stylesheetResponse.status}) from ${url}`);
    }
    return { type: "style", css: await stylesheetResponse.text(), url };
  }));

  // Chrome does not consistently register @font-face declarations from a
  // stylesheet that exists only inside a Shadow root. Register the original
  // Google font sheet once at document level, while retaining its original
  // position in the hosted project's own cascade below.
  await Promise.all(preparedStyles
    .filter(prepared => prepared.type === "link")
    .map(prepared => ensureHostedProjectFontStylesheet(prepared.url)));

  // Preserve the source document's exact stylesheet order. The Medable page
  // relies on the original framework -> skin -> components -> shared override
  // cascade; regrouping remote and local sheets changes winning declarations.
  preparedStyles.forEach(prepared => {
    if (prepared.type === "link") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = prepared.url;
      shadow.append(link);
      return;
    }
    const style = document.createElement("style");
    style.textContent = rewriteHostedProjectCss(prepared.css, prepared.url);
    shadow.append(style);
  });

  const adapterStyle = document.createElement("style");
  adapterStyle.textContent = `
    :host { display:block; width:100%; min-height:100%; container:project / inline-size; background:#fff; }
    html, body { display:block; width:100%; min-height:0 !important; margin:0 !important; overflow:visible !important; background:#fff; text-rendering:auto; }
    html { --case-paper:#f4f2ed; --case-white:#fbfaf7; --case-ink:#191918; --case-line:rgba(25,25,24,.16); --case-accent:#745461; }
    html.is-embedded .portfolio-case-updated .case-study-hero--expanded,
    html.is-embedded .portfolio-case-updated .case-study-hero--expanded.case-study-hero--slider .tm-slider-container,
    html.is-embedded .portfolio-case-updated .case-study-hero--expanded.case-study-hero--slider .tms-slides,
    html.is-embedded .portfolio-case-updated .case-study-hero--expanded.case-study-hero--slider .tms-slide { height:var(--project-host-viewport-height,640px) !important; min-height:var(--project-host-viewport-height,640px) !important; }
    html.is-embedded .footer.tlc-footer, html.is-embedded .footer.tlc-footer .footer-top { min-height:var(--project-host-viewport-height,640px) !important; }
    html.is-embedded .medable-page .m-hero { min-height:var(--project-host-viewport-height,640px); padding:clamp(72px,calc(var(--project-host-viewport-height,640px) * .1),76px) 0 clamp(36px,calc(var(--project-host-viewport-height,640px) * .05),48px) !important; display:block; box-sizing:border-box; }
    html.is-embedded .medable-page .m-hero-copy { margin:0 auto !important; padding-top:0 !important; }
    html.is-embedded .medable-page .m-display { font-size:clamp(52px,6.5cqi,84px); line-height:.94; }
    @container project (min-width:1400px) { html.is-embedded .medable-page .m-hero { padding-top:clamp(44px,calc(var(--project-host-viewport-height,640px) * .07),56px) !important; } }
    .tlc-scroll-top { display:none !important; }
    .tms-caption, .horizon { opacity:1 !important; visibility:visible !important; transform:none !important; }
    .tms-slide[data-as-bkg-image] > img { position:absolute; inset:0; width:100%; height:100%; max-width:none; max-height:none; object-fit:cover; }
    .project-host-slider { height:auto !important; min-height:0 !important; aspect-ratio:var(--project-slider-ratio); overflow:hidden; }
    .project-host-slider > .tms-slides { height:100% !important; }
    .project-host-slider-controls { position:absolute; z-index:12; right:14px; bottom:12px; left:14px; display:flex; align-items:center; justify-content:space-between; pointer-events:none; }
    .project-host-slider-arrow, .project-host-slider-dot { pointer-events:auto; border:0; color:#fff; background:rgba(25,25,24,.62); box-shadow:0 2px 8px rgba(0,0,0,.16); }
    .project-host-slider-arrow { width:30px; height:30px; margin:0; padding:0; border-radius:50%; font:400 24px/28px -apple-system,sans-serif; }
    .project-host-slider-dots { display:flex; gap:6px; }
    .project-host-slider-dot { width:7px; height:7px; margin:0; padding:0; border-radius:50%; opacity:.48; }
    .project-host-slider-dot.is-active { opacity:1; }
    .project-host-lightbox { position:fixed; z-index:10000; inset:0; display:grid; place-items:center; padding:32px; background:rgba(20,20,20,.72); }
    .project-host-lightbox-panel { position:relative; width:min(720px,100%); max-height:calc(100% - 16px); overflow:auto; border-radius:12px; background:#fff; box-shadow:0 24px 80px rgba(0,0,0,.32); }
    .project-host-lightbox-panel > iframe { display:block; width:100%; aspect-ratio:16 / 9; border:0; }
    .project-host-lightbox-content { padding:28px; }
    .project-host-lightbox-content .hide { display:block !important; visibility:visible !important; }
    .project-host-lightbox-close { position:absolute; z-index:2; top:10px; right:10px; width:28px; height:28px; margin:0; padding:0; border:0; border-radius:50%; color:#fff; background:rgba(0,0,0,.66); font:500 20px/28px -apple-system,sans-serif; }
  `;
  shadow.append(adapterStyle);

  const htmlShell = document.createElement("html");
  htmlShell.className = `${parsed.documentElement.className} is-embedded is-parent-scroll-host`.trim();
  htmlShell.style.setProperty("--project-host-viewport-height", `${Math.max(1, scrollContainer.clientHeight)}px`);
  const bodyShell = document.createElement("body");
  bodyShell.className = `${parsed.body.className} is-embedded is-parent-scroll-host`.trim();
  [...parsed.body.attributes].forEach(({ name, value }) => {
    if (name.startsWith("data-")) bodyShell.setAttribute(name, value);
  });
  if ("transition" in document.documentElement.style) bodyShell.classList.add("transition-support");
  if (CSS.supports("-webkit-appearance: none")) bodyShell.classList.add("webkit");
  bodyShell.innerHTML = parsed.body.innerHTML;
  bodyShell.querySelectorAll("script, noscript").forEach(node => node.remove());
  resolveHostedProjectMarkup(bodyShell, sourceUrl);
  bodyShell.querySelectorAll("img[data-src]").forEach(image => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
  htmlShell.append(bodyShell);
  shadow.append(htmlShell);
  initializeHostedProjectSliders(bodyShell);
  initializeHostedProjectMedia(bodyShell);
  const disposeEditorialGallery = initializeHostedEditorialGallery(bodyShell);
  const disposeAttExperience = initializeHostedAttExperience(bodyShell);
  await document.fonts.ready;

  const syncViewportHeight = () => {
    htmlShell.style.setProperty("--project-host-viewport-height", `${Math.max(1, scrollContainer.clientHeight)}px`);
  };
  const viewportResizeObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver(syncViewportHeight)
    : null;
  viewportResizeObserver?.observe(scrollContainer);
  let activeLightbox = null;
  const closeLightbox = () => {
    activeLightbox?.remove();
    activeLightbox = null;
  };
  const openLightbox = control => {
    closeLightbox();
    const href = control.getAttribute("href") || "";
    const resolved = resolveHostedProjectUrl(href, sourceUrl);
    const hash = (() => {
      try { return new URL(resolved, sourceUrl).hash; } catch { return ""; }
    })();
    const inlineTarget = hash ? bodyShell.querySelector(hash) : null;
    const overlay = document.createElement("div");
    overlay.className = "project-host-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    const panel = document.createElement("div");
    panel.className = "project-host-lightbox-panel";
    const close = document.createElement("button");
    close.type = "button";
    close.className = "project-host-lightbox-close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";
    if (inlineTarget) {
      const content = document.createElement("div");
      content.className = "project-host-lightbox-content";
      const clone = inlineTarget.cloneNode(true);
      clone.removeAttribute("id");
      clone.classList.remove("hide");
      content.append(clone);
      panel.append(content);
    } else {
      const iframe = document.createElement("iframe");
      iframe.src = resolved;
      iframe.title = control.dataset.caption || "Project media";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      panel.append(iframe);
    }
    panel.append(close);
    overlay.append(panel);
    overlay.addEventListener("click", event => {
      if (event.target === overlay || event.target === close) closeLightbox();
    });
    bodyShell.append(overlay);
    activeLightbox = overlay;
    close.focus({ preventScroll: true });
  };
  const handleHostedClick = event => {
    const lightboxControl = event.target.closest?.(".lightbox-link");
    if (lightboxControl) {
      event.preventDefault();
      openLightbox(lightboxControl);
      return;
    }
    const control = event.target.closest?.(".case-study-scroll-cue, .tlc-scroll-top, a[href*='#']");
    if (!control) return;
    let target = null;
    if (control.classList.contains("case-study-scroll-cue")) {
      target = control.closest("[data-project-hero]")?.nextElementSibling;
    } else if (control.classList.contains("tlc-scroll-top")) {
      target = htmlShell;
    } else {
      const hash = new URL(control.href, sourceUrl).hash;
      if (hash) target = bodyShell.querySelector(hash);
    }
    if (!target) return;
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = target === htmlShell
      ? 0
      : Math.max(0, scrollContainer.scrollTop + target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top);
    scrollContainer.scrollTo({
      top,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  };
  const handleHostedForm = async event => {
    const form = event.target.closest?.("form");
    if (!form) return;
    event.preventDefault();
    const responseNode = form.parentElement?.querySelector(".form-response");
    // Static hosting has no mail backend (the forms post to ../php/send-email.php).
    // js/contact-form-fallback.js validates, still tries that endpoint, and
    // otherwise opens the visitor's email app with the message pre-filled.
    if (typeof window.submitContactForm === "function") {
      await window.submitContactForm(form, responseNode);
      return;
    }
    try {
      const result = await fetch(form.action, { method: form.method || "POST", body: new FormData(form) });
      if (!result.ok) throw new Error();
      if (responseNode) responseNode.textContent = "Thank you. Your message has been sent.";
      form.reset();
    } catch {
      if (responseNode) responseNode.textContent = "Unable to send right now. Please try again.";
    }
  };
  bodyShell.addEventListener("click", handleHostedClick);
  bodyShell.addEventListener("submit", handleHostedForm);
  const backToTop = host.closest(".embedded-project")?.querySelector(".project-content-scroll-top");
  const updateBackToTop = () => {
    backToTop?.classList.toggle("is-visible", scrollContainer.scrollTop > Math.max(240, scrollContainer.clientHeight * 0.65));
  };
  const handleBackToTop = () => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  };
  const handleHostedKeydown = event => {
    if (event.key === "Escape" && activeLightbox) {
      event.preventDefault();
      closeLightbox();
    }
  };
  scrollContainer.addEventListener("scroll", updateBackToTop, { passive: true });
  scrollContainer.addEventListener("keydown", handleHostedKeydown);
  backToTop?.addEventListener("click", handleBackToTop);
  updateBackToTop();

  return {
    syncViewportHeight,
    dispose() {
      bodyShell.removeEventListener("click", handleHostedClick);
      bodyShell.removeEventListener("submit", handleHostedForm);
      scrollContainer.removeEventListener("scroll", updateBackToTop);
      scrollContainer.removeEventListener("keydown", handleHostedKeydown);
      backToTop?.removeEventListener("click", handleBackToTop);
      viewportResizeObserver?.disconnect();
      disposeEditorialGallery();
      disposeAttExperience();
      closeLightbox();
      shadow.replaceChildren();
    }
  };
}

function wireHostedProjectLoading(host, loading, source, onReady) {
  let cancelled = false;
  const container = host.closest(".embedded-project");
  let request = null;
  const start = () => {
    request = runWithProjectLoadingState(container, { title: host.dataset.projectTitle || "Project" }, async () => {
      const mounted = await mountHostedProjectDocument(host, source, host.closest(".project-content-scroll"));
      if (cancelled) {
        mounted.dispose();
        return;
      }
      host.classList.add("is-loaded");
      onReady?.(mounted);
    });
    request.promise.catch(error => {
      if (cancelled) return;
      console.error("Unable to mount hosted project", {
        project: host.dataset.projectTitle || "Project",
        source,
        canonicalSource: (() => {
          try { return new URL(source, window.location.href).href; } catch { return source; }
        })(),
        error
      });
      const errorState = createProjectLoadingState({ title: host.dataset.projectTitle || "Project" });
      errorState.classList.add("is-visible", "is-error");
      errorState.hidden = false;
      errorState.querySelector(".project-loader")?.remove();
      const message = errorState.querySelector(".project-loading-label");
      if (message) message.textContent = "Unable to open project";
      const retry = errorState.querySelector(".project-loading-retry");
      if (retry) {
        retry.hidden = false;
        retry.addEventListener("click", () => {
          errorState.remove();
          start();
        }, { once: true });
      }
      container.append(errorState);
    });
  };
  start();
  loading.remove();
  return () => {
    cancelled = true;
    request?.cancel();
  };
}

function openEmbeddedProject(project) {
  const id = project.id;
  const existingWindow = openProjectWindows.get(id);
  if (existingWindow?.isConnected) {
    if (isWindowMinimized(id)) {
      restoreMinimizedWindow(id);
      return;
    }
    bringForward(existingWindow);
    animateEmbeddedWindowForward(existingWindow);
    existingWindow.focus({ preventScroll: true });
    return;
  }

  const element = document.createElement("article");
  openProjectWindows.set(id, element);
  registerOpenWindow(id, element, project);
  element.className = "project-window project-window--embedded is-positioning";
  element.dataset.windowId = id;
  element.dataset.projectId = project.id;
  element.tabIndex = -1;
  element.style.visibility = "hidden";
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", `${project.title} case study`);
  // Case studies are normally fetched and mounted into the window (see
  // mountHostedProjectDocument), which needs the site to be served over HTTP.
  // When index.html is opened straight from disk (file://) browsers block
  // fetch(), so the case study is shown in an iframe instead, the same way
  // the mobile layout shows it.
  const loadInFrame = window.location.protocol === "file:";
  if (!loadInFrame) element.classList.add("project-window--parent-scroll");
  const projectContent = loadInFrame
    ? `
    <div class="embedded-project">
      <iframe class="embedded-project-frame" title="${escape(project.title)} case study"></iframe>
    </div>`
    : `
    <div class="embedded-project embedded-project--parent-scroll">
      <div class="project-content-scroll" role="region" aria-label="${escape(project.title)} case study content" tabindex="0">
        <div
          class="project-document-host"
          data-project-title="${escape(project.title)}"
          aria-label="${escape(project.title)} case study"></div>
      </div>
      <button class="project-content-scroll-top" type="button" aria-label="Back to top">
        <span aria-hidden="true">↑</span><span>Back to top</span>
      </button>
    </div>`;
  element.innerHTML = `
    <div class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls(project.title)}
        <p>${escape(project.title)}</p>
      </div>
    </div>
    <nav class="explorer-bar" aria-hidden="true">
      <img class="explorer-bar__icon" src="./public/icons/project-folder-win.svg" alt="">
      <span class="explorer-bar__crumb">This PC</span>
      <span class="explorer-bar__sep">&rsaquo;</span>
      <span class="explorer-bar__crumb">Portfolio</span>
      <span class="explorer-bar__sep">&rsaquo;</span>
      <span class="explorer-bar__crumb is-current">${escape(project.title)}</span>
    </nav>${projectContent}`;

  const loading = createProjectLoadingState(project);
  element.querySelector(".embedded-project").prepend(loading);
  const handleProjectReady = mountedDocument => {
    if (mountedDocument) {
      element._disposeParentProjectScroll?.();
      element._disposeParentProjectScroll = mountedDocument.dispose;
      element._syncHostedProjectViewport = mountedDocument.syncViewportHeight;
    }
    requestAnimationFrame(() => {
      captureDefaultWindowState(element, project.id);
      scheduleWindowTransitionSnapshot(element, project.id);
    });
  };
  element._cancelProjectLoading = loadInFrame
    ? wireProjectLoading(
      element.querySelector(".embedded-project-frame"),
      loading,
      project.url || "about:blank",
      handleProjectReady
    )
    : wireHostedProjectLoading(
      element.querySelector(".project-document-host"),
      loading,
      project.url || "about:blank",
      handleProjectReady
    );

  wireTrafficControls(element);
  bringForward(element);
  windowsRoot.append(element);
  enableWindowResizing(element, {
    minWidth: 360,
    minHeight: 320,
    positionKey: project.id,
    getBounds: getEmbeddedProjectBounds
  });
  applyDefaultProjectWindowSize(element);
  placeEmbeddedProjectAtCascade(element, project);
  setEmbeddedWindowMotionOrigin(element, project.id);
  updateRunningState();

  element.addEventListener("pointerdown", () => bringForward(element));
  element.querySelector(".project-content-scroll")?.addEventListener("scroll", () => {
    scheduleWindowTransitionSnapshot(element, project.id);
  }, { passive: true });
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (
      event.button !== 0 ||
      event.target.closest("button, a, input, select, textarea, [contenteditable='true']") ||
      element.classList.contains("maximized")
    ) return;
    event.preventDefault();
    const rect = element.getBoundingClientRect();
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    bringForward(element);
    windowDrag = {
      element,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    const bounds = getEmbeddedProjectBounds();
    const nextLeft = windowDrag.left + event.clientX - windowDrag.startX;
    const nextTop = windowDrag.top + event.clientY - windowDrag.startY;
    const reachableWidth = 72;
    const titlebarHeight = 38;
    element.style.left = `${Math.max(bounds.left - windowDrag.width + reachableWidth, Math.min(nextLeft, bounds.right - reachableWidth))}px`;
    element.style.top = `${Math.max(bounds.top, Math.min(nextTop, bounds.bottom - titlebarHeight))}px`;
  });
  const endEmbeddedDrag = () => {
    if (windowDrag?.element === element) {
      clampWindowToDesktop(element, getEmbeddedProjectBounds);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(project.id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endEmbeddedDrag);
  bar.addEventListener("pointercancel", endEmbeddedDrag);
  bar.addEventListener("lostpointercapture", endEmbeddedDrag);

  element.querySelector('[data-action="close"]').addEventListener("click", () => {
    closeEmbeddedProjectWindow(element, project, id);
  });
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, project, id);
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scheduleWindowTransitionSnapshot(element, project.id);
    }));
  });

  requestAnimationFrame(() => {
    element.classList.remove("is-positioning");
    element.style.visibility = "visible";
    requestAnimationFrame(() => {
      element.classList.add("is-open");
      captureDefaultWindowState(element, project.id);
      element.focus({ preventScroll: true });
    });
  });
}

function openProject(project) {
  if (project.url) {
    openEmbeddedProject(project);
    return;
  }
  const id = `${project.id}-${++windowCount}`;
  const element = document.createElement("article");
  element.className = "project-window";
  element.dataset.windowId = id;
  element.dataset.projectId = project.id;
  element.style.setProperty("--window-x", "0px");
  element.style.setProperty("--window-y", "0px");
  element.style.setProperty("--accent", project.colors[0]);
  element.style.setProperty("--soft", project.colors[1]);
  element.style.setProperty("--split", "62%");
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", `${project.title} project preview`);
  element.innerHTML = `
    <div class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls(project.title)}
        <p>Information about: ${escape(project.title)}</p>
      </div>
    </div>
    <div class="project-overview">
      <div class="project-overview-inner">
      <header class="overview-head">
        <div class="overview-cover">${escape(project.number)}</div>
        <div class="overview-title"><b>${escape(project.title)}</b><span>${escape(project.subtitle)}</span></div>
      </header>
      <section class="overview-description"><p><em>${escape(project.title)}</em> — ${escape(project.summary)}</p></section>
      <div class="section-label">Details:</div>
      <dl class="detail-grid">
        <dt>Type:</dt><dd>${project.services.map(escape).join(" › ")}</dd>
        <dt>Year:</dt><dd>${escape(project.year)}</dd>
        <dt>Project:</dt><dd>${escape(project.subtitle)}</dd>
      </dl>
      <div class="section-label">Preview:</div>
      <main class="preview-stack">
        <div class="preview-hero"><strong>${escape(project.title)}</strong></div>
        <div class="preview-grid">
          <div class="preview-tile">${escape(project.number)}</div>
          <div class="preview-tile">${escape(project.subtitle)}</div>
          <div class="preview-tile">${escape(project.year)}</div>
        </div>
      </main>
      <div class="section-label">Credits:</div>
      <dl class="detail-grid credits-grid">
        <dt>Direction:</dt><dd>Lulamile Mkhungela</dd>
        <dt>Design:</dt><dd>Lulamile Mkhungela</dd>
        <dt>Services:</dt><dd>${project.services.map(escape).join(", ")}</dd>
      </dl>
      <button class="overview-expand mac-button mac-button--prominent" type="button">View full case study ↗</button>
      </div>
    </div>`;
  wireTrafficControls(element);
  bringForward(element);
  windowsRoot.append(element);
  enableWindowResizing(element, {
    minWidth: 360,
    minHeight: 320,
    positionKey: project.id
  });
  applyDefaultProjectWindowSize(element);
  placeWindowAtSpawn(element, project);
  captureDefaultWindowState(element, project.id);
  updateRunningState();

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest(".traffic") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    element.style.setProperty("--window-x", "0px");
    element.style.setProperty("--window-y", "0px");
    bringForward(element);
    windowDrag = {
      element, startX:event.clientX, startY:event.clientY,
      left:rect.left,
      top:rect.top
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    element.style.left = `${windowDrag.left + event.clientX - windowDrag.startX}px`;
    element.style.top = `${windowDrag.top + event.clientY - windowDrag.startY}px`;
  });
  const endWindowDrag = () => {
    if (windowDrag?.element === element) {
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(project.id, { left:rect.left, top:rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endWindowDrag);
  bar.addEventListener("pointercancel", endWindowDrag);

  element.querySelector('[data-action="close"]').addEventListener("click", () => {
    forgetWindowState(id);
    element.remove();
    resetDock();
    updateRunningState();
  });
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => minimizeWindow(element, project, id));
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
  });
  element.querySelector(".overview-expand").addEventListener("click", () => {
    if (!element.classList.contains("maximized")) toggleProjectMaximize(element);
  });
}

function loadInstagramEmbed(element) {
  const host = element.querySelector(".instagram-embed-host");
  const loading = element.querySelector(".instagram-loading");
  const fallback = element.querySelector(".instagram-fallback");
  let finished = false;

  const showEmbed = () => {
    if (finished || !element.isConnected) return;
    finished = true;
    loading?.remove();
    fallback.hidden = true;
    observer.disconnect();
    clearTimeout(failureTimer);
  };
  const showFallback = () => {
    if (finished || !element.isConnected) return;
    finished = true;
    loading?.remove();
    host.hidden = true;
    fallback.hidden = false;
    observer.disconnect();
    clearTimeout(failureTimer);
  };
  const observer = new MutationObserver(() => {
    if (host.querySelector("iframe")) showEmbed();
  });
  observer.observe(host, { childList: true, subtree: true });
  const failureTimer = setTimeout(showFallback, 10000);
  element.instagramEmbedCleanup = () => {
    observer.disconnect();
    clearTimeout(failureTimer);
  };

  const processEmbed = () => {
    try {
      window.instgrm?.Embeds?.process();
      if (host.querySelector("iframe")) showEmbed();
    } catch {
      showFallback();
    }
  };
  const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
  if (existingScript) {
    if (window.instgrm?.Embeds) processEmbed();
    else {
      existingScript.addEventListener("load", processEmbed, { once: true });
      existingScript.addEventListener("error", showFallback, { once: true });
    }
    return;
  }

  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.addEventListener("load", processEmbed, { once: true });
  script.addEventListener("error", showFallback, { once: true });
  document.body.appendChild(script);
}

function openInstagramWindow() {
  const dockInstagram = document.querySelector("#dock-instagram");
  if (instagramWindow?.isConnected) {
    if (isWindowMinimized("instagram")) {
      restoreMinimizedWindow("instagram");
      return;
    }
    bringForward(instagramWindow);
    instagramWindow.focus({ preventScroll: true });
    return;
  }

  const id = "instagram";
  const element = document.createElement("article");
  instagramWindow = element;
  registerOpenWindow("instagram", element, INSTAGRAM_APP);
  element.className = "project-window native-app-window instagram-window is-open";
  element.dataset.windowId = id;
  element.dataset.projectId = INSTAGRAM_APP.id;
  element.tabIndex = -1;
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", "Instagram profile");
  element.innerHTML = `
    <div class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls("Instagram")}
        <p>Instagram</p>
      </div>
    </div>
    <div class="instagram-window-content">
      <div class="instagram-loading" role="status">Loading Instagram…</div>
      <div class="instagram-embed-host">
        <blockquote
          class="instagram-media"
          data-instgrm-permalink="${INSTAGRAM_PROFILE_URL}?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14">
          <a href="${INSTAGRAM_PROFILE_URL}" target="_blank" rel="noopener noreferrer">View on Instagram</a>
        </blockquote>
      </div>
      <div class="instagram-fallback" hidden>
        <p>Instagram could not load here.</p>
        <a class="mac-button mac-button--prominent" href="${INSTAGRAM_PROFILE_URL}" target="_blank" rel="noopener noreferrer">Open Instagram</a>
      </div>
    </div>`;

  wireTrafficControls(element);
  bringForward(element);
  windowsRoot.append(element);
  enableWindowResizing(element, {
    minWidth: 320,
    minHeight: 320,
    positionKey: INSTAGRAM_APP.id
  });
  placeWindowAtSpawn(element, INSTAGRAM_APP);
  captureDefaultWindowState(element, INSTAGRAM_APP.id);
  updateRunningState();

  const closeInstagram = () => {
    element.instagramEmbedCleanup?.();
    document.removeEventListener("keydown", handleInstagramEscape);
    forgetWindowState("instagram");
    element.remove();
    instagramWindow = null;
    resetDock();
    updateRunningState();
    const nextWindow = activateTopVisibleWindow();
    if (nextWindow) nextWindow.focus({ preventScroll: true });
    else dockInstagram.focus({ preventScroll: true });
  };
  const handleInstagramEscape = event => {
    if (event.key !== "Escape" || element.hidden || !element.isConnected) return;
    event.preventDefault();
    closeInstagram();
  };
  document.addEventListener("keydown", handleInstagramEscape);

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest(".traffic") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    bringForward(element);
    windowDrag = {
      element,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    scheduleUtilityWindowDrag(
      element,
      windowDrag.left + event.clientX - windowDrag.startX,
      windowDrag.top + event.clientY - windowDrag.startY
    );
  });
  const endInstagramDrag = () => {
    if (windowDrag?.element === element) {
      flushUtilityWindowDrag(windowDrag);
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(INSTAGRAM_APP.id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endInstagramDrag);
  bar.addEventListener("pointercancel", endInstagramDrag);
  bar.addEventListener("lostpointercapture", endInstagramDrag);

  element.querySelector('[data-action="close"]').addEventListener("click", closeInstagram);
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, INSTAGRAM_APP, id);
    dockInstagram.focus({ preventScroll: true });
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
  });

  loadInstagramEmbed(element);
  requestAnimationFrame(() => element.focus({ preventScroll: true }));
}

function openMessagesWindow() {
  const id = MESSAGES_APP.id;
  const dockMessages = document.querySelector("#dock-messages");
  const existing = openAppWindows.get(id);
  if (existing?.isConnected) {
    if (isWindowMinimized(id)) {
      restoreMinimizedWindow(id);
      return;
    }
    bringForward(existing);
    animateUtilityWindowForward(existing);
    existing.focus({ preventScroll: true });
    updateRunningState();
    return;
  }

  const element = document.createElement("article");
  element.className = "project-window native-app-window messages-window is-positioning";
  element.dataset.windowId = id;
  element.dataset.appId = id;
  element.tabIndex = -1;
  element.style.visibility = "hidden";
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", "Messages testimonials");

  const threadMarkup = TESTIMONIALS.map((item, index) => {
    const context = [item.role, item.company].filter(Boolean).join(" · ");
    return `
      <button
        class="messages-thread${index === 0 ? " is-selected" : ""}"
        type="button"
        role="option"
        aria-selected="${index === 0 ? "true" : "false"}"
        data-testimonial-index="${index}">
        <img class="messages-thread-avatar" src="${escape(item.avatar)}" alt="" loading="lazy" decoding="async" draggable="false">
        <span class="messages-thread-copy">
          <strong>${escape(item.name)}</strong>
          <span>${escape(context)}</span>
          <p>${escape(item.preview)}</p>
        </span>
      </button>`;
  }).join("");

  element.innerHTML = `
    <div class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls("Messages")}
        <p>Messages</p>
      </div>
    </div>
    <div class="messages-app">
      <aside class="messages-sidebar" aria-label="Recommendations">
        <div class="messages-search-wrap">
          <input class="messages-search native-search-field" type="search" placeholder="Search" aria-label="Search recommendations" autocomplete="off">
        </div>
        <div class="messages-thread-list" role="listbox" aria-label="Collaborator recommendations">
          ${threadMarkup}
          <p class="messages-no-results" role="status" aria-live="polite" aria-atomic="true" hidden>No recommendations found.</p>
        </div>
      </aside>
      <section class="messages-conversation" aria-label="Selected recommendation">
        <header class="messages-conversation-header">
          <img class="messages-contact-avatar" src="" alt="" decoding="async" draggable="false">
          <div class="messages-contact-copy">
            <h2 class="messages-contact-name"></h2>
            <span class="messages-contact-role"></span>
          </div>
        </header>
        <div class="messages-history" tabindex="0">
          <p class="messages-history-label">What they said about working with Lulamile</p>
          <div class="message-group message-group--testimonial"></div>
        </div>
        <footer class="messages-readonly-footer">Recommendations from collaborators</footer>
      </section>
    </div>`;

  wireTrafficControls(element);
  windowsRoot.append(element);
  bringForward(element);
  enableWindowResizing(element, {
    minWidth: 560,
    minHeight: 400,
    positionKey: id
  });
  applyDefaultProjectWindowSize(element);
  placeUtilityAppAtCascade(element, MESSAGES_APP);
  captureDefaultWindowState(element, id);
  openAppWindows.set(id, element);
  registerOpenWindow(id, element, MESSAGES_APP);
  updateRunningState();

  const threadList = element.querySelector(".messages-thread-list");
  const history = element.querySelector(".messages-history");
  const contactAvatar = element.querySelector(".messages-contact-avatar");
  const contactName = element.querySelector(".messages-contact-name");
  const contactRole = element.querySelector(".messages-contact-role");
  const messageGroup = element.querySelector(".message-group--testimonial");
  const noResults = element.querySelector(".messages-no-results");

  const createIncomingMessage = (message, hasTail = false) => {
    const row = document.createElement("div");
    row.className = "message-row is-incoming";
    if (message.type === "document") {
      const attachment = document.createElement("a");
      attachment.className = `message-document-attachment${hasTail ? " has-native-tail" : ""}`;
      attachment.href = message.file;
      attachment.target = "_blank";
      attachment.rel = "noopener";
      attachment.setAttribute("aria-label", `Open ${message.title}`);
      if (message.documentId) attachment.dataset.documentId = message.documentId;

      const header = document.createElement("span");
      header.className = "message-document-header";
      const icon = document.createElement("span");
      icon.className = "message-document-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "PDF";
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent = message.title;
      const fileType = document.createElement("small");
      fileType.textContent = message.fileType;
      copy.append(title, fileType);
      header.append(icon, copy);

      const preview = document.createElement("img");
      preview.className = "message-document-preview";
      preview.src = message.preview;
      preview.alt = "Preview of the recommendation letter";
      attachment.append(header, preview);
      row.append(attachment);
      return row;
    }

    const bubble = document.createElement("div");
    bubble.className = `message-bubble is-incoming${hasTail ? " has-native-tail" : ""}`;
    bubble.textContent = message.text;
    row.append(bubble);
    return row;
  };

  const selectTestimonial = (index, resetScroll = true) => {
    const item = TESTIMONIALS[index];
    if (!item) return;
    element.dataset.activeTestimonial = item.id;
    element.querySelectorAll(".messages-thread").forEach((thread, threadIndex) => {
      const selected = threadIndex === index;
      thread.classList.toggle("is-selected", selected);
      thread.setAttribute("aria-selected", String(selected));
    });
    contactAvatar.src = item.avatar;
    contactAvatar.alt = `Portrait of ${item.name}`;
    contactName.textContent = item.name;
    contactRole.textContent = [item.role, item.company].filter(Boolean).join(" · ");
    const messages = item.messages || item.testimonial
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map(text => ({ type: "text", direction: "incoming", text }));
    messageGroup.dataset.testimonialId = item.id;
    messageGroup.replaceChildren(...messages.map((message, messageIndex) =>
      createIncomingMessage(message, item.id === "scott-summers" || messageIndex === messages.length - 1)
    ));
    installNativeIncomingTails(messageGroup);
    installMessageDocumentViewers(messageGroup);
    if (resetScroll) history.scrollTop = 0;
  };

  threadList.addEventListener("click", event => {
    const thread = event.target.closest(".messages-thread");
    if (!thread) return;
    selectTestimonial(Number(thread.dataset.testimonialIndex));
  });

  element.querySelector(".messages-search").addEventListener("input", event => {
    const query = event.currentTarget.value.trim().toLocaleLowerCase();
    let visibleCount = 0;
    element.querySelectorAll(".messages-thread").forEach(thread => {
      const item = TESTIMONIALS[Number(thread.dataset.testimonialIndex)];
      const searchable = [
        item.name,
        item.role,
        item.company,
        item.testimonial,
        ...(item.messages || []).map(message => message.text || message.title || "")
      ].join(" ").toLocaleLowerCase();
      const visible = !query || searchable.includes(query);
      thread.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    noResults.hidden = visibleCount !== 0;
  });

  selectTestimonial(0, false);

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest(".traffic") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = "none";
    bringForward(element);
    windowDrag = {
      element,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    scheduleUtilityWindowDrag(
      element,
      windowDrag.left + event.clientX - windowDrag.startX,
      windowDrag.top + event.clientY - windowDrag.startY
    );
  });
  const endMessagesDrag = () => {
    if (windowDrag?.element === element) {
      flushUtilityWindowDrag(windowDrag);
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endMessagesDrag);
  bar.addEventListener("pointercancel", endMessagesDrag);
  bar.addEventListener("lostpointercapture", endMessagesDrag);

  const closeMessages = () => {
    closeUtilityWindow(element, () => {
      document.removeEventListener("keydown", handleMessagesEscape);
      forgetWindowState(id);
      element.remove();
      openAppWindows.delete(id);
      resetDock();
      updateRunningState();
      dockMessages.focus({ preventScroll: true });
    });
  };
  const handleMessagesEscape = event => {
    if (event.key !== "Escape" || element.hidden || !element.isConnected || !element.classList.contains("is-active")) return;
    event.preventDefault();
    closeMessages();
  };
  document.addEventListener("keydown", handleMessagesEscape);

  element.querySelector('[data-action="close"]').addEventListener("click", closeMessages);
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, MESSAGES_APP, id);
    dockMessages.focus({ preventScroll: true });
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
  });

  revealUtilityWindow(element, dockMessages);
}

/* ── Vision Bin: the library ───────────────────────────────────────────────
 * A Pinterest-style board of places that help people get things done. The
 * contents live in js/library-data.js; this only draws and filters them.
 */
const LIBRARY_APP = {
  id: "vision-bin",
  number: "VB",
  title: "Vision Bin",
  heading: "Vision Bin",
  subheading: "Tools and references for everyday productivity, design, development and integration — plus featured stories, hackathon work and project imagery.",
  dockSelector: "#dock-vision-bin",
  windowClass: "vision-bin-window library-window",
  colors: ["#8e8e93", "#d1d1d6"]
};

function libraryData() {
  const data = window.LIBRARY_DATA || {};
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const items = (Array.isArray(data.items) ? data.items : []).filter(item => item && item.id);
  return { categories: categories.filter(category => items.some(item => item.category === category.id)), items };
}

function libraryHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/* Cards get one of four shapes so the columns stagger like a pinboard
   instead of lining up in a neat grid. */
const LIBRARY_SHAPES = ["4 / 3", "3 / 2", "1 / 1", "16 / 11"];
function libraryShape(id, index) {
  const seed = [...String(id)].reduce((total, character) => total + character.charCodeAt(0), index);
  return LIBRARY_SHAPES[seed % LIBRARY_SHAPES.length];
}

function libraryFallbackTile(item) {
  const seed = [...String(item.id)].reduce((total, character) => total + character.charCodeAt(0), 0);
  const hue = seed % 360;
  return `<span class="library-card-fallback" style="--library-hue:${hue}" aria-hidden="true">${escape((item.name || "?").slice(0, 1).toUpperCase())}</span>`;
}

function createLibraryCard(item, index, categoryLabels, options = {}) {
  const shape = libraryShape(item.id, index);
  const label = categoryLabels.get(item.category) || "";
  /* Site previews are looked up by name, so adding a picture is just a matter
     of dropping images/library/<id>.webp next to the others. */
  const preview = item.image || (!options.noPreview && item.noPreview !== true && item.url ? `./images/library/${item.id}.webp` : "");
  const media = `
    <span class="library-card-media" style="aspect-ratio:${item.type === "image" ? "auto" : shape}">
      ${preview
        ? `<img src="${escape(preview)}" alt="" loading="${index < 8 ? "eager" : "lazy"}" decoding="async" draggable="false">`
        : libraryFallbackTile(item)}
    </span>`;

  if (item.type === "image") {
    return `
      <button class="library-card library-card--image" type="button" data-category="${escape(item.category)}"
        data-library-image="${index}" aria-label="View ${escape(item.name || "picture")}">
        ${media}
        ${item.name ? `<span class="library-card-body"><span class="library-card-caption">${escape(item.name)}</span></span>` : ""}
      </button>`;
  }

  return `
    <a class="library-card" href="${escape(item.url)}" target="_blank" rel="noopener noreferrer"
      data-category="${escape(item.category)}">
      ${media}
      <span class="library-card-body">
        <span class="library-card-title">${escape(item.name)}</span>
        ${item.description ? `<span class="library-card-text">${escape(item.description)}</span>` : ""}
        <span class="library-card-meta">
          ${label ? `<span class="library-card-tag">${escape(label)}</span>` : ""}
          <span class="library-card-host">${escape(libraryHost(item.url))}</span>
        </span>
      </span>
    </a>`;
}

function resourcesData() {
  const data = window.LIBRARY_RESOURCES || {};
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const items = Array.isArray(data.items) ? data.items : [];
  return { categories, items };
}

function buildLibraryMarkup(app) {
  const { categories, items } = libraryData();
  const categoryLabels = new Map(categories.map(category => [category.id, category.label]));
  const chips = [{ id: "all", label: "All" }, ...categories]
    .map(category => {
      const count = category.id === "all" ? items.length : items.filter(item => item.category === category.id).length;
      return `<button class="library-chip${category.id === "all" ? " is-active" : ""}" type="button"
        data-category="${escape(category.id)}" aria-pressed="${category.id === "all"}">${escape(category.label)}<span>${count}</span></button>`;
    })
    .join("");
  const resources = resourcesData();
  const resourceLabels = new Map(resources.categories.map(category => [category.id, category.label]));
  const resourceCards = resources.items
    .map((item, index) => createLibraryCard(item, index, resourceLabels, { noPreview: true }))
    .join("");

  return `
    <div class="library-app">
      <header class="library-header">
        <div class="library-intro">
          <h1>${escape(app.heading)}</h1>
          <p>${escape(app.subheading)}</p>
        </div>
        <label class="library-search">
          <img src="./assets/icons/sf/magnifyingglass.svg" alt="" aria-hidden="true">
          <input type="search" placeholder="Search tools, resources &amp; pictures" aria-label="Search tools, resources and pictures" spellcheck="false">
        </label>
      </header>
      <nav class="library-tabs" role="tablist" aria-label="Vision Bin sections">
        <button class="library-tab is-active" type="button" role="tab" aria-selected="true" data-library-tab="vision">Vision Board</button>
        <button class="library-tab" type="button" role="tab" aria-selected="false" data-library-tab="resources">Resources I Recommend</button>
      </nav>
      <nav class="library-filters" aria-label="Filter by category">${chips}</nav>
      <main class="library-scroll-area" tabindex="0">
        <div class="library-grid" data-library-pane="vision">${items.map((item, index) => createLibraryCard(item, index, categoryLabels)).join("")}</div>
        <div class="library-grid library-grid--resources" data-library-pane="resources" hidden>${resourceCards}</div>
        <p class="library-empty" hidden>Nothing here matches that search yet.</p>
      </main>
      <div class="photos-lightbox library-lightbox" hidden role="dialog" aria-modal="true" aria-label="Picture preview">
        <button type="button" class="photos-lightbox-close" aria-label="Close preview">
          <img src="./assets/icons/sf/xmark.svg" alt="" aria-hidden="true">
        </button>
        <div class="photos-lightbox-stage">
          <img class="photos-lightbox-image" src="" alt="">
        </div>
      </div>
    </div>`;
}

function wireLibrary(element) {
  const { items } = libraryData();
  const resourceItems = resourcesData().items;
  const visionGrid = element.querySelector('[data-library-pane="vision"]') || element.querySelector(".library-grid");
  const resourcesGrid = element.querySelector('[data-library-pane="resources"]');
  const filtersNav = element.querySelector(".library-filters");
  const tabs = [...element.querySelectorAll(".library-tab")];
  const empty = element.querySelector(".library-empty");
  const chips = [...element.querySelectorAll(".library-chip")];
  const search = element.querySelector(".library-search input");
  const cards = [...(visionGrid?.querySelectorAll(".library-card") || [])];
  const resourceCards = [...(resourcesGrid?.querySelectorAll(".library-card") || [])];
  const lightbox = element.querySelector(".library-lightbox");
  const lightboxImage = lightbox?.querySelector(".photos-lightbox-image");
  let activeCategory = "all";
  let activeTab = "vision";

  const applyFilter = () => {
    const term = (search?.value || "").trim().toLowerCase();
    const onResources = activeTab === "resources";
    const list = onResources ? resourceCards : cards;
    const source = onResources ? resourceItems : items;
    let visible = 0;
    list.forEach((card, index) => {
      const item = source[index] || {};
      const matchesCategory = onResources || activeCategory === "all" || card.dataset.category === activeCategory;
      const haystack = `${item.name || ""} ${item.description || ""} ${item.url || ""} ${item.category || ""}`.toLowerCase();
      const matchesTerm = !term || haystack.includes(term);
      const show = matchesCategory && matchesTerm;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
    if (visionGrid) visionGrid.dataset.count = String(visible);
  };

  const setLibraryTab = tab => {
    activeTab = tab;
    tabs.forEach(other => {
      const isActive = other.dataset.libraryTab === tab;
      other.classList.toggle("is-active", isActive);
      other.setAttribute("aria-selected", String(isActive));
    });
    if (visionGrid) visionGrid.hidden = tab !== "vision";
    if (resourcesGrid) resourcesGrid.hidden = tab !== "resources";
    if (filtersNav) filtersNav.hidden = tab !== "vision";
    applyFilter();
  };
  tabs.forEach(tab => tab.addEventListener("click", () => setLibraryTab(tab.dataset.libraryTab)));

  chips.forEach(chip => chip.addEventListener("click", () => {
    activeCategory = chip.dataset.category;
    chips.forEach(other => {
      const isActive = other === chip;
      other.classList.toggle("is-active", isActive);
      other.setAttribute("aria-pressed", String(isActive));
    });
    applyFilter();
  }));
  search?.addEventListener("input", applyFilter);

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    if (lightboxImage) lightboxImage.src = "";
  };
  element.querySelectorAll("[data-library-image]").forEach(card => {
    card.addEventListener("click", () => {
      const item = items[Number(card.dataset.libraryImage)];
      if (!item?.image || !lightbox || !lightboxImage) return;
      lightboxImage.src = item.image;
      lightboxImage.alt = item.name || "Picture";
      lightbox.hidden = false;
    });
  });
  lightbox?.addEventListener("click", event => {
    if (event.target.closest(".photos-lightbox-close") || event.target === lightbox) closeLightbox();
  });

  /* A screenshot that never arrived should not leave a grey hole: the card
     falls back to a lettered colour tile instead. */
  cards.forEach((card, index) => {
    const image = card.querySelector(".library-card-media img");
    if (!image) return;
    const swap = () => {
      if (!image.isConnected) return;
      image.insertAdjacentHTML("afterend", libraryFallbackTile(items[index] || {}));
      image.remove();
    };
    image.addEventListener("error", swap, { once: true });
    if (image.complete && image.naturalWidth === 0) swap();
  });

  applyFilter();
  return { closeLightbox };
}

function openLibraryWindow() {
  const app = LIBRARY_APP;
  const id = app.id;
  const dockLauncher = document.querySelector(app.dockSelector);
  const existing = openAppWindows.get(id);
  if (existing?.isConnected) {
    syncVisionBinProjectFilterLock();
    if (isWindowMinimized(id)) {
      restoreMinimizedWindow(id);
      return;
    }
    bringForward(existing);
    animateUtilityWindowForward(existing);
    existing.focus({ preventScroll: true });
    updateRunningState();
    return;
  }

  const element = document.createElement("article");
  element.className = `project-window native-app-window ${app.windowClass} is-positioning`;
  element.dataset.appId = id;
  element.dataset.windowId = id;
  element.tabIndex = -1;
  element.style.visibility = "hidden";
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", app.title);
  element.innerHTML = `
    <header class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls(app.title)}
        <p class="window-title">${escape(app.title)}</p>
      </div>
    </header>
    <nav class="explorer-bar" aria-hidden="true">
      <img class="explorer-bar__icon" src="./public/icons/project-folder-win.svg" alt="">
      <span class="explorer-bar__crumb">This PC</span>
      <span class="explorer-bar__sep">&rsaquo;</span>
      <span class="explorer-bar__crumb is-current">${escape(app.title)}</span>
    </nav>
    ${buildLibraryMarkup(app)}`;

  wireTrafficControls(element);
  bringForward(element);
  windowsRoot.append(element);
  syncVisionBinProjectFilterLock();
  enableWindowResizing(element, { minWidth: 320, minHeight: 360, positionKey: id });
  applyDefaultProjectWindowSize(element);
  placeUtilityAppAtCascade(element, app);
  captureDefaultWindowState(element, id);
  openAppWindows.set(id, element);
  registerOpenWindow(id, element, app);

  const { closeLightbox } = wireLibrary(element);
  const lightbox = element.querySelector(".library-lightbox");

  const handleLibraryKeydown = event => {
    if (element.hidden || !element.isConnected || !lightbox || lightbox.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    }
  };
  document.addEventListener("keydown", handleLibraryKeydown);

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest(".traffic") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    Object.assign(element.style, { left: `${rect.left}px`, top: `${rect.top}px`, transform: "none" });
    bringForward(element);
    windowDrag = { element, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    scheduleUtilityWindowDrag(
      element,
      windowDrag.left + event.clientX - windowDrag.startX,
      windowDrag.top + event.clientY - windowDrag.startY
    );
  });
  const endLibraryDrag = () => {
    if (windowDrag?.element === element) {
      flushUtilityWindowDrag(windowDrag);
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endLibraryDrag);
  bar.addEventListener("pointercancel", endLibraryDrag);
  bar.addEventListener("lostpointercapture", endLibraryDrag);

  element.querySelector('[data-action="close"]').addEventListener("click", () => {
    closeUtilityWindow(element, () => {
      document.removeEventListener("keydown", handleLibraryKeydown);
      forgetWindowState(id);
      element.remove();
      openAppWindows.delete(id);
      syncVisionBinProjectFilterLock();
      resetDock();
      updateRunningState();
      dockLauncher?.focus({ preventScroll: true });
    });
  });
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, app, id);
    dockLauncher?.focus({ preventScroll: true });
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => toggleProjectMaximize(element));

  updateRunningState();
  revealUtilityWindow(element, dockLauncher);
}

function openVisionBinWindow() {
  openLibraryWindow();
}

/* ── Document viewer ───────────────────────────────────────────────────────
 * One full-screen viewer used by Certificates (single image) and by document
 * attachments in Messages (multi-page scroll). Pages stack vertically, so
 * multi-page documents simply scroll; the toolbar can fit the page to the
 * window or show it at full size, and always offers the original file.
 */
let activeDocumentViewer = null;
let documentViewerReturnFocus = null;

function closeDocumentViewer() {
  if (!activeDocumentViewer) return;
  document.removeEventListener("keydown", handleDocumentViewerKeydown, true);
  activeDocumentViewer.remove();
  activeDocumentViewer = null;
  document.body.classList.remove("has-document-viewer");
  documentViewerReturnFocus?.focus?.({ preventScroll: true });
  documentViewerReturnFocus = null;
}

function handleDocumentViewerKeydown(event) {
  if (!activeDocumentViewer) return;
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeDocumentViewer();
    return;
  }
  const stage = activeDocumentViewer.querySelector(".document-viewer-stage");
  if (!stage) return;
  if (event.key === "ArrowDown" || event.key === "PageDown") {
    event.preventDefault();
    stage.scrollBy({ top: stage.clientHeight * .9, behavior: "smooth" });
  } else if (event.key === "ArrowUp" || event.key === "PageUp") {
    event.preventDefault();
    stage.scrollBy({ top: -stage.clientHeight * .9, behavior: "smooth" });
  }
}

function openDocumentViewer({ title, subtitle, pages, fileHref, fileLabel = "Open original ↗", trigger = null }) {
  const items = (pages || []).filter(page => page && page.src);
  if (!items.length) {
    if (fileHref) window.open(fileHref, "_blank", "noopener");
    return;
  }
  closeDocumentViewer();
  documentViewerReturnFocus = trigger || document.activeElement;

  const element = document.createElement("div");
  element.className = "document-viewer";
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-modal", "true");
  element.setAttribute("aria-label", title);
  element.innerHTML = `
    <div class="document-viewer-bar">
      <div class="document-viewer-copy">
        <strong>${escape(title)}</strong>
        ${subtitle ? `<span>${escape(subtitle)}</span>` : ""}
      </div>
      <div class="document-viewer-actions">
        ${items.length > 1 ? `<span class="document-viewer-count">${items.length} pages</span>` : ""}
        <button type="button" class="document-viewer-zoom" aria-pressed="false">Actual size</button>
        ${fileHref ? `<a class="document-viewer-download" href="${escape(fileHref)}" target="_blank" rel="noopener noreferrer">${escape(fileLabel)}</a>` : ""}
        <button type="button" class="document-viewer-close" aria-label="Close viewer">
          <img src="./assets/icons/sf/xmark.svg" alt="" aria-hidden="true">
        </button>
      </div>
    </div>
    <div class="document-viewer-stage" tabindex="0">
      <div class="document-viewer-pages">
        ${items.map((page, index) => `
          <figure class="document-viewer-page">
            <img src="${escape(page.src)}" alt="${escape(page.alt || `${title} — page ${index + 1}`)}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async" draggable="false"${page.fallback ? ` data-fallback="${escape(page.fallback)}"` : ""}>
            ${items.length > 1 ? `<figcaption>Page ${index + 1} of ${items.length}</figcaption>` : ""}
          </figure>`).join("")}
      </div>
    </div>`;

  element.querySelectorAll("img[data-fallback]").forEach(image => {
    image.addEventListener("error", () => {
      if (image.dataset.usedFallback === "true") return;
      image.dataset.usedFallback = "true";
      image.src = image.dataset.fallback;
    }, { once: true });
  });

  const zoomButton = element.querySelector(".document-viewer-zoom");
  zoomButton.addEventListener("click", () => {
    const actualSize = element.classList.toggle("is-actual-size");
    zoomButton.setAttribute("aria-pressed", String(actualSize));
    zoomButton.textContent = actualSize ? "Fit to window" : "Actual size";
  });
  element.querySelector(".document-viewer-close").addEventListener("click", closeDocumentViewer);
  element.addEventListener("pointerdown", event => {
    if (event.target === element || event.target.classList.contains("document-viewer-stage")) closeDocumentViewer();
  });

  document.body.append(element);
  document.body.classList.add("has-document-viewer");
  activeDocumentViewer = element;
  document.addEventListener("keydown", handleDocumentViewerKeydown, true);
  requestAnimationFrame(() => element.querySelector(".document-viewer-stage").focus({ preventScroll: true }));
}

function openCertificateViewer(certificate, trigger = null, useRemote = false) {
  const source = certificateSources(certificate);
  openDocumentViewer({
    title: certificate.title,
    subtitle: `${certificate.issuer} · ${certificate.year}`,
    pages: [{
      src: useRemote && source.remote ? source.remote : source.full,
      alt: `${certificate.title} — ${certificate.issuer}`,
      fallback: source.remote
    }],
    fileHref: useRemote && source.remote ? source.remote : source.full,
    fileLabel: "Open full file ↗",
    trigger
  });
}

function openMessageDocumentViewer(message, trigger = null) {
  openDocumentViewer({
    title: message.title,
    subtitle: message.fileType,
    pages: message.pages || (message.preview ? [{ src: message.preview, alt: message.title }] : []),
    fileHref: message.file,
    fileLabel: "Open PDF ↗",
    trigger
  });
}

function installMessageDocumentViewers(root) {
  root.querySelectorAll(".message-document-attachment").forEach(attachment => {
    if (attachment.dataset.viewerBound === "true") return;
    attachment.dataset.viewerBound = "true";
    attachment.addEventListener("click", event => {
      const documentId = attachment.dataset.documentId;
      const message = MESSAGE_DOCUMENTS.get(documentId);
      if (!message || event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
      event.preventDefault();
      openMessageDocumentViewer(message, attachment);
    });
  });
}

const MESSAGE_DOCUMENTS = new Map();
(function indexMessageDocuments() {
  if (typeof TESTIMONIALS === "undefined") return;
  TESTIMONIALS.forEach(item => {
    (item.messages || []).forEach((message, index) => {
      if (message.type !== "document") return;
      message.documentId = `${item.id}-doc-${index}`;
      MESSAGE_DOCUMENTS.set(message.documentId, message);
    });
  });
})();

/* ── Services and Certificates ─────────────────────────────────────────────
 * Both apps are plain scrolling panels generated from js/services-data.js and
 * js/certificates-data.js, and reuse the shared window chrome (drag, resize,
 * minimise, maximise) used by Messages and the galleries.
 */

function buildServicesMarkup() {
  const groups = SERVICE_GROUPS.map(group => {
    const items = group.items.map(item => `
      <li class="service-item">
        <h4>${escape(item.title)}</h4>
        <p>${escape(item.copy)}</p>
        <span class="service-tags">${item.tags.map(tag => `<em>${escape(tag)}</em>`).join("")}</span>
      </li>`).join("");
    return `
      <section class="service-group" aria-labelledby="service-${escape(group.letter)}">
        <header class="service-group-head">
          <span class="service-letter" aria-hidden="true">${escape(group.letter)}</span>
          <div>
            <p class="service-kicker">${escape(group.kicker)}</p>
            <h3 id="service-${escape(group.letter)}">${escape(group.title)}</h3>
            <p class="service-blurb">${escape(group.blurb)}</p>
          </div>
        </header>
        <ul class="service-items">${items}</ul>
        <figure class="service-quote">
          <blockquote>${escape(group.quote)}</blockquote>
          <figcaption>${escape(group.quoteSource)}</figcaption>
        </figure>
      </section>`;
  }).join("");

  const process = SERVICES_PROCESS.map(step => `
    <li class="service-step">
      <span aria-hidden="true">${escape(step.step)}</span>
      <h4>${escape(step.title)}</h4>
      <p>${escape(step.copy)}</p>
    </li>`).join("");

  const tools = SERVICES_TOOLBOX.tools.map(tool => `
    <li><strong>${escape(tool.name)}</strong><span>${escape(tool.role)}</span></li>`).join("");

  const problems = SERVICES_INTRO.problems.map((problem, index) => `
    <li><span aria-hidden="true">0${index + 1}</span><p>${escape(problem)}</p></li>`).join("");

  return `
    <div class="panel-body services-body">
      <section class="panel-intro">
        <p class="panel-kicker">${escape(SERVICES_INTRO.kicker)}</p>
        <h2>${escape(SERVICES_INTRO.title)}</h2>
        <p class="panel-lede">${escape(SERVICES_INTRO.lede)}</p>
        <ul class="service-problems">${problems}</ul>
      </section>
      ${groups}
      <section class="panel-section">
        <h3 class="panel-section-title">The shape of working together</h3>
        <ol class="service-steps">${process}</ol>
      </section>
      <section class="panel-section">
        <h3 class="panel-section-title">The toolbox</h3>
        <p class="panel-section-note">${escape(SERVICES_TOOLBOX.note)}</p>
        <ul class="service-tools">${tools}</ul>
      </section>
      <section class="panel-cta">
        <h3>${escape(SERVICES_CTA.title)}</h3>
        <p>${escape(SERVICES_CTA.copy)}</p>
        <div class="panel-cta-actions">
          <a class="panel-button panel-button--primary" href="${escape(SERVICES_CTA.callHref)}" target="_blank" rel="noopener noreferrer">${escape(SERVICES_CTA.callLabel)}</a>
          <a class="panel-button" href="${escape(SERVICES_CTA.mailHref)}">${escape(SERVICES_CTA.mailLabel)}</a>
        </div>
      </section>
    </div>`;
}

function certificateSources(certificate) {
  const remote = certificate.remote ? `${CERTIFICATES_REMOTE_BASE}${certificate.remote}` : "";
  return {
    thumb: `${CERTIFICATES_LOCAL_BASE}${certificate.slug}-thumb.jpg`,
    full: `${CERTIFICATES_LOCAL_BASE}${certificate.slug}.jpg`,
    remote
  };
}

function buildCertificatesMarkup() {
  const cards = CERTIFICATES.map(certificate => {
    const source = certificateSources(certificate);
    return `
      <li>
        <a class="certificate-card" href="${escape(source.full)}" target="_blank" rel="noopener noreferrer" data-slug="${escape(certificate.slug)}" data-remote="${escape(source.remote)}">
          <span class="certificate-thumb">
            <img src="${escape(source.thumb)}" alt="${escape(certificate.title)} — ${escape(certificate.issuer)}" loading="lazy" decoding="async" draggable="false">
          </span>
          <span class="certificate-copy">
            <strong>${escape(certificate.title)}</strong>
            <span class="certificate-issuer">${escape(certificate.issuer)}</span>
          </span>
          <span class="certificate-meta">
            <span class="certificate-year">${escape(certificate.year)}</span>
            <span class="certificate-open">View ↗</span>
          </span>
        </a>
      </li>`;
  }).join("");

  return `
    <div class="panel-body certificates-body">
      <section class="panel-intro">
        <p class="panel-kicker">Certifications · ${CERTIFICATES.length} total</p>
        <h2>${escape(CERTIFICATES_INTRO.heading)}</h2>
        <p class="panel-lede">${escape(CERTIFICATES_INTRO.subheading)}</p>
      </section>
      <ul class="certificate-list">${cards}</ul>
      <p class="panel-footnote">${escape(CERTIFICATES_INTRO.footnote)}</p>
    </div>`;
}

function installCertificateCards(root) {
  root.querySelectorAll(".certificate-card").forEach(card => {
    const certificate = CERTIFICATES.find(entry => entry.slug === card.dataset.slug);
    const image = card.querySelector("img");
    const remote = card.dataset.remote;
    if (image && remote) {
      image.addEventListener("error", () => {
        if (card.dataset.usingRemote === "true") return;
        card.dataset.usingRemote = "true";
        image.src = remote;
        card.href = remote;
      }, { once: true });
    }
    if (!certificate) return;
    card.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
      event.preventDefault();
      openCertificateViewer(certificate, card, card.dataset.usingRemote === "true");
    });
  });
}

function openPanelWindow({ app, dockSelector, windowClass, ariaLabel, subtitle, body, minWidth = 520, minHeight = 420, onReady }) {
  const id = app.id;
  const dockLauncher = document.querySelector(dockSelector);
  const existing = openAppWindows.get(id);
  if (existing?.isConnected) {
    if (isWindowMinimized(id)) {
      restoreMinimizedWindow(id);
      return;
    }
    bringForward(existing);
    animateUtilityWindowForward(existing);
    existing.focus({ preventScroll: true });
    updateRunningState();
    return;
  }

  const element = document.createElement("article");
  element.className = `project-window native-app-window panel-window ${windowClass} is-positioning`;
  element.dataset.appId = id;
  element.dataset.windowId = id;
  element.tabIndex = -1;
  element.style.visibility = "hidden";
  element.setAttribute("role", "dialog");
  element.setAttribute("aria-label", ariaLabel || app.title);
  element.innerHTML = `
    <header class="window-bar">
      <div class="window-bar-main">
        ${createTrafficControls(app.title)}
        <p class="window-title">${escape(app.title)}</p>
        ${subtitle ? `<span class="window-bar-subtitle">${escape(subtitle)}</span>` : ""}
      </div>
    </header>
    <nav class="explorer-bar" aria-hidden="true">
      <img class="explorer-bar__icon" src="./public/icons/project-folder-win.svg" alt="">
      <span class="explorer-bar__crumb">This PC</span>
      <span class="explorer-bar__sep">&rsaquo;</span>
      <span class="explorer-bar__crumb is-current">${escape(app.title)}</span>
    </nav>
    <main class="panel-scroll-area" tabindex="0">${body}</main>`;

  wireTrafficControls(element);
  bringForward(element);
  windowsRoot.append(element);
  enableWindowResizing(element, { minWidth, minHeight, positionKey: id });
  applyDefaultProjectWindowSize(element);
  placeUtilityAppAtCascade(element, app);
  captureDefaultWindowState(element, id);
  openAppWindows.set(id, element);
  registerOpenWindow(id, element, app);
  updateRunningState();

  onReady?.(element);

  element.addEventListener("pointerdown", () => bringForward(element));
  const bar = element.querySelector(".window-bar");
  bar.addEventListener("pointerdown", event => {
    if (event.target.closest(".traffic") || element.classList.contains("maximized")) return;
    const rect = element.getBoundingClientRect();
    Object.assign(element.style, {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      transform: "none"
    });
    bringForward(element);
    windowDrag = {
      element,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top
    };
    element.classList.add("dragging");
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!windowDrag || windowDrag.element !== element) return;
    scheduleUtilityWindowDrag(
      element,
      windowDrag.left + event.clientX - windowDrag.startX,
      windowDrag.top + event.clientY - windowDrag.startY
    );
  });
  const endPanelDrag = () => {
    if (windowDrag?.element === element) {
      flushUtilityWindowDrag(windowDrag);
      clampWindowToDesktop(element);
      const rect = element.getBoundingClientRect();
      WINDOW_SESSION_POSITIONS.set(id, { left: rect.left, top: rect.top });
    }
    windowDrag = null;
    element.classList.remove("dragging");
  };
  bar.addEventListener("pointerup", endPanelDrag);
  bar.addEventListener("pointercancel", endPanelDrag);
  bar.addEventListener("lostpointercapture", endPanelDrag);

  const closePanel = () => {
    closeUtilityWindow(element, () => {
      document.removeEventListener("keydown", handlePanelEscape);
      forgetWindowState(id);
      element.remove();
      openAppWindows.delete(id);
      resetDock();
      updateRunningState();
      dockLauncher?.focus({ preventScroll: true });
    });
  };
  const handlePanelEscape = event => {
    if (event.key !== "Escape" || element.hidden || !element.isConnected || !element.classList.contains("is-active")) return;
    event.preventDefault();
    closePanel();
  };
  document.addEventListener("keydown", handlePanelEscape);

  element.querySelector('[data-action="close"]').addEventListener("click", closePanel);
  element.querySelector('[data-action="minimize"]').addEventListener("click", () => {
    minimizeWindow(element, app, id);
    dockLauncher?.focus({ preventScroll: true });
  });
  element.querySelector('[data-action="maximize"]').addEventListener("click", () => {
    toggleProjectMaximize(element);
  });

  revealUtilityWindow(element, dockLauncher);
}

function openServicesWindow() {
  openPanelWindow({
    app: SERVICES_APP,
    dockSelector: "#dock-services",
    windowClass: "services-window",
    ariaLabel: "Services offered by Lulamile Mkhungela",
    subtitle: "Design + front-end, one person",
    body: buildServicesMarkup(),
    minWidth: 540,
    minHeight: 440
  });
}

function openCertificatesWindow() {
  openPanelWindow({
    app: CERTIFICATES_APP,
    dockSelector: "#dock-certificates",
    windowClass: "certificates-window",
    ariaLabel: "Certificates earned by Lulamile Mkhungela",
    subtitle: `${CERTIFICATES.length} certificates`,
    body: buildCertificatesMarkup(),
    minWidth: 480,
    minHeight: 420,
    onReady: element => installCertificateCards(element)
  });
}

function openMobileServices() {
  if (!openMobileShell("Services")) return;
  mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-detail panel-mobile">${buildServicesMarkup()}</div>`;
}

function openMobileCertificates() {
  if (!openMobileShell("Certificates")) return;
  mobileAppContent.innerHTML = `<div class="mobile-app-scroll mobile-detail panel-mobile">${buildCertificatesMarkup()}</div>`;
  installCertificateCards(mobileAppContent);
}

function cloneWindowShell(element) {
  const clone = element.cloneNode(true);
  const sourceHostedDocuments = [...element.querySelectorAll(".project-document-host")];
  const clonedHostedDocuments = [...clone.querySelectorAll(".project-document-host")];
  clonedHostedDocuments.forEach((clonedHost, index) => {
    const sourceShadow = sourceHostedDocuments[index]?.shadowRoot;
    if (!sourceShadow) return;
    const clonedShadow = clonedHost.attachShadow({ mode: "open" });
    sourceShadow.childNodes.forEach(node => clonedShadow.append(node.cloneNode(true)));
  });
  const sourceFrames = [...element.querySelectorAll("iframe")];
  const clonedFrames = [...clone.querySelectorAll("iframe")];
  clonedFrames.forEach((clonedFrame, index) => {
    const sourceFrame = sourceFrames[index];
    try {
      const sourceDocument = sourceFrame?.contentDocument;
      if (!sourceDocument?.documentElement) return;
      const documentClone = sourceDocument.documentElement.cloneNode(true);
      documentClone.querySelectorAll("script, meta[http-equiv='refresh']").forEach(node => node.remove());
      const head = documentClone.querySelector("head");
      if (head) {
        const base = sourceDocument.createElement("base");
        base.href = sourceFrame.src;
        head.prepend(base);
      }
      clonedFrame.removeAttribute("src");
      clonedFrame.srcdoc = `<!doctype html>${documentClone.outerHTML}`;
    } catch {}
  });
  clone.hidden = false;
  clone.removeAttribute("aria-hidden");
  clone.removeAttribute("role");
  clone.removeAttribute("tabindex");
  clone.classList.remove("maximized", "is-active", "dragging", "is-window-transitioning", "is-closing");
  if (clone.classList.contains("project-window--embedded")) clone.classList.add("is-open");
  clone.classList.add("minimized-window-snapshot-clone");
  ["left", "top", "right", "bottom", "width", "height", "max-width", "max-height", "z-index", "transform", "visibility", "opacity"].forEach(property => {
    clone.style.removeProperty(property);
  });
  clone.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
  clone.querySelectorAll("button, a, input, textarea, select, iframe, [tabindex]").forEach(node => {
    node.setAttribute("tabindex", "-1");
    node.setAttribute("aria-hidden", "true");
  });
  return clone;
}

function refreshWindowTransitionSnapshot(element, id) {
  if (!element?.isConnected || element.hidden) return null;
  const state = windowStates.get(id);
  if (!state || state.element !== element || state.status !== WINDOW_STATUS.NORMAL) return null;
  state.snapshotRevision = (state.snapshotRevision || 0) + 1;
  const transitionSnapshot = cloneWindowShell(element);
  const previewSnapshot = cloneWindowShell(element);
  syncWindowSnapshotState(element, transitionSnapshot);
  syncWindowSnapshotState(element, previewSnapshot);
  state.cachedTransitionSnapshot = transitionSnapshot;
  state.cachedPreviewSnapshot = previewSnapshot;
  const bounds = element.getBoundingClientRect();
  state.cachedTransitionBounds = { left: bounds.left, top: bounds.top, width: bounds.width, height: bounds.height };
  return transitionSnapshot;
}

function scheduleWindowTransitionSnapshot(element, id) {
  const state = windowStates.get(id);
  if (!state || state.status !== WINDOW_STATUS.NORMAL) return;
  if (state.snapshotTimer) window.clearTimeout(state.snapshotTimer);
  state.snapshotTimer = window.setTimeout(() => {
    state.snapshotTimer = 0;
    refreshWindowTransitionSnapshot(element, id);
  }, 120);
}

function takePreparedWindowSnapshot(element, id, kind = "transition") {
  const state = windowStates.get(id);
  const property = kind === "preview" ? "cachedPreviewSnapshot" : "cachedTransitionSnapshot";
  const snapshot = state?.[property];
  if (!snapshot) return null;
  state[property] = null;
  state.snapshotRevision = (state.snapshotRevision || 0) + 1;
  syncWindowSnapshotState(element, snapshot);
  return snapshot;
}

function syncWindowSnapshotState(source, snapshot) {
  if (!source || !snapshot) return;

  const sourceScrollAreas = [...source.querySelectorAll(".project-content-scroll")];
  const snapshotScrollAreas = [...snapshot.querySelectorAll(".project-content-scroll")];
  snapshotScrollAreas.forEach((scrollArea, index) => {
    const sourceScrollArea = sourceScrollAreas[index];
    if (!sourceScrollArea) return;
    scrollArea.scrollLeft = sourceScrollArea.scrollLeft;
    scrollArea.scrollTop = sourceScrollArea.scrollTop;
  });

  const sourceHosts = [...source.querySelectorAll(".project-document-host")];
  const snapshotHosts = [...snapshot.querySelectorAll(".project-document-host")];
  snapshotHosts.forEach((snapshotHost, hostIndex) => {
    const sourceRoot = sourceHosts[hostIndex]?.shadowRoot;
    const snapshotRoot = snapshotHost.shadowRoot;
    if (!sourceRoot || !snapshotRoot) return;

    const sourceVideos = [...sourceRoot.querySelectorAll("video")];
    const snapshotVideos = [...snapshotRoot.querySelectorAll("video")];
    snapshotVideos.forEach((video, videoIndex) => {
      const sourceVideo = sourceVideos[videoIndex];
      if (!sourceVideo) return;
      try {
        video.currentTime = sourceVideo.currentTime;
        video.muted = true;
        video.pause();
      } catch {}
    });
  });
}

function captureDefaultWindowState(element, id) {
  if (!element?.isConnected) return null;
  const rect = element.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const defaultSnapshot = cloneWindowShell(element);
  const isHostedProject = element.classList.contains("project-window--embedded");
  const defaultState = {
    defaultBounds: { width: rect.width, height: rect.height },
    defaultSnapshot,
    // The Dock preview keeps its own representation. Hosted projects animate
    // as the already-painted live window so the chrome and Shadow DOM content
    // cannot enter the transition on separate paint timelines.
    previewSnapshot: isHostedProject ? defaultSnapshot : null
  };
  windowDefaultStates.set(id, defaultState);
  return defaultState;
}

function getDefaultWindowState(element, id) {
  return windowDefaultStates.get(id) || captureDefaultWindowState(element, id);
}

function getMinimizedWindowTitle(element, project) {
  return project?.title || element.querySelector(".window-bar p, .window-title, .notes-window-title")?.textContent?.trim() || "Window";
}

function syncMinimizedDockVisibility() {
  const activeStates = [...windowStates.values()].filter(state => (
    MINIMIZED_DOCK_STATUSES.has(state.status) && state.slot?.isConnected
  ));
  const activeSlots = new Set(activeStates.map(state => state.slot));
  dockMinimizedWindows.querySelectorAll(":scope > .dock-slot").forEach(slot => {
    if (!activeSlots.has(slot)) slot.remove();
  });
  const hasMinimizedWindows = activeStates.length > 0;
  dockMinimizedDivider.hidden = !hasMinimizedWindows;
  dockMinimizedWindows.hidden = !hasMinimizedWindows;
  dock.classList.toggle("has-minimized-windows", hasMinimizedWindows);
}

function animateDockPreviewLayout(mutate) {
  mutate();
  syncMinimizedDockVisibility();
  resetDock(false);
  scheduleDockFitUpdate();
}

function getMinimizedPreviewMetrics(defaultBounds, iconSizeOverride = null) {
  const iconSize = Number.isFinite(iconSizeOverride)
    ? iconSizeOverride
    : parseFloat(getComputedStyle(dock).getPropertyValue("--dock-icon-size")) || 40;
  const defaultWidth = Number(defaultBounds?.width) || 1;
  const defaultHeight = Number(defaultBounds?.height) || 1;
  const previewHeight = iconSize * .66;
  const aspectRatio = defaultWidth / defaultHeight;
  return {
    previewHeight,
    previewWidth: previewHeight * aspectRatio,
    scale: previewHeight / defaultHeight,
    defaultWidth,
    defaultHeight,
    aspectRatio
  };
}

function applyMinimizedPreviewMetrics(preview, slot, defaultBounds, iconSizeOverride = null) {
  if (!preview || !slot || !defaultBounds) return;
  const metrics = getMinimizedPreviewMetrics(defaultBounds, iconSizeOverride);
  preview.dataset.defaultWidth = String(metrics.defaultWidth);
  preview.dataset.defaultHeight = String(metrics.defaultHeight);
  preview.style.setProperty("--default-window-width", `${metrics.defaultWidth}px`);
  preview.style.setProperty("--default-window-height", `${metrics.defaultHeight}px`);
  preview.style.setProperty("--default-window-aspect-ratio", String(metrics.aspectRatio));
  preview.style.setProperty("--minimized-preview-width", `${metrics.previewWidth}px`);
  preview.style.setProperty("--minimized-preview-height", `${metrics.previewHeight}px`);
  preview.style.setProperty("--minimized-window-scale", String(metrics.scale));
  slot.style.setProperty("--default-window-aspect-ratio", String(metrics.aspectRatio));
  slot.style.setProperty("--minimized-preview-width", `${metrics.previewWidth}px`);
  slot.style.setProperty("--minimized-preview-height", `${metrics.previewHeight}px`);
  slot.style.setProperty("--minimized-window-scale", String(metrics.scale));
}

function repaintMinimizedDomPreview(state) {
  const stage = state?.preview?.querySelector(".minimized-window-stage");
  if (!stage) return;
  stage.style.transform = "none";
  stage.style.filter = "none";
  stage.style.opacity = "1";
  stage.getBoundingClientRect();
  stage.style.removeProperty("transform");
}

function updateMinimizedWindowPreviews({ rerender = false, iconSize = null } = {}) {
  windowStates.forEach(state => {
    if (!MINIMIZED_DOCK_STATUSES.has(state.status)) return;
    applyMinimizedPreviewMetrics(
      state.preview,
      state.slot,
      state.previewBounds || state.defaultState?.defaultBounds,
      iconSize
    );
    if (rerender) repaintMinimizedDomPreview(state);
  });
}

let minimizedPreviewResizeFrame = 0;
let minimizedPreviewNeedsRerender = false;
function scheduleMinimizedPreviewRefresh({ rerender = false } = {}) {
  minimizedPreviewNeedsRerender ||= rerender;
  if (minimizedPreviewResizeFrame) return;
  minimizedPreviewResizeFrame = requestAnimationFrame(() => {
    minimizedPreviewResizeFrame = 0;
    const shouldRerender = minimizedPreviewNeedsRerender;
    minimizedPreviewNeedsRerender = false;
    updateMinimizedWindowPreviews({ rerender: shouldRerender });
  });
}

function createMinimizedPreview(element, project, id, defaultState, options = {}) {
  const title = getMinimizedWindowTitle(element, project);
  const previewBounds = options.bounds || defaultState.defaultBounds;
  const metrics = getMinimizedPreviewMetrics(previewBounds);
  const preview = document.createElement("button");
  preview.type = "button";
  preview.className = "dock-item minimized-window-preview";
  preview.dataset.thumbnail = id;
  preview.dataset.windowId = id;
  preview.dataset.label = title;
  preview.setAttribute("aria-label", `Restore ${title} window`);
  preview.dataset.defaultWidth = String(metrics.defaultWidth);
  preview.dataset.defaultHeight = String(metrics.defaultHeight);

  const viewport = document.createElement("span");
  viewport.className = "minimized-window-snapshot";
  viewport.setAttribute("aria-hidden", "true");
  const stage = document.createElement("span");
  stage.className = "minimized-window-stage";
  const snapshot = options.snapshot || defaultState.defaultSnapshot.cloneNode(true);
  stage.append(snapshot);
  viewport.append(stage);
  preview.append(viewport);

  const slot = document.createElement("div");
  slot.className = "dock-slot dock-minimized-slot";
  slot.dataset.dockId = `window-${id}`;
  slot.dataset.dockTemporary = "true";
  slot.setAttribute("draggable", "false");
  slot.setAttribute("aria-grabbed", "false");
  slot.append(preview);
  applyMinimizedPreviewMetrics(preview, slot, previewBounds);
  preview.addEventListener("click", () => restoreMinimizedWindow(id));
  return { slot, preview, snapshot, previewBounds };
}

function createProjectMinimizedPreview(element, project, id, defaultState, options = {}) {
  return createMinimizedPreview(element, project, id, defaultState, options);
}

function getWindowTransitionLayer() {
  let layer = document.querySelector(".window-transition-layer");
  if (layer) return layer;
  layer = document.createElement("div");
  layer.className = "window-transition-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.append(layer);
  return layer;
}

function removeEmptyWindowTransitionLayer(shell) {
  const layer = shell?.parentElement;
  shell?.remove();
  if (layer?.classList.contains("window-transition-layer") && !layer.childElementCount) {
    layer.remove();
  }
}

function createWindowTransitionShell(element, bounds, preparedSurface = null, preparedSnapshot = null) {
  const shell = document.createElement("div");
  shell.className = "minimized-window-transition";
  if (element.classList.contains("project-window--embedded")) {
    shell.classList.add("is-project-transition");
  }
  shell.style.left = `${bounds.left}px`;
  shell.style.top = `${bounds.top}px`;
  shell.style.width = `${bounds.width}px`;
  shell.style.height = `${bounds.height}px`;
  const snapshot = preparedSnapshot || cloneWindowShell(element);
  shell.append(snapshot);
  getWindowTransitionLayer().append(shell);
  syncWindowSnapshotState(element, snapshot);
  return shell;
}

function setProjectDockHoverSuppressed(active) {
  document.body.classList.toggle("window-dock-transition-active", active);
  if (!active) return;
  dockPointerInside = false;
  dockInteractionMode = "window-transition";
  clearDockLabel();
  resetDock(false);
}

function freezeProjectDockForRestoreHandoff() {
  cancelAnimationFrame(dockFrame);
  dockFrame = 0;
  dockPointerInside = false;
  dockInteractionMode = "window-transition";
  clearDockLabel();
}

function finishProjectDockHoverSuppression() {
  document.body.classList.remove("window-dock-transition-active");
  if (dockInteractionMode === "window-transition") dockInteractionMode = "idle";
  dockPointerInside = false;
  dockLayout = null;
}

function getProjectViewTransitionName(id) {
  return `project-window-${String(id).replace(/[^a-z0-9_-]/gi, "-")}`;
}

async function runProjectViewTransition(state, restoring = false, hooks = {}) {
  if (typeof document.startViewTransition !== "function") return false;
  const { element, preview } = state;
  const transitionName = getProjectViewTransitionName(state.id);
  element.style.viewTransitionName = restoring ? "none" : transitionName;
  preview.style.viewTransitionName = restoring ? transitionName : "none";
  document.documentElement.classList.toggle("project-window-view-transition-restoring", restoring);
  document.documentElement.classList.toggle("project-window-view-transition-minimizing", !restoring);

  let transition;
  try {
    transition = document.startViewTransition(() => {
      if (restoring) {
        preview.classList.add("is-restoring");
        element.hidden = false;
        element.removeAttribute("aria-hidden");
        element.style.visibility = state.inlineVisibility || "visible";
        preview.style.viewTransitionName = "none";
        element.style.viewTransitionName = transitionName;
      } else {
        preview.classList.add("is-handoff-visible");
        preview.classList.remove("is-preparing", "is-arriving");
        element.hidden = true;
        element.setAttribute("aria-hidden", "true");
        element.style.viewTransitionName = "none";
        preview.style.viewTransitionName = transitionName;
      }
      hooks.onStart?.();
    });
    state.transitionAnimation = transition;
    await transition.finished;
    hooks.onComplete?.();
    return true;
  } catch {
    try { transition?.skipTransition?.(); } catch {}
    return false;
  } finally {
    state.transitionAnimation = null;
    element.style.removeProperty("view-transition-name");
    preview.style.removeProperty("view-transition-name");
    document.documentElement.classList.remove(
      "project-window-view-transition-minimizing",
      "project-window-view-transition-restoring"
    );
  }
}

async function runWindowDockAnimation(state, dockBounds, restoring = false, hooks = {}) {
  const windowBounds = state.previousBounds;
  const isHostedProject = state.element.classList.contains("project-window--embedded");
  const shell = createWindowTransitionShell(
    state.element,
    windowBounds,
    isHostedProject ? state.transitionSurface : null,
    isHostedProject ? state.transitionSnapshot : null
  );
  if (restoring && isHostedProject) {
    shell.classList.add("is-project-restoring");
    shell.querySelector(".minimized-window-snapshot-clone.project-window--embedded")?.classList.add("is-active");
  }
  removeEmptyWindowTransitionLayer(state.transitionShell);
  state.transitionShell = shell;
  const releaseShell = () => {
    removeEmptyWindowTransitionLayer(shell);
    if (state.transitionShell === shell) state.transitionShell = null;
  };
  let didStart = false;
  let didComplete = false;
  const beginHandoff = () => {
    if (didStart) return;
    didStart = true;
    hooks.onStart?.(shell);
  };
  const completeHandoff = () => {
    if (didComplete) return;
    didComplete = true;
    hooks.onComplete?.(shell);
  };
  if (prefersReducedMotion.matches) {
    beginHandoff();
    completeHandoff();
    releaseShell();
    return;
  }
  const deltaX = isHostedProject
    ? dockBounds.left - windowBounds.left
    : dockBounds.left + dockBounds.width / 2 - (windowBounds.left + windowBounds.width / 2);
  const deltaY = isHostedProject
    ? dockBounds.top - windowBounds.top
    : dockBounds.top + dockBounds.height / 2 - (windowBounds.top + windowBounds.height / 2);
  const scaleX = Math.max(.01, dockBounds.width / windowBounds.width);
  const scaleY = Math.max(.01, dockBounds.height / windowBounds.height);
  const minimizedFrame = {
    transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`,
    opacity: isHostedProject ? 1 : .16
  };
  const windowFrame = { transform: "translate(0, 0) scale(1)", opacity: 1 };
  const supportsGenie = typeof CSS !== "undefined" && CSS.supports?.("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
  let frames = [windowFrame, minimizedFrame];
  if (isHostedProject && dockSettings.minimizeEffect === "genie" && supportsGenie) {
    const full = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    const pulled =
      dockSettings.position === "left" ? "polygon(0 7%, 100% 1%, 100% 99%, 0 93%)" :
      dockSettings.position === "right" ? "polygon(0 1%, 100% 7%, 100% 93%, 0 99%)" :
      "polygon(1% 0, 99% 0, 94% 100%, 6% 100%)";
    const progress = .7;
    const middleScaleX = 1 + (scaleX - 1) * progress;
    const middleScaleY = 1 + (scaleY - 1) * progress;
    frames = [
      { ...windowFrame, clipPath: full, offset: 0 },
      {
        transform: `translate(${(deltaX * progress).toFixed(2)}px, ${(deltaY * progress).toFixed(2)}px) scale(${middleScaleX.toFixed(4)}, ${middleScaleY.toFixed(4)})`,
        clipPath: pulled,
        opacity: 1,
        offset: progress
      },
      { ...minimizedFrame, clipPath: full, offset: 1 }
    ];
  } else if (dockSettings.minimizeEffect === "genie" && supportsGenie) {
    const full = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    const pulled =
      dockSettings.position === "left" ? "polygon(0 43%, 100% 8%, 100% 92%, 0 57%)" :
      dockSettings.position === "right" ? "polygon(0 8%, 100% 43%, 100% 57%, 0 92%)" :
      "polygon(8% 0, 92% 0, 57% 100%, 43% 100%)";
    const middleFrame = {
      transform: `translate(${(deltaX * .64).toFixed(2)}px, ${(deltaY * .64).toFixed(2)}px) scale(.62, .68)`,
      clipPath: pulled,
      opacity: .72,
      offset: .64
    };
    frames = [
      { ...windowFrame, clipPath: full, offset: 0 },
      middleFrame,
      { ...minimizedFrame, clipPath: pulled, offset: 1 }
    ];
  }
  if (isHostedProject && !(dockSettings.minimizeEffect === "genie" && supportsGenie)) {
    frames = [
      { ...windowFrame, offset: 0 },
      { ...minimizedFrame, offset: 1 }
    ];
  }
  const animationFrames = restoring
    ? [...frames].reverse().map(frame => (
      frame.offset == null ? frame : { ...frame, offset: 1 - frame.offset }
    ))
    : frames;
  if (restoring && isHostedProject && dockSettings.minimizeEffect === "genie" && supportsGenie) {
    const full = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    const pulled =
      dockSettings.position === "left" ? "polygon(0 18%, 100% 4%, 100% 96%, 0 82%)" :
      dockSettings.position === "right" ? "polygon(0 4%, 100% 18%, 100% 82%, 0 96%)" :
      "polygon(4% 0, 96% 0, 82% 100%, 18% 100%)";
    const restoreFrame = (progress, offset, clipPath = pulled) => ({
      transform: `translate(${(deltaX * (1 - progress)).toFixed(2)}px, ${(deltaY * (1 - progress)).toFixed(2)}px) scale(${(scaleX + (1 - scaleX) * progress).toFixed(4)}, ${(scaleY + (1 - scaleY) * progress).toFixed(4)})`,
      clipPath,
      opacity: 1,
      offset
    });
    animationFrames.splice(0, animationFrames.length,
      { ...minimizedFrame, clipPath: full, offset: 0 },
      restoreFrame(.08, .12),
      restoreFrame(.56, .56),
      { ...windowFrame, clipPath: full, offset: 1 }
    );
  }
  const timing = {
    duration: isHostedProject ? 380 : (restoring ? 330 : 360),
    easing: isHostedProject ? "cubic-bezier(.22,1,.36,1)" : "cubic-bezier(.2,.8,.2,1)",
    fill: "forwards"
  };
  const canUseWaapi = typeof shell.animate === "function";
  const stagedProjectRestore = restoring && isHostedProject;
  const initialFrame = animationFrames[0];
  let animation = null;
  if (stagedProjectRestore) {
    Object.assign(shell.style, {
      transform: initialFrame.transform,
      opacity: String(initialFrame.opacity ?? 1),
      clipPath: initialFrame.clipPath || "none",
      transition: "none"
    });
    shell.getBoundingClientRect();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    beginHandoff();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }
  animation = canUseWaapi ? shell.animate(animationFrames, timing) : null;
  state.transitionAnimation?.cancel?.();
  state.transitionAnimation = animation;
  if (!stagedProjectRestore) beginHandoff();
  try {
    if (animation) {
      await Promise.race([
        animation.finished.catch(() => undefined),
        new Promise(resolve => setTimeout(resolve, isHostedProject ? 480 : 430))
      ]);
    } else {
      const startFrame = animationFrames[0];
      const endFrame = animationFrames[animationFrames.length - 1];
      Object.assign(shell.style, {
        transform: startFrame.transform,
        opacity: String(startFrame.opacity ?? 1),
        clipPath: startFrame.clipPath || "none",
        transition: "none"
      });
      shell.getBoundingClientRect();
      await new Promise(resolve => requestAnimationFrame(() => {
        shell.style.transition = [
          `transform ${timing.duration}ms ${timing.easing}`,
          `opacity ${timing.duration}ms ${timing.easing}`,
          `clip-path ${timing.duration}ms ${timing.easing}`
        ].join(", ");
        shell.style.transform = endFrame.transform;
        shell.style.opacity = String(endFrame.opacity ?? 1);
        shell.style.clipPath = endFrame.clipPath || "none";
        window.setTimeout(resolve, timing.duration + 34);
      }));
    }
  } finally {
    completeHandoff();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (state.transitionAnimation === animation) state.transitionAnimation = null;
    animation?.cancel?.();
    releaseShell();
  }
}

function clearWindowTransitionStyles(element, visibility = "") {
  element.classList.remove("is-window-transitioning");
  element.style.visibility = visibility;
  ["clip-path", "opacity", "pointer-events", "will-change"].forEach(property => {
    element.style.removeProperty(property);
  });
}

function readEmbeddedFrameScroll(element) {
  if (!element?.classList.contains("project-window--embedded")) return null;
  const parentScroll = element.querySelector(".project-content-scroll");
  return parentScroll ? { x: parentScroll.scrollLeft, y: parentScroll.scrollTop } : null;
}

function restoreEmbeddedFrameScroll(element, position) {
  if (!position) return;
  const parentScroll = element.querySelector(".project-content-scroll");
  if (parentScroll) {
    parentScroll.scrollTo(position.x, position.y);
  }
}

async function minimizeWindow(element, project, id) {
  const currentState = windowStates.get(id);
  if (
    mobileViewport.matches ||
    !element?.isConnected ||
    element.hidden ||
    currentState?.status !== WINDOW_STATUS.NORMAL
  ) return;

  const rect = element.getBoundingClientRect();
  const defaultState = getDefaultWindowState(element, id);
  if (!defaultState) return;
  const isHostedProject = element.classList.contains("project-window--embedded");
  const transitionSnapshot = isHostedProject
    ? (takePreparedWindowSnapshot(element, id, "transition") || cloneWindowShell(element))
    : null;
  const previewSnapshot = isHostedProject
    ? (takePreparedWindowSnapshot(element, id, "preview") || cloneWindowShell(element))
    : null;
  const previewBounds = isHostedProject
    ? { width: rect.width, height: rect.height }
    : defaultState.defaultBounds;
  const { slot, preview, snapshot } = createProjectMinimizedPreview(element, project, id, defaultState, {
    bounds: previewBounds,
    snapshot: previewSnapshot
  });
  const state = {
    ...(currentState || {}),
    id,
    element,
    project,
    defaultState,
    previewBounds,
    preview,
    slot,
    previousBounds: { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
    previousZIndex: element.style.zIndex,
    wasMaximized: element.classList.contains("maximized"),
    embeddedFrameScroll: readEmbeddedFrameScroll(element),
    inlineVisibility: element.style.visibility,
    status: WINDOW_STATUS.MINIMIZING,
    transitionAnimation: null,
    transitionShell: null,
    transitionSnapshot,
    transitionSurface: null
  };
  windowStates.set(id, state);

  setProjectDockHoverSuppressed(true);
  animateDockPreviewLayout(() => dockMinimizedWindows.append(slot));
  syncWindowSnapshotState(element, snapshot);
  preview.hidden = false;
  preview.classList.add("is-preparing");
  installDockLabels(slot);
  preview.getBoundingClientRect();
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const dockBounds = preview.getBoundingClientRect();
  if (!dockBounds.width || !dockBounds.height) {
    state.status = WINDOW_STATUS.NORMAL;
    state.transitionSnapshot = null;
    animateDockPreviewLayout(() => slot.remove());
    state.preview = null;
    state.slot = null;
    finishProjectDockHoverSuppression();
    scheduleWindowTransitionSnapshot(element, id);
    return;
  }
  element.classList.add("is-window-transitioning");
  try {
    const projectHooks = {
      onStart: () => {
        if (!element.isConnected || windowStates.get(id) !== state) return;
        if (!element.hidden) element.style.visibility = "hidden";
      },
      onComplete: () => {
        if (!element.isConnected || windowStates.get(id) !== state) return;
        preview.classList.add("is-handoff-visible");
        preview.classList.remove("is-preparing", "is-arriving");
        element.hidden = true;
        element.setAttribute("aria-hidden", "true");
        clearWindowTransitionStyles(element, state.inlineVisibility);
        requestAnimationFrame(() => preview.classList.remove("is-handoff-visible"));
      }
    };
    const usedViewTransition = isHostedProject
      ? await runProjectViewTransition(state, false, projectHooks)
      : false;
    if (!usedViewTransition) {
      await runWindowDockAnimation(state, dockBounds, false, isHostedProject ? projectHooks : {
        onStart: () => {
          preview.classList.remove("is-preparing");
          preview.classList.add("is-arriving");
          element.style.visibility = "hidden";
        }
      });
    }
  } catch {
    element.hidden = false;
    element.removeAttribute("aria-hidden");
    clearWindowTransitionStyles(element, state.inlineVisibility);
    state.status = WINDOW_STATUS.NORMAL;
    state.transitionSnapshot = null;
    animateDockPreviewLayout(() => slot.remove());
    state.preview = null;
    state.slot = null;
    finishProjectDockHoverSuppression();
    scheduleWindowTransitionSnapshot(element, id);
    return;
  }

  if (!element.isConnected || windowStates.get(id) !== state) {
    finishProjectDockHoverSuppression();
    forgetWindowState(id);
    return;
  }
  element.hidden = true;
  element.setAttribute("aria-hidden", "true");
  clearWindowTransitionStyles(element, state.inlineVisibility);
  element.classList.remove("is-active");
  if (element.classList.contains("project-window--embedded")) activateTopVisibleWindow();
  preview.classList.remove("is-arriving");
  state.status = WINDOW_STATUS.MINIMIZED;
  syncMinimizedDockVisibility();
  scheduleDockFitUpdate();
  scheduleMinimizedPreviewRefresh({ rerender: true });
  finishProjectDockHoverSuppression();
  resetDock(false);
  updateRunningState();
}

async function restoreMinimizedWindow(id) {
  const state = windowStates.get(id);
  if (!state || state.status !== WINDOW_STATUS.MINIMIZED || !state.element.isConnected) return false;

  state.status = WINDOW_STATUS.RESTORING;
  const { element, preview, slot } = state;
  const isHostedProject = element.classList.contains("project-window--embedded");
  if (isHostedProject) freezeProjectDockForRestoreHandoff();
  const dockBounds = preview.getBoundingClientRect();
  if (isHostedProject && !state.transitionSurface) {
    state.transitionSnapshot ||= cloneWindowShell(element);
    syncWindowSnapshotState(element, state.transitionSnapshot);
  }
  if (!isHostedProject) setProjectDockHoverSuppressed(true);
  element.classList.add("is-window-transitioning");
  try {
    const restoreHooks = {
      onStart: () => {
        preview.classList.add("is-restoring");
        if (isHostedProject) setProjectDockHoverSuppressed(true);
        if (element.hidden) element.style.visibility = "hidden";
      },
      onComplete: () => {
        if (!element.isConnected) return;
        element.hidden = false;
        element.removeAttribute("aria-hidden");
        clearWindowTransitionStyles(element, state.inlineVisibility);
      }
    };
    const usedViewTransition = !isHostedProject
      ? await runProjectViewTransition(state, true, restoreHooks)
      : false;
    if (!usedViewTransition) {
      await runWindowDockAnimation(state, dockBounds, true, restoreHooks);
    }
  } catch {
    element.hidden = false;
    element.removeAttribute("aria-hidden");
    clearWindowTransitionStyles(element, state.inlineVisibility);
  }

  if (!element.isConnected) {
    finishProjectDockHoverSuppression();
    forgetWindowState(id);
    return false;
  }
  element.hidden = false;
  element.removeAttribute("aria-hidden");
  clearWindowTransitionStyles(element, state.inlineVisibility);
  preview.classList.remove("is-restoring");
  state.status = WINDOW_STATUS.NORMAL;
  animateDockPreviewLayout(() => slot.remove());
  state.preview = null;
  state.slot = null;
  state.transitionSnapshot = null;
  state.transitionSurface = null;
  finishProjectDockHoverSuppression();
  bringForward(element);
  restoreEmbeddedFrameScroll(element, state.embeddedFrameScroll);
  updateRunningState();
  element.focus({ preventScroll: true });
  scheduleWindowTransitionSnapshot(element, id);
  return true;
}

function updateRunningState() {
  document.querySelector("#dock-notes").classList.toggle("running", !!document.querySelector('.notes-window[data-app-id="notes-about"]'));
  document.querySelector("#dock-services")?.classList.toggle("running", !!document.querySelector('.services-window[data-app-id="services"]'));
  document.querySelector("#dock-certificates")?.classList.toggle("running", !!document.querySelector('.certificates-window[data-app-id="certificates"]'));
  document.querySelector("#dock-vision-bin")?.classList.toggle("running", !!document.querySelector('.vision-bin-window[data-app-id="vision-bin"]'));
  document.querySelector("#dock-instagram")?.classList.toggle("running", !!document.querySelector(".instagram-window"));
  document.querySelector("#dock-messages")?.classList.toggle("running", !!document.querySelector('.messages-window[data-app-id="messages"]'));
  Object.keys(ADOBE_APPS).forEach(appId => {
    document.querySelector(`#dock-${appId}`)?.classList.toggle("running", !!document.querySelector(`[data-adobe-alert="${appId}"]`));
  });
}

document.querySelector("#dock-notes").addEventListener("click", openAboutNotes);
document.querySelector("#dock-services")?.addEventListener("click", openServicesWindow);
document.querySelector("#dock-certificates")?.addEventListener("click", openCertificatesWindow);
document.querySelector("#dock-vision-bin")?.addEventListener("click", openVisionBinWindow);
document.querySelector("#dock-messages").addEventListener("click", openMessagesWindow);
document.querySelector("#dock-instagram")?.addEventListener("click", openInstagramWindow);
Object.keys(ADOBE_APPS).forEach(appId => {
  document.querySelector(`#dock-${appId}`)?.addEventListener("click", () => openAdobeAlert(appId));
});

function withAppearance(url) {
  if (!url) return url;
  const mode = document.body.dataset.appearance === "dark" ? "dark" : "light";
  return `${url}${url.includes("?") ? "&" : "?"}appearance=${mode}`;
}

function broadcastAppearance(mode) {
  document.querySelectorAll(".embedded-project-frame").forEach(frame => {
    try {
      frame.contentWindow?.postMessage({ type: "lm-appearance", mode }, "*");
    } catch {
      // Cross-origin frames simply keep their own theme.
    }
  });
}

/* ── Desktop style (macOS by default, Windows optional) ────────────────────
 * "auto" follows the visitor's own OS, so someone on Windows sees Windows
 * chrome without touching anything. The choice is remembered like appearance.
 */
const PLATFORM_STORAGE_KEY = "lm-portfolio-platform";
const PLATFORM_MODES = ["auto", "mac", "windows"];

function detectVisitorPlatform() {
  const uaPlatform = navigator.userAgentData?.platform || navigator.platform || "";
  const ua = navigator.userAgent || "";
  if (/win/i.test(uaPlatform) || /Windows NT/i.test(ua)) return "windows";
  return "mac";
}

function readStoredPlatform() {
  try {
    const stored = localStorage.getItem(PLATFORM_STORAGE_KEY);
    return PLATFORM_MODES.includes(stored) ? stored : "auto";
  } catch {
    return "auto";
  }
}

function applyPlatform(mode, { persist = true } = {}) {
  const choice = PLATFORM_MODES.includes(mode) ? mode : "auto";
  const resolved = choice === "auto" ? detectVisitorPlatform() : choice;
  document.body.dataset.platform = resolved;
  document.body.dataset.platformChoice = choice;
  document.querySelectorAll(".setting-platform-option").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.platformChoice === choice));
  });
  if (!persist) return;
  try {
    localStorage.setItem(PLATFORM_STORAGE_KEY, choice);
  } catch {
    // Private browsing: the choice simply resets next visit.
  }
}

document.querySelectorAll(".setting-platform-option").forEach(button => {
  button.addEventListener("click", () => applyPlatform(button.dataset.platformChoice));
});
applyPlatform(readStoredPlatform(), { persist: false });

/* ── Appearance (light default, dark optional) ─────────────────────────── */
const APPEARANCE_STORAGE_KEY = "lm-portfolio-appearance";
const APPEARANCE_MODES = ["light", "dark"];

function readStoredAppearance() {
  try {
    const stored = localStorage.getItem(APPEARANCE_STORAGE_KEY);
    return APPEARANCE_MODES.includes(stored) ? stored : "light";
  } catch {
    return "light";
  }
}

function applyAppearance(mode, { persist = true } = {}) {
  const appearance = APPEARANCE_MODES.includes(mode) ? mode : "light";
  document.body.dataset.appearance = appearance;
  document.documentElement.style.colorScheme = appearance;
  document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", `only ${appearance}`);
  document.querySelectorAll(".setting-appearance-option").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.appearance === appearance));
  });
  broadcastAppearance(appearance);
  if (!persist) return;
  try {
    localStorage.setItem(APPEARANCE_STORAGE_KEY, appearance);
  } catch {
    // Private browsing: the choice simply resets next visit.
  }
}

document.querySelectorAll(".setting-appearance-option").forEach(button => {
  button.addEventListener("click", () => applyAppearance(button.dataset.appearance));
});
applyAppearance(readStoredAppearance(), { persist: false });

const settings = document.querySelector("#settings-panel");
const settingsButton = document.querySelector("#dock-settings");
let settingsCloseTimer = 0;
function closeSettingsPanel({ returnFocus = true } = {}) {
  if (settings.hidden) return;
  closeDockPositionPopup();
  window.clearTimeout(settingsCloseTimer);
  settings.classList.remove("is-open");
  settingsButton.setAttribute("aria-expanded", "false");
  const finish = () => {
    settings.hidden = true;
    settingsCloseTimer = 0;
    if (returnFocus) settingsButton.focus({ preventScroll: true });
  };
  if (prefersReducedMotion.matches) finish();
  else settingsCloseTimer = window.setTimeout(finish, 150);
}
function openSettingsPanel() {
  window.clearTimeout(settingsCloseTimer);
  settingsCloseTimer = 0;
  settings.hidden = false;
  settingsButton.setAttribute("aria-expanded", "true");
  syncDockSettingsControls();
  requestAnimationFrame(() => {
    settings.classList.add("is-open");
    document.querySelector("#settings-close").focus({ preventScroll: true });
  });
}
settingsButton.addEventListener("click", () => {
  if (settings.hidden || !settings.classList.contains("is-open")) openSettingsPanel();
  else closeSettingsPanel();
  resetDock();
});
document.querySelector("#settings-close").addEventListener("click", () => closeSettingsPanel());
document.addEventListener("pointerdown", event => {
  if (settings.hidden || settings.contains(event.target) || settingsButton.contains(event.target)) return;
  closeSettingsPanel({ returnFocus: false });
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape" || settings.hidden) return;
  event.preventDefault();
  closeSettingsPanel();
});

function getActiveDesktopSurface() {
  return [...document.querySelectorAll(".project-window.is-active:not([hidden]), .adobe-alert.is-active")]
    .filter(element => element.isConnected && !element.classList.contains("is-closing"))
    .sort((left, right) => Number(right.style.zIndex || 0) - Number(left.style.zIndex || 0))[0] || null;
}

function closeActiveDesktopSurface() {
  if (!settings.hidden) {
    closeSettingsPanel();
    return true;
  }
  const activeSurface = getActiveDesktopSurface();
  if (!activeSurface) return false;
  const closeControl = activeSurface.matches(".adobe-alert")
    ? activeSurface.querySelector(".adobe-alert-dismiss")
    : activeSurface.querySelector('[data-action="close"]');
  if (!closeControl) return false;
  closeControl.click();
  return true;
}

function handleCompositeArrowNavigation(event) {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return false;
  const container = event.target.closest(".notes-preview-list, .notes-folder-tree, .messages-thread-list");
  if (!container) return false;
  const items = [...container.querySelectorAll("button:not([disabled])")]
    .filter(item => !item.hidden && item.getClientRects().length);
  if (!items.length) return false;
  const currentIndex = Math.max(0, items.indexOf(event.target.closest("button")));
  let nextIndex = currentIndex;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = items.length - 1;
  if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % items.length;
  if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + items.length) % items.length;
  const nextItem = items[nextIndex];
  event.preventDefault();
  nextItem.focus({ preventScroll: true });
  if (container.matches(".notes-preview-list, .messages-thread-list")) nextItem.click();
  return true;
}

document.addEventListener("keydown", event => {
  if (mobileViewport.matches || event.isComposing) return;
  if (event.metaKey && !event.altKey && !event.ctrlKey && event.key.toLowerCase() === "w") {
    if (closeActiveDesktopSurface()) event.preventDefault();
    return;
  }
  handleCompositeArrowNavigation(event);
});

const DOCK_MOTION = {
  maxScale: 1.5,
  influenceSlots: 2.58,
  trackingInterpolation: .62,
  settleEpsilon: .015,
  initialLabelDelay: 100,
  switchLabelDelay: 30,
  labelExitDelay: 80,
  resetDuration: 180,
  pressScale: .96
};
const DOCK_SIZE = {
  fitMinimum: 16,
  minimum: 20,
  compactThreshold: 32,
  default: 40,
  maximum: 80,
  pixelsPerStep: 4,
  storageKey: "lm-portfolio-dock-size-v1"
};
const DOCK_SETTINGS_STORAGE = {
  size: "dockSize",
  magnificationEnabled: "magnificationEnabled",
  magnificationScale: "magnificationScale",
  position: "dockPosition",
  minimizeEffect: "minimizeEffect"
};
const DOCK_REORDER = {
  allowAcrossGroups: false,
  movementThreshold: 5,
  storageKey: "lm-portfolio-dock-order-v1"
};
const supportsFinePointer = matchMedia("(hover: hover) and (pointer: fine)");
const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const dockReorderStatus = document.querySelector("#dock-reorder-status");
const dockFloatingLabel = document.querySelector("#dock-floating-label");
const dockFloatingLabelText = dockFloatingLabel.querySelector(".dock-label-text");
const dockFloatingLabelShape = dockFloatingLabel.querySelector(".dock-label-shape");
const dockFloatingLabelPath = dockFloatingLabelShape.querySelector("path");
function updateDockTooltipShape() {
  const width = Math.max(52, dockFloatingLabel.offsetWidth);
  const center = width / 2;
  const right = width - .5;
  const rightCurve = width - 9;
  const pointerHalf = 6;
  dockFloatingLabelShape.setAttribute("viewBox", `0 0 ${width} 34`);
  if (dockSettings.position === "left") {
    dockFloatingLabelPath.setAttribute("d", [
      "M7 .5",
      `H${rightCurve}Q${right} .5 ${right} 8.5V25.5Q${right} 33.5 ${rightCurve} 33.5H7`,
      "Q.5 33.5 .5 27V22C.5 19.7 3.5 18.2 7 17C3.5 15.8 .5 14.3 .5 12V7Q.5 .5 7 .5Z"
    ].join(""));
    return;
  }
  if (dockSettings.position === "right") {
    dockFloatingLabelPath.setAttribute("d", [
      "M9 .5",
      `H${width - 7}Q${right} .5 ${right} 7V12C${right} 14.3 ${width - 3.5} 15.8 ${width - 7} 17`,
      `C${width - 3.5} 18.2 ${right} 19.7 ${right} 22V27Q${right} 33.5 ${width - 7} 33.5H9`,
      "Q.5 33.5 .5 25.5V8.5Q.5 .5 9 .5Z"
    ].join(""));
    return;
  }
  dockFloatingLabelPath.setAttribute("d", [
    "M9 .5",
    `H${rightCurve}`,
    `Q${right} .5 ${right} 8.5`,
    `V19.5Q${right} 28 ${rightCurve} 28`,
    `H${center + pointerHalf}`,
    `C${center + 3.8} 28 ${center + 2.4} 30.8 ${center} 33.5`,
    `C${center - 2.4} 30.8 ${center - 3.8} 28 ${center - pointerHalf} 28`,
    "H9Q.5 28 .5 19.5V8.5Q.5 .5 9 .5Z"
  ].join(""));
}
function readStoredDockNumber(key, minimum, maximum, fallback, legacyKey = "") {
  try {
    const raw = localStorage.getItem(key) ?? (legacyKey ? localStorage.getItem(legacyKey) : null);
    const value = Number(raw);
    return raw !== null && Number.isFinite(value) && value >= minimum && value <= maximum ? value : fallback;
  } catch {
    return fallback;
  }
}

function readDockSettings() {
  let magnificationEnabled = true;
  let position = "bottom";
  let minimizeEffect = "scale";
  try {
    const savedMagnificationEnabled = localStorage.getItem(DOCK_SETTINGS_STORAGE.magnificationEnabled);
    if (savedMagnificationEnabled !== null) {
      magnificationEnabled = savedMagnificationEnabled === "true";
    }
    const savedPosition = localStorage.getItem(DOCK_SETTINGS_STORAGE.position);
    const savedEffect = localStorage.getItem(DOCK_SETTINGS_STORAGE.minimizeEffect);
    if (["left", "bottom", "right"].includes(savedPosition)) position = savedPosition;
    if (["genie", "scale"].includes(savedEffect)) minimizeEffect = savedEffect;
  } catch {}
  return {
    size: readStoredDockNumber(
      DOCK_SETTINGS_STORAGE.size,
      DOCK_SIZE.minimum,
      DOCK_SIZE.maximum,
      DOCK_SIZE.default,
      DOCK_SIZE.storageKey
    ),
    effectiveSize: null,
    magnificationEnabled,
    magnificationScale: readStoredDockNumber(
      DOCK_SETTINGS_STORAGE.magnificationScale,
      1,
      DOCK_MOTION.maxScale,
      1.25
    ),
    position,
    minimizeEffect
  };
}

function persistDockSetting(key, value) {
  try { localStorage.setItem(DOCK_SETTINGS_STORAGE[key], String(value)); } catch {}
}

const dockSettings = readDockSettings();
let dockFrame = 0;
let dockResizeFrame = 0;
let dockResizeCommitFrame = 0;
let dockResize = null;
let dockIconDrag = null;
let dockInteractionMode = "idle";
let suppressDockClick = false;
const dockFlipTimers = new WeakMap();
let dockLayout = null;
let dockPointerCoordinate = 0;
let closestLabelItem = null;
let visibleLabelItem = null;
let dockPointerInside = false;
let labelTimer = 0;
let labelExitTimer = 0;
let resetTimer = 0;
let dockFitFrame = 0;
let dockLayoutRefreshFrame = 0;
const dockAnimationValues = new WeakMap();

function readDockOrder() {
  try {
    const saved = JSON.parse(localStorage.getItem(DOCK_REORDER.storageKey) || "{}");
    if (!saved || typeof saved !== "object") return {};
    Object.keys(saved).forEach(group => {
      if (!Array.isArray(saved[group])) return;
      const validIds = new Set(DOCK_APPS.filter(app => app.group === group).map(app => app.id));
      saved[group] = saved[group].filter(id => validIds.has(id));
    });
    return saved;
  } catch {
    return {};
  }
}

function restoreDockOrder() {
  const saved = readDockOrder();
  dockTrack.querySelectorAll(":scope > .dock-group").forEach(group => {
    const ids = Array.isArray(saved[group.dataset.group]) ? saved[group.dataset.group] : [];
    const slots = [...group.querySelectorAll(":scope > .dock-slot:not([data-dock-temporary])")];
    const byId = new Map(slots.map(slot => [slot.dataset.dockId, slot]));
    ids.forEach(id => {
      const slot = byId.get(id);
      if (slot) {
        group.append(slot);
        byId.delete(id);
      }
    });
    slots.forEach(slot => {
      if (byId.has(slot.dataset.dockId)) group.append(slot);
    });
  });
}

function saveDockOrder() {
  const order = {};
  dockTrack.querySelectorAll(":scope > .dock-group").forEach(group => {
    order[group.dataset.group] = [...group.querySelectorAll(":scope > .dock-slot:not([data-dock-temporary])")]
      .map(slot => slot.dataset.dockId)
      .filter(Boolean);
  });
  try { localStorage.setItem(DOCK_REORDER.storageKey, JSON.stringify(order)); } catch {}
}

function slotRects(group) {
  return new Map(
    [...group.querySelectorAll(":scope > .dock-slot:not(.dragging), :scope > .dock-placeholder")]
      .map(slot => [slot, slot.getBoundingClientRect()])
  );
}

function animateDockReflow(group, mutate) {
  const before = slotRects(group);
  mutate();
  const vertical = dockSettings.position !== "bottom";
  const movable = [...group.querySelectorAll(":scope > .dock-slot:not(.dragging)")];
  movable.forEach(slot => {
    const oldRect = before.get(slot);
    if (!oldRect) return;
    const newRect = slot.getBoundingClientRect();
    const delta = vertical ? oldRect.top - newRect.top : oldRect.left - newRect.left;
    if (Math.abs(delta) < .5) return;
    slot.classList.remove("reorder-shifting");
    slot.style.setProperty(vertical ? "--dock-reorder-y" : "--dock-reorder-x", `${delta.toFixed(2)}px`);
  });
  if (prefersReducedMotion.matches) {
    movable.forEach(slot => {
      slot.style.setProperty("--dock-reorder-x", "0px");
      slot.style.setProperty("--dock-reorder-y", "0px");
    });
    return;
  }
  void dockTrack.offsetWidth;
  movable.forEach(slot => {
    clearTimeout(dockFlipTimers.get(slot));
    slot.classList.add("reorder-shifting");
    slot.style.setProperty("--dock-reorder-x", "0px");
    slot.style.setProperty("--dock-reorder-y", "0px");
    dockFlipTimers.set(slot, setTimeout(() => {
      slot.classList.remove("reorder-shifting");
      dockFlipTimers.delete(slot);
    }, 160));
  });
}

restoreDockOrder();

const DOCK_VERTICAL_SAFE_MARGIN = 20;
const DOCK_HORIZONTAL_SAFE_MARGIN = 20;

function updateDockUsableGeometry() {
  const headerBottom = Math.max(0, systemBar?.getBoundingClientRect().bottom || 39);
  const usableCenterY = headerBottom + (innerHeight - headerBottom) / 2;
  dock.style.setProperty("--dock-usable-top", `${headerBottom.toFixed(2)}px`);
  dock.style.setProperty("--dock-usable-center-y", `${usableCenterY.toFixed(2)}px`);
  return headerBottom;
}

function getDockMetrics(size) {
  const scale = size / DOCK_SIZE.default;
  const compactScale = Math.min(1, size / DOCK_SIZE.compactThreshold);
  const iconSize = 40 * scale;
  const gap = size >= DOCK_SIZE.compactThreshold
    ? Math.min(12, Math.max(9, 10 * scale))
    : Math.max(4, 10 * scale);
  return {
    scale,
    iconSize,
    gap,
    paddingX: Math.min(32, Math.max(8, 20 * scale, 16 * compactScale)),
    paddingY: Math.min(14, Math.max(3, 8.5 * scale, 7 * compactScale)),
    groupGap: Math.min(18, Math.max(8, 18 * scale)),
    radius: Math.min(20, Math.max(9, 20 * scale)),
    dividerHeight: Math.max(16, iconSize * .875),
    indicatorSize: Math.min(7, Math.max(3.5, 4 * scale)),
    indicatorOffset: Math.min(9, Math.max(4, 5 * scale)),
    tooltipOffset: Math.min(11.5, Math.max(6, 11.5 * scale)),
    minimizedPreviewHeight: iconSize * .66
  };
}

function getDockMagnificationRadius(size) {
  const metrics = getDockMetrics(size);
  return (metrics.iconSize + metrics.gap) * DOCK_MOTION.influenceSlots;
}

function getDockMagnificationInfluence(distance, radius) {
  if (distance >= radius) return 0;
  const normalized = Math.max(0, distance / radius);
  return Math.pow(Math.cos(normalized * Math.PI / 2), 2.15);
}

function getVerticalDockModel(size) {
  const metrics = getDockMetrics(size);
  const children = [];
  const iconEntries = [];

  [...dockTrack.children].forEach(child => {
    if (child.hidden) return;
    if (child.classList.contains("dock-group")) {
      const slots = [...child.querySelectorAll(":scope > .dock-slot")].filter(slot => !slot.hidden);
      if (!slots.length) return;
      let groupExtent = 0;
      const localEntries = [];
      slots.forEach((slot, index) => {
        if (index) groupExtent += metrics.gap;
        const slotSize = slot.classList.contains("dock-minimized-slot")
          ? metrics.minimizedPreviewHeight
          : metrics.iconSize;
        localEntries.push({ center: groupExtent + slotSize / 2, size: slotSize });
        groupExtent += slotSize;
      });
      children.push({ extent: groupExtent, iconEntries: localEntries });
      return;
    }
    if (child.classList.contains("dock-divider")) {
      const dividerMargin = Math.max(0, metrics.groupGap - metrics.gap);
      children.push({ extent: 1 + dividerMargin * 2, iconEntries: [] });
    }
  });

  let trackExtent = 0;
  children.forEach((child, index) => {
    if (index) trackExtent += metrics.gap;
    child.iconEntries.forEach(entry => iconEntries.push({
      center: trackExtent + entry.center,
      size: entry.size
    }));
    trackExtent += child.extent;
  });

  return { metrics, iconEntries, trackExtent };
}

function getHorizontalDockModel(size) {
  const metrics = getDockMetrics(size);
  const children = [];
  const iconEntries = [];

  [...dockTrack.children].forEach(child => {
    if (child.hidden) return;
    if (child.classList.contains("dock-group")) {
      const slots = [...child.querySelectorAll(":scope > .dock-slot")].filter(slot => !slot.hidden);
      if (!slots.length) return;
      let groupExtent = 0;
      const localEntries = [];
      slots.forEach((slot, index) => {
        if (index) groupExtent += metrics.gap;
        let slotSize = metrics.iconSize;
        if (slot.classList.contains("dock-minimized-slot")) {
          const aspectRatio = parseFloat(
            slot.style.getPropertyValue("--default-window-aspect-ratio")
          ) || 1;
          slotSize = metrics.minimizedPreviewHeight * aspectRatio;
        }
        localEntries.push({ center: groupExtent + slotSize / 2, size: slotSize });
        groupExtent += slotSize;
      });
      children.push({ extent: groupExtent, iconEntries: localEntries });
      return;
    }
    if (child.classList.contains("dock-divider")) {
      const dividerMargin = Math.max(0, metrics.groupGap - metrics.gap);
      children.push({ extent: 1 + dividerMargin * 2, iconEntries: [] });
    }
  });

  let trackExtent = 0;
  children.forEach((child, index) => {
    if (index) trackExtent += metrics.gap;
    child.iconEntries.forEach(entry => iconEntries.push({
      center: trackExtent + entry.center,
      size: entry.size
    }));
    trackExtent += child.extent;
  });

  return { metrics, iconEntries, trackExtent };
}

function getDockMagnificationOverflow(model, size) {
  if (
    !dockSettings.magnificationEnabled ||
    prefersReducedMotion.matches ||
    !supportsFinePointer.matches ||
    model.iconEntries.length === 0
  ) return 0;

  const samples = model.iconEntries.flatMap((entry, index, entries) => {
    const next = entries[index + 1];
    return next ? [entry.center, (entry.center + next.center) / 2] : [entry.center];
  });
  const restingStart = Math.min(...model.iconEntries.map(entry => entry.center - entry.size / 2));
  const restingEnd = Math.max(...model.iconEntries.map(entry => entry.center + entry.size / 2));
  const influenceRadius = getDockMagnificationRadius(size);
  let maximumOverflow = 0;

  samples.forEach(pointerCoordinate => {
    const data = model.iconEntries.map(entry => {
      const influence = getDockMagnificationInfluence(
        Math.abs(pointerCoordinate - entry.center),
        influenceRadius
      );
      const scale = 1 + influence * (dockSettings.magnificationScale - 1);
      return { ...entry, scale, extraSize: entry.size * (scale - 1) };
    });
    const totalExtraSize = data.reduce((sum, entry) => sum + entry.extraSize, 0);
    let expansionBefore = 0;
    let animatedStart = Number.POSITIVE_INFINITY;
    let animatedEnd = Number.NEGATIVE_INFINITY;
    data.forEach(entry => {
      const shift = expansionBefore + entry.extraSize / 2 - totalExtraSize / 2;
      const animatedHalfSize = entry.size * entry.scale / 2;
      animatedStart = Math.min(animatedStart, entry.center + shift - animatedHalfSize);
      animatedEnd = Math.max(animatedEnd, entry.center + shift + animatedHalfSize);
      expansionBefore += entry.extraSize;
    });
    maximumOverflow = Math.max(
      maximumOverflow,
      Math.max(0, restingStart - animatedStart) + Math.max(0, animatedEnd - restingEnd)
    );
  });
  return maximumOverflow;
}

function getVerticalDockExtent(size) {
  const model = getVerticalDockModel(size);
  return model.trackExtent
    + model.metrics.paddingX * 2
    + getDockMagnificationOverflow(model, size)
    + 2;
}

function getHorizontalDockExtent(size) {
  const model = getHorizontalDockModel(size);
  return model.trackExtent
    + model.metrics.paddingX * 2
    + getDockMagnificationOverflow(model, size)
    + 2;
}

function calculateEffectiveDockSize(preferredSize) {
  if (dockSettings.position === "bottom") {
    const availableWidth = Math.max(1, innerWidth - DOCK_HORIZONTAL_SAFE_MARGIN * 2);
    if (getHorizontalDockExtent(preferredSize) <= availableWidth) return preferredSize;
    if (getHorizontalDockExtent(DOCK_SIZE.fitMinimum) > availableWidth) return DOCK_SIZE.fitMinimum;
    let lower = DOCK_SIZE.fitMinimum;
    let upper = preferredSize;
    for (let index = 0; index < 18; index += 1) {
      const candidate = (lower + upper) / 2;
      if (getHorizontalDockExtent(candidate) <= availableWidth) lower = candidate;
      else upper = candidate;
    }
    return Math.floor(lower * 10) / 10;
  }
  const headerBottom = updateDockUsableGeometry();
  const availableHeight = Math.max(
    1,
    innerHeight - headerBottom - DOCK_VERTICAL_SAFE_MARGIN * 2
  );
  if (getVerticalDockExtent(preferredSize) <= availableHeight) return preferredSize;
  if (getVerticalDockExtent(DOCK_SIZE.fitMinimum) > availableHeight) return DOCK_SIZE.fitMinimum;
  let lower = DOCK_SIZE.fitMinimum;
  let upper = preferredSize;
  for (let index = 0; index < 18; index += 1) {
    const candidate = (lower + upper) / 2;
    if (getVerticalDockExtent(candidate) <= availableHeight) lower = candidate;
    else upper = candidate;
  }
  return Math.floor(lower * 10) / 10;
}

function scheduleDockLayoutRefresh() {
  cancelAnimationFrame(dockLayoutRefreshFrame);
  dockLayoutRefreshFrame = requestAnimationFrame(() => {
    dockLayoutRefreshFrame = 0;
    dockLayout = null;
    if (
      dockPointerInside &&
      dockSettings.magnificationEnabled &&
      dockInteractionMode !== "resizing" &&
      !dockFrame
    ) {
      dockFrame = requestAnimationFrame(() => {
        dockFrame = 0;
        renderDockMagnification();
      });
    }
  });
}

function scheduleDockFitUpdate() {
  if (dockFitFrame) return;
  dockFitFrame = requestAnimationFrame(() => {
    dockFitFrame = 0;
    applyDockSize(dockSettings.size);
  });
}

function applyDockSize(size, persist = false, {
  refreshLayout = true,
  refreshPreviews = true,
  effectiveMaximum = null
} = {}) {
  const preferredSize = Math.min(DOCK_SIZE.maximum, Math.max(DOCK_SIZE.minimum, Number(size)));
  if (!Number.isFinite(preferredSize)) return;
  dockSettings.size = preferredSize;
  const effectiveSize = Number.isFinite(effectiveMaximum)
    ? Math.min(preferredSize, effectiveMaximum)
    : calculateEffectiveDockSize(preferredSize);
  const accessibleMaximum = Number.isFinite(effectiveMaximum)
    ? effectiveMaximum
    : calculateEffectiveDockSize(DOCK_SIZE.maximum);
  const metrics = getDockMetrics(effectiveSize);
  dockSettings.effectiveSize = effectiveSize;
  dock.style.setProperty("--dock-size", `${effectiveSize.toFixed(2)}px`);
  dock.style.setProperty("--dock-icon-size", `${metrics.iconSize.toFixed(2)}px`);
  dock.style.setProperty("--dock-icon-width", `${metrics.iconSize.toFixed(2)}px`);
  dock.style.setProperty("--dock-icon-height", `${metrics.iconSize.toFixed(2)}px`);
  dock.style.setProperty("--dock-padding-x", `${metrics.paddingX.toFixed(2)}px`);
  dock.style.setProperty("--dock-padding-y", `${metrics.paddingY.toFixed(2)}px`);
  dock.style.setProperty("--dock-gap", `${metrics.gap.toFixed(2)}px`);
  dock.style.setProperty("--dock-group-gap", `${metrics.groupGap.toFixed(2)}px`);
  dock.style.setProperty("--dock-radius", `${metrics.radius.toFixed(2)}px`);
  dock.style.setProperty("--dock-divider-height", `${metrics.dividerHeight.toFixed(2)}px`);
  dock.style.setProperty("--dock-tooltip-offset", `${metrics.tooltipOffset.toFixed(2)}px`);
  dock.style.setProperty("--dock-indicator-size", `${metrics.indicatorSize.toFixed(2)}px`);
  dock.style.setProperty("--dock-indicator-offset", `${metrics.indicatorOffset.toFixed(2)}px`);
  if (refreshPreviews) updateMinimizedWindowPreviews({ iconSize: metrics.iconSize });
  dockResizeHandles.forEach(handle => {
    handle.setAttribute("aria-valuemin", String(DOCK_SIZE.minimum));
    handle.setAttribute("aria-valuemax", String(Math.floor(accessibleMaximum * 10) / 10));
    handle.setAttribute("aria-valuenow", String(Math.round(effectiveSize * 10) / 10));
  });
  if (refreshLayout) scheduleDockLayoutRefresh();
  if (persist) persistDockSetting("size", preferredSize.toFixed(2));
}
applyDockSize(dockSettings.size);

function getDockResizeBehavior(position = dockSettings.position) {
  if (position === "left") {
    return {
      ariaOrientation: "horizontal",
      title: "Drag horizontally to resize the Dock",
      increaseKey: "ArrowRight",
      decreaseKey: "ArrowLeft",
      pointerDelta: (deltaX, _deltaY) => deltaX
    };
  }
  if (position === "right") {
    return {
      ariaOrientation: "horizontal",
      title: "Drag horizontally to resize the Dock",
      increaseKey: "ArrowLeft",
      decreaseKey: "ArrowRight",
      pointerDelta: (deltaX, _deltaY) => -deltaX
    };
  }
  return {
    ariaOrientation: "vertical",
    title: "Drag vertically to resize the Dock",
    increaseKey: "ArrowUp",
    decreaseKey: "ArrowDown",
    pointerDelta: (_deltaX, deltaY) => -deltaY
  };
}

function applyDockPosition(position, persist = false, { adjustDesktopLayout = false } = {}) {
  dockSettings.position = ["left", "bottom", "right"].includes(position) ? position : "bottom";
  dock.dataset.position = dockSettings.position;
  document.body.dataset.dockPosition = dockSettings.position;
  if (adjustDesktopLayout) {
    desktopDockLayoutAdjustedThisSession = true;
    if (activeCollectionFilter === ALL_WORK_FILTER) {
      updateCuratedDesktopPositions({ respectDock: dockSettings.position !== "bottom" });
    } else {
      setFilteredGridPositions(projects.filter(project => projectMatchesCollection(project, activeCollectionFilter)));
    }
  }
  updateDockUsableGeometry();
  const resizeBehavior = getDockResizeBehavior();
  dockResizeHandles.forEach(handle => {
    handle.setAttribute("aria-orientation", resizeBehavior.ariaOrientation);
    handle.title = resizeBehavior.title;
  });
  resetDock(false);
  applyDockSize(dockSettings.size);
  scheduleMinimizedPreviewRefresh({ rerender: true });
  if (persist) persistDockSetting("position", dockSettings.position);
}

const dockMagnificationRange = document.querySelector("#dock-magnification-range");
const dockPositionSelect = document.querySelector("#dock-position-select");
const dockPositionControl = document.querySelector("#dock-position-control");
const dockPositionTrigger = document.querySelector("#dock-position-trigger");
const dockPositionValue = document.querySelector("#dock-position-value");
const dockPositionMenu = document.querySelector("#dock-position-menu");
const dockPositionOptions = [...dockPositionMenu.querySelectorAll('[role="option"]')];

function syncDockPositionPopup() {
  const position = dockPositionSelect.value;
  const selectedOption = dockPositionOptions.find(option => option.dataset.position === position);
  dockPositionValue.textContent = selectedOption?.querySelector(":scope > span:last-child")?.textContent.trim() || "Bottom";
  dockPositionOptions.forEach(option => {
    option.setAttribute("aria-selected", String(option.dataset.position === position));
  });
}

function closeDockPositionPopup({ returnFocus = false } = {}) {
  if (dockPositionMenu.hidden) return;
  dockPositionMenu.hidden = true;
  dockPositionTrigger.setAttribute("aria-expanded", "false");
  if (returnFocus) dockPositionTrigger.focus({ preventScroll: true });
}

function openDockPositionPopup() {
  syncDockPositionPopup();
  dockPositionMenu.hidden = false;
  dockPositionTrigger.setAttribute("aria-expanded", "true");
  const selectedOption = dockPositionOptions.find(option => option.getAttribute("aria-selected") === "true");
  selectedOption?.focus({ preventScroll: true });
}

function moveDockPositionFocus(direction) {
  const currentIndex = Math.max(0, dockPositionOptions.indexOf(document.activeElement));
  dockPositionOptions[(currentIndex + direction + dockPositionOptions.length) % dockPositionOptions.length]
    .focus({ preventScroll: true });
}

function updateSettingRangeProgress(input) {
  const minimum = Number(input.min);
  const maximum = Number(input.max);
  const progress = maximum === minimum ? 0 : (Number(input.value) - minimum) / (maximum - minimum) * 100;
  input.style.setProperty("--range-progress", `${progress.toFixed(2)}%`);
}

function syncDockSettingsControls() {
  dockMagnificationRange.value = String(Math.round(
    dockSettings.magnificationEnabled ? dockSettings.magnificationScale * 100 : 100
  ));
  dockPositionSelect.value = dockSettings.position;
  syncDockPositionPopup();
  updateSettingRangeProgress(dockMagnificationRange);
  dock.classList.toggle("magnification-active", dockSettings.magnificationEnabled);
}

function updateDockSettings(patch, { persist = true, syncControls = true } = {}) {
  const changed = new Set();
  if (Object.hasOwn(patch, "size")) {
    const size = Math.min(DOCK_SIZE.maximum, Math.max(DOCK_SIZE.minimum, Number(patch.size)));
    if (Number.isFinite(size) && size !== dockSettings.size) {
      dockSettings.size = size;
      changed.add("size");
    }
  }
  if (Object.hasOwn(patch, "magnificationEnabled")) {
    const enabled = Boolean(patch.magnificationEnabled);
    if (enabled !== dockSettings.magnificationEnabled) {
      dockSettings.magnificationEnabled = enabled;
      changed.add("magnificationEnabled");
    }
  }
  if (Object.hasOwn(patch, "magnificationScale")) {
    const scale = Math.max(1, Math.min(DOCK_MOTION.maxScale, Number(patch.magnificationScale)));
    if (Number.isFinite(scale) && scale !== dockSettings.magnificationScale) {
      dockSettings.magnificationScale = scale;
      changed.add("magnificationScale");
    }
  }
  if (Object.hasOwn(patch, "position")) {
    const position = ["left", "bottom", "right"].includes(patch.position) ? patch.position : "bottom";
    if (position !== dockSettings.position) {
      dockSettings.position = position;
      changed.add("position");
    }
  }
  if (Object.hasOwn(patch, "minimizeEffect")) {
    const minimizeEffect = patch.minimizeEffect === "genie" ? "genie" : "scale";
    if (minimizeEffect !== dockSettings.minimizeEffect) {
      dockSettings.minimizeEffect = minimizeEffect;
      changed.add("minimizeEffect");
    }
  }

  if (changed.has("size")) applyDockSize(dockSettings.size);
  if (changed.has("position")) applyDockPosition(dockSettings.position, false, { adjustDesktopLayout: true });
  if (changed.has("magnificationEnabled") || changed.has("magnificationScale")) {
    dock.classList.toggle("magnification-active", dockSettings.magnificationEnabled);
    dockLayout = null;
    if (!dockSettings.magnificationEnabled) resetDock(true);
    else if (dockPointerInside && !dockFrame) {
      dockFrame = requestAnimationFrame(() => {
        dockFrame = 0;
        renderDockMagnification();
      });
    }
    scheduleDockFitUpdate();
  }

  if (persist) {
    Object.keys(patch).forEach(key => {
      if (!(key in DOCK_SETTINGS_STORAGE)) return;
      const value = key === "size" || key === "magnificationScale"
        ? dockSettings[key].toFixed(2)
        : dockSettings[key];
      persistDockSetting(key, value);
    });
  }
  if (syncControls) syncDockSettingsControls();
}

dockMagnificationRange.addEventListener("input", () => {
  const scale = Number(dockMagnificationRange.value) / 100;
  updateDockSettings({
    magnificationEnabled: scale > 1,
    magnificationScale: Math.max(1, Math.min(DOCK_MOTION.maxScale, scale))
  });
});

dockPositionSelect.addEventListener("change", () => updateDockSettings({ position: dockPositionSelect.value }));
dockPositionTrigger.addEventListener("click", () => {
  if (dockPositionMenu.hidden) openDockPositionPopup();
  else closeDockPositionPopup({ returnFocus: true });
});
dockPositionOptions.forEach(option => {
  option.addEventListener("click", () => {
    dockPositionSelect.value = option.dataset.position;
    dockPositionSelect.dispatchEvent(new Event("change", { bubbles: true }));
    closeDockPositionPopup({ returnFocus: true });
  });
});
dockPositionMenu.addEventListener("keydown", event => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    moveDockPositionFocus(event.key === "ArrowDown" ? 1 : -1);
  } else if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    dockPositionOptions[event.key === "Home" ? 0 : dockPositionOptions.length - 1].focus({ preventScroll: true });
  } else if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeDockPositionPopup({ returnFocus: true });
  }
});
document.addEventListener("pointerdown", event => {
  if (!dockPositionMenu.hidden && !dockPositionControl.contains(event.target)) closeDockPositionPopup();
});

applyDockPosition(dockSettings.position, false, { adjustDesktopLayout: false });
syncDockSettingsControls();

function cacheDockLayout() {
  const vertical = dockSettings.position !== "bottom";
  const centerWithinTrack = node => {
    let offset = (vertical ? node.offsetHeight : node.offsetWidth) / 2;
    let current = node;
    while (current && current !== dockTrack) {
      offset += vertical ? current.offsetTop : current.offsetLeft;
      current = current.offsetParent;
    }
    return offset;
  };
  const items = [...dockTrack.querySelectorAll(":scope > .dock-group > .dock-slot")].map(slot => {
    const item = slot.querySelector(":scope > .dock-item");
    return {
      item,
      slot,
      center: centerWithinTrack(slot),
      size: vertical ? slot.offsetHeight : slot.offsetWidth,
      visualSize: vertical ? item.offsetWidth : item.offsetHeight
    };
  });
  const trackRect = dockTrack.getBoundingClientRect();
  dockLayout = {
    items,
    vertical,
    trackStart: vertical ? trackRect.top : trackRect.left
  };
  return dockLayout;
}

function clearDockLabel() {
  clearTimeout(labelTimer);
  labelTimer = 0;
  clearTimeout(labelExitTimer);
  labelExitTimer = 0;
  closestLabelItem = null;
  dock.querySelectorAll(".dock-item.label-visible").forEach(item => item.classList.remove("label-visible"));
  dock.querySelectorAll(".dock-item").forEach(item => {
    item.style.setProperty("--dock-label-shift", "0px");
  });
  dockFloatingLabel.classList.remove("visible");
  dockFloatingLabel.style.setProperty("--dock-label-shift", "0px");
  visibleLabelItem = null;
}

function scheduleDockLabelClear() {
  clearTimeout(labelExitTimer);
  labelExitTimer = setTimeout(() => {
    labelExitTimer = 0;
    if (!dockPointerInside) clearDockLabel();
  }, DOCK_MOTION.labelExitDelay);
}

function positionDockLabel(item) {
  if (!item?.dataset.label) return;
  const itemRect = item.getBoundingClientRect();
  const dockRect = dock.getBoundingClientRect();
  const iconExtra = item.classList.contains("minimized-window-preview")
    ? 0
    : parseFloat(getComputedStyle(item).getPropertyValue("--dock-icon-extra")) || 0;
  dockFloatingLabel.classList.remove("side");
  const tooltipOffset = parseFloat(getComputedStyle(dock).getPropertyValue("--dock-tooltip-offset"));
  if (dockSettings.position === "bottom") {
    dockFloatingLabel.style.top = "auto";
    dockFloatingLabel.style.left = `${(itemRect.left + itemRect.width / 2 - dockRect.left).toFixed(2)}px`;
    dockFloatingLabel.style.bottom = `${(dockRect.bottom - itemRect.top + iconExtra + tooltipOffset).toFixed(2)}px`;
  } else {
    const labelWidth = dockFloatingLabel.offsetWidth;
    dockFloatingLabel.classList.add("side");
    dockFloatingLabel.style.bottom = "auto";
    dockFloatingLabel.style.top = `${(itemRect.top + itemRect.height / 2 - dockRect.top - dockFloatingLabel.offsetHeight / 2).toFixed(2)}px`;
    dockFloatingLabel.style.left = `${(
      dockSettings.position === "left"
        ? dockRect.width + tooltipOffset + labelWidth / 2
        : -tooltipOffset - labelWidth / 2
    ).toFixed(2)}px`;
  }
  dockFloatingLabel.style.setProperty("--dock-label-shift", "0px");
  dockFloatingLabel.classList.add("visible");
  const rect = dockFloatingLabel.getBoundingClientRect();
  const shift = rect.left < 8 ? 8 - rect.left : rect.right > innerWidth - 8 ? innerWidth - 8 - rect.right : 0;
  dockFloatingLabel.style.setProperty("--dock-label-shift", `${shift.toFixed(2)}px`);
}

function keepDockLabelInViewport(item) {
  if (!item?.dataset.label) return;
  dockFloatingLabelText.textContent = item.dataset.label;
  updateDockTooltipShape();
  positionDockLabel(item);
}

function queueDockLabel(item) {
  if (document.body.classList.contains("window-dock-transition-active")) {
    clearDockLabel();
    return;
  }
  if (!item?.dataset.label) {
    clearDockLabel();
    return;
  }
  clearTimeout(labelExitTimer);
  labelExitTimer = 0;
  if (closestLabelItem === item && (labelTimer || visibleLabelItem === item)) return;
  clearTimeout(labelTimer);
  labelTimer = 0;
  const hadVisibleLabel = !!visibleLabelItem;
  closestLabelItem = item;
  labelTimer = setTimeout(() => {
    labelTimer = 0;
    if (!dockPointerInside || closestLabelItem !== item || !item.isConnected) return;
    dock.querySelectorAll(".dock-item.label-visible").forEach(other => {
      if (other !== item) other.classList.remove("label-visible");
    });
    item.classList.add("label-visible");
    visibleLabelItem = item;
    keepDockLabelInViewport(item);
  }, hadVisibleLabel ? DOCK_MOTION.switchLabelDelay : DOCK_MOTION.initialLabelDelay);
}

function resetDock(animate = true, { clearLabel = true } = {}) {
  cancelAnimationFrame(dockFrame);
  dockFrame = 0;
  clearTimeout(resetTimer);
  if (clearLabel) clearDockLabel();
  dock.classList.remove("is-magnifying");
  dock.style.setProperty("--dock-specular-x", "50%");
  dock.style.setProperty("--dock-specular-y", "0%");
  dock.classList.toggle("resetting", animate && !prefersReducedMotion.matches);
  dock.querySelectorAll(".dock-slot").forEach(slot => {
    dockAnimationValues.delete(slot);
    slot.style.setProperty("--dock-scale", "1");
    slot.style.setProperty("--dock-slot-extra", "0px");
    slot.style.setProperty("--dock-x", "0px");
    slot.style.setProperty("--dock-y", "0px");
    slot.style.setProperty("--dock-icon-extra", "0px");
  });
  dock.querySelectorAll(".dock-item").forEach(item => {
    item.style.setProperty("--dock-press", "1");
    item.classList.remove("pressed");
  });
  resetTimer = setTimeout(() => {
    dock.classList.remove("resetting");
    dockLayout = null;
  }, animate ? DOCK_MOTION.resetDuration : 0);
}

function renderDockMagnification() {
  if (
    document.body.classList.contains("window-dock-transition-active") ||
    dockResize ||
    !dockSettings.magnificationEnabled ||
    !supportsFinePointer.matches ||
    prefersReducedMotion.matches
  ) return;
  const layout = dockLayout || cacheDockLayout();
  const renderedDockSize = dockSettings.effectiveSize || dockSettings.size;
  const influenceRadius = getDockMagnificationRadius(renderedDockSize);
  const data = layout.items.map(entry => {
    const distance = Math.abs(dockPointerCoordinate - (layout.trackStart + entry.center));
    const influence = getDockMagnificationInfluence(distance, influenceRadius);
    const scale = 1 + influence * (dockSettings.magnificationScale - 1);
    return {
      ...entry,
      distance,
      influence,
      scale,
      extraSize: entry.size * (scale - 1),
      visualExtraSize: entry.visualSize * (scale - 1)
    };
  });

  let needsAnotherFrame = false;
  let peakInfluence = 0;
  data.forEach(entry => {
    const current = dockAnimationValues.get(entry.slot) || {
      scale: 1,
      extraSize: 0,
      visualExtraSize: 0
    };
    const scale = current.scale + (entry.scale - current.scale) * DOCK_MOTION.trackingInterpolation;
    const extraSize = current.extraSize + (entry.extraSize - current.extraSize) * DOCK_MOTION.trackingInterpolation;
    const visualExtraSize = current.visualExtraSize + (entry.visualExtraSize - current.visualExtraSize) * DOCK_MOTION.trackingInterpolation;
    if (
      Math.abs(entry.scale - scale) > DOCK_MOTION.settleEpsilon ||
      Math.abs(entry.extraSize - extraSize) > DOCK_MOTION.settleEpsilon
    ) needsAnotherFrame = true;
    peakInfluence = Math.max(peakInfluence, entry.influence);
    dockAnimationValues.set(entry.slot, { scale, extraSize, visualExtraSize });
    entry.slot.style.setProperty("--dock-scale", scale.toFixed(4));
    entry.slot.style.setProperty("--dock-slot-extra", `${extraSize.toFixed(2)}px`);
    entry.slot.style.setProperty("--dock-x", "0px");
    entry.slot.style.setProperty("--dock-y", "0px");
    entry.slot.style.setProperty("--dock-icon-extra", `${visualExtraSize.toFixed(2)}px`);
  });

  dock.classList.toggle("is-magnifying", peakInfluence > .01);

  const nearest = data.reduce((best, entry) => !best || entry.distance < best.distance ? entry : best, null);
  if (nearest) {
    if (visibleLabelItem === nearest.item) positionDockLabel(nearest.item);
    else queueDockLabel(nearest.item);
  }
  if (needsAnotherFrame && dockPointerInside && !dockFrame) {
    dockFrame = requestAnimationFrame(() => {
      dockFrame = 0;
      renderDockMagnification();
    });
  }
}

function beginDockIconDrag(event) {
  const drag = dockIconDrag;
  if (!drag || drag.dragging) return;
  resetDock(false);
  releaseDockPress();
  clearDockLabel();
  const slotRect = drag.slot.getBoundingClientRect();
  const groupRect = drag.group.getBoundingClientRect();
  drag.vertical = dockSettings.position !== "bottom";
  drag.dragging = true;
  drag.dragStartCoordinate = drag.vertical ? event.clientY : event.clientX;
  drag.dragStartCenter = drag.vertical
    ? slotRect.top + slotRect.height / 2
    : slotRect.left + slotRect.width / 2;
  drag.startRect = slotRect;
  dockInteractionMode = "reordering";
  drag.placeholder = document.createElement("div");
  drag.placeholder.className = "dock-placeholder";
  drag.group.insertBefore(drag.placeholder, drag.slot);
  drag.slot.style.setProperty("--dock-drag-left", `${(slotRect.left - groupRect.left).toFixed(2)}px`);
  drag.slot.style.setProperty("--dock-drag-top", `${(slotRect.top - groupRect.top).toFixed(2)}px`);
  drag.slot.style.setProperty("--dock-drag-x", "0px");
  drag.slot.style.setProperty("--dock-drag-y", "0px");
  clearTimeout(dockFlipTimers.get(drag.slot));
  drag.slot.classList.remove("reorder-shifting", "drop-settling");
  drag.slot.classList.add("dragging");
  drag.slot.setAttribute("aria-grabbed", "true");
  drag.slot.setPointerCapture(event.pointerId);
  dock.classList.add("reordering");
  settings.hidden = true;
  settingsButton.setAttribute("aria-expanded", "false");
  event.preventDefault();
}

function updateDockPlaceholder(pointerCoordinate) {
  const drag = dockIconDrag;
  if (!drag?.dragging) return;
  const candidates = [...drag.group.children].filter(node =>
    node.classList.contains("dock-slot") && node !== drag.slot
  );
  const groupRect = drag.group.getBoundingClientRect();
  const groupStart = drag.vertical ? groupRect.top : groupRect.left;
  let destination = candidates.length;
  for (let index = 0; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    const center = drag.vertical
      ? groupStart + candidate.offsetTop + candidate.offsetHeight / 2
      : groupStart + candidate.offsetLeft + candidate.offsetWidth / 2;
    if (pointerCoordinate < center) {
      destination = index;
      break;
    }
  }
  const flowOrder = [...drag.group.children].filter(node =>
    node === drag.placeholder || (node.classList.contains("dock-slot") && node !== drag.slot)
  );
  if (flowOrder.indexOf(drag.placeholder) === destination) return;
  animateDockReflow(drag.group, () => {
    drag.group.insertBefore(drag.placeholder, candidates[destination] || null);
  });
}

function moveDockIconDrag(event) {
  const drag = dockIconDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  drag.currentX = event.clientX;
  const deltaX = event.clientX - drag.startX;
  const deltaY = event.clientY - drag.startY;
  const vertical = dockSettings.position !== "bottom";
  const primaryDelta = vertical ? deltaY : deltaX;
  const crossDelta = vertical ? deltaX : deltaY;
  if (!drag.dragging && Math.abs(primaryDelta) >= DOCK_REORDER.movementThreshold && Math.abs(primaryDelta) >= Math.abs(crossDelta)) {
    beginDockIconDrag(event);
  } else if (!drag.dragging && Math.abs(crossDelta) >= DOCK_REORDER.movementThreshold && Math.abs(crossDelta) > Math.abs(primaryDelta)) {
    dockIconDrag = null;
    return;
  }
  if (!drag.dragging) return;
  event.preventDefault();
  const groupRect = drag.group.getBoundingClientRect();
  const startCenter = drag.dragStartCenter;
  const currentCoordinate = drag.vertical ? event.clientY : event.clientX;
  const desiredCenter = startCenter + currentCoordinate - drag.dragStartCoordinate;
  const groupStart = drag.vertical ? groupRect.top : groupRect.left;
  const groupEnd = drag.vertical ? groupRect.bottom : groupRect.right;
  const clampedCenter = Math.min(
    groupEnd + dockSettings.size,
    Math.max(groupStart - dockSettings.size, desiredCenter)
  );
  drag.slot.style.setProperty(drag.vertical ? "--dock-drag-y" : "--dock-drag-x", `${(clampedCenter - startCenter).toFixed(2)}px`);
  updateDockPlaceholder(currentCoordinate);
}

function finishDockIconDrag(event) {
  const drag = dockIconDrag;
  if (!drag || (event.pointerId !== undefined && drag.pointerId !== event.pointerId)) return;
  dockIconDrag = null;
  if (drag.slot.hasPointerCapture?.(drag.pointerId)) drag.slot.releasePointerCapture(drag.pointerId);
  if (!drag.dragging) {
    dockInteractionMode = "idle";
    return;
  }
  event.preventDefault?.();
  const draggedRect = drag.slot.getBoundingClientRect();
  drag.group.insertBefore(drag.slot, drag.placeholder);
  drag.placeholder.remove();
  drag.slot.classList.remove("dragging");
  drag.slot.style.removeProperty("--dock-drag-left");
  drag.slot.style.removeProperty("--dock-drag-top");
  drag.slot.style.removeProperty("--dock-drag-x");
  drag.slot.style.removeProperty("--dock-drag-y");
  drag.slot.setAttribute("aria-grabbed", "false");
  dock.classList.remove("reordering");
  const finalRect = drag.slot.getBoundingClientRect();
  const settle = drag.vertical ? draggedRect.top - finalRect.top : draggedRect.left - finalRect.left;
  const settleProperty = drag.vertical ? "--dock-reorder-y" : "--dock-reorder-x";
  drag.slot.style.setProperty(settleProperty, `${settle.toFixed(2)}px`);
  if (!prefersReducedMotion.matches && Math.abs(settle) > .5) {
    void dockTrack.offsetWidth;
    drag.slot.classList.add("drop-settling");
    drag.slot.style.setProperty(settleProperty, "0px");
    setTimeout(() => drag.slot.classList.remove("drop-settling"), 140);
  } else {
    drag.slot.style.setProperty(settleProperty, "0px");
  }
  suppressDockClick = true;
  setTimeout(() => { suppressDockClick = false; }, 250);
  saveDockOrder();
  dockLayout = null;
  dockPointerInside = false;
  dockInteractionMode = "idle";
}

dockTrack.addEventListener("pointerdown", event => {
  if (dockResize || dockIconDrag || event.button !== 0 || event.target.closest(".settings-panel")) return;
  const item = event.target.closest(".dock-item");
  const slot = item?.closest(".dock-slot");
  const group = slot?.closest(".dock-group");
  if (!item || !slot || !group) return;
  if (slot.dataset.dockTemporary === "true") return;
  dockIconDrag = {
    pointerId: event.pointerId,
    slot,
    item,
    group,
    startX: event.clientX,
    startY: event.clientY,
    currentX: event.clientX,
    startRect: slot.getBoundingClientRect(),
    originIndex: [...group.querySelectorAll(":scope > .dock-slot")].indexOf(slot),
    dragging: false,
    placeholder: null
  };
});
addEventListener("pointermove", moveDockIconDrag);
addEventListener("pointerup", finishDockIconDrag);
addEventListener("pointercancel", finishDockIconDrag);
dockTrack.addEventListener("lostpointercapture", finishDockIconDrag);
dockTrack.addEventListener("dragstart", event => event.preventDefault());
dockTrack.addEventListener("focusin", event => {
  if (document.body.classList.contains("window-dock-transition-active")) return;
  const item = event.target.closest(".dock-item[data-label]");
  if (!item) return;
  clearDockLabel();
  dockPointerInside = true;
  closestLabelItem = item;
  visibleLabelItem = item;
  item.classList.add("label-visible");
  keepDockLabelInViewport(item);
});
dockTrack.addEventListener("focusout", event => {
  if (!dockTrack.contains(event.relatedTarget)) {
    dockPointerInside = false;
    clearDockLabel();
  }
});
dock.addEventListener("click", event => {
  if (!suppressDockClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressDockClick = false;
}, true);

dockTrack.addEventListener("keydown", event => {
  const vertical = dockSettings.position !== "bottom";
  const previousKey = vertical ? "ArrowUp" : "ArrowLeft";
  const nextKey = vertical ? "ArrowDown" : "ArrowRight";
  if (!event.altKey || ![previousKey, nextKey].includes(event.key)) return;
  const item = event.target.closest(".dock-item");
  const slot = item?.closest(".dock-slot");
  const group = slot?.closest(".dock-group");
  if (!item || !slot || !group) return;
  const slots = [...group.querySelectorAll(":scope > .dock-slot")];
  const currentIndex = slots.indexOf(slot);
  const nextIndex = currentIndex + (event.key === nextKey ? 1 : -1);
  if (nextIndex < 0 || nextIndex >= slots.length) return;
  event.preventDefault();
  resetDock(false);
  dockPointerInside = false;
  animateDockReflow(group, () => {
    if (event.key === previousKey) group.insertBefore(slot, slots[nextIndex]);
    else group.insertBefore(slot, slots[nextIndex].nextSibling);
  });
  saveDockOrder();
  dockLayout = null;
  item.focus();
  const label = item.dataset.label || item.getAttribute("aria-label") || "Dock item";
  dockReorderStatus.textContent = `${label} moved to position ${nextIndex + 1} of ${slots.length}.`;
});

function finishDockResize(event) {
  if (
    !dockResize ||
    dockResize.finishing ||
    (event.pointerId !== undefined && event.pointerId !== dockResize.pointerId)
  ) return;
  dockResize.finishing = true;
  cancelAnimationFrame(dockResizeFrame);
  dockResizeFrame = 0;
  const finalSize = Math.round(dockResize.pendingSize * 10) / 10;
  if (dockResize.handle.hasPointerCapture?.(dockResize.pointerId)) {
    dockResize.handle.releasePointerCapture(dockResize.pointerId);
  }
  if (dockResize.wasDragged) {
    suppressDockClick = true;
    setTimeout(() => { suppressDockClick = false; }, 0);
  }
  document.body.classList.remove("dock-resize-active");
  applyDockSize(finalSize, false, {
    refreshLayout: false,
    refreshPreviews: true
  });
  persistDockSetting("size", finalSize.toFixed(2));
  syncDockSettingsControls();
  scheduleMinimizedPreviewRefresh({ rerender: true });
  const completedResize = dockResize;
  dockResizeCommitFrame = requestAnimationFrame(() => {
    dockResizeCommitFrame = requestAnimationFrame(() => {
      dockResizeCommitFrame = 0;
      dockLayout = null;
      cacheDockLayout();
      dockResize = null;
      dock.classList.remove("resizing", "resetting", "resize-settling");
      const dockRect = dock.getBoundingClientRect();
      dockPointerInside = completedResize.latestX >= dockRect.left &&
        completedResize.latestX <= dockRect.right &&
        completedResize.latestY >= dockRect.top &&
        completedResize.latestY <= dockRect.bottom;
      dockPointerCoordinate = dockSettings.position === "bottom"
        ? completedResize.latestX
        : completedResize.latestY;
      dockInteractionMode = dockPointerInside && dockSettings.magnificationEnabled
        ? "hovering"
        : "idle";
      if (dockInteractionMode === "hovering" && !dockFrame) {
        dockFrame = requestAnimationFrame(() => {
          dockFrame = 0;
          renderDockMagnification();
        });
      }
    });
  });
}

dockResizeHandles.forEach(handle => {
  handle.addEventListener("pointerdown", event => {
    if (!supportsFinePointer.matches || mobileViewport.matches || event.button !== 0 || dockIconDrag) return;
    event.preventDefault();
    event.stopPropagation();
    clearDockLabel();
    resetDock(false);
    clearTimeout(resetTimer);
    resetTimer = 0;
    cancelAnimationFrame(dockResizeCommitFrame);
    dockResizeCommitFrame = 0;
    cancelAnimationFrame(dockLayoutRefreshFrame);
    dockLayoutRefreshFrame = 0;
    cancelAnimationFrame(minimizedPreviewResizeFrame);
    minimizedPreviewResizeFrame = 0;
    minimizedPreviewNeedsRerender = false;
    dockLayout = null;
    dockPointerInside = false;
    const effectiveMaximum = calculateEffectiveDockSize(DOCK_SIZE.maximum);
    const resizeStartSize = Math.min(dockSettings.size, effectiveMaximum);
    dockResize = {
      handle,
      pointerId: event.pointerId,
      behavior: getDockResizeBehavior(),
      startX: event.clientX,
      startY: event.clientY,
      latestX: event.clientX,
      latestY: event.clientY,
      startSize: resizeStartSize,
      pendingSize: resizeStartSize,
      effectiveMaximum,
      wasDragged: false,
      finishing: false
    };
    handle.setPointerCapture(event.pointerId);
    dock.classList.remove("resize-settling", "resetting");
    dock.classList.add("resizing");
    document.body.classList.add("dock-resize-active");
    dockInteractionMode = "resizing";
  });

  handle.addEventListener("pointermove", event => {
    if (!dockResize || dockResize.handle !== handle || dockResize.pointerId !== event.pointerId) return;
    event.preventDefault();
    event.stopPropagation();
    const deltaX = event.clientX - dockResize.startX;
    const deltaY = event.clientY - dockResize.startY;
    dockResize.latestX = event.clientX;
    dockResize.latestY = event.clientY;
    if (Math.hypot(deltaX, deltaY) > 3) dockResize.wasDragged = true;
    const sizeDelta = dockResize.behavior.pointerDelta(deltaX, deltaY);
    const nextSize = dockResize.startSize + sizeDelta / DOCK_SIZE.pixelsPerStep;
    dockResize.pendingSize = Math.min(DOCK_SIZE.maximum, Math.max(DOCK_SIZE.minimum, nextSize));
    if (dockResizeFrame) return;
    dockResizeFrame = requestAnimationFrame(() => {
      dockResizeFrame = 0;
      if (!dockResize || dockResize.finishing) return;
      applyDockSize(dockResize.pendingSize, false, {
        refreshLayout: false,
        refreshPreviews: true,
        effectiveMaximum: dockResize.effectiveMaximum
      });
    });
  });
  handle.addEventListener("pointerup", finishDockResize);
  handle.addEventListener("pointercancel", finishDockResize);
  handle.addEventListener("lostpointercapture", finishDockResize);
  handle.addEventListener("keydown", event => {
    const resizeBehavior = getDockResizeBehavior();
    if (mobileViewport.matches || ![resizeBehavior.increaseKey, resizeBehavior.decreaseKey, "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextSize =
      event.key === "Home" ? DOCK_SIZE.minimum :
      event.key === "End" ? DOCK_SIZE.maximum :
      dockSettings.size + (event.key === resizeBehavior.increaseKey ? 1 : -1);
    dock.classList.add("resize-settling");
    updateDockSettings({ size: nextSize });
    scheduleMinimizedPreviewRefresh({ rerender: true });
    setTimeout(() => {
      dock.classList.remove("resize-settling");
      scheduleMinimizedPreviewRefresh({ rerender: true });
    }, 120);
  });
});

dock.addEventListener("pointermove", event => {
  if (document.body.classList.contains("window-dock-transition-active")) {
    clearDockLabel();
    return;
  }
  if (dockResize || dockIconDrag?.dragging) return;
  if (!supportsFinePointer.matches || event.target.closest(".settings-panel")) {
    clearDockLabel();
    return;
  }
  clearTimeout(labelExitTimer);
  labelExitTimer = 0;
  dockPointerInside = true;
  dockInteractionMode = dockSettings.magnificationEnabled ? "hovering" : "idle";
  dockPointerCoordinate = dockSettings.position === "bottom" ? event.clientX : event.clientY;
  const dockRect = dock.getBoundingClientRect();
  const highlightX = Math.max(0, Math.min(100, (event.clientX - dockRect.left) / Math.max(1, dockRect.width) * 100));
  const highlightY = Math.max(0, Math.min(100, (event.clientY - dockRect.top) / Math.max(1, dockRect.height) * 100));
  dock.style.setProperty("--dock-specular-x", `${highlightX.toFixed(2)}%`);
  dock.style.setProperty("--dock-specular-y", `${highlightY.toFixed(2)}%`);
  if (!dockSettings.magnificationEnabled || prefersReducedMotion.matches) {
    const nearest = [...dock.querySelectorAll(".dock-item[data-label]")].reduce((best, item) => {
      const rect = item.getBoundingClientRect();
      const center = dockSettings.position === "bottom"
        ? rect.left + rect.width / 2
        : rect.top + rect.height / 2;
      const distance = Math.abs(dockPointerCoordinate - center);
      return !best || distance < best.distance ? { item, distance } : best;
    }, null);
    if (nearest) queueDockLabel(nearest.item);
    return;
  }
  clearTimeout(resetTimer);
  dock.classList.remove("resetting");
  if (!dockFrame) {
    dockFrame = requestAnimationFrame(() => {
      dockFrame = 0;
      renderDockMagnification();
    });
  }
});
dock.addEventListener("pointerleave", () => {
  if (dockInteractionMode === "reordering" || dockInteractionMode === "resizing") return;
  dockPointerInside = false;
  scheduleDockLabelClear();
  if (dockSettings.magnificationEnabled) resetDock(true, { clearLabel: false });
  dockInteractionMode = "idle";
});
dock.addEventListener("pointerdown", event => {
  if (!dockSettings.magnificationEnabled || !supportsFinePointer.matches) return;
  const item = event.target.closest(".dock-item");
  if (!item) return;
  item.classList.add("pressed");
  item.style.setProperty("--dock-press", String(DOCK_MOTION.pressScale));
});
const releaseDockPress = () => {
  dock.querySelectorAll(".dock-item.pressed").forEach(item => {
    item.classList.remove("pressed");
    item.style.setProperty("--dock-press", "1");
  });
};
addEventListener("pointerup", releaseDockPress);
addEventListener("pointercancel", releaseDockPress);
let viewportResizeFrame = 0;
addEventListener("resize", () => {
  if (viewportResizeFrame) return;
  viewportResizeFrame = requestAnimationFrame(() => {
    viewportResizeFrame = 0;
    if (activeCollectionFilter === ALL_WORK_FILTER) updateCuratedDesktopPositions();
    else setFilteredGridPositions(projects.filter(project => projectMatchesCollection(project, activeCollectionFilter)));
    updateDockUsableGeometry();
    dockLayout = null;
    if (dockSettings.magnificationEnabled) resetDock(false);
    scheduleDockFitUpdate();
  });
}, { passive: true });
new MutationObserver(() => {
  dockLayout = null;
  installDockLabels();
  scheduleDockFitUpdate();
}).observe(dockTrack, { childList: true, subtree: true });

if (typeof ResizeObserver === "function") {
  new ResizeObserver(() => {
    if (dockSettings.position !== "bottom" && dockInteractionMode !== "resizing") {
      scheduleDockFitUpdate();
    }
  }).observe(dockTrack);
  if (systemBar) {
    new ResizeObserver(() => {
      updateDockUsableGeometry();
      if (dockSettings.position !== "bottom") scheduleDockFitUpdate();
    }).observe(systemBar);
  }
}
