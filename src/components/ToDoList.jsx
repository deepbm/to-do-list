import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';

export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map(todo => (
        <ToDoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

const initialTodos = [
  { id: 1, text: 'Meeting', status: 'active' },
  { id: 2, text: 'Pay bills', status: 'active' },
];
