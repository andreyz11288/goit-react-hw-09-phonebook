import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ onFetch }) => {
  return (
    <div>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem onFetch={onFetch} />
      </ul>
    </div>
  );
};
export default ImageGallery;
