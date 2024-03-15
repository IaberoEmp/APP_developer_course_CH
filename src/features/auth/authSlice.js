import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:"",
    localId:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUser:(state,actions) => state = actions.payload,
        clearUser:(state)=>state = {email:"",idToken:""}
    }
})

export const  { registerUser,clearUser } = authSlice.actions

export default authSlice.reducer