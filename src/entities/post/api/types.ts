const productsDto = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."],
    },
  ],

  total: 100,
  skip: 0,
  limit: 30,
};

type TDeepReadonly<T> = {
  readonly [N in keyof T]: T[N] extends object ? TDeepReadonly<T[N]> : T[N];
};

type IProductsDto = TDeepReadonly<typeof productsDto>;
type IProductDto = IProductsDto["products"][number];

export { IProductsDto, IProductDto };
