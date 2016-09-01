import { combineReducers } from  'redux';

import todos from './todos.realtime';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


export default todoApp;