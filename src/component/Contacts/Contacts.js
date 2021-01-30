import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = ({ contacts, deleteList }) => {
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
                onClick={() => deleteList(e.id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteList: PropTypes.func,
};
