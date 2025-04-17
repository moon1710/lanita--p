const images = [
  { id: 1, src: "assets/img/lana1.jpg", alt: "Gallery image 1" },
  { id: 2, src: "assets/img/lana2.jpg", alt: "Gallery image 2" },
  { id: 3, src: "assets/img/lana3.jpg", alt: "Gallery image 3" },
  { id: 4, src: "assets/img/lana4.jpg", alt: "Gallery image 4" },
  { id: 5, src: "assets/img/lana5.jpg", alt: "Gallery image 5" },
  { id: 6, src: "assets/img/lana6.jpg", alt: "Gallery image 6" },
  { id: 7, src: "assets/img/lana7.png", alt: "Gallery image 7" },
  { id: 8, src: "assets/img/lana8.png", alt: "Gallery image 8" },
];

const galleryContainer = document.getElementById("gallery-container");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

galleryContainer.innerHTML = images
  .map(
    (img) => `
  <img src="${img.src}" alt="${img.alt}" data-full="${img.src}">
`
  )
  .join("");

galleryContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.dataset.full;
    lightboxImg.alt = e.target.alt;
    lightbox.style.display = "flex";
  }
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
