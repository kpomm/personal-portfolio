/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';
import { CaretRight } from '@phosphor-icons/react';

function ProjectListItem(props) {
  console.log('test print props', props);
  const { project } = props;
  console.log(props.project.img);

  return (
    <li className="project-list-item rounded-element" onClick={() => props.onProjectSelect(props.project)}>
      <div className="flex-row project-list-item-header">
        <h5>{project.title}</h5>
        <CaretRight size={20} />
        {/* <img src={project.img} alt="" /> */}
      </div>
    </li>
  );
}

export default ProjectListItem;
