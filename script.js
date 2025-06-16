// ===== 로딩 애니메이션 및 도돌이 슬라이더 기능 포함 =====

window.addEventListener("DOMContentLoaded", () => {
  // ✅ 로딩 애니메이션 처리
  const percent = document.querySelector(".percent");
  const bar = document.querySelector(".bar");
  const loader = document.getElementById("loader");
  const intro = document.querySelector(".intro");

  const hasLoaded = sessionStorage.getItem("hasLoaded") === "true";
  if (hasLoaded) {
    loader.style.display = "none";
    intro.style.display = "block";
    intro.style.animationPlayState = "running";
  } else {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      percent.textContent = `${current}%`;
      bar.style.width = `${current}%`;

      if (current >= 100) {
        clearInterval(interval);
        sessionStorage.setItem("hasLoaded", "true");
        setTimeout(() => {
          loader.style.display = "none";
          intro.style.display = "block";
          intro.style.animationPlayState = "running";
        }, 300);
      }
    }, 20);
  }

  // 2) Gallery 카드 fade-in
const cards = document.querySelectorAll(".gallery-card");
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));

// 3) Stacked 이미지 스크롤 애니메이션
const stacked = document.querySelector(".stacked-images");
window.addEventListener("scroll", () => {
  if (!stacked) return;
  const rect = stacked.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.6) {
    stacked.classList.add("expanded");
  }
});


  // ✅ 갤러리 슬라이더 (도돌이 슬라이드)
  const items = Array.from(document.querySelectorAll(".slider-item"));
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");
  let currentIndex = 0;

  function updateSlider() {
    const total = items.length;

    items.forEach(item => {
      item.classList.remove("prev", "current", "next");
      item.style.opacity = 0;
    });

    const curr = items[currentIndex];
    curr.classList.add("current");
    curr.style.opacity = 1;

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const prev = items[prevIndex];
    const next = items[nextIndex];

    prev.classList.add("prev");
    prev.style.opacity = 0.4;

    next.classList.add("next");
    next.style.opacity = 0.4;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
  });

  updateSlider();
});
function addComment() {
  const input = document.getElementById('comment-input');
  const list = document.getElementById('comment-list');
  if (input.value.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = input.value.trim();
    list.appendChild(p);
    input.value = '';
  }
}
