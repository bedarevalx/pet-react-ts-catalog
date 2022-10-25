import { IOption } from "../../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from '../../axiosInstance'


interface PlacecountState{
    placecounts: IOption[];
    isLoading: boolean;
    error: string;
}

export const fetchPlacecounts= createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchPlacecounts',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/placecount');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createPlacecount = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createPlacecount',
    async function (count,{rejectWithValue}) {
        const response = await axios.post('/api/placecount',{count});
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data as IOption;
    }
)


const initialState: PlacecountState = {
    placecounts:[],
    isLoading:false,
    error:''
}

export const placecountSlice = createSlice({
    name: 'placecount',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPlacecounts.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchPlacecounts.fulfilled,(state,action)=>{
            state.placecounts = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createPlacecount.pending, (state)=>{
            state.error = '';
        })
        .addCase(createPlacecount.fulfilled,(state,action)=>{
            state.placecounts.push(action.payload)
            state.error='';
    
        })
    }
})

export default placecountSlice.reducer