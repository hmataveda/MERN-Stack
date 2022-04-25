import { useState, useEffect } from "react";

const DisplayTodos = (props) => {
  const handleCheckBox = (e, id) => {
    console.log(e.target.checked + "dd" + id);
    props.getCheckedId(id);
  };

  const handleDelete = (e, id) => {
    props.getDeletedId(id);
  };
  const finalTodos = props.todos.map((todo, idx) => {
    return (
      <div key={idx} className="list">
        <div className="names">
          <span
            className={`${todo.completed && "text-decoration-line-through"} `}
          >
            {todo.value}
          </span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              handleCheckBox(e, todo.id);
            }}
          />
        </div>
        <div className="delete">
          <button
            onClick={(e) => {
              handleDelete(e, todo.id);
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    );
  });

  return <div className="">{finalTodos}</div>;
};

export default DisplayTodos;
