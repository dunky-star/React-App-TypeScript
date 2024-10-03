import { data } from "../Data/Data";
import { useState } from "react";

export const UseStateArrayExample = () => {
  const [people, setPeople] = useState(data);

  const clearItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAllItem = () => {
    setPeople([]);
  };

  return (
    <div className="ArrExample mt-5">
      <h3>Class mates:</h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            {name}
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => clearItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn btn-outline-primary"
        onClick={clearAllItem}
      >
        Clear All
      </button>
    </div>
  );
};
