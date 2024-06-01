import { Link } from 'react-router-dom';
import arrow from '../assets/shared/icon-arrow-right.svg';
import '../styles/menu.css';
import earphones from '../assets/shared/image-category-thumbnail-earphones.png';
import headphones from '../assets/shared/image-category-thumbnail-headphones.png';
import speakers from '../assets/shared/image-category-thumbnail-speakers.png';

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-card">
        <img
          src={headphones}
          alt=""
          className="menu-image"
          width={80}
          height={104}
        />
        <p className="menu-heading heading-6">Headphones</p>
        <Link to={'/headphones'} className="menu-btn">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="menu-card">
        <img
          src={speakers}
          alt=""
          className="menu-image"
          width={84}
          height={101}
        />
        <p className="menu-heading heading-6">Speakers</p>
        <Link to={'/speakers'} className="menu-btn">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="menu-card">
        <img
          src={earphones}
          alt=""
          className="menu-image"
          width={103}
          height={104}
        />
        <p className="menu-heading heading-6">Earphones</p>
        <Link to={'/earphones'} className="menu-btn">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
