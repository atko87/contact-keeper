import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react=transition=group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contact, filtered } = contactContext;
  if (Contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} className='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contact.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} className='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
