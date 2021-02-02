import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { filterList } from '../../redux/listAction';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={s.container}>
      <label>
        Find contacts by name <br />
        <input
          value={filter}
          className={s.input}
          type="text"
          placeholder="Enter filter"
          onChange={e => changeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  changeFilter: filterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
