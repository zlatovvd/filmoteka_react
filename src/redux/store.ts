import { configureStore } from "@reduxjs/toolkit";
import { genresReduser } from "./genres.Slice";
import { modalReduser } from "./modalSlice";
import { moviesReducer } from "./moviesSlice";

export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        genres: genresReduser,
        modal: modalReduser
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;