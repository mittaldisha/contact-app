import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import NotFoundContact from './NotFoundContact';
import AddContact from './AddContact';
import useOpenClose from '../hooks/useOpenClose';

function ContactList({ contact }) {
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updatedId, setUpdatedId] = useState('');

  const { isOpen, close, openList } = useOpenClose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
    } catch (error) {
      console.log(error, 'error');
    }
  };
  const updateHandler = (name, email, id) => {
    setUpdateName(name);
    setUpdateEmail(email);
    setUpdatedId(id);
    openList();
    
  };

  return (
    <div>
      <div>
        {isOpen && (
          <AddContact
            isUpdate={true}
            close={close}
            updateName={updateName}
            updateEmail={updateEmail}
            updatedId={updatedId}
          />
        )}
      </div>
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
                <FaEdit onClick={() => updateHandler(contact.name, contact.email, contact.id)} />

                <MdDelete onClick={() => deleteContact(contact.id)} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactList;
