import React from 'react';
import { Contact } from '../components/Contact';
import { ContactsContext } from '../context/contacts';
import { ModalWindow } from '../components/Modal/ModalWindow';
import { ContactForm } from '../components/ContactForm';

export const ContactsList = () => {
  const { contacts, setContacts } = React.useContext(ContactsContext);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      {contacts &&
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onClick={(id) => setContacts(contacts.filter((contact) => contact.id !== id))}
          />
        ))}
      <div className="btn_new_contact">
        <button className="btn " onClick={() => setOpenModal(true)}>
          Add new contact
        </button>
      </div>
      <ModalWindow
        children={
          <ContactForm
            id={contacts[contacts.length - 1]?.id || '0'}
            isNew={true}
            setOpenModal={setOpenModal}
            setContacts={setContacts}
          />
        }
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
