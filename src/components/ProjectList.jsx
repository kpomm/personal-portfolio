/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList(props) {
  const projectItems = props.projects.map((project) => {
    console.log(project.title);
    return <ProjectListItem onProjectSelect={props.onProjectSelect} key={project.id} project={project} />;
  });

  return (
    <div>
      { projectItems }
    </div>
  );
}

export default ProjectList;
