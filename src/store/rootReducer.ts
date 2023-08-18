'use client';
import { combineReducers } from 'redux';
import Slice from './slices/count';

const reducers = combineReducers({ Slice });

export default reducers;
