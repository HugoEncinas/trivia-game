import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { initialSate } from './initialSate';
import { rootSaga } from './sagas';

const getStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})) ||
    compose;

  const store: any = createStore(
    rootReducer,
    initialSate,
    composeEnhancers(applyMiddleware(logger, sagaMiddleWare)),
  );
  sagaMiddleWare.run(rootSaga);
  return store;
};

export default getStore;
