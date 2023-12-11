/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo2 from '../img/logo2.svg';
import resume from '../docs/KatherinePommerening_Resume_2023Fall.pdf';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-stuff">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                id="logo"
              >
                <img id="nav-logo" src={logo2} alt="" />
              </NavLink>
            </li>
            <motion.div
              className="nav-button nav-right"
              whileHover={{
                scale: 1.15,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </motion.div>
            <li className="nav-right">
              <NavLink
                to="/contact-me"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                / contact-me
              </NavLink>

            </li>
            <li className="nav-right">
              <NavLink
                to="/experience"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                / experience
              </NavLink>

            </li>
            <li className="nav-right">
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                / projects
              </NavLink>

            </li>
            <li className="nav-right">
              <NavLink
                to="/photos"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                / photos
              </NavLink>

            </li>
            {/* <li className="dropdown nav-right">
            <div className="dropbtn">
              apis i like
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <NavLink className="dropdown-listitem" to="/apod">apod (nasa)</NavLink>
            </div>
          </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
