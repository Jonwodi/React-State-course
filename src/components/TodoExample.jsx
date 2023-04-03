import React, { useState } from "react"; // Import { useState } to use react state hook.

export default function TodoExample() {
  const todoItems = [
    { id: 1, title: "learn react", completed: true },
    { id: 2, title: "learn redux", completed: false },
    { id: 3, title: "learn react-redux", completed: false },
  ];

  const [todos, setTodos] = useState(todoItems); // todos is a state and it's default value is an array of objects. setTodos is the function that is used to update/change the value of the state todos.

  const handleCheckboxChange = (todoId) => {
    const newTodos = todos.map((todo) => {
      // find the matching id with the todo id
      if (todo.id === todoId) {
        // toggle the completed state of the todo item and return it
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  console.log("todos:", todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
