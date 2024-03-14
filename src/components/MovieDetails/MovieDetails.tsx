import css from './MovieDetails.module.css';
import { MovieType } from "../../types/MovieType"
import { GenreType } from "../../types/GenreType";
import { createGenreStr } from "../../utils/createGenreStr";
import { useAppSelector } from '../../hookes/redux';
import { selectMovie } from '../../redux/selectors';

type MovieProps = {
  genre: GenreType;
  setWatched: (data:MovieType) => void;
  setQueue: (data:MovieType) => void;
}

export const MovieDetails = ({genre, setWatched, setQueue}:MovieProps) => {

  const postersPath = "https://image.tmdb.org/t/p/w500";

  const movieDetails:MovieType | null = useAppSelector(selectMovie);
  
  const handleWatchedClick = () => {
    if (movieDetails) {
      setWatched(movieDetails)
    }
  }

  const handleQueueClick = () => {
    if(movieDetails) {
      setQueue(movieDetails)
    }
  }

    return (
        <>
        <h2>{}</h2>
           <div className={css.modalImgWrapper}>
              <img src={`${postersPath}${movieDetails? movieDetails.poster_path : ''}`} alt=""/>
          </div>
            <div className={css.modalDiscriptionWrapper}>
            <h3 className={css.modalTitle}>{movieDetails? movieDetails.title : ''}</h3>
            <ul className={`${css.modalDiscriptionList} list`}>
              <li className={css.modalDiscriptionItem}>
                <span className={css.modalDiscriptionTitle}>Vote / Votes</span>
                <span className={`${css.modalValue} active`}>{movieDetails? movieDetails.vote_average.toFixed(
                  1
                ) : 0}</span> / 
                <span className={css.modalValue}>{movieDetails? movieDetails.vote_count : 0}</span>
              </li>
              <li className={css.modalDiscriptionItem}>
                <span className={css.modalDiscriptionTitle}>Popularity</span>
                <span className={css.modalValue}>{movieDetails? movieDetails.popularity.toFixed(1) : 0}</span>
              </li>
              <li className={css.modalDiscriptionItem}>
                <span className={css.modalDiscriptionTitle}>Original Title</span>
                <span className={css.modalValue}>{movieDetails? movieDetails.original_title : ''}</span>
              </li>
              <li className={css.modalDiscriptionItem}>
                <span className={css.modalDiscriptionTitle}>Genre</span>
                <span className={css.modalValue}>{createGenreStr(movieDetails? movieDetails.genre_ids : [], genre)}</span>
              </li>
            </ul>

            <h4 className={css.modalAbout}>About</h4>
            <p className={css.modalAboutText}>{movieDetails? movieDetails.overview:''}</p>
            <div className={css.modalBtnWrapper}>
              <button className={`${css.modalBtn} watched`} onClick={handleWatchedClick}>add to Watched</button>
              <button className={`${css.modalBtn} queue`} onClick={handleQueueClick}>add to queue</button>
            </div>
          </div>  
         </>

    )
}