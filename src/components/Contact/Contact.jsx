import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Message from '../Message/Message';
import Questions from '../Questions/Questions';

function Contact() {
  return (
    <main className='main'>
      <ContactUs />
      <Message />
      <Questions />
    </main>
  );
}

export default Contact;
