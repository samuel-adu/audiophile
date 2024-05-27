import { useState } from 'react';
import '../styles/orderCount.css';

function OrderCount() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="order-count-tab">
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

export default OrderCount;
