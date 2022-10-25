import { IOption } from "../../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from '../../axiosInstance'


interface MaterialArcState{
    materials: IOption[];
    isLoading: boolean;
    error: string;
}

export const fetchMaterialArcs = createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchMaterialArcs',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/material-arc');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createMaterialArc = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createMaterialArc',
    async function (name,{rejectWithValue}) {
        const response = await axios.post('/api/material-arc',{name});
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data as IOption;
    }
)

const initialState: MaterialArcState = {
    materials:[],
    isLoading:false,
    error:''
}

export const materialArcSlice = createSlice({
    name: 'materialArc',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchMaterialArcs.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchMaterialArcs.fulfilled,(state,action)=>{
            state.materials = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createMaterialArc.pending, (state)=>{
            state.error = '';
        })
        .addCase(createMaterialArc.fulfilled,(state,action)=>{
            state.materials.push(action.payload)
            state.error='';
    
        })
    }
})

export default materialArcSlice.reducer