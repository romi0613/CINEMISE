
window.addEventListener("DOMContentLoaded", () => {
  const percent = document.querySelector(".percent");
  const bar = document.querySelector(".bar");
  const loader = document.getElementById("loader");
  const intro = document.querySelector(".intro");

  let current = 0;
  const interval = setInterval(() => {
    current++;
    percent.textContent = current + "%";
    bar.style.height = current + "vh";

    if (current >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.display = "none";
        intro.style.display = "block";
        intro.style.animationPlayState = "running";
      }, 300);
    }
  }, 20);
});

const cards = document.querySelectorAll(".gallery-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

const stacked = document.querySelector(".stacked-images");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100 && stacked) {
    stacked.classList.add("expanded");
  }
});

window.addEventListener("scroll", () => {
  const stackedContainer = document.querySelector(".stacked-images");
  if (!stackedContainer) return;

  const rect = stackedContainer.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.6;

  if (rect.top < triggerPoint) {
    stackedContainer.classList.add("expanded");
  }
});
