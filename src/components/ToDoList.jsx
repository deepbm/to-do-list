import React, { useEffect, useRef, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddForm from './AddForm';
import Bar from './ui/Bar';
import Filter from './ui/Filter';

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

  useEffect(() => {
    setCompleted(todos.filter(todo => todo.status === 'completed').length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const total = todos.length;
    const percent = (completed / total) * 100;
    setBar(isNaN(percent) ? 0 : percent);
  }, [completed, todos]);

  const filtered = getFilteredTodos(todos, filter);

  return (
    <section className='grow flex flex-col p-4 px-6 pb-7 min-h-0'>
      <Filter filters={filters} filter={filter} onUpdate={setFilter} />
      {todos.length > 0 && <Bar bar={bar} />}
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
