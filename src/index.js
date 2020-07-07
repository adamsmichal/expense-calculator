import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyles } from "./assets/styles/GlobalStyle";
import { App } from "./views/App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
