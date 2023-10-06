/* eslint-disable react/prop-types */
import '../stylesheets/CartProduct.css';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

function CartProduct({ product }) {
  const { removeFromCart, addQuantity } = useContext(ShopContext);

  return (
    <div className='cart-product'>
      <div className='cart-product-details'>
        <img
          src={product.image}
          alt={`${product.title} image displaying in the shop cart.`}
        />
        <div className='cart-title-quantity'>
          <h6>{product.title}</h6>
          <p>{product.price * product.quantity} $</p>
        </div>
      </div>
      <div className='cart-product-actions'>
        <div className='quantity-actions'>
          <MinusIcon
            className={`svg-icon minus-${
              product.quantity > 1 ? 'show' : 'hidden'
            }`}
            onClick={
              product.quantity > 1 ? () => addQuantity(product, -1) : null
            }
          />

          <span>{product.quantity}</span>
          <PlusIcon
            className='svg-icon'
            onClick={() => addQuantity(product, 1)}
          />
        </div>

        <button className='btn-remove' onClick={() => removeFromCart(product)}>
          remove
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
