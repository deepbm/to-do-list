import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function ToDoListItem({ todo, todo: { id, text, status }, onUpdate, onDelete }) {
  const handleChange = e => {
    const updated = { ...todo, status: e.target.checked ? 'completed' : 'active' };
    onUpdate(updated);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className='flex items-center my-3 text-lg'>
      <input
        className='w-4 h-4 mr-1 accent-brand rounded'
        type='checkbox'
        id={id}
        name='text'
        onChange={handleChange}
        checked={status === 'completed'}
      />
      <label
        className='grow px-1 line-clamp-1 break-words text-brand'
        style={{ color: status === 'completed' ? '#ddd' : '#6f7df7' }}
        htmlFor={id}
      >
        {text}
      </label>
      <button onClick={handleDelete}>
        <BsFillTrashFill className='text-brand hover:scale-110' />
      </button>
    </li>
  );
}
