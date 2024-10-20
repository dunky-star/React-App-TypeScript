import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { AppContext } from "./components/globalcontext/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
);
