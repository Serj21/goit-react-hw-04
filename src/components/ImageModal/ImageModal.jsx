import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent} onClick={handleClickOutside}>
        <img src={image.urls.full} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
