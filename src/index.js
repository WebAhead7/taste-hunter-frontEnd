import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const { BrowserRouter } = require("react-router-dom");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
