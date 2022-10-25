import { IOption } from "../../types/types";
import {createSlice} from "@reduxjs/toolkit"
import axios from '../../axiosInstance'


interface ColorState{
    colors: IOption[];
    isLoading: boolean;
    error: string;
}




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
    extraReducers:{
        
    }
})

export default colorSlice.reducer