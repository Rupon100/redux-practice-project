import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        //add to cart
        addtoCart: (state, action) => {
            console.log("action from add cart: ", action.payload);
            const exist = state.find((product) => product.productId === action.payload.id);
            if(exist){
                alert("Already added!");
            }else{
                state.push({
                    ...action.payload,
                    id: Date.now(),
                    quantity: 1,
                    productId: action.payload.id
                })
            }
        },
        
        // increment product
        incrementQuantity: (state, action) => {
            console.log("increment: ", action.payload);
        
        },

        // decrement cart
        decrementQuantity: (state, action) => {

        },

        // remove from cart
        removeProduct: (state, action) => {

        }
    }
})

export const {addtoCart, incrementQuantity, decrementQuantity, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;