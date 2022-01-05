import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Apptest from "./Apptest";
import Pdf from "./components/pdf";

ReactDOM.render(
  <StrictMode>
    <Apptest />
    {/* <Pdf /> */}
  </StrictMode>,
  document.getElementById("root")
);
