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
const slides = document.querySelectorAll(".review");
const bullets = document.querySelectorAll(".reviews__bullet");
const sliderPrevButton = document.querySelector(".slider-button_prev");
const sliderNextButton = document.querySelector(".slider-button_next");
const tabs = document.querySelectorAll(".tab");
const popularProductCards = document.querySelectorAll(".popular__product-card");

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove('reviews__bullet_active');
    }
    slides[slideIndex - 1].style.display = "flex";
    bullets[slideIndex - 1].classList.add("reviews__bullet_active");
}

function plusSlide() {
    showSlides((slideIndex += 1));
}

function minusSlide() {
    showSlides((slideIndex -= 1));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

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

sliderPrevButton.addEventListener("click", minusSlide);
sliderNextButton.addEventListener("click", plusSlide);

for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', function () {
        currentSlide(bullets[i].value);
    });
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        for (let j = 0; j < popularProductCards.length; j++) {
            popularProductCards[j].style.display = 'none';
        }
        activeCards = document.querySelectorAll(".popular__product-card_" + tabs[i].value);
        for (let j = 0; j < activeCards.length; j++) {
          activeCards[j].style.display = "flex";
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);