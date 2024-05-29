import zx9SpeakerL from '../assets/home/desktop/image-speaker-zx9.png';
import zx9SpeakerM from '../assets/home/tablet/image-speaker-zx9.png';
import zx9Speaker from '../assets/home/mobile/image-speaker-zx9.png';
import zx7SpeakerL from '../assets/home/desktop/image-speaker-zx7.jpg';
import zx7SpeakerM from '../assets/home/tablet/image-speaker-zx7.jpg';
import zx7Speaker from '../assets/home/mobile/image-speaker-zx7.jpg';
import '../styles/productSpeaker.css';
import { Link } from 'react-router-dom';

function ProductSpeaker() {
  return (
    <>
      <div className="zx9-section">
        <div className="zx9-image">
          <picture>
            <source media="(min-width: 1024px)" srcSet={zx9SpeakerL} />
            <source media="(min-width: 640px)" srcSet={zx9SpeakerM} />
            <img src={zx9Speaker} alt="" />
          </picture>
        </div>

        <div className="zx9-content">
          <p className="heading-1 zx9-heading">
            ZX9
            <br /> speaker
          </p>
          <p className="zx9-text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Link to="product/zx9-speaker" className="btn btn--secondary-invert">
            See product
          </Link>
        </div>
      </div>

      <div className="zx7-section">
        <div className="zx7-image">
          <picture className="zx7-image">
            <source
              media="(min-width: 1024px)"
              srcSet={zx7SpeakerL}
              className="product-image"
            />
            <source
              media="(min-width: 640px)"
              srcSet={zx7SpeakerM}
              className="product-image"
            />
            <img src={zx7Speaker} alt="" className="product-image" />
          </picture>
        </div>

        <div className="zx7-content">
          <p className="heading-4 zx7-heading">ZX7 speaker</p>
          <Link to="product/zx7-speaker" className="btn btn--secondary">
            See product
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductSpeaker;
