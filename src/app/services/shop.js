import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",//Este seria el nombre que le vamos a poner al estado global.
    baseQuery:fetchBaseQuery({
        baseUrl:'https://miiaappcoder-default-rtdb.firebaseio.com/'
    }),//Aca determino la url base a donde ir a consultar a la base
    endpoints:(builder)=>({
        getProducts:builder.query({
            query: (id)=> `/products/${id}.json`,
            
        }),
        getCategories:builder.query({
            query: (store)=> `/categories.json?orderBy="store"&equalTo="${store}"`,
            transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            }
        }),
        getStores:builder.query({
            query: ()=> '/stores.json',
        }),
        getProductByCategory:builder.query({
            query: (category)=> `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            }
        }),
    })//Aca voy a declarar todos los metodos, createProduct, update, etc.
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetStoresQuery, useGetProductByCategoryQuery } = shopApi
