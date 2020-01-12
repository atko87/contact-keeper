import React, { useState } from "react";

export const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  return (
    <form>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='type'
        name='type'
        value={type}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactForm;
