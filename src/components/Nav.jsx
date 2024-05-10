import { NavLink } from 'react-router-dom';
import cart from '../assets/shared/icon-cart.svg';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav">
      <img className="menu-toggle" src={hamburger} alt="" />
      <img className="logo" src={logo} alt="" />

      <ul className="nav-list">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/headphones" className="nav-item">
          Headphones
        </NavLink>
        <NavLink to="/speakers" className="nav-item">
          Speakers
        </NavLink>
        <NavLink to="/earphones" className="nav-item">
          Earphones
        </NavLink>
      </ul>

      <img className="cart-icon" src={cart} alt="" />
    </nav>
  );
}

export default Nav;
