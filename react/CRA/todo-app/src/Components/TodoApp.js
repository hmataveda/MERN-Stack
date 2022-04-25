import InputForm from "./InputForm";
import DisplayTodos from "./DisplayTodos";
import { useState, useEffect } from "react";
const TodoApp = () => {
  const initialTodos = [
    {
      value: "Get up in the morning",
      completed: false,
      id: 1,
    },
    {
      value: "Drink stromng coffee",
      completed: false,
      id: 2,
    },

    {
      value: "Fresh Smoothie",
      completed: false,
      id: 3,
    },
  ];

  const storedTodoList = JSON.parse(localStorage.getItem("todolists"));
  const [todos, setTodos] = useState(storedTodoList || initialTodos);
  const [count, setCount] = useState(localStorage.getItem("counts") || 4);

  useEffect(() => {
    localStorage.setItem("todolists", JSON.stringify(todos));
    localStorage.setItem("counts", count);
  }, [todos]);

  const getSingleTodo = (singleTodo) => {
    const addTodoToInitial = [{ ...singleTodo, id: count }, ...todos];
    setTodos(addTodoToInitial); // setTodos([...todos,{...singleTodo,id:count}])
    setCount((preCount) => preCount + 1);
  };

  const getCheckedId = (id) => {
    const checkedTodos = todos.map((todo) => {
      if (id == todo.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(checkedTodos);
  };

  const getDeletedId = (id) => {
    console.log(id);
    const removeDeletedTodos = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeDeletedTodos);
  };

  return (
    <div className="mainPage">
      <h1>Todo Lists App</h1>
      <InputForm getSingleTodo={getSingleTodo}></InputForm>
      <DisplayTodos
        todos={todos}
        getCheckedId={getCheckedId}
        getDeletedId={getDeletedId}
      ></DisplayTodos>
    </div>
  );
};

export default TodoApp;
