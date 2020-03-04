import { BEGIN_TRIVIA, SET_RESULTS } from '../action-types';
import { home as initialState } from '../initialState';

export default function home(state = initialState, action: any) {
  switch (action.type) {
    case BEGIN_TRIVIA:
      return {
        ...state,
        begin: true,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: [...action.results],
      };
    default:
      return state;
  }
}
