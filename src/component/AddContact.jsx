import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { db } from '../config/Firebase';

function AddContact({ isOpen, close, isUpdate, contact, nameProps, emailProps }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // async function updateRef(contact, id) {
  //   try {
  //     await updateDoc(doc(db, 'contacts', id), {
  //       name: contact.name,
  //       email: contact.email
  //     });
  //     console.log("helllo update")
  //   } catch (error) {
  //     console.log(error, 'hiii');
  //   }
  // }

  async function docRef() {
    if (name.length <= 0 || !email.includes('@')) {
      alert('Please enter Valid Inputs!');
    } else {
      // if (isUpdate) {
      //   // await updateRef(contact, contact.id);
      //   console.log('update working');
      // } else {
      try {
        const data = await addDoc(collection(db, 'contacts'), {
          name: name,
          email: email
        });
        console.log('add working: ', data.id);
        close();
        setName('');
        setEmail('');
      } catch (error) {
        console.log(error);
      }
      // }
    }
  }

  return (
    <>
      {isOpen && (
        <>
          <div className='h-80 w-80 z-50 relative bg-gray-300 p-4 m-auto '>
            <div className='m-4  flex justify-end text-blue-600'>
              <ImCross className='  text-xl ' onClick={close} />
            </div>
            <div>
              {' '}
              <label>Name:</label>
              <br />
              <input
                type='text'
                className='bg-gray-600 p-1 text-white rounded-lg text-xl w-full  border-none '
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                type='email'
                className='bg-gray-600 p-1 text-white rounded-lg text-xl w-full  border-none '
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className='self-end bg-blue-600 rounded-md p-1  
            cursor-pointer relative top-10 left-20 hover:bg-blue-700 text-xl text-white '
              onClick={docRef}
            >
              {!isUpdate ? 'update' : 'Add'} Contact
            </button>
          </div>
          <div className='absolute backdrop-blur top-0 h-screen w-screen  ' onClick={close} />
        </>
      )}
    </>
  );
}

export default AddContact;
