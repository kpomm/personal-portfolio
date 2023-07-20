import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="nav-stuff">
        <ul className="nav-list">
          <li>
            <NavLink to="/"
              id="logo"
            ><i className="fa-solid fa-k fa-2xl" />
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
