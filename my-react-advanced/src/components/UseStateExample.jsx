import { useState, useEffect } from "react";
export const UseStateExample = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
      const newValue = currentState + 1;
      //

      return newValue;
    });
  };

  useEffect(() => {
    console.log("From use effect function");
  }, []);

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
