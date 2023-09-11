import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import Counter from './counter';
import Nav from './Nav';
import Landing from './Landing';
import Photos from './Photos';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Apod from './Apod';
import Particle from './Particle';

// function Test(props) {
//   const { id } = useParams();
//   return (
//     <div>
//       {' '}
//       ID:
//       {' '}
//       {id}
//       {' '}
//     </div>
//   );
// }

// function FallBack(props) {
//   return <div>URL Not Found</div>;
// }

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

// app
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
            <Route path="/photos" element={<Photos />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/apod" element={<Apod />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Particle />
    </div>
  );
}

export default App;
