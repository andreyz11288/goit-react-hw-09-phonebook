import { useState, useEffect, useCallback } from 'react';
import s from './Contacts.module.css';
import Contact from '../../Components/Contacts/Contact';
import Phonebook from '../../Components/Phonebook/Phonebook';
import Filter from '../../Components/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import Alert from '../../Components/Alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../redux/Contacts/listOperations';
import { getContactsItems } from '../../redux/Contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsItems);

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [message, setMessage] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [alert, setAlert] = useState(false);

  const luseFanc = textAlarm => {
    setMessage(true);
    setText2(textAlarm);
    setAlert(false);
    setTimeout(() => {
      setMessage(false);
      setText2('');
      setText('');
    }, 3000);
  };

  const mapContacts = useCallback(() => {
    return contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase());
  }, [contacts, text]);

  useEffect(() => {
    if (alert === 'name') {
      luseFanc('Контакт с таким именем уже существует!');
    }
  }, [alert]);

  useEffect(() => {
    if (!message && mapContacts() && text !== '') {
      luseFanc('Такой контакт уже существует!');
    }
  }, [mapContacts, message, text]);

  const phonebookValue = (text, number) => {
    if (text !== '' && number !== '' && mapContacts() === false) {
      dispatch(addList(text, number));
    } else {
      setMessage2(true);
      setText2('Заполните все поля');
      setTimeout(() => {
        setMessage2(false);
        setText2('');
      }, 3000);
    }
    if (mapContacts()) {
      setText(text);
      return;
    }
  };
  const alertFunc = e => {
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
        <div className="alert">
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
      <Contact alert={alertFunc} />
    </div>
  );
};

export default Contacts;
