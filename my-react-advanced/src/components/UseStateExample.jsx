import { useState } from "react";
export const UseStateExample = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    console.log(value);
  };

  return (
    <div>
      <h1>You clicked me {value} times</h1>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-outline-primary"
      >
        Increase
      </button>
    </div>
  );
};
