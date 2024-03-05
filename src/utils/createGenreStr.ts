import { GenreType } from "../types/GenreType";

export const createGenreStr = (genre_ids: number[], genre: GenreType) => {
  return Array.isArray(genre_ids)
    ? (genre_ids)
        .map((item) => {
          const genreStr = genre.genres? genre.genres.find((option) => option.id === item): '';
          return genreStr ? genreStr.name : "";
        })
        .join(", ")
    : "";
};
