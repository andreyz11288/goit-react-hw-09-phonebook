import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './UpData.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { upList, fetchList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';

const UpDate = ({ propNumber, propName, id, propAlert }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsItems);

  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [alert, setAlert] = useState(false);

  const phonebookValue = e => {
    if (e.target.value !== '') {
      setText(e.target.value);
    }
  };
  const numberValue = e => setNumber(e.target.value);

  const btnClick = e => {
    e.preventDefault();

    if (
      !alert &&
      contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase()) &&
      text !== ''
    ) {
      propAlert('name');
      setTimeout(() => {
        setText('');
        setNumber('');
      }, 500);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      if (text === '' && number !== '' && number !== propNumber) {
        dispatch(upList(id, propName, number));
      } else if (number === '' && text !== '') {
        dispatch(upList(id, text, propNumber));
      } else if (number === '' && text === '') {
        return;
      } else if (number !== '' && text !== '') {
        dispatch(upList(id, text, number));
      }
      setText('');
      setNumber('');
      setTimeout(() => {
        dispatch(fetchList());
      }, 250);
    }
  };

  return (
    <form className={s.form} onSubmit={btnClick}>
      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          value={text}
          placeholder="Введите новое имя"
          onChange={phonebookValue}
        />
      </label>
      &nbsp;
      <label className={s.label}>
        <input
          className={s.input}
          type="number"
          max="9999999999"
          value={number}
          placeholder="Введите новый номер телефона"
          onChange={numberValue}
        />
      </label>
      {!alert ? (
        <button type="submit" className={s.button}>
          Обновить
        </button>
      ) : (
        <button type="submit" disabled className={s.button}>
          Обновить
        </button>
      )}
    </form>
  );
};
UpDate.propTypes = {
  phonebookValue: PropTypes.func,
};

export default UpDate;
