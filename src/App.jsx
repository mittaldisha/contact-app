import { useEffect, useState } from 'react';
import AddContact from './component/AddContact.jsx';
import ContactList from './component/ContactList.jsx';
import Header from './component/Header.jsx';
import Input from './component/Input.jsx';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/Firebase.js';
import useOpenClose from './hooks/useOpenClose.jsx';

function App() {
  const [contact, setContact] = useState([]);
  const { isOpen, close, openList } = useOpenClose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const collectionItems = collection(db, 'contacts');

        onSnapshot(collectionItems, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });

          setContact(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  const FilterContact = (e) => {
    const value = e.target.value;
    const collectionItems = collection(db, 'contacts');

    onSnapshot(collectionItems, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      const FilteredContact = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(FilteredContact);
      return FilteredContact;
    });
  };

  return (
    <div className='bg-gray-800'>
      <Header />
      <Input openList={openList} FilterContact={FilterContact} />
      <AddContact isOpen={isOpen} close={close} contact={contact} isUpdate />
      <ContactList contact={contact} openList={openList} />
    </div>
  );
}

export default App;
