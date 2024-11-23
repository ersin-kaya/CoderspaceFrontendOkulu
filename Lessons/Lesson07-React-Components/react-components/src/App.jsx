import "./App.css";

function App() {
  const students = ["Ali", "Mehmet", "Hakan"];
  return (
    <>
      <h1>Welcome</h1>
      <ul>
        {students.map((student, index) => {
          return <li key={index}>{student}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
