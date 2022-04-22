import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/assets/generated.css";
import { Provider } from "react-redux";
import store from "./redux/store";
window.store = store;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider id="appProvider" store={store}>
    <App />
  </Provider>
);
