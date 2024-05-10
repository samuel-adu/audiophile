import { Link } from 'react-router-dom';
import hero from '../assets/home/mobile/image-header.jpg';
import heroDesktop from '../assets/home/desktop/image-hero.jpg';
import heroTablet from '../assets/home/tablet/image-header.jpg';
import '../styles/productHeadphones.css';

function ProductHeadphones() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="overline">new product</p>
        <h1 className="heading-1">xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link to="headphones" className="btn btn--primary">
          see product
        </Link>
      </div>

      <picture className="hero-image">
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <source media="(min-width: 768px)" srcSet={heroTablet} />
        <img src={hero} alt="" />
      </picture>
    </div>
  );
}

export default ProductHeadphones;
