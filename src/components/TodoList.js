import { useState } from "react";
import uniqid from "uniqid";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todoList, setTodos] = useState([
    { id: uniqid(), text: "Morning routine", isDone: false },
    { id: uniqid(), text: "Coding", isDone: false },
    { id: uniqid(), text: "Workout", isDone: false },
    { id: uniqid(), text: "Time w fav people", isDone: false },
  ]);

  const onTodoInputBlur = (e) => {
    let todo = {
      id: uniqid(),
      text: e.target.value,
      isDone: false
    };

    setTodos((state) => [...state, todo]);

    e.target.value = "";
  };

  const deleteTodoItemClickHandler = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoItemClickHandler = (id) => {
    setTodos((oldTodos) => {
      let selectedTodo = oldTodos.find((x) => x.id === id);
  
      // Check if selectedTodo exists and has the isDone property
      if (selectedTodo && selectedTodo.hasOwnProperty('isDone')) {
        let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };
        let restTodos = oldTodos.filter((x) => x.id !== id);
  
        return [...restTodos, toggledTodo];
      }
  
      return oldTodos; // If selectedTodo doesn't exist or doesn't have the isDone property, return the oldTodos array as is
    });
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
        onDelete={deleteTodoItemClickHandler}
        onClick={toggleTodoItemClickHandler}
        />
      ))}
    </ul>
  );
}
