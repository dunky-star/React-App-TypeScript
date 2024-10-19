import "./App.css";
import Title from "./components/Title";
import Setup from "./examples/1-first-request";
import Headers from "./examples/2-headers";
import PostRequest from "./examples/3-post-request";

const App = () => {
  return (
    <div>
      <Title />
      <Setup />
      <Headers />
      <PostRequest />
    </div>
  );
};

export default App;
