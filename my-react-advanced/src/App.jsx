import "./App.css";
import { UseEffectCustomHook } from "./components/UseEffectCustomHook";

import { ReducerBasics } from "./components/ReducerBasics";

import { UseStateExample } from "./components/UseStateExample";

export const App = () => {
  return (
    <>
      <div>
        <h1>React Advanced:</h1>
        <UseStateExample />
        <ReducerBasics />
        <UseEffectCustomHook />
      </div>
    </>
  );
};
