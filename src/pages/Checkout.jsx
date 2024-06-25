import '../styles/checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Summary from '../components/Summary';

function Checkout() {
  const [checkOutModal, setCheckoutModal] = useState(false);
  const navigate = useNavigate();

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

      <div className="lg:flex gap-8 items-start">
        <CheckoutForm />

        <Summary handlePayment={handlePayment} />
      </div>
    </main>
  );
}

export default Checkout;
