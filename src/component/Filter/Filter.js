import PropTypes from 'prop-types';
import s from './Filter.module.css';
const Filter = ({ filter }) => {
  return (
    <div className={s.container}>
      <label>
        Find contacts by name <br />
        <input
          className={s.input}
          type="text"
          placeholder="Enter filter"
          onChange={filter}
        />
      </label>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.func,
};
