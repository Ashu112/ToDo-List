import React from "react";

function Item({ item }) {
  return (
    <li id={item?.id} className="todo_item">
      <buton className="todo_items_left">
        <p>{item?.title}</p>
      </buton>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
        </button>
      </div>
    </li>
  );
}

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => (
            <Item key={index} item={item} setTodos={setTodos} />
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    </div>
  );
};

export default ToDoList;
