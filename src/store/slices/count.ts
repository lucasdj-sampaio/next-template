'use client';
import { createSlice } from '@reduxjs/toolkit';

interface counterProps {
  value: number;
}

const initialState: counterProps = {
  value: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    increaseCounter(state) {
      state.value = state.value + 1;
    },
  },
});

export const { increaseCounter } = countSlice.actions;
export default countSlice.reducer;
