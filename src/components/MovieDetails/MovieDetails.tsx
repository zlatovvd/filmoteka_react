import css from './MovieDetails.module.css';
import { MovieType } from '../../types/MovieType';
import { GenreType } from '../../types/GenreType';
import { createGenreStr } from '../../utils/createGenreStr';
import { useAppDispatch, useAppSelector } from '../../hookes/redux';
import { selectMovie } from '../../redux/selectors';
import { add, remove } from '../../redux/watchedSlice';
import { addQueue, removeQueue } from '../../redux/queueSlice';

type MovieProps = {
  genre: GenreType;
};

export const MovieDetails = ({ genre }: MovieProps) => {
  const postersPath = 'https://image.tmdb.org/t/p/w500';
  
  const dispatch = useAppDispatch();

  const movieDetails: MovieType | null = useAppSelector(selectMovie);
  const watched: MovieType[] =
    useAppSelector(state => state.watched.data) ?? [];
  const queue: MovieType[] = useAppSelector(state => state.queue.data);

  let isWatched = false;
  let isQueue = false;

  if (movieDetails) {
    if (watched.find(option => option.id === movieDetails.id)) {
      isWatched = true;
    }

    if (queue.find(option => option.id === movieDetails.id)) {
      isQueue = true;
    }
  }

  const handleWatchedClick = () => {
    if (movieDetails) {
      if (!watched.find(option => option.id === movieDetails.id)) {
        dispatch(add(movieDetails));
      } else {
        dispatch(remove(movieDetails));
      }
    }
  };

  const handleQueueClick = () => {
    if (movieDetails) {
      if (!queue.find(option => option.id === movieDetails.id)) {
        dispatch(addQueue(movieDetails));
      } else {
        dispatch(removeQueue(movieDetails));
      }
    }
  };

  return (
    <>
      <h2>{}</h2>
      <div className={css.modalImgWrapper}>
        <img
          src={`${postersPath}${movieDetails ? movieDetails.poster_path : ''}`}
          alt=""
        />
      </div>
      <div className={css.modalDiscriptionWrapper}>
        <h3 className={css.modalTitle}>
          {movieDetails ? movieDetails.title : ''}
        </h3>
        <ul className={`${css.modalDiscriptionList} list`}>
          <li className={css.modalDiscriptionItem}>
            <span className={css.modalDiscriptionTitle}>Vote / Votes</span>
            <span className={`${css.modalValue} active`}>
              {movieDetails ? movieDetails.vote_average.toFixed(1) : 0}
            </span>{' '}
            /
            <span className={css.modalValue}>
              {movieDetails ? movieDetails.vote_count : 0}
            </span>
          </li>
          <li className={css.modalDiscriptionItem}>
            <span className={css.modalDiscriptionTitle}>Popularity</span>
            <span className={css.modalValue}>
              {movieDetails ? movieDetails.popularity.toFixed(1) : 0}
            </span>
          </li>
          <li className={css.modalDiscriptionItem}>
            <span className={css.modalDiscriptionTitle}>Original Title</span>
            <span className={css.modalValue}>
              {movieDetails ? movieDetails.original_title : ''}
            </span>
          </li>
          <li className={css.modalDiscriptionItem}>
            <span className={css.modalDiscriptionTitle}>Genre</span>
            <span className={css.modalValue}>
              {createGenreStr(
                movieDetails ? movieDetails.genre_ids : [],
                genre
              )}
            </span>
          </li>
        </ul>

        <h4 className={css.modalAbout}>About</h4>
        <p className={css.modalAboutText}>
          {movieDetails ? movieDetails.overview : ''}
        </p>
        <div className={css.modalBtnWrapper}>
          <button
            className={`${css.modalBtn} ${
              isWatched ? css.active : ''
            } watched `}
            onClick={handleWatchedClick}
          >
            add to Watched
          </button>
          <button
            className={`${css.modalBtn} ${
              isQueue ? css.active : ''
            } queue`}
            onClick={handleQueueClick}
          >
            add to queue
          </button>
        </div>
      </div>
    </>
  );
};
