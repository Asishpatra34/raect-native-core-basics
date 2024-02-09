import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ProductsReducer from './slices/ProductSlice';
import CartReducer from './slices/CartSlice';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/es/storage';
import AsyncThunkReducer from './slices/AsyncThunkSlice';

// let persistConfig = {
//   key: 'root',
//   storage,
// };

// let rootReducer = combineReducers({
//   ProductsReducer: ProductsReducer,
//   cartReducer: CartReducer,
//   asyncThunkReducer: AsyncThunkReducer,
// });

// let persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
  reducer: {
    ProductsReducer: ProductsReducer,
    cartReducer: CartReducer,
    asyncThunkReducer: AsyncThunkReducer,
  },
  // reducer: persistedReducer
});

export default store;
