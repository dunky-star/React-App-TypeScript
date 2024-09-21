import React from "react";

const Book = ({ title, author }) => {
  //   console.log(title);
  return (
    <div>
      <h4>{title}</h4>
      <i>{author}</i>
      <hr />
    </div>
  );
};

export default Book;
