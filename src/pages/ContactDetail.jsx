import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ContactsContext } from '../context/contacts';
import { NotFound } from './NotFound';
import { ContactForm } from '../components/ContactForm';

export const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = React.useState();
  const { contacts, setContacts } = React.useContext(ContactsContext);

  React.useEffect(() => {
    setContact(contacts.find((contact) => contact.id === id));
  }, [contacts, id]);

  return contact ? (
    <>
      <Link className="link" to="/">
        <button className="btn">Back</button>
      </Link>
      <div className="detail_form">
        <ContactForm id={id} currentContact={contact} isNew={false} setContacts={setContacts} />
      </div>
    </>
  ) : (
    <NotFound />
  );
};
