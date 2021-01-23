import React, { Component } from 'react';
import Axios from 'axios';
import s from './Cast.module.css';
import img from '../../img/404_error.jpg';

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
        <ul className={s.ul}>
          {this.state.movies.map(e => (
            <li className={s.li} key={e.cast_id}>
              {e.profile_path ? (
                <img
                  className={s.img}
                  alt="img"
                  src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                  height="150"
                />
              ) : (
                <img className={s.img} alt="img" src={img} height="150" />
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
