/*
 * Case-study process navigator.
 *
 * Reads the sections of a case study (every <section id> inside .content),
 * draws them as a numbered vertical rail, highlights the step being read as
 * the page scrolls, and jumps to a step on click.
 *
 * Works in two places:
 *  - the standalone page (document scrolls; nav is fixed to the viewport)
 *  - a desktop project window, where js/desktop.js renders the page inside a
 *    shadow root and the window body is the scroller. desktop.js calls
 *    window.LMCaseNav.mount(root, scroller) after it injects the markup.
 * Protected studies build it once they are unlocked.
 */
(function () {
  "use strict";

  var LABELS = {
    lead: "Context", context: "Context", overview: "Overview", product: "The product",
    problem: "Problem", goals: "Goals", goal: "Goal", research: "Research", personas: "Personas",
    dashboards: "Dashboards", role: "Role & boundaries", decisions: "Key decisions",
    process: "Process", solution: "Solution", impact: "Impact", takeaways: "Takeaways",
    checks: "How I checked it", tradeoffs: "Trade-offs", outcomes: "Outcome & evidence",
    work: "The work", live: "Live product", engagements: "Engagements", shipped: "What shipped",
    conclusion: "What changed"
  };

  function labelFor(section) {
    if (LABELS[section.id]) return LABELS[section.id];
    var h = section.querySelector("h1, h2, h3, .pk-eyebrow");
    return h ? h.textContent.trim().replace(/\s+/g, " ").slice(0, 32) : section.id;
  }
  function prefersReduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /**
   * @param root      Document, ShadowRoot or element that contains .content
   * @param scroller  window (standalone page) or the scrolling element (desktop window)
   */
  function mount(root, scroller) {
    root = root || document;
    scroller = scroller || window;
    var hosted = scroller !== window;
    if (root.querySelector(".case-nav")) return null;
    var content = root.querySelector(".content");
    if (!content) return null;
    var sections = Array.prototype.slice.call(content.querySelectorAll("section[id]")).filter(function (s) {
      /* Skip the lock shell and its sections; a protected study builds the
         navigator once js/case-lock.js has decrypted the body. */
      if (s.closest("[data-case-lock]") || s.classList.contains("pk-lock")) return false;
      return s.textContent.trim().length > 0 || s.querySelector("img");
    });
    if (sections.length < 3) return null;

    var doc = content.ownerDocument;
    var nav = doc.createElement("nav");
    nav.className = "case-nav" + (hosted ? " is-hosted" : "");
    nav.setAttribute("aria-label", "Case study steps");
    var list = doc.createElement("ol");
    list.className = "case-nav__list";

    function viewport() {
      if (!hosted) return { top: 0, height: window.innerHeight, width: window.innerWidth };
      var r = scroller.getBoundingClientRect();
      return { top: r.top, height: scroller.clientHeight, width: scroller.clientWidth };
    }
    function stripHeight() {
      return nav.classList.contains("is-strip") ? nav.getBoundingClientRect().height : 0;
    }
    function offset() {
      var h = 24 + stripHeight();
      if (!hosted) {
        var header = doc.querySelector(".header");
        if (header && getComputedStyle(header).position === "fixed") h += header.getBoundingClientRect().height;
      }
      return h;
    }
    function scrollTo(section) {
      var vp = viewport();
      var current = hosted ? scroller.scrollTop : window.pageYOffset;
      var top = current + section.getBoundingClientRect().top - vp.top - offset();
      var behavior = prefersReduced() ? "auto" : "smooth";
      if (hosted) scroller.scrollTo({ top: top, behavior: behavior });
      else window.scrollTo({ top: top, behavior: behavior });
    }

    var links = sections.map(function (section, i) {
      var li = doc.createElement("li");
      var a = doc.createElement("a");
      a.className = "case-nav__link";
      a.href = "#" + section.id;
      a.innerHTML = '<span class="case-nav__num">' + String(i + 1).padStart(2, "0") + '</span><span class="case-nav__label">' + labelFor(section) + "</span>";
      a.addEventListener("click", function (event) {
        event.preventDefault();
        scrollTo(section);
        if (!hosted) history.replaceState(null, "", "#" + section.id);
        setActive(i);
      });
      li.appendChild(a);
      list.appendChild(li);
      return a;
    });
    var progress = doc.createElement("span");
    progress.className = "case-nav__progress";
    progress.setAttribute("aria-hidden", "true");
    nav.appendChild(progress);
    nav.appendChild(list);

    /* Close / reopen. Closed state collapses the rail to a small "Steps" tab. */
    var closeBtn = doc.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "case-nav__close";
    closeBtn.setAttribute("aria-label", "Hide process steps");
    closeBtn.title = "Hide steps";
    closeBtn.innerHTML = '<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>';
    var openBtn = doc.createElement("button");
    openBtn.type = "button";
    openBtn.className = "case-nav__open";
    openBtn.setAttribute("aria-label", "Show process steps");
    openBtn.innerHTML = '<span class="case-nav__open-num">01</span><span class="case-nav__open-label">Steps</span>';
    list.insertBefore(closeBtn, list.firstChild);
    nav.appendChild(openBtn);
    var CLOSED_KEY = "lm-case-nav-closed";
    function readClosed() { try { return sessionStorage.getItem(CLOSED_KEY) === "1"; } catch (e) { return false; } }
    function setClosed(closed) {
      nav.classList.toggle("is-closed", closed);
      try { sessionStorage.setItem(CLOSED_KEY, closed ? "1" : "0"); } catch (e) {}
      (closed ? openBtn : closeBtn).focus({ preventScroll: true });
    }
    closeBtn.addEventListener("click", function () { setClosed(true); });
    openBtn.addEventListener("click", function () { setClosed(false); });
    nav.classList.toggle("is-closed", readClosed());

    if (hosted) {
      /* The theme's .wrapper-inner is overflow:hidden, which would stop a sticky
         rail. Mount at the very top of the hosted body instead. */
      /* Prefer the shadow root itself (a sibling of the <html> shell) so the
         only scrolling ancestor is the window's scroller and sticky works. */
      var shadowRoot = root.getRootNode && root.getRootNode();
      var isShadow = shadowRoot && shadowRoot.nodeType === 11 && shadowRoot.host;
      if (isShadow) {
        shadowRoot.insertBefore(nav, shadowRoot.querySelector("html") || shadowRoot.firstChild);
      } else {
        var body = root.matches && root.matches("body") ? root : (root.querySelector("body") || content.parentNode);
        body.insertBefore(nav, body.firstChild);
      }
    } else {
      /* Sit between the header and the content so strip mode docks under the header. */
      var header = content.previousElementSibling && content.previousElementSibling.matches("header, .header") ? content.previousElementSibling : null;
      if (header) header.insertAdjacentElement("afterend", nav); else content.parentNode.insertBefore(nav, content);
    }
    (root.documentElement || root.host || doc.documentElement).classList.add("has-case-nav");

    var current = -1;
    function setActive(i) {
      if (i === current) return;
      current = i;
      var openNum = nav.querySelector(".case-nav__open-num");
      if (openNum) openNum.textContent = String(i + 1).padStart(2, "0") + "/" + String(links.length).padStart(2, "0");
      links.forEach(function (a, j) {
        a.classList.toggle("is-active", j === i);
        a.classList.toggle("is-done", j < i);
        if (j === i) a.setAttribute("aria-current", "step"); else a.removeAttribute("aria-current");
      });
      progress.style.setProperty("--case-nav-progress", ((i + 1) / links.length * 100).toFixed(1) + "%");
      var active = links[i];
      if (active && nav.classList.contains("is-strip") && typeof active.scrollIntoView === "function") {
        active.scrollIntoView({ block: "nearest", inline: "center", behavior: prefersReduced() ? "auto" : "smooth" });
      }
    }
    function update() {
      var vp = viewport();
      var line = vp.top + vp.height * 0.38;
      var i = 0;
      for (var k = 0; k < sections.length; k++) {
        if (sections[k].getBoundingClientRect().top - line <= 0) i = k;
      }
      var atEnd = hosted
        ? scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2
        : window.innerHeight + window.pageYOffset >= doc.documentElement.scrollHeight - 2;
      if (atEnd) i = sections.length - 1;
      setActive(i);
    }
    function layout() {
      var w = viewport().width;
      nav.classList.toggle("is-strip", w < 720);
      /* Labels stay visible on anything wider than a tablet; numbers-only
         compact mode is for the narrow band in between. */
      nav.classList.toggle("is-compact", w >= 720 && w < 960);
    }
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { update(); ticking = false; });
    }
    var scrollTarget = hosted ? scroller : window;
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    var resizeObserver = hosted && typeof ResizeObserver === "function" ? new ResizeObserver(function () { layout(); update(); }) : null;
    if (resizeObserver) resizeObserver.observe(scroller);
    else window.addEventListener("resize", function () { layout(); update(); });
    layout();
    update();

    return {
      element: nav,
      refresh: function () { layout(); update(); },
      destroy: function () {
        scrollTarget.removeEventListener("scroll", onScroll);
        if (resizeObserver) resizeObserver.disconnect();
        nav.remove();
      }
    };
  }

  window.LMCaseNav = { mount: mount };

  /* Standalone page: build on load, and again once a protected study unlocks. */
  if (document.querySelector(".content")) {
    var auto = function () { mount(document, window); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", auto);
    else auto();
    window.addEventListener("lm-case-unlocked", auto);
  }
})();
