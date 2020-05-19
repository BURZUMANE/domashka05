import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContactListContext = createContext();

const transformFetchResult = (data) => {
  const transformedData = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return transformedData.reverse();
};

const ContactListContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);
  const [replicatedContacts, setReplicates] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios(
        'https://free-cookies-for-my-niggas.firebaseio.com/contacts.json'
      );
      setContacts(transformFetchResult(result.data));
      setReplicates(transformFetchResult(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  const postContact = async (contact) => {
    await axios.post(
      'https://free-cookies-for-my-niggas.firebaseio.com/contacts.json',
      contact
    );
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add contact
  const addContact = (contact) => {
    postContact(contact);
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(
        `https://free-cookies-for-my-niggas.firebaseio.com/contacts/${id}.json`
      );
    } catch (error) {
      console.log(error);
    } finally {
      fetchData();
    }
  };

  // Filter contacts
  const filterContacts = async (filter) => {
    const newContacts = [...contacts].filter(
      (item) =>
        item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filter.toLowerCase())
    );
    setReplicates(newContacts);
  };

  return (
    <ContactListContext.Provider
      value={{
        contacts,
        replicatedContacts,
        addContact,
        deleteContact,
        filterContacts,
      }}
    >
      {props.children}
    </ContactListContext.Provider>
  );
};

export default ContactListContextProvider;
