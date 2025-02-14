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
                    id: action.payload.id,
                    quantity: 1,
                    productId: action.payload.id
                })
            }
        },
        
        // increment product
        incrementQuantity: (state, action) => {
            console.log("increment: ", action.payload);
            const isExist = state.find((product) => product.id === action.payload);
            if(isExist){
                isExist.quantity++;
            }
        
        },

        // decrement cart
        decrementQuantity: (state, action) => {
            console.log("decrement: ", action.payload);
            const isExist = state.find((product) => product.id === action.payload);
            if(isExist &&  isExist.quantity > 1){
                isExist.quantity--;
            }
        },

        // remove from cart
        removeProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload) 
        }
    }
})

export const {addtoCart, incrementQuantity, decrementQuantity, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;