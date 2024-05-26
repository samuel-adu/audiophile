/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/getImageUrl';
import '../styles/productCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-preview">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={getImageUrl(product.categoryImage.desktop)}
          />
          <source
            media="(min-width: 640px)"
            srcSet={getImageUrl(product.categoryImage.tablet)}
          />
          <img src={getImageUrl(product.categoryImage.mobile)} alt="" />
        </picture>
      </div>

      <div className="product-card-content">
        <p className="overline-text">{product.new ? 'new product' : ''}</p>
        <h3 className="heading-2 product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <Link className="btn btn--primary">see product</Link>
      </div>
    </div>
  );
}

export default ProductCard;
