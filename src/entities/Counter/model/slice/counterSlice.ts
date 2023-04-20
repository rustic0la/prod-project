import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../Types/counterSchema';

const initialState: CounterSchema = {
  value: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;
