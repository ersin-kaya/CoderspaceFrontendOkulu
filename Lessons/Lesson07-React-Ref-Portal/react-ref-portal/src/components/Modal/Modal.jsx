import { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  if (!isOpen) return null;

  setTimeout(() => inputRef.current && inputRef.current.focus(), 0);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <h3>Enter your name</h3>
      <input ref={inputRef} type="text" placeholder="Your name" />
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
