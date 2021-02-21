import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={s.ul}>
      <li>
        <NavLink
          to="/login"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Войти
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Регистрация
        </NavLink>
      </li>
    </ul>
  );
}
