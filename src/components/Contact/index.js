import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const sendForm = () => {
    const params = {
      name: name,
      email: email,
      message: message,
    };

    return emailjs.send('XH6ssfwJtcaq4tM1c', 'template_aosztus', params, 'service_c71nlw3')
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Handle successful form submission here
      })
      .catch((error) => {
        console.log('Error sending email:', error);
        // Handle error sending email here
      });
  };

  return (
    <div className="container contact-page">
      <div className="text-reg">
        <h1>Contact Me</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;