import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/shared/logo.svg';
// import useToggle from '../hooks/useToggle';
import Cart from './Cart';
import NavMenu from '../components/NavMenu';

function Navbar() {
  // const { toggle } = useToggle();
  return (
    <div className="navbar">
      {/* <div className="container"> */}
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

        <Cart />
      </nav>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
