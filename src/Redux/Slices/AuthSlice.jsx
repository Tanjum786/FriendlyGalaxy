import { createSlice } from "@reduxjs/toolkit";
import { loginPage, signupPage } from "../thunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      (state.user = null),
        (state.token = null),
        localStorage.removeItem("user"),
        localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signupPage.fulfilled]: (state, action) => {
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },
    [signupPage.rejected]: (action) => {
      console.error(action);
    },
    [loginPage.fulfilled]: (state, action) => {
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [loginPage.rejected]: (action) => {
      console.error(action);
    },
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
