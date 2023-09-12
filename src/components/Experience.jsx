import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div className="section" id="experience">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(33, 37, 41, 0.2)', color: '#fff', borderStyle: 'solid', borderRadius: '15 px', backdropFilter: 'blur( 6px )',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="September 2022 - present"
          iconStyle={{ background: 'rgba(33, 37, 41, 1)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Technologist Intern @ Hume AI</h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            Working in a small team of frontend developers and UI/UX designers to transform UI/UX components into
            frontend components.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
