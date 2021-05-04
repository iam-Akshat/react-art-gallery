import { combineReducers, createStore } from 'redux';
import artReducer from './art';

const store = createStore(combineReducers({
  art: artReducer,
// eslint-disable-next-line no-underscore-dangle
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
