import { takeEvery } from 'redux-saga/effects';
import { BEGIN_TRIVIA } from '../action-types';

function* beginTriviaSaga({}) {
  try {
    console.log('beginTriviaSaga');
  } catch (error) {
    console.log(error);
  }
}

export function* watchBeginTriviaSaga() {
  yield takeEvery(BEGIN_TRIVIA, beginTriviaSaga);
}
