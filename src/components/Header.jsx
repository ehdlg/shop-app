import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

function Header() {
  return (
    <>
      <header>
        <Link to='/'>
          <h1>Shop</h1>
        </Link>
        <NavBar />
      </header>
    </>
  );
}

export default Header;
