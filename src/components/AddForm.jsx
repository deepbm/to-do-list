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
    } else if (addText.length > 25) {
      alert('25자 이내로 작성해주세요.');
      return;
    }
    const newTodo = { id: uuidv4(), text, status: 'active' };
    onAdd(newTodo);
    setText('');
  };

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        className='grow p-2 bg-lightBlue outline-none border-slate-400 text-lg'
        type='text'
        name='text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='px-2.5 bg-brand rounded text-white font-bold' type='submit'>
        등록
      </button>
    </form>
  );
}
