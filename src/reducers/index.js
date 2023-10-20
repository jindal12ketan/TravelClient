// src/reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userSlice,
});

export default rootReducer;