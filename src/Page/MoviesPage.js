import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    search: '',
    value: '',
  };

  inputValue = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      if (this.state.search !== '') {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=777b32778cd7d07cf03912f76d16cdd2&language=en-US&query=${this.state.search}&page=1&include_adult=false`,
        );
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ search: this.state.value });
  };

  inputValue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <form className="{SearchForm}" onSubmit={this.onSubmit}>
          <input
            // className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
            onChange={this.inputValue}
          />
          <button type="submit" className="{SearchFormButton}">
            <span className="{s.SearchFormButtonLabel}">Search</span>
          </button>
        </form>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
