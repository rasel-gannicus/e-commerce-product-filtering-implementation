import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';
import filterReducer from '../slices/filterSlices';
import cartReducer from '../slices/cartSlice';
import wishlistReducer from '../slices/wishlistSlice';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;