import { useState } from "react";
import data from "./data";
import List from "./components/List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
