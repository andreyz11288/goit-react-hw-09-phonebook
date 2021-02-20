import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { getIsAutheticated } from '../../redux/Auth/authSelectors';

export class AppBar extends Component {
  render() {
    return (
      <div className={s.div}>
        <NavBar />
        {this.props.isAuthenticated ? <UserMenu /> : <Navigation />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAutheticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
