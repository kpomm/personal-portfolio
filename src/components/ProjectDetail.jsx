import React from 'react';
import {
  Lightning, GithubLogo, Browsers, FigmaLogo,
} from '@phosphor-icons/react';

function ProjectDetail({ project }) {
  const iconStyle = { marginRight: '5px' };
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div id="project-detail" className="rounded-element">
      <div>
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          {project.img ? <img src={project.img} alt="" /> : null}

        </div>
        <h4>
          {project.type}
          {' '}
          Project
          :
          {' '}

          {project.header}
        </h4>
        <p>{project.desc}</p>

      </div>

      <div>
        <div className="flex-row">
          <Lightning size={28} style={iconStyle} className="accent-color" />
          <h5>
            Skills:
            {' '}
            {project.skills}
          </h5>
        </div>
        {project.figmaLink
        && (
          <div className="flex-row">
            <FigmaLogo size={28} style={iconStyle} className="accent-color" />
            <h5>
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">Figma</a>
            </h5>
          </div>
        )}
        {project.repoLink
        && (
          <div className="flex-row">
            <GithubLogo size={28} style={iconStyle} className="accent-color" />
            <h5>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
            </h5>
          </div>
        )}
        {project.siteLink
        && (
          <div className="flex-row">
            <Browsers size={28} style={iconStyle} className="accent-color" />
            <h5>
              <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Site</a>
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
