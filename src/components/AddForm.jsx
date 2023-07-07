import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), text, status: 'active' };
    onAdd(newTodo);
    setText('');
  };

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        className='grow py-1 px-2 bg-lightBlue outline-none border-slate-400'
        type='text'
        name='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='px-2 bg-brand rounded text-white' type='submit'>
        Add
      </button>
    </form>
  );
}
