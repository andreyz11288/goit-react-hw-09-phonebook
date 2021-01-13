import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <div>
      <li className={s.ImageGalleryItem}>
        <img src="" alt="img" className={s.ImageGalleryItemImage} />
      </li>
    </div>
  );
}
