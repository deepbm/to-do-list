import React, { useEffect, useRef, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';

const filters = ['all', 'active'];
export default function ToDoList() {
  const [todos, setTodos] = useState(readTodosFromLocalstorage);
  const [completed, setCompleted] = useState(0);
  const [bar, setBar] = useState(0);
  const [filter, setFilter] = useState(filters[0]);
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

  const handleFilter = e => {
    setFilter(e.target.innerHTML);
  };

  useEffect(() => {
    setCompleted(todos.filter(todo => todo.status === 'completed').length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const total = todos.length;
    setBar((completed / total) * 100);
  }, [completed, todos]);

  const filtered = getFilteredTodos(todos, filter);

  return (
    <section className='grow flex flex-col p-4 px-6 pb-7 min-h-0'>
      <div className='py-2 text-gray'>
        {filters.map(filter => (
          <button
            className='mr-1 p-1 px-5 rounded-full capitalize'
            style={
              filter === 'all'
                ? { color: '#2E00B3', fontWeight: 'bold', backgroundColor: '#f2f2f6' }
                : { color: '#A6A6C3', fontWeight: 'normal', backgroundColor: 'transparent' }
            }
            onClick={handleFilter}
          >
            {filter}
          </button>
        ))}
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
        {filtered.length > 0 &&
          filtered.map(todo => (
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

const getFilteredTodos = (todos, filter) => {
  if (filter !== 'all') {
    return todos.filter(todo => todo.status === filter);
  }
  return todos;
};
