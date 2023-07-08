export default function TodoItem({todo, onDelete, onClick }) {

  return (
    <li style={{ listStyleType: "none" }} onClick={() => onClick(todo.id)}>
      Task: {todo.text}
      <button onClick={() => onDelete(todo.id)}>DELETE</button>
    </li>
  );
}
