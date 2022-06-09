import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAlluser = createAsyncThunk("users/getAlluser", async () => {
  try {
    const response = await axios.get("/api/users");
    const data = { data: response.data };
    return data;
  } catch (error) {
    console.error(error);
  }
});
const Followuser = createAsyncThunk(
  "users/Followuser",
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${_id}`,
        {},
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
const unFollowuser = createAsyncThunk(
  "users/Followuser",
  async ({ _id, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${_id}`,
        {},
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

export { getAlluser, Followuser, unFollowuser };
