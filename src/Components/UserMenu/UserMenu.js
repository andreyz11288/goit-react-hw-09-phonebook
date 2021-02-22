import React from 'react';
import s from './UserMenu.module.css';
import { connect } from 'react-redux';
import avatar from '../../img/404_error.jpg';
import { getUserEmail } from '../../redux/Auth/authSelectors';
import { logOutAuth } from '../../redux/Auth/authOperation';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div className={s.ul}>
      <img src={avatar} alt="" width="32" className={s.navLink} />
      <span className={s.navLink}>{email}</span>
      <button type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logOutAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
