import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICard, ITent } from '../../types/types';
import axios from '../../axiosInstance';

interface TentState {
  tents: ITent[];
  isLoading: boolean;
  error: string;
  cards: ICard[];
  totalPages: number;
}

type CardResponse = {
  data: ICard[];
  totalPages: number;
};

type QueryParams = {
  page: number;
};

export const fetchTents = createAsyncThunk<
  ITent[],
  undefined,
  { rejectValue: string }
>('tent/fetchTents', async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get<ITent[]>('/api/tent');
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

export const fetchCards = createAsyncThunk<
  CardResponse,
  QueryParams,
  { rejectValue: string }
>('tent/fetchCards', async function ({ page }, { rejectWithValue }) {
  try {
    const response = await axios.get<CardResponse>('/api/tent?page=' + page);
    const data = response.data;

    return data;
  } catch (error) {
    alert('server error!!');
    return rejectWithValue('Server error!');
  }
});

export const createTent = createAsyncThunk<
  ITent,
  ITent,
  { rejectValue: string }
>('tent/createTent', async function (tent, { rejectWithValue }) {
  try {
    const response = await axios.post('/api/tent', { tent });
    const data = response.data;
    alert('Продукт добавлен!');
    return data as ITent;
  } catch (error) {
    alert('Something went wrong!');
    return rejectWithValue('Server error!');
  }
});

export const editTent = createAsyncThunk<ITent, any, { rejectValue: string }>(
  'tent/editTent',
  async function (
    { tent, id }: { tent: ITent; id: string },
    { rejectWithValue },
  ) {
    try {
      const response = await axios.put('/api/tent/' + id, { tent });
      const data = response.data;
      alert('Продукт сохранен!');
      return data as ITent;
    } catch (error) {
      alert('Something went wrong!');
      return rejectWithValue('Server error!');
    }
  },
);

const initialState: TentState = {
  tents: [],
  isLoading: false,
  error: '',
  cards: [],
  totalPages: 0,
};

export const tentSlice = createSlice({
  name: 'tent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTents.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchTents.fulfilled, (state, action) => {
        state.tents = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createTent.pending, (state) => {
        state.error = '';
      })
      .addCase(createTent.fulfilled, (state, action) => {
        state.tents.push(action.payload);
        state.error = '';
      })
      .addCase(editTent.pending, (state) => {
        state.error = '';
      })
      .addCase(editTent.fulfilled, (state, action) => {
        state.tents = state.tents.filter(
          (tent) => tent.id !== action.payload.id,
        );
        state.tents.push(action.payload);
        state.error = '';
      });
  },
});

export default tentSlice.reducer;
