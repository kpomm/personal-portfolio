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
          iconStyle={{ background: '#89faa1', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Technologist Intern @ Hume AI</h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            Works in a small team of frontend developers and UI/UX designers to transform UI/UX components into
            frontend components.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(33, 37, 41, 0.2)', color: '#fff', borderStyle: 'solid', borderRadius: '15 px', backdropFilter: 'blur( 6px )',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="March 2022 - present"
          iconStyle={{ background: 'rgba(33, 37, 41, 1)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Teaching Assistant, Object Oriented Programming</h3>
          <h4 className="vertical-timeline-element-subtitle">Dartmouth College</h4>
          <p>
            Holds bi-weekly office hours for students to get help with assignments. Leads weekly recitation
            sessions to assist students with assignments and course content comprehension. Grades assignments and
            tests promptly providing individualized student feedback.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(33, 37, 41, 0.2)', color: '#fff', borderStyle: 'solid', borderRadius: '15 px', backdropFilter: 'blur( 6px )',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="January 2022 - August 2023"
          iconStyle={{ background: 'rgba(33, 37, 41, 1)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Research Assistant @ Lynch Rocket Lab</h3>
          <h4 className="vertical-timeline-element-subtitle">Dartmouth College</h4>
          <p>
            Develops data visualization in Python 2 and 3 to model auroral behavior from the perspective of a
            sounding rocket. Analyzes flight data from NASA’s Cusp Region Experiment-2 (CREX-2) and Loss through
            Auroral Microburst Pulsations (LAMP) missions to better understand auroral activity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(33, 37, 41, 0.2)', color: '#fff', borderStyle: 'solid', borderRadius: '15 px', backdropFilter: 'blur( 6px )',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="June 2022 - February 2023"
          iconStyle={{ background: 'rgba(33, 37, 41, 1)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Data Science Intern @ Aegis Mobile</h3>
          <h4 className="vertical-timeline-element-subtitle">Rockville, MD</h4>
          <p>
            Developed data science algorithms for various companies utilizing R and Python.
            Collaborated with team members to research and make inventory and financial strategic recommendations
            to clients
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
