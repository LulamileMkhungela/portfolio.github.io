/*
 * Case-study process navigator.
 *
 * Reads the sections of the page (every <section id> inside .content), draws
 * them as a numbered vertical rail on wide screens or a compact strip on
 * narrow ones, highlights the step you are reading as you scroll, and jumps
 * to a step when clicked. Protected studies build it once they are unlocked.
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

  function build() {
    if (document.querySelector(".case-nav")) return;
    var content = document.querySelector(".content");
    if (!content) return;
    var sections = Array.prototype.slice.call(content.querySelectorAll("section[id]")).filter(function (s) {
      if (s.hasAttribute("data-case-lock") || s.classList.contains("pk-lock")) return false;
      return s.textContent.trim().length > 0 || s.querySelector("img");
    });
    if (sections.length < 3) return;

    var nav = document.createElement("nav");
    nav.className = "case-nav";
    nav.setAttribute("aria-label", "Case study steps");
    var list = document.createElement("ol");
    list.className = "case-nav__list";
    var links = sections.map(function (section, i) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "case-nav__link";
      a.href = "#" + section.id;
      a.innerHTML = '<span class="case-nav__num">' + String(i + 1).padStart(2, "0") + '</span><span class="case-nav__label">' + labelFor(section) + "</span>";
      a.addEventListener("click", function (event) {
        event.preventDefault();
        var top = section.getBoundingClientRect().top + window.pageYOffset - offset();
        window.scrollTo({ top: top, behavior: prefersReduced() ? "auto" : "smooth" });
        history.replaceState(null, "", "#" + section.id);
        setActive(i);
      });
      li.appendChild(a);
      list.appendChild(li);
      return a;
    });
    var progress = document.createElement("span");
    progress.className = "case-nav__progress";
    progress.setAttribute("aria-hidden", "true");
    nav.appendChild(progress);
    nav.appendChild(list);
    /* Sit between the header and the content so sticky mode docks under the header. */
    var header = content.previousElementSibling && content.previousElementSibling.matches("header, .header") ? content.previousElementSibling : null;
    if (header) header.insertAdjacentElement("afterend", nav); else content.parentNode.insertBefore(nav, content);
    document.documentElement.classList.add("has-case-nav");

    var current = -1;
    function setActive(i) {
      if (i === current) return;
      current = i;
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
      var line = window.innerHeight * 0.38;
      var i = 0;
      for (var k = 0; k < sections.length; k++) {
        if (sections[k].getBoundingClientRect().top - line <= 0) i = k;
      }
      if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) i = sections.length - 1;
      setActive(i);
    }
    function layout() {
      var w = window.innerWidth;
      nav.classList.toggle("is-strip", w < 720);
      nav.classList.toggle("is-compact", w >= 720 && w < 1480);
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener("resize", function () { layout(); update(); });
    layout();
    update();
  }

  function offset() {
    var strip = document.querySelector(".case-nav.is-strip");
    var header = document.querySelector(".header");
    var h = 24;
    if (strip) h += strip.getBoundingClientRect().height;
    if (header && getComputedStyle(header).position === "fixed") h += header.getBoundingClientRect().height;
    return h;
  }
  function prefersReduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
  window.addEventListener("lm-case-unlocked", build);
})();
