import { useEffect } from "react";

export default function TodoItem({ id, onDelete, todo }) {
  useEffect(() => {
    console.log(`${id} - Mounted`);

    return () => {
      console.log(`${id} - Unmounted`);
    }
  }, []);
  return (
    <li style={{ listStyleType: "none" }}>
      Task: {todo.text}
      <button onClick={() => onDelete(id)}>DELETE</button>
    </li>
  );
}
