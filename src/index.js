import React from "react";
import ReactDOM from "react-dom";
import FetchHTML from "./FetchHTML";
import DownloadButton from "./DownloadButton";
import { Route, Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DownloadButton />
  </React.StrictMode>,
  document.getElementById("root")
);
