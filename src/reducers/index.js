// reducers/index.js

import { combineReducers } from 'redux';
import auth from './authReducer';
import note from './noteReducer';

const rootReducer = combineReducers({
  auth,
  note,
});

export default rootReducer;
