/* ── Appearance, in one place ────────────────────────────────────────────────
   Follows the phone or PC OS appearance setting (prefers-color-scheme) by
   default, and updates live if the device theme changes. Priority order:

     1. ?appearance=light|dark on the URL, which the desktop adds when it opens
        a case study
     2. an explicit manual override in localStorage / cookie (when chosen in
        System Settings; "auto" follows the device OS setting)
     3. phone / PC OS setting via window.matchMedia("(prefers-color-scheme: dark)")

   The script runs in <head>, before the stylesheets, so the first paint is
   already the right colour. It also listens for the message the desktop sends
   when the switch is flipped while a case study is open.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var KEY = "lm-portfolio-appearance-v2";
  var KNOWN = { light: true, dark: true, auto: true };
  var root = document.documentElement;
  var meta = null;
  var mediaQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;
  var choice = "auto";
  var mode = "dark";

  function normalise(value) {
    return typeof value === "string" && KNOWN[value] ? value : null;
  }

  function fromSystem() {
    try {
      if (mediaQuery) {
        return mediaQuery.matches ? "dark" : "light";
      }
    } catch (_error) {}
    return "dark";
  }

  function resolveMode(rawChoice) {
    if (rawChoice === "light" || rawChoice === "dark") return rawChoice;
    return fromSystem();
  }

  function fromQuery() {
    try {
      return normalise(new URLSearchParams(window.location.search).get("appearance"));
    } catch (error) {
      return null;
    }
  }

  function fromStorage() {
    try {
      return normalise(window.localStorage.getItem(KEY));
    } catch (error) {
      return null;
    }
  }

  function fromCookie() {
    try {
      var match = document.cookie.match(new RegExp("(?:^|; )" + KEY + "=([^;]*)"));
      return match ? normalise(decodeURIComponent(match[1])) : null;
    } catch (error) {
      return null;
    }
  }

  function remember(nextChoice) {
    try {
      if (nextChoice === "auto") {
        window.localStorage.removeItem(KEY);
      } else {
        window.localStorage.setItem(KEY, nextChoice);
      }
    } catch (error) {}
    try {
      if (nextChoice === "auto") {
        document.cookie = KEY + "=; path=/; max-age=0; SameSite=Lax";
      } else {
        document.cookie = KEY + "=" + nextChoice + "; path=/; max-age=31536000; SameSite=Lax";
      }
    } catch (error) {}
  }

  function paint() {
    var isDark = mode !== "light";
    var darkSurface = root.dataset.darkSurface || "#121212";
    root.classList.toggle("is-dark", isDark);
    root.dataset.appearance = isDark ? "dark" : "light";
    root.dataset.appearanceChoice = choice;
    root.style.colorScheme = isDark ? "dark" : "light";
    root.style.backgroundColor = isDark ? darkSurface : (root.dataset.lightSurface || "");
    if (document.body) {
      document.body.dataset.appearance = isDark ? "dark" : "light";
      document.body.dataset.appearanceChoice = choice;
    }
    if (meta) meta.setAttribute("content", isDark ? darkSurface : "#ffffff");
  }

  var initialQuery = fromQuery();
  var storedChoice = fromStorage() || fromCookie();
  if (initialQuery === "light" || initialQuery === "dark") {
    choice = storedChoice || "auto";
    mode = initialQuery;
  } else {
    choice = storedChoice || "auto";
    mode = resolveMode(choice);
  }

  paint();

  function handleSystemThemeChange() {
    if (choice !== "auto") return;
    var nextMode = fromSystem();
    if (nextMode === mode) return;
    mode = nextMode;
    paint();
    try {
      window.dispatchEvent(new CustomEvent("lm-system-appearance-change", { detail: { mode: mode, choice: choice } }));
    } catch (_error) {}
  }

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }

  window.LMAppearance = {
    get: function () {
      return mode;
    },
    getChoice: function () {
      return choice;
    },
    getSystem: function () {
      return fromSystem();
    },
    set: function (next) {
      var clean = normalise(next);
      if (!clean) return mode;
      choice = clean;
      mode = resolveMode(choice);
      paint();
      remember(choice);
      return mode;
    },
    apply: function (next) {
      var clean = normalise(next);
      if (!clean) return mode;
      if (clean === "auto") {
        choice = "auto";
        mode = fromSystem();
      } else {
        mode = clean;
      }
      paint();
      return mode;
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    meta = document.querySelector('meta[name="theme-color"]');
    paint();
  });

  window.addEventListener("message", function (event) {
    if (event.data && event.data.type === "lm-appearance") {
      window.LMAppearance.apply(event.data.mode);
    }
  });
})();
