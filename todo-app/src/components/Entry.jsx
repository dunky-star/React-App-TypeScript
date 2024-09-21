import { useEffect } from "react";

import CustomRoutes from "../router/CustomRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../api/getBooks";
import { addBooksReducer } from "../redux/bookSlice";

export default function Entry() {
  const { currentPage } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const getBooksFromApi = async () => {
    const booksResp = await getBooks(currentPage);
    dispatch(addBooksReducer(booksResp));
  };

  useEffect(() => {
    getBooksFromApi();
  }, [currentPage]);

  return (
    <div>
      <CustomRoutes />
    </div>
  );
}
