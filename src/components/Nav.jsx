import { NavLink } from 'react-router-dom';
import cart from '../assets/shared/icon-cart.svg';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav container">
      <div className="navbar">
        <img className="menu-toggle" src={hamburger} alt="" />

        <img className="logo" src={logo} alt="" />

        <ul className="nav-list">
          <li className='nav-item"'>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Headphones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Speakers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">
              Earphones
            </NavLink>
          </li>
        </ul>

        <img className="cart-icon" src={cart} alt="" />
      </div>
    </nav>
  );
}

export default Nav;
