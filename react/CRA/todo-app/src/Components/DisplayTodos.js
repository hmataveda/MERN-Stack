import { useState, useEffect } from "react";

const DisplayTodos = (props) => {
  // const [todos, setTodos] = useState(props.todos);

  // useEffect(() => {
  //   console.log("coming here", todos);
  //   setTodos(props.todos);
  // }, [props]);

  const handleCheckBox = (e, id) => {
    console.log(e.target.checked + "dd" + id);
    props.getCheckedId(id);
  };

  const handleDelete = (e, id) => {
    props.getDeletedId(id);
  };
  const finalTodos = props.todos.map((todo, idx) => {
    return (
      <div key={idx}>
        <div>
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
        <div>
          <button
            onClick={(e) => {
              handleDelete(e, todo.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return <div className="">{finalTodos}</div>;
};

export default DisplayTodos;
