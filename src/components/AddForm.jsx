import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const addText = text.trim();
    if (addText.length === 0) {
      alert('글자수를 확인해주세요.');
      setText('');
      return;
    } else if (addText.length > 100) {
      alert('100자 이내로 작성해주세요.');
      return;
    }
    const newTodo = { id: uuidv4(), text, status: 'active' };
    onAdd(newTodo);
    setText('');
  };

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        className='grow p-2 px-4 bg-lightGray outline-none border-slate-400 text-lg'
        type='text'
        name='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='todos...'
      />
      <button className='px-4 bg-brand text-white font-bold break-keep' type='submit'>
        Add
      </button>
    </form>
  );
}
