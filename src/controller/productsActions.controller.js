export default () => {
  const productsActionLeftElement = document.querySelector("#products-action-left");

  productsActionLeftElement.addEventListener("click", () => {
    const productsListElement = document.querySelector("#products-list");

    let newScrollPosition = productsListElement.scrollLeft - 100;

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    };

    productsListElement.scrollLeft = newScrollPosition;
  });

  const productsActionRightElement = document.querySelector("#products-action-right");
  productsActionRightElement.addEventListener("click", () => {
    const productsListElement = document.querySelector("#products-list");

    let newScrollPosition = productsListElement.scrollLeft + 100;
    const maxScrollValue = productsListElement.scrollWidth - productsListElement.clientWidth;

    if (newScrollPosition >  maxScrollValue) {
      newScrollPosition = maxScrollValue;
    };

    productsListElement.scrollLeft = newScrollPosition;
  })
}