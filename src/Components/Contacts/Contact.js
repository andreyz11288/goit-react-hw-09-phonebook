import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteList, fetchList } from '../../redux/Contacts/listOperations';
// import { fetchList } from '../../redux/Contacts/listOperations';
import React, { Component } from 'react';
import { getFilterContact } from '../../redux/Contacts/contacts-selectors';

class Contact extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <div className={s.div}>
        <TransitionGroup component="ul" className={s.ul}>
          {this.props.contacts.map(e => (
            <CSSTransition key={e.id} classNames={s} timeout={250}>
              <li className={s.li} key={e.id} id={e.id}>
                <span>
                  <span className={s.span}>{e.name}</span>
                  <span className={s.span2}>{e.number}</span>
                </span>
                <button
                  className={s.button}
                  type="submit"
                  onClick={() => this.props.deleteList(e.id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: getFilterContact(state) };
};

const mapDispatchToProps = {
  deleteList: deleteList,
  fetchList: fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

Contact.propTypes = {
  contacts: PropTypes.array,
  deleteList: PropTypes.func,
};
