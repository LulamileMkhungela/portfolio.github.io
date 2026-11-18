/*
 * Contact form handling for static hosting.
 *
 * The case-study "Let's Collaborate" forms post to ../php/send-email.php, a
 * server-side mailer from the original hosting that is not part of this static
 * site. This script keeps the forms working anywhere:
 *
 *   1. The form is validated (required fields, email format).
 *   2. The original endpoint is still tried first, so a real mail backend keeps
 *      working if one is deployed. It must answer with JSON {"response": true},
 *      the same contract the page template (timber.master.min.js) expects.
 *   3. If there is no backend, the visitor's email app opens with the message
 *      pre-filled, and a direct email link is shown as a backup.
 *
 * It is used in two places:
 *   - Case-study pages (mobile view and direct visits) load this file and it
 *     takes over .contact-form submissions from the template's AJAX handler.
 *   - The desktop windows (js/desktop.js) call window.submitContactForm().
 */
(function () {
  "use strict";

  var CONTACT_EMAIL = "mkhungela.l@gmail.com";
  var BACKEND_TIMEOUT_MS = 2500;
  var MESSAGES = {
    required: "Please fill out required fields.",
    email: "Please enter a valid email address.",
    sending: "Sending...",
    sent: "Thank you! Your message has been sent.",
    mailto: "Your email app should open with your message ready to send. If it doesn't, email "
  };
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function fieldValue(form, name) {
    var field = form.elements.namedItem(name);
    return field && typeof field.value === "string" ? field.value.trim() : "";
  }

  function showResponse(node, message, withEmailLink) {
    if (!node) return;
    node.textContent = message;
    if (withEmailLink) {
      var link = document.createElement("a");
      link.href = "mailto:" + CONTACT_EMAIL;
      link.textContent = CONTACT_EMAIL;
      node.appendChild(link);
      node.appendChild(document.createTextNode("."));
    }
    node.style.display = "block";
    node.style.opacity = "1";
  }

  // Mirrors the template's validation, including its .required-field styling.
  function validate(form) {
    var missing = false;
    Array.prototype.forEach.call(form.querySelectorAll("[required]"), function (field) {
      var empty = !String(field.value || "").trim();
      field.classList.toggle("required-field", empty);
      if (empty) missing = true;
    });
    var email = form.querySelector('input[type="email"]');
    var badEmail = !!(email && email.value.trim() && !EMAIL_PATTERN.test(email.value.trim()));
    if (badEmail) email.classList.add("required-field");
    if (missing && badEmail) return MESSAGES.required + " " + MESSAGES.email;
    if (missing) return MESSAGES.required;
    if (badEmail) return MESSAGES.email;
    return "";
  }

  function postToBackend(form) {
    var action = form.getAttribute("action");
    if (!action || !/^https?:$/.test(window.location.protocol) || typeof fetch !== "function") {
      return Promise.resolve(false);
    }
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, BACKEND_TIMEOUT_MS) : null;
    return fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
      headers: { Accept: "application/json" },
      signal: controller ? controller.signal : undefined
    })
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (data) { return !!data && data.response === true; })
      .catch(function () { return false; })
      .then(function (sent) {
        if (timer) clearTimeout(timer);
        return sent;
      });
  }

  function openEmailApp(form) {
    var name = fieldValue(form, "fname");
    var email = fieldValue(form, "email");
    var message = fieldValue(form, "message");
    var subject = "Portfolio inquiry" + (name ? " from " + name : "");
    var signature = [name, email].filter(Boolean).join("\r\n");
    var body = message + (signature ? "\r\n\r\n" + signature : "");
    var link = document.createElement("a");
    link.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    link.target = "_top";
    link.rel = "noopener";
    link.style.display = "none";
    (form.ownerDocument.body || form).appendChild(link);
    link.click();
    link.remove();
  }

  function submitContactForm(form, responseNode) {
    if (!form || form.dataset.contactSending === "true") return Promise.resolve();
    responseNode = responseNode || (form.parentElement && form.parentElement.querySelector(".form-response"));
    // Spam trap: real visitors never see or fill the honeypot field.
    var honeypot = form.querySelector(".form-honeypot");
    if (honeypot && honeypot.value) return Promise.resolve();

    var error = validate(form);
    if (error) {
      showResponse(responseNode, error);
      return Promise.resolve();
    }

    var submit = form.querySelector('[type="submit"]');
    var label = submit ? submit.value : "";
    form.dataset.contactSending = "true";
    if (submit) {
      submit.disabled = true;
      submit.value = MESSAGES.sending;
    }
    showResponse(responseNode, MESSAGES.sending);

    return postToBackend(form).then(function (sent) {
      if (sent) {
        showResponse(responseNode, MESSAGES.sent);
        form.reset();
      } else {
        openEmailApp(form);
        showResponse(responseNode, MESSAGES.mailto, true);
      }
    }).then(function () {
      delete form.dataset.contactSending;
      if (submit) {
        submit.disabled = false;
        submit.value = label;
      }
    });
  }

  window.submitContactForm = submitContactForm;

  // Case-study pages: intercept submits before the template's AJAX handler
  // (bound on the form itself) so visitors never see a "server error".
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("form.contact-form")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    submitContactForm(form);
  }, true);
})();
