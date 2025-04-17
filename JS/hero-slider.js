// Hero Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  const heroSlider = {
    slides: document.querySelectorAll(".hero-slide"),
    dots: document.querySelectorAll(".hero-dot"),
    prevButton: document.getElementById("hero-prev"),
    nextButton: document.getElementById("hero-next"),
    currentSlide: 0,
    intervalId: null,

    init: function () {
      // Set up event listeners
      this.prevButton.addEventListener("click", () => this.prevSlide());
      this.nextButton.addEventListener("click", () => this.nextSlide());

      // Set up dot navigation
      this.dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const index = parseInt(e.target.dataset.index);
          this.goToSlide(index);
        });
      });

      // Start auto-sliding
      this.startAutoSlide();
    },

    startAutoSlide: function () {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },

    resetAutoSlide: function () {
      clearInterval(this.intervalId);
      this.startAutoSlide();
    },

    goToSlide: function (index) {
      // Remove active class from current slide and dot
      this.slides[this.currentSlide].classList.remove("active");
      this.dots[this.currentSlide].classList.remove("active");

      // Update current slide index
      this.currentSlide = index;

      // Add active class to new slide and dot
      this.slides[this.currentSlide].classList.add("active");
      this.dots[this.currentSlide].classList.add("active");

      // Reset auto slide timer
      this.resetAutoSlide();
    },

    nextSlide: function () {
      const newIndex =
        this.currentSlide === this.slides.length - 1
          ? 0
          : this.currentSlide + 1;
      this.goToSlide(newIndex);
    },

    prevSlide: function () {
      const newIndex =
        this.currentSlide === 0
          ? this.slides.length - 1
          : this.currentSlide - 1;
      this.goToSlide(newIndex);
    },
  };

  // Initialize slider
  heroSlider.init();
});
