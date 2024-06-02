import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import cartSlice from './reducers/cartSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice
    }
})

export default store;