function toggleMenu() {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.toggle("collapsed");
  menuContent.classList.toggle("expanded");
}

window.addEventListener("load", adjustAllBackgroundHeights);
window.addEventListener("resize", adjustAllBackgroundHeights);

function adjustAllBackgroundHeights() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardBackground = card.previousElementSibling;
    if (
      cardBackground &&
      cardBackground.classList.contains("card-background")
    ) {
      cardBackground.style.height = `${card.offsetHeight}px`;
    }
  });
}
