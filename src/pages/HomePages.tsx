import css from './HomePage.module.css';

import { useAppDispatch, useAppSelector } from '../hookes/redux';
import { MovieType } from '../types/MovieType';
import { useEffect, useState } from 'react';
import { getMovies } from '../redux/moviesThunk';
import { selectGenres, selectMovies } from '../redux/selectors';
import Header from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GenreType } from '../types/GenreType';
import { FilmotekaList } from '../components/FilmotekaList/FilmotekaList';
import { Modal } from '../components/Modal/Modal';

export const HomePages = () => {
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState(false);

  const movies: MovieType[] | null = useAppSelector(selectMovies);
  const genres: GenreType = useAppSelector(selectGenres);

  console.log(genres);

  console.log('data', movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <header className={css.header}>
        <Header />
      </header>
      <main className="main">
        <h1 hidden>Filmoteka</h1>
        {movies && genres && (
          <FilmotekaList
            data={movies}
            genre={genres}
            // getMovieDetails={getMovieDetails}
          />
        )}
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
      <Modal isHidden={!isModal} setIsModal={setIsModal}>
        Modal
      </Modal>
    </>
  );
};
