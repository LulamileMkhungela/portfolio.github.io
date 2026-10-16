/*
 * Password-protected case studies.
 *
 * The page body is stored as AES-256-GCM ciphertext (see
 * scripts/lock_case_studies.py). Nothing readable is in the HTML until the
 * right passphrase is entered: the key is derived in the browser with
 * PBKDF2-SHA256 and the content is decrypted with Web Crypto. A successful
 * passphrase is kept in sessionStorage so the previous/next links between
 * locked studies open without asking again; it is forgotten when the tab closes.
 *
 * The gate is mounted in two places:
 *  - the standalone page, where this file runs and mounts itself on load;
 *  - a desktop project window, where js/desktop.js renders the case study
 *    inside a shadow root and no page scripts run, so desktop.js calls
 *    window.LMCaseLock.mount({ root, onUnlock }) itself (index.html loads this
 *    file for that reason).
 * mount() therefore never assumes its own document: every lookup is scoped to
 * the root it is given.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "lm-case-passphrase";

  function b64ToBytes(b64) {
    var bin = atob(b64.replace(/\s+/g, ""));
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  /**
   * @param options.root      Document, ShadowRoot or element that holds
   *                          [data-case-lock] and #case-lock-payload.
   * @param options.onUnlock  Called after the decrypted body is in the DOM, so
   *                          a host (desktop.js) can mount what the revealed
   *                          sections need — the process stepper, for example.
   * @returns {{ destroy: Function }|null}
   */
  function mount(options) {
    var settings = typeof options === "string" ? { root: options } : (options || {});
    var root = settings.root || document;
    var doc = root.ownerDocument || root;
    var shell = root.querySelector("[data-case-lock]");
    if (!shell || shell.dataset.caseLockMounted === "true") return null;

    var payloadNode = root.querySelector("#case-lock-payload");
    if (!payloadNode) {
      /* Without the ciphertext there is nothing to decrypt, so the form would
         never open. Leave the page as it is and say so in the console: this is
         what used to happen in a desktop window, where every <script> in the
         mounted document was stripped — payload included. */
      console.warn("Case-study lock: #case-lock-payload is missing, so the password gate cannot open here.");
      return null;
    }

    shell.dataset.caseLockMounted = "true";
    var form = shell.querySelector("form");
    var input = shell.querySelector("input[type=password]");
    var button = shell.querySelector("button[type=submit]");
    var message = shell.querySelector("[data-lock-message]");
    var content = shell.closest(".content") || shell.parentNode;
    var htmlElement = root.querySelector("html") ||
      (typeof root.closest === "function" ? root.closest("html") : null) ||
      doc.documentElement;
    var bodyElement = root.querySelector("body") ||
      (typeof root.closest === "function" ? root.closest("body") : null) ||
      doc.body;
    var events = doc.defaultView || window;

    function setBusy(busy) {
      shell.classList.toggle("is-busy", busy);
      if (button) button.disabled = busy;
      if (input) input.disabled = busy;
    }

    function say(text, tone) {
      if (!message) return;
      message.textContent = text || "";
      message.dataset.tone = tone || "";
    }

    function decrypt(passphrase) {
      var subtle = window.crypto && window.crypto.subtle;
      if (!subtle) return Promise.reject(new Error("unsupported"));
      var meta = JSON.parse(payloadNode.dataset.meta || "{}");
      var iterations = Number(meta.iterations) || 310000;
      var salt = b64ToBytes(meta.salt);
      var iv = b64ToBytes(meta.iv);
      var data = b64ToBytes(payloadNode.textContent);
      var enc = new TextEncoder();
      return subtle.importKey("raw", enc.encode(passphrase), "PBKDF2", false, ["deriveKey"])
        .then(function (base) {
          return subtle.deriveKey(
            { name: "PBKDF2", salt: salt, iterations: iterations, hash: "SHA-256" },
            base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
        })
        .then(function (key) { return subtle.decrypt({ name: "AES-GCM", iv: iv }, key, data); })
        .then(function (plain) { return new TextDecoder().decode(plain); });
    }

    function reveal(html) {
      var wrapper = doc.createElement("div");
      wrapper.innerHTML = html;
      var frag = doc.createDocumentFragment();
      while (wrapper.firstChild) frag.appendChild(wrapper.firstChild);
      shell.replaceWith(frag);
      if (payloadNode.parentNode) payloadNode.parentNode.removeChild(payloadNode);
      [htmlElement, bodyElement].forEach(function (element) {
        if (!element) return;
        element.classList.remove("is-case-locked");
        element.classList.add("is-case-unlocked");
      });
      /* Standalone pages listen for this; a hosted window gets the same hook
         through onUnlock below. */
      events.dispatchEvent(new CustomEvent("lm-case-unlocked"));
      var title = content && content.querySelector("#case-title");
      if (title) { title.setAttribute("tabindex", "-1"); title.focus({ preventScroll: true }); }
      /* Anything the revealed sections need is the host's business: let it
         mount here, and never let a host failure read as a wrong password. */
      if (typeof settings.onUnlock === "function") {
        try {
          settings.onUnlock();
        } catch (error) {
          console.error("Case-study lock: onUnlock failed", error);
        }
      }
    }

    function attempt(passphrase, fromStorage) {
      if (!passphrase) return;
      setBusy(true);
      if (!fromStorage) say("Checking…", "");
      decrypt(passphrase).then(function (html) {
        try { sessionStorage.setItem(STORAGE_KEY, passphrase); } catch (e) {}
        try {
          reveal(html);
        } catch (error) {
          setBusy(false);
          say("The page opened but could not be shown. Reload and try again.", "error");
          console.error("Case-study lock: unable to reveal the decrypted body", error);
        }
      }).catch(function (error) {
        setBusy(false);
        if (fromStorage) {
          try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) {}
          return;
        }
        if (error && error.message === "unsupported") {
          say("This browser cannot decrypt the page. Open it over HTTPS in a current browser.", "error");
          return;
        }
        say("That password is not right. Check it and try again.", "error");
        shell.classList.remove("is-shaking");
        void shell.offsetWidth;
        shell.classList.add("is-shaking");
        if (input) { input.select(); input.focus(); }
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      attempt(input.value.trim(), false);
    });

    var remembered = null;
    try { remembered = sessionStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (remembered) attempt(remembered, true);
    else if (input && !window.matchMedia("(max-width: 640px)").matches) input.focus({ preventScroll: true });

    return {
      element: shell,
      destroy: function () { shell.dataset.caseLockMounted = "false"; }
    };
  }

  window.LMCaseLock = { mount: mount, storageKey: STORAGE_KEY };

  /* Standalone page: mount on load. A desktop project window mounts this
     itself, because nothing inside the shadow root executes. */
  if (document.querySelector("[data-case-lock]")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { mount({ root: document }); });
    } else {
      mount({ root: document });
    }
  }
})();
