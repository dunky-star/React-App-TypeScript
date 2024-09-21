//import axios from "axios";
import { APInstance } from "./axiosInstance";

export const getBooks = async (page = 0, pageSize = 10) => {
  const req = await APInstance.get(`/api/books?page=${page}&size=${pageSize}`);
  const { books } = req.data._embedded;
  return books;
};
