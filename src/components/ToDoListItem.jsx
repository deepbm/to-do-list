import React from 'react';
import { PiTrashSimpleBold } from 'react-icons/pi';

export default function ToDoListItem({ todo, todo: { id, text, status }, onUpdate, onDelete }) {
  const handleChange = e => {
    const updated = { ...todo, status: e.target.checked ? 'completed' : 'active' };
    onUpdate(updated);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className='flex items-center mb-3 text-lg'>
      <input
        className='w-4 h-4 mr-1 accent-brand rounded'
        type='checkbox'
        id={id}
        name='text'
        onChange={handleChange}
        defaultChecked={status === 'completed'}
      />
      <label
        className='flex-1 px-1 line-clamp-1 break-words text-brand'
        style={{ color: status === 'completed' ? '#ddd' : '#2f4dd3' }}
        htmlFor={id}
      >
        {text}
      </label>
      <button onClick={handleDelete}>
        <PiTrashSimpleBold className='text-[#bbb] hover:text-brand' />
      </button>
    </li>
  );
}
