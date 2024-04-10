import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#modal");

export default function ImageModal({
  onClose,
  modalIsOpen,
  card: { urls, likes, user, alt_description, description },
}) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onClose}>
      <div className={css.overlay} onClick={onClose}>
        <figure className={css.modal}>
          <img className={css.pic} src={urls.regular} alt={alt_description} />
          <figcaption className={css.descriptionBlock}>
            <p className={css.description}>{description || alt_description}</p>
            <p>
              author <span className={css.text}> {user.name}</span> from
              <span className={css.text}> {user.location}</span>
            </p>
            <p>
              Likes: <span className={css.text}>{likes}</span>
            </p>
          </figcaption>
        </figure>
      </div>
    </Modal>
  );
}
