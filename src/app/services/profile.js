import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://miiaappcoder-default-rtdb.firebaseio.com'}),
    endpoints:(builder)=>({
        putProfileImage: builder.mutation({
            query:({profileImage,localId})=>({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{profileImage}
            })
        }),
        getProfileImage: builder.query({
            query:(localId) => `/profile/${localId}.json`
        }),
        putUserLocation:builder.mutation({
            query:({localId,locationData})=> ({
                url:`/userLocation/${localId}.json`,
                method:"PUT",
                body:locationData

            })
        }),
        getUserLocation:builder.query({
            query:(localId) => `/userLocation/${localId}.json`
        })

    })
})

export const {  useGetProfileImageQuery,
                usePutProfileImageMutation,
                usePutUserLocationMutation,
                useGetUserLocationQuery
            } = profileApi