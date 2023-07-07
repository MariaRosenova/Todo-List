export default function TodoItem({ todo }) {
  return (
    <li style={{ listStyleType: 'none' }}>
      Task: {todo.text}
      <button onClick={() => console.log("delete")}>DELETE</button>
    </li>
  );
}
