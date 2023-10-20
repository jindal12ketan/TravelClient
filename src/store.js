import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
});

console.log(store.getState());

export default store;