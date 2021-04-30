import { combineReducers, createStore } from 'redux';
import artReducer from './art';

const store = createStore(combineReducers({
  art: artReducer,
}));

export default store;
