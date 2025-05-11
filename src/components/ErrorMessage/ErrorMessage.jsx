import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.wrapper}>
      <p> Whoops, something went wrong! Please try reloading this page!</p>;
    </div>
  );
}
