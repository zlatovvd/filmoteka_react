import css from './HomePage.module.css';

import { useAppDispatch, useAppSelector } from '../hookes/redux';
import { MovieType } from '../types/MovieType';
import { useEffect, useState } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import { checkPage } from '../utils/checkPage';
import { Alert } from '@mui/material';
import { Container } from '../components/Container/Container';
import { useCallback } from 'react';

export const HomePages = () => {
  const dispatch = useAppDispatch();

  const movies: MovieType[] | null = useAppSelector(selectMovies);
  const genres: GenreType = useAppSelector(selectGenres);
  const totalPages: number = useAppSelector(selectTotalPages);
  const error: string = useAppSelector(state => state.movies.error);

  const [searchParams, setSearchParams] = useSearchParams();

  let page: string = searchParams.get('page') ?? '1';
  
  let query: string = searchParams.get('query') ?? '';

  
  // const [query, setQuery] = useState<string>(search ? search : '');
  //const [curPage, setPage] = useState<number>(page ? Number(page) : 1);

  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);

  const [watched, setWatched] = useState<MovieType[]>([]);
  const [queue, setQueue] = useState<MovieType[]>([]);

  console.log('data', movies);

  const setWatchedHandler = (data: MovieType) => {
    console.log('watched id', data.id);
    if (!watched.find(option => option.id === data.id)) {
      setWatched(prev => [...prev, data]);
    } else {
      console.log('has id');
    }
  };

  const setQueueHandler = (data: MovieType) => {
    if (!queue.find(option => option.id === data.id)) {
      setQueue(prev => [...prev, data]);
    } else {
      console.log('queue is already');
    }
  };


  const handleQuery = (queryStr: string) => {
    setSearchParams({page:'1', query:queryStr});   
    //searchParams.set('query', queryStr);
    //handleChangePagination(1);

    //setSearchParams(searchParams);
  };

  const handleChangePagination =  (currrentPage: number) => {
    //setPage(currrentPage);  
    console.log('page', currrentPage);
    searchParams.set('page', currrentPage.toString());
    // console.log(searchParams);
    //setSearchParams(searchParams);
    setSearchParams(searchParams);
  };

  const getData = useCallback( () => {
    dispatch(getMovies({ page: Number(page), query }));
   
  }, [page, query]);

  
  useEffect(() => {
    console.log('use effect page', page);
    getData();
    //setSearchParams(searchParams);
      // setSearchParams({page:page.toString(), query});
  }, [ page, query, getData]);

  return (
    <>
      <header className={css.header}>
        <Header setQuery={handleQuery} />
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
        {totalPages > 1 && (
          <Pagination
            currentPage={Number(page)}
            totalPages={totalPages}
            handleChangePagination={handleChangePagination}
          />
        )}
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
      <Modal>
        <MovieDetails
          genre={genres}
          setWatched={setWatchedHandler}
          setQueue={setQueueHandler}
        />
      </Modal>
    </>
  );
};
