import { call, put, takeEvery } from 'redux-saga/effects';
import { BEGIN_TRIVIA } from '../action-types';
import { getQuizData } from '../api';
import { setResultsAction } from '../actions';
import { forwardTo } from '../utils';

function* beginTriviaSaga() {
  try {
    const response = yield call(getQuizData, {});
    yield put(setResultsAction(response.results));
    yield call(forwardTo, '/quiz');
  } catch (error) {
    console.error(error);
  }
}

export function* watchBeginTriviaSaga() {
  yield takeEvery(BEGIN_TRIVIA, beginTriviaSaga);
}
