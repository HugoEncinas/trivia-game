import { makeActionCreator } from '../utils';
import { TRACK_ANSWER } from '../action-types';

export const trackAnwserAction = makeActionCreator(TRACK_ANSWER, 'answer');
