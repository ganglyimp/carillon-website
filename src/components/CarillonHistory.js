import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import earliestCarillonneur from '../images/Earliest_Carillonneur_Picture.png';

import '../stylesheets/CarillonHistory.css';
import 'react-vertical-timeline-component/style.min.css';

function CarillonHistory() {
  return (
    <div className='CarillonHistory'>
      <VerticalTimeline className='history-timeline'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="1619"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <div className='history-image'>
            <img src={earliestCarillonneur} alt='Earliest Carillonneur' />
          </div>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
      <p>Some Text.</p>
    </div>
  );
}

export default CarillonHistory;

