import { initialSate } from '../initialSate';
import { BEGIN_TRIVIA } from '../action-types';

export default function homeReducer(state = initialSate, action: any) {
  switch (action.type) {
    case BEGIN_TRIVIA:
      console.log('BEGIN_TRIVIA reducer');
      return state;
    default:
      return state;
  }
}
