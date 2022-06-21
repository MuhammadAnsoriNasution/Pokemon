import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../utils/httpClient';

export const fetchPoke = createAsyncThunk('poke/fetchPoke', async () => {
  const response = await httpClient.get('/pokemon');
  return response.data.results;
});
export const fetchPokeDetail = createAsyncThunk(
  'poke/fetchPokeDetail',
  async id => {
    const response = await httpClient.get('/pokemon/' + id);
    return response.data;
  },
);

const pokeSlice = createSlice({
  name: 'poke',
  initialState: {
    data: [],
    status: 'idle',
    detail: null,
  },
  reducers: {
    addOrRemoveFav(state, action) {
      state.data = state.data.map(item =>
        item.name == action.payload
          ? {...item, favorite: !item.favorite}
          : item,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPoke.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPoke.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.map(item => ({...item, favorite: false}));
      })
      .addCase(fetchPoke.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(fetchPokeDetail.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPokeDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
      .addCase(fetchPokeDetail.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {addOrRemoveFav} = pokeSlice.actions;
export default pokeSlice.reducer;
