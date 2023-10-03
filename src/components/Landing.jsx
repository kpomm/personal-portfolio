/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { CaretDown } from '@phosphor-icons/react';
// import pfp from '../img/pfp.jpg';
import cptwn from '../img/cptwn.jpg';
import programming from '../img/programming.svg';
// import photography from '../img/photography.jpg';
import design from '../img/design.svg';
import aboutIcon from '../img/information-carousel.svg';
import ContactMe from './ContactMe';
import Divider from './Divider';
// import scienceGirl from '../img/scientist.svg';

function Landing() {
  return (
    <div>
      <div className="section" id="landing">
        <ul className="full-element">
          <li>
            {/* <img id="profile-pic" src={pfp} alt="" /> */}
            <h1>&gt;kpomm welcome to my page</h1>

            <h1>
              &gt;kpomm
              <span className="blink">_</span>
            </h1>
            {/* <div className="glass-element">
              <p>
                A rising junior at Dartmouth College interested in software development and UI/UX
                design.
              </p>
            </div> */}
          </li>
        </ul>
        {/* <CaretDown size={36} className="centered-icon" /> */}
      </div>

      <div id="about-me">
        <ul className="columns small-columns">
          <li className="glass-element">
            <h2>
              about me
            </h2>
            <p>
              My name is Katherine Pommerening I am a rising junior at Dartmouth College majoring in Computer
              Science Modified with Physics.
              As a student who is passionate and motivated in and out of the classroom, I am looking to work in a
              fast-paced environment that gives me the chance to pick up new skills and dive right in. This fall,
              I am working as a Creative Technologist intern for
              {' '}
              <span><a href="https://hume.ai/" target="_blank" rel="noopener noreferrer">Hume AI</a></span>
              {' '}
              in New York City. Outside of coding
              my hobbies include photography, skateboarding, and exploring the city!
            </p>
          </li>
          <li>
            <img id="about-me-logo" src={aboutIcon} alt="" />
          </li>
        </ul>
      </div>

      <Divider />

      <div className="text-header"><h6>...more about me</h6></div>

      <div className="section" id="physics">
        <ul className="columns smaller-columns">
          <li className="half-element align-left glass-element" id="about-me-text">
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
          <li className="half-element img-element rounded-element shadow-element">
            <img className="img-cover" src={cptwn} alt="" />
          </li>
          {/* <li className="half-element rounded-element">
            <img className="img-contain vector" src={scienceGirl} alt="" />
          </li> */}
        </ul>
      </div>

      <Divider />

      <div className="section" id="programming">
        <ul className="columns smaller-columns">
          <li className="half-element rounded-element">
            <img className="img-contain vector" src={programming} alt="" />
          </li>
          <li className="half-element align-left glass-element">
            <h2>programming</h2>
            <p>
              I am a dartmouth 25 majoring in computer science modified with
              physics. My interests in computer science include software
              engineering, fullstack development, and specifically React.
              I've worked with APIs, React Native, React and a few
              other tools. I have a collection of projects, both independent
              and from the cs52 (full-stack web development) course at Dartmouth
              that I am very proud of! This fall, I am a Creative Technologist Intern for Hume AI,
              a startup that is working to build empathetic AI tools!
            </p>
            <p>
              <a href="https://github.com/kpomm">github</a>
            </p>
          </li>
        </ul>
      </div>

      <Divider />

      <div className="section" id="design">
        <ul className="columns smaller-columns">
          <li className="half-element align-left glass-element">
            <h2>design</h2>
            <p>
              More recently, I explored my interest in UI/UX design. Taking
              cs52 (full-stack web development) at Dartmouth allowed me to explore
              my design interests in a programming setting. Taking a course solely dedicated to UI/UX taught me
              how to walk through the entire design process from user research
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
            <img className="img-contain vector" src={design} alt="" />
          </li>
        </ul>
      </div>

      <Divider />

      <div className="section" id="photography">
        <ul className="columns smaller-columns">
          {/* <li className="half-element img-element rounded-element shadow-element">
            <img href="photos.html" className="img-cover" src={photography} alt="" />
          </li> */}
          <li className="half-element align-left glass-element">
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
      <Divider />
      <div id="skills">
        <ul className="columns">
          <li>
            <h2>skills</h2>
          </li>
          <li className="glass-element">
            <div className="icons">
              <img className="skill-icon" alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <img className="skill-icon" alt="java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <img className="skill-icon" alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img className="skill-icon" alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
              <img className="skill-icon" alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img className="skill-icon" alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <img className="skill-icon" alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img className="skill-icon" alt="firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
              <img className="skill-icon" alt="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <img className="skill-icon" alt="figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
              <img className="skill-icon" alt="photoshop" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
            </div>
          </li>
        </ul>
      </div>
      <ContactMe />
    </div>
  );
}

export default Landing;
