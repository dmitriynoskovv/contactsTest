import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ContactsContext, contactsState } from './context/contacts';
import { ContactDetail } from './pages/ContactDetail';
import { ContactsList } from './pages/ContactsList';
import { NotFound } from './pages/NotFound';

export const App = () => {
  const [contacts, setContacts] = React.useState(contactsState);
  return (
    <>
      <ContactsContext.Provider value={{ contacts, setContacts }}>
        <div className="app">
          <section className="general">
            <header>
              <h2> Contacts list </h2>
            </header>
            <Routes>
              <Route path="" element={<ContactsList />} />
              <Route path="/:id" element={<ContactDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <footer>
              <center>
                <h4>2022</h4>
              </center>
            </footer>
          </section>
        </div>
      </ContactsContext.Provider>
    </>
  );
};
