// New Zealand SME — small, dependency-free interactions.
(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Current year in footer
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Subscribe form — friendly placeholder (no backend yet)
  document.querySelectorAll("form[data-subscribe]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.parentElement.querySelector("[data-note]");
      var input = form.querySelector("input");
      if (note) {
        note.textContent =
          "Thanks — you're on the list. (Connect this form to your email tool to go live.)";
      }
      if (input) input.value = "";
    });
  });
})();
