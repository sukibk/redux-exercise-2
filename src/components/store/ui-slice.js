import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false},
    reducers:{
        toggleVisibility(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const actionsUi = uiSlice.actions;

export default uiSlice.reducer;