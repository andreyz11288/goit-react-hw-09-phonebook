import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../redux/Auth/authOperation';

const Login = ({ onLogin }) => {
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // };
  // state = {
  //   email: '',
  //   password: '',
  // };

  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    // console.log(this.state.text, this.state.password);
    onLogin({ email, password });
    // this.props.phonebookValue(this.state.text, this.state.number);
    setEmail('');
    setPassword('');
    // this.setState({ email: '', password: '' });
  };

  // render() {
  // const { text, password } = this.state;
  return (
    <>
      <h1 className={s.h1}>Aвторизация</h1>
      <form className={s.form} onSubmit={btnClick}>
        <label className={s.label}>
          Почта
          <input
            className={s.input}
            type="text"
            value={email}
            placeholder="Введите почту"
            onChange={emailFunc}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            value={password}
            placeholder="Введите пароль"
            onChange={passwordFunc}
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
  // }
};

const mapDispatchToProps = {
  onLogin: loginAuth,
};
export default connect(null, mapDispatchToProps)(Login);
