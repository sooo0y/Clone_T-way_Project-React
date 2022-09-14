import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { instance } from "../../shared/Api";

const initialState = {
  tickets: [],
  isLoading: false,
  error: null,
};

export const __getTicket = createAsyncThunk(
  "ticket/getTicket",
  async (payload, thunkAPI) => {
    // console.log(payload)
    try {
      const data = await axios.get(`
      http://3.39.254.156/api/ticket?depAirportId=NAARKTN&depPlandTime=20220911
      `);
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // console.log(builder);
    builder
      .addCase(__getTicket.pending, (state) => {
        state.isLoading = true;
        // console.log("pending");
      })
      .addCase(__getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
        // console.log(action.payload);
      })
      .addCase(__getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // console.log("rejected");
      });
  },
});

export default ticketSlice;
