import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "../src/assets/generated.css";
import App from "./App";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider id="appProvider" store={store}>
    <App />
  </Provider>
);
