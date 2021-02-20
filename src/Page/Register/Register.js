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
            onChange={this.email}
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
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onRegister: registerAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
