import React from 'react';

export default function Bar({ bar }) {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-full h-1.5 bg-lightGray rounded-md'>
        <div
          className='h-1.5 rounded-md bg-brand transition-all ease-in-out duration-300'
          style={{ width: `${bar}%` }}
        ></div>
      </div>
      <span className='text-sm text-brand font-bold'>{Math.round(bar)}%</span>
    </div>
  );
}
