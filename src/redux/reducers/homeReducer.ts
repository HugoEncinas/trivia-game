import { BEGIN_TRIVIA, SET_RESULTS } from '../action-types';
import { home as initialSate } from '../initialSate';

export default function home(state = initialSate, action: any) {
  switch (action.type) {
    case BEGIN_TRIVIA:
      console.log('BEGIN_TRIVIA reducer');
      return {
        ...state,
        begin: true,
      };
    case SET_RESULTS:
      console.log('SET_RESULTS reducer', action);
      return {
        ...state,
        results: [...action.results],
      };
    default:
      return state;
  }
}
