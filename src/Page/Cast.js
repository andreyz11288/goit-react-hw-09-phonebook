import React, { Component } from 'react';
import Axios from 'axios';

export default class Cast extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=777b32778cd7d07cf03912f76d16cdd2&language=en-US`,
    );
    this.setState({ movies: response.data.cast });
  }

  render() {
    return (
      <div>
        <h1>Cast</h1>
        <ul>
          {this.state.movies.map(e => (
            <li key={e.cast_id}>
              {e.profile_path && (
                <img
                  alt="img"
                  src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                  height="200"
                />
              )}
              <h2>{e.name}</h2>
              <p>character: {e.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
