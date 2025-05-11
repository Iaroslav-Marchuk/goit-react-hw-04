import Modal from "react-modal";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.overlay}
      className={css.content}
      contentLabel="Image Preview"
    >
      <div className={css.wrapper}>
        <img src={image} alt="preview" />
      </div>
    </Modal>
  );
}
