// Theme
const setClassAndDataTheme = (newTheme) => {
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(`theme-${newTheme}`);
  document.body.setAttribute("data-theme", newTheme);
};

const toggleTheme = () => {
  const currentTheme = document.body.classList.contains("theme-dark")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setClassAndDataTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || "light";

  setClassAndDataTheme(theme);
});

// Menu
function toggleMenu() {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.toggle("collapsed");
  menuContent.classList.toggle("expanded");
}

// Card
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
