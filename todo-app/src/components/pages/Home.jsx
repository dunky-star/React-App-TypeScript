import { useDispatch, useSelector } from "react-redux";
import Goal from "../Goal";
import GoalsForm from "../GoalsForm";
import Header from "../Header";
import Book from "../Book";
import { incrementPageReducer } from "../../redux/bookSlice";

export function Home() {
  const { books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <p>Home</p>
      <p>{count}</p>
      <Header />
      <GoalsForm />
      <Goal />

      <div>
        {books.map(({ id, title, author }) => (
          <div key={id}>
            <Book author={author} title={title} />
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(incrementPageReducer())}>add more</button>
    </div>
  );
}
