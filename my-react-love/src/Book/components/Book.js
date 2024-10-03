export const Book = (props) => {
  const { img, title, author, getBook, id, number } = props; // Destructuring
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h2>Title: {title}</h2>
      <h4>Author: {author} </h4>
      <span className="number">{`# ${number + 1}`}</span>
      <button onClick={getSingleBook}>Click me</button>
    </article>
  );
};
