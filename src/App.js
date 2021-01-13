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

  onFetch = fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.search}&page=${this.state.page}&per_page=12&key=19060894-87e054058a337546d07970d77`,
  ).then(r => r.json());

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.search);
    console.log(this.state.search);
    this.onFetch.then(console.log());
  }

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery onFetch={this.onFetch} />
      </div>
    );
  }
}

export default App;
