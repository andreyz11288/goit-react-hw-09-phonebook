import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

export default class Phonebook extends Component {
  static propTypes = {
    phonebookValue: PropTypes.func,
  };
  state = {
    text: '',
    number: '',
  };

  phonebookValue = e => this.setState({ text: e.target.value });
  numberValue = e => this.setState({ number: e.target.value });

  btnClick = e => {
    e.preventDefault();
    this.props.phonebookValue(this.state.text, this.state.number);
    this.setState({ text: '', number: '' });
  };
  render() {
    const { text, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.btnClick}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            value={text}
            placeholder="Enter name"
            onChange={this.phonebookValue}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="number"
            max="9999999999"
            value={number}
            placeholder="Enter phone number"
            onChange={this.numberValue}
          />
        </label>
        <br />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
