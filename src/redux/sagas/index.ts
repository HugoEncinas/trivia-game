import { all } from 'redux-saga/effects';
import { watchBeginTriviaSaga } from './beginTriviaSaga';

export const rootSaga = function* root() {
  yield all([watchBeginTriviaSaga()]);
};
