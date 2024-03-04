import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../http/http';

export const getMovies = createAsyncThunk('movie/fetchAll', async (_, thunkApi) => {
    try {
        const {data} = await fetchApi();
        return data;
    } catch (e) {
        return thunkApi.rejectWithValue((e as Error).message);
    }
})