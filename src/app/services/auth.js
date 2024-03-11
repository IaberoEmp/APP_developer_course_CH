import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(user)=>({
                url:"accounts:signUp?key=AIzaSyCV_Rmox1BgncQG3ZebLNz5RXsFdi8dMvU",
                method:"POST",
                body:user
            })
        }),
        login:builder.mutation({
            query:(user)=>({
                url:"accounts:signInWithPassword?key=AIzaSyCV_Rmox1BgncQG3ZebLNz5RXsFdi8dMvU",
                method:"POST",
                body:user
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi