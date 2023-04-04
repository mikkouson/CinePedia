import React from 'react';

const Navigation = () => {
  return (
    <nav className='flex h-16 px-8 justify-between items-center shadow-lg'>
      <div className='w-full max-w-5xl mx-auto flex items-center justify-between'>
        <h2 className='text-2xl font-mono'>CinePedia</h2>
        <input className='w-64 text-1xl h-9 bg-gray-200 rounded-full p-2 px-5 outline-transparent' type='text' placeholder='Search...' />
      </div>
    </nav>
  );
};

export default Navigation;
