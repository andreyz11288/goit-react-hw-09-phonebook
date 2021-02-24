import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './UpData.module.css';
import { connect } from 'react-redux';
import { upList, fetchList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';

const UpDate = ({
  propNumber,
  propName,
  id,
  upListFetch,
  contacts,
  onUp,
  propAlert,
}) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (
      contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase()) &&
      text !== '' &&
      !alert
    ) {
      setAlert('name');
      setTimeout(() => {
        setText('');
        setNumber('');
      }, 500);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }

    propAlert(alert);
  }, [text, number, alert, contacts, propAlert]);

  const phonebookValue = e => {
    if (e.target.value !== '') {
      setText(e.target.value);
    }
  };
  const numberValue = e => setNumber(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    if (text === '' && number !== '' && number !== propNumber) {
      onUp(id, propName, number);
    } else if (number === '' && text !== '') {
      onUp(id, text, propNumber);
    } else if (number === '' && text === '') {
      return;
    } else if (number !== '' && text !== '') {
      onUp(id, text, number);
    }
    setText('');
    setNumber('');
    setTimeout(() => {
      upListFetch();
    }, 250);
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

const mapStateToProps = state => ({
  contacts: getContactsItems(state),
});

const mapDispatchToProps = {
  onUp: upList,
  upListFetch: fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpDate);
