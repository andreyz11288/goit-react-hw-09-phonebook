import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    visible: false,
  };

  largeImageURL = e => {
    this.props.src(e);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onFetch !== '' && this.state.visible !== true) {
      this.setState({ visible: true });
    }
  }

  visible = length => {
    if (length) {
      if (this.state.visible) {
        this.setState({ visible: false });
      }
    }
  };

  render() {
    return (
      <div>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            onFetch={this.props.onFetch}
            largeImageURL={this.largeImageURL}
            visible={this.visible}
          />
        </ul>
        {this.state.visible && <Button />}
      </div>
    );
  }
}
export default ImageGallery;
