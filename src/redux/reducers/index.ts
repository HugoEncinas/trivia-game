import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

const root = combineReducers({
  homeReducer
});

export default root;

// const store = createStore(root);

// export default store;
