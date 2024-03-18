import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://miiaappcoder-default-rtdb.firebaseio.com'}),
    tagTypes:["ProfileImage","UserLocation"],
    endpoints:(builder)=>({
        putProfileImage: builder.mutation({
            query:({profileImage,localId})=>({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{profileImage}
            }),
            invalidatesTags:["ProfileImage"]
        }),
        getProfileImage: builder.query({
            query:(localId) => `/profile/${localId}.json`,
            providesTags:["ProfileImage"]
        }),
        putUserLocation:builder.mutation({
            query:({localId,locationData})=> ({
                url:`/userLocation/${localId}.json`,
                method:"PUT",
                body:locationData
            }),
            invalidatesTags:["UserLocation"]
        }),
        getUserLocation:builder.query({
            query:(localId) => `/userLocation/${localId}.json`,
            providesTags:["UserLocation"]
        })
    })
})

export const {  useGetProfileImageQuery,
                usePutProfileImageMutation,
                usePutUserLocationMutation,
                useGetUserLocationQuery
            } = profileApi