import { IOption } from "../../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from '../../axiosInstance'


interface ColorState{
    colors: IOption[];
    isLoading: boolean;
    error: string;
}

export const fetchColors = createAsyncThunk<IOption[], undefined,{rejectValue: string}>(
    'garantee/fetchColors',
    async function (_,{rejectWithValue}) {
        const response = await axios.get<IOption[]>('/api/color');
        if(response.status !== 200){
            return rejectWithValue('Server error!')
        }
        const data = response.data;

        return data;
    }
)

export const createColor = createAsyncThunk<IOption, string,{rejectValue: string}>(
    'garantee/createColor',
    async function (name,{rejectWithValue}) {
        const response = await axios.post('/api/color',{name});
        if(response.status !== 201){
            alert('Something went wrong!')
            return rejectWithValue('Server error!')
        }
        const data = response.data;
        alert('Success!')

        return data as IOption;
    }
)


const initialState: ColorState = {
    colors:[],
    isLoading:false,
    error:''
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchColors.pending,(state)=>{
            state.isLoading = true;
            state.error = '';
        })
        .addCase(fetchColors.fulfilled,(state,action)=>{
            state.colors = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(createColor.pending, (state)=>{
            state.error = '';
        })
        .addCase(createColor.fulfilled,(state,action)=>{
            state.colors.push(action.payload)
            state.error='';
    
        })
    }
})

export default colorSlice.reducer