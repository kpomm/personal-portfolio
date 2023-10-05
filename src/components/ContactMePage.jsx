import React from 'react';
import ContactMe from './ContactMe';
import contactGraphic from '../img/contactGraphic.svg'; // Tell webpack this JS file uses this image
import Divider from './Divider';

function ContactMePage() {
  return (
    <div id="contact-me-fullscreen">
      <img src={contactGraphic} alt="" />
      reach out!
      <Divider />
      <ContactMe />
    </div>
  );
}

export default ContactMePage;
