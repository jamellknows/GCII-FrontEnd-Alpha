// Modal.js
import React from 'react';
import './Modal.css'
const Modal = ({ isOpen, onClose, onButtonClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Choose an Option</h2>
        <button onClick={() => onButtonClick('Option 1')}>Option 1</button>
        <button onClick={() => onButtonClick('Option 2')}>Option 2</button>
        <button onClick={() => onButtonClick('Option 3')}>Option 3</button>
        <button onClick={() => onButtonClick('Option 4')}>Option 4</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
