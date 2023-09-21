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
      <li className="project-list-item rounded-element glass-element">
        <div className="project-list-item-header">
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </div>
        <h4>{project.header}</h4>
        <h5>
          <HiWrenchScrewdriver style={iconStyle} />
          Skills:
          {' '}
          {project.skills}
        </h5>
        <p>
          <a href={project.repoLink}>Github/Figma Link</a>
        </p>
        <div className="project-footer">
          <p>
            <a href={project.siteLink}>Site Link</a>
          </p>
          <button className="project-button glass-element" type="submit" onClick={() => props.onProjectSelect(props.project)}>Learn More</button>
        </div>
      </li>
    );
  } else {
    return (
      <li className="project-list-item rounded-element shadow-element glass-element">
        <div className="project-list-item-header">
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </div>
        <h4>{project.header}</h4>
        <h5>
          <HiWrenchScrewdriver style={iconStyle} />
          Skills:
          {' '}
          {project.skills}
        </h5>
        <p>
          <a href={project.repoLink}>Github Link</a>
        </p>
        <div className="project-footer">
          <p>
            <a href={project.siteLink}>No site link</a>
          </p>
          <button className="project-button glass-element" type="submit" onClick={() => props.onProjectSelect(props.project)}>Learn More</button>
        </div>
      </li>
    );
  }
}

export default ProjectListItem;
