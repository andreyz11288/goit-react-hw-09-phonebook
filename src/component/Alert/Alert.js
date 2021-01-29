import React from 'react';
import s from './Alert.module.css';

export default function Alert() {
  return (
    <div className={s}>
      <h3 className={s.h1}>Contact already exists</h3>
    </div>
  );
}
