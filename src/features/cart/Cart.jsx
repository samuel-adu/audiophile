import '../../styles/cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cartItems.length) {
    return (
      <div className="cart">
        <p>Your cart is empty</p>
      </div>
    );
  }

  function getTotal() {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
    }
    return total.toLocaleString();
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h4 className="cart-heading heading-6">cart ({cartItems.length})</h4>
        <button
          className="base-text remove-all-btn"
          onClick={() => dispatch(clearCart())}
        >
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
        <p className="heading-6">{`$${getTotal()}`}</p>
      </div>

      <Link to="/checkout" className="btn btn--primary btn--large">
        checkout
      </Link>
    </div>
  );
}

export default Cart;
