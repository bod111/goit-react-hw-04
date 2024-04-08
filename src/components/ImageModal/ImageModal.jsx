import { useEffect } from "react";
import css from "./ImageModal.module.css";

export default function ImageModal({
  onClose,
  card: { urls, likes, user, alt_description, description },
}) {
  useEffect(() => {
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  });
  const onEscape = (e) => {
    onClose(e);
  };
  return (
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
  );
}
