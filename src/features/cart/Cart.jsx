import '../../styles/cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateTotals } from './cartSlice';

function Cart({ setOpenCart }) {
  const { cartItems, numberOfItems, cartTotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  function handleRemoveAll() {
    dispatch(clearCart());
    dispatch(updateTotals());
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
        <h4 className="cart-heading heading-6">cart ({numberOfItems})</h4>
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
        <p className="heading-6">{`$${cartTotal}`}</p>
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

export default Cart;
