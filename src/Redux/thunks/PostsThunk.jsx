import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getpost = createAsyncThunk("posts/getposts", async () => {
  try {
    const response = await axios.get("/api/posts");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    console.error(error);
  }
});

const likepost = createAsyncThunk(
  "posts/likepost",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${_id}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const dislikepost = createAsyncThunk(
  "post/dislikepost",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${_id}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const addToBookmark = createAsyncThunk(
  "post/addToBookmark",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const removeBookmark = createAsyncThunk(
  "post/removeBookmark",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      console.log(response)
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${_id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postDetailes, postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postDetailes._id}`,
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const addCommentspost = createAsyncThunk(
  "posts/addComments",
  async ({ commentData, token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${_id}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      return data;
    } catch (error) {
      return rejectWithValue({ data: error.response.data });
    }
  }
);

const deleteCommentpost = createAsyncThunk(
  "posts/deleteCommentpost",
  async ({ _id, token, commentId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/delete/${_id}/${commentId}`,
        {},
        { headers: { authorization: token } }
      );
      console.log(response);
      const data = { data: response.data };
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ data: error.response.data });
    }
  }
);

export {
  getpost,
  likepost,
  dislikepost,
  addToBookmark,
  removeBookmark,
  createPost,
  deletePost,
  editPost,
  addCommentspost,
  deleteCommentpost,
};
