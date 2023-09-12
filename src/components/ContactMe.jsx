import React from 'react';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.png';
import email from '../img/gmail-icon-logo.svg';

// contact me page
function ContactMe() {
  return (
    <div className="section" id="contact-me">
      <div className="glass-element">
        <div>
          <h2>contact me</h2>
        </div>
        <div id="contact-panels">
          <div className="panel">
            <div className="panel-interior">
              <p>Email</p>
              <img src={email} alt="" />
            </div>
            <a href="mailto:katherine.l.pommerening.25@dartmouth.edu">
              katherine.l.pommerening.25@dartmouth.edu
            </a>
          </div>
          <div className="panel">
            <div className="panel-interior">
              <p>LinkedIn</p>
              <img src={linkedin} alt="" />
            </div>
            <a href="https://www.linkedin.com/in/kpommerening/">@kpommerening</a>
          </div>
          <div className="panel">
            <div className="panel-interior">
              <p>GitHub</p>
              <img src={github} alt="" />
            </div>
            <a href="https://github.com/kpomm">
              @kpomm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
