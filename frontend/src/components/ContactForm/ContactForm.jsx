/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to a server)
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>

      <fieldset>

        <legend>Feedback</legend>

        <div className='form-card'>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            value={formData.tel}
            onChange={handleChange}
            placeholder='Phone' />
        </div>

        <div className='form-card'>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </div>

        <div className='form-card'>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            required
          />
        </div>

        <div className="contact-btn">
          <button type="submit" className='form-btn'>Send</button>
        </div>

      </fieldset>
    </form>
  );
};

export default ContactForm;
