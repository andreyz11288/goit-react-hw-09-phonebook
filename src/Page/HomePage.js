import { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=777b32778cd7d07cf03912f76d16cdd2',
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {/* <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} /> */}
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
