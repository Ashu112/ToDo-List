import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Form = ({ setTodos }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: value, id: Math.random(), is_completed: false },
    ]);
    //reset the form
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button>
        <span className="visually-hidden ">
          <AddIcon />
        </span>
      </button>
    </form>
  );
};

export default Form;
