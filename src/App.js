import { Component } from 'react';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
    page: 1,
  };

  onSubmit = e => {
    return this.setState({ search: e });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery onFetch={this.state.search} />
      </div>
    );
  }
}

export default App;
