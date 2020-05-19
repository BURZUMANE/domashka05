import React, { useState, useContext } from 'react';
import { ContactListContext } from '../../contexts/ContactListContext';
const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
};
const ContactForm = () => {
  // const [contact, setContact] = useState(initialState);
  const [first, setFirst] = useState(initialState.firstName);
  const [last, setLast] = useState(initialState.lastName);
  const [number, setNumber] = useState(initialState.phoneNumber);

  const { addContact } = useContext(ContactListContext);
  // const { firstName, lastName, phoneNumber } = contact;
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      firstName: first,
      lastName: last,
      phoneNumber: number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
    };
    setFirst('');
    setLast('');
    setNumber('');
    addContact(contact);
  };

  const handleChange = (e) => {
    let targetName = e.target.name;
    if (targetName === 'firstName') {
      setFirst(e.target.value);
    } else if (targetName === 'lastName') {
      setLast(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  return (
    <form
      className="section"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <label htmlFor={'firstName'}>First name</label>
      <input
        id={'firstName'}
        type="text"
        value={first}
        onChange={handleChange}
        name="firstName"
        required
      />
      <label htmlFor={'lastName'}>Last name</label>
      <input
        id={'lastName'}
        type="text"
        value={last}
        onChange={handleChange}
        name="lastName"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        id={'number'}
        type="number"
        value={number}
        onChange={handleChange}
        name="phoneNumber"
        maxLength={10}
        required
      />
      <button className="submit-btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// import React, { Component } from 'react';
// import axios from 'axios';
// import SubmitButton from './submitButton/SubmitButton';

// const postContact = async (contact) => {
//   const fetchResult = await axios.post(
//     'https://free-cookies-for-my-niggas.firebaseio.com/contacts.json',
//     contact
//   );
//   console.log(fetchResult);
// };

// const initialState = {
//   firstName: '',
//   lastName: '',
//   phoneNumber: '',
// };

// class ContactForm extends Component {
//   state = { ...initialState };

//   handleChange = (evt) => {
//     // console.log(evt.target.value);
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     postContact({ ...this.state });
//     this.setState({ ...initialState });
//     // console.log(contact);
//   };

//   render() {
//     const { firstName, lastName, phoneNumber } = this.state;
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
//       >
//         <label htmlFor={'firstName'}>First name</label>
//         <input
//           id={'firstName'}
//           type="text"
//           value={firstName}
//           onChange={this.handleChange}
//           name="firstName"
//         />
//         <label htmlFor={'lastName'}>Last name</label>
//         <input
//           id={'lastName'}
//           type="text"
//           value={lastName}
//           onChange={this.handleChange}
//           name="lastName"
//         />
//         <label htmlFor="number">Number</label>
//         <input
//           id={'number'}
//           type="number"
//           value={phoneNumber}
//           onChange={this.handleChange}
//           name="phoneNumber"
//         />
//         <SubmitButton />
//       </form>
//     );
//   }
// }

// export default ContactForm;
