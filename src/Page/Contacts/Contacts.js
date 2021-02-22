import { Component } from 'react';
import s from './Contacts.module.css';
// import './App2.css';
import Contact from '../../Components/Contacts/Contact';
import Phonebook from '../../Components/Phonebook/Phonebook';
import Filter from '../../Components/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import Alert from '../../Components/Alert/Alert';
import { connect } from 'react-redux';
import { addList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';
// import UpDate from '../../Components/UpDate/UpDate';

// console.log(UpDate);

class Contacts extends Component {
  state = {
    text: '',
    text2: '',
    message: false,
    message2: false,
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.upDate !== prevState.alert) {
    //   this.setState({ alert: this.props.upDate });
    // }

    const { text, message } = this.state;
    if (
      !message &&
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase()) &&
      text !== ''
    ) {
      this.setState({ alert: true });
    }
    if (this.state.alert === true) {
      this.setState({ message: true, text2: 'Такой контакт уже существует!' });
      this.setState({ alert: false });
      setTimeout(() => {
        this.setState({ message: false, text: '', text2: '' });
      }, 3000);
      return;
    }
    if (this.state.alert === 'name') {
      this.setState({
        message: true,
        text2: 'Контакт с таким именем уже существует!',
      });
      this.setState({ alert: false });
      setTimeout(() => {
        this.setState({ message: false, text: '', text2: '' });
      }, 3000);
      return;
    }
    // if (this.state.alert === 'number') {
    //   this.setState({
    //     message: true,
    //     text2: 'Контакт с таким номером уже существует!',
    //   });
    //   this.setState({ alert: false });
    //   setTimeout(() => {
    //     this.setState({ message: false, text: '', text2: '' });
    //   }, 3000);
    //   return;
    // }
  }

  phonebookValue = (text, number) => {
    if (
      text !== '' &&
      number !== '' &&
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase()) === false
    ) {
      this.props.onAddList(text, number);
    } else {
      this.setState({ message2: true, text2: 'Заполните все поля' });
      setTimeout(() => {
        this.setState({ message2: false, text2: '' });
      }, 3000);
    }
    if (
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase())
    ) {
      this.setState({ text });
      return;
    }
  };
  alert = e => {
    if (e) {
      console.log(e);
      this.setState({ alert: e });
    }
  };

  render() {
    // console.log(this.props.upDate);

    return (
      <div className={s.App}>
        <div className={s.notif}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={s}
            timeout={500}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <div className="alert">
            <CSSTransition
              in={this.state.message || this.state.message2}
              classNames="alert"
              timeout={250}
              unmountOnExit
            >
              <Alert massage={this.state.text2} />
            </CSSTransition>
          </div>
        </div>
        <Phonebook phonebookValue={this.phonebookValue} />
        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="filter"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <Contact alert={this.alert} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContactsItems(state),
  // upDate: getContact(state),
});

const mapDispatchToProps = {
  onAddList: addList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
