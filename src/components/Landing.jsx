/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import pfp from '../img/pfp.jpg';
import cptwn from '../img/cptwn.jpg';
import programming from '../img/programming.svg';
import photography from '../img/photography.jpg';
import design from '../img/design.svg';
import ContactMe from './ContactMe';

function Landing() {
  return (
    <div>
      <div className="section" id="landing">
        <ul className="columns">
          <li className="half-element">
            <img id="profile-pic" src={pfp} alt="" />
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
        <IoIosArrowDown className="centered-icon" />
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
              <a href="https://sites.dartmouth.edu/lynch-rocket-lab/">
                my research lab
              </a>
            </p>
            <p>
              <a
                href="https://physics.dartmouth.edu/news/2023/02/winter-2023-astronomy-fsp"
              >
                my time in cape town
              </a>
            </p>
          </li>
          <li className="half-element rounded-element shadow-element">
            <img className="img-cover" src={cptwn} alt="" />
          </li>
        </ul>
      </div>
      <div className="section" id="programming">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element shadow-element">
            <img className="img-contain" src={programming} alt="" />
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
              <a href="https://github.com/kpomm">github</a>
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
          </li>
          <li className="half-element rounded-element shadow-element">
            <img href="photos.html" className="img-cover" src={photography} alt="" />
          </li>
        </ul>
      </div>
      <div className="section" id="design">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element shadow-element">
            <img className="img-contain" src={design} alt="" />
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
                href="https://www.figma.com/@kpomm"
              >
                check out my figma
              </a>
            </p>
          </li>
        </ul>
      </div>
      <ContactMe />
    </div>
  );
}

export default Landing;
