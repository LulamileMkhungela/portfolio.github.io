/*
 * Password-protected case studies.
 *
 * The page body is stored as AES-256-GCM ciphertext (see
 * scripts/lock_case_studies.py). Nothing readable is in the HTML until the
 * right passphrase is entered: the key is derived in the browser with
 * PBKDF2-SHA256 and the content is decrypted with Web Crypto. A successful
 * passphrase is kept in sessionStorage so the previous/next links between
 * locked studies open without asking again; it is forgotten when the tab closes.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "lm-case-passphrase";
  var root = document.querySelector("[data-case-lock]");
  if (!root) return;

  var payloadNode = document.getElementById("case-lock-payload");
  var form = root.querySelector("form");
  var input = root.querySelector("input[type=password]");
  var button = root.querySelector("button[type=submit]");
  var message = root.querySelector("[data-lock-message]");
  var content = root.closest(".content") || root.parentNode;

  function b64ToBytes(b64) {
    var bin = atob(b64.replace(/\s+/g, ""));
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function setBusy(busy) {
    root.classList.toggle("is-busy", busy);
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
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    var frag = document.createDocumentFragment();
    while (wrapper.firstChild) frag.appendChild(wrapper.firstChild);
    root.replaceWith(frag);
    if (payloadNode && payloadNode.parentNode) payloadNode.parentNode.removeChild(payloadNode);
    document.documentElement.classList.remove("is-case-locked");
    document.documentElement.classList.add("is-case-unlocked");
    // Let any scroll-to-top / reveal helpers see the new nodes.
    window.dispatchEvent(new CustomEvent("lm-case-unlocked"));
    var title = content.querySelector("#case-title");
    if (title) { title.setAttribute("tabindex", "-1"); title.focus({ preventScroll: true }); }
  }

  function attempt(passphrase, fromStorage) {
    if (!passphrase) return;
    setBusy(true);
    if (!fromStorage) say("Checking…", "");
    decrypt(passphrase).then(function (html) {
      try { sessionStorage.setItem(STORAGE_KEY, passphrase); } catch (e) {}
      reveal(html);
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
      root.classList.remove("is-shaking");
      void root.offsetWidth;
      root.classList.add("is-shaking");
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
})();
