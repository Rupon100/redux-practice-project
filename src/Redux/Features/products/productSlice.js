import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "pant",
        price: 200, 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "XL"
    }
];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(action)
            state.push({
                id:  state.length > 0 ? state[state.length - 1].id + 1 : 1,
                ...action.payload
            })
        }
    }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;