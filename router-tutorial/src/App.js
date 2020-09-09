import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Profiles from "./Components/Profiles";

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
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profiles" component={Profiles}></Route>
      {/*http://localhost:3000/profiles/jhyounyaho */}
    </div>
  );
}

export default App;
