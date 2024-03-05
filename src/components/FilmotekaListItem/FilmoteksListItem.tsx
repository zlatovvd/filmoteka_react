import css from "./FilmotekaListItem.module.css";
import { GenreType } from "../../types/GenreType";
import { createGenreStr } from "../../utils/createGenreStr";
import { MovieType } from "../../types/MovieType";
import { useAppDispatch } from "../../hookes/redux";
import { openModal } from "../../redux/modalSlice";

type listItem = {
  movie: MovieType;
  genre: GenreType;
  // getMovieDetails: (movie: DataProps) => void;
};

export const FilmotekaListItem = (props: listItem) => {

  const dispatch = useAppDispatch()

  const handleFimotekaItemClick = () => {
    // props.getMovieDetails(props.movie);
    dispatch(openModal());

  };

  const postersPath = "https://image.tmdb.org/t/p/w500";

  return (
    <li className={css.filmotekaItem} data-id={props.movie.id}>
      <div>
        <div className={css.filmotekaThumb} onClick={handleFimotekaItemClick}>
          <img
            className={css.filmotekaImg}
            src={`${postersPath}${props.movie.poster_path}`}
            alt={props.movie.overview}
          />
        </div>
        <h2 className={css.filmotekaTitle}>
          {props.movie.title.toUpperCase()}
        </h2>
        <p className={css.filmotekaDiscription}>
          {createGenreStr(props.movie.genre_ids, props.genre)} |{" "}
          {new Date(props.movie.release_date).getFullYear()}
        </p>
      </div>
    </li>
  );
};
