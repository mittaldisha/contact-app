import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function NotFoundContact() {
  return (
    <div className='text-center text-white text-7xl  flex justify-center items-center m-20'>
      {' '}
      <div className='text-blue-700  m-3 text-7xl'>
        <FaUserCircle />
      </div>
      <div>No Contact Found </div>
    </div>
  );
}

export default NotFoundContact;
