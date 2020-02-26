import { BEGIN_TRIVIA } from '../action-types';

export const beginTriviaAction = (dispatch: any, payload: any) => {
  return dispatch({
    type: BEGIN_TRIVIA,
    payload
  });
};
