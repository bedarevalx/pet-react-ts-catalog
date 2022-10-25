import { IOption, ISeason } from "../../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {PayloadAction} from '@reduxjs/toolkit'
import axios from '../../axiosInstance'


interface SeasonState{
    seasons: IOption[];
    isLoading: boolean;
    error: string;
}

export const fetchSeasons = createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchSeasons',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/season');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createSeason = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createSeason',
    async function (year,{rejectWithValue}) {
        const response = await axios.post('/api/season',{year});
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data as IOption;
    }
)


const initialState: SeasonState = {
    seasons:[],
    isLoading:false,
    error:''
}

export const seasonSlice = createSlice({
    name: 'season',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSeasons.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchSeasons.fulfilled,(state,action)=>{
            state.seasons = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createSeason.pending, (state)=>{
            state.error = '';
        })
        .addCase(createSeason.fulfilled,(state,action)=>{
            state.seasons.push(action.payload)
            state.error='';
    
        })
    }
})

export default seasonSlice.reducer