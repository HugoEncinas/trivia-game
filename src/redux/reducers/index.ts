import { combineReducers } from 'redux';
import { RESET_TRIVIA } from '../action-types';
import { initialState } from '../initialState';
import home from './homeReducer';
import quiz from './quizReducer';

const appReducer = combineReducers({
  home,
  quiz,
});

const rootReducer = (state: any, action: any) => {
  let rootState = state
  if (action.type === RESET_TRIVIA) {
    rootState = initialState;
  }
  return appReducer(rootState, action);
};

export default rootReducer;
