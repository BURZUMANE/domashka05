import React, { useContext } from 'react';
import { ContactListContext } from '../../contexts/ContactListContext';

const SingleContact = ({ contact, text }) => {
  const { deleteContact } = useContext(ContactListContext);
  return (
    <li>
      {/* <li> */}
      <span>
        {contact.firstName} {contact.lastName} :{' '}
      </span>{' '}
      <span>
        {contact.phoneNumber} {text}
      </span>
      <button className="delete-btn" onClick={() => deleteContact(contact.id)}>
        <span className="inner-delete-btn">X</span>
      </button>
    </li>
  );
};
export default SingleContact;
