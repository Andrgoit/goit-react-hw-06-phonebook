import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { StyledMain, StyledContainer } from './PhoneBook.styled';

const KEY = 'contacts';

const defaultContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY)) ?? defaultContact;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = data => {
    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForDublicate) {
      return toast.info(`${data.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const searchContact = event => {
    const { value } = event.target;

    setFilter(value);
  };

  let normalizeFilter = filter.toLowerCase();

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledMain>
        <StyledContainer>
          <PhoneBookSection title="Phonebook">
            <ContactForm onSubmit={addContacts} />
          </PhoneBookSection>
          {contacts.length >= 1 && (
            <>
              <PhoneBookSection title="Search...">
                <Filter onChange={searchContact} filter={filter} />
              </PhoneBookSection>
              <PhoneBookSection title="Contacts">
                <Contacts
                  contacts={filteredContacts}
                  onClick={deleteContacts}
                />
              </PhoneBookSection>
            </>
          )}
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default PhoneBook;
