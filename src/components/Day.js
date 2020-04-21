import React from 'react';
import { Segment } from 'semantic-ui-react';

function Day(props) {
  return (
    <Segment>
      <h3>{props.day} | {props.location}</h3>
      <p>Hours: {props.hours} | Booth: {props.booth}</p>
    </Segment>
  );
}

export default Day;