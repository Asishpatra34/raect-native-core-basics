import {createSlice} from '@reduxjs/toolkit';
const initialState:any = [];
const ProductSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
  },
});

export const {addProducts} = ProductSlice.actions
export default ProductSlice.reducer
