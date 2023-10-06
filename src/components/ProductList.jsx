import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';
import Loading from './Loading';
import '../stylesheets/ProductList.css';

function ProductList() {
  const { products, productsError, categoriesError } = useContext(ShopContext);

  if (productsError || categoriesError) {
    return (
      <>
        <h3>
          Error:{' '}
          {productsError ? productsError.message : categoriesError.message}
        </h3>
      </>
    );
  }

  if (!products) return <Loading />;

  return (
    <div className='product-list'>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
