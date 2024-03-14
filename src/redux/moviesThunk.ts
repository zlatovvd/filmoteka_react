import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../http/http';

type ThunkProps = {
    page:number | null;
    query: string;
}

export const getMovies = createAsyncThunk('movie/fetchAll', async (props:ThunkProps, thunkApi) => {
    try {
        const {data} = await fetchApi(props);
        return data;
    } catch (e) {
        console.log('error', e);
        return thunkApi.rejectWithValue((e as Error).message);
    }
})