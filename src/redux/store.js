import {configureStore} from '@reduxjs/toolkit';
import pokeReducer from './pokeSlice';
const store = configureStore({
  reducer: {
    poke: pokeReducer,
  },
});

export default store;
