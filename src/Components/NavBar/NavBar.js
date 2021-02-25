import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';
import s from './NavBar.module.css';

function NavBar() {
  const isLoggedIn = useSelector(getIsAutheticated);

  return (
    <ul className={s.ul}>
      <li>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Главная
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            to="/contacts"
            className={s.navLink}
            activeClassName={s.navLinkactive}
          >
            Контакты
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavBar;
