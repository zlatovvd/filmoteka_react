import { useNavigate } from 'react-router-dom';
import { useLibraryParams } from '../../hookes/useLibrartParams';
import css from './LibraryNav.module.css';

export const LibraryNav = () => {
  const { watchedPage, queuePage } = useLibraryParams();

  const navigate = useNavigate();

  const onClickWatched = () => {
    navigate('/library/watched');
  };

  const onClickQueue = () => {
    navigate('/library/queue');
  };

  return (
    <div className={css.libraryBtnWrapper}>
      <button
        className={`${css.libraryBtn} ${css.watchedBtn} ${
          watchedPage ? css.active : ''
        }`}
        onClick={onClickWatched}
      >
        Watched
      </button>
      <button
        className={`${css.libraryBtn} ${css.queueBtn} ${
          queuePage ? css.active : ''
        }`}
        onClick={onClickQueue}
      >
        queue
      </button>
    </div>
  );
};
