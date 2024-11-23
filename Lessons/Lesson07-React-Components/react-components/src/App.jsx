import ListItem from "./components/ListItem";
import "./App.css";
import { useState, useEffect } from "react";
import styles from "./Button.module.css";

function App() {
  const [value, setValue] = useState(0);
  const students = ["Ali", "Mehmet", "Hakan"];

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  useEffect(() => {
    console.log("Button clicked");
  }, [value]);

  return (
    <>
      <h1>Welcome</h1>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} value={value} />;
        })}
      </ul>
      <button
        // className={styles.customButton}
        className={styles["custom-button"]}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default App;
