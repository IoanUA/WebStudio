(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-menu_open"),
    closeMenuBtn: document.querySelector(".mobile-menu_close"),
    Menu: document.querySelector(".mobile-menu-section"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.Menu.classList.toggle("is-hidden");
  }
})();