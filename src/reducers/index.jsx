import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  jobReducer,
  filterReducer,
});

export default rootReducer;
