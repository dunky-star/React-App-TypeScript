import "./App.css";
import Title from "./components/Title";
import Setup from "./examples/1-first-request";
import Headers from "./examples/2-headers";

const App = () => {
  return (
    <div>
      <Title />
      <Setup />
      <Headers />
    </div>
  );
};

export default App;
