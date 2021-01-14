import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Loaders from '../Loader/Loader';

export default class ImageGalleryItem extends Component {
  state = {
    page: 1,
    gallery: null,
    error: null,
    status: 'idle',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onFetch === '' && prevState.status !== this.state.status) {
      this.setState({ status: 'idle' });
      this.props.visible('true');
    }
    if (prevProps.onFetch !== this.props.onFetch) {
      this.setState({ status: 'pending', gallery: null });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.onFetch}&page=${this.state.page}&per_page=12&key=19060894-87e054058a337546d07970d77`,
      )
        .then(r => r.json())
        .then(e => {
          this.setState({ gallery: e.hits });
          if (e.hits.length === 0) {
            this.props.visible('true');
            return this.setState({ status: 'rejected' });
          }
          this.setState({ status: 'resolve' });
        })
        .catch(() => this.setState({ status: 'rejected' }));
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
      return <Loaders />;
    }

    if (status === 'resolve') {
      return gallery.map(e => (
        <li key={e.id} className={s.ImageGalleryItem}>
          <img
            src={e.webformatURL}
            data-src={e.largeImageURL}
            alt="img"
            className={s.ImageGalleryItemImage}
            onClick={() => this.props.largeImageURL(e.largeImageURL)}
          />
        </li>
      ));
    }
  }
}
