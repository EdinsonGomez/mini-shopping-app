export const getProducts = () => {
  return fetch(
    "https://gradistore-spi.herokuapp.com/products/all",
    { method: "GET" }
  )
  .then((res) => res.json())
  .catch((error) => {
    console.error("Get Products Error: ", error);
    return { products: { nodes: [] }}
  })
}