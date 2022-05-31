import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signupPage = createAsyncThunk(
  "auth/signup",
  async (newUser, {rejectWithValue}) => {
    try {
      const response = await axios.post("/api/auth/signup",newUser);
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

const loginPage=createAsyncThunk("auth/login",
async(loginuser,{rejectWithValue})=>{
try {
    const response=await axios.post("/api/auth/login",loginuser)
    const data ={data:response.data, status:response.status}  
    return data   
} catch (error) {
    return rejectWithValue({
        data: error.response.data,
        status:error.response.status
    })

    
}
})

export { signupPage,loginPage };
