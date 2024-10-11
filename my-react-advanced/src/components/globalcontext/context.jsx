// Context API
import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext({});

export const useGlobalConext = () => useContext(GlobalContext);
// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [appName, setAppName] = useState("Best 2024 App");
  return (
    <GlobalContext.Provider value={{ appName, setAppName }}>
      {children}
    </GlobalContext.Provider>
  );
};
