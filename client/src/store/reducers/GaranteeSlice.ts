import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IOption } from "../../types/types";
import axios from '../../axiosInstance'

interface GaranteeState{
    garanties: IOption[];
    isLoading: boolean;
    error: string;
}

export const fetchGaranties = createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchGaranties',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/garantee');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createGarantee = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createGarantee',
    async function (time,{rejectWithValue}) {
        const response = await axios.post('/api/garantee',{time});
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data as IOption;
    }
)


const initialState: GaranteeState ={
    garanties: [],
    isLoading: false,
    error: ''
}

export const garanteeSlice = createSlice({
    name: 'garantee',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchGaranties.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchGaranties.fulfilled,(state,action)=>{
            state.garanties = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createGarantee.pending, (state)=>{
            state.error = '';
        })
        .addCase(createGarantee.fulfilled,(state,action)=>{
            state.garanties.push(action.payload)
            state.error='';
    
        })
        
    }
    
})

export default garanteeSlice.reducer