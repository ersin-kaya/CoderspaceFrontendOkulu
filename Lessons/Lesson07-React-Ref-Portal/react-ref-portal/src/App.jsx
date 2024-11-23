import { useRef } from "react";
import "./App.css";

function App() {
  const divRef = useRef();

  return (
    <>
      <div ref={divRef}>Test</div>
      <button
        onClick={() => {
          console.log(divRef.current);
        }}
      >
        Click me
      </button>
    </>
  );
}

export default App;
