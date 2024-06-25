import ReactDom from 'react-dom';
import PropType from 'prop-types';
import '../styles/modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}

Modal.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  children: PropType.node.isRequired,
};

export default Modal;
