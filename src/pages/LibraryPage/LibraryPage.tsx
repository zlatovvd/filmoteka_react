import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { FilmotekaList } from '../../components/FilmotekaList/FilmotekaList';
import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LibraryNav } from '../../components/LibraryNav/LibraryNav';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppSelector } from '../../hookes/redux';
import { useLibraryParams } from '../../hookes/useLibrartParams';
import { selectGenres } from '../../redux/selectors';
import { GenreType } from '../../types/GenreType';
import { MovieType } from '../../types/MovieType';
import css from './LibraryPage.module.css';

export const LibraryPage: React.FC = () => {
  const genres: GenreType = useAppSelector(selectGenres);

  const error: string = useAppSelector(state => state.watched.error);

  const [movies, setMovies] = useState<MovieType[]>([]);

  const {data, totalPages} = useLibraryParams();

  useEffect(() => {
   setMovies(data);
  }, [data, setMovies]);


  return (
    <>
      <header className={css.header}>
        <Header>
          <LibraryNav />
        </Header>
      </header>

      <main className="main">
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
    </>
  );
};
