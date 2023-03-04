import React from 'react';
import Paper from '@mui/material/Paper';
import '../Styles/Contact.css'; // import CSS file for Contact component styling


function Contact() {
  return (
    <div className="contact-container page-content">
      <Paper elevation={3} variant='outlined' sx={{backgroundColor: '#737373', display:'flex', flexDirection: 'column', borderRadius: 5}}>
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/xrgvkqzd" method='POST'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </Paper>
    </div>
  );
}

export default Contact;
