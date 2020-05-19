import React from 'react';
import ContactListContextProvider from './contexts/ContactListContext';
// import ContactList from './components/contactList/ContactList';
// import '../App.css';
import './App.css';
import PhoneBook from './components/phoneBook/PhoneBook';
function App() {
  return (
    <ContactListContextProvider>
      <PhoneBook />
    </ContactListContextProvider>
  );
}

export default App;
