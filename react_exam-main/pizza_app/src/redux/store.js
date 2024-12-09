import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../store/cartReducer.jsx";
import userReducer from "../store/userReducer.jsx";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
});

