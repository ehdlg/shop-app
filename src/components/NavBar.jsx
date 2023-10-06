import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import '../stylesheets/Nav.css';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';

function NavBar() {
  const { cart, showCart } = useContext(ShopContext);
  const cartItems = cart.length;
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
      <div className='cart-icon'>
        <ShoppingCartIcon
          className='svg-icon cart-svg'
          onClick={() => showCart()}
        />
        <div className='cart-num-items'>
          <span>{cartItems}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
