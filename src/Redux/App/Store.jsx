import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import postReducer from "../Slices/PostsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
