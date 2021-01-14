import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import s from './Modal.module.css';

export default class Modal extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  state = {
    modal: false,
  };

  componentDidMount() {
    if (this.props.src !== '') {
      this.setState({ modal: true });
    }
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ modal: false });
      }
    });
    window.addEventListener('click', e => {
      if (e.path[0].alt !== 'img') {
        this.setState({ modal: false });
      }
      if (e.path[0].alt === 'img') {
        this.setState({ modal: true });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ modal: false });
      }
    });
    window.removeEventListener('click', e => {
      if (e.path[0].alt !== 'img') {
        this.setState({ modal: false });
      }
      if (e.path[0].alt === 'img') {
        this.setState({ modal: true });
      }
    });
  }

  render() {
    return (
      this.state.modal && (
        <div className={s.Overlay}>
          <div className={s.Modal}>
            <img src={this.props.src} alt="img" />
          </div>
        </div>
      )
    );
  }
}
