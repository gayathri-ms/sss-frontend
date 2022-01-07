import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Apptest from "./Apptest";
import Pdf from "./components/pdf";
import Print from "./components/print";

ReactDOM.render(
  <StrictMode>
    <Apptest />
    {/* <Pdf /> */}
    {/* <Print /> */}
  </StrictMode>,
  document.getElementById("root")
);
