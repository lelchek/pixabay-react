import React from 'react';
import './modal.css';

const Modal = ({ id, url, active, onCloseModal }) => {
  let classNameModal = 'Overlay';
  if (active) {
    classNameModal += ' isOpen';
  } else {
    classNameModal = 'Overlay';
  }
  window.addEventListener('keyup', onCloseModal);
  return (
    <div
      className={classNameModal}
      onClick={onCloseModal}
      // onKeyDown={onCloseModal}
    >
      <div className="Modal">
        <img src={url} alt="" key={id} />
      </div>
    </div>
  );
};

export default Modal;
