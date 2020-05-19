import React, { Component } from 'react';
import axios from 'axios';
import SingleContact from '../singleContact/SingleContact';
// import ContactForm from '../contactForm/ContactForm';

const getContacts = async () => {
  try {
    const fetchResult = await axios.get(
      'https://free-cookies-for-my-niggas.firebaseio.com/contacts.json'
    );

    return transformFetchResult(fetchResult.data);
  } catch (error) {
    console.log(error).map();
  }
};

const transformFetchResult = (data) => {
  const transformedData = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return transformedData;
};

class ContactList extends Component {
  state = { contacts: [] };
  componentDidMount() {
    this.updateStae();
  }

  updateStae = async () => {
    const contacts = await getContacts();
    this.setState({ contacts });
  };
  render() {
    const { contacts } = this.state;

    return (
      <div
        style={{
          width: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0 auto',
          outline: '1px solid teal',
        }}
      >
        {/* <ContactForm /> */}
        <ul
          style={{
            boxSizing: 'border-box',
            listStyle: 'none',
            width: '200px',
            padding: 0,
            textAlign: 'left',
          }}
        >
          {contacts.map((contact) => {
            return (
              <SingleContact
                key={contact.id}
                contact={contact}
                updateStae={this.updateStae}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
