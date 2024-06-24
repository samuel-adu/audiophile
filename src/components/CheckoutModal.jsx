/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import xx59 from '../assets/cart/image-xx59-headphones.jpg';
import '../styles/checkoutModal.css';
import Modal from './Modal';
import { useSelector } from 'react-redux';

function CheckoutModal({ isOpen, onClose }) {
  const { cartItems, numberOfItems, grandTotal } = useSelector(
    (state) => state.cart
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="checkout-modal">
        <div className="check-div">
          <FaCheck className="check-mark" />
        </div>
        <h3 className="heading-3 heading modal-heading">
          Thank you <br /> for your order
        </h3>
        <p className="base-text modal-text">
          You will receive an email confirmation shortly.
        </p>

        <div className="checkout-modal__main">
          <div className="checkout-modal__order-list">
            <div className="checkout-modal__item">
              <div className="checkout-modal__item-image">
                <img src={xx59} alt="" />
              </div>
              <div className="checkout-modal__item-desc">
                <p className="checkout-modal__item-name">
                  {cartItems[0].name.toUpperCase()}
                </p>
                <p className="checkout-modal__item-price">
                  {cartItems[0].price}
                </p>
              </div>
              <p className="checkout-modal__quantity">x1</p>
            </div>
            <div className="checkout-modal__others-div">
              {numberOfItems > 1 && (
                <p className="checkout-modal__other-items">
                  {`and ${numberOfItems - 1} other item${
                    numberOfItems > 2 ? '(s)' : ''
                  }`}
                </p>
              )}
            </div>
          </div>

          <div className="checkout-modal__total">
            <p className="grand-total">grand total</p>
            <p className="grand-cost">${grandTotal}</p>
          </div>
        </div>

        <Link to="/" className="btn btn--primary w-full">
          back to home
        </Link>
      </div>
    </Modal>
  );
}

export default CheckoutModal;
