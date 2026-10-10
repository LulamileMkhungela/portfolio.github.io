/*
 * Content guard: discourages copying text and saving images anywhere on the
 * site. Selection, copy/cut, right-click, image dragging and the save/view-
 * source/print shortcuts are blocked. Form fields keep normal behaviour so the
 * contact form and the case-study password box still work.
 *
 * This is a deterrent for casual copying, not DRM: anything a browser can
 * render can ultimately be captured (screenshots, dev tools).
 */
(function () {
  "use strict";
  var doc = document;
  var editable = function (node) {
    if (!node || !node.closest) return false;
    return !!node.closest("input, textarea, select, [contenteditable=''], [contenteditable='true']");
  };

  var style = doc.createElement("style");
  style.id = "lm-content-guard";
  style.textContent =
    "html, body { -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }" +
    "input, textarea, select, [contenteditable] { -webkit-user-select: text; user-select: text; }" +
    "img, svg, video, canvas { -webkit-user-drag: none; user-drag: none; -webkit-touch-callout: none; }" +
    "@media print { body { display: none !important; } }";
  (doc.head || doc.documentElement).appendChild(style);

  ["copy", "cut", "contextmenu", "dragstart", "selectstart"].forEach(function (type) {
    doc.addEventListener(type, function (event) {
      if (editable(event.target)) return;
      event.preventDefault();
    }, { capture: true });
  });

  doc.addEventListener("keydown", function (event) {
    var meta = event.ctrlKey || event.metaKey;
    if (!meta) return;
    var key = (event.key || "").toLowerCase();
    if (key === "s" || key === "u" || key === "p" || (key === "c" && !editable(event.target)) || (event.shiftKey && (key === "i" || key === "j" || key === "c"))) {
      event.preventDefault();
    }
  }, { capture: true });

  // Images inside links or buttons still open; the image itself cannot be grabbed.
  doc.addEventListener("DOMContentLoaded", function () {
    doc.querySelectorAll("img").forEach(function (img) { img.setAttribute("draggable", "false"); });
  });
})();
