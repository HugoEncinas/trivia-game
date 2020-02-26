import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import root from './reducers';
import { initialSate } from './initialSate';

const sagaMiddleWare = createSagaMiddleWare();
const composeEnchancers = compose;

const store = createStore(
  root,
  initialSate,
  composeEnchancers(applyMiddleware(logger, sagaMiddleWare))
);

export default store;
