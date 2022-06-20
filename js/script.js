const mobileMenuButton = document.querySelector(".header__menu-button");
const mobileMenuCloseButton = document.querySelector(".mobile-menu__close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const bodyOverlay = document.querySelector(".overlay");
const cartButton = document.querySelector(".header__cart");
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
const catalogLinks = document.querySelectorAll(".catalog__link");
const catalogProductCards = document.querySelectorAll(".catalog__product-card");
const incAmountButton = document.querySelector(".product__change-amount-button_inc");
const decAmountButton = document.querySelector(".product__change-amount-button_dec");
const productAmount = document.querySelector(".product__amount");
const productAddButton = document.querySelector(".product__add-button");
const infoTabs = document.querySelectorAll(".info__tab");
const infoTabsContents = document.querySelectorAll(".info__tab-content");

if (sliderPrevButton) {
    let slideIndex = 1;

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
        bullets[i].classList.remove("reviews__bullet_active");
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
    
    showSlides(slideIndex);
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("mobile-menu_active");
    body.classList.toggle("overflow-hidden");
    bodyOverlay.classList.toggle("overlay_active");
}

searchButton.addEventListener("click", function () {
    searchInput.classList.toggle("search__input_active");
});
mobileMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuCloseButton.addEventListener("click", toggleMobileMenu);
cartButton.addEventListener('click', function () {
    alert('Корзина находится в разработке');
});

if (catalogFilterButton) {
    function toggleCatalogSidebar() {
        catalogSidebar.classList.toggle("catalog__sidebar_active");
        body.classList.toggle("overflow-hidden");
        bodyOverlay.classList.toggle("overlay_active");
    }

    catalogFilterButton.addEventListener("click", toggleCatalogSidebar);
    catalogCloseButton.addEventListener("click", toggleCatalogSidebar);
}

if (sliderPrevButton) {
    sliderPrevButton.addEventListener("click", minusSlide);
    sliderNextButton.addEventListener("click", plusSlide);
}

if (bullets) {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener("click", function () {
            currentSlide(bullets[i].value);
        });
    }
}

if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function () {
            for (let j = 0; j < popularProductCards.length; j++) {
                popularProductCards[j].style.display = "none";
            }
            activeCards = document.querySelectorAll(".popular__product-card_" + tabs[i].value);
            for (let j = 0; j < activeCards.length; j++) {
                activeCards[j].style.display = "flex";
            }
        });
    }
}

if (catalogLinks) {
    for (let i = 0; i < catalogLinks.length; i++) {
        catalogLinks[i].addEventListener("click", function () {
            for (let j = 0; j < catalogProductCards.length; j++) {
                catalogProductCards[j].style.display = "none";
            }
            activeCards = document.querySelectorAll(".catalog__product-card_" + catalogLinks[i].dataset.value);
            for (let j = 0; j < activeCards.length; j++) {
                activeCards[j].style.display = "flex";
            }
        });
    }
}

if (incAmountButton) {
    incAmountButton.addEventListener('click', function () {
        if (productAmount.textContent == 99) {
            productAmount.textContent = 99;
        } else {
            productAmount.textContent++;
        }
    });
    decAmountButton.addEventListener('click', function () {
        if (productAmount.textContent == 0) {
            productAmount.textContent = 0;
        } else {
            productAmount.textContent--;
        }
    });
    productAddButton.addEventListener("click", function () {
        productAmount.textContent = 1;
    });
}

if (infoTabs) {
    for (let i = 0; i < infoTabs.length; i++) {
        infoTabs[i].addEventListener('click', function () {
            for (let j = 0; j < infoTabs.length; j++) {
                infoTabs[j].classList.remove("info__tab_active");
            }
            infoTabs[i].classList.add("info__tab_active");
            for (let j = 0; j < infoTabsContents.length; j++) {
                infoTabsContents[j].classList.remove("info__tab-content_active");
            }
            infoTabsContents[i].classList.add("info__tab-content_active");
        });
    }
}