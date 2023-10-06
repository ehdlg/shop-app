import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartProduct from './CartProduct';
import { XMarkIcon } from '@heroicons/react/20/solid';
import '../stylesheets/ShopCart.css';

function Cart() {
  const { isCartOpen, showCart, cart, emptyCart } = useContext(ShopContext);
  const cartContent =
    cart.length === 0 ? (
      <h4>There are no products yet.</h4>
    ) : (
      cart.map((product) => <CartProduct product={product} key={product.id} />)
    );

  return (
    <aside className={`shop-cart ${isCartOpen ? 'open' : 'closed'}`}>
      <div className='cart-content'>
        <div className='cart-header'>
          <XMarkIcon className='close-cart svg-icon' onClick={showCart} />
        </div>
        <div className='cart-products'>{cartContent}</div>
      </div>
      {cart.length > 0 && (
        <button className='btn-remove clear-cart' onClick={() => emptyCart()}>
          Empty cart
        </button>
      )}
    </aside>
  );
}

export default Cart;
