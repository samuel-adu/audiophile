import zx9Speaker from '../assets/home/mobile/image-speaker-zx9.png';
import zx7Speaker from '../assets/home/mobile/image-speaker-zx7.jpg';
import '../styles/productSpeaker.css';

function ProductSpeaker() {
  return (
    <div>
      <div className='speaker-zx9'>
        <img src={zx9Speaker} alt="" />
        <h2>ZX9 speaker</h2>
        <p className="">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <a className="btn btn-secondary" href="">
          See product
        </a>
      </div>

      <div>
        <img src={zx7Speaker} alt="" />
        <p>ZX7 speaker</p>
        <a href="" className="btn btn--secondary">
          See product
        </a>
      </div>
    </div>
  );
}

export default ProductSpeaker;
