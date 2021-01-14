import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Loader from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class ImageGalleryItem extends Component {
  state = {
    page: 1,
    gallery: null,
    // loading: false,
    error: null,
    // length: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.onFetch !== this.props.onFetch) {
      this.setState({ status: 'pending', gallery: null });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.onFetch}&page=${this.state.page}&per_page=12&key=19060894-87e054058a337546d07970d77`,
      )
        .then(r => r.json())
        .then(e => {
          this.setState({ gallery: e.hits });
          if (e.hits.length === 0) {
            return this.setState({ status: 'rejected' });
          }
          this.setState({ status: 'resolve' });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    }
  }

  render() {
    const { status, gallery } = this.state;

    if (status === 'idle') {
      return (
        <li>
          <p>Введите запрос</p>
        </li>
      );
    }

    if (status === 'rejected') {
      return <h1>Запрос не найден</h1>;
    }
    if (status === 'pending') {
      return (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }

    if (status === 'resolve') {
      return gallery.map(e => (
        <li key={e.id} className={s.ImageGalleryItem}>
          <img
            src={e.webformatURL}
            alt="img"
            className={s.ImageGalleryItemImage}
          />
        </li>
      ));
    }
  }
}
