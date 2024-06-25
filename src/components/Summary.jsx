import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Summary({ handlePayment }) {
  const { cartItems, cartTotal, vat, grandTotal } = useSelector(
    (state) => state.cart
  );

  if (!cartItems) {
    return null;
  }

  return (
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
        <p className="number-text">${cartTotal.toLocaleString()}</p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="uppercase base-text">SHIPPING</p>
        <p className="number-text">$50</p>
      </div>
      <div className="flex justify-between mb-6">
        <p className="uppercase base-text">VAT (INCLUDED)</p>
        <p className="number-text">${vat.toFixed().toLocaleString()}</p>
      </div>
      <div className="flex justify-between mb-8">
        <p className="uppercase base-text">GRAND TOTAL</p>
        <p className="number-text">${grandTotal.toLocaleString()}</p>
      </div>
      <button onClick={handlePayment} className="btn btn--primary btn--large">
        continue and pay
      </button>
    </div>
  );
}

Summary.propTypes = {
  handlePayment: PropTypes.func,
};

export default Summary;
