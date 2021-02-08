import { Component } from 'react';
import s from './App.module.css';
import './App2.css';
import Contacts from './component/Contacts/Contacts';
import Phonebook from './component/Phonebook/Phonebook';
import Filter from './component/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import Alert from './component/Alert/Alert';
import { connect } from 'react-redux';
import { addList } from './redux/listOperations';
import { getContactsItems } from './redux/contacts-selectors';

class App extends Component {
  state = {
    text: '',
    text2: '',
    message: false,
    message2: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { text, message } = this.state;
    if (
      !message &&
      this.props.contacts
        .map(e => e.name.toLowerCase())
        .includes(text.toLowerCase()) &&
      text !== ''
    ) {
      this.setState({ message: true, text2: 'Contact already exists!' });
      setTimeout(() => {
        this.setState({ message: false, text: '', text2: '' });
      }, 3000);
      return;
    }
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
      this.setState({ message2: true, text2: 'Fill in all the fields' });
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

  render() {
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
        <Contacts />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: getContactsItems(state) };
};

const mapDispatchToProps = {
  onAddList: addList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
