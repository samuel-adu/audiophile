import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../productList';

const initialState = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = data.find((item) => item.id === id);
        state.cartItems.push({ ...newItem, quantity: quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    incrementItemQuantity: (state, action) => {
      const id = action.payload;
      state.cartItems.map((item) => (item.id === id ? item.quantity++ : item));
    },
    decrementItemQuantity: (state, action) => {
      const id = action.payload;
      state.cartItems.map((item) => (item.id === id ? item.quantity-- : item));
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  clearCart,
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
