import { makeActionCreator } from '../utils';
import { CHANGE_QUESTION } from '../action-types';

export const changeQuestionAction = makeActionCreator(CHANGE_QUESTION);
