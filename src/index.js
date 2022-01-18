import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Apptest from "./Apptest";
import Pdf from "./components/pdf";
import Print from "./components/print";
import Signin from "./components/signin";
import { BrowserRouter as Router } from "react-router-dom";
import Dummy from "./dummy";
ReactDOM.render(
  <StrictMode>
    <Router>
      <Apptest />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
