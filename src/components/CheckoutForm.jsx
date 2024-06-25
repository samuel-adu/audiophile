// import React from 'react';
// import PropTypes from 'prop-types';

function CheckoutForm() {
  return (
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
  );
}

CheckoutForm.propTypes = {};

export default CheckoutForm;
