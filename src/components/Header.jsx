import React from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';

export default function Header() {
  return (
    <header className='mx-6 p-4 pt-8 border-b-2 border-lightGray text-center text-gray font-bold'>
      <h1>{getCurrentDate()}</h1>
    </header>
  );
}
