import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  deleteList,
  fetchList,
  upList,
} from '../../redux/Contacts/listOperations';
import React, { Component } from 'react';
import { getFilterContact } from '../../redux/Contacts/contacts-selectors';
import UpDate from '../UpDate/UpDate';

class Contact extends Component {
  state = {
    clickUp: false,
  };

  componentDidMount() {
    this.props.fetchList();
    if (this.state.clickUp) {
      this.setState({ clickUp: false });
    }
  }

  onClick = e => {
    this.setState({ clickUp: e });
  };

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
                  onClick={() => this.onClick(!this.state.clickUp)}
                >
                  {this.state.clickUp ? 'Закрыть' : 'Обновить'}
                </button>
                <button
                  className={s.button}
                  type="submit"
                  onClick={() => this.props.deleteList(e.id)}
                >
                  Удалить
                </button>
                {this.state.clickUp && (
                  <UpDate
                    id={e.id}
                    alert={this.props.alert}
                    name={e.name}
                    number={e.number}
                  />
                )}
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
  onClickUp: upList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

Contact.propTypes = {
  contacts: PropTypes.array,
  deleteList: PropTypes.func,
};
