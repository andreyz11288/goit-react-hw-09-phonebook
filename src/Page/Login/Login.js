import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../redux/Auth/authOperation';

class Login extends Component {
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  // };
  state = {
    email: '',
    password: '',
  };

  email = e => this.setState({ email: e.target.value });
  password = e => this.setState({ password: e.target.value });

  btnClick = e => {
    e.preventDefault();
    // console.log(this.state.text, this.state.password);
    this.props.onLogin(this.state);
    // this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { text, password } = this.state;
    return (
      <>
        <h1 className={s.h1}>Aвторизация</h1>
        <form className={s.form} onSubmit={this.btnClick}>
          <label className={s.label}>
            Почта
            <input
              className={s.input}
              type="text"
              value={text}
              placeholder="Введите почту"
              onChange={this.email}
            />
          </label>

          <label className={s.label}>
            Пароль
            <input
              className={s.input}
              type="password"
              value={password}
              placeholder="Введите пароль"
              onChange={this.password}
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
  }
}

const mapDispatchToProps = {
  onLogin: loginAuth,
};
export default connect(null, mapDispatchToProps)(Login);
