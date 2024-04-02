import React from 'react';

function Header() {
  return (
    <header>
      <div className='bg-green-600  text-white   flex  p-2 rounded-xl'>
        <img src='/images/logo1.avif' alt='logo' height={100} width={100} />
        <div className='m-auto text-bold text-5xl'> Contact App</div>
      </div>
    </header>
  );
}

export default Header;
