import React from 'react';

export default function Filter({ filters, onUpdate }) {
  const handleFilter = e => {
    onUpdate(e.target.innerHTML);
  };
  return (
    <div className='py-2 text-gray'>
      {filters.map(filter => (
        <button
          className='mr-1 p-1 px-5 rounded-full capitalize'
          style={
            filter === 'all'
              ? { color: '#2E00B3', fontWeight: 'bold', backgroundColor: '#f2f2f6' }
              : { color: '#A6A6C3', fontWeight: 'normal', backgroundColor: 'transparent' }
          }
          onClick={handleFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
