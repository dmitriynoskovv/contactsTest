import React from 'react';
import { ValidatedInput } from './Input/ValidatedInput';

export const ContactForm = ({ id, currentContact, isNew, setOpenModal, setContacts }) => {
  const [contact, setContact] = React.useState(
    isNew
      ? {
          id: `${isNew ? ++id : id}`,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          country: '',
          city: '',
        }
      : currentContact
  );
  return (
    <div className="form">
      <div>
        <ValidatedInput
          validator={(value) => new RegExp(/^[a-zA-Z]+$/).test(value)}
          setValue={(value) =>
            setContact((newContact) => ({
              ...newContact,
              firstName: value,
            }))
          }
          value={contact.firstName}
          label={'First name: '}
          helperText={'Invalid name'}
          placeholder={'First Name'}
          required={true}
        />
      </div>
      <div>
        <ValidatedInput
          validator={(value) => new RegExp(/^[a-zA-Z]+$/).test(value)}
          setValue={(value) =>
            setContact((newContact) => ({
              ...newContact,
              lastName: value,
            }))
          }
          value={contact.lastName}
          label={'Last name: '}
          helperText={'Invalid surname'}
          placeholder={'Last Name'}
          required={true}
        />
      </div>
      <div>
        <ValidatedInput
          validator={(value) => new RegExp(/^\+380\d{3}\d{2}\d{2}\d{2}$/).test(value)}
          setValue={(value) =>
            setContact((newContact) => ({
              ...newContact,
              phoneNumber: value,
            }))
          }
          value={contact.phoneNumber}
          label={'Phone number: '}
          helperText={'Invalid number'}
          placeholder={'Contact number'}
          required={true}
        />
      </div>
      <div>
        <ValidatedInput
          validator={(value) => new RegExp(/^[a-zA-Z]+$/).test(value)}
          setValue={(value) =>
            setContact((newContact) => ({
              ...newContact,
              country: value,
            }))
          }
          value={contact.country}
          label={"Contact's country: "}
          helperText={'Invalid country'}
          placeholder={'Country'}
          required={false}
        />
      </div>
      <div>
        <ValidatedInput
          validator={(value) => new RegExp(/^[a-zA-Z]+$/).test(value)}
          setValue={(value) =>
            setContact((newContact) => ({
              ...newContact,
              city: value,
            }))
          }
          value={contact.city}
          label={"Contact's city: "}
          helperText={'Invalid city'}
          placeholder={'City'}
          required={false}
        />
      </div>
      <div className="btn_form">
        <div>
          {!isNew && (
            <button className="btn" onClick={() => setContact(currentContact)}>
              Roll Back
            </button>
          )}
        </div>
        <button
          className="btn"
          onClick={() => {
            isNew && setOpenModal(false);
            setContacts((contacts) => {
              if (isNew) return [...contacts, contact];
              const withoutCurrent = contacts.filter((c) => c.id !== id);
              return [...withoutCurrent, contact];
            });
            isNew &&
              setContact({
                id: `${isNew ? ++id : id}`,
                firstName: '',
                lastName: '',
                phoneNumber: '',
                country: '',
                city: '',
              });
          }}
        >
          {isNew ? 'Create contact' : 'Submit'}
        </button>
      </div>
    </div>
  );
};
