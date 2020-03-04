import { makeActionCreator } from '../utils';
import { SET_RESULTS } from '../action-types';

export const setResultsAction = makeActionCreator(SET_RESULTS, 'results');
