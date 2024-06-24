import About from '../components/About';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getImageUrl } from '../utils/getImageUrl';
import Menu from '../components/Menu';
import data from '../data.json';
import '../styles/productDetail.css';
import { getCategory } from '../utils/getCategory';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, updateTotals } from '../features/cart/cartSlice';

function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = data.find((item) => item.slug === productId);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const {
    image,
    id,
    name,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = product;

  function addTo() {
    dispatch(addItemToCart({ id, quantity }));
    dispatch(updateTotals());
  }

  return (
    <>
      <main className="container product-detail-section">
        <Link onClick={() => navigate(-1)} className="back-btn">
          go back
        </Link>

        <section className="product-detail-card">
          <div className="product-detail-image">
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

          <div className="product-detail-content">
            {product.new ? <p className="overline-text">new product</p> : ''}
            <h2 className="heading-2 product-name">{name}</h2>
            <p className="card-text">{description}</p>

            <p className="price">${price.toLocaleString()}</p>

            <div className="order-tab">
              <div className="order-count-tab">
                <button
                  onClick={() => {
                    quantity > 1 && setQuantity((prev) => prev - 1);
                  }}
                  className="order-btn"
                >
                  -
                </button>
                <p className="order-count">{quantity}</p>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="order-btn"
                >
                  +
                </button>
              </div>
              <button
                className="btn btn--primary"
                onClick={addTo}
              >
                add to cart
              </button>
            </div>
          </div>
        </section>

        <div className="lg:flex lg:gap-[var(--spacing-l)]">
          <section className="features-section">
            <h3 className="heading-3">features</h3>
            <p className="card-text">{features}</p>
          </section>

          <section className="includes-section">
            <h3 className="heading-3">in the box</h3>
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
          <div className="flex flex-col gap-[var(--spacing-base)]">
            <div className="gallery-first">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={getImageUrl(gallery.first.desktop)}
                  className=""
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={getImageUrl(gallery.first.tablet)}
                  className=""
                />
                <img
                  src={getImageUrl(gallery.first.mobile)}
                  alt=""
                  className=""
                />
              </picture>
            </div>

            <div className="gallery-second">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={getImageUrl(gallery.second.desktop)}
                  className=""
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={getImageUrl(gallery.second.tablet)}
                  className=""
                />
                <img
                  src={getImageUrl(gallery.second.mobile)}
                  alt=""
                  className=""
                />
              </picture>
            </div>
          </div>

          <div className="gallery-third">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={getImageUrl(gallery.third.desktop)}
                className=""
              />
              <source
                media="(min-width: 640px)"
                srcSet={getImageUrl(gallery.third.tablet)}
                className=""
              />
              <img
                src={getImageUrl(gallery.third.mobile)}
                alt=""
                className=""
              />
            </picture>
          </div>
        </section>

        <section className="other-section">
          <h3 className="heading-3 heading">you may also like</h3>

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
                <Link
                  to={`/${getCategory(item.slug)}/${item.slug}`}
                  className="btn btn--primary"
                >
                  see product
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <aside className="container mb-[var(--spacing-l)] md:mb-[var(--spacing-xl)]">
        <Menu />
      </aside>
      <About />
    </>
  );
}

export default ProductDetail;
