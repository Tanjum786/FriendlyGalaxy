import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signupPage = createAsyncThunk(
  "auth/signup",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", newUser);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const loginPage = createAsyncThunk(
  "auth/login",
  async (loginuser, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", loginuser);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
const editUserProfile = createAsyncThunk(
  "users/editUserProfile",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data };
      console.log(response);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ data: error.response.data });
    }
  }
);

export { signupPage, loginPage ,editUserProfile};
