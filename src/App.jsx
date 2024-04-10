import { useEffect, useState } from 'react';
import ContactList from './component/ContactList.jsx';
import Header from './component/Header.jsx';
import Input from './component/Input.jsx';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/Firebase.js';

function App() {
  const [contact, setContact] = useState([]);

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
      <Input FilterContact={FilterContact} />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
