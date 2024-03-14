import { MovieType } from "../types/MovieType";
import { RootState } from "../redux/store";

export const selectData = (state: RootState) =>state.movies.data;

export const selectMovies: (state: RootState) => MovieType[] | null= state => state.movies.data.results;

export const selectMovie: (state:RootState) => MovieType | null = state => state.movies.movie;

export const selectPage: (state: RootState) => number = state => state.movies.data.page;

export const selectTotalPages: (state: RootState) => number = state => state.movies.data.total_pages;

export const selectGenres = (state: RootState) => state.genres.data;

export const selectIsModalHidden = (state: RootState) => state.modal.isHidden;
