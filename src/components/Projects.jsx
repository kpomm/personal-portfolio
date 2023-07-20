/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Projects() {
  return (
    <div>
      <div className="text-section">
        <h2>current & past projects</h2>
      </div>
      <div className="section columns">
        <div className="half-column-long">
          <h3>current</h3>
          <ul className="project-list">
            <li className="list-item">
              <h4>meU: long-distance couples app</h4>
              <div className="subsection-text">
                <p>
                  in this project, i worked in a team of 6 to create an app for
                  long-distance couples to maintain a strong connection despite
                  the distance. my responsibilities in this project include the
                  landing page, which utilized a weather api and expo location to
                  show users what their partner's city looks like at the moment. i
                  also configued the module that allows users to change their
                  partner's background.
                </p>
                <p>react native, expo, xcode, api, firebase</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="half-column-long">
          <h3>past</h3>
          <ul className="project-list">
            <li className="list-item">
              <h4>basic blog site</h4>
              <p>
                <a href="https://kplab4.onrender.com">site link</a>
              </p>
              <div className="subsection-text">
                <p>
                  in this project i created a site that allows users to post and
                  edit blog posts that include an image or gif, text, title, and
                  tags. i configured the front and backend of the app with react &
                  redux for the frontend, and mongodb for the backend.
                </p>
                <p>react, redux, api, mongodb</p>
              </div>
            </li>
            <li className="list-item">
              <h4>notes app</h4>
              <p>
                <a href="https://kp-lab3.onrender.com">
                  site link; firebase currently unconfigured
                </a>
              </p>
              <div className="subsection-text">
                <p>
                  in this project i used props and useEffect to configure a notes
                  app where users can post, edit, and move notes.
                </p>
                <p>react, firebase</p>
              </div>
            </li>
            <li className="list-item">
              <h4>buzzfeed-style quiz</h4>
              <p>
                <a href="https://kp-lab2cs52.onrender.com">site link</a>
              </p>
              <div className="subsection-text">
                <p>
                  rooted in dartmouth knowledge, this quiz tells you what kind of
                  potato you are based on a variety of preferences on and off
                  campus.
                </p>
                <p>html, css, javascript, json</p>
              </div>
            </li>
            <li className="list-item">
              <h4>basic landing page</h4>
              <p>
                <a href="https://lab1cs52-pomm-me.onrender.com">site link</a>
              </p>
              <div className="subsection-text">
                <p>
                  this assignment required that we find a webpage that we like and
                  replicate the style with our own content.
                </p>
                <p>html, css</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
