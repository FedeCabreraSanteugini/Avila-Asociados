window.onload = () => window.scrollTo(0, 0);

// Animaciones en scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate__animated");

  sections.forEach(s => {
    s.classList.add("animate__fadeOut");
    s.style.opacity = "0";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove("animate__fadeOut");
        e.target.classList.add("animate__fadeInUp");
        e.target.style.opacity = "1";
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));
});

// Navbar scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
