import { NavLink } from 'react-router-dom';
import cart from '../assets/shared/icon-cart.svg';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import '../styles/nav.css';
import Cart from './Cart';
import useToggle from '../hooks/useToggle';

function Nav() {
  const { on, toggle } = useToggle();
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <img className="menu-toggle" src={hamburger} alt="" />

          <img className="logo" src={logo} alt="" />

          <ul className="nav-list">
            <li className='nav-item"'>
              <NavLink to={'/'} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'headphones'} className="nav-link">
                Headphones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'speakers'} className="nav-link">
                Speakers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'earphones'} className="nav-link">
                Earphones
              </NavLink>
            </li>
          </ul>
          <Cart open={on} toggle={toggle} />

          <button onClick={toggle}>
            <img className="cart-icon" src={cart} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
