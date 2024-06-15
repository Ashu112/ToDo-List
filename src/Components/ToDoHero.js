import React from "react";

const ToDoHero = ({ todo_completed, total_todos }) => {
  return (
    <section>
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {todo_completed}/{total_todos}
      </div>
    </section>
  );
};

export default ToDoHero;
