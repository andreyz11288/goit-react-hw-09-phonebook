import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './UpData.module.css';
import { connect } from 'react-redux';
import { upList, fetchList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';

// import Contacts from '../../Page/Contacts/Contacts';
// const newContact = new Contacts();
class UpDate extends Component {
  static propTypes = {
    phonebookValue: PropTypes.func,
  };
  state = {
    // id: '',
    text: '',
    number: '',
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.id !== this.props.id) {
    //   this.setState({ id: this.props.id });
    // }
    const { text, message } = this.state;

    if (
      !message &&
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase()) &&
      text !== '' &&
      !this.state.alert
    ) {
      this.setState({ alert: 'name' });
      setTimeout(() => {
        this.setState({
          text: '',
          number: '',
        });
      }, 500);
      setTimeout(() => {
        this.setState({
          alert: false,
        });
      }, 3000);
      return;
    }

    this.props.alert(this.state.alert);
  }

  phonebookValue = e => {
    if (e.target.value !== '') {
      this.setState({ text: e.target.value });
    }
  };
  numberValue = e => this.setState({ number: e.target.value });

  btnClick = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.onUp(this.props.id, this.props.name, this.state.number);
    } else if (this.state.number === '') {
      this.props.onUp(this.props.id, this.state.text, this.props.number);
    } else {
      this.props.onUp(this.props.id, this.state.text, this.state.number);
    }
    this.setState({ text: '', number: '', id: '' });
    setTimeout(() => {
      this.props.upListFetch();
    }, 250);
  };
  render() {
    const { text, number, alert } = this.state;
    return (
      <form className={s.form} onSubmit={this.btnClick}>
        <label className={s.label}>
          <input
            // required
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
            // required
            className={s.input}
            type="number"
            max="9999999999"
            value={number}
            placeholder="Введите новый номер телефона"
            onChange={this.numberValue}
          />
        </label>
        {!alert ? (
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
  upListFetch: fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpDate);
