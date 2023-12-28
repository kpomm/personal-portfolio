import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import Experience from './Experience';
import ProjectsPage from './ProjectsPage';
import ContactMePage from './ContactMePage';
import Photos from './Photos';

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
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact-me" element={<ContactMePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
