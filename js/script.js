const mobileMenuButton = document.querySelector(".header__menu-button");
const mobileMenuCloseButton = document.querySelector(".mobile-menu__close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const bodyOverlay = document.querySelector(".overlay");
const catalogFilterButton = document.querySelector(".catalog__filter-button");
const catalogCloseButton = document.querySelector(".catalog__close-button");
const catalogSidebar = document.querySelector(".catalog__sidebar");
const searchButton = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");

function toggleMobileMenu() {
    mobileMenu.classList.toggle("mobile-menu_active");
    body.classList.toggle("overflow-hidden");
    bodyOverlay.classList.toggle("overlay_active");
}

function toggleCatalogSidebar() {
    catalogSidebar.classList.toggle("catalog__sidebar_active");
    body.classList.toggle("overflow-hidden");
    bodyOverlay.classList.toggle("overlay_active");
}

searchButton.addEventListener("click", function () {
    searchInput.classList.toggle("search__input_active");
});
mobileMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuCloseButton.addEventListener("click", toggleMobileMenu);
if (catalogFilterButton) {
    catalogFilterButton.addEventListener("click", toggleCatalogSidebar);
    catalogCloseButton.addEventListener("click", toggleCatalogSidebar);
}