import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
} from './cartSlice';

function CartItem({ item }) {
  const { image, price, quantity, name, id } = item;
  const dispatch = useDispatch();

  function handleQuantityReduction() {
    if (quantity === 1) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(decrementItemQuantity(id));
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={image} alt={name} />
      </div>

      <div className="item-description">
        <p className="item-name">{name.toUpperCase()}</p>
        <p className="item-price">{`$${price.toLocaleString()}`}</p>
      </div>

      <div className="order-count-tab order-count-tab--small">
        <button className="order-btn" onClick={handleQuantityReduction}>
          -
        </button>
        <p className="order-count">{quantity}</p>
        <button
          className="order-btn"
          onClick={() => dispatch(incrementItemQuantity(id))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropType.object.isRequired,
};
