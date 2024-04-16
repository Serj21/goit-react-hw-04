import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal, loading }) => {
  return (
    <div>
      <ul className={styles.imageGallery}>
        {images.map((image) => (
          <li key={image.id} className={styles.imageCard}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
