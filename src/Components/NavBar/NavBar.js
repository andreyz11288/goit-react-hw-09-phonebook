import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';
import s from './NavBar.module.css';

function NavBar({ isLoggedIn }) {
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
const mapStateToProps = state => ({
  isLoggedIn: getIsAutheticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
