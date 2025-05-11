import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  if (items.length === 0) return null;
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard itemData={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
