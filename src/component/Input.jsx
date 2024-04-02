import React from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';

function Input({ openList,FilterContact }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center pl-2'>
        <IoSearch className='text-4xl text-white relative left-20' />
        <input
          className=' text-xl p-2.5 rounded-xl m-10 pl-12  text-white bg-transparent border-white border  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
          name='search'
          type='search'
          size='80'
          onChange={FilterContact}
          placeholder=' Search Contact'
        />
      </div>
      <div className='text-white  text-7xl cursor-pointer'>
        <IoAddCircleSharp onClick={openList} />
      </div>
    </div>
  );
}

export default Input;
