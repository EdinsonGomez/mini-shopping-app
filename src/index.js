import "./styles/index.scss";
import productsController from "./controller/products.controller";
import productsActionController from "./controller/productsActions.controller";

window.addEventListener("load", async () => {
  await productsController();

  productsActionController();
});

document.querySelector("#subs-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const emailElement = document.getElementById("subs-email");

  if (emailElement.value) {
    const msgElement = document.querySelector("#subs-msg");
    msgElement.style.display = "block";

    emailElement.value = "";
  }
})
