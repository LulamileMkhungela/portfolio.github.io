/**
 * Local simulation (no Meta). Run: node scripts/simulate.mjs
 */
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mod = await import(pathToFileURL(path.join(__dirname, "../src/worker.js")).href);
const worker = mod.default;

const sent = [];
const env = {
  VERIFY_TOKEN: "test_verify",
  WHATSAPP_TOKEN: "test_token",
  PHONE_NUMBER_ID: "123",
  OWNER_NOTIFY_NUMBER: "27837195064",
  BUSINESS_NAME: "LulaSync",
  OWNER_NAME: "Lulamile",
  SITE_URL: "https://lulasync.app",
  SHOWCASE_URL: "https://lulasync.app/showcase.html",
  CASE_STUDIES_URL: "https://lulasync.app/showcase.html#portfolio",
  PRICING_URL: "https://lulasync.app/pricing.html",
  CONTACT_URL: "https://lulasync.app/contact.html",
  PORTFOLIO_URL: "https://lulamilemkhungela.github.io/portfolio.github.io/",
};

const realFetch = globalThis.fetch;
globalThis.fetch = async (url, init = {}) => {
  if (String(url).includes("graph.facebook.com")) {
    const body = init.body ? JSON.parse(init.body) : {};
    if (body.type === "text") sent.push({ kind: "text", to: body.to, text: body.text?.body });
    if (body.type === "interactive") {
      sent.push({
        kind: body.interactive?.type || "interactive",
        to: body.to,
        body: body.interactive?.body?.text,
        button: body.interactive?.action?.button,
        buttons: body.interactive?.action?.buttons,
        sections: body.interactive?.action?.sections,
      });
    }
    if (body.status === "read") sent.push({ kind: "read", id: body.message_id });
    return new Response(JSON.stringify({ messages: [{ id: "wamid.mock" }] }), { status: 200 });
  }
  return realFetch(url, init);
};

function payload(from, text, name = "Test User") {
  return {
    object: "whatsapp_business_account",
    entry: [
      {
        changes: [
          {
            value: {
              contacts: [{ profile: { name }, wa_id: from }],
              messages: [
                {
                  from,
                  id: "wamid." + Math.random().toString(36).slice(2),
                  timestamp: String(Math.floor(Date.now() / 1000)),
                  type: "text",
                  text: { body: text },
                },
              ],
            },
          },
        ],
      },
    ],
  };
}

function listPick(from, id, title, name = "Test User") {
  return {
    object: "whatsapp_business_account",
    entry: [
      {
        changes: [
          {
            value: {
              contacts: [{ profile: { name }, wa_id: from }],
              messages: [
                {
                  from,
                  id: "wamid." + Math.random().toString(36).slice(2),
                  timestamp: String(Math.floor(Date.now() / 1000)),
                  type: "interactive",
                  interactive: {
                    type: "list_reply",
                    list_reply: { id, title },
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  };
}

async function say(label, bodyObj) {
  sent.length = 0;
  const req = new Request("https://bot.test/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  });
  const res = await worker.fetch(req, env, { waitUntil: (p) => p });
  await new Promise((r) => setTimeout(r, 40));
  console.log("\n👤", label);
  console.log("→", res.status);
  for (const s of sent) {
    if (s.kind === "text") console.log("🤖 text→", s.to, "|", (s.text || "").slice(0, 280));
    if (s.kind === "list") console.log("🤖 list |", s.button, "|", s.body);
    if (s.kind === "button")
      console.log(
        "🤖 buttons |",
        s.body,
        "|",
        (s.buttons || []).map((b) => b.reply?.title).join(", ")
      );
  }
}

// verify
{
  const res = await worker.fetch(
    new Request(
      "https://bot.test/webhook?hub.mode=subscribe&hub.verify_token=test_verify&hub.challenge=CHALLENGE123"
    ),
    env,
    { waitUntil() {} }
  );
  console.log("Verify:", res.status, await res.text());
}

const from = "27821112222";
await say("hi", payload(from, "hi"));
await say("list pick pricing", listPick(from, "1", "Pricing"));
await say("4 freelance", payload(from, "4"));
await say("business", payload(from, "Salon in Soweto"));
await say("need", payload(from, "WhatsApp booking"));
await say("budget", payload(from, "R5-15k"));
await say("timeline", payload(from, "2 weeks"));
await say("site prefill chat", payload(from, "Hi LulaSync! I'd like to chat about a project."));
await say("human", payload(from, "human"));

// health
{
  const res = await worker.fetch(new Request("https://bot.test/health"), env, {
    waitUntil() {},
  });
  console.log("\nHealth:", await res.json());
}

console.log("\n✅ Simulation finished");
globalThis.fetch = realFetch;
