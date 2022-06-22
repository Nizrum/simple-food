const incAmountButton = document.querySelector(".product__change-amount-button_inc");
const decAmountButton = document.querySelector(".product__change-amount-button_dec");
const productAmount = document.querySelector(".product__amount");
const productAddButton = document.querySelector(".product__add-button");
const infoTabs = document.querySelectorAll(".info__tab");
const infoTabsContents = document.querySelectorAll(".info__tab-content");

incAmountButton.addEventListener("click", function () {
  if (productAmount.textContent == 99) {
    productAmount.textContent = 99;
  } else {
    productAmount.textContent++;
  }
});

decAmountButton.addEventListener("click", function () {
  if (productAmount.textContent == 0) {
    productAmount.textContent = 0;
  } else {
    productAmount.textContent--;
  }
});

productAddButton.addEventListener("click", function () {
  productAmount.textContent = 1;
});

for (let i = 0; i < infoTabs.length; i++) {
  infoTabs[i].addEventListener("click", function () {
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