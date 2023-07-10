const API_URL = "http://localhost:8003";

export const createTodo = async (todo) => {
  let responce = await fetch(`${API_URL}/todos`, {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  let result = await responce.json();

  return result;
};
