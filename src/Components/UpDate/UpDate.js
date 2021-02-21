import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './UpData.module.css';
import { connect } from 'react-redux';
import { upList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';
import Contacts from '../../Page/Contacts/Contacts';
// const newContact = new Contacts();
class UpDate extends Component {
  static propTypes = {
    phonebookValue: PropTypes.func,
  };
  state = {
    id: '',
    text: '',
    number: '',
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.props.id) {
      this.setState({ id: this.props.id });
    }
    const { text, message, number } = this.state;

    if (
      !message &&
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase()) &&
      text !== '' &&
      !this.state.alert
    ) {
      //   this.setState({ alert: 'name' });
      //   setTimeout(() => {
      //     this.setState({
      //       alert: false,
      //         text: '', number: ''
      //     });
      //   }, 3000);
      //   return;
    }
    if (
      !message &&
      this.props.contacts.map(e => e.number).includes(number) &&
      text !== '' &&
      !this.state.alert
    ) {
      //   this.setState({ alert: 'number' });
      //   setTimeout(() => {
      //     this.setState({
      //       alert: false,
      //         text: '', number: ''
      //     });
      //   }, 3000);
      //   return;
    }
    this.props.alert(this.state.alert);
  }

  phonebookValue = e => this.setState({ text: e.target.value });
  numberValue = e => this.setState({ number: e.target.value });

  btnClick = e => {
    e.preventDefault();
    // this.setState({ id: this.props.id });
    this.props.onUp(this.state.id, this.state.text, this.state.number);
    this.setState({ text: '', number: '', id: '' });
  };
  render() {
    const { text, number, alert } = this.state;
    return (
      <form className={s.form} onSubmit={this.btnClick}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            value={text}
            placeholder="Введите новое имя"
            onChange={this.phonebookValue}
          />
        </label>
        &nbsp;
        <label className={s.label}>
          <input
            className={s.input}
            type="number"
            max="9999999999"
            value={number}
            placeholder="Введите новый номер телефона"
            onChange={this.numberValue}
          />
        </label>
        {text !== '' && number !== '' ? (
          // && !alert
          <button type="submit" className={s.button}>
            Обновить
          </button>
        ) : (
          <button type="submit" disabled className={s.button}>
            Обновить
          </button>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContactsItems(state),
});

const mapDispatchToProps = {
  onUp: upList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpDate);
