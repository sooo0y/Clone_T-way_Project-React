import { configureStore } from "@reduxjs/toolkit";

import users from "../modules/users";
import ticketSlice from "../modules/ticket";
import ReservationCheck from "../modules/mypagecheck";
const store = configureStore({
  reducer: {
    users: users.reducer,
    ReservationCheck:ReservationCheck.reducer,
    ticket: ticketSlice.reducer,
  },
});

export default store;