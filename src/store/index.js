import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as actionCreators from './actions';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);
