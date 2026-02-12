/**
 * LulaSync on-site chat assistant (NOT WhatsApp).
 * WhatsApp is only available on contact.html.
 * Theme-aware FAB icon (bot/assistant, not WhatsApp).
 */
(function () {
  if (document.getElementById("ls-chat-root")) return;

  var WA_PHONE = "27837195064";
  var path = (location.pathname || "").toLowerCase();
  var isContactPage =
    path.indexOf("contact.html") !== -1 ||
    document.documentElement.getAttribute("data-page") === "contact" ||
    (document.body && document.body.getAttribute("data-page") === "contact");

  function theme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  var css =
    "#ls-chat-root{all:initial;font-family:Inter,system-ui,sans-serif}" +
    "#ls-chat-root *{box-sizing:border-box;font-family:inherit}" +
    "#ls-chat-fab{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:99990;width:58px;height:58px;border:1px solid transparent;border-radius:50%;cursor:pointer;background:linear-gradient(135deg,#F0A500,#E04E14);color:#0A0705;box-shadow:0 10px 28px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;transition:transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease}" +
    "#ls-chat-fab:hover{transform:scale(1.06)}" +
    "#ls-chat-fab svg{width:28px;height:28px;display:block}" +
    "html[data-theme='light'] #ls-chat-fab{background:#fff;color:#C47F00;border-color:#E0D8C8;box-shadow:0 10px 24px rgba(26,18,8,.12)}" +
    "html[data-theme='light'] #ls-chat-fab:hover{border-color:#C47F00}" +
    "#ls-chat-panel{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(84px,calc(env(safe-area-inset-bottom) + 76px));z-index:99991;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 110px));background:#0f0f0f;color:#F5EDD8;border:1px solid #2a2a2a;border-radius:18px;box-shadow:0 20px 50px rgba(0,0,0,.45);display:none;flex-direction:column;overflow:hidden}" +
    "html[data-theme='light'] #ls-chat-panel{background:#fff;color:#1a1208;border-color:#E0D8C8;box-shadow:0 20px 50px rgba(26,18,8,.12)}" +
    "#ls-chat-panel.open{display:flex}" +
    "#ls-chat-head{padding:14px 16px;background:linear-gradient(135deg,rgba(240,165,0,.18),rgba(224,78,20,.12));border-bottom:1px solid #2a2a2a;display:flex;align-items:center;justify-content:space-between;gap:10px}" +
    "html[data-theme='light'] #ls-chat-head{background:linear-gradient(135deg,rgba(196,127,0,.12),rgba(192,58,8,.06));border-bottom-color:#E0D8C8}" +
    "#ls-chat-head strong{display:block;font-size:14px;color:inherit}" +
    "#ls-chat-head span{display:block;font-size:11px;opacity:.65;margin-top:2px}" +
    "#ls-chat-close{background:transparent;border:1px solid #333;color:inherit;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:16px;line-height:1}" +
    "html[data-theme='light'] #ls-chat-close{border-color:#E0D8C8}" +
    "#ls-chat-msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#0a0a0a}" +
    "html[data-theme='light'] #ls-chat-msgs{background:#F7F3EC}" +
    ".ls-bubble{max-width:88%;padding:10px 12px;border-radius:14px;font-size:13px;line-height:1.45;white-space:pre-wrap}" +
    ".ls-bot{align-self:flex-start;background:#171717;border:1px solid #2a2a2a;color:#F5EDD8;border-bottom-left-radius:4px}" +
    "html[data-theme='light'] .ls-bot{background:#fff;border-color:#E0D8C8;color:#1a1208}" +
    ".ls-user{align-self:flex-end;background:rgba(240,165,0,.16);border:1px solid rgba(240,165,0,.35);color:#F5EDD8;border-bottom-right-radius:4px}" +
    "html[data-theme='light'] .ls-user{color:#1a1208;background:rgba(196,127,0,.12);border-color:rgba(196,127,0,.35)}" +
    ".ls-quick{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}" +
    ".ls-chip{border:1px solid #333;background:#141414;color:#F5EDD8;border-radius:999px;padding:7px 10px;font-size:11px;font-weight:700;cursor:pointer}" +
    "html[data-theme='light'] .ls-chip{background:#fff;border-color:#E0D8C8;color:#1a1208}" +
    ".ls-chip:hover{border-color:#F0A500;color:#F0A500}" +
    "#ls-chat-form{display:flex;gap:8px;padding:12px;border-top:1px solid #2a2a2a;background:#0f0f0f}" +
    "html[data-theme='light'] #ls-chat-form{background:#fff;border-top-color:#E0D8C8}" +
    "#ls-chat-input{flex:1;border:1px solid #2a2a2a;background:#141414;color:#F5EDD8;border-radius:12px;padding:10px 12px;font-size:13px;outline:none}" +
    "html[data-theme='light'] #ls-chat-input{background:#F7F3EC;border-color:#E0D8C8;color:#1a1208}" +
    "#ls-chat-input:focus{border-color:#F0A500}" +
    "#ls-chat-send{border:none;border-radius:12px;background:#F0A500;color:#0A0705;font-weight:800;padding:0 14px;cursor:pointer;font-size:12px}" +
    "html[data-theme='light'] #ls-chat-send{background:#C47F00;color:#fff}" +
    "#ls-chat-foot{padding:0 12px 10px;font-size:10px;opacity:.55;text-align:center}" +
    "#ls-chat-foot a{color:#F0A500;text-decoration:none;font-weight:700}" +
    "html[data-theme='light'] #ls-chat-foot a{color:#C47F00}" +
    "@media(max-width:480px){#ls-chat-panel{right:12px;left:12px;width:auto;bottom:max(80px,calc(env(safe-area-inset-bottom)+72px));height:min(70vh,520px)}}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // Distinct assistant/bot icon (not WhatsApp)
  var ICON_BOT =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<rect x="4" y="7" width="16" height="12" rx="4" stroke="currentColor" stroke-width="1.8"/>' +
    '<circle cx="9" cy="13" r="1.3" fill="currentColor"/>' +
    '<circle cx="15" cy="13" r="1.3" fill="currentColor"/>' +
    '<path d="M9 16.2c.8.7 1.6 1 3 1s2.2-.3 3-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M12 7V4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' +
    '<circle cx="12" cy="3.5" r="1.2" fill="currentColor"/>' +
    "</svg>";

  var root = document.createElement("div");
  root.id = "ls-chat-root";
  root.innerHTML =
    '<button id="ls-chat-fab" type="button" aria-label="Open LulaSync assistant" title="Chat assistant">' +
    ICON_BOT +
    "</button>" +
    '<div id="ls-chat-panel" role="dialog" aria-label="LulaSync chat assistant">' +
    '<div id="ls-chat-head"><div><strong>LulaSync Assistant</strong><span>On-site help · Contact for WhatsApp</span></div>' +
    '<button id="ls-chat-close" type="button" aria-label="Close chat">✕</button></div>' +
    '<div id="ls-chat-msgs" aria-live="polite"></div>' +
    '<form id="ls-chat-form" autocomplete="off">' +
    '<input id="ls-chat-input" type="text" maxlength="500" placeholder="Ask about work, pricing, hiring…" aria-label="Message" />' +
    '<button id="ls-chat-send" type="submit">Send</button></form>' +
    '<div id="ls-chat-foot">Email: <a href="mailto:mkhungela.l@gmail.com">mkhungela.l@gmail.com</a> · <a href="./contact.html">Contact</a></div></div>';

  var state = { step: "main", data: {} };
  var msgs, input, panel, fab;

  function menuChips() {
    return [
      ["Pricing", "1"],
      ["Showcase", "2"],
      ["Case studies", "3"],
      ["Freelance quote", "4"],
      ["Hiring", "5"],
      ["Contact", "6"],
    ];
  }

  function addBubble(text, who, chips) {
    var div = document.createElement("div");
    div.className = "ls-bubble " + (who === "user" ? "ls-user" : "ls-bot");
    div.textContent = text;
    if (chips && chips.length) {
      var q = document.createElement("div");
      q.className = "ls-quick";
      chips.forEach(function (c) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "ls-chip";
        b.textContent = c[0];
        b.addEventListener("click", function () {
          handleUser(c[1], c[0]);
        });
        q.appendChild(b);
      });
      div.appendChild(q);
    }
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function bot(text, chips) {
    addBubble(text, "bot", chips);
  }
  function user(text) {
    addBubble(text, "user");
  }

  function navigate(to) {
    location.href = to;
  }

  function mapChoice(lower) {
    if (/^[1-6]$/.test(lower)) return lower;
    if (/price|pricing|cost|how much/.test(lower)) return "1";
    if (/showcase|business app|demo/.test(lower)) return "2";
    if (/portfolio|case study|case studies|vodacom|angular|absa/.test(lower)) return "3";
    if (/freelance|project|quote|build/.test(lower)) return "4";
    if (/hir(e|ing)|job|role|recruit/.test(lower)) return "5";
    if (/\b(contact|email|reach)\b/.test(lower)) return "6";
    return "";
  }

  function saveLead(payload) {
    try {
      localStorage.setItem("ls-lead-" + Date.now(), JSON.stringify(payload));
    } catch (e) {}
  }

  function freelanceFlow(text) {
    var d = state.data;
    var lower = text.toLowerCase();
    if (lower === "menu") {
      state = { step: "main", data: {} };
      bot("Main menu — pick one:", menuChips());
      return;
    }
    if (d.field === "business") {
      d.business = text;
      d.field = "need";
      bot("② What do you need built?\n(e.g. booking system, website, AI agents, full app)");
      return;
    }
    if (d.field === "need") {
      d.need = text;
      d.field = "budget";
      bot("③ Rough budget in ZAR?\n(under R5k · R5–15k · R15–50k · R50k+ · not sure)");
      return;
    }
    if (d.field === "budget") {
      d.budget = text;
      d.field = "timeline";
      bot("④ When do you want to go live?\n(ASAP · 2 weeks · 1 month · flexible)");
      return;
    }
    if (d.field === "timeline") {
      d.timeline = text;
      saveLead({ type: "freelance", data: d, at: new Date().toISOString() });
      state = { step: "main", data: {} };
      bot(
        "✅ Brief captured.\n• Business: " +
          d.business +
          "\n• Need: " +
          d.need +
          "\n• Budget: " +
          d.budget +
          "\n• Timeline: " +
          d.timeline +
          "\n\nSend it via Contact or email mkhungela.l@gmail.com.",
        [
          ["Open Contact", "goto:contact"],
          ["Email Lulamile", "goto:email"],
          ["Menu", "menu"],
        ]
      );
    }
  }

  function hireFlow(text) {
    var d = state.data;
    var lower = text.toLowerCase();
    if (lower === "menu") {
      state = { step: "main", data: {} };
      bot("Main menu — pick one:", menuChips());
      return;
    }
    if (d.field === "role") {
      d.role = text;
      d.field = "type";
      bot("② Full-time, contract, or freelance retained?\n(+ remote / hybrid / city)");
      return;
    }
    if (d.field === "type") {
      d.type = text;
      d.field = "company";
      bot("③ Company name + domain?\n(e.g. fintech, telecom, agency)");
      return;
    }
    if (d.field === "company") {
      d.company = text;
      d.field = "timeline";
      bot("④ Timeline?\n(intro this week · this month · exploratory)");
      return;
    }
    if (d.field === "timeline") {
      d.timeline = text;
      saveLead({ type: "hire", data: d, at: new Date().toISOString() });
      state = { step: "main", data: {} };
      bot(
        "✅ Hiring brief captured.\n• Role: " +
          d.role +
          "\n• Type: " +
          d.type +
          "\n• Company: " +
          d.company +
          "\n• Timeline: " +
          d.timeline +
          "\n\nEmail mkhungela.l@gmail.com or use Contact.",
        [
          ["Email Lulamile", "goto:email"],
          ["Open Contact", "goto:contact"],
          ["Case studies", "goto:cases"],
          ["Menu", "menu"],
        ]
      );
    }
  }

  function contactHelp() {
    if (isContactPage) {
      bot("You're on Contact. Use the form, email, or WhatsApp (this page only).", [
        ["WhatsApp", "goto:wa"],
        ["Email", "goto:email"],
        ["Jump to form", "goto:form"],
        ["Menu", "menu"],
      ]);
    } else {
      bot("Best next step: Contact page (form + WhatsApp) or email Lulamile directly.", [
        ["Go to Contact", "goto:contact"],
        ["Email", "goto:email"],
        ["Menu", "menu"],
      ]);
    }
  }

  function reply(text) {
    var lower = text.toLowerCase().trim();

    if (lower.indexOf("goto:") === 0) {
      var target = lower.slice(5);
      if (target === "contact") return navigate("./contact.html");
      if (target === "pricing") return navigate("./pricing.html");
      if (target === "showcase") return navigate("./showcase.html");
      if (target === "cases") return navigate("./showcase.html#portfolio");
      if (target === "email") {
        location.href = "mailto:mkhungela.l@gmail.com";
        return;
      }
      if (target === "form") {
        var el =
          document.querySelector("form") ||
          document.querySelector("#contact") ||
          document.querySelector("main");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        bot("Form is on this page — complete it and submit.");
        return;
      }
      if (target === "wa") {
        if (isContactPage) {
          window.open(
            "https://wa.me/" +
              WA_PHONE +
              "?text=" +
              encodeURIComponent("Hi LulaSync / Lulamile — contacting you from the website."),
            "_blank",
            "noopener,noreferrer"
          );
        } else {
          bot("WhatsApp is only on the Contact page.", [["Go to Contact", "goto:contact"]]);
        }
        return;
      }
    }

    if (state.step === "freelance") return freelanceFlow(text);
    if (state.step === "hire") return hireFlow(text);

    if (lower === "menu" || lower === "hi" || lower === "hello" || lower === "hey" || lower === "start") {
      state = { step: "main", data: {} };
      bot("Main menu — pick one:", menuChips());
      return;
    }

    var choice = mapChoice(lower);
    if (choice === "1") {
      bot(
        "Pricing (ZAR)\n• Starter from R1,500\n• Custom software & enterprise UX quoted per scope",
        [
          ["Open pricing", "goto:pricing"],
          ["Freelance quote", "4"],
          ["Menu", "menu"],
        ]
      );
      return;
    }
    if (choice === "2") {
      bot("Business apps: menus, bookings, loyalty, ordering for SA businesses.", [
        ["Open showcase", "goto:showcase"],
        ["Freelance quote", "4"],
        ["Menu", "menu"],
      ]);
      return;
    }
    if (choice === "3") {
      bot(
        "Case studies: Vodacom Engage, DesignOps/Angular, ABSA, Stance, Tobby/Bursary — with process trackers as you scroll.",
        [
          ["View case studies", "goto:cases"],
          ["Hiring brief", "5"],
          ["Menu", "menu"],
        ]
      );
      return;
    }
    if (choice === "4") {
      state = { step: "freelance", data: { field: "business" } };
      bot("Freelance quote — ① What type of business is this for?");
      return;
    }
    if (choice === "5") {
      state = { step: "hire", data: { field: "role" } };
      bot("Hiring — ① What role are you hiring for?");
      return;
    }
    if (choice === "6") {
      contactHelp();
      return;
    }

    bot("I can help with pricing, showcase, case studies, freelance quotes, or hiring.", menuChips());
  }

  function handleUser(raw, label) {
    var text = String(raw || "").trim();
    if (!text) return;
    user(label || text);
    setTimeout(function () {
      reply(text);
    }, 180);
  }

  function boot() {
    bot(
      "Hi 👋 I'm the LulaSync assistant for Lulamile Mkhungela — solo product designer & builder (specialists only when a project needs them).\nAsk about case studies, pricing, freelance work, or hiring.\n\nWhatsApp is on the Contact page only.",
      menuChips()
    );
  }

  function wire() {
    fab = document.getElementById("ls-chat-fab");
    panel = document.getElementById("ls-chat-panel");
    msgs = document.getElementById("ls-chat-msgs");
    input = document.getElementById("ls-chat-input");
    var form = document.getElementById("ls-chat-form");
    var closeBtn = document.getElementById("ls-chat-close");

    fab.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      fab.setAttribute("aria-expanded", open ? "true" : "false");
      if (open && !msgs.dataset.started) {
        msgs.dataset.started = "1";
        boot();
      }
      if (open) {
        setTimeout(function () {
          input.focus();
        }, 40);
      }
    });
    closeBtn.addEventListener("click", function () {
      panel.classList.remove("open");
      fab.setAttribute("aria-expanded", "false");
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = (input.value || "").trim();
      if (!text) return;
      input.value = "";
      handleUser(text);
    });

    // Keep icon theme-aware if page toggles light/dark
    var obs = new MutationObserver(function () {
      // CSS handles visuals via html[data-theme]; ensure icon still present
      if (fab && !fab.querySelector("svg")) fab.innerHTML = ICON_BOT;
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }

  function mount() {
    if (!document.getElementById("ls-chat-root")) document.body.appendChild(root);
    wire();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
