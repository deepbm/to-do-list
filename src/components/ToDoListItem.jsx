import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function ToDoListItem({ todo, todo: { id, text, status }, onUpdate }) {
  const handleChange = e => {
    const updated = { ...todo, status: e.target.checked ? 'completed' : 'active' };
    onUpdate(updated);
  };

  return (
    <li>
      <input type='checkbox' id={id} name='text' onChange={handleChange} />
      <label for={id}>{text}</label>
      <button>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
