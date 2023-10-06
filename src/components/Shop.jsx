import ProductList from './ProductList';
import Header from './Header';
import ShopCart from './Cart';

function Shop() {
  return (
    <>
      <Header />
      <main className='content'>
        <ProductList />
        <ShopCart />
      </main>
    </>
  );
}

export default Shop;
