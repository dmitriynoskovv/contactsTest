import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = ({ contact, onClick }) => {
  return (
    <section className="contact">
      <Link className="link" to={`/${contact.id}`}>
        <aside>
          <strong>
            {contact.firstName} {contact.lastName}
          </strong>
          <div>{contact.phoneNumber}</div>
        </aside>
      </Link>
      <aside display="flex">
        <button className="btn" onClick={() => onClick(contact.id)}>
          Delete
        </button>
      </aside>
    </section>
  );
};
