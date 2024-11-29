import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalItems: 0,
};


const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({...product, quantity: 1 });
            }

            state.totalAmount += product.price;
            state.totalItems++;
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            const existingItem = state.cart.filter(
                (item) => item.id!== productId
            );

            if(existingItem){
                state.cart = existingItem;
            }
    }
})










