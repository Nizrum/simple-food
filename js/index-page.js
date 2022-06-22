const slides = document.querySelectorAll(".review");
const bullets = document.querySelectorAll(".reviews__bullet");
const sliderPrevButton = document.querySelector(".slider-button_prev");
const sliderNextButton = document.querySelector(".slider-button_next");
const tabs = document.querySelectorAll(".tab");
const popularProductCards = document.querySelectorAll(".popular__product-card");

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

sliderPrevButton.addEventListener("click", minusSlide);
sliderNextButton.addEventListener("click", plusSlide);

for (let i = 0; i < bullets.length; i++) {
  bullets[i].addEventListener("click", function () {
    currentSlide(bullets[i].value);
  });
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let j = 0; j < popularProductCards.length; j++) {
      popularProductCards[j].style.display = "none";
    }
    activeCards = document.querySelectorAll(
      ".popular__product-card_" + tabs[i].value
    );
    for (let j = 0; j < activeCards.length; j++) {
      activeCards[j].style.display = "flex";
    }
  });
}

showSlides(slideIndex);