import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../types/MovieType';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface MovieState {
  data: MovieType[];
  movie: MovieType | null;
  error: string;
}

const initialState: MovieState = {
  data: [],
  movie: null,
  error: '',
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addQueue: (state, action: PayloadAction<MovieType>) => {
      state.data = [...state.data, action.payload];
    },
    removeQueue: (state, action: PayloadAction<MovieType>) => {
      state.data = state.data.filter(value => value.id !== action.payload.id);
    },
    errorQueue: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

const persistConfig = {
  key: 'queue',
  storage,
  whitelist: ['data'],
};

export const queueReducer = persistReducer(
  persistConfig,
  queueSlice.reducer
);

export const { addQueue, removeQueue, errorQueue } = queueSlice.actions;