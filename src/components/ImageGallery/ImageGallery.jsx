import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryList>
      <ImageGalleryItem images={images} onClick={onClick} />
    </GalleryList>
  );
};

export default ImageGallery;
