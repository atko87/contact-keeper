import React, { userReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = (props) => {
  const initialState = {
    const: [
      {
        id: 1,
        name: "Vlad Putin",
        email: "vlad@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = userReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id) => {
    contact.id = uuid.v4();
    dispatch({ type: DELETE_CONTACT, payload: payload });
  };
  // Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
