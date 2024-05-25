import zx9SpeakerL from '../assets/home/desktop/image-speaker-zx9.png';
import zx9SpeakerM from '../assets/home/tablet/image-speaker-zx9.png';
import zx9Speaker from '../assets/home/mobile/image-speaker-zx9.png';
import zx7SpeakerL from '../assets/home/desktop/image-speaker-zx7.jpg';
import zx7SpeakerM from '../assets/home/tablet/image-speaker-zx7.jpg';
import zx7Speaker from '../assets/home/mobile/image-speaker-zx7.jpg';
import '../styles/productSpeaker.css';

function ProductSpeaker() {
  return (
    <div>
      <div className="speaker-zx9">
        <div className="speaker-zx9-image">
          <picture>
            <source media="(min-width: 1024px)" srcSet={zx9SpeakerL} />
            <source media="(min-width: 640px)" srcSet={zx9SpeakerM} />
            <img src={zx9Speaker} alt="" />
          </picture>
        </div>

        <div className="speaker-zx9-desc">
          <p className="heading">
            ZX9
            <br /> speaker
          </p>
          <p className="text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <a className="btn btn--secondary-invert" href="">
            See product
          </a>
        </div>
      </div>

      <div className="speaker-zx7">
        <div className="">
          <picture className="speaker-zx7-image">
            <source
              media="(min-width: 1024px)"
              srcSet={zx7SpeakerL}
              className="speaker-zx7-image"
            />
            <source
              media="(min-width: 640px)"
              srcSet={zx7SpeakerM}
              className="speaker-zx7-image"
            />
            <img src={zx7Speaker} alt="" className="speaker-zx7-image" />
          </picture>
        </div>

        <div className="speaker-zx7-desc">
          <p className="heading">ZX7 speaker</p>
          <a href="" className="btn btn--secondary">
            See product
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductSpeaker;
