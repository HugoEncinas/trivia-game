import { call, put, takeEvery } from 'redux-saga/effects';
import { BEGIN_TRIVIA } from '../action-types';
import { getQuizData } from '../api';
import { setResultsAction } from '../actions';
import { forwardTo } from '../utils';

function* beginTriviaSaga({}) {
  try {
    console.log('beginTriviaSaga');
    const response = yield call(getQuizData, {});
    console.log('results', response.results);
    yield put(setResultsAction(response.results));
    yield call(forwardTo, '/quiz');
  } catch (error) {
    console.log(error);
  }
}

export function* watchBeginTriviaSaga() {
  yield takeEvery(BEGIN_TRIVIA, beginTriviaSaga);
}
