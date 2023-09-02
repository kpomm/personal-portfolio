import React from 'react';
import contact from '../img/contact-me.svg';
import logo from '../img/logo.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.png';
import email from '../img/gmail-icon-logo.svg';

// contact me page
function ContactMe() {
  return (
    <div className="section" id="contact-me">
      <ul className="columns smaller-columns">
        <li>
          <div className="flex-row">
            <img id="logo-larger" src={logo} alt="" />
            <h2>contact me</h2>
          </div>
          <div id="contact-panels">
            <div className="panel shadow-element">
              <div className="panel-interior">
                <p>Email</p>
                <img src={email} alt="" />
              </div>
              <a href="mailto:katherine.l.pommerening.25@dartmouth.edu">
                katherine.l.pommerening.25@dartmouth.edu
              </a>
            </div>
            <div className="panel shadow-element">
              <div className="panel-interior">
                <p>LinkedIn</p>
                <img src={linkedin} alt="" />
              </div>
              <a href="https://www.linkedin.com/in/kpommerening/">@kpommerening</a>
            </div>
            <div className="panel shadow-element">
              <div className="panel-interior">
                <p>GitHub</p>
                <img src={github} alt="" />
              </div>
              <a href="https://github.com/kpomm">
                @kpomm
              </a>
            </div>
          </div>
        </li>
        <li>
          <img id="contact-img" src={contact} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
