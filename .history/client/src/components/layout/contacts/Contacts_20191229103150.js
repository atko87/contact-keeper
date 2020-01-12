import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contact } = contactContext;

  return (
    <Fragment>
      {contact.map((contact) => (
        <h3>{contact.name}</h3>
      ))}
    </Fragment>
  );
};
