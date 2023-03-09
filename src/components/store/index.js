import {configureStore} from "@reduxjs/toolkit";
import UiReducer from './ui-slice';
import CartReducer from './cart-slice';
import ItemsReducer from './items';

const store = configureStore({
    reducer:{
    ui: UiReducer,
    cart: CartReducer,
    items: ItemsReducer
    }})

export default store;