import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import Photos from './Photos';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Particle from './Particle';

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
          </Routes>
        </div>
      </BrowserRouter>
      <Particle />
    </div>
  );
}

export default App;
