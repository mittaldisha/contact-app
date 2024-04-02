import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import NotFoundContact from './NotFoundContact';

function ContactList({ contact, openList }) {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div>
      {contact.length <= 0 ? (
        <NotFoundContact />
      ) : (
        contact.map((contact) => (
          <div className='bg-yellow-200 my-3 flex w-full  p-3 ' key={contact}>
            <FaRegUserCircle className='text-5xl text-green-800 m-2' />
            <div className='m-2 text-xl'>
              <h1>{contact.name}</h1>
              <p>{contact.email}</p>
            </div>
            <div className='flex text-4xl items-end text-green-800 w-full justify-end m-7 cursor-pointer'>
              <FaEdit onClick={openList} />
              <MdDelete onClick={() => deleteContact(contact.id)} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;
