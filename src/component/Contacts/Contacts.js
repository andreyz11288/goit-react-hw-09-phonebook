import s from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteList }) => {
  return (
    <div className={s.div}>
      <ul className={s.ul}>
        {contacts.map(e => (
          <li className={s.li} key={e.id} id={e.id}>
            <span>
              {e.name}: {e.number}
            </span>{' '}
            <button
              className={s.button}
              type="submit"
              onClick={() => deleteList(e.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteList: PropTypes.func,
};
