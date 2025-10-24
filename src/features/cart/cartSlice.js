import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    incrementQty: (state, action) => {
      const it = state.items.find((i) => i.id === action.payload);
      if (it) it.qty += 1;
    },
    decrementQty: (state, action) => {
      const it = state.items.find((i) => i.id === action.payload);
      if (it) {
        it.qty -= 1;
        if (it.qty <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
