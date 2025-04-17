document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("lyrics-modal");
  const content = document.getElementById("lyrics-content");
  const closeBtn = document.getElementById("lyrics-close");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (!content.contains(e.target)) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
