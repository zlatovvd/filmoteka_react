import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenreType } from "../types/GenreType";
import { getGenres } from "./genresThunk";

interface GenreState {
    data: GenreType;
    isLoading: boolean;
    error: string;
}

const initialState:GenreState = {
    data: {genres: null},
    isLoading: false,
    error: '',
}

const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {

    },
    extraReducers: build => {
        build
        .addCase(getGenres.pending, state=> {
            state.isLoading = true;
        })
        .addCase(getGenres.fulfilled, (state, action:PayloadAction<GenreType>) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        .addCase(getGenres.rejected.type, (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        })

    }
});

export const genresReduser = genresSlice.reducer;