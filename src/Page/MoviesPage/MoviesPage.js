import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import s from './MoviesPage.module.css';
import img from '../../img/error2-404.jpg';

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
    localStorage.setItem('movies', JSON.stringify(this.state.movies));
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
    const { value, navigations, movies } = this.state;
    return (
      <>
        <input
          className={s.input}
          type="text"
          autoComplete="on"
          autoFocus
          value={value}
          onChange={this.inputValue}
        />
        <button
          type="submit"
          onClick={this.onSubmit}
          className={s.SearchFormButton}
        >
          <span className="{s.SearchFormButtonLabel}">
            <NavLink to={navigations}>Search</NavLink>
          </span>
        </button>
        {movies.length > 0 && (
          <ul className={s.ul}>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink
                  className={s.link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: {
                        pathname: `${this.props.location.pathname}${this.props.location.search}`,
                      },
                    },
                  }}
                >
                  {movie.backdrop_path ? (
                    <img
                      className={s.img}
                      alt="img"
                      height="150"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    />
                  ) : (
                    <img className={s.img} alt="img" height="150" src={img} />
                  )}
                  <p className={s.p}>{movie.original_title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
