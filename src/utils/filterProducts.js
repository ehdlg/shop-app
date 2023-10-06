export const filterProducts = (products, filter) => {
  return products.filter((product) => {
    return filter === 'all' || product.category === filter;
  });
};
