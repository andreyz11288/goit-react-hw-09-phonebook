import React, { Component } from 'react';
import Reviews from '../../Components/Reviews/Reviews';
import Cast from '../../Components/Cast/Cast';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { movieDetailsPage } from '../../Components/Api/Api';

export default class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `${movieDetailsPage(this.props.match.params.id)}`,
    );

    // console.log(response.data);
    this.setState({ movies: response.data });
  }

  render() {
    const { movies } = this.state;
    const { match, history, location } = this.props;
    return (
      <div className={s.container}>
        <button
          className={s.button}
          onClick={() => history.push(location.state.from.pathname)}
        >
          ☚ Go back
          {/* <NavLink to="/">Go back</NavLink> */}
        </button>
        <div>
          <div className={s.div}>
            {movies.poster_path && (
              <img
                alt="img"
                src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                height="500"
              />
            )}
            <div>
              <h1>
                {movies.original_title} (
                {`${movies.release_date}`.substring(0, 4)})
              </h1>
              <p>User Score: {movies.vote_average}%</p>
              <h2>overview</h2>
              <p>{movies.overview}</p>
              <h2>Genres</h2>
              <ul className={s.genres}>
                {movies.genres &&
                  movies.genres.map(e => <li key={e.id}>{e.name}</li>)}
              </ul>
            </div>
          </div>
          <ul className={s.addInfo}>
            <h3>Additional information</h3>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkactive}
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: {
                    pathname: `${location.state.from.pathname}`,
                  },
                },
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkactive}
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: {
                    pathname: `${location.state.from.pathname}`,
                  },
                },
              }}
            >
              <li>Reviews</li>
            </NavLink>
          </ul>
          <Route path="/movies/:id/cast" component={Cast} />
          <Route path="/movies/:id/reviews" component={Reviews} />
        </div>
      </div>
    );
  }
}
