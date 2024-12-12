import React, { useState } from 'react'
import { ContactFormContainer } from './componentStyles'
import { ContactFormType, FormInformation } from '../../../utils/types/contactFormTypes';

const ContactForm = ({ content }: { content: ContactFormType }) => {
  if (content == null)
    return (<div>ContactForm: content null</div>)
  const { title, firstName, lastName, emailAddress, phoneNumber } = content;
  
  const [formState, setFormState] = useState<FormInformation>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the submission logic here, sending to an API
    alert("Feature in development");
  };

  return (
    <ContactFormContainer>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {!firstName && (
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleInputChange}
            />
          </label>
        )}
        {!lastName && (
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleInputChange}
            />
          </label>
        )}
        {!emailAddress && (
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </label>
        )}
        {!phoneNumber && (
          <label>
            Phone number
            <input
              type="tel"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
        )}
        <label>
          Message
          <textarea
            name="message"
            value={formState.message}
            onChange={handleInputChange}
          />
        </label>
        
        <button type="submit">Submit</button>

      </form>
    </ContactFormContainer>
  )

}

export default ContactForm;