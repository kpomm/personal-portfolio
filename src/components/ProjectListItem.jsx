/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

function ProjectListItem(props) {
  console.log('test print props', props);
  const { project } = props;
  const iconStyle = { marginRight: '10px' };
  console.log(props.project.img);
  if (props.project.siteLink != null) {
    return (
      <li className="project-list-item rounded-element shadow-element">
        <div className="project-list-item-header">
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </div>
        <h4>{project.header}</h4>
        <h4>
          <HiWrenchScrewdriver style={iconStyle} />
          Skills:
          {' '}
          {project.skills}
        </h4>
        <h4>
          <a href={project.repoLink}>Github Link</a>
        </h4>
        <div className="project-footer">
          <h4>
            <a href={project.siteLink}>Site Link</a>
          </h4>
          <button className="project-button shadow-element" type="submit" onClick={() => props.onProjectSelect(props.project)}>Learn More</button>
        </div>
      </li>
    );
  } else {
    return (
      <li className="project-list-item rounded-element shadow-element">
        <div className="project-list-item-header">
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </div>
        <h4>{project.header}</h4>
        <h4>
          <HiWrenchScrewdriver style={iconStyle} />
          Skills:
          {' '}
          {project.skills}
        </h4>
        <h4>
          <a href={project.repoLink}>Github Link</a>
        </h4>
        <div className="project-footer">
          <h4>
            <a href={project.siteLink}> </a>
          </h4>
          <button className="project-button shadow-element" type="submit" onClick={() => props.onProjectSelect(props.project)}>Learn More</button>
        </div>
      </li>
    );
  }
}

export default ProjectListItem;
