import CircularProgress from '@mui/material/CircularProgress';
import css from "./Loader.module.css";

export const Loader = (props: { isHidden: boolean }) => {
  return (
    <div
      className={
        props.isHidden ? `${css.backdrop} ${css.isHidden}` : css.backdrop
      }
    >
      <CircularProgress />
    </div>
  );
};
