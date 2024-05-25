import yx1Earphones from '../assets/home/mobile/image-earphones-yx1.jpg';
import yx1EarphonesM from '../assets/home/tablet/image-earphones-yx1.jpg';
import yx1EarphonesL from '../assets/home/desktop/image-earphones-yx1.jpg';
import '../styles/productEarphones.css';

function ProductEarphones() {
  return (
    <div className="yx1">
      <div className="yx1-preview">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={yx1EarphonesL}
            className="yx1-image"
          />
          <source
            media="(min-width: 640px)"
            srcSet={yx1EarphonesM}
            className="yx1-image"
          />
          <img src={yx1Earphones} alt="" className="yx1-image" />
        </picture>
      </div>

      <div className="yx1-desc">
        <p className="heading">YX1 earphones</p>
        <a href="" className="btn btn--secondary">
          See product
        </a>
      </div>
    </div>
  );
}

export default ProductEarphones;
