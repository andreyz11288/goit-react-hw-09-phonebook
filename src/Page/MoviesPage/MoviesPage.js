import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import s from './MoviesPage.module.css';
import Render from '../../Components/Render/Render';
import { moviesPage } from '../../Components/Api/Api';

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
        const response = await Axios.get(`${moviesPage(this.state.search)}`);
        // console.log(response.data.results);
        this.setState({
          movies: response.data.results,
        });
        localStorage.setItem('movies', JSON.stringify(this.state.movies));
      }
    }
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
        <Render movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
