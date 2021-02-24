import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const Phonebook = ({ phonebookValue }) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const phonebookVal = e => setText(e.target.value);

  const numberValue = e => setNumber(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    phonebookValue(text, number);
    setText('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={btnClick}>
      <label className={s.label}>
        Имя
        <input
          className={s.input}
          type="text"
          value={text}
          placeholder="Введите имя"
          onChange={phonebookVal}
        />
      </label>

      <label className={s.label}>
        Номер
        <input
          className={s.input}
          type="number"
          max="9999999999"
          value={number}
          placeholder="Введите номер телефона"
          onChange={numberValue}
        />
      </label>
      <br />
      <button type="submit" className={s.button}>
        Добавить контакт
      </button>
    </form>
  );
};

Phonebook.propTypes = {
  phonebookValue: PropTypes.func,
};

export default Phonebook;
