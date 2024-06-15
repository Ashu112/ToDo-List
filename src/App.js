import "./App.css";
import Header from "./Components/Header";
import ToDoHero from "./Components/ToDoHero";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ToDoHero todo_completed={0} total_todos={0} />
      <Form />
      <ToDoList todos={[]} />
    </div>
  );
}

export default App;
