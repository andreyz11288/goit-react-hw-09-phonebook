import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export default function NacBar() {
  return (
    <ul className={s.ul}>
      <li>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
