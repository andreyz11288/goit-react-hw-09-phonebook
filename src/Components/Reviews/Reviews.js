import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/reviews?api_key=777b32778cd7d07cf03912f76d16cdd2&language=en-US&page=1`,
    );
    console.log(response);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        {this.state.movies.length > 0 ? (
          <h1>Additional information</h1>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
        {this.state.movies.length > 0 && (
          <ul>
            {this.state.movies.map(e => (
              <li key={e.id}>
                <h2>{e.author}</h2>
                <p className={s.p}>{e.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default withRouter(Reviews);
