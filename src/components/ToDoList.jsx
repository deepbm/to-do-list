import React, { useEffect, useRef, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';

export default function ToDoList() {
  const [todos, setTodos] = useState(readTodosFromLocalstorage);
  const [completed, setCompleted] = useState(0);
  const [bar, setBar] = useState(0);
  const bottomRef = useRef(null);
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
    scrollToBottom();
  };
  const handleUpdate = updated => {
    setTodos(prev => prev.map(todo => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    setCompleted(todos.filter(todo => todo.status === 'completed').length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const total = todos.length;
    setBar((completed / total) * 100);
  }, [completed, todos]);

  return (
    <section className='grow flex flex-col p-4 px-6 min-h-0'>
      <div className='inline mb-2 bg-lightBlue text-brand'>
        <span className='mr-1'>총 갯수:</span>
        <span className='text-center font-bold'>{todos.length}</span>
        <span className='mx-2'>/</span>
        <span className='mr-1'>남은 할 일:</span>
        <span className='text-center font-bold'>{completed}</span>
      </div>
      <div className='flex items-center gap-3'>
        <div className='w-full h-1.5 bg-lightGray rounded-md'>
          <div
            className='h-1.5 rounded-md bg-brand transition-all ease-in-out duration-300'
            style={{ width: `${bar}%` }}
          ></div>
        </div>
        <span className='text-sm text-brand font-bold'>{Math.round(bar)}%</span>
      </div>
      <ul className='mostly-customized-scrollbar grow overflow-y-auto my-4 p-2'>
        {todos.length > 0 &&
          todos.map(todo => (
            <ToDoListItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        <li ref={bottomRef}></li>
      </ul>
      <AddForm onAdd={handleAdd} />
    </section>
  );
}

const readTodosFromLocalstorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
