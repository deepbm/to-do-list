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
    <li>
      <input type='checkbox' id={id} name='text' onChange={handleChange} />
      <label for={id}>{text}</label>
      <button onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
