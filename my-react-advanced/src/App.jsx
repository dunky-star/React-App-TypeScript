import "./App.css";
import { UseEffectCustomHook } from "./components/UseEffectCustomHook";

import { UseStateArrayExample } from "./components/UseStateArrayExample";
import { UseStateExample } from "./components/UseStateExample";

export const App = () => {
  return (
    <>
      <div>
        <h1>React Advanced:</h1>
        <UseStateExample />
        <UseStateArrayExample />
        <UseEffectCustomHook />
      </div>
    </>
  );
};
