import React, { useContext } from 'react';
import { ContactListContext } from '../../contexts/ContactListContext';
import SingleContact from '../singleContact/SingleContact';
import ContactForm from '../contactForm/ContactForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Filter from '../filter/Filter';
// import slideTransition from '../../transitions/slide.module.css';
import popTransition from '../../transitions/pop.module.css';

const PhoneBook = () => {
  const { replicatedContacts } = useContext(ContactListContext);
  return (
    <div className="container">
      <h1 className="logo">PhoneBook</h1>
      <ContactForm />
      <Filter></Filter>
      <TransitionGroup component="ul">
        {replicatedContacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            unmountOnExit
            classNames={popTransition}
          >
            <SingleContact contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PhoneBook;
