import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import PropTypes from "prop-types";

function App() {
  const [count, setCount] = useState(0);

  const MyButton = styled.button`
    background-color: orangered;
    border-radius: 10x;
    color: white;
    padding: 5px 20px;
    margin: 0 20px;
  `;

  const SecondButton = styled(MyButton)`
    background-color: purple;
    font-size: ${(props) => props.fontSize}px;
    color: ${(props) => props.color};
  `;

  SecondButton.propTypes = {
    fontSize: PropTypes.string.isRequired,
  };

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <MyButton>Styled Button</MyButton>
      <SecondButton fontSize="30" color="gray">
        Second Button
      </SecondButton>
    </>
  );
}

export default App;
