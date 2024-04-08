import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ pictures, handleClick }) {
  return (
    <ul className={css.gallary}>
      {pictures &&
        pictures.map((pict) => {
          return (
            <li key={pict.id}>
              <ImageCard card={pict} handleClick={handleClick} />
            </li>
          );
        })}
    </ul>
  );
}
