import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const DATA = [
  {id: "todo-0", name:"Morning routine", completed:true},
  {id: "todo-1", name:"Eat", completed:true},
  {id: "todo-2", name:"Code", completed:true},
  {id: "todo-3", name:"Workout", completed:false},
  {id: "todo-4", name:"Time w fav people", completed:false},
  {id: "todo-5", name:"Sleep", completed:false},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

