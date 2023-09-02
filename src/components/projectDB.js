import StellarBites from './pLogos/StellarBites.svg';
import MeU from './pLogos/MeU.png';

const projectDB = [
  {
    id: 1,
    title: 'StellarBites',
    header: 'Website for recipe recommendations',
    desc: 'This is a solo project I am currently working on! I am using react, the Spoonacular API, and the Random Image API to create a website that recommends recipes based on the food you have in your pantry! I am using Spoonacular API to curate recipes based on the ingredients you have, and Random Image API to show images of the ingredients you might be missing.',
    skills: 'React, APIs',
    img: StellarBites,
    repoLink: 'https://github.com/georgia-dawahare/MeU',
    siteLink: 'https://stellarbites.xyz',
  },
  {
    id: 2,
    title: 'MeU',
    header: 'Long-distance couples app',
    desc: 'In this project, I worked in a team of 6 to create an app for long-distance couples to maintain a strong connection despite the distance. My responsibilities in this project include the landing page, which utilized OpenWeather API and Expo Location to show users what their partner\'s city looks like at the moment. I also configued the module that allows users to change their partner\'s background.',
    skills: 'React Native, Expo, X-Code, APIs, Firebase',
    img: MeU,
    repoLink: 'https://github.com/georgia-dawahare/MeU',
    siteLink: 'https://expo.dev/@projectmeu/project-meu?serviceType=classic&distribution=expo-go',
  },
];

export default projectDB;
