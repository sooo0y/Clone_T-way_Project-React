import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
// import { instance } from "../../shared/Api";

const initialState = {
  tickets: [],
  isLoading: false,
  error: null,
};

export const __getTicket = createAsyncThunk(
  "ticket/getTicket",
  async (payload, thunkAPI) => {
    const startDay = getCookie("startDay");
    const startPoint = getCookie("startPoint");

    const start = {
      startDay: { startDay },
      startPoint: { startPoint },
    };

    try {
      const data = await axios.get(
        `
      http://3.39.254.156/api/ticket?depAirportId=${start.startPoint.startPoint}&depPlandTime=${start.startDay.startDay}
      `,{
        headers:{
            "Content-Type": "multipart/form",
            Authorization: getCookie("ACESS_TOKEN"),
            RefreshToken: getCookie("REFRESH_TOKEN")
        }
        
    });
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
  reducers: {
    addTicket: async (state, action) => {
      const data = await axios.get(`
      http://3.39.254.156/api/ticket?depAirportId=${action.payload.startPoint.startPoint}&depPlandTime=${action.payload.startDay.startDay}
      `);
      state.tickets.push(data.data.data);
    },
  },
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
      })
      .addCase(__getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // console.log("rejected");
      });
  },
});

export const { addTicket } = ticketSlice.actions;
export default ticketSlice;
