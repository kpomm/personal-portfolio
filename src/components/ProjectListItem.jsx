/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Lightning, Browsers,
} from '@phosphor-icons/react';

function ProjectListItem(props) {
  console.log('test print props', props);
  const { project } = props;
  const iconStyle = { marginRight: '5px' };
  console.log(props.project.img);

  return (
    <li className="project-list-item rounded-element glass-element">
      <div>
        <div className="project-list-item-header">
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </div>
        <h4>{project.header}</h4>
      </div>
      <div className="flex-row">
        <Lightning size={24} style={iconStyle} className="accent-color" />
        <h5>
          Skills:
          {' '}
          {project.skills}
        </h5>
      </div>
      <div className="project-footer">
        {project.siteLink
        && (
          <div className="flex-row">
            <Browsers size={24} style={iconStyle} className="accent-color" />
            <h5>
              <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Site</a>
            </h5>
          </div>
        )}
        {!project.siteLink
        && (
          <div className="flex-row">
            <Browsers size={24} style={iconStyle} className="accent-color" />
              {project.siteLink && (
                <h5>
                  <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Site</a>

                </h5>
              )}
              {!project.siteLink && (
              <h5>No site yet :/</h5>
              )}
          </div>
        )}
        <button className="project-button glass-element" type="submit" onClick={() => props.onProjectSelect(props.project)}>Learn More</button>
      </div>
    </li>
  );
}

export default ProjectListItem;
