/* eslint-disable react/no-unescaped-entities */
import instagram from '../assets/shared/icon-instagram.svg';
import facebook from '../assets/shared/icon-facebook.svg';
import twitter from '../assets/shared/icon-twitter.svg';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="footer-nav-list">
          <NavLink to="/" className="footer-nav-item">
            Home
          </NavLink>
          <NavLink to="headphones" className="footer-nav-item">
            Headphones
          </NavLink>
          <NavLink to="speakers" className="footer-nav-item">
            Speakers
          </NavLink>
          <NavLink to="earphones" className="footer-nav-item">
            Earphones
          </NavLink>
        </nav>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>

        <ul>
          <li>
            <Link>
              <img src={instagram} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
