import React from 'react';
import ContactMe from './ContactMe';
import contactGraphic from '../img/contactGraphic.svg'; // Tell webpack this JS file uses this image

function ContactMePage() {
  return (
    <div id="contact-me-fullscreen">
      <img src={contactGraphic} alt="" />
      reach out!
      <ContactMe />
    </div>
  );
}

export default ContactMePage;
