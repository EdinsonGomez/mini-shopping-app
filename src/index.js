import "./styles/index.scss";
import productsController from "./controller/products.controller";
import productsActionController from "./controller/productsActions.controller";

window.addEventListener("load", async () => {
  await productsController();

  productsActionController();
});
