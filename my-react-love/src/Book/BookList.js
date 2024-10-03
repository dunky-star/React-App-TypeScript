import "./book.css"; // Importing the CSS file for styles
import { Book } from "./components/Book";
import { books } from "./../data/book";
export const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book, index) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1> Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          //const { id, author, title, img } = book;
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};
