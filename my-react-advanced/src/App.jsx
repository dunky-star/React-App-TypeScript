import "./App.css";
import { UseEffectExample } from "./components/UseEffectExample";
import { UseStateArrayExample } from "./components/UseStateArrayExample";
import { UseStateExample } from "./components/UseStateExample";

export const App = () => {
  return (
    <>
      <div>
        <h1>React Advanced:</h1>
        <UseStateExample />
        <UseStateArrayExample />
        <UseEffectExample />
      </div>
    </>
  );
};
