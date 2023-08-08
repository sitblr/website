"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


export default function TimelineComponent({ 
  startTime,
  endTime
}: {
  startTime: string,
  endTime: string
}) {
    return (
      <div className='flex items-start'>
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            {startTime}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          {/* <TimelineContent></TimelineContent> */}
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            {endTime}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          {/* <TimelineContent></TimelineContent> */}
        </TimelineItem>
      </Timeline>
      </div>
    );
  }