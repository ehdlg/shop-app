import Header from './Header';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';
import '../utils/filterProducts';
import { filterProducts } from '../utils/filterProducts';
import Carrousel from './Carrousel';
import ShopCart from './Cart';
import Loading from './Loading';

function Home() {
  const { products, categories, filterHome, setFilterHome } =
    useContext(ShopContext);
  const [filteredProducts, setFileteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFileteredProducts(filterProducts(products, filterHome));
    }
  }, [products, filterHome]);

  if (!products || !categories)
    return (
      <>
        <Header />
        <Loading />
      </>
    );

  return (
    <>
      <Header />
      <main className='content home-content'>
        <section className='hero-section'>
          <div className='hero-content'>
            <h1>Welcome to Our Online Store</h1>
            <p>Discover the latest trends and best deals.</p>
            <Link to='/shop' className='btn-shop-now'>
              Shop Now
            </Link>
          </div>
        </section>

        {filteredProducts.length > 0 && (
          <section className='featured-products'>
            <h2>Featured Products</h2>
            <select
              onChange={(e) => setFilterHome(e.target.value)}
              name='categories'
              id='categories'
              className='select-home-categorie'
              value={filterHome}
            >
              <option value='all'>All</option>
              {categories &&
                categories.map((categorie, index) => {
                  return (
                    <option
                      className='select-categorie'
                      key={index}
                      value={categorie}
                    >
                      {categorie}
                    </option>
                  );
                })}
            </select>
            {filteredProducts && <Carrousel products={filteredProducts} />}
          </section>
        )}

        <section className='about-us'>
          <div className='about-us-content'>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo est, vulputate id cursus in, cursus eu sem. Integer
              efficitur elit ut est bibendum, vitae consectetur justo imperdiet.
            </p>
          </div>
        </section>
        <ShopCart />
      </main>
    </>
  );
}

export default Home;
