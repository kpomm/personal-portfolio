/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';
import projectDB from './projectDB';
import Divider from './Divider';

function Projects() {
  const [selectedProject, setSelected] = useState(projectDB[0]);
  console.log('selected project', selectedProject);
  return (
    <div>
      <div id="project-container">
        <div id="project-list-container">
          <ProjectList onProjectSelect={(selection) => setSelected(selection)} projects={projectDB} />
        </div>
        <ProjectDetail project={selectedProject} />

      </div>

    </div>

  );
}

export default Projects;
