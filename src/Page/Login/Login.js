import React, { useState } from 'react';
import s from './Login.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../redux/Auth/authOperation';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(loginAuth({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={s.h1}>Aвторизация</h1>
      <form className={s.form} onSubmit={btnClick}>
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
          Login
        </button>
      </form>
      <p className={s.p}>
        Ещё нет учётной записи? &nbsp;
        <NavLink
          exact
          to="/register"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Зарегистрируйтесь
        </NavLink>
      </p>
    </>
  );
  // }
};

export default Login;
