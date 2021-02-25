import React, { useState } from 'react';
import s from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../../redux/Auth/authOperation';

const Register = () => {
  const dispftch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispftch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      <h1 className={s.h1}>Регистрация</h1>
      <form className={s.form} onSubmit={btnClick}>
        <label className={s.label}>
          Логин
          <input
            className={s.input}
            type="text"
            value={name}
            placeholder="Введите логин"
            onChange={nameFunc}
          />
        </label>

        <label className={s.label}>
          Почта
          <input
            className={s.input}
            type="text"
            value={email}
            placeholder="Введите почту"
            onChange={emailFunc}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            value={password}
            placeholder="Введите пароль"
            onChange={passwordFunc}
          />
        </label>
        <br />
        <button type="submit" className={s.button}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
  // }
};

export default Register;
