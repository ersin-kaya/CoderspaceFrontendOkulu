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
      </ul>
      <Router />
    </>
  );
}

export default App;
