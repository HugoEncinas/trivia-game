import { TRACK_ANSWER, CHANGE_QUESTION } from '../action-types';
import { quiz as initialState } from '../initialState';

export default function home(state = initialState, action: any) {
  switch (action.type) {
    case TRACK_ANSWER:
      return {
        ...state,
        answersTrack: [...state.answersTrack, action.answer],
      };
    case CHANGE_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    default:
      return state;
  }
}
