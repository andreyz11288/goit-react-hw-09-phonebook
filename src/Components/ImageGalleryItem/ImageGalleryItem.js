import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Loaders from '../Loader/Loader';

export default class ImageGalleryItem extends Component {
  state = {
    // page: 1,
    gallery: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    let thisPage = 1;
    // if (prevProps.onFetch !== this.props.onFetch) {
    //   thisPage = 1

    // }

    if (this.props.onFetch === '' && prevState.status !== this.state.status) {
      this.setState({ status: 'idle' });
      this.props.visible(true);
    }
    if (
      prevProps.onFetch !== this.props.onFetch &&
      prevProps.numberPage === this.props.numberPage
    ) {
      console.log('#1#');
      console.log(prevProps.onFetch);
      console.log(this.props.onFetch);
      console.log(thisPage);
      this.setState({ gallery: [] });
      this.setState({ status: 'pending' });
      this.props.visible(true);
      this.props.resPage(true);
      // console.log(this.props.numberPage);
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.onFetch}&page=${thisPage}&per_page=12&key=19060894-87e054058a337546d07970d77`,
      )
        .then(r => r.json())
        .then(e => {
          this.setState({ gallery: e.hits });
          this.props.visible(false);
          if (e.hits.length === 0) {
            this.props.visible(true);
            return this.setState({ status: 'rejected' });
          }
          this.setState({ status: 'resolve' });
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
    if (
      prevProps.onFetch === this.props.onFetch &&
      prevProps.numberPage < this.props.numberPage
    ) {
      console.log('@11111@');
      console.log(prevProps.onFetch);
      console.log(this.props.onFetch);
      console.log(prevProps.numberPage);
      console.log(this.props.numberPage);
      thisPage = this.props.numberPage;
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.onFetch}&page=${thisPage}&per_page=12&key=19060894-87e054058a337546d07970d77`,
      )
        .then(r => r.json())
        .then(e => {
          const { gallery } = this.state;
          this.setState({ gallery: [...gallery, ...e.hits] });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          this.props.visible(false);
          if (e.hits.length === 0) {
            this.props.visible(true);
          }
          this.setState({ status: 'resolve' });
        })
        .catch(() => this.setState({ status: 'rejected' }));
    }
    console.log(this.state.gallery);
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
