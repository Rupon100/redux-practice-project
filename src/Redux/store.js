import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Redux/Features/products/productSlice'
import cartReducer from '../Redux/Features/carts/cartSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer,
    }
})

export default store;