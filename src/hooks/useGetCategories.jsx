import { useState, useEffect } from 'react';

function useGetCategories() {
  const URL = 'https://fakestoreapi.com/products/categories';

  const [categories, setCategories] = useState(null);
  const [categoriesError, setCategoriesError] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok || !res.status >= 400) {
          throw new Error('Server error, we could not get the categories');
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => setCategoriesError(error));
  }, []);

  return { categories, categoriesError };
}

export default useGetCategories;
