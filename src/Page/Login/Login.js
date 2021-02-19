import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Login.module.css';

export default class Login extends Component {
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  // };
  state = {
    text: '',
    password: '',
  };

  name = e => this.setState({ text: e.target.value });
  password = e => this.setState({ password: e.target.value });

  btnClick = e => {
    e.preventDefault();
    console.log(this.state.text, this.state.password);
    // this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ text: '', password: '' });
  };

  render() {
    const { text, password } = this.state;
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
