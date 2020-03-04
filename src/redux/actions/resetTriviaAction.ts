import { makeActionCreator } from '../utils';
import { RESET_TRIVIA } from '../action-types';

export const resetTriviaAction = makeActionCreator(RESET_TRIVIA);
