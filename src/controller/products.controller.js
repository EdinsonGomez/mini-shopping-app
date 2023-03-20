
import { getProducts } from "../services/products";
import PruductItem from ".//producItem.controller";
import { parseResData } from "../helpers/products";

export default async () => {
  const productsListElement = document.querySelector("#products-list");

  let products = await getProducts();
  products = parseResData(products);

  const productsList = products.map((productData, idx) => {
    const variant = idx % 2 === 0 ? 1 : 2;

    const product = new PruductItem({
      variant,
      ...productData
    });

    return product.createElement();
  });

  productsListElement.append(...productsList);
}