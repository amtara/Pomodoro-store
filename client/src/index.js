import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/layout/_settings.scss";
import "../src/styles/index.scss";
import "../src/index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
