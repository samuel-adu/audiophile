import PropType from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import '../styles/orderCount.css';

function OrderCount({ size, ...rest }) {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  const sizeClass = size && `order-count-tab--${size}`;
  const tabClass = classNames(`order-count-tab`, sizeClass);

  return (
    <div className={tabClass} {...rest}>
      <button onClick={decrement} className="order-btn">
        -
      </button>
      <p className="order-count">{count}</p>
      <button onClick={increment} className="order-btn">
        +
      </button>
    </div>
  );
}

OrderCount.propTypes = {
  size: PropType.string.isRequired,
};

export default OrderCount;
