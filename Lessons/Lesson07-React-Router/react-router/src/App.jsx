import Router from "./routes/Router";
import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/parameter/10">Parameter (e.g., 10)</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
          <ul>
            <li>
              <NavLink to="/news/trending">Trending</NavLink>
            </li>
            <li>
              <NavLink to="/news/sports">Sports</NavLink>
            </li>
            <li>
              <NavLink to="/news/finance">Finance</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
