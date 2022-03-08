import { React, useState} from 'react';

//import earliestCarillonneur from '../images/Earliest_Carillonneur_Picture.png';

/* TO DO:
 * Timeline reference: http://sherubthakur.github.io/react-horizontal-timeline/
 * 4. Add buttons to scroll through events
 * 5. When events overflow, hide events instead of overlowing to next line. Use buttons to scroll to overflow elements
 * 7. Swipe animation when changing events.
 */

import '../stylesheets/Timeline.css';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
  const [timelineWidth, setTimelineWidth] = useState(0);

  const timelineHandleClick = (e, time) => {
    setTimelineWidth(e.target.getBoundingClientRect().x + (e.target.offsetWidth / 2) - 15);
    props.setTime(time);
  }

  return (
    <div className='Timeline'>
      <div className='timeline-events'>
        { props.dates && props.dates.map((item, index) => {
          return(
            <li className={(props.time === index) ? 'timeline-active' : ''}>
              <b onClick={(e) => {timelineHandleClick(e, index)}}>{item}</b>
              <div className='timeline-circle' />
            </li>
          );
        })
        }
      </div>
      <div className='timeline-bar' style={{width: timelineWidth}}/>
    </div>
  );
}

export default Timeline;