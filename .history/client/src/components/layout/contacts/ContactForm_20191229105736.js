import React, { useState } from "react";

export const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  return <div></div>;
};

export default ContactForm;
