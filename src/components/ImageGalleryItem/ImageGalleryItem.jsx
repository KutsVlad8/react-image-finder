import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(img => (
        <GalleryItem key={img.id}>
          <GalleryImg
            src={img.webformatURL}
            alt={img.tags}
            onClick={() => onClick(img)}
          />
        </GalleryItem>
      ))}
    </>
  );
};

export default ImageGalleryItem;
