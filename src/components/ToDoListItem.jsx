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
    <li className='flex items-center my-2'>
      <input
        className='w-4 h-4 accent-brand'
        type='checkbox'
        id={id}
        name='text'
        onChange={handleChange}
      />
      <label className='grow px-1 line-clamp-1 break-words text-brand' htmlFor={id}>
        {text}
      </label>
      <button onClick={handleDelete}>
        <BsFillTrashFill className='text-brand hover:scale-110' />
      </button>
    </li>
  );
}
