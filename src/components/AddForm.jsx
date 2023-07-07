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
    <form onSubmit={handleSubmit}>
      <input type='text' name='text' value={text} onChange={e => setText(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
}
