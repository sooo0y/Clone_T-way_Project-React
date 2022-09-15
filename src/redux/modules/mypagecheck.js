import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
<<<<<<< HEAD:src/redux/config/module/mypagecheck.js
import {
  deleteCookie,
  setCookie,
  setKakaoCookie,
} from "../../../shared/Cookie";
import KakaoLogin from "../../../components/login/KakaoLogin";
=======
import { deleteCookie, setCookie , setKakaoCookie} from "../../shared/Cookie";
import KakaoLogin from "../../components/login/KakaoLogin";
>>>>>>> bde799844649ab38c4703cefa4d4089280898f73:src/redux/modules/mypagecheck.js

export const __getReservationCheck = createAsyncThunk(
  "ReservationCheck",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://13.209.97.75:8080/api/auth/mybooking?bookingNum=${arg}`
        // arg 포스트 아이디
      );
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code), alert("없는 예약 번호입니다.");
    }
  }
);

export const ReservationCheck = createSlice({
  name: "ReservationCheck",
  initialState: {
    data: [],
    success: false,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getReservationCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getReservationCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(__getReservationCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ReservationCheck;
