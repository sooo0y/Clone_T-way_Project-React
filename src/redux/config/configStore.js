import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "../modules/ticket";

const store = configureStore({
  reducer: {
    ticket: ticketSlice.reducer,
  }
});

export default store;