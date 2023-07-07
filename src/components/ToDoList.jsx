import React, { useEffect, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';

export default function ToDoList() {
  const [todos, setTodos] = useState(readTodosFromLocalstorage);
  const [total, setTotal] = useState(0);
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
  };
  const handleUpdate = updated => {
    setTodos(prev => prev.map(todo => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    setTotal(todos.length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <p>{total}</p>
      <ul>
        {todos.length > 0 &&
          todos.map(todo => (
            <ToDoListItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </ul>
      <AddForm onAdd={handleAdd} />
    </>
  );
}

const readTodosFromLocalstorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
