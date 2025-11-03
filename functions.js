
// simple reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
// product image thumbs
const mainImg = document.getElementById('mainProductImg');
const thumbs = document.querySelectorAll('.product-thumbs .thumb');

if (mainImg && thumbs.length) {
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const full = thumb.dataset.full;
      if (full) mainImg.src = full;
    });
  });
}

// tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(p => {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
}

// qty buttons
const qtyInput = document.getElementById('qty');
const qtyBtns = document.querySelectorAll('.qty-btn');

if (qtyInput && qtyBtns.length) {
  qtyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const change = parseInt(btn.dataset.change, 10);
      let current = parseInt(qtyInput.value || "1", 10);
      current += change;
      if (current < 1) current = 1;
      qtyInput.value = current;
    });
  });
}

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('show');
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.15});
  reveals.forEach(r=>obs.observe(r));

//mobile nav toggle
    const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileNav");
  const overlay = document.getElementById("navOverlay");

  function closeMenu() {
    drawer?.classList.remove("open");
    overlay?.classList.remove("show");
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      drawer.classList.toggle("open");
      overlay?.classList.toggle("show");
    });
  }

  overlay?.addEventListener("click", closeMenu);

  drawer?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

// hero slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slidesContainer = document.querySelector(".slides");

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => showSlide(idx));
});
