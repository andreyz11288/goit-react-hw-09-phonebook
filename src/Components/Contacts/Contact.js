import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteList, fetchList } from '../../redux/Contacts/listOperations';
import React, { useState, useEffect } from 'react';
import { getFilterContact } from '../../redux/Contacts/contacts-selectors';
import UpDate from '../UpDate/UpDate';

const Contact = ({ alert }) => {
  const dispatch = useDispatch();

  const [clickUp, setClickUp] = useState(false);

  const contacts = useSelector(getFilterContact);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const onClick = e => {
    setClickUp(e);
  };

  return (
    <div className={s.div}>
      <TransitionGroup component="ul" className={s.ul}>
        {contacts.map(e => (
          <CSSTransition key={e.id} classNames={s} timeout={250}>
            <li className={s.li} key={e.id} id={e.id}>
              <span>
                <span className={s.span}>{e.name}</span>
                <span className={s.span2}>{e.number}</span>
              </span>
              <button
                className={s.button}
                type="submit"
                onClick={() => onClick(!clickUp)}
              >
                {clickUp ? 'Закрыть' : 'Обновить'}
              </button>
              <button
                className={s.button}
                type="submit"
                onClick={() => dispatch(deleteList(e.id))}
              >
                Удалить
              </button>
              {clickUp && (
                <UpDate
                  id={e.id}
                  propAlert={alert}
                  propName={e.name}
                  propNumber={e.number}
                />
              )}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.array,
  deleteList: PropTypes.func,
};
