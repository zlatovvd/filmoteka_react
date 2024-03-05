import css from "./FilmoteksList.module.css";
import { Container } from "../Container/Container";
import { FilmotekaListItem } from "../FilmotekaListItem/FilmoteksListItem";
import { GenreType } from "../../types/GenreType";
import { MovieType } from "../../types/MovieType";

type listProps = {
  data:MovieType[];
  genre: GenreType;
  // getMovieDetails: (movie:DataProps)=>void;
};

export const FilmotekaList = ({
  data,
  genre,
  // getMovieDetails,
}: listProps) => {

  return (
    <Container>
        <ul className={`${css.filmotekaList} list`}>
          {data.map((item) => (
            <FilmotekaListItem
              key={item.id}
              movie={item}
              genre={genre}
              // getMovieDetails={getMovieDetails}
            />
          ))}
        </ul>
    </Container>
  );
};
