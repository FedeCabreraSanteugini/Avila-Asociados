// Espera a que el contenido del DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los elementos con clases de Animate.css
  const animatedSections = document.querySelectorAll(".animate__animated");

  // Inicialmente, ocultamos las secciones
  animatedSections.forEach(section => {
    section.classList.add("animate__fadeOut"); // empieza invisible
    section.style.opacity = "0";
  });

  // Configuración del observador
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento entra en pantalla:
        entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInUp");
        entry.target.style.opacity = "1";
        entry.target.style.visibility = "visible";

        // Solo animar una vez
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // se activa cuando el 20% del elemento es visible
  });

  // Observa cada sección animada
  animatedSections.forEach(section => observer.observe(section));
});
