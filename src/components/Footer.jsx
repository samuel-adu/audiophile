/* eslint-disable react/no-unescaped-entities */
import { FaTwitter, FaInstagram } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';

import logo from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <img src={logo} alt="audiophile" className="footer-logo" />
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="category" className="footer-link">
                Headphones
              </Link>
            </li>
            <li>
              <Link to="category" className="footer-link">
                Speakers
              </Link>
            </li>

            <li>
              <Link to="category" className="footer-link">
                Earphones
              </Link>
            </li>
          </ul>
        </div>

        <p className="footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="copyright">
          <p className="footer-text">Copyright 2021. All Rights Reserved</p>

          <ul className="social-list">
            <li>
              <Link className="footer-link social-link">
                <IoLogoFacebook />
              </Link>
            </li>
            <li>
              <Link className="footer-link social-link">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link className="footer-link social-link">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
