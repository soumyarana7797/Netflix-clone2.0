import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from './actions';
import reducers from './reducers';

export const store = createStore(reducers);
