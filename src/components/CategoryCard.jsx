import { Link } from 'react-router-dom';
import arrow from '../assets/shared/icon-arrow-right.svg';
import earphones from '../assets/shared/image-category-thumbnail-earphones.png';
import speakers from '../assets/shared/image-category-thumbnail-speakers.png';
import headphones from '../assets/shared/image-category-thumbnail-headphones.png';

function CategoryCard() {
  return (
    <div className="card-list">
      <div className="link-to-category-card">
        <img src={headphones} alt="" className="link-card-image" />
        <p>headphones</p>
        <Link className="btn btn--tetiary" to="headphones">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>

      <div className="link-to-category-card">
        <img src={speakers} alt="" className="link-card-image" />
        <p>speakers</p>
        <Link className="btn btn--tetiary" to="/speakers">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>

      <div className="link-to-category-card">
        <img src={earphones} alt="" className="link-card-image" />
        <p>earphones</p>
        <Link className="btn btn--tetiary" to="/earphones">
          shop
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
