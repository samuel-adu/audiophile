import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default configureStore({
  reducer: rootReducer,
});


