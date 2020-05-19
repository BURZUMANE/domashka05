import React, { useContext } from 'react';
import { ContactListContext } from '../../contexts/ContactListContext';

const Filter = () => {
  const { filterContacts } = useContext(ContactListContext);
  const handleChange = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <div className="section">
      <p>Find contacts</p>
      <input name="filter" onChange={handleChange}></input>
    </div>
  );
};

export default Filter;
