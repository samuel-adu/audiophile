import bestGearModelDesktop from '../assets/shared/desktop/image-best-gear.jpg';
import bestGearModelTablet from '../assets/shared/tablet/image-best-gear.jpg';
import bestGearModel from '../assets/shared/mobile/image-best-gear.jpg';
import '../styles/about.css';

function About() {
  return (
    <div className="about-section ">
      <picture className="about-image">
        <source
          media="(min-width: 1024px)"
          srcSet={bestGearModelDesktop}
          className="model-image"
        />
        <source
          media="(min-width: 768px)"
          srcSet={bestGearModelTablet}
          className="model-image"
        />
        <img src={bestGearModel} alt="" className="model-image" />
      </picture>

      <div className="about-main">
        <h3 className="about-heading heading-2">
          Bringing you the best audio gear
        </h3>

        <p className="about-body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default About;
