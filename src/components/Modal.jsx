import PropType from 'prop-types';
import '../styles/modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  children: PropType.node.isRequired,
};

export default Modal;
