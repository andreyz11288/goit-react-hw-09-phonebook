import { Component } from 'react';
import Axios from 'axios';
import Render from '../../Components/Render/Render';

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
        <Render movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
