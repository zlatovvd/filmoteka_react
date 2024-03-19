import css from './HomePage.module.css';

import { useAppDispatch, useAppSelector } from '../hookes/redux';
import { MovieType } from '../types/MovieType';
import { useEffect } from 'react';
import { getMovies } from '../redux/moviesThunk';
import {
  selectGenres,
  selectMovies,
  selectTotalPages,
} from '../redux/selectors';
import Header from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GenreType } from '../types/GenreType';
import { FilmotekaList } from '../components/FilmotekaList/FilmotekaList';
import { Modal } from '../components/Modal/Modal';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { Pagination } from '../components/Pagination/Pagination';
import { Alert } from '@mui/material';
import { Container } from '../components/Container/Container';
import { usePageParams } from '../hookes/usePageParams';
import { SearchForm } from '../components/SearchForm/SearchForm';

export const HomePages = () => {
  const dispatch = useAppDispatch();

  const movies: MovieType[] = useAppSelector(selectMovies) ?? [];
  const genres: GenreType = useAppSelector(selectGenres);
  const totalPages: number = useAppSelector(selectTotalPages);
  const error: string = useAppSelector(state => state.movies.error);

  const { page, query } = usePageParams();

  console.log('data', movies);

  useEffect(() => {
    dispatch(getMovies({ page: Number(page), query }));
  }, [page, query, dispatch]);

  return (
    <>
      <header className={css.header}>
        <Header>
          <SearchForm />
        </Header>
      </header>
      <main className={css.main}>
        <h1 hidden>Filmoteka</h1>
        {error && (
          <Container>
            <Alert severity="error">{error}</Alert>
          </Container>
        )}
        {!error && movies && genres && (
          <FilmotekaList data={movies} genre={genres} />
        )}
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
      <Modal>
        <MovieDetails genre={genres} />
      </Modal>
    </>
  );
};
