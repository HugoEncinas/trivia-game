import { combineReducers } from 'redux';

import home from './homeReducer';
import quiz from './quizReducer';

const rootReducer = combineReducers({
  home,
  quiz,
});

export default rootReducer;
