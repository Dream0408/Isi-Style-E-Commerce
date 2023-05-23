import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
  list: [],
  status: null,
};

export const usersFetch = createAsyncThunk("users/usersFetch", async() => {
       try {
              
       } catch (error) {
              
       }
})
