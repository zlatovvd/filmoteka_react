import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataType } from '../types/DataType';
import { MovieType } from '../types/MovieType';
import { getMovies } from './moviesThunk';

export interface MovieState {
  data: DataType;
  movie: MovieType | null;
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  data: { results: null, page: 1, total_pages: 1 },
  movie: null,
  isLoading: false,
  error: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movieDetails: (state, action: PayloadAction<MovieType>) => {
      state.movie = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMovies.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getMovies.fulfilled,
        (state, action: PayloadAction<DataType>) => {
          state.data = action.payload;
          state.isLoading = false;
          state.error = '';
        }
      )
      .addCase(
        getMovies.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const moviesReducer = moviesSlice.reducer;

export const {movieDetails} = moviesSlice.actions;
