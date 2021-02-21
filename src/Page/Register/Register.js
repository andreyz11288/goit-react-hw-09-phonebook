import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Register.module.css';
import { connect } from 'react-redux';
import { registerAuth } from '../../redux/Auth/authOperation';

class Register extends Component {
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  // };
  state = {
    name: '',
    email: '',
    password: '',
  };

  name = e => this.setState({ name: e.target.value });
  email = e => this.setState({ email: e.target.value });
  password = e => this.setState({ password: e.target.value });

  btnClick = e => {
    e.preventDefault();
    // const { name, email, password } = this.state;
    // console.log(name, email, password);
    this.props.onRegister(this.state);
    this.setState({ name: '', password: '', email: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h1 className={s.h1}>Регистрация</h1>
        <form className={s.form} onSubmit={this.btnClick}>
          <label className={s.label}>
            Логин
            <input
              className={s.input}
              type="text"
              value={name}
              placeholder="Введите логин"
              onChange={this.name}
            />
          </label>

          <label className={s.label}>
            Почта
            <input
              className={s.input}
              type="text"
              value={email}
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
            Зарегистрироваться
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onRegister: registerAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
