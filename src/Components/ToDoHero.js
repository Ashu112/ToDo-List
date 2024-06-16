import React from "react";

const ToDoHero = ({ todo_completed, total_todos }) => {
  return (
    <div className="hero-container">
      <div className="hero-main1">
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div className="hero-main2">
        {todo_completed}/{total_todos}
      </div>
    </div>
  );
};

export default ToDoHero;
