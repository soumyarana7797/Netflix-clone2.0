import { combineReducers } from '@reduxjs/toolkit';
import blogs from './blogs/reducer';

const reducers = combineReducers({ blogs });

export default reducers;
