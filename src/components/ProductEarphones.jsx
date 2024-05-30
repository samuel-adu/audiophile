import yx1Earphones from '../assets/home/mobile/image-earphones-yx1.jpg';
import yx1EarphonesM from '../assets/home/tablet/image-earphones-yx1.jpg';
import yx1EarphonesL from '../assets/home/desktop/image-earphones-yx1.jpg';
import '../styles/productEarphones.css';
import { Link } from 'react-router-dom';

function ProductEarphones() {
  return (
    <div className="yx1-section">
      <div className="yx1-image">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={yx1EarphonesL}
            className="product-image"
          />
          <source
            media="(min-width: 640px)"
            srcSet={yx1EarphonesM}
            className="product-image"
          />
          <img src={yx1Earphones} alt="" className="product-image" />
        </picture>
      </div>

      <div className="yx1-content">
        <p className="heading heading-4">YX1 earphones</p>
        <Link to={'earphones/yx1-earphones'} className="btn btn--secondary">
          See product
        </Link>
      </div>
    </div>
  );
}

export default ProductEarphones;
