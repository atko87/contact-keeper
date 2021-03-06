import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contact } = contactContext;

  return (
    <Fragment>
      {contact.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
