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
  if (action.type === RESET_TRIVIA) {
    state = initialState;
  }
  return appReducer(state, action);
};

export default rootReducer;
