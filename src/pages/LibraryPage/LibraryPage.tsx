import { Alert } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { Container } from '../../components/Container/Container';
import { FilmotekaList } from '../../components/FilmotekaList/FilmotekaList';
import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LibraryNav } from '../../components/LibraryNav/LibraryNav';
import { Modal } from '../../components/Modal/Modal';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppSelector } from '../../hookes/redux';
import { useLibraryParams } from '../../hookes/useLibrartParams';
import { usePageParams } from '../../hookes/usePageParams';
import { selectGenres } from '../../redux/selectors';
import { GenreType } from '../../types/GenreType';
import { MovieType } from '../../types/MovieType';
import css from './LibraryPage.module.css';

export const LibraryPage: React.FC = () => {
  const { page } = usePageParams();
  const { data, totalPages } = useLibraryParams();

  const genres: GenreType = useAppSelector(selectGenres);

  const error: string = useAppSelector(state => state.watched.error);

  const [movies, setMovies] = useState<MovieType[]>([]);

  const getData = useCallback(() => {
    const start = Number(page) * 10 - 10;
    const end = start + 10;
    setMovies(data.slice(start, end));
  }, [page, data]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <header className={css.header}>
        <Header>
          <LibraryNav />
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
