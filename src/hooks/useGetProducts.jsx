import { useState, useEffect } from 'react';

function useGetProducts() {
  const URL = 'https://fakestoreapi.com/products';

  const [products, setProducts] = useState(null);
  const [productsError, setProductsError] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok || !res.status >= 400) {
          throw new Error('Server error, we could not get the products');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setProductsError(error));
  }, []);

  return { products, productsError };
}

export default useGetProducts;
