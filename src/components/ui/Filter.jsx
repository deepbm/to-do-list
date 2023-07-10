import React from 'react';

export default function Filter({ filters, filter, onUpdate }) {
  const handleFilter = e => {
    onUpdate(e.target.innerHTML);
  };
  return (
    <div className='py-2 text-gray'>
      {filters.map((f, i) => (
        <button
          key={i}
          className='mr-1 p-1 px-5 rounded-full capitalize'
          style={
            f === filter
              ? { color: '#2E00B3', fontWeight: 'bold', backgroundColor: '#f2f2f6' }
              : { color: '#A6A6C3', fontWeight: 'normal', backgroundColor: 'transparent' }
          }
          onClick={handleFilter}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
