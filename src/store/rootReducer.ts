'use client';
import { combineReducers } from 'redux';
import countSlice from './slices/count';

const reducers = combineReducers({ countSlice });

export default reducers;
