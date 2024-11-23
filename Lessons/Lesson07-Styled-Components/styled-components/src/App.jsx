import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  const MyButton = styled.button`
    background-color: orangered;
    border-radius: 10x;
    color: white;
    padding: 5px 20px;
    margin: 0 20px;
  `;

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <MyButton>Styled Button</MyButton>
    </>
  );
}

export default App;
