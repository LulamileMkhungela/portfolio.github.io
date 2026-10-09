/*
 * Services app content.
 *
 * Edit the copy here — the Services window (desktop) and the Services screen
 * (mobile) are both generated from this file. It is a plain script, not JSON,
 * so it also works when index.html is opened straight from disk.
 * */
const SERVICES_APP = {
  id: "services",
  number: "SV",
  title: "Services",
  colors: ["#0a84ff", "#64d2ff"]
};

const SERVICES_INTRO = {
  kicker: "Services",
  title: "One person, two halves of the job.",
  lede: "I'm a devsigner: UX/UI and product design on one side, front-end development on the other. You get the thinking, the interface and the shipped build from the same person — no handover gap, no translation loss.",
  problems: [
    "I'm building a product and I need someone who can design it, shape it and ship it — not just make it look good.",
    "I have designs (or a Figma file) and I need them built properly, accessibly and on time.",
    "I'm building a brand or a business and I need design, strategy and growth thinking in one place."
  ]
};

const SERVICE_GROUPS = [
  {
    letter: "A",
    kicker: "Product & UX/UI Design",
    title: "From messy problem to working product.",
    blurb: "You have an idea, a brief, or a problem. I help you figure out what to build, design it properly, and make sure it can actually be built — because I'm the one who builds it.",
    items: [
      {
        title: "End-to-End Product Design",
        copy: "Research, information architecture, wireframes, prototypes and UI — turned into something shippable and user-tested.",
        tags: ["UX Research", "UI Design", "Prototyping"]
      },
      {
        title: "Product Strategy",
        copy: "Cuts through the noise to define what to build and why, before anyone commits a sprint to it.",
        tags: ["Roadmap", "Prioritisation", "Discovery"]
      },
      {
        title: "Emerging-Market & Multilingual UX",
        copy: "Design that holds up for low-literacy, low-connectivity, first-time digital users — not assumptions about them.",
        tags: ["Localisation", "Offline-first", "Inclusive UX"]
      }
    ],
    quote: "Lulamile came in, listened properly to how people actually use the app, and rebuilt the navigation around that.",
    quoteSource: "Employee Experience Lead · Vodacom"
  },
  {
    letter: "B",
    kicker: "Front-End Development",
    title: "The design, actually built.",
    blurb: "The other half of devsigner. Figma file to production code — components, states, motion, accessibility and the boring edge cases most handovers lose. VS Code is my front-end bestie; Figma is where it starts.",
    items: [
      {
        title: "Design System in Code",
        copy: "Tokens, components and documentation that stay in step with the Figma library instead of drifting from it.",
        tags: ["Tokens", "Component library", "Storybook"]
      },
      {
        title: "Production Front-End Builds",
        copy: "React, Angular and Ionic front ends built to WCAG 2.2 AA, tested through UAT, shipped to real users.",
        tags: ["React", "Angular", "WCAG 2.2 AA"]
      },
      {
        title: "PWA & Product Build",
        copy: "Installable, offline-first progressive web apps built for mid-range phones and patchy signal.",
        tags: ["PWA", "Offline-first", "Performance"]
      }
    ],
    quote: "Most product designers hand off to developers. I hand off to QA — the build is already done.",
    quoteSource: "How this actually works"
  },
  {
    letter: "C",
    kicker: "Web, Conversion & CRM",
    title: "A website that works as hard as you do.",
    blurb: "Fast, conversion-focused, designer-quality websites — with the pipeline behind them, so enquiries turn into conversations instead of sitting in an inbox.",
    items: [
      {
        title: "Conversion-Focused Sites & Landing Pages",
        copy: "Designed from the first scroll to earn trust and turn visitors into enquiries, with SEO built in rather than bolted on.",
        tags: ["CRO", "Mobile-first", "SEO-ready"]
      },
      {
        title: "Website + CRM Implementation",
        copy: "Lead capture, pipeline stages, ownership rules and follow-up automation behind the site.",
        tags: ["CRM setup", "Lead capture", "Automation"]
      },
      {
        title: "Startup & SaaS Marketing Sites",
        copy: "Multi-page sites that explain the value clearly, build trust fast and never feel like a template.",
        tags: ["Multi-page", "Brand-aligned", "Analytics-ready"]
      }
    ],
    quote: "We had the work, we just could not present it. Proposals stopped being a scramble and enquiries started arriving with context.",
    quoteSource: "Founder · AddmoreDigital"
  },
  {
    letter: "D",
    kicker: "Brand, Growth & Impact",
    title: "Designing for the people most products forget.",
    blurb: "Positioning and identity that carry a clear strategy — and product work for low-income, first-time digital users, where adoption is the only metric that counts.",
    items: [
      {
        title: "Brand Strategy & Identity",
        copy: "Positioning, messaging and a visual system your team can apply without a designer standing next to them.",
        tags: ["Positioning", "Identity", "Guidelines"]
      },
      {
        title: "Financial Inclusion & MFI Consulting",
        copy: "Digital readiness, product roadmaps and UX strategy for microfinance and impact organisations.",
        tags: ["Digital readiness", "Roadmap", "UX strategy"]
      },
      {
        title: "WhatsApp Ordering & Field Research",
        copy: "Ordering where customers already are, plus on-the-ground interviews and synthesis secondary research can't replace.",
        tags: ["WhatsApp catalogue", "Field interviews", "Personas"]
      }
    ],
    quote: "Orders used to come through messages all day. Now customers order themselves, reorder in a tap, and I change the menu from my phone.",
    quoteSource: "Owner · FoodieZone"
  }
];

const SERVICES_PROCESS = [
  {
    step: "01",
    title: "Tell me what you're building",
    copy: "No brief required. A conversation about where you are and what isn't working."
  },
  {
    step: "02",
    title: "I map what's needed",
    copy: "Research, design, build — or all three. No bloated proposals, no wasted time."
  },
  {
    step: "03",
    title: "We build and ship",
    copy: "Iteratively, with your team in the loop, and the front end written as we go."
  }
];

const SERVICES_TOOLBOX = {
  note: "Not a skills wall. These are the ones actually open on a working day, from research through to release.",
  tools: [
    { name: "Figma", role: "Design, systems, prototypes" },
    { name: "Photoshop", role: "Retouching and production assets" },
    { name: "Hotjar", role: "Heatmaps and session recordings" },
    { name: "VS Code", role: "Where the build happens" },
    { name: "React, Angular & Ionic", role: "Production front ends" },
    { name: "TypeScript", role: "Keeps the build honest" },
    { name: "Storybook", role: "Components documented and testable" },
    { name: "Postman", role: "API responses before the UI" },
    { name: "GitHub", role: "Version control, reviews, CI" },
    { name: "Azure DevOps", role: "Boards, pipelines and UAT" },
    { name: "Claude", role: "Research synthesis and pair coding" }
  ]
};

const SERVICES_CTA = {
  title: "Not sure where to start? That's fine — most people aren't.",
  copy: "Tell me what you're building and we'll figure out the rest. A 30-minute call is usually enough to know where to begin.",
  callHref: "https://calendly.com/lulamile_m/meet-lulamile",
  callLabel: "Book a free call",
  mailHref: "mailto:mkhungela.l@gmail.com",
  mailLabel: "Send a message"
};
