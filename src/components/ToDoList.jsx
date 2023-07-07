import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';

export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
  };
  return (
    <>
      <ul>
        {todos.map(todo => (
          <ToDoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddForm onAdd={handleAdd} />
    </>
  );
}

const initialTodos = [
  { id: 1, text: 'Meeting', status: 'active' },
  { id: 2, text: 'Pay bills', status: 'active' },
];
