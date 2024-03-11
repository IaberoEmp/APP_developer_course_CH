import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import { shopApi } from "./services/shop"
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./services/auth"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer,
        auth:authReducer,
        [shopApi.reducerPath]:shopApi.reducer,//Esto la configuracion de la documentacion.
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware), //Config de la documentacion de redux toolkit
})

setupListeners(store.dispatch)