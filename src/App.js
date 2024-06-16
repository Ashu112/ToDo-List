import "./App.css";
import Header from "./Components/Header";
import ToDoHero from "./Components/ToDoHero";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_completed = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <ToDoHero
        todo_completed={todos_completed}
        total_todos={total_completed}
      />
      <Form setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
