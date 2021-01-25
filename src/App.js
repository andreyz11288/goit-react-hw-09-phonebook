import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import Contacts from './component/Contacts/Contacts';
import Phonebook from './component/Phonebook/Phonebook';
import Section from './component/Section/Section';
import Filter from './component/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageGetItem = localStorage.getItem('contacts');
    if (localStorageGetItem) {
      this.setState({ contacts: JSON.parse(localStorageGetItem) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
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
      return alert(`${text} is already in contacts`);
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
    return (
      <div className={s.App}>
        <Section title="Phonebook">
          <Phonebook phonebookValue={this.phonebookValue} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.contactFilter} />
          <Contacts
            contacts={this.visibleContact()}
            deleteList={this.deleteList}
          />
        </Section>
      </div>
    );
  }
}
