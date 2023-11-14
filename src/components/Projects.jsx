/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';
import projectDB from './projectDB';

function Projects() {
  const [selectedProject, setSelected] = useState(projectDB[0]);
  console.log('selected project', selectedProject);
  return (
    <div id="project-container">
      <div id="project-list-container">
        <ProjectList onProjectSelect={(selection) => setSelected(selection)} projects={projectDB} />
      </div>
      <ProjectDetail project={selectedProject} />

    </div>
  );
}

export default Projects;
