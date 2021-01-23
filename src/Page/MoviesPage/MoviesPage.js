import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    search: '',
    value: '',
    navigations: '',
  };

  componentDidMount() {
    if (this.props.location.search === '') {
      return;
    }
    this.setState({
      movies: JSON.parse(localStorage.getItem('movies')),
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      if (this.state.search !== '') {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=777b32778cd7d07cf03912f76d16cdd2&language=en-US&query=${this.state.search}&page=1&include_adult=false`,
        );
        console.log(response.data.results);
        this.setState({
          movies: response.data.results,
        });
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      movies: localStorage.setItem('movies', JSON.stringify(this.state.movies)),
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ search: this.state.value });
  };

  inputValue = e => {
    this.setState({
      navigations: `?query=${e.target.value}`,
    });
    this.setState({ value: e.target.value });
  };

  render() {
    console.log(this.state.movies.length);
    return (
      <>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          value={this.state.value}
          onChange={this.inputValue}
        />
        <button
          type="submit"
          onClick={this.onSubmit}
          className="{SearchFormButton}"
        >
          <span className="{s.SearchFormButtonLabel}">
            <Link to={this.state.navigations}>Search</Link>
          </span>
        </button>
        <ul>
          {this.state.movies.length > 0 &&
            this.state.movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: {
                        pathname: `${this.props.location.pathname}${this.props.location.search}`,
                      },
                    },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
