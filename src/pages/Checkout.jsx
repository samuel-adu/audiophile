import '../styles/checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const [checkOutModal, setCheckoutModal] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  let total = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
  }

  const vat = (total * 0.2).toFixed();

  const grandTotal = total + 50;

  return (
    <main className="checkout-section container">
      <CheckoutModal
        isOpen={checkOutModal}
        onClose={() => setCheckoutModal(false)}
      />

      <Link onClick={() => navigate(-1)} className="back-btn">
        go back
      </Link>

      <div className="lg:flex gap-8 items-start">
        <div className="checkout-form lg:w-2/3 flex-1">
          <h3 className="heading-3">checkout</h3>

          <form>
            <p className="sub-heading form-legend">billing details</p>
            <div className="md:flex gap-2 justify-between flex-wrap">
              <div className="form-group md:w-[47.5%]">
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

              <div className="form-group md:w-[47.5%]">
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

              <div className="form-group md:w-[47.5%]">
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
            </div>

            <p className="form-legend sub-heading">shipping info</p>
            <div className="md:flex gap-2 justify-between flex-wrap">
              <div className="form-group w-full">
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
            </div>

            <p className="form-legend sub-heading">payment details</p>

            <div className="md:flex justify-between">
              <div className="form-group">
                <label className="form-label">Payment Method</label>
              </div>

              <div className="form-group">
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
              </div>
            </div>

            <div className="md:flex gap-4 justify-center">
              <div className="form-group">
                <label htmlFor="eMoneyNumber" className="form-label">
                  e-Money Number
                </label>
                <input
                  type="text"
                  id="eMoneyNumber"
                  className="form-control"
                  placeholder="238521993"
                />
              </div>

              <div className="form-group">
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
              </div>
            </div>
          </form>
        </div>

        <div className="checkout-summary lg:w-1/3">
          <h6 className="heading-6">summary </h6>

          <div className="summary-order-list mb-8">
            {cartItems.map((item) => (
              <div className="mb-6 flex items-center" key={item.id}>
                <div className="cart-image mr-4">
                  <img src={item.image} alt="" className="rounded-lg" />
                </div>

                <div className="flex justify-between flex-1">
                  <div>
                    <p className="item-name">{item.name.toUpperCase()}</p>
                    <p className="item-price">{item.price}</p>
                  </div>

                  <p className="base-text">x{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-2">
            <p className="base-text">TOTAL</p>
            <p className="number-text">${total.toLocaleString()}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="uppercase base-text">SHIPPING</p>
            <p className="number-text">$50</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="uppercase base-text">VAT (INCLUDED)</p>
            <p className="number-text">${vat.toLocaleString()}</p>
          </div>
          <div className="flex justify-between mb-8">
            <p className="uppercase base-text">GRAND TOTAL</p>
            <p className="number-text">${grandTotal.toLocaleString()}</p>
          </div>
          <button
            onClick={() => setCheckoutModal(true)}
            className="btn btn--primary btn--large"
          >
            continue and pay
          </button>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
