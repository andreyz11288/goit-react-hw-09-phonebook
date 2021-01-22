import React, { Component } from 'react';
import Reviews from './Reviews';
import Cast from './Cast';
import { Route } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=777b32778cd7d07cf03912f76d16cdd2&language=en-US`,
    );
    console.log(response.data);
    this.setState({ movies: response.data });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <div className={s.div}>
          {movies.poster_path && (
            <img
              alt="img"
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
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
        <ul>
          <Link to={`${this.props.match.url}/cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`${this.props.match.url}/reviews`}>
            <li>Reviews</li>
          </Link>
        </ul>
        <Route path="/movies/:id/cast" component={Cast} />
        <Route path="/movies/:id/reviews" component={Reviews} />
      </div>
    );
  }
}
