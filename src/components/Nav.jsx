/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <p>test</p>
            </NavLink>
          </li>
          <li className="nav-right"><NavLink to="/contact-me">contact me</NavLink></li>
          <li className="nav-right"><NavLink to="/projects">projects</NavLink></li>
          <li className="nav-right"><NavLink to="/photos">photos</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
