import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
