import { IOption } from "../../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from '../../axiosInstance'


interface MaterialBottomState{
    materials: IOption[];
    isLoading: boolean;
    error: string;
}

const initialState: MaterialBottomState = {
    materials:[],
    isLoading:false,
    error:''
}

export const fetchMaterialsBottom = createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchMaterialsBottom',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/material-bottom');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createMaterialBottom = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createMaterialBottom',
    async function (name,{rejectWithValue}) {
        const response = await axios.post('/api/material-bottom',{name});
        if(response.status !== 201){
            alert('Something went wrong!')
            return rejectWithValue('Server error!')
        }
        const data = response.data;
        alert('Success!')
        return data as IOption;
    }
)

export const materialBottomSlice = createSlice({
    name: 'materialBottom',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchMaterialsBottom.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchMaterialsBottom.fulfilled,(state,action)=>{
            state.materials = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createMaterialBottom.pending, (state)=>{
            state.error = '';
        })
        .addCase(createMaterialBottom.fulfilled,(state,action)=>{
            state.materials.push(action.payload)
            state.error='';
    
        })
    }
})

export default materialBottomSlice.reducer