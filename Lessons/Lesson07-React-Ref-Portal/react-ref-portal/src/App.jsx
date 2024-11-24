import { useRef, useState } from "react";
import "./App.css";
import Portal from "./components/Portal";
import Modal from "./components/Modal/Modal";

function App() {
  const divRef = useRef();
  const [portalTarget, setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("Body of the document");
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal(divRef.current.textContent);
    console.log("handlePortal", divRef.current.textContent);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Portal target={portalTarget} text={textPortal} />
      <button onClick={handlePortal}>Change Portal</button>

      <div>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}

export default App;
