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
              <a href="#design">design</a>
            </h2>
            <h2>
              <a href="#photography">photography</a>
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
              As a researcher in Dartmouth's Physics Department, I'm very
              passionate about how the world around me works, especially space.
              This past winter, I had the opportunity to conduct research at the
              South African Large Telescope, where I stayed for a week. I would
              stay up all night and sleep during the day -- would not recommend
              for long stretches of time.
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
          <li className="half-element rounded-element">
            <img className="img-contain" src={programming} alt="" />
          </li>
          <li className="half-element align-left">
            <h2>programming</h2>
            <p>
              I am a dartmouth 25 majoring in computer science modified with
              physics. My interests in computer science include software
              engineering, fullstack development, and specifically React.
              I've worked with APIs, React Native, React and a few
              other tools. I have a collection of projects, both independent
              and from the cs52 (full-stack web development) course at Dartmouth
              that I am very proud of!
            </p>
            <p>
              <a href="https://github.com/kpomm">github</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="section" id="design">
        <ul className="columns smaller-columns">
          <li className="half-element align-left">
            <h2>design</h2>
            <p>
              More recently, I explored my interest in UI/UX design. taking
              cs52 (full-stack web development) at Dartmouth allowed me to explore
              my design interests in a programming setting, but just finished up a term of UI/UX
              design, where I learned how to walk through the entire design process from user research
              to final prototypes and a case study. My personal design work will be updated below as I take on
              more projects.
            </p>
            <p>
              <a
                href="https://www.figma.com/@kpomm"
              >
                check out my figma
              </a>
            </p>
          </li>
          <li className="half-element">
            <img className="img-contain" src={design} alt="" />
          </li>
        </ul>
      </div>
      <div className="section" id="photography">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element shadow-element">
            <img href="photos.html" className="img-cover" src={photography} alt="" />
          </li>
          <li className="half-element align-left">
            <h2>photography</h2>
            <p>
              I've been taking pictures since 2019. Over my gap year before
              college, I worked a lot of freelance and took a roadtrip that
              culminated in a lot of awesome pictures. I still take a lot of
              pictures but now work primarily in 35mm and 120mm film. I still
              carry a small digital camera on me, and primarily focus on street
              photography!
            </p>
            <p>
              This fall, I am living and working in New York. Check out my recent stuff from that below!
              You can also check out my photos page, where I keep my favorite pictures.
            </p>
          </li>
        </ul>
      </div>
      <ContactMe />
    </div>
  );
}

export default Landing;
