import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

export default function App(props) {
  
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
    
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  const tasksNoun = taskList.length !==1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;  
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton command="All" />
        <FilterButton command="Active" />
        <FilterButton command="Completed" />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
