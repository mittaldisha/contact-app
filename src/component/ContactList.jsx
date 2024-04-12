import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import NotFoundContact from './NotFoundContact';
import AddContact from './AddContact';
import useOpenClose from '../hooks/useOpenClose';
import DeleteModal from './DeleteModal';

function ContactList({ contact }) {
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updatedId, setUpdatedId] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { isOpen, close, openList } = useOpenClose();

  const updateHandler = (name, email, id) => {
    setUpdateName(name);
    setUpdateEmail(email);
    setUpdatedId(id);
    openList();
    
  };
  const deleteHandler = (id) => {
    setDeleteModalOpen(true);
    setUpdatedId(id);
  };
  const deleleModalClose = () => {
    setDeleteModalOpen(false);
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
        {deleteModalOpen && (
          <DeleteModal
            contact={contact}
            deleteModalClose={deleleModalClose}
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

                <MdDelete onClick={() => deleteHandler(contact.id)} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactList;
