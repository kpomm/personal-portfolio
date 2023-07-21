import React from 'react';
import contact from '../img/contact-me.svg';
import logo from '../img/logo.svg';

// contact me page
function ContactMe() {
  return (
    <div className="section" id="contact-me">
      <ul className="columns smaller-columns">
        <li className="half-column-long">
          <img id="logo-larger" src={logo} alt="" />
          <h2>contact me</h2>
          <div id="contact-panels">
            <a href="https://www.linkedin.com/in/kpommerening/">
              <button type="submit">LinkedIn</button>
            </a>
            <a href="mailto:katherine.l.pommerening.25@dartmouth.edu">
              <button type="submit">Email</button>
            </a>
            <a href="https://github.com/kpomm">
              <button type="submit">GitHub</button>
            </a>
          </div>
          <img src={contact} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
