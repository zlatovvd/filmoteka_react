import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../http/http';
import { DataType } from '../types/DataType';

type ThunkProps = {
    page:number | null;
    query: string;
}

export const getMovies = createAsyncThunk('movie/fetchAll', async (props:ThunkProps, thunkApi) => {
    try {
        const {data} = await fetchApi(props);
        
        if ((data as DataType).results?.length === 0) {
            throw new Error('Search result not successful. Enter the correct movie name');
        }
        return data;
    } catch (e) {
        console.log('error', e);
        return thunkApi.rejectWithValue((e as Error).message);
    }
})