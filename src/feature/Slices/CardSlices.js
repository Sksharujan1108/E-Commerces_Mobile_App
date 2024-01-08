import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_STATE = {
    cart: []  // Keep the default value as 'cart'
};

const INITIAL_STATE = {
    ...DEFAULT_STATE,
}

export const CartSlice = createSlice ({ 
    name: 'cartForm',  // Change the slice name to 'cartForm'
    initialState: INITIAL_STATE,
    reducers: {
        // ADD TO Cart
        addToCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent) {
                itemPresent.quantity++;
            } else {
                state.cart.push({...action.payload, quantity: 1});
            }
        },
        // Remove The Card
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },
        // Increase 
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        // Decrease
        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent.quantity === 1) {
                itemPresent.quantity = 0;
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            } else {
                itemPresent.quantity--;
            }
        },
        // CleanCart
        cleanCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, cleanCart } = CartSlice.actions;

export default CartSlice;
