import styles from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={styles.imageCard} onClick={() => openModal(image)}>
      <img
        src={image.urls.thumb}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
