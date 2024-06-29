import '../styles/checkout.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import Summary from '../components/Summary';
import { useForm } from 'react-hook-form';
import cashOnHand from '../assets/checkout/icon-cash-on-delivery.svg';

function Checkout() {
  const [checkOutModal, setCheckoutModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handlePayment() {
    setCheckoutModal(true);
  }

  return (
    <main className="checkout-section container">
      <CheckoutModal
        isOpen={checkOutModal}
        onClose={() => setCheckoutModal(false)}
      />

      <Link onClick={() => navigate(-1)} className="back-btn">
        go back
      </Link>

      <form onSubmit={handleSubmit(handlePayment)}>
        <div className="lg:flex gap-8 items-start">
          <div className="checkout-form lg:w-2/3 flex-1">
            <h3 className="heading-3">checkout</h3>

            <p className="sub-heading form-legend">billing details</p>
            <div className="md:flex gap-2 justify-between flex-wrap">
              <div className="form-group md:w-[47.5%]">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  type="text"
                  id="name"
                  placeholder="Alexei Ward"
                  className="form-control"
                />
                {errors.name && (
                  <p role="alert" className="error-msg">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="form-group md:w-[47.5%]">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  {...register('mail', {
                    required: 'Please enter a valid email address',
                  })}
                  aria-invalid={errors.mail ? 'true' : 'false'}
                  type="email"
                  id="email"
                  placeholder="alexei@email.com"
                  className="form-control"
                />
                {errors.mail && (
                  <p role="alert" className="error-msg">
                    {errors.mail?.message}
                  </p>
                )}
              </div>

              <div className="form-group md:w-[47.5%]">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                  })}
                  aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                  type="phone"
                  id="phoneNumber"
                  placeholder="+1 202-555-0136"
                  className="form-control"
                />
                {errors.phoneNumber && (
                  <p role="alert" className="error-msg">
                    {errors.phoneNumber?.message}
                  </p>
                )}
              </div>
            </div>

            <p className="form-legend sub-heading">shipping info</p>
            <div className="md:flex gap-2 justify-between flex-wrap">
              <div className="form-group md:w-[100%]">
                <label htmlFor="address" className="form-label">
                  Your Address
                </label>
                <input
                  {...register('address', { required: 'Address is required' })}
                  aria-invalid={errors.address ? 'true' : 'false'}
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p role="alert" className="error-msg">
                    {errors.address?.message}
                  </p>
                )}
              </div>
              <div className="form-group md:w-[47.5%]">
                <label htmlFor="postCode" className="form-label">
                  Post Code
                </label>
                <input
                  {...register('postCode', {
                    required: 'Post Code is required',
                  })}
                  aria-invalid={errors.postCode ? 'true' : 'false'}
                  type="text"
                  id="postCode"
                  className="form-control"
                  placeholder="B10 1AG"
                />
                {errors.postCode && (
                  <p role="alert" className="error-msg">
                    {errors.postCode?.message}
                  </p>
                )}
              </div>
              <div className="form-group md:w-[47.5%]">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  {...register('city', { required: 'City is required' })}
                  aria-invalid={errors.city ? 'true' : 'false'}
                  id="city"
                  type="text"
                  className="form-control"
                  placeholder="Birmingham"
                />
                {errors.city && (
                  <p role="alert" className="error-msg">
                    {errors.city?.message}
                  </p>
                )}
              </div>

              <div className="form-group md:w-[47.5%]">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  {...register('country', { required: 'Country is required' })}
                  aria-invalid={errors.country ? 'true' : 'false'}
                  type="text"
                  id="country"
                  className="form-control"
                  placeholder="United Kingdom"
                />
                {errors.country && (
                  <p role="alert" className="error-msg">
                    {errors.country?.message}
                  </p>
                )}
              </div>
            </div>

            <p className="form-legend sub-heading">payment details</p>

            <div className="md:flex justify-between">
              <label className="form-label">Payment Method</label>
              <div className="form-group pb-1 md:w-[47.5%]">
                <div className="radio-group form-control">
                  <input
                    {...register('paymentMethod', {
                      required: 'Please select a payment method',
                    })}
                    aria-invalid={errors.paymentMethod ? 'true' : 'false'}
                    type="radio"
                    id="eMoney"
                    value={paymentMethod}
                    onChange={() => setPaymentMethod('eMoney')}
                  />
                  <label htmlFor="eMoney" className="radio-label">
                    e-Money
                  </label>
                </div>

                <div className="radio-group form-control">
                  <input
                    {...register('paymentMethod', {
                      required: 'Please select a payment method',
                    })}
                    aria-invalid={errors.paymentMethod ? 'true' : 'false'}
                    type="radio"
                    id="cash"
                    value={paymentMethod}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <label htmlFor="cash" className="radio-label">
                    Cash on Delivery
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p role="alert" className="error-msg">
                    {errors.paymentMethod?.message}
                  </p>
                )}
              </div>
            </div>
            {paymentMethod === 'eMoney' ? (
              <div className="md:flex gap-4 justify-between">
                <div className="form-group md:w-[47.5%]">
                  <label htmlFor="eMoneyNumber" className="form-label">
                    e-Money Number
                  </label>
                  <input
                    {...register('eMoneyNumber', {
                      required: 'Enter a valid eMoney number.',
                    })}
                    aria-invalid={errors.eMoneyNumber ? 'true' : 'false'}
                    type="number"
                    id="eMoneyNumber"
                    className="form-control"
                    placeholder="238521993"
                  />
                  {errors.paymentMethod && (
                    <p role="alert" className="error-msg">
                      {errors.eMoneyNumber?.message}
                    </p>
                  )}
                </div>

                <div className="form-group md:w-[47.5%]">
                  <label htmlFor="eMoneyPin" className="form-label">
                    e-Money PIN
                  </label>
                  <input
                    {...register('eMoneyPin', {
                      required: 'Enter a valid eMoney pin.',
                    })}
                    aria-invalid={errors.eMoneyPin ? 'true' : 'false'}
                    type="number"
                    id="eMoneyPin"
                    placeholder="8697"
                    className="form-control"
                  />
                  {errors.paymentMethod && (
                    <p role="alert" className="error-msg">
                      {errors.eMoneyPin?.message}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="payment-method">
                <img src={cashOnHand} alt="cash icon" />
                <p className="-text">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
          <div className="checkout-summary lg:w-1/3">
            <Summary />
            <button className="btn btn--primary btn--large w-full">
              continue and pay
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Checkout;
