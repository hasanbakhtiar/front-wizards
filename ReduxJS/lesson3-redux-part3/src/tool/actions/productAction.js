export const createProduct = ({
  title = 'demo title',
  image = 'demo image',
  price = 0,
  descrition = 'demo description',
}) => ({
  type: 'CREATE_PRODUCT',
  product: {
    id: crypto.randomUUID(),
    image,
    title,
    price,
    descrition,
  },
});
