'use client';
import { createSlice } from '@reduxjs/toolkit';

interface props {}

const initialState: props = {};

export const Slice = createSlice({
  name: 'default',
  initialState: initialState,
  reducers: {},
});

export const {} = Slice.actions;
export default Slice.reducer;
