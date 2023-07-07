import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function ToDoListItem({ todo: { id, text, status } }) {
  return (
    <li>
      <input type='checkbox' id={id} name='text' />
      <label for={id}>{text}</label>
      <button>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
