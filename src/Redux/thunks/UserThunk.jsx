import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAlluser=createAsyncThunk(
    "users/getAlluser",async ()=>{
        try {
            const response=await axios.get("/api/users");
            const data={data:response.data}
            return data
        
        } catch (error) {
            console.error(error);

        }
    }
)

export{getAlluser}