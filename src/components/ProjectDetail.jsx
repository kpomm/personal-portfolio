import React from 'react';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

function ProjectDetail({ project }) {
  const iconStyle = { marginRight: '10px' };
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div id="project-detail" className="rounded-element shadow-element">
      <div className="project-list-item-header">
        <h2>{project.title}</h2>
        <img src={project.img} alt="" />
      </div>
      <h3>{project.header}</h3>
      <p>{project.desc}</p>
      <h3>
        <HiWrenchScrewdriver style={iconStyle} />
        Skills:
        {' '}
        {project.skills}
      </h3>
      <h4><a href={project.repoLink}>Github Link</a></h4>
      <h4>
        <a href={project.siteLink}>
          <a href={project.siteLink}>Site Link</a>
        </a>
      </h4>
    </div>
  );
}

export default ProjectDetail;
