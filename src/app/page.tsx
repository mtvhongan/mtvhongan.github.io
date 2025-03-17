import React from 'react';
import Button from '@/components/Button';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const currentDate = formatDate(new Date());

  return (
    <div className="home">
      <h1>Welcome to Next.js with TypeScript</h1>
      <p>Get started by editing src/app/page.tsx</p>
      <p>Today is {currentDate}</p>
      <Button text="Click me" />
      Click me
    </div>
  );
}