import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);


  return( 
  <form>
      <input ref={text} type="text" /></input>
  </form>
  )
};
