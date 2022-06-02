import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import postReducer from "../Slices/PostsSlice";
import userReducer from "../Slices/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userReducer,
    post: postReducer,
    
  },
});
