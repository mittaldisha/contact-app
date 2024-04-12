import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { ImCross } from 'react-icons/im';

function DeleteModal({  deleteModalClose, updatedId }) {
   


  const deleteContact = async () => {
    try {
      await deleteDoc(doc(db, 'contacts', updatedId));
      deleteModalClose(); 
    } catch (error) {
      console.log(error, 'hkelo');
    }
  };
  
  return (
    <>
      <div className='flex  justify-center relative z-30'>
        <div className='bg-gray-300 h-[180px] w-[520px] rounded-lg  '>
          <div className='  flex justify-end text-blue-600'>
            <ImCross className=' mt-3 mr-3 text-xl ' onClick={deleteModalClose} />
          </div>
          <p className='text-3xl p-3 '>Are you sure you want to delete ?</p>
          <div className='flex place-content-end  mx-[20px] my-[20px]'>
            <button
              className='bg-blue-700 mr-5 text-2xl px-5 py-1 rounded-2xl text-gray-800 hover:bg-blue-600 border-none'
              onClick={() => deleteContact(updatedId)}
            >
              Delete
            </button>
            <button
              className='bg-blue-700 mr-5 text-2xl px-5 py-1 rounded-2xl text-gray-800 hover:bg-blue-600 border-none'
              onClick={() => deleteModalClose()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
       <div className='absolute backdrop-blur top-0 h-screen w-screen place-items-center grid '  />
    </>
  );
}

export default DeleteModal;
