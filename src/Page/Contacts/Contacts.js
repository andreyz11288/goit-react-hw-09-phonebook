import { useState, useEffect } from 'react';
import s from './Contacts.module.css';
import Contact from '../../Components/Contacts/Contact';
import Phonebook from '../../Components/Phonebook/Phonebook';
import Filter from '../../Components/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import Alert from '../../Components/Alert/Alert';
import { connect } from 'react-redux';
import { addList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';

const Contacts = ({ contacts, onAddList }) => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [message, setMessage] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (
      !message &&
      contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase()) &&
      text !== ''
    ) {
      setAlert(true);
    }
    if (alert === true) {
      setMessage(true);
      setText2('Такой контакт уже существует!');
      setAlert(false);
      setTimeout(() => {
        setMessage(false);
        setText2('');
        setText('');
      }, 3000);
    }
    if (alert === 'name') {
      setMessage(true);
      setText2('Контакт с таким именем уже существует!');
      setAlert(false);
      setTimeout(() => {
        setMessage(false);
        setText2('');
        setText('');
      }, 3000);
    }
  }, [alert, contacts, message, text]);

  const phonebookValue = (text, number) => {
    if (
      text !== '' &&
      number !== '' &&
      contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase()) ===
        false
    ) {
      onAddList(text, number);
    } else {
      setMessage2(true);
      setText2('Заполните все поля');
      setTimeout(() => {
        setMessage2(false);
        setText2('');
      }, 3000);
    }
    if (contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase())) {
      setText(text);
    }
  };
  const alertFun = e => {
    if (e) {
      setAlert(e);
    }
  };

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
        <div>
          <CSSTransition
            in={message || message2}
            classNames="alert"
            timeout={250}
            unmountOnExit
          >
            <Alert massage={text2} />
          </CSSTransition>
        </div>
      </div>
      <Phonebook phonebookValue={phonebookValue} />
      <CSSTransition
        in={contacts.length > 1}
        classNames="filter"
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <Contact alert={alertFun} />
    </div>
  );
  // }
};

const mapStateToProps = state => ({
  contacts: getContactsItems(state),
});

const mapDispatchToProps = {
  onAddList: addList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
