import { configureStore } from '@reduxjs/toolkit';
import { genresReduser } from './genres.Slice';
import { modalReduser } from './modalSlice';
import { moviesReducer } from './moviesSlice';
import { watchedReducer } from './watchedSlice';
import { queueReducer } from './queueSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReduser,
    modal: modalReduser,
    watched: watchedReducer,
    queue: queueReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
