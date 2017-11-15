import { combineReducers } from 'redux';
import filter from './filter.js';
import todos from './todos.js';

const reducer = combineReducers({filter, todos});
export default reducer;