import NatureNudge from './pLogos/NatureNudge.svg';
import MeU from './pLogos/MeU.png';

const projectDB = [
  {
    id: 2,
    title: 'StellarBites 🌠',
    type: 'Frontend',
    header: 'Website to curate recipes and encourage sustainability',
    desc: 'As a part of an application to a program, I was tasked with creating a site that uses 2-3 APIs to solve a problem. Some incentive was placed on integrating a seasonal theme with the functionality. I created a feature that allows users to filter good recipes based on ingredients the user has and the current season. Lastly, a farmer\'s market API was used to help encourage users to shop sustainably and for local fresh ingredients.',
    skills: 'React, APIs, Figma, CSS',
    repoLink: 'https://github.com/kpomm/stellarbites',
    siteLink: 'https://stellarbites.xyz',
  },
  {
    id: 3,
    title: 'NatureNudge 🪵',
    type: 'UI/UX',
    header: 'App to connect users with nature',
    desc: 'Tasked with creating an app that encourages users to connect with the Earth, I worked with a partner to conduct UX research, create greyscales, conduct user testing, and create a high-fidelity prototype. The app itself allows users to search, plan, and share outdoor activities near them. As users log their outdoor activities, they earn achievements and unlock plants to put in their forest--a way to motivate users without creating stress.',
    skills: 'Figma',
    figmaLink: 'https://www.figma.com/file/wAWmdxi835jvcv3bdCpu8h/Final-Project%3A-KatherineP_AmandaD?type=design&node-id=186%3A1684&mode=design&t=ucAVFqAuHERMXR8b-1',
    img: NatureNudge,
  },
  {
    id: 4,
    title: 'MeU 💞',
    type: 'Full-Stack',
    header: 'Long-distance couples app',
    desc: 'In this project, I worked in a team of 6 to create an app for long-distance couples to maintain a strong connection despite the distance. My responsibilities in this project include the landing page, which utilized OpenWeather API and Expo Location to show users what their partner\'s city looks like at the moment. I also configured the module that allows users to change their partner\'s background.',
    skills: 'React Native, Expo, X-Code, APIs, Firebase',
    img: MeU,
    repoLink: 'https://github.com/georgia-dawahare/MeU',
    siteLink: 'https://expo.dev/@projectmeu/project-meu?serviceType=classic&distribution=expo-go',
  },
];

export default projectDB;
