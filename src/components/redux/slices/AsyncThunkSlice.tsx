import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const final = await res.json();
  return final;
});

const AsyncThunkSlice = createSlice({
  name: 'producstss',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      console.log("loading",action);
      state.isLoader = true;
      
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      console.log("fullfiled",action);
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log(action);
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers:{

  }
});

// export const { addToCart, removeFromCart } = CartSlice.actions;
export default AsyncThunkSlice.reducer;
