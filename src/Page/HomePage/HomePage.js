import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import s from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=777b32778cd7d07cf03912f76d16cdd2',
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <ul className={s.ul}>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                className={s.link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                <img
                  className={s.img}
                  alt="img"
                  height="150"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
                <p>{movie.original_title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
