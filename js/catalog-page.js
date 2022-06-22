const catalogFilterButton = document.querySelector(".catalog__filter-button");
const catalogCloseButton = document.querySelector(".catalog__close-button");
const catalogSidebar = document.querySelector(".catalog__sidebar");
const catalogLinks = document.querySelectorAll(".catalog__link");
const catalogProductCards = document.querySelectorAll(".catalog__product-card");

function toggleCatalogSidebar() {
  catalogSidebar.classList.toggle("catalog__sidebar_active");
  body.classList.toggle("overflow-hidden");
  bodyOverlay.classList.toggle("overlay_active");
}

catalogFilterButton.addEventListener("click", toggleCatalogSidebar);
catalogCloseButton.addEventListener("click", toggleCatalogSidebar);

for (let i = 0; i < catalogLinks.length; i++) {
  catalogLinks[i].addEventListener("click", function () {
    for (let j = 0; j < catalogProductCards.length; j++) {
      catalogProductCards[j].style.display = "none";
    }
    activeCards = document.querySelectorAll(
      ".catalog__product-card_" + catalogLinks[i].dataset.value
    );
    for (let j = 0; j < activeCards.length; j++) {
      activeCards[j].style.display = "flex";
    }
  });
}