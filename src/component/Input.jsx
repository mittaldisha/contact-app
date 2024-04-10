import React from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import useOpenClose from '../hooks/useOpenClose';
import AddContact from './AddContact';

function Input({ FilterContact }) {
  const { isOpen, close, openList } = useOpenClose();

  return (
    <div>
      <div className='flex items-center justify-center  relative'>
        <div className='flex items-center pl-2'>
          <IoSearch className='text-4xl text-white relative left-20 ' />
          <input
            className=' text-xl p-2.5 rounded-xl m-10 pl-12  text-white   bg-transparent border-white border  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            name='search'
            type='search'
            size={50}
            onChange={FilterContact}
            placeholder=' Search Contact'
          />
        </div>
        <div className='text-white  text-7xl cursor-pointer'>
          <IoAddCircleSharp onClick={openList} />
        </div>
      </div>
      <div>{isOpen && <AddContact isUpdate={false} close={close} />}</div>
    </div>
  );
}

export default Input;
