import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import { shopApi } from "./services/shop"
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer,
        [shopApi.reducerPath]:shopApi.reducer,//Esto la configuracion de la documentacion.
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware), //Config de la documentacion de redux toolkit
})

setupListeners(store.dispatch)