import { Link } from 'react-router-dom';
import product from '../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import '../styles/productCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-preview">
        <img src={product} alt="" className="product-image" />
      </div>

      <div className="product-card-content">
        <p className="overline-text">new product</p>
        <h3 className="product-name">product name</h3>
        <p className="product-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non
          quod ad doloribus, harum iusto quos nostrum illum quam ipsam nobis
          iure vel unde soluta ea sit minus eius atque.
        </p>

        <Link className="btn btn--primary">see product</Link>
      </div>
    </div>
  );
}

export default ProductCard;
