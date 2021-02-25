import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';

export const AppBar = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  // render() {
  return (
    <div className={s.div}>
      <NavBar />
      {isAuthenticated ? <UserMenu /> : <Navigation />}
    </div>
  );
  // }
};

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAutheticated(state),
// });

export default AppBar;
