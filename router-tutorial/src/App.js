import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
