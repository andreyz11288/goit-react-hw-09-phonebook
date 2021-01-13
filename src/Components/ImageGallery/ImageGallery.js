import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ onFetch }) => {
  // const{webformatURL, id, largeImageURL} =
  onFetch.then(console.log);
  return (
    // onFetch.then(console.log)
    <ul className={s.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};
export default ImageGallery;
