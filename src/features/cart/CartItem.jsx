import PropType from 'prop-types';
import { HiTrash, HiPlus, HiMinus } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
  updateTotals,
} from './cartSlice';

function CartItem({ item }) {
  const { image, price, quantity, name, id } = item;
  const dispatch = useDispatch();

  function handleQuantityReduction() {
    if (quantity === 1) {
      dispatch(removeItemFromCart(id));
      dispatch(updateTotals());
    } else {
      dispatch(decrementItemQuantity(id));
      dispatch(updateTotals());
    }
  }

  function handleQuantityIncrement() {
    dispatch(incrementItemQuantity(id));
    dispatch(updateTotals());
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
          {quantity === 1 ? <HiTrash /> : <HiMinus />}
        </button>
        <p className="order-count">{quantity}</p>
        <button className="order-btn" onClick={handleQuantityIncrement}>
          <HiPlus />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropType.object.isRequired,
};
