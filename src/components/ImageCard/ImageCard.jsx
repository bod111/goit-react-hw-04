import css from "./ImageCard.module.css";

export default function ImageCard({ card, handleClick }) {
  return (
    <div>
      <img
        className={css.image}
        src={card.urls.small}
        onClick={() => {
          handleClick(card);
        }}
      />
    </div>
  );
}
