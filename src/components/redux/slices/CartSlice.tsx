import {createSlice} from '@reduxjs/toolkit';
const initialState: any = [];
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        state[existingItemIndex].qty += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      // Remove item from cart based on its ID
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
