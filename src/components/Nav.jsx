/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import resume from '../docs/resume.pdf';

function NavBar() {
  return (
    <nav>
      <div className="nav-stuff">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              id="logo"
            >
              <img id="nav-logo" src={logo} alt="" />
            </NavLink>
          </li>
          <li className="nav-right"><NavLink to="/contact-me">contact me</NavLink></li>
          <li className="nav-right">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>

          </li>
          <li className="nav-right"><NavLink to="/projects">projects</NavLink></li>
          <li className="nav-right"><NavLink to="/photos">photos</NavLink></li>
          <li className="dropdown nav-right">
            <div className="dropbtn">
              apis
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <NavLink className="dropdown-listitem" to="/apod">apod (nasa)</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
