import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import './imageGallery.css';

const ImageGallery = ({ gallery, onOpenModal }) => (
  <ul className="ImageGallery">
    {gallery.map(item => (
      <ImageGalleryItem
        key={item.id}
        {...item}
        onOpenModal={onOpenModal}
      ></ImageGalleryItem>
    ))}
  </ul>
);

export default ImageGallery;
