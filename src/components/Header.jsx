import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/formatDate';

export default function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 * 60 * 5);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className='mx-6 p-4 pt-8 border-b-2 border-lightGray text-center text-gray font-bold'>
      <h1>{formatDate(date)}</h1>
    </header>
  );
}
