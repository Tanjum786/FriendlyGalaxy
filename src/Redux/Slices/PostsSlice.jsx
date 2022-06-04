import { createSlice } from "@reduxjs/toolkit";
import {
  addCommentspost,
  addToBookmark,
  createPost,
  deleteCommentpost,
  deletePost,
  dislikepost,
  editPost,
  getpost,
  likepost,
  removeBookmark,
} from "../thunks";

const initialState = {
  posts: [],
  bookmarks: [],
  status: "idel",
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers:{
  trendingPostFilter:(state)=>{
    state.posts.sort((a,b)=>a.likes.likeCount-b.likes.likeCount)
  },
  latestPostFilter:(state)=>{
    state.posts.sort((a,b)=>a.createdAt-b.createdAt)
  }

  },
  extraReducers: {
    [getpost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
      state.status = "success";
    },
    [getpost.rejected]: (action) => {
      console.log(action);
      state.status = "failed";
    },
    [likepost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [likepost.rejected]: (action) => {
      console.log(action);
    },
    [dislikepost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [dislikepost.rejected]: (action) => {
      console.log(action);
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.data.bookmarks;
    },
    [addToBookmark.rejected]: (action) => {
      console.log(action);
    },
    [removeBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeBookmark.rejected]: (action) => {
      console.log(action);
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [createPost.rejected]: (action) => {
      console.error(action);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (action) => {
      console.log(action);
    },
    [editPost.fulfilled]: (sate, action) => {
      sate.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (action) => {
      console.log(action);
    },
    [addCommentspost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [addCommentspost.rejected]: (action) => {
      console.log(action);
    },
    [deleteCommentpost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [deleteCommentpost.rejected]: (action) => {
      console.log(action);
    },
  },
});
export const {trendingPostFilter,latestPostFilter}=PostSlice.actions
export default PostSlice.reducer;
