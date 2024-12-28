import React from 'react';
import { FiX } from 'react-icons/fi';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image__modal" onClick={onClose}>
      <div className="image__modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image__close-button" onClick={onClose}>
          <FiX />
        </button>
        <img src={imageUrl} alt=" " />
      </div>
    </div>
  );
};

export default ImageModal;
