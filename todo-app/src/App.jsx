import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Entry from "./components/Entry";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Entry />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
