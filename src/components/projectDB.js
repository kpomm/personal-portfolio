import kp5 from './pLogos/kp5.svg';
import StellarBites from './pLogos/StellarBites.svg';
import NatureNudge from './pLogos/NatureNudge.svg';
import MeU from './pLogos/MeU.png';

const projectDB = [
  {
    id: 1,
    title: 'kpshoot5',
    header: 'Off-term photo blog',
    desc: 'This is a super simple portfolio of my photos. They are exclusively taken on my off-term, 23F, while I live and work in New York City. This site is linked in my photography instagram, so it was designed with mobile users in mind.',
    skills: 'React',
    img: kp5,
  },
  {
    id: 2,
    title: 'StellarBites',
    header: 'Website for recipe recommendations',
    desc: 'This is a solo project I am currently working on! I am using react, the Spoonacular API, and the Random Image API to create a website that recommends recipes based on the food you have in your pantry! I am using Spoonacular API to curate recipes based on the ingredients you have, and Random Image API to show images of the ingredients you might be missing.',
    skills: 'React, APIs, Figma',
    img: StellarBites,
    repoLink: 'https://github.com/georgia-dawahare/MeU',
  },
  {
    id: 3,
    title: 'NatureNudge',
    header: 'App to connect users with nature',
    desc: 'Tasked with creating an app that encourages users to connect with the Earth, I worked with a partner to conduct UX research, create greyscales, conduct user testing, and create a high-fidelity prototype. The app itself allows users to search, plan, and share outdoor activities near them. As users log their outdoor activities, they earn achievements and unlock plants to put in their forest--a way to motivate users without creating stress.',
    skills: 'Figma',
    figmaLink: 'https://www.figma.com/file/wAWmdxi835jvcv3bdCpu8h/Final-Project%3A-KatherineP_AmandaD?type=design&node-id=186%3A1684&mode=design&t=ucAVFqAuHERMXR8b-1',
    img: NatureNudge,
  },
  {
    id: 4,
    title: 'MeU',
    header: 'Long-distance couples app',
    desc: 'In this project, I worked in a team of 6 to create an app for long-distance couples to maintain a strong connection despite the distance. My responsibilities in this project include the landing page, which utilized OpenWeather API and Expo Location to show users what their partner\'s city looks like at the moment. I also configured the module that allows users to change their partner\'s background.',
    skills: 'React Native, Expo, X-Code, APIs, Firebase',
    img: MeU,
    repoLink: 'https://github.com/georgia-dawahare/MeU',
    siteLink: 'https://expo.dev/@projectmeu/project-meu?serviceType=classic&distribution=expo-go',
  },
];

export default projectDB;
