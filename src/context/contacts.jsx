import React from 'react';

export const contactsState = [
  {
    id: '1',
    firstName: 'Vasiliy',
    lastName: 'Ivanov',
    phoneNumber: '+380950000000',
    country: 'Ukraine',
    city: 'Kyiv',
  },
  {
    id: '2',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    phoneNumber: '+380630000000',
    country: 'Ukraine',
    city: 'Kyiv',
  },
  {
    id: '3',
    firstName: 'Jaroslav',
    lastName: 'Ostapenco',
    phoneNumber: '+380500000000',
    country: 'Ukraine',
    city: 'Kyiv',
  },
  {
    id: '4',
    firstName: 'Svyatoslav',
    lastName: 'Koval',
    phoneNumber: '+380951110011',
    country: 'Ukraine',
    city: 'Kyiv',
  },
  {
    id: '5',
    firstName: 'Ludmila',
    lastName: 'Petrova',
    phoneNumber: '+380951110000',
    country: 'Ukraine',
    city: 'Kyiv',
  },
];

export const ContactsContext = React.createContext(null);
