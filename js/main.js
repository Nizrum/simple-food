const mobileMenuButton = document.querySelector(".header__menu-button");
const mobileMenuCloseButton = document.querySelector(".mobile-menu__close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const bodyOverlay = document.querySelector(".overlay");
const cartButton = document.querySelector(".header__cart");
const searchButton = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");

function toggleMobileMenu() {
    mobileMenu.classList.toggle("mobile-menu_active");
    body.classList.toggle("overflow-hidden");
    bodyOverlay.classList.toggle("overlay_active");
}

searchButton.addEventListener("click", function () {
    searchInput.classList.toggle("search__input_active");
});

cartButton.addEventListener("click", function () {
  alert("Корзина находится в разработке");
});

mobileMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuCloseButton.addEventListener("click", toggleMobileMenu);