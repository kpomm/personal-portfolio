/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Landing() {
  return (
    <div>
      <div className="section" id="landing">
        <ul className="columns">
          <li className="half-element">
            <img id="profile-pic" src="img/pfp.jpg" alt="" />
            <h1>kpomm</h1>
            <p>welcome to my website!</p>
          </li>
          <li className="half-element align-right">
            <h2>
              <a href="#physics">physics</a>
            </h2>
            <h2>
              <a href="#programming">programming</a>
            </h2>
            <h2>
              <a href="#photography">photography</a>
            </h2>
            <h2>
              <a href="#design">design</a>
            </h2>
          </li>
        </ul>
        {/* <i
          className="fa-solid fa-angle-down fa-2xl centered-icon"
          style="color: #4b4453"
        /> */}
      </div>

      <div className="section" id="physics">
        <ul className="columns smaller-columns">
          <li className="half-element align-left">
            <h2>physics</h2>
            <p>
              as a researcher in dartmouth's physics department, i'm very
              passionate about how the world around me work, especially space.
              this past term, i had the opportunity to conduct research at the
              South African Large Telescope, where i stayed for a week. i would
              stay up all night and sleep during the day.
            </p>
            <p>
              <a href="https://sites.dartmouth.edu/lynch-rocket-lab/">my research lab
              </a>
            </p>
            <p>
              <a
                href="https://physics.dartmouth.edu/news/2023/02/winter-2023-astronomy-fsp"
              >my time in cape town
              </a>
            </p>
          </li>
          <li className="half-element rounded-element shadow-element">
            <img className="img-cover" src="img/cptwn.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="section" id="programming">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element shadow-element">
            <img className="img-contain" src="img/programming.svg" alt="" />
          </li>
          <li className="half-element align-left">
            <h2>programming</h2>
            <p>
              i am a dartmouth 25 majoring in computer science modified with
              physics. my interests in computer science include software
              engineering, frontend development, backend development, and
              specifically react. i've worked with apis, react native, and a few
              other languages. i have a collection of projects, both independent
              and from the cs52 (full-stack web development) course at dartmouth
              that i am very proud of!
            </p>
            <p>
              <a href="projects.html">see my projects!</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="section" id="photography">
        <ul className="columns smaller-columns">
          <li className="half-element align-left">
            <h2>photography</h2>
            <p>
              i've been taking pictures since 2019. over my gap year before
              college, i worked a lot of freelance and took a roadtrip that
              culminated in a lot of awesome pictures. i still take a lot of
              pictures but now work primarily in 35mm and 120mm film. i still
              carry a small digital camera on me, and primarily focus on street
              photography!
            </p>
            <p>
              <a href="photos.html">see my photos</a>
            </p>
          </li>
          <li className="half-element rounded-element shadow-element">
            <img href="photos.html" className="img-cover" src="img/photography.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="section" id="design">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element shadow-element">
            <img className="img-contain" src="img/design.svg" alt="" />
          </li>
          <li className="half-element align-left">
            <h2>design</h2>
            <p>
              more recently, i have explored my interest in ui/ux design. taking
              cs52 (full-stack web development) at dartmouth allowed me to explore
              my design interests in a programming setting, but this term i am
              taking a ui/ux course where i can hone my interest in design through
              a series of fast-paced projects.
            </p>
            <p>
              <a
                href="https://www.figma.com/files/user/1112504140237920766?fuid=1112504140237920766"
              >check out my figma
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="section" id="contact-me">
        <ul className="columns smaller-columns">
          <li className="half-column-long">
            <h2>contact me</h2>
            <div id="contact-panels">
              <p>
                <a href="google.com">LinkedIn</a>
              </p>
              <p>
                <a href="google.com">Email</a>
              </p>
              <p>
                <a href="google.com">GitHub</a>
              </p>
              <p>
                <a href="google.com">Email</a>
              </p>
            </div>
            <img src="img/contact-me.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;
