import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';

export const AppBar = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  return (
    <div className={s.div}>
      <NavBar />
      {isAuthenticated ? <UserMenu /> : <Navigation />}
    </div>
  );
};

export default AppBar;
