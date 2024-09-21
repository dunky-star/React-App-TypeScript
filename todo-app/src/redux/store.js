import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import booksReducer from "./bookSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    booksReducer: booksReducer,
  },
});
