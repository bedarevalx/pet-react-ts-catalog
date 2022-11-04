
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICard, IOption, ITent } from "../../types/types";
import axios from '../../axiosInstance'

interface TentState{
    tents: ITent[];
    isLoading: boolean;
    error: string;
    cards: ICard[];
    totalPages: number;
}

type CardResponse ={
    data: ICard[];
    totalPages: number;
}

type QueryParams = {
    page: number;
}


export const fetchTents = createAsyncThunk<ITent[], undefined,{rejectValue: string}>(
    'tent/fetchTents',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<ITent[]>('/api/tent');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const fetchCards = createAsyncThunk<CardResponse, QueryParams,{rejectValue: string}>(
    'tent/fetchCards',
    async function ({page},{rejectWithValue}) {
        const response = await axios.get<CardResponse>('/api/tent?page='+page);
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)


export const createTent = createAsyncThunk<ITent, ITent,{rejectValue: string}>(
    'tent/createTent',
    async function (tent,{rejectWithValue}) {
        const response = await axios.post('/api/tent',{tent});
        if(response.status !== 201){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data as ITent;
    }
)

export const editTent = createAsyncThunk<ITent, any, {rejectValue: string}>(
    'tent/editTent',
    async function ({tent, id}: {tent:ITent, id:string }, {rejectWithValue}) {
        console.log(tent,id);
        
        const response = await axios.put('/api/tent/'+id,{tent});
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;
        return data as ITent;
    }
)


const initialState: TentState ={
    tents: [],
    isLoading: false,
    error: '',
    cards:[],
    totalPages: 0
}

export const tentSlice = createSlice({
    name: 'tent',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchTents.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchTents.fulfilled,(state,action)=>{
            state.tents = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(fetchCards.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchCards.fulfilled,(state,action)=>{
            state.cards = action.payload.data;
            state.totalPages = action.payload.totalPages;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createTent.pending, (state)=>{
            state.error = '';
        })
        .addCase(createTent.fulfilled,(state,action)=>{
            state.tents.push(action.payload)
            state.error='';
    
        })
        .addCase(editTent.pending, (state)=>{
            state.error = '';
        })
        .addCase(editTent.fulfilled,(state,action)=>{
            state.tents = state.tents.filter((tent)=> tent.id !== action.payload.id)
            state.tents.push(action.payload)
            state.error='';
    
        })
        
    }
    
})

export default tentSlice.reducer