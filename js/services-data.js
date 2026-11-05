/*
 * Services app content.
 *
 * Edit the copy here — the Services window (desktop) and the Services screen
 * (mobile) are both generated from this file. It is a plain script, not JSON,
 * so it also works when index.html is opened straight from disk.
 */
const SERVICES_APP = {
  id: "services",
  number: "SV",
  title: "Services",
  colors: ["#0a84ff", "#64d2ff"]
};

const SERVICES_INTRO = {
  kicker: "Services",
  title: "Design the product. Build the interface.",
  lede: "I work across product design and UI development. Depending on the project, I can help you understand the problem, map the flows, design the screens and build the interface. I agree the scope with you before the work starts.",
  problems: [
    "You know what is not working, but need help deciding what to build.",
    "The design is ready; you need someone to build and check the interface.",
    "You need a website or product that makes the next step clear for customers."
  ]
};

const SERVICE_GROUPS = [
  {
    letter: "A",
    kicker: "Product & UX/UI/CX Design",
    title: "Work out what to build.",
    blurb: "I start with the task, the people using the product and the limits the team is working within. From there, I can map the flows, test an idea and design the interface.",
    items: [
      {
        title: "Product Design",
        copy: "Research, information architecture, wireframes, prototypes and interface design, with development constraints considered along the way.",
        tags: ["UX Research", "UI Design", "Prototyping"]
      },
      {
        title: "Product Strategy",
        copy: "Turn a broad brief into user needs, priorities and a clear next step before the team commits to a build.",
        tags: ["Roadmap", "Prioritisation", "Discovery"]
      },
      {
        title: "Emerging-Market & Multilingual UX",
        copy: "Plan for language, connectivity and different levels of digital experience. I work with evidence from the people who will use the product, not assumptions about them.",
        tags: ["Localisation", "Offline-first", "Inclusive UX"]
      }
    ],
    quote: "Start with the task people need to complete. The screen comes after that.",
    quoteSource: "How I work"
  },
  {
    letter: "B",
    kicker: "UI Development",
    title: "Bring the design into the product.",
    blurb: "I build interfaces in React, Angular and Ionic. I work through the states, content and accessibility needs as the UI takes shape, so the finished build can be checked against the design.",
    items: [
      {
        title: "Design Systems in Code",
        copy: "Reusable tokens, components and documentation that connect the design library to the codebase.",
        tags: ["Tokens", "Component library", "Storybook"]
      },
      {
        title: "Production UI Builds",
        copy: "React, Angular and Ionic interfaces, built with accessibility in mind and checked through user acceptance testing.",
        tags: ["React", "Angular", "WCAG 2.2 AA"]
      },
      {
        title: "PWA & Product Build",
        copy: "Progressive web apps with install and offline support where the product needs it, designed for phones and unreliable connections.",
        tags: ["PWA", "Offline-first", "Performance"]
      }
    ],
    quote: "I can carry a design into the UI build and check how it behaves in the browser.",
    quoteSource: "How I work"
  },
  {
    letter: "C",
    kicker: "Web, Conversion & CRM",
    title: "Make the next step clear.",
    blurb: "I design and build websites that explain what a business offers and make it easier to enquire. Where needed, I can connect the site to a CRM so follow-up has an owner and a next step.",
    items: [
      {
        title: "Websites & Landing Pages",
        copy: "Clear page structure, mobile layouts and search-friendly content, shaped around what visitors need to know and do.",
        tags: ["Mobile-first", "SEO", "Landing pages"]
      },
      {
        title: "Website + CRM Setup",
        copy: "Forms, pipeline stages, ownership and follow-up reminders, connected to the website.",
        tags: ["CRM setup", "Lead capture", "Automation"]
      },
      {
        title: "Startup & SaaS Websites",
        copy: "Multi-page sites that explain the product, show how it works and give visitors a clear route to contact the team.",
        tags: ["Multi-page", "Product messaging", "Analytics"]
      }
    ],
    quote: "The website and the follow-up process can be planned as one piece of work.",
    quoteSource: "How I work"
  },
  {
    letter: "D",
    kicker: "Brand, Growth & Impact",
    title: "Brand work and products for real conditions.",
    blurb: "I help teams make their positioning and identity easier to use, and design products for people working with different languages, devices and levels of connectivity.",
    items: [
      {
        title: "Brand Strategy & Identity",
        copy: "Positioning, messaging and a visual system with practical guidelines your team can use across products and communications.",
        tags: ["Positioning", "Identity", "Guidelines"]
      },
      {
        title: "Financial Inclusion & MFI Consulting",
        copy: "Digital readiness reviews, product roadmaps and UX support for microfinance and impact organisations.",
        tags: ["Digital readiness", "Roadmap", "UX strategy"]
      },
      {
        title: "WhatsApp Ordering & Field Research",
        copy: "Ordering flows built around the channels customers already use, supported by interviews and observation in the field.",
        tags: ["WhatsApp catalogue", "Field interviews", "Research"]
      }
    ],
    quote: "Check how people already work before choosing the channel or designing the flow.",
    quoteSource: "How I work"
  }
];

const SERVICES_PROCESS = [
  {
    step: "01",
    title: "Talk about the problem",
    copy: "A short conversation about the users, what is not working and what you need from me."
  },
  {
    step: "02",
    title: "Agree the work",
    copy: "You and I decide what to research, design or build, what is out of scope and how I will review it."
  },
  {
    step: "03",
    title: "Work through it together",
    copy: "I share progress with your team, check the important flows and build the UI when development is part of the work."
  }
];

const SERVICES_TOOLBOX = {
  note: "The tools I use across research, design, development and testing. Motion is not a separate craft here — the animation tools sit next to the ones that build the interface, so what I design is what ships.",
  groups: [
    {
      id: "design",
      label: "Design, research & testing",
      tools: [
        { name: "Figma", role: "Design, systems and prototypes", icon: "./public/icons/dock/figma.svg", appId: "figma" },
        { name: "Photoshop", role: "Image editing and production assets", icon: "./public/icons/dock/photoshop.svg", appId: "photoshop" },
        { name: "Hotjar", role: "Heatmaps and session recordings", icon: "./public/icons/dock/hotjar.svg", appId: "hotjar" },
        { name: "Claude", role: "Research synthesis and coding support", icon: "./public/icons/dock/claude.svg", appId: "claude" }
      ]
    },
    {
      id: "build",
      label: "Build & handover",
      tools: [
        { name: "VS Code", role: "Front-end development", icon: "./public/icons/dock/vscode.svg", appId: "vscode" },
        { name: "React, Angular & Ionic", role: "Building product interfaces", icon: "./public/icons/dock/react.svg" },
        { name: "TypeScript", role: "Typed front-end code", icon: "./public/icons/dock/typescript.svg" },
        { name: "Storybook", role: "Documenting and checking components", icon: "./public/icons/dock/storybook.svg", appId: "storybook" },
        { name: "Postman", role: "Checking API responses", icon: "./public/icons/dock/postman.svg", appId: "postman" },
        { name: "GitHub", role: "Code, reviews and CI", icon: "./public/icons/dock/github.svg", appId: "github" },
        { name: "Azure DevOps", role: "Boards, pipelines and UAT", icon: "./public/icons/dock/azuredevops.svg?v=2", appId: "azuredevops" }
      ]
    },
    {
      id: "motion",
      label: "Motion that ships",
      note: "You do not need After Effects to ship UI motion. Four tools cover it: the design side, the interactive states, the React transitions and the scroll and SVG effects.",
      tools: [
        { name: "Figma Motion", role: "Keyframes, easing and springs inside the design file", icon: "./public/icons/dock/figma-motion.svg" },
        { name: "Rive", role: "Interactive state-machine motion that runs in the product", icon: "./public/icons/dock/rive.svg" },
        { name: "Motion", role: "React transitions, gestures and layout", icon: "./public/icons/dock/motion.svg" },
        { name: "GSAP", role: "Scroll, timeline and SVG effects", icon: "./public/icons/dock/gsap.svg" }
      ]
    }
  ]
};

const SERVICES_CTA = {
  title: "Not sure what you need yet?",
  copy: "Tell me what is working, what is not and what you are trying to change. A 30-minute call is enough to decide whether I can help and what a sensible next step looks like.",
  callHref: "https://calendly.com/lulamile_m/meet-lulamile",
  callLabel: "Book a free call",
  mailHref: "mailto:mkhungela.l@gmail.com",
  mailLabel: "Send a message"
};
