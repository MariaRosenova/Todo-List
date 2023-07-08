import { useState } from "react";
import uniqid from 'uniqid';

import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todoList, setTodos] = useState([
    { id: 1, text: "Morning routine" },
    { id: 2, text: "Coding" },
    { id: 3, text: "Workout" },
    { id: 4, text: "Time w fav people" },
  ]);

  const onTodoInputBlur = (e) => {
    let todo = {
      id: uniqid(),
      text: e.target.value,
    };

    setTodos((state) => [...state, todo]);

    e.target.value = "";
  };

  const deleteTodoItemClickHandler = (id) => {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id))
  };
  
  return (
    <ul>
      <label htmlFor="todo-name">Add Todo</label>
      <input
        type="text"
        id="todo-name"
        onBlur={onTodoInputBlur}
        name="todo"
      ></input>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          id={todo.id}
          onDelete={deleteTodoItemClickHandler}
        />
      ))}
    </ul>
  );
}
