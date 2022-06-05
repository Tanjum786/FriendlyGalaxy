import { createSlice } from "@reduxjs/toolkit";
import { Followuser, getAlluser, unFollowuser } from "../thunks";

const initialState = {
  users: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAlluser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users;
    },
    [getAlluser.rejected]: (action) => {
      console.log(action);
    },
    [Followuser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users;
    },
    [Followuser.rejected]: (action) => {
      console.log(action);
    },
    [unFollowuser.fulfilled]: (state, action) => {
      state.users = action.payload.data.users;
    },
    [unFollowuser.rejected]: (action) => {
      console.log(action);
    },
  },
});

export default UserSlice.reducer;
