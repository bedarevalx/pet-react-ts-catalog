import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOption } from '../../types/types';
import axios from '../../axiosInstance';

interface GaranteeState {
  garanties: IOption[];
  isLoading: boolean;
  error: string;
}

export const fetchGaranties = createAsyncThunk<
  IOption[],
  undefined,
  { rejectValue: string }
>('garantee/fetchGaranties', async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<IOption[]>('/api/garantee');
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

export const createGarantee = createAsyncThunk<
  IOption,
  string,
  { rejectValue: string }
>('garantee/createGarantee', async function (time, { rejectWithValue }) {
  try {
    const response = await axios.post('/api/garantee', { time });
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

const initialState: GaranteeState = {
  garanties: [],
  isLoading: false,
  error: '',
};

export const garanteeSlice = createSlice({
  name: 'garantee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGaranties.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchGaranties.fulfilled, (state, action) => {
        state.garanties = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createGarantee.pending, (state) => {
        state.error = '';
      })
      .addCase(createGarantee.fulfilled, (state, action) => {
        state.garanties.push(action.payload);
        state.error = '';
      });
  },
});

export default garanteeSlice.reducer;
