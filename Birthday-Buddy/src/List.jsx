import Person from "./Person";
import PropTypes from "prop-types";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

// Define prop types
List.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // Add any other properties used in the person object here
    })
  ).isRequired,
};

export default List;
