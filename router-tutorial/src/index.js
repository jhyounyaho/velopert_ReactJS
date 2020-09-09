import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // url ex) http://localhost:3000/
  // url ex) http://localhost:3000/about
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
/*
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  // url ex) http://localhost:3000/#/about
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
*/
/*
import { MemoryRouter } from "react-router-dom";
ReactDOM.render(
  // url ex) http://localhost:3000/
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById("root")
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
