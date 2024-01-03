import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
    cart: []
}

const INITIALSTATE = {
    ...DEFAULT_STATE,
}

export const CartSlice = createSlice ({ 
    name: 'cart',
    initialState: INITIALSTATE,
    reducers: {
        // ADD TO Card
        addToCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            if(itemPresent) {  //if the item is already in the cart
                itemPresent.quantity++;   //we increment the quantity of this
            }  else {
                state.cart.push({...action.payload, quantity: 1})     //else we push it to the
            }
        },
        // Remove The Card
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removeItem
        },
        // InCrease 
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            itemPresent.quantity++
        },
        // DeCrement
        decrementQuantity:(state, action)=> {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id)
            if (itemPresent.quantity === 1) {
                itemPresent.quantity = 0;
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = removeItem
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

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, cleanCart} = CartSlice.actions

export default CartSlice