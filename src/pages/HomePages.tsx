import { useAppDispatch, useAppSelector } from '../hookes/redux';
import { MovieType } from '../types/MovieType';
import { useEffect } from 'react';
import { getMovies } from '../redux/moviesThunk';
import { selectMovies } from '../redux/selectors';

export const HomePages = () => {
  const dispatch = useAppDispatch();

  const movies: MovieType[] | null = useAppSelector(selectMovies);

  console.log('data', movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return <ul>{movies && movies.map(item => <li>{item.title}</li>)}</ul>;
};
