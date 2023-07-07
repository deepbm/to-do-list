import React from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';

export default function Header() {
  return (
    <header>
      <h1>{getCurrentDate()}</h1>
    </header>
  );
}
