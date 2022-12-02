import { IOption } from '../../types/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosInstance';

interface CountryState {
  countries: IOption[];
  isLoading: boolean;
  error: string;
}

export const fetchCountries = createAsyncThunk<
  IOption[],
  undefined,
  { rejectValue: string }
>('garantee/fetchCountries', async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<IOption[]>('/api/country');
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

export const createCountry = createAsyncThunk<
  IOption,
  string,
  { rejectValue: string }
>('garantee/createCountry', async function (name, { rejectWithValue }) {
  try {
    const response = await axios.post('/api/country', { name });
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

const initialState: CountryState = {
  countries: [],
  isLoading: false,
  error: '',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createCountry.pending, (state) => {
        state.error = '';
      })
      .addCase(createCountry.fulfilled, (state, action) => {
        state.countries.push(action.payload);
        state.error = '';
      });
  },
});

export default countrySlice.reducer;
