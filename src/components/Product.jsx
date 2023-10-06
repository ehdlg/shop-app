/* eslint-disable react/prop-types */
import { useContext } from 'react';
import '../stylesheets/Product.css';
import { ShopContext } from '../context/ShopContext';

function Product({ product }) {
  const { addToCart, removeFromCart, cart } = useContext(ShopContext);
  const isInCart = cart.some((productCart) => productCart.id === product.id);

  const productButton = !isInCart ? (
    <button
      className='add-cart'
      onClick={() => {
        addToCart(product);
      }}
    >
      Add to cart
    </button>
  ) : (
    <button className='delete-cart' onClick={() => removeFromCart(product)}>
      Remove from cart
    </button>
  );

  return (
    <div className='product-detail' key={product.id}>
      <h3 className='product-title'>{product.title}</h3>
      <img
        src={product.image}
        alt={`Image for ${product.title}`}
        className='product-img'
      />
      <p className='product-description'>{product.description}</p>
      <div className='price-cart'>
        <p>{product.price} $</p>
        {productButton}
      </div>
    </div>
  );
}

export default Product;
