import React, { useEffect, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';

export default function ToDoList() {
  const [todos, setTodos] = useState(readTodosFromLocalstorage);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [bar, setBar] = useState(0);
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
    setCompleted(todos.filter(todo => todo.status === 'active').length);

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setBar(((total - completed) / total) * 100);
  }, [completed, total]);

  return (
    <section className='grow flex flex-col p-4'>
      <div className='mb-2 text-sm'>
        <span className='mr-1 text-brand'>총 갯수:</span>
        <span className='text-brand text-center font-bold'>{total}</span>
        <span className='mx-2 text-brand'>/</span>
        <span className='mr-1 text-brand'>남은 할 일:</span>
        <span className='text-brand text-center font-bold'>{completed}</span>
      </div>
      <div className='w-full h-1 bg-lightBlue'>
        <div
          className='h-1 bg-brand transition-all ease-in-out duration-300'
          style={{ width: `${bar}%` }}
        ></div>
      </div>
      <ul className='grow'>
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
    </section>
  );
}

const readTodosFromLocalstorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
