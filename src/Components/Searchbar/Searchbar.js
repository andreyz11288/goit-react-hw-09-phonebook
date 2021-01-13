import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  inputValue = e => {
    return this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.inputValue}
          />
        </form>
      </header>
    );
  }
}

// inputSearchValue(inputSearch) {
//     refs.main.innerHTML = ''
//     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputSearch}&page=1&per_page=48&key=19060894-87e054058a337546d07970d77`).then(r => r.json()).then(e => {

//                 const markup = hend(e.hits);
//                 refs.main.insertAdjacentHTML('beforeend', markup);

//         })
//     }
