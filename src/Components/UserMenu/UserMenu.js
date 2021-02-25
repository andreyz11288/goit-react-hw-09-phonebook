import React, { useCallback } from 'react';
import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import avatar from '../../img/404_error.jpg';
import { getUserEmail } from '../../redux/Auth/authSelectors';
import { logOutAuth } from '../../redux/Auth/authOperation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const onLogout = useCallback(() => {
    dispatch(logOutAuth());
  }, [dispatch]);

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

export default UserMenu;
