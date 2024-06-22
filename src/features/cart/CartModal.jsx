// import React from 'react';
import PropType from 'prop-types';
import Modal from '../../components/Modal';
import Cart from './Cart';

function CartModal({ openCart, setOpenCart }) {
  return (
    <Modal isOpen={openCart} onClose={() => setOpenCart(false)}>
      <Cart />
    </Modal>
  );
}

CartModal.propTypes = {
  openCart: PropType.bool.isRequired,
  setOpenCart: PropType.func.isRequired,
};

export default CartModal;
