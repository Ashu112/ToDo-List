import "./App.css";
import Header from "./Components/Header";
import ToDoHero from "./Components/ToDoHero";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "Some task", id: 1, is_completed: false },
    {
      title: "Some other task",
      id: 2,
      is_completed: true,
    },
    { title: "last task", id: 3, is_completed: false },
  ]);
  return (
    <div className="wrapper">
      <Header />
      <ToDoHero todo_completed={0} total_todos={0} />
      <Form />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
