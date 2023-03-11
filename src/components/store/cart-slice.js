import { createSlice } from "@reduxjs/toolkit";
import {actionsUi} from "./ui-slice";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'ui',
    initialState: {
        items: [],
        totalAmount: 0,
        enabled: false
    },
    reducers:{
        replaceCart(state, action){
          state.totalAmount = action.payload.totalAmount;
          state.items = action.payload.items;
        },
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.enabled = true;
            state.totalAmount++
            if(!existingItem){
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title});
            } else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }
        },
        removeItemFormCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalAmount--;
            state.enabled = true;
            if(existingItem.quantity === 1)
            {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer;