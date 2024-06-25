import PropType from 'prop-types';
import '../../styles/cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateTotals } from './cartSlice';
import toast from 'react-hot-toast';

function Cart({ setOpenCart }) {
  const { cartItems, cartTotal, numberOfProducts } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  function handleRemoveAll() {
    dispatch(clearCart());
    dispatch(updateTotals());
    toast.error('item removed from cart');
  }

  if (cartTotal === 0) {
    return (
      <div className="cart">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h4 className="cart-heading heading-6">cart ({numberOfProducts})</h4>
        <button className="base-text remove-all-btn" onClick={handleRemoveAll}>
          Remove all
        </button>
      </div>

      <div className="card-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <p className="base-text">TOTAL</p>
        <p className="heading-6">{`$${cartTotal.toLocaleString()}`}</p>
      </div>

      <Link
        to="/checkout"
        className="btn btn--primary btn--large"
        onClick={() => setOpenCart(false)}
      >
        checkout
      </Link>
    </div>
  );
}

Cart.propTypes = {
  setOpenCart: PropType.func,
};

export default Cart;
