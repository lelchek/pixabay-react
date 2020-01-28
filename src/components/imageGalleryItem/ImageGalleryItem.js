import React from 'react';
import './imageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpenModal }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt=""
      className="ImageGalleryItem-image"
      onClick={() => onOpenModal(id, largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
