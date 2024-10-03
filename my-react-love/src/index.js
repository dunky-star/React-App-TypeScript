import React from "react";
import ReactDOM from "react-dom/client";
import { BookList } from "./Book/BookList";

export const MainPage = () => {
  return <BookList />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainPage />);
