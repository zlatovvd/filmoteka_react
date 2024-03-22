import css from './HomePage.module.css';

import { useAppDispatch, useAppSelector } from '../hookes/redux';
import { MovieType } from '../types/MovieType';
import { useEffect, useRef } from 'react';
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
import { usePageParams } from '../hookes/usePageParams';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Loader } from '../components/Loader/Loader';
import { ScrollTo } from 'react-scroll-to/dist';

export const HomePages = () => {
  const dispatch = useAppDispatch();

  const movies: MovieType[] = useAppSelector(selectMovies) ?? [];
  const genres: GenreType = useAppSelector(selectGenres);
  const totalPages: number = useAppSelector(selectTotalPages);
  const error: string = useAppSelector(state => state.movies.error);
  const isLoading = useAppSelector(state=>state.movies.isLoading);

  const myRef = useRef<HTMLButtonElement>(null);

  const { page, query } = usePageParams();

  //console.log('data', movies);

  useEffect(() => {
    //console.log('use effect main');
    dispatch(getMovies({ page: Number(page), query }));
    myRef.current?.click();
  }, [page, query, dispatch]);

  return (
    <>
      <header className={css.header}>
        <Header>
          <SearchForm  error={error}/>
        </Header>
      </header>
      <main className={css.main}>
        <h1 hidden>Filmoteka</h1>
        {!error && movies && genres && (
          <FilmotekaList data={movies} genre={genres} />
        )}
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
        {<Loader isHidden={!isLoading}/>}
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
      <ScrollTo>
        {({ scroll }) => (
          <button type='button' ref={myRef} onClick={() => scroll({ y: 0, smooth: true  })} hidden></button>
        )}
    </ScrollTo>
      <Modal>
        <MovieDetails genre={genres} />
      </Modal>
    </>
  );
};
