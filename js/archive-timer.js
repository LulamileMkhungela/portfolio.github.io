/*
 * 60-second timed preview for unlocked Archive case studies.
 *
 * Works in two places:
 *  - standalone / mobile iframe case study pages (document scrolls; overlay is fixed)
 *  - desktop project windows, where js/desktop.js renders the case study inside a
 *    shadow root and calls window.LMArchiveTimer.mount(bodyShell, scrollContainer).
 *
 * Locked case studies (#case-lock-payload / .case-lock / [data-case-locked]) are
 * skipped automatically and never show a timer.
 *
 * Behavior:
 *  - Mounts a compact 60-second countdown pill in the header bar of the card/window
 *    containing the case study (.window-bar-main on desktop, .mobile-window-bar on
 *    mobile), positioned far to the right.
 *  - Tracks elapsed viewing time for the visit. Leaving the case study — closing
 *    the window, switching to another app, or navigating away — throws the
 *    countdown away, so coming back starts a fresh 60 seconds and the study is
 *    readable again. Time only counts while the study is actually on screen.
 *  - Once the 60 seconds lapse (or if they click the case study again after the 60
 *    seconds have lapsed), the case study (.content), process indicator (.case-nav),
 *    and back-to-top button (.project-content-scroll-top / .tlc-scroll-top) blur
 *    behind the popup (with an animated greenish gradient moving across the card)
 *    telling them they have accessed it and inviting them to request full access /
 *    book a walkthrough / open the live project.
 */
(function () {
  "use strict";

  var TIMER_VERSION = 12;
  var CALENDLY_URL = "https://calendly.com/lulamile_m/meet-lulamile";
  var DEFAULT_SECONDS = 60;
  var STORAGE_PREFIX = "lm-archive-state-v7:";
  var memoryStates = (window.LMArchiveTimer && window.LMArchiveTimer._memoryStates) || {};

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatTime(totalSeconds) {
    var clamped = Math.max(0, Math.ceil(totalSeconds));
    var mins = Math.floor(clamped / 60);
    var secs = clamped % 60;
    return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  }

  function studyStorageKey(title) {
    return STORAGE_PREFIX + String(title || "study").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function readStudyState(key) {
    var fallback = memoryStates[key] || { elapsedMs: 0, expired: false, visits: 0 };
    try {
      var raw = sessionStorage.getItem(key);
      if (!raw) return { elapsedMs: fallback.elapsedMs || 0, expired: Boolean(fallback.expired), visits: fallback.visits || 0 };
      var parsed = JSON.parse(raw);
      return {
        elapsedMs: Math.max(Number(fallback.elapsedMs || 0), Number(parsed.elapsedMs || 0)),
        expired: Boolean(fallback.expired || parsed.expired),
        visits: Math.max(Number(fallback.visits || 0), Number(parsed.visits || 0))
      };
    } catch (_e) {
      return { elapsedMs: fallback.elapsedMs || 0, expired: Boolean(fallback.expired), visits: fallback.visits || 0 };
    }
  }

  function writeStudyState(key, state) {
    var normalized = {
      elapsedMs: Math.max(0, Math.round(Number(state.elapsedMs || 0))),
      expired: Boolean(state.expired),
      visits: Math.max(0, Math.round(Number(state.visits || 0)))
    };
    memoryStates[key] = normalized;
    try {
      sessionStorage.setItem(key, JSON.stringify(normalized));
    } catch (_e) {}
  }

  /* Leaving a case study throws its countdown away, so the next visit starts
     from a full 60 seconds instead of resuming the seconds left over. */
  function resetStudyState(key) {
    memoryStates[key] = { elapsedMs: 0, expired: false, visits: 0 };
    try {
      sessionStorage.removeItem(key);
    } catch (_e) {}
  }

  function ensureDocumentStyles(targetDoc) {
    if (!targetDoc || !targetDoc.head) return;
    var existingStyle = targetDoc.getElementById("pk-archive-timer-doc-styles");
    if (existingStyle && existingStyle.getAttribute("data-version") === String(TIMER_VERSION)) return;
    if (existingStyle) existingStyle.remove();
    var style = targetDoc.createElement("style");
    style.id = "pk-archive-timer-doc-styles";
    style.setAttribute("data-version", String(TIMER_VERSION));
    style.textContent =
      ".project-window.project-window--embedded .window-bar .window-bar-main.has-archive-timer," +
      ".window-bar-main.has-archive-timer {" +
        "grid-template-columns: 1fr auto 1fr !important;" +
      "}" +
      ".project-window.project-window--embedded .window-bar .window-bar-main.has-archive-timer::after," +
      ".window-bar-main.has-archive-timer::after {" +
        "display: none !important;" +
      "}" +
      ".window-bar-main.has-archive-timer > .pk-archive-timer-pill {" +
        "justify-self: end !important;" +
        "margin-left: auto !important;" +
        "order: 5;" +
      "}" +
      "body[data-platform='windows'] .window-bar-main.has-archive-timer > .pk-archive-timer-pill {" +
        "margin-right: 10px !important;" +
      "}" +
      ".mobile-window-bar.has-archive-timer {" +
        "grid-template-columns: 42px minmax(0, 1fr) auto !important;" +
      "}" +
      ".mobile-window-bar.has-archive-timer > .pk-archive-timer-pill {" +
        "justify-self: end !important;" +
        "margin-left: auto !important;" +
        "margin-right: 6px !important;" +
      "}" +
      ".window-bar-main .pk-archive-timer-pill," +
      ".mobile-window-bar .pk-archive-timer-pill {" +
        "position: relative;" +
        "display: inline-flex;" +
        "flex-direction: column;" +
        "gap: 3px;" +
        "padding: 4px 10px 6px;" +
        "border-radius: 999px;" +
        "background: rgba(17, 19, 24, 0.88);" +
        "color: #f9fafb;" +
        "border: 1px solid rgba(255, 255, 255, 0.16);" +
        "box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);" +
        "font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;" +
        "font-size: 10.5px;" +
        "line-height: 1;" +
        "letter-spacing: 0.01em;" +
        "vertical-align: middle;" +
        "flex-shrink: 0;" +
        "overflow: hidden;" +
        "pointer-events: none;" +
      "}" +
      ".pk-archive-timer-pill[hidden] { display: none !important; }" +
      ".pk-archive-timer-pill__row {" +
        "display: inline-flex;" +
        "align-items: center;" +
        "gap: 6px;" +
        "white-space: nowrap;" +
      "}" +
      ".pk-archive-timer-pill__dot {" +
        "width: 6px;" +
        "height: 6px;" +
        "flex: 0 0 6px;" +
        "border-radius: 50%;" +
        "background: #22c55e;" +
        "box-shadow: 0 0 7px rgba(34, 197, 94, 0.85);" +
        "animation: pkArchiveTimerPulse 1.4s ease-in-out infinite;" +
      "}" +
      ".pk-archive-timer-pill.is-warning .pk-archive-timer-pill__dot {" +
        "background: #f59e0b;" +
        "box-shadow: 0 0 7px rgba(245, 158, 11, 0.85);" +
      "}" +
      ".pk-archive-timer-pill.is-critical {" +
        "border-color: rgba(239, 68, 68, 0.55);" +
      "}" +
      ".pk-archive-timer-pill.is-critical .pk-archive-timer-pill__dot {" +
        "background: #ef4444;" +
        "box-shadow: 0 0 9px rgba(239, 68, 68, 0.95);" +
        "animation-duration: 0.6s;" +
      "}" +
      ".pk-archive-timer-pill__label {" +
        "color: rgba(249, 250, 251, 0.78);" +
        "font-weight: 600;" +
      "}" +
      ".pk-archive-timer-pill__clock {" +
        "color: #ffffff;" +
        "font-weight: 700;" +
        "font-variant-numeric: tabular-nums;" +
        "letter-spacing: 0.03em;" +
      "}" +
      ".pk-archive-timer-pill__bar {" +
        "position: absolute;" +
        "left: 9px;" +
        "right: 9px;" +
        "bottom: 2px;" +
        "height: 1.8px;" +
        "border-radius: 999px;" +
        "background: rgba(255, 255, 255, 0.16);" +
        "overflow: hidden;" +
      "}" +
      ".pk-archive-timer-pill__fill {" +
        "display: block;" +
        "width: 100%;" +
        "height: 100%;" +
        "border-radius: 999px;" +
        "background: linear-gradient(90deg, #3b82f6 0%, #22c55e 100%);" +
        "transform-origin: left center;" +
        "transition: transform 200ms linear;" +
      "}" +
      ".pk-archive-timer-pill.is-warning .pk-archive-timer-pill__fill {" +
        "background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%);" +
      "}" +
      ".pk-archive-timer-pill.is-critical .pk-archive-timer-pill__fill {" +
        "background: linear-gradient(90deg, #ef4444 0%, #f87171 100%);" +
      "}" +
      ".project-window.is-archive-timed-out .project-content-scroll-top," +
      ".project-content-scroll-top.is-archive-timed-out {" +
        "filter: blur(8px) saturate(0.92) !important;" +
        "-webkit-filter: blur(8px) saturate(0.92) !important;" +
        "transition: filter 480ms cubic-bezier(0.22, 1, 0.36, 1);" +
        "pointer-events: none !important;" +
        "user-select: none !important;" +
        "-webkit-user-select: none !important;" +
      "}";
    targetDoc.head.appendChild(style);
  }

  /**
   * @param root      Document, ShadowRoot, or element containing [data-archive-timed]
   * @param scroller  window (standalone page) or scrolling element (desktop window)
   */
  function mount(root, scroller) {
    root = root || document;
    scroller = scroller || window;
    var hosted = scroller !== window;

    var doc = root.ownerDocument || document;

    /* Locked case studies have their own password gate — never mount a timer on them */
    if (
      (root.querySelector && root.querySelector("#case-lock-payload, .case-lock, [data-case-locked]")) ||
      (doc.querySelector && doc.querySelector("#case-lock-payload, .case-lock, [data-case-locked]"))
    ) {
      return null;
    }

    ensureDocumentStyles(doc);
    try {
      if (window.parent && window.parent !== window && window.parent.document) {
        ensureDocumentStyles(window.parent.document);
      }
    } catch (_e) {}

    var timedNode = null;
    if (root.nodeType === 1 && root.hasAttribute("data-archive-timed")) {
      timedNode = root;
    } else if (root.querySelector) {
      timedNode = root.querySelector("[data-archive-timed]");
    }
    if (!timedNode && doc.body && doc.body.hasAttribute("data-archive-timed")) {
      timedNode = doc.body;
    }
    if (!timedNode) return null;

    var shadowRoot = root.getRootNode && root.getRootNode();
    var isShadow = shadowRoot && shadowRoot.nodeType === 11 && shadowRoot.host;
    var mountContainer = isShadow ? shadowRoot : (root.querySelector ? (root.querySelector("body") || root) : doc.body);
    if (!mountContainer) return null;

    var existingHost = mountContainer.querySelector(".pk-archive-timer-host");
    if (existingHost) {
      if (existingHost.getAttribute("data-timer-version") === String(TIMER_VERSION) && existingHost._timerInstance) {
        return existingHost._timerInstance;
      }
      if (existingHost._timerInstance && existingHost._timerInstance.destroy) {
        existingHost._timerInstance.destroy();
      } else {
        existingHost.remove();
      }
    }

    var content = (root.querySelector && root.querySelector(".content")) || doc.querySelector(".content");
    if (!content) return null;

    var rawSeconds = Number(timedNode.getAttribute("data-archive-timed"));
    var durationSeconds = Number.isFinite(rawSeconds) && rawSeconds > 0 ? rawSeconds : DEFAULT_SECONDS;

    var titleNode = (root.querySelector && root.querySelector("#case-title")) || doc.querySelector("#case-title");
    var projectTitle = (
      timedNode.getAttribute("data-archive-title") ||
      (titleNode ? titleNode.textContent : "") ||
      "this case study"
    ).trim().replace(/\s+/g, " ");

    var liveCue = (root.querySelector && root.querySelector(".pk-livecue[href]")) || doc.querySelector(".pk-livecue[href]");
    var liveUrl = (
      timedNode.getAttribute("data-archive-live-url") ||
      (liveCue ? liveCue.getAttribute("href") : "") ||
      CALENDLY_URL
    ).trim();
    var liveLabel = (
      timedNode.getAttribute("data-archive-live-label") ||
      "Live project"
    ).trim();

    var repeatVisitEmailSubject = encodeURIComponent("Request full access: " + projectTitle);
    var repeatVisitEmailBody = encodeURIComponent(
      "Hi Lulamile,\n\nI was viewing the " + projectTitle + " case study in your Archive and would love to request full access / a quick walkthrough.\n"
    );
    var repeatVisitEmailHref = "mailto:mkhungela.l@gmail.com?subject=" + repeatVisitEmailSubject + "&body=" + repeatVisitEmailBody;

    /* Mount the timer pill in the header bar of the card/window containing the
       case study (e.g. SNB), pushed far to the right:
       1. Desktop project window header bar: .project-window .window-bar-main
       2. Mobile app window header bar: #mobile-app-window .mobile-window-bar
       3. Standalone fallback: #case-title inside the case study hero */
    var projectWin = isShadow && shadowRoot.host ? shadowRoot.host.closest(".project-window") : null;
    var headerBarTarget = projectWin ? projectWin.querySelector(".window-bar-main") : null;
    var desktopScrollTopBtn = projectWin ? projectWin.querySelector(".project-content-scroll-top") : null;

    if (!headerBarTarget) {
      try {
        if (window.parent && window.parent !== window && window.parent.document) {
          var parentMobileBar = window.parent.document.querySelector("#mobile-app-window .mobile-window-bar");
          var parentMobileWin = window.parent.document.querySelector("#mobile-app-window");
          if (parentMobileBar && parentMobileWin && !parentMobileWin.hidden) {
            headerBarTarget = parentMobileBar;
          }
        }
      } catch (_e) {}
    }

    var storageKey = studyStorageKey(projectTitle);
    /* Every fresh open starts the countdown from the top. Anything the last
       visit left behind is cleared here rather than resumed. */
    resetStudyState(storageKey);
    var studyState = readStudyState(storageKey);
    studyState.visits = (studyState.visits || 0) + 1;
    writeStudyState(storageKey, studyState);

    var durationMs = durationSeconds * 1000;
    var initialRemainingSeconds = Math.max(0, (durationMs - studyState.elapsedMs) / 1000);

    var pill = doc.createElement("span");
    pill.className = "pk-archive-timer-pill";
    pill.setAttribute("role", "status");
    pill.setAttribute("aria-live", "off");
    pill.setAttribute("aria-label", "Archive preview countdown");
    pill.innerHTML =
      '<span class="pk-archive-timer-pill__row">' +
        '<span class="pk-archive-timer-pill__dot" aria-hidden="true"></span>' +
        '<span class="pk-archive-timer-pill__label">Archive preview</span>' +
        '<strong class="pk-archive-timer-pill__clock" data-archive-clock>' + formatTime(initialRemainingSeconds) + '</strong>' +
      '</span>' +
      '<span class="pk-archive-timer-pill__bar" aria-hidden="true">' +
        '<span class="pk-archive-timer-pill__fill" data-archive-fill style="transform:scaleX(' + Math.max(0, Math.min(1, initialRemainingSeconds / durationSeconds)).toFixed(4) + ')"></span>' +
      '</span>';

    var hostEl = doc.createElement("div");
    hostEl.className = "pk-archive-timer-host" + (hosted ? " is-hosted" : "");
    hostEl.setAttribute("data-timer-version", String(TIMER_VERSION));
    hostEl.innerHTML =
      '<div class="pk-archive-timer-viewport">' +
        '<div class="pk-archive-timer-modal" role="dialog" aria-modal="false" aria-labelledby="pk-archive-timer-title" hidden>' +
          '<div class="pk-archive-timer-modal__card">' +
            '<h2 id="pk-archive-timer-title" class="pk-archive-timer-modal__title" data-archive-modal-title>' +
              'Preview ended \u2014 <em>' + escapeHtml(projectTitle) + '</em>' +
            '</h2>' +
            '<p class="pk-archive-timer-modal__copy" data-archive-modal-copy>' +
              'Your 60-second preview has ended. Request full access below, or book a call and I\u2019ll walk you through it.' +
            '</p>' +
            '<div class="pk-archive-timer-modal__actions">' +
              '<a class="pk-archive-timer-modal__btn pk-archive-timer-modal__btn--primary" href="' + escapeHtml(CALENDLY_URL) + '" target="_blank" rel="noopener noreferrer">' +
                '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>' +
                '<span>Book a meeting</span>' +
                '<span aria-hidden="true">\u2197</span>' +
              '</a>' +
              '<a class="pk-archive-timer-modal__btn pk-archive-timer-modal__btn--secondary" href="' + escapeHtml(liveUrl) + '" target="_blank" rel="noopener noreferrer">' +
                '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>' +
                '<span>' + escapeHtml(liveLabel) + '</span>' +
                '<span aria-hidden="true">\u2197</span>' +
              '</a>' +
              '<a class="pk-archive-timer-modal__btn pk-archive-timer-modal__btn--ghost" data-archive-email-btn href="' + escapeHtml(repeatVisitEmailHref) + '">' +
                '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>' +
                '<span data-archive-email-label>Request full access</span>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    if (headerBarTarget) {
      var existingPills = headerBarTarget.querySelectorAll(".pk-archive-timer-pill");
      for (var p = 0; p < existingPills.length; p++) {
        existingPills[p].remove();
      }
      var titleP = headerBarTarget.querySelector("p");
      if (titleP) titleP.classList.remove("has-archive-timer");
      headerBarTarget.classList.add("has-archive-timer");
      headerBarTarget.appendChild(pill);
    } else if (titleNode) {
      titleNode.classList.add("has-archive-timer");
      titleNode.appendChild(pill);
    } else {
      hostEl.querySelector(".pk-archive-timer-viewport").appendChild(pill);
    }

    if (hosted && isShadow) {
      shadowRoot.insertBefore(hostEl, shadowRoot.querySelector("html") || shadowRoot.firstChild);
    } else if (hosted) {
      var bodyTarget = root.matches && root.matches("body") ? root : (root.querySelector("body") || content.parentNode);
      bodyTarget.insertBefore(hostEl, bodyTarget.firstChild);
    } else {
      doc.body.appendChild(hostEl);
    }

    var clockEl = pill.querySelector("[data-archive-clock]");
    var fillEl = pill.querySelector("[data-archive-fill]");
    var modalEl = hostEl.querySelector(".pk-archive-timer-modal");

    var htmlEl = isShadow
      ? shadowRoot.querySelector("html")
      : doc.documentElement;
    var bodyEl = isShadow
      ? shadowRoot.querySelector("body")
      : doc.body;

    /* Resolve the case study's own accent color (--lm-accent / --pk-red) and
       optional multi-stop brand palette (data-archive-colors) so the popup
       card's moving gradient uses that exact case study's colors. */
    var caseStudyAccent = "";
    var rawPalette = (
      (timedNode && timedNode.getAttribute && timedNode.getAttribute("data-archive-colors")) ||
      (bodyEl && bodyEl.getAttribute && bodyEl.getAttribute("data-archive-colors")) ||
      ""
    ).trim();
    var paletteStops = rawPalette
      ? rawPalette.split(",").map(function (c) { return c.trim(); }).filter(Boolean)
      : [];
    try {
      var styleSearchRoot = isShadow ? shadowRoot : doc;
      var styleNodes = styleSearchRoot.querySelectorAll ? styleSearchRoot.querySelectorAll("style") : [];
      for (var sIdx = 0; sIdx < styleNodes.length; sIdx++) {
        var cssTxt = styleNodes[sIdx].textContent || "";
        var match = cssTxt.match(/--lm-accent\s*:\s*([^;}\s]+)/i);
        if (match && match[1]) {
          caseStudyAccent = match[1].trim();
          break;
        }
      }
      if (!caseStudyAccent) {
        var probeTarget = (isShadow && shadowRoot.host) ? shadowRoot.host : (htmlEl || bodyEl || doc.documentElement);
        var cs = window.getComputedStyle(probeTarget);
        caseStudyAccent = (cs.getPropertyValue("--lm-accent") || cs.getPropertyValue("--pk-red") || "").trim();
      }
    } catch (_e) {}
    var cardNode = hostEl.querySelector(".pk-archive-timer-modal__card");
    [hostEl, cardNode].forEach(function (targetNode) {
      if (!targetNode || !targetNode.style) return;
      if (caseStudyAccent) {
        targetNode.style.setProperty("--archive-accent", caseStudyAccent);
        targetNode.style.setProperty("--pk-red", caseStudyAccent);
        targetNode.style.setProperty("--lm-accent", caseStudyAccent);
      }
      if (paletteStops.length > 0) {
        targetNode.style.setProperty("--archive-c1", paletteStops[0]);
        targetNode.style.setProperty("--archive-c2", paletteStops[1] || paletteStops[0]);
        targetNode.style.setProperty("--archive-c3", paletteStops[2] || paletteStops[1] || paletteStops[0]);
        targetNode.style.setProperty("--archive-c4", paletteStops[3] || paletteStops[0]);
      }
    });

    function syncDarkTheme() {
      var isDark = (htmlEl && htmlEl.classList.contains("is-dark")) ||
        (bodyEl && bodyEl.classList.contains("is-dark")) ||
        (doc.documentElement && doc.documentElement.getAttribute("data-appearance") === "dark") ||
        (doc.body && doc.body.getAttribute("data-appearance") === "dark");
      hostEl.classList.toggle("is-dark", Boolean(isDark));
    }
    syncDarkTheme();
    var themeObserver = typeof MutationObserver === "function" && htmlEl
      ? new MutationObserver(syncDarkTheme)
      : null;
    if (themeObserver && htmlEl) {
      themeObserver.observe(htmlEl, { attributes: true, attributeFilter: ["class", "data-appearance"] });
    }

    var lastTickTime = Date.now();
    var expired = false;
    var intervalId = 0;

    function getBlurTargets() {
      var caseNavEl = (isShadow ? shadowRoot.querySelector(".case-nav") : null) ||
        (root.querySelector ? root.querySelector(".case-nav") : null) ||
        doc.querySelector(".case-nav");
      var inlineScrollTopEl = (isShadow ? shadowRoot.querySelector(".tlc-scroll-top") : null) ||
        (root.querySelector ? root.querySelector(".tlc-scroll-top") : null) ||
        doc.querySelector(".tlc-scroll-top");
      return [htmlEl, bodyEl, content, caseNavEl, inlineScrollTopEl, projectWin, desktopScrollTopBtn];
    }

    function applyInlineBlurStyles() {
      var caseNavEl = (isShadow ? shadowRoot.querySelector(".case-nav") : null) ||
        (root.querySelector ? root.querySelector(".case-nav") : null) ||
        doc.querySelector(".case-nav");
      var inlineScrollTopEl = (isShadow ? shadowRoot.querySelector(".tlc-scroll-top") : null) ||
        (root.querySelector ? root.querySelector(".tlc-scroll-top") : null) ||
        doc.querySelector(".tlc-scroll-top");
      [content, caseNavEl, inlineScrollTopEl, desktopScrollTopBtn].forEach(function (node) {
        if (!node || !node.style) return;
        node.style.filter = "blur(8px) saturate(0.92)";
        node.style.webkitFilter = "blur(8px) saturate(0.92)";
        node.style.pointerEvents = "none";
        node.style.userSelect = "none";
      });
    }

    function clearInlineBlurStyles() {
      var caseNavEl = (isShadow ? shadowRoot.querySelector(".case-nav") : null) ||
        (root.querySelector ? root.querySelector(".case-nav") : null) ||
        doc.querySelector(".case-nav");
      var inlineScrollTopEl = (isShadow ? shadowRoot.querySelector(".tlc-scroll-top") : null) ||
        (root.querySelector ? root.querySelector(".tlc-scroll-top") : null) ||
        doc.querySelector(".tlc-scroll-top");
      [content, caseNavEl, inlineScrollTopEl, desktopScrollTopBtn].forEach(function (node) {
        if (!node || !node.style) return;
        node.style.filter = "";
        node.style.webkitFilter = "";
        node.style.pointerEvents = "";
        node.style.userSelect = "";
      });
    }

    function cleanupPill() {
      if (pill && pill.parentNode) pill.remove();
      if (headerBarTarget) headerBarTarget.classList.remove("has-archive-timer");
      if (titleNode) titleNode.classList.remove("has-archive-timer");
    }

    function triggerExpire() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = 0;
      }
      expired = true;
      studyState.elapsedMs = durationMs;
      studyState.expired = true;
      writeStudyState(storageKey, studyState);

      if (pill) pill.hidden = true;
      if (headerBarTarget) headerBarTarget.classList.remove("has-archive-timer");
      if (titleNode) titleNode.classList.remove("has-archive-timer");
      if (modalEl) {
        modalEl.hidden = false;
        requestAnimationFrame(function () {
          modalEl.classList.add("is-visible");
        });
      }
      getBlurTargets().forEach(function (node) {
        if (node && node.classList) node.classList.add("is-archive-timed-out");
      });
      applyInlineBlurStyles();
    }

    function onReopen() {
      studyState = readStudyState(storageKey);
      studyState.visits = (studyState.visits || 0) + 1;
      writeStudyState(storageKey, studyState);
      if (studyState.expired || studyState.elapsedMs >= durationMs) {
        triggerExpire();
      } else {
        lastTickTime = Date.now();
      }
    }

    function tick() {
      if (expired) return;

      /* If the hosted project window was closed or removed from DOM, stop and save progress */
      if (hosted && isShadow && (!shadowRoot.host || !shadowRoot.host.isConnected)) {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = 0;
        }
        resetStudyState(storageKey);
        return;
      }

      /* If the project window is minimized/hidden, pause elapsed time accumulation */
      if (projectWin && (projectWin.hidden || projectWin.classList.contains("is-closing"))) {
        lastTickTime = Date.now();
        return;
      }

      var now = Date.now();
      var delta = Math.max(0, Math.min(1000, now - lastTickTime));
      lastTickTime = now;

      studyState.elapsedMs = Math.min(durationMs, (studyState.elapsedMs || 0) + delta);
      writeStudyState(storageKey, studyState);

      var remainingMs = Math.max(0, durationMs - studyState.elapsedMs);
      var remainingSeconds = remainingMs / 1000;
      var ratio = Math.max(0, Math.min(1, remainingMs / durationMs));

      if (clockEl) clockEl.textContent = formatTime(remainingSeconds);
      if (fillEl) fillEl.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
      if (pill) {
        pill.classList.toggle("is-warning", remainingSeconds <= 15 && remainingSeconds > 5);
        pill.classList.toggle("is-critical", remainingSeconds <= 5);
      }

      if (remainingMs <= 0) {
        triggerExpire();
      }
    }

    /* Only show the popup immediately if the 60 seconds have ALREADY lapsed.
       If the 60 seconds have NOT lapsed yet, allow the visitor to access the
       case study and continue counting down their remaining seconds! */
    if (studyState.expired || studyState.elapsedMs >= durationMs) {
      triggerExpire();
    } else {
      lastTickTime = Date.now();
      intervalId = window.setInterval(tick, 200);
      tick();
    }

    if (!hosted) {
      window.addEventListener("pagehide", function () {
        resetStudyState(storageKey);
        cleanupPill();
      }, { once: true });
      window.addEventListener("beforeunload", function () {
        resetStudyState(storageKey);
        cleanupPill();
      }, { once: true });
    }

    var instance = {
      element: hostEl,
      version: TIMER_VERSION,
      expireNow: function () { triggerExpire(); },
      onReopen: onReopen,
      triggerSecondChance: onReopen,
      destroy: function () {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = 0;
        }
        resetStudyState(storageKey);
        if (themeObserver) themeObserver.disconnect();
        cleanupPill();
        getBlurTargets().forEach(function (node) {
          if (node && node.classList) node.classList.remove("is-archive-timed-out");
        });
        clearInlineBlurStyles();
        hostEl.remove();
      }
    };

    hostEl._timerInstance = instance;
    if (projectWin) {
      projectWin._archiveTimer = instance;
    }
    return instance;
  }

  /* Capture-phase listener so clicking an Archive study card in Vision Bin
     when its project window is already open checks onReopen() (only showing
     the popup if its 60s have lapsed, otherwise allowing continued access). */
  if (!window._lmArchiveRepeatClickInstalledV7) {
    window._lmArchiveRepeatClickInstalledV7 = true;
    document.addEventListener("click", function (event) {
      var card = event.target && event.target.closest && event.target.closest("[data-library-study]");
      if (!card) return;
      var idx = Number(card.getAttribute("data-library-study"));
      var items = window.LIBRARY_DATA && window.LIBRARY_DATA.items;
      var item = items && items[idx];
      if (!item || !item.id) return;
      var existingWin = document.querySelector('.project-window[data-project-id="' + item.id + '"]');
      if (existingWin && existingWin._archiveTimer && existingWin._archiveTimer.onReopen) {
        existingWin._archiveTimer.onReopen();
      }
    }, true);
  }

  window.LMArchiveTimer = {
    mount: mount,
    version: TIMER_VERSION,
    _memoryStates: memoryStates
  };

  /* Upgrade any already-mounted project windows in the current document */
  document.querySelectorAll(".project-document-host").forEach(function (host) {
    var sr = host.shadowRoot;
    if (!sr) return;
    var existing = sr.querySelector(".pk-archive-timer-host");
    var wasLegacy = existing && existing.getAttribute("data-timer-version") !== String(TIMER_VERSION);
    if (wasLegacy) {
      if (existing._timerInstance && existing._timerInstance.destroy) {
        existing._timerInstance.destroy();
      } else {
        existing.remove();
      }
    }
    /* If it's a locked case study, make sure no timer pill remains */
    if (sr.querySelector("#case-lock-payload, .case-lock, [data-case-locked]")) {
      var pw = host.closest(".project-window");
      var bar = pw && pw.querySelector(".window-bar-main");
      if (bar) {
        bar.classList.remove("has-archive-timer");
        bar.querySelectorAll(".pk-archive-timer-pill").forEach(function (n) { n.remove(); });
      }
      return;
    }
    var body = sr.querySelector("body[data-archive-timed]") || sr.querySelector("[data-archive-timed]");
    if (body) {
      var scroller = host.closest(".project-content-scroll") || window;
      mount(body, scroller);
    }
  });

  if (document.querySelector("[data-archive-timed]")) {
    var autoMount = function () { mount(document, window); };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", autoMount);
    } else {
      autoMount();
    }
  }
})();
