/* ── Appearance, in one place ────────────────────────────────────────────────
   Dark is what these pages open with. The choice is answered in this order:

     1. ?appearance=light|dark on the URL, which the desktop adds when it opens
        a case study
     2. the remembered choice, from localStorage
     3. the same choice again from a cookie, because a browser that refuses
        storage inside a frame still keeps a first-party cookie
     4. dark

   The script runs in <head>, before the stylesheets, so the first paint is
   already the right colour. It also listens for the message the desktop sends
   when the switch is flipped while a case study is open.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var KEY = "lm-portfolio-appearance";
  var KNOWN = { light: true, dark: true };
  var root = document.documentElement;
  var meta = null;
  var mode = "dark";

  function normalise(value) {
    return typeof value === "string" && KNOWN[value] ? value : null;
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

  function remember(next) {
    try {
      window.localStorage.setItem(KEY, next);
    } catch (error) {
      // Storage refused: the cookie below still holds the choice.
    }
    try {
      document.cookie = KEY + "=" + next + "; path=/; max-age=31536000; SameSite=Lax";
    } catch (error) {
      // Cookies refused too: the page simply opens dark next time.
    }
  }

  function paint() {
    var isDark = mode !== "light";
    /* The dark surface is painted on <html> as well, so the pixel behind the
       body is right before the body exists and there is no white flash. A
       page that wants its own shade says so on the <html> tag. */
    var darkSurface = root.dataset.darkSurface || "#121212";
    root.classList.toggle("is-dark", isDark);
    root.dataset.appearance = isDark ? "dark" : "light";
    root.style.colorScheme = isDark ? "dark" : "light";
    root.style.backgroundColor = isDark ? darkSurface : (root.dataset.lightSurface || "");
    if (document.body) document.body.dataset.appearance = isDark ? "dark" : "light";
    if (meta) meta.setAttribute("content", isDark ? darkSurface : "#ffffff");
  }

  mode = fromQuery() || fromStorage() || fromCookie() || "dark";

  paint();

  /* The one public door: window.LMAppearance.set("light") remembers the choice,
     apply() only paints. Pages do not need either — the switch lives on the
     desktop — but they keep the API small and honest. */
  window.LMAppearance = {
    get: function () {
      return mode;
    },
    set: function (next) {
      var clean = normalise(next);
      if (!clean) return mode;
      mode = clean;
      paint();
      remember(mode);
      return mode;
    },
    apply: function (next) {
      var clean = normalise(next);
      if (!clean) return mode;
      mode = clean;
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
