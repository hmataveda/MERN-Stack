import { useState } from "react";
const InputForm = (props) => {
  const [todo, setTodo] = useState({ value: "", completed: false });
  const handleInput = (e) => {
    setTodo({
      value: e.target.value,
      completed: false,
      id: todo.id + 1,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getSingleTodo(todo);
    setTodo({ value: "", completed: "" });
  };
  return (
    <div className="">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todos"
          value={todo.value}
          onChange={handleInput}
        />
        {todo.value && <input type="submit" value="Add" />}
        {!todo.value && <input type="submit" value="Add" disabled />}
      </form>
    </div>
  );
};

export default InputForm;
