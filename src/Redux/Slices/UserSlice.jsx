import { createSlice } from "@reduxjs/toolkit"
import { getAlluser } from "../thunks"

const initialState={
    users:[]
}

const UserSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:{
    [getAlluser.fulfilled]:(state,action)=>{
        state.users=action.payload.data.users
    },
    [getAlluser.rejected]:(action)=>{
      console.log(action)  
    }
    }
})

export default UserSlice.reducer