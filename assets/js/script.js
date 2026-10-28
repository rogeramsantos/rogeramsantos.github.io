// Small enhancements only — the site works without JavaScript.

document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade sections in as they scroll into view.
const revealItems = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  revealItems.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 3, 2) * 70}ms`;
    observer.observe(el);
  });
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

// Soft fade-out before moving to another page on this site.
if (!reduceMotion) {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const url = new URL(link.href, location.href);
    const sameSite = url.origin === location.origin;
    const newTab = link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey;
    const samePage = url.pathname === location.pathname && url.hash;
    if (!sameSite || newTab || samePage || link.hasAttribute("download")) return;
    event.preventDefault();
    document.body.classList.add("is-leaving");
    setTimeout(() => { location.href = url.href; }, 200);
  });

  // Coming back with the browser's Back button restores the page from cache.
  window.addEventListener("pageshow", () => document.body.classList.remove("is-leaving"));
}

// Case study: Full / TL;DR toggle and the side index that follows the reader.
const caseStudy = document.querySelector(".cs");

if (caseStudy) {
  const buttons = caseStudy.querySelectorAll(".cs-toggle button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      caseStudy.classList.toggle("is-tldr", button.dataset.mode === "tldr");
    });
  });

  const stops = [...caseStudy.querySelectorAll(".cs-stops a")];
  const targets = stops.map((a) => document.querySelector(a.hash)).filter(Boolean);

  if ("IntersectionObserver" in window && targets.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          stops.forEach((a) => a.classList.toggle("is-active", a.hash === `#${entry.target.id}`));
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    targets.forEach((t) => spy.observe(t));
  }
}
