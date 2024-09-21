import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    currentPage: 0,
  },
  reducers: {
    getBookReducer: (state) => {
      return state.books;
    },
    addBooksReducer: (state, { payload }) => {
      state.books = [...payload, ...state.books];
    },
    incrementPageReducer: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { getBookReducer, addBooksReducer, incrementPageReducer } =
  bookSlice.actions;
export default bookSlice.reducer;
