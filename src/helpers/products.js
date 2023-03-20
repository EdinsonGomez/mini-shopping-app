export const parseResData = (resData) => {
  return (
    resData?.products?.nodes?.map((product) => {
      const { tags, prices } = product;

      const productData = {
        id: product?.id,
        name: product?.title ?? "",
        image: product?.featuredImage?.url ?? "",
        maxPrice: getFormatPrice(
          prices?.max?.amount,
          prices?.max?.currencyCode
        ),
        minPrice: getFormatPrice(
          prices?.min?.amount,
          prices?.min?.currencyCode
        ),
      };

      const ratings = (productData.rating = tags.filter((tag) => Number(tag)));
      const sumRatings = ratings.reduce((sum, curr) => {
        return +sum + +curr;
      }, 0);

      productData.rating = sumRatings / ratings.length;

      return productData;
    }) ?? []
  );
};

const getFormatPrice = (price = 0, currency = "EUR") => {
  return Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    price
  );
};
