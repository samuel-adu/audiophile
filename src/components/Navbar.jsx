import PropType from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/shared/logo.svg';
import cart from '../assets/shared/icon-cart.svg';
import NavMenu from '../components/NavMenu';
import { useSelector } from 'react-redux';

function Navbar({ setOpenCart }) {
  const { numberOfItems } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <nav className="nav">
        <NavMenu />

        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <ul className="nav-list">
          <li className='nav-item"'>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="headphones" className="nav-link">
              Headphones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="speakers" className="nav-link">
              Speakers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="earphones" className="nav-link">
              Earphones
            </NavLink>
          </li>
        </ul>

        <div className="cart-icon-div">
          {numberOfItems && <span>{numberOfItems}</span>}
          <button onClick={() => setOpenCart(true)}>
            <img className="cart-icon" src={cart} alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  setOpenCart: PropType.func,
};

export default Navbar;
