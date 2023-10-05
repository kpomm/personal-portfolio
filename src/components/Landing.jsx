/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  CaretDown, Palette, IntersectThree, InstagramLogo, GithubLogo, FigmaLogo, Atom,
} from '@phosphor-icons/react';
import pfp from '../img/pfp.png';
import LandingGuy from '../img/LandingGuy.svg';
import ContactMe from './ContactMe';

import Divider from './Divider';

function Landing() {
  const iconStyle = { marginLeft: '10px' };
  const darkIconStyle = { marginLeft: '10px', color: '#212229' };

  return (
    <div id="landing-body">
      <div className="section" id="landing">
        <ul className="columns">
          <li>
            <h1>
              <span className="accent-text">K</span>
              atherine
            </h1>
            <h1>
              <span className="accent-text">Pomm</span>
              erening
              <span className="blink">_</span>
            </h1>
            <div id="job-carousel">
              <h3>
                Creative Technologist
                {'  '}
              </h3>
              <Palette size={40} style={iconStyle} />
            </div>
            <ContactMe />
          </li>
          <li className="half-element img-element" id="landing-img">
            <img src={LandingGuy} alt="" />
          </li>
        </ul>
        <CaretDown size={36} className="centered-icon" />
      </div>

      <div id="about-me">
        <ul className="columns small-columns">
          <li>
            <img id="about-me-logo" src={pfp} alt="" />
          </li>
          <li className="rounded-element">
            <h2>
              about me
            </h2>
            <p>
              My name is Katherine Pommerening I am a rising junior at Dartmouth College majoring in Computer Science Modified with Physics. My work in Dartmouth's physics and computer science departments prepared me to problem solve. I am a self-starter who loves to think of new projects in my free time, and love collaboration. My experiences span from
              {' '}
              <span className="bolded-text">Data Science</span>
              {' '}
              and
              {' '}
              <span className="bolded-text">Machine-Learning</span>
              {' '}
              to
              {' '}
              <span className="bolded-text">Web Development</span>
              {' '}
              and
              {' '}
              <span className="bolded-text">UI/UX Design</span>
              . I am working as a Creative Technologist intern for
              {' '}
              <span><a href="https://hume.ai/" target="_blank" rel="noopener noreferrer">Hume AI</a></span>
              {' '}
              in New York City. Outside of coding
              my hobbies include photography, skateboarding, and exploring the city!
            </p>
          </li>
        </ul>
      </div>

      <Divider />

      <div className="text-header">
        <h6>my big three</h6>
        <IntersectThree id="big-three-logo" size={50} style={darkIconStyle} />
      </div>

      <div className="section">
        <ul className="columns">
          <li className="third-element">
            <div>
              <h2>physics</h2>
              <p>
                I have been researching at The Lynch Rocket Lab at Dartmouth for 2 years now. The lab builds rockets in conjunction with NASA which are launched every 6 months. I use Python 2 to analyze auroral data from these sounding rockets, to learn more about the mystery that is the magnetosphere.
              </p>
            </div>

            <p>
              <a href="https://sites.dartmouth.edu/lynch-rocket-lab/" target="_blank" rel="noopener noreferrer" className="flex-row blue">
                <Atom size={24} />
                My Research
              </a>
            </p>
          </li>
          <li className="third-element">
            <div>
              <h2>programming</h2>
              <p>
                As a self-starter with strong organizational skills, I am a teaching assistant for object-oriented programming and will a teaching assistant for full-stack web development this coming spring. This winter, I also plan to start work at the Digital Applied Learning and Innovation lab as a developer.
              </p>

            </div>
            <p>
              <a href="https://github.com/kpomm" target="_blank" rel="noopener noreferrer" className="flex-row purple">
                <GithubLogo size={24} />
                Github
              </a>
            </p>

          </li>
          <li className="third-element">
            <div>
              <h2>design</h2>
              <p>
                I am a Creative Technologist intern at Hume AI. I work between Figma and VSCode on the daily, transforming Figma prototypes into React components, effectively implementing the company's creative vision. I also have extensive experience with Adobe Photoshop and Illustrator, which I use alongside my photography business.
              </p>
            </div>
            <p>
              <a href="https://figma.com/@kpomm" target="_blank" rel="noopener noreferrer" className="flex-row pink">
                <FigmaLogo size={24} />
                Figma
              </a>
            </p>
          </li>
        </ul>
      </div>
      <Divider />
      <div className="section" id="photography">
        <ul className="columns">
          <li className="half-element glass-element">
            <div>
              <h2 className="accent-color-text">also, I take pictures.</h2>
              <p className="accent-color-text">I've been taking pictures since 2019, and have explored all mediums including 35mm, 120mm, super8, and digital. I've been freelancing since 2021 and love it almost as much as web development :P</p>

            </div>
            <p>
              <a href="https://instagram.com/kpshoot5" target="_blank" rel="noopener noreferrer" className="accent-color-text flex-row">
                <InstagramLogo size={20} />
                Instagram
              </a>

            </p>
          </li>
        </ul>
      </div>
      <div id="skills">
        <ul className="columns">
          <li>
            <h2>skills</h2>
          </li>
          <li className="rounded-element">
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
      <Divider />
    </div>
  );
}

export default Landing;
