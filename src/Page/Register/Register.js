import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Register.module.css';

export default class Register extends Component {
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  // };
  state = {
    text: '',
    mail: '',
    password: '',
  };

  name = e => this.setState({ text: e.target.value });
  mail = e => this.setState({ mail: e.target.value });
  password = e => this.setState({ password: e.target.value });

  btnClick = e => {
    e.preventDefault();
    const { text, mail, password } = this.state;
    console.log(text, mail, password);
    // this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ text: '', password: '', mail: '' });
  };

  render() {
    const { text, mail, password } = this.state;
    return (
      <form className={s.form} onSubmit={this.btnClick}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            value={text}
            placeholder="Enter name"
            onChange={this.name}
          />
        </label>

        <label className={s.label}>
          Mail
          <input
            className={s.input}
            type="text"
            value={mail}
            placeholder="Enter mail"
            onChange={this.mail}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="text"
            value={password}
            placeholder="Enter password"
            onChange={this.password}
          />
        </label>
        <br />
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    );
  }
}
