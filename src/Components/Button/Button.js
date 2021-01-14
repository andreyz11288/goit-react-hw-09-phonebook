import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Button.module.css';

export default class Button extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  // window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });

  render() {
    return (
      <div>
        <button className={s.image}>img</button>
      </div>
    );
  }
}
