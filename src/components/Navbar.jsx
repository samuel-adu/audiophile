import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import useToggle from '../hooks/useToggle';
import Cart from './Cart';

function Navbar() {
  const { toggle } = useToggle();
  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav">
          <button onClick={toggle} className="menu-toggle">
            <img src={hamburger} alt="" />
          </button>

          <img className="logo" src={logo} alt="" />

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

          <Cart />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
