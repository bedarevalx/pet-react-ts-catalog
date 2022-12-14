import { IOption } from '../../types/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosInstance';

interface MaterialArcState {
  materials: IOption[];
  isLoading: boolean;
  error: string;
}

export const fetchMaterialArcs = createAsyncThunk<
  IOption[],
  undefined,
  { rejectValue: string }
>('garantee/fetchMaterialArcs', async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<IOption[]>('/api/material-arc');
    if (response.status !== 200) {
      return rejectWithValue('Server error!');
    }
    const data = response.data;
    return data;
  } catch (error) {
    alert('server error!!');
    return rejectWithValue('Server error!');
  }
});

export const createMaterialArc = createAsyncThunk<
  IOption,
  string,
  { rejectValue: string }
>('garantee/createMaterialArc', async function (name, { rejectWithValue }) {
  try {
    const response = await axios.post('/api/material-arc', { name });
    if (response.status !== 201) {
      alert('Something went wrong!');
      return rejectWithValue('Server error!');
    }
    const data = response.data;
    alert('Success!');

    return data as IOption;
  } catch (error) {
    alert('server error!!');
    return rejectWithValue('Server error!');
  }
});

const initialState: MaterialArcState = {
  materials: [],
  isLoading: false,
  error: '',
};

export const materialArcSlice = createSlice({
  name: 'materialArc',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterialArcs.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMaterialArcs.fulfilled, (state, action) => {
        state.materials = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createMaterialArc.pending, (state) => {
        state.error = '';
      })
      .addCase(createMaterialArc.fulfilled, (state, action) => {
        state.materials.push(action.payload);
        state.error = '';
      });
  },
});

export default materialArcSlice.reducer;
