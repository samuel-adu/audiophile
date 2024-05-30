import '../styles/checkout.css';
import '../styles/form.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
// import { useState } from 'react';
import useToggle from '../hooks/useToggle';

function Checkout() {
  const { on, toggle } = useToggle();
  const navigate = useNavigate();

  return (
    <main className="checkout-section container">
      <CheckoutModal showModal={on} toggleModal={toggle} />
      <Link onClick={() => navigate(-1)} className="back-btn">
        go back
      </Link>
      <div className="checkout-form">
        <h3 className="heading-3">checkout</h3>
        <form>
          <p className="sub-heading form-legend">billing details</p>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="alexei@email.com"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="phone"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="+1 202-555-0136"
              className="form-control"
            />
          </div>

          <p className="form-legend sub-heading">shipping info</p>
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="1137 Williams Avenue"
            />
          </div>

          <div className="form-group">
            <label htmlFor="postCode" className="form-label">
              Post Code
            </label>
            <input
              type="text"
              name="postCode"
              id="postCode"
              className="form-control"
              placeholder="B10 1AG"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              placeholder="Birmingham"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="form-control"
              placeholder="United Kingdom"
            />
          </div>

          <p className="form-legend sub-heading">payment details</p>
          <label className="form-label">Payment Method</label>
          <div className="radio-group form-control">
            <input type="radio" name="paymentMethod" id="eMoney" />
            <label htmlFor="eMoney" className="radio-label">
              e-Money
            </label>
          </div>

          <div className="radio-group form-control">
            <input type="radio" id="cash" name="paymentMethod" />
            <label htmlFor="cash" className="radio-label">
              Cash on Delivery
            </label>
          </div>

          <label htmlFor="eMoneyNumber" className="form-label">
            e-Money Number
          </label>
          <input
            type="text"
            id="eMoneyNumber"
            className="form-control"
            placeholder="238521993"
          />

          <label htmlFor="eMoneyPin" className="form-label">
            e-Money PIN
          </label>
          <input
            type="text"
            id="eMoneyPin"
            name="eMoneyPin"
            className="form-control"
            placeholder="8697"
          />
        </form>
      </div>

      <div className="checkout-summary">
        <h6 className="heading-6">summary </h6>
        <button onClick={toggle} className="btn btn--primary btn--large">
          continue and pay
        </button>
      </div>
    </main>
  );
}

export default Checkout;
