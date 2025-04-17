// Animaciones con Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Configuración del Observer
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Visible en al menos 10%
  };

  // Callback cuando los elementos son visibles
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target); // Deja de observar una vez animado
      }
    });
  };

  // Crear el observer
  const observer = new IntersectionObserver(handleIntersect, options);

  // Observar todos los elementos con la clase 'animate'
  document.querySelectorAll(".animate").forEach((element) => {
    observer.observe(element);
  });

  // Animaciones para el hero slider
  const heroTitle = document.querySelector(".hero-slide.active .hero-title");
  const heroSubtitle = document.querySelector(
    ".hero-slide.active .hero-subtitle"
  );
  const heroButton = document.querySelector(".hero-slide.active .hero-button");

  // Añadir clases de animación después de un pequeño retraso para cargar la página
  setTimeout(() => {
    if (heroTitle) heroTitle.classList.add("animate-fade-in-up", "animated");
    if (heroSubtitle) {
      heroSubtitle.classList.add("animate-fade-in-up", "animated");
      heroSubtitle.style.animationDelay = "0.2s";
    }
    if (heroButton) {
      heroButton.classList.add("animate-fade-in-up", "animated");
      heroButton.style.animationDelay = "0.4s";
    }
  }, 300);

  // Animación para el cambio de slide en el hero
  const heroSlider = document.getElementById("hero-slider");
  const animateNewSlide = (slideIndex) => {
    const newTitle = document.querySelector(
      `.hero-slide[data-index="${slideIndex}"] .hero-title`
    );
    const newSubtitle = document.querySelector(
      `.hero-slide[data-index="${slideIndex}"] .hero-subtitle`
    );
    const newButton = document.querySelector(
      `.hero-slide[data-index="${slideIndex}"] .hero-button`
    );

    // Reiniciar animaciones
    [newTitle, newSubtitle, newButton].forEach((el) => {
      if (!el) return;

      // Eliminar y añadir clase para reiniciar animación
      el.classList.remove("animate-fade-in-up", "animated");
      void el.offsetWidth; // Forzar reflow

      el.classList.add("animate-fade-in-up", "animated");
    });

    // Ajustar delays
    if (newSubtitle) newSubtitle.style.animationDelay = "0.2s";
    if (newButton) newButton.style.animationDelay = "0.4s";
  };

  // Escuchar eventos de cambio de slide y aplicar animaciones
  heroSlider.addEventListener("slideChange", (e) => {
    animateNewSlide(e.detail.index);
  });

  // Modificar el objeto heroSlider existente para disparar el evento personalizado
  const originalHeroSlider = window.heroSlider || {};
  const originalGoToSlide = originalHeroSlider.goToSlide;

  if (originalGoToSlide) {
    originalHeroSlider.goToSlide = function (index) {
      // Llamar a la función original
      originalGoToSlide.call(this, index);

      // Disparar evento personalizado
      const event = new CustomEvent("slideChange", {
        detail: { index: index },
      });
      heroSlider.dispatchEvent(event);
    };
  }

  // Animaciones para elementos al hacer scroll
  const addScrollAnimations = () => {
    // Headers de sección
    document.querySelectorAll("section h2").forEach((el) => {
      el.classList.add("animate", "animate-fade-in-up");
    });

    // Párrafos de la sección Connection
    document.querySelectorAll("#connection p").forEach((el, index) => {
      el.classList.add("animate", "animate-fade-in-up");
      el.style.animationDelay = `${index * 0.2}s`;
    });

    // Botones e imágenes
    document.querySelectorAll(".hero-button, .card").forEach((el) => {
      el.classList.add("animate", "animate-scale-in");
    });
  };

  // Aplicar animaciones de scroll
  addScrollAnimations();

  // Efecto de navegación con hover
  document.querySelectorAll(".navbar-desktop-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("animate-pulse");
      link.style.animationDuration = "0.5s";
    });

    link.addEventListener("mouseleave", () => {
      link.classList.remove("animate-pulse");
    });
  });
});
