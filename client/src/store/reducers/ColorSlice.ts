import { IOption } from '../../types/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosInstance';

interface ColorState {
  colors: IOption[];
  isLoading: boolean;
  error: string;
}

export const fetchColors = createAsyncThunk<
  IOption[],
  undefined,
  { rejectValue: string }
>('garantee/fetchColors', async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<IOption[]>('/api/color');
    const data = response.data;

    return data;
  } catch (error) {
    alert('server error!!');
    return rejectWithValue('Server error!');
  }
});

export const createColor = createAsyncThunk<
  IOption,
  string,
  { rejectValue: string }
>('garantee/createColor', async function (name, { rejectWithValue }) {
  try {
    const response = await axios.post('/api/color', { name });
    const data = response.data;
    alert('Success!');

    return data as IOption;
  } catch (error) {
    alert('server error!!');
    return rejectWithValue('Server error!');
  }
});

const initialState: ColorState = {
  colors: [],
  isLoading: false,
  error: '',
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.colors = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createColor.pending, (state) => {
        state.error = '';
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.colors.push(action.payload);
        state.error = '';
      });
  },
});

export default colorSlice.reducer;
