import Home from "./page/Home";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
