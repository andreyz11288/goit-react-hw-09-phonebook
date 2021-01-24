import { Component } from 'react';
import Axios from 'axios';
import Render from '../../Components/Render/Render';
import { homePage } from '../../Components/Api/Api';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(`${homePage()}`);
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
