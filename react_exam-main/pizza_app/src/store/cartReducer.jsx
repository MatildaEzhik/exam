import { createSlice } from '@reduxjs/toolkit';

const initialCart = JSON.parse(localStorage.getItem('cart')) || {};

const cartReducer = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            const { id, name, price, quantity } = action.payload;
            if (state[id]) {
                state[id].quantity += quantity;
            } else {
                state[id] = { id, name, price, quantity: quantity };
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const id = action.payload;
            if (state[id]) {
                if (state[id].quantity > 1) {
                    state[id].quantity -= 1;
                } else {
                    delete state[id];
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart: (state) => {
            for (let key in state) delete state[key];
            localStorage.removeItem('cart');
        }
    }
});

export const { addItem, removeItem, clearCart } = cartReducer.actions;
export default cartReducer.reducer;