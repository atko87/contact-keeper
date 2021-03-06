import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react=transition=group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contact, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (Contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition key={contact._id} timeout={500} className='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contact.map((contact) => (
                <CSSTransition key={contact._id} timeout={500} className='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
