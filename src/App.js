import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import './App2.css';
import Contacts from './component/Contacts/Contacts';
import Phonebook from './component/Phonebook/Phonebook';
import Filter from './component/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import Alert from './component/Alert/Alert';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    text: '',
    message: false,
  };

  componentDidMount() {
    const localStorageGetItem = localStorage.getItem('contacts');
    if (localStorageGetItem) {
      this.setState({ contacts: JSON.parse(localStorageGetItem) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts, text, message } = this.state;
    if (
      !message &&
      contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase()) &&
      text !== ''
    ) {
      console.log(text);
      this.setState({ message: true });
      setTimeout(() => {
        this.setState({ message: false, text: '' });
      }, 2000);
      return;
    }

    if (this.state.contacts === prevState.contacts) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  phonebookValue = (text, number) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name: text,
      number,
    };

    if (contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase())) {
      this.setState({ text });
      return;
    }
    if (text !== '' && number !== '') {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    } else {
      return alert('Fill in all the fields');
    }
  };

  contactFilter = e => {
    this.setState({ filter: e.target.value });
  };
  visibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteList = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== e),
      };
    });
  };

  render() {
    console.log(this.state.contacts.length > 1);
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
              in={this.state.message}
              classNames="alert"
              timeout={250}
              unmountOnExit
            >
              <Alert />
            </CSSTransition>
          </div>
        </div>
        <Phonebook phonebookValue={this.phonebookValue} />
        {/* <h1>Contacts</h1> */}
        <CSSTransition
          in={this.state.contacts.length > 1}
          // appear={true}
          classNames="filter"
          timeout={250}
          unmountOnExit
        >
          <Filter filter={this.contactFilter} />
        </CSSTransition>
        <Contacts
          contacts={this.visibleContact()}
          deleteList={this.deleteList}
        />
      </div>
    );
  }
}
