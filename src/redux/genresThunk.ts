import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGenre } from "../http/http";

export const getGenres = createAsyncThunk(
    'genres/fetchAll', async (_, thunkApi) => {
        try {
            const {data} = await fetchGenre();
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue((e as Error).message);
        }
    }
)