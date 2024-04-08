import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClickLoadMoreBtn }) {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onClickLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
