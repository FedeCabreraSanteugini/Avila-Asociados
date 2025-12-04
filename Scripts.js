window.onload = function() {
  window.scrollTo(0, 0);
}

// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".animate__animated");

  // Ocultar inicialmente
  animatedSections.forEach(section => {
    section.classList.add("animate__fadeOut");
    section.style.opacity = "0";
  });

  // Configurar observador
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInUp");
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedSections.forEach(section => observer.observe(section));
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
