import React from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';

export default function Header() {
  return (
    <header className='p-6 border-b-2 border-lightBlue text-center text-brand text-xl font-bold'>
      <h1>{getCurrentDate()}</h1>
    </header>
  );
}
