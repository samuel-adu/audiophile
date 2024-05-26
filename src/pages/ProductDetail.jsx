import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/getImageUrl';
import Menu from '../components/Menu';
import data from '../data.json';
import '../styles/productDetail.css';

function ProductDetail() {
  const item = data.filter((item) => item.slug === 'xx99-mark-two-headphones');
  const {
    image,
    name,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = item[0];
  return (
    <>
      <main className="container product-detail">
        <Link to="/" className="btn btn--tetiary">
          go back
        </Link>

        <section className="product-detail-card">
          <div className="product-preview">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={getImageUrl(image.desktop)}
                className="product-image"
              />
              <source
                media="(min-width: 640px)"
                srcSet={getImageUrl(image.tablet)}
                className="product-image"
              />
              <img
                src={getImageUrl(image.mobile)}
                alt=""
                className="product-image"
              />
            </picture>
          </div>

          <div className="product-desc">
            {item[0].new ? <p className="overline-text">new product</p> : ''}
            <h3 className="heading-3 product-name">{name}</h3>
            <p className="card-text">{description}</p>

            <p className="price">${price.toLocaleString()}</p>

            <button className="btn btn--primary">add to cart</button>
          </div>
        </section>

        <div className="lg:flex lg:gap-[var(--spacing-l)]">
          <section className="features-section">
            <h3 className="heading-4">features</h3>
            <p className="card-text">{features}</p>
          </section>

          <section className="includes-section">
            <h3 className="heading-4">in the box</h3>
            <div>
              {includes.map((item, index) => (
                <p key={index} className="includes-name">
                  <span className="includes-qty">{item.quantity}x</span>
                  {item.item}
                </p>
              ))}
            </div>
          </section>
        </div>

        <section className="gallery-section">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={getImageUrl(gallery.first.desktop)}
            />
            <source
              media="(min-width: 640px)"
              srcSet={getImageUrl(gallery.first.tablet)}
            />
            <img src={getImageUrl(gallery.first.mobile)} alt="" />
          </picture>

          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={getImageUrl(gallery.second.desktop)}
            />
            <source
              media="(min-width: 640px)"
              srcSet={getImageUrl(gallery.second.tablet)}
            />
            <img src={getImageUrl(gallery.second.mobile)} alt="" />
          </picture>

          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={getImageUrl(gallery.third.desktop)}
            />
            <source
              media="(min-width: 640px)"
              srcSet={getImageUrl(gallery.third.tablet)}
            />
            <img src={getImageUrl(gallery.third.mobile)} alt="" />
          </picture>
        </section>

        <section className="other-section">
          <h3 className="heading-4">you may also like</h3>

          <div className="other-items">
            {others.map((item, index) => (
              <div className="other-card" key={index}>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={getImageUrl(item.image.desktop)}
                    className="product-image"
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={getImageUrl(item.image.tablet)}
                    className="product-image"
                  />
                  <img
                    src={getImageUrl(item.image.mobile)}
                    alt=""
                    className="product-image"
                  />
                </picture>
                <p className="heading-5">{item.name}</p>
                <Link to={item.slug} className="btn btn--primary">
                  see product
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Menu />
      </main>
    </>
  );
}

export default ProductDetail;
