import '../styles/cart.css';
import { Link } from 'react-router-dom';
import OrderCount from '../components/OrderCount';
import xx59 from '../assets/cart/image-xx59-headphones.jpg';
import xx99mk2 from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import yx1 from '../assets/cart/image-yx1-earphones.jpg';
import { useState } from 'react';
import cart from '../assets/shared/icon-cart.svg';

// import xx99mk1 from '../assets/cart/image-xx99-mark-one-headphones.jpg';
// import zx7 from '../assets/cart/image-zx7-speaker.jpg';
// import zx9 from '../assets/cart/image-zx9-speaker.jpg';

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen((prevCartOpen) => !prevCartOpen);
  }

  return (
    <>
      <button onClick={toggleCart}>
        <img className="cart-icon" src={cart} alt="" />
      </button>

      {cartOpen && (
        <div className="cart">
          <div className="cart-header">
            <h4 className="cart-heading heading-6">cart (3)</h4>
            <button className="base-text remove-all-btn">Remove all</button>
          </div>

          <div className="card-content">
            <div className="cart-item">
              <div className="cart-image">
                <img src={xx99mk2} alt="" />
              </div>

              <div className="item-description">
                <p className="item-name">XX99 MK II</p>
                <p className="item-price">$2,999</p>
              </div>

              <OrderCount size="small" />
            </div>
            <div className="cart-item">
              <div className="cart-image">
                <img src={xx59} alt="" />
              </div>

              <div className="item-description">
                <p className="item-name">XX59</p>
                <p className="item-price">$899</p>
              </div>

              <OrderCount size="small" />
            </div>
            <div className="cart-item">
              <div className="cart-image">
                <img src={yx1} alt="" />
              </div>

              <div className="item-description">
                <p className="item-name">YX1</p>
                <p className="item-price">$599</p>
              </div>

              <OrderCount size="small" />
            </div>
          </div>

          <div className="cart-summary">
            <p className="base-text">TOTAL</p>
            <p className="heading-6">$5,346</p>
          </div>

          <Link
            onClick={() => setCartOpen(false)}
            to="/checkout"
            className="btn btn--primary btn--large"
          >
            checkout
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
