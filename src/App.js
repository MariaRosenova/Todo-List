import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

  const FILTER_MAP = {
    ALL: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP); // The keys => ALL, Active, Completed

  // the all filter shows all tasks, so we return true for all tasks
  // the active filter shows tasks whose completed prop is false
  // the completed filter shows whose completed prop is true

export default function App(props) {
  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      />
  ))
  const [tasks, setTasks] = useState(props.tasks);
  //this func expects some data from our form using as an input
  function addTask(name) {
    const newTask = {id: `{todo-${nanoid()}}`, name, completed:false};
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
   const remainingTasks = tasks.filter((task) => id !== task.id);
   setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name:newName};
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter((task) => FILTER_MAP[filter] ? FILTER_MAP[filter](task):true)
    .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}

    />
  ));
  const tasksNoun = taskList.length !==1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;  
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
