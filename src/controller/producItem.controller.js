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

    this.#addValueToElement(element, ".products-item-btn", this.#variant === 1 ? "Add card" : "See more");
    this.#addValueToElement(element, ".products-item-name", this.name);
    this.#addValueToElement(element, ".products-item-rating", `(${this.rating})`);
    this.#addValueToElement(element, ".min-price", this.minPrice);
    this.#addValueToElement(element, ".max-price", this.maxPrice);

    const starsNumber = Math.ceil(this.rating / 100);
    const starsListElements = Array.from({ length: starsNumber }, () => {
      const startIconElement = document.createElement("i");
      startIconElement.setAttribute("class", "fa-solid fa-star product-star");
      return startIconElement;
    });

    element.querySelector(".products-item-stars-content").append(...starsListElements);

    return element;
  }

  #addValueToElement(parentElment, id, value) {
    const element = parentElment.querySelector(id);
    element.innerHTML = value;
  }
}