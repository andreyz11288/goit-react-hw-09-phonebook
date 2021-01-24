import React, { Component } from 'react';
import Axios from 'axios';
import s from './Cast.module.css';
import img from '../../img/404_error.jpg';
import { cast } from '../Api/Api';

export default class Cast extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(cast(`${this.props.match.params.id}`));
    // console.log(response.data.cast);
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
