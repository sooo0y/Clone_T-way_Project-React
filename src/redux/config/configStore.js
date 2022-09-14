import { configureStore } from "@reduxjs/toolkit";
import users from "./module/users";
import ReservationCheck from "./module/mypagecheck";
const store = configureStore({
  reducer: {
    users: users.reducer,
    ReservationCheck:ReservationCheck.reducer
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