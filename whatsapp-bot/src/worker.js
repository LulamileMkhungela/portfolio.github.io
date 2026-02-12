/**
 * LulaSync WhatsApp Cloud API auto-reply bot
 * Runtime: Cloudflare Workers
 *
 * Secrets (`wrangler secret put`):
 *   VERIFY_TOKEN       - webhook verify token you invent
 *   WHATSAPP_TOKEN     - Meta access token
 *   PHONE_NUMBER_ID    - WhatsApp Phone Number ID
 *   APP_SECRET         - optional Meta App Secret (X-Hub-Signature-256)
 *   OWNER_NOTIFY_NUMBER - optional E.164 without + (e.g. 27837195064)
 *                         receives lead alerts when briefs complete
 *
 * Vars: wrangler.toml
 */

const GRAPH_API = "https://graph.facebook.com/v21.0";
const sessions = new Map();
const seenIds = new Map(); // message id dedupe
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;
const DEDUPE_TTL_MS = 1000 * 60 * 30;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/health") {
      return json({
        ok: true,
        service: "lulasync-whatsapp-bot",
        business: env.BUSINESS_NAME || "LulaSync",
        configured: Boolean(env.WHATSAPP_TOKEN && env.PHONE_NUMBER_ID && env.VERIFY_TOKEN),
        time: new Date().toISOString(),
      });
    }

    if (url.pathname === "/webhook") {
      if (request.method === "GET") return verifyWebhook(url, env);
      if (request.method === "POST") return handleIncoming(request, env, ctx);
      return new Response("Method Not Allowed", { status: 405 });
    }

    return new Response("Not Found", { status: 404 });
  },
};

/* ───────────────────────── Webhook verify ───────────────────────── */

function verifyWebhook(url, env) {
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token && env.VERIFY_TOKEN && token === env.VERIFY_TOKEN) {
    return new Response(challenge || "", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return new Response("Forbidden", { status: 403 });
}

/* ───────────────────────── Incoming ───────────────────────── */

async function handleIncoming(request, env, ctx) {
  const raw = await request.text();
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  if (env.APP_SECRET) {
    const sig = request.headers.get("X-Hub-Signature-256") || "";
    const ok = await verifyMetaSignature(raw, sig, env.APP_SECRET);
    if (!ok) {
      console.error("Invalid webhook signature");
      return new Response("Invalid signature", { status: 401 });
    }
  }

  try {
    const messages = extractMessages(body);
    for (const msg of messages) {
      ctx.waitUntil(
        processMessage(msg, env).catch((e) => console.error("processMessage", e))
      );
    }
  } catch (err) {
    console.error("handleIncoming", err);
  }

  return new Response("EVENT_RECEIVED", { status: 200 });
}

function extractMessages(body) {
  const out = [];
  for (const entry of body?.entry || []) {
    for (const change of entry.changes || []) {
      const value = change.value || {};
      const contactName = value.contacts?.[0]?.profile?.name || "";
      for (const m of value.messages || []) {
        let interactive = "";
        if (m.type === "interactive") {
          interactive =
            m.interactive?.list_reply?.id ||
            m.interactive?.button_reply?.id ||
            m.interactive?.list_reply?.title ||
            m.interactive?.button_reply?.title ||
            "";
        }
        out.push({
          from: m.from,
          id: m.id,
          timestamp: m.timestamp,
          type: m.type,
          text: m.type === "text" ? (m.text?.body || "").trim() : "",
          button: m.type === "button" ? m.button?.payload || m.button?.text || "" : "",
          interactive,
          contactName,
        });
      }
    }
  }
  return out;
}

async function processMessage(msg, env) {
  if (!msg.from) return;
  if (msg.id && isDuplicate(msg.id)) return;

  await markAsRead(env, msg.id).catch(() => {});

  const input = normalizeInput(msg);
  if (!input) {
    await sendText(
      env,
      msg.from,
      "Please send a text message, or type *menu* for options."
    );
    await sendMainMenuInteractive(env, msg.from).catch(() => {});
    return;
  }

  const session = getSession(msg.from);
  // Always allow explicit menu escape mid-flow
  const lowerEarly = input.toLowerCase().trim();
  if (
    session.step !== "main" &&
    (lowerEarly === "menu" || lowerEarly === "0" || lowerEarly === "main")
  ) {
    session.step = "main";
    session.data = {};
  }
  const reply = await route(input, session, msg, env);
  await dispatchReplies(env, msg.from, reply);
  touchSession(msg.from, session);
}

function normalizeInput(msg) {
  return String(msg.interactive || msg.button || msg.text || "").trim();
}

async function dispatchReplies(env, to, reply) {
  if (!reply) return;
  const items = Array.isArray(reply) ? reply : [reply];
  for (const r of items) {
    if (!r) continue;
    if (typeof r === "string") {
      await sendText(env, to, r);
    } else if (r.type === "text") {
      await sendText(env, to, r.text);
    } else if (r.type === "buttons") {
      await sendButtons(env, to, r);
    } else if (r.type === "list") {
      await sendList(env, to, r);
    } else if (r.type === "main_menu") {
      await sendText(env, to, r.preface);
      await sendMainMenuInteractive(env, to);
    }
  }
}

/* ───────────────────────── Bot brain ───────────────────────── */

async function route(input, session, msg, env) {
  const name = env.BUSINESS_NAME || "LulaSync";
  const owner = env.OWNER_NAME || "Lulamile";
  const lower = input.toLowerCase().trim();

  // Multi-step flows FIRST — free-text answers must not hit keyword routing
  // (e.g. "WhatsApp booking" contains "book" and used to jump to handoff).
  if (session.step === "freelance_brief") {
    return freelanceBriefFlow(input, session, env, msg);
  }
  if (session.step === "hire_brief") {
    return hireBriefFlow(input, session, env, msg);
  }

  // Interactive IDs from list/buttons
  const idChoice = mapInteractiveId(lower) || mapChoice(lower);

  if (
    isMenu(lower) ||
    lower === "hi" ||
    lower === "hello" ||
    lower === "hola" ||
    lower === "hey" ||
    lower === "start" ||
    lower === "sawubona" ||
    lower === "howzit"
  ) {
    session.step = "main";
    session.data = {};
    return mainMenuPayload(env, msg.contactName);
  }

  if (lower === "help" || lower === "?") {
    return [helpText(env), { type: "main_menu", preface: "Open the menu:" }];
  }

  if (
    lower === "human" ||
    lower === "agent" ||
    lower === "speak to human" ||
    lower === "call" ||
    idChoice === "6" ||
    idChoice === "contact"
  ) {
    session.step = "main";
    return humanHandoff(env);
  }

  switch (idChoice) {
    case "1":
    case "pricing":
      return [
        pricingReply(env),
        {
          type: "buttons",
          body: "What next?",
          buttons: [
            { id: "4", title: "Get a quote" },
            { id: "6", title: "Speak to human" },
            { id: "menu", title: "Main menu" },
          ],
        },
      ];
    case "2":
    case "showcase":
    case "apps":
      return [
        showcaseReply(env),
        {
          type: "buttons",
          body: "Want one for your business?",
          buttons: [
            { id: "4", title: "Yes — quote me" },
            { id: "3", title: "Case studies" },
            { id: "menu", title: "Main menu" },
          ],
        },
      ];
    case "3":
    case "portfolio":
    case "cases":
    case "case studies":
      return [
        caseStudiesReply(env),
        {
          type: "buttons",
          body: "Hiring or browsing?",
          buttons: [
            { id: "5", title: "I'm hiring" },
            { id: "4", title: "Freelance work" },
            { id: "menu", title: "Main menu" },
          ],
        },
      ];
    case "4":
    case "freelance":
    case "project":
    case "quote":
      session.step = "freelance_brief";
      session.data = { field: "business", contactName: msg.contactName || "" };
      return [
        `Great — let's scope a *freelance project* for ${name}.\nI'll ask 4 quick questions.`,
        "① What type of business is this for?\n_(e.g. salon, restaurant, clinic, startup, enterprise)_",
      ];
    case "5":
    case "hire":
    case "job":
    case "role":
    case "recruit":
      session.step = "hire_brief";
      session.data = { field: "role", contactName: msg.contactName || "" };
      return [
        `Awesome — *${owner}* is open to the right roles & contracts.\n4 quick questions:`,
        "① What role are you hiring for?\n_(e.g. Senior UX/UI, Product Designer, Angular Developer)_",
      ];
    case "menu":
      session.step = "main";
      session.data = {};
      return mainMenuPayload(env, msg.contactName);
    default:
      if (input.length > 80) {
        await notifyOwner(
          env,
          `📩 Long message from +${msg.from} (${msg.contactName || "unknown"}):\n${input.slice(0, 1500)}`
        );
        return [
          `Got it — thanks for the detail. I've flagged this for *${owner}*.`,
          mainMenuPayload(env, msg.contactName),
        ];
      }
      return [
        `I didn't catch that. Here's the *${name}* menu — tap an option or reply with a number:`,
        mainMenuPayload(env, msg.contactName),
      ];
  }
}

function mapInteractiveId(lower) {
  // list ids: menu_1 ... menu_6, or bare 1-6, or named ids
  const m = lower.match(/^menu[_-]?([1-6])$/);
  if (m) return m[1];
  if (/^[1-6]$/.test(lower)) return lower;
  if (lower === "menu") return "menu";
  return "";
}

function isMenu(lower) {
  return (
    lower === "menu" ||
    lower === "0" ||
    lower === "main" ||
    lower === "options" ||
    lower === "hi lulasync" ||
    lower.startsWith("hi lula") ||
    lower.includes("i'd like to chat") ||
    lower.includes("i would like to chat") ||
    lower.includes("like to chat about a project")
  );
}

function mapChoice(lower) {
  if (/^[1-6]$/.test(lower)) return lower;
  const m = lower.match(/^(?:option\s*)?([1-6])(?:[\).:\-\s]|$)/);
  if (m) return m[1];

  if (/(price|pricing|cost|how much|rates?)/.test(lower)) return "pricing";
  if (/(showcase|business app|spaza|salon|demo apps)/.test(lower)) return "showcase";
  if (/(portfolio|case study|case studies|vodacom|angular|design system|absa)/.test(lower))
    return "portfolio";
  if (/(freelance|project|build me|quote|website|automation|whatsapp bot)/.test(lower))
    return "freelance";
  if (/(hir(e|ing)|job|role|recruit|full[-\s]?time|contract role)/.test(lower)) return "hire";
  // Avoid matching "booking" / "callback" as contact — use word boundaries
  if (/\b(contact|book a call|call me|meeting|calendar|speak to human)\b/.test(lower))
    return "contact";
  return "";
}

function mainMenuPayload(env, contactName) {
  const greet = contactName ? `Hi ${contactName.split(" ")[0]} 👋` : "Hi 👋";
  const name = env.BUSINESS_NAME || "LulaSync";
  return {
    type: "main_menu",
    preface:
      `${greet} Welcome to *${name}*.\n` +
      `Digital products, WhatsApp apps, AI agents & senior UX/UI + Angular work.\n\n` +
      `Choose an option below (or reply *1–6*):`,
  };
}

function helpText(env) {
  return (
    `*Help — ${env.BUSINESS_NAME || "LulaSync"} bot*\n\n` +
    `• *menu* — main options\n` +
    `• *1–6* — choose a menu item\n` +
    `• *human* — talk to ${env.OWNER_NAME || "Lulamile"}\n` +
    `• Or describe what you need in one message.`
  );
}

function pricingReply(env) {
  const url = env.PRICING_URL || "https://lulasync.app/pricing.html";
  return (
    `*Pricing (ZAR)*\n` +
    `Starter plans from *R1,500* — WhatsApp-first apps, sites, automation & AI agents.\n` +
    `Custom software & enterprise UX quoted per scope.\n\n` +
    `📄 Full catalogue:\n${url}`
  );
}

function showcaseReply(env) {
  const url = env.SHOWCASE_URL || "https://lulasync.app/showcase.html";
  return (
    `*Business apps we build*\n` +
    `Spaza shops, salons, shisa nyama, mechanics, events — digital menus, bookings, loyalty, WhatsApp orders.\n\n` +
    `👀 Showcase:\n${url}`
  );
}

function caseStudiesReply(env) {
  const cases = env.CASE_STUDIES_URL || "https://lulasync.app/showcase.html#portfolio";
  const portfolio =
    env.PORTFOLIO_URL || "https://lulasync.app/showcase.html#portfolio";
  return (
    `*Portfolio & case studies*\n` +
    `Senior work: product strategy, UX/UI systems, conversational design & Angular delivery.\n` +
    `• Vodacom Engage redesign\n` +
    `• DesignOps → Angular pipeline\n` +
    `• ABSA trust-centred branch UX\n` +
    `• Stance Insurance, hackathons & more\n\n` +
    `📂 On LulaSync:\n${cases}\n` +
    `🌐 Full portfolio:\n${portfolio}`
  );
}

function humanHandoff(env) {
  const owner = env.OWNER_NAME || "Lulamile";
  const contact = env.CONTACT_URL || "https://lulasync.app/contact.html";
  return (
    `You're through to *${owner}* 👋\n` +
    `Send your name, what you need, and deadline/budget if you have them — this chat is monitored.\n\n` +
    `Form:\n${contact}\n\n` +
    `Typical response: same business day (SAST).\n` +
    `_Type *menu* for the bot anytime._`
  );
}

/* ── Freelance multi-step ── */

async function freelanceBriefFlow(input, session, env, msg) {
  const d = session.data || (session.data = {});
  const field = d.field || "business";

  if (isMenu(input.toLowerCase()) || input.toLowerCase() === "menu") {
    session.step = "main";
    session.data = {};
    return mainMenuPayload(env, msg.contactName);
  }

  if (field === "business") {
    d.business = input;
    d.field = "need";
    return "② What do you need built?\n_(e.g. WhatsApp ordering, booking system, website, AI agent team, full app)_";
  }
  if (field === "need") {
    d.need = input;
    d.field = "budget";
    return "③ Rough budget range in ZAR?\n_(under R5k · R5–15k · R15–50k · R50k+ · not sure)_";
  }
  if (field === "budget") {
    d.budget = input;
    d.field = "timeline";
    return "④ When do you want to go live?\n_(ASAP · 2 weeks · 1 month · flexible)_";
  }
  if (field === "timeline") {
    d.timeline = input;
    const summary =
      `✅ *Freelance brief received*\n\n` +
      `• Business: ${d.business}\n` +
      `• Need: ${d.need}\n` +
      `• Budget: ${d.budget}\n` +
      `• Timeline: ${d.timeline}\n` +
      `• From: +${msg.from} (${msg.contactName || d.contactName || "WhatsApp"})\n`;

    await notifyOwner(
      env,
      `🆕 FREELANCE LEAD\nFrom: +${msg.from} (${msg.contactName || "—"})\nBusiness: ${d.business}\nNeed: ${d.need}\nBudget: ${d.budget}\nTimeline: ${d.timeline}`
    );

    session.step = "main";
    session.data = {};
    const owner = env.OWNER_NAME || "Lulamile";
    return [
      summary +
        `\n*${owner}* will reply with fit + next steps (usually same business day, SAST).\n\n` +
        `Showcase → ${env.SHOWCASE_URL || "https://lulasync.app/showcase.html"}\n` +
        `Pricing → ${env.PRICING_URL || "https://lulasync.app/pricing.html"}`,
      {
        type: "buttons",
        body: "Anything else?",
        buttons: [
          { id: "menu", title: "Main menu" },
          { id: "6", title: "Add more detail" },
          { id: "2", title: "See showcase" },
        ],
      },
    ];
  }
  session.step = "main";
  return mainMenuPayload(env, msg.contactName);
}

/* ── Hiring multi-step ── */

async function hireBriefFlow(input, session, env, msg) {
  const d = session.data || (session.data = {});
  const field = d.field || "role";

  if (isMenu(input.toLowerCase()) || input.toLowerCase() === "menu") {
    session.step = "main";
    session.data = {};
    return mainMenuPayload(env, msg.contactName);
  }

  if (field === "role") {
    d.role = input;
    d.field = "type";
    return "② Full-time, contract, or freelance retained?\n_(+ remote / hybrid / onsite + city if relevant)_";
  }
  if (field === "type") {
    d.type = input;
    d.field = "company";
    return "③ Company name + product domain?\n_(e.g. fintech, telecom, health, agency)_";
  }
  if (field === "company") {
    d.company = input;
    d.field = "timeline";
    return "④ Process timeline?\n_(intro this week · hiring this month · exploratory)_";
  }
  if (field === "timeline") {
    d.timeline = input;
    await notifyOwner(
      env,
      `🆕 HIRING LEAD\nFrom: +${msg.from} (${msg.contactName || "—"})\nRole: ${d.role}\nType: ${d.type}\nCompany: ${d.company}\nTimeline: ${d.timeline}`
    );

    session.step = "main";
    session.data = {};
    const owner = env.OWNER_NAME || "Lulamile";
    const cases = env.CASE_STUDIES_URL || "https://lulasync.app/showcase.html#portfolio";
    return [
      `✅ *Hiring brief received — thank you!*\n\n` +
        `• Role: ${d.role}\n` +
        `• Type: ${d.type}\n` +
        `• Company: ${d.company}\n` +
        `• Timeline: ${d.timeline}\n\n` +
        `*${owner}* will follow up on this chat.\n` +
        `Case studies:\n${cases}`,
      {
        type: "buttons",
        body: "Next:",
        buttons: [
          { id: "3", title: "Case studies" },
          { id: "6", title: "Message Lulamile" },
          { id: "menu", title: "Main menu" },
        ],
      },
    ];
  }
  session.step = "main";
  return mainMenuPayload(env, msg.contactName);
}

/* ───────────────────────── Sessions / dedupe ───────────────────────── */

function getSession(from) {
  const now = Date.now();
  let s = sessions.get(from);
  if (!s || now - s.updated > SESSION_TTL_MS) {
    s = { step: "main", data: {}, updated: now };
    sessions.set(from, s);
  }
  return s;
}

function touchSession(from, session) {
  session.updated = Date.now();
  sessions.set(from, session);
  if (sessions.size > 5000) {
    for (const [k, v] of sessions) {
      if (Date.now() - v.updated > SESSION_TTL_MS) sessions.delete(k);
    }
  }
}

function isDuplicate(id) {
  const now = Date.now();
  if (seenIds.has(id)) return true;
  seenIds.set(id, now);
  if (seenIds.size > 2000) {
    for (const [k, ts] of seenIds) {
      if (now - ts > DEDUPE_TTL_MS) seenIds.delete(k);
    }
  }
  return false;
}

/* ───────────────────────── Owner notify ───────────────────────── */

async function notifyOwner(env, text) {
  const to = (env.OWNER_NOTIFY_NUMBER || "").replace(/\D/g, "");
  if (!to || !env.WHATSAPP_TOKEN || !env.PHONE_NUMBER_ID) {
    console.log("OWNER_NOTIFY skip:", text.slice(0, 200));
    return;
  }
  try {
    await sendText(env, to, text);
  } catch (e) {
    console.error("notifyOwner failed", e);
  }
}

/* ───────────────────────── WhatsApp Graph helpers ───────────────────────── */

async function sendText(env, to, body) {
  if (!env.WHATSAPP_TOKEN || !env.PHONE_NUMBER_ID) {
    console.error("Missing WHATSAPP_TOKEN or PHONE_NUMBER_ID");
    console.log("DEV sendText →", to, body);
    return;
  }
  for (const text of chunkText(body, 3500)) {
    await graphPost(env, {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "text",
      text: { preview_url: true, body: text },
    });
  }
}

async function sendButtons(env, to, payload) {
  if (!env.WHATSAPP_TOKEN || !env.PHONE_NUMBER_ID) {
    console.log("DEV buttons →", to, payload);
    return;
  }
  await graphPost(env, {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "button",
      body: { text: String(payload.body || "").slice(0, 1024) },
      action: {
        buttons: (payload.buttons || []).slice(0, 3).map((b) => ({
          type: "reply",
          reply: {
            id: String(b.id).slice(0, 256),
            title: String(b.title).slice(0, 20),
          },
        })),
      },
    },
  });
}

async function sendList(env, to, payload) {
  if (!env.WHATSAPP_TOKEN || !env.PHONE_NUMBER_ID) {
    console.log("DEV list →", to, payload);
    return;
  }
  await graphPost(env, {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: String(payload.body || "").slice(0, 1024) },
      action: {
        button: String(payload.button || "Open menu").slice(0, 20),
        sections: payload.sections || [],
      },
    },
  });
}

async function sendMainMenuInteractive(env, to) {
  await sendList(env, to, {
    body: "Tap *Open menu*, then choose one option:",
    button: "Open menu",
    sections: [
      {
        title: "Explore",
        rows: [
          { id: "1", title: "Pricing", description: "ZAR packages & catalogue" },
          { id: "2", title: "Business apps", description: "Showcase demos" },
          { id: "3", title: "Case studies", description: "Portfolio for hiring managers" },
        ],
      },
      {
        title: "Work with us",
        rows: [
          { id: "4", title: "Freelance quote", description: "Project brief in 4 steps" },
          { id: "5", title: "Hiring / job role", description: "Roles & contracts" },
          { id: "6", title: "Speak to Lulamile", description: "Human handoff" },
        ],
      },
    ],
  });
}

async function markAsRead(env, messageId) {
  if (!messageId || !env.WHATSAPP_TOKEN || !env.PHONE_NUMBER_ID) return;
  await graphPost(env, {
    messaging_product: "whatsapp",
    status: "read",
    message_id: messageId,
  });
}

async function graphPost(env, payload) {
  const url = `${GRAPH_API}/${env.PHONE_NUMBER_ID}/messages`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Graph API error", res.status, await res.text());
  }
  return res;
}

function chunkText(text, max) {
  if (!text) return [""];
  if (text.length <= max) return [text];
  const parts = [];
  let rest = text;
  while (rest.length > max) {
    let cut = rest.lastIndexOf("\n", max);
    if (cut < max * 0.5) cut = max;
    parts.push(rest.slice(0, cut));
    rest = rest.slice(cut).trimStart();
  }
  if (rest) parts.push(rest);
  return parts;
}

async function verifyMetaSignature(rawBody, header, appSecret) {
  if (!header?.startsWith("sha256=")) return false;
  const expectedHex = header.slice("sha256=".length);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const hex = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return timingSafeEqual(hex, expectedHex);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
