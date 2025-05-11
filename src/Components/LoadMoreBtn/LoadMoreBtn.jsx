import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ nextPage }) {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={nextPage}>
        Load more...
      </button>
    </div>
  );
}
