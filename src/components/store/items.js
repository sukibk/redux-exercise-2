import {createSlice} from "@reduxjs/toolkit";

const itemList = [{
    id: 'm1',
    name: 'Ravioli',
    description: 'Delicious Italian pasta!',
    price: 6
},
    {id: 'm2',
    name: 'Pizza',
    description: 'Delicious Italian pizza!',
    price: 10
},
    {id: 'm3',
    name: 'Sushi',
    description: 'Delicious Japanese sushi!',
    price: 15
}]

const itemsSlice = createSlice({
    name: 'items',
    initialState: itemList,
    reducers: {

    }
})

export default itemsSlice.reducer;