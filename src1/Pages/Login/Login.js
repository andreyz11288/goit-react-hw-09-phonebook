import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Login.module.css';

export default class Login extends Component {
//   static propTypes = {
//     phonebookValue: PropTypes.func,
//   };
  state = {
    login: '',
    //   mail: '',
    password: '',
  };

  login = e => this.setState({ login: e.target.value });
    mail = e => this.setState({ mail: e.target.value });
    // password = e => this.setState({ password: e.target.value });

  registerClick = e => {
    e.preventDefault();
    // this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ login: '', mail: '', password:'' });
  };
  render() {
      const { login, mail, password } = this.state;
      console.log(login, mail,password);
    return (
      <form className={s.loginForm} onSubmit={this.loginClick}>
        <label className={s.loginLabel}>
          Login
          <input
            className={s.loginInput}
            type="text"
            value={login}
            placeholder="Enter name"
            onChange={this.login}
          />
        </label>

        <label className={s.loginLabel}>
          Password
          <input
            className={s.loginInput}
            type="text"
            value={mail}
            placeholder="Enter password"
            onChange={this.Password}
          />
            </label>
         
        <br />
        <button type="submit" className={s.loginButton}>
          register
        </button>
      </form>
    );
  }
}
