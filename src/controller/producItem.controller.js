import productItemHTML from "../views/productItem.html";

export default class ProductItem {
  #id;
  #variant = null;

  constructor({ variant, id, image, name, rating, minPrice, maxPrice }) {
    this.#variant = variant ?? 1;
    this.#id = id;
    this.image = image ?? "";
    this.name = name;
    this.rating = rating ?? 0;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }

  createElement() {
    const element = document.createElement("div");
    element.setAttribute("id", `product-${this.#id}`);
    element.setAttribute("class", "products-item-container");
    element.innerHTML = productItemHTML;

    const itemContentElement = element.querySelector(".products-item-content");
    itemContentElement.style.backgroundImage = `url(${this.image})`;
    itemContentElement.classList.add(`variant-${this.#variant}`);

    const btnItemElement = element.querySelector(".products-item-btn");
    btnItemElement.innerHTML = this.#variant === 1 ? "Add card" : "See more";

    const nameElement = element.querySelector(".products-item-name");
    nameElement.innerHTML = this.name;

    const starsNumber = Math.ceil(this.rating / 100);
    const starsListElements = Array.from({ length: starsNumber }, () => {
      const startIconElement = document.createElement("i");
      startIconElement.setAttribute("class", "fa-solid fa-star product-star");
      return startIconElement;
    });

    element.querySelector(".products-item-stars-content").append(...starsListElements);
    element.querySelector(".products-item-rating").innerHTML = `(${this.rating})`;

    element.querySelector(".min-price").innerHTML = this.minPrice;
    element.querySelector(".max-price").innerHTML = this.maxPrice;

    return element;
  }
}