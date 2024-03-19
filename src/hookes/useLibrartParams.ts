import { useParams } from 'react-router-dom';
import { MovieType } from '../types/MovieType';
import { useAppSelector } from './redux';

export const useLibraryParams = () => {

  const { libName } = useParams();

  const wathed = useAppSelector(state => state.watched.data);

  const queue = useAppSelector(state => state.queue.data);

  const watchedPage = libName === 'watched';

  const queuePage = libName === 'queue';

  let data: MovieType[] = [];

  if (watchedPage) {
    data = wathed;
  }
  if (queuePage) {
    data = queue;
  }

  const totalPages = Math.ceil(data.length / 10);

  return { watchedPage, queuePage, data, totalPages};
};
