import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/getImageUrl';

function CategoryCard({ product }) {
  return (
    <div className="category-card">
      <div className="category-card-image">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={getImageUrl(product.categoryImage.desktop)}
            className="product-image"
          />
          <source
            media="(min-width: 640px)"
            srcSet={getImageUrl(product.categoryImage.tablet)}
            className="product-image"
          />
          <img
            src={getImageUrl(product.categoryImage.mobile)}
            alt=""
            className="product-image"
          />
        </picture>
      </div>
      <div className="category-card-content">
        <p className="overline-text">{product.new ? 'new product' : ''}</p>
        <p className="heading-2 product-name">{product.name}</p>
        <p className="card-text">{product.description}</p>

        <Link to={`${product.slug}`} className="btn btn--primary">
          see product
        </Link>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  product: PropType.object.isRequired,
};

export default CategoryCard;
