import ListItem from "./components/ListItem";
import "./App.css";

function App() {
  const students = ["Ali", "Mehmet", "Hakan"];
  return (
    <>
      <h1>Welcome</h1>
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} />;
        })}
      </ul>
    </>
  );
}

export default App;
