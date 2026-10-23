const clock = document.querySelector<HTMLElement>("[data-dubai]");
if (clock) {
  const update = () => {
    clock.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  };
  update();
  setInterval(update, 60000);
}

if (
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  "IntersectionObserver" in window
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".project-caption, .talk-copy, .editorial-row, .experiment-text",
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  document.documentElement.classList.add("js-motion");
}
