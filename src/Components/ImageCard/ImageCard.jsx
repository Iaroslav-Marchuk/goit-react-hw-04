import css from "./ImageCard.module.css";

export default function ImageCard({
  itemData: {
    description,
    likes,
    urls: { small, regular },
    user: { name },
  },
  onImageClick,
}) {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={small}
        alt={description}
        onClick={() => onImageClick(regular)}
      />

      <div className={css.info}>
        <p>{`Author: ${name}`}</p>
        <p>{`Likes: ${likes}`}</p>
      </div>
    </div>
  );
}
