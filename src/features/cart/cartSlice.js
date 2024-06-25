import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../productList';

const initialState = {
  cartItems: [],
  numberOfItems: 0,
  numberOfProducts: 0,
  cartTotal: 0,
  grandTotal: 0,
  vat: 0,
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
    updateTotals: (state) => {
      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.numberOfItems = state.cartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
      state.numberOfProducts = state.cartItems.length;
      state.grandTotal = state.cartTotal + 50;
      state.vat = state.cartTotal * 0.2;
    },
  },
});

export const {
  clearCart,
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  updateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
