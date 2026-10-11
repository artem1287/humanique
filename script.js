/* Humanique — interactions */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // "Select" on the featured plan → jump to the sign-up CTA
  var selectBtn = document.querySelector(".btn--select");
  if (selectBtn) {
    selectBtn.addEventListener("click", function () {
      var target = document.getElementById("start");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      revealSignup();
    });
  }

  // CTA "Get Started" reveals the email form instead of navigating away
  var ctaBtn = document.querySelector("[data-cta]");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function (e) {
      e.preventDefault();
      revealSignup();
    });
  }

  var form = document.querySelector(".signup");

  function revealSignup() {
    if (!form) return;
    form.hidden = false;
    var input = form.querySelector(".signup__input");
    if (input) input.focus();
  }

  // Handle sign-up (front-end only — no backend yet)
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector(".signup__input");
      var msg = form.querySelector(".signup__msg");
      var email = (input && input.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!valid) {
        if (msg) {
          msg.style.color = "#d6694f";
          msg.textContent = "Please enter a valid email address.";
        }
        return;
      }

      // Persist locally so a return visitor sees they're on the list.
      try { localStorage.setItem("humanique_signup", email); } catch (err) {}

      if (msg) {
        msg.style.color = "";
        msg.textContent = "You're on the list — we'll be in touch. 🌿";
      }
      form.reset();
    });
  }

  // Reveal-on-scroll for major sections
  var reveals = [].slice.call(
    document.querySelectorAll(".section-title, .lookalike, .plan, .signup, .hero__mock")
  );
  reveals.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
