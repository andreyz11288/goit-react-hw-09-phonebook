import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Register.module.css';

export default class register extends Component {
//   static propTypes = {
//     phonebookValue: PropTypes.func,
//   };
  state = {
    login: '',
      mail: '',
    password: '',
  };

  login = e => this.setState({ login: e.target.value });
    mail = e => this.setState({ mail: e.target.value });
    password = e => this.setState({ password: e.target.value });

  registerClick = e => {
    e.preventDefault();
    // this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ login: '', mail: '', password:'' });
  };
  render() {
      const { login, mail, password } = this.state;
      console.log(login, mail,password);
    return (
      <form className={s.registerForm} onSubmit={this.registerClick}>
        <label className={s.registerLabel}>
          Login
          <input
            className={s.registerInput}
            type="text"
            value={login}
            placeholder="Enter name"
            onChange={this.login}
          />
        </label>

        <label className={s.registerLabel}>
          Mail
          <input
            className={s.registerInput}
            type="text"
            value={mail}
            placeholder="Enter mail"
            onChange={this.mail}
          />
            </label>
            <label className={s.registerLabel}>
          Password
          <input
            className={s.registerInput}
            type="text"           
            value={password}
            placeholder="Enter password"
            onChange={this.password}
          />
        </label>
        <br />
        <button type="submit" className={s.registerButton}>
          register
        </button>
      </form>
    );
  }
}
