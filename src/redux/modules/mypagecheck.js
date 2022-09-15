import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteCookie, setCookie , getCookie} from "../../shared/Cookie";
import KakaoLogin from "../../components/login/KakaoLogin";

export const __getReservationCheck = createAsyncThunk(
    "ReservationCheck",
    async (arg, thunkAPI) => {
      try {
        const { data } = await axios.get(
          `http://3.39.254.156/api/auth/mybooking?bookingNum=${arg}`,  
          // arg 포스트 아이디
          {
            headers:{
                "Content-Type": "multipart/form",
                Authorization: getCookie("ACESS_TOKEN"),
                RefreshToken: getCookie("REFRESH_TOKEN")
            }
            
        });
        // console.log(data);
        return thunkAPI.fulfillWithValue(data.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code),
        alert('없는 예약 번호입니다.')
      }
    }
  );
  export const ReservationCheck= createSlice({
    name: "ReservationCheck",
    initialState:{
      data:[],
      success:false,
      error: null,
      isLoading:false,
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(__getReservationCheck.pending,  (state) => {
         state.isLoading = true;
        })
        .addCase(__getReservationCheck.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;       
        })
        .addCase(__getReservationCheck.rejected,(state, action) => {
         state.isLoading = false;
         state.error =action.payload;
        })

     }
  });

  export default ReservationCheck;