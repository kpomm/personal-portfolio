import React from 'react';
import { LinkedinLogo, GithubLogo, EnvelopeOpen } from '@phosphor-icons/react';
// import github from '../img/github.svg';
// import linkedin from '../img/linkedin.png';
// import email from '../img/gmail-icon-logo.svg';
// import Divider from './Divider';

// contact me page
function ContactMe() {
  const iconStyle = { marginRight: '5px' };
  return (
    <div>
      <div className="section" id="contact-me">
        <div className="glass-element">
          <div>
            <h2>contact me</h2>
          </div>
          <div id="contact-panels">
            <div className="panel">
              <a href="mailto:katherine.l.pommerening.25@dartmouth.edu" target="_blank" rel="noopener noreferrer">
                <EnvelopeOpen size={50} style={iconStyle} className="accent-color" />
              </a>
            </div>
            <div className="panel">
              <a href="https://www.linkedin.com/in/kpommerening/" target="_blank" rel="noopener noreferrer">
                {' '}
                <LinkedinLogo size={50} style={iconStyle} className="accent-color" />
              </a>
            </div>
            <div className="panel">
              <a href="https://github.com/kpomm" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={50} style={iconStyle} className="accent-color" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactMe;
