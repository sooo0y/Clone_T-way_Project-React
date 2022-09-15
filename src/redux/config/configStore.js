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


// import { configureStore } from "@reduxjs/toolkit";
// import todos from "../modules/todo";

// const store = configureStore({
//   reducer: {
//     todos: todos.reducer,
//   },
// });

// export default store;