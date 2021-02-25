import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterList } from '../../redux/Contacts/listAction';
import { getFilter } from '../../redux/Contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={s.container}>
      <label>
        Фильтр <br />
        <input
          value={filter}
          className={s.input}
          type="text"
          placeholder="Введите имя "
          onChange={e => dispatch(filterList(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
