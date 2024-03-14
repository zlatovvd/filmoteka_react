import css from "./FilmoteksList.module.css";
import { Container } from "../Container/Container";
import { FilmotekaListItem } from "../FilmotekaListItem/FilmotekaListItem";
import { GenreType } from "../../types/GenreType";
import { MovieType } from "../../types/MovieType";
import { createGenreStr } from "../../utils/createGenreStr";

type listProps = {
  data:MovieType[];
  genre: GenreType;
};

export const FilmotekaList = ({
  data,
  genre,
}: listProps) => {

  return (
    <Container>
        <ul className={`${css.filmotekaList} list`}>
          {data.map((item) => (
            <FilmotekaListItem
              key={item.id}
              movie={item}
              genre={createGenreStr(item.genre_ids, genre)}
            />
          ))}
        </ul>
    </Container>
  );
};
